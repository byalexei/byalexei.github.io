# -*- coding: utf-8 -*-
"""
Генерирует картинки для превью ссылок и иконки сайта.

    python tools/og-image.py

На выходе (в корне сайта):
    og-image-en.jpg, og-image-ru.jpg   — карточки 1200×630 для мессенджеров и соцсетей
    favicon.svg                        — иконка вкладки (векторная)
    favicon-32.png, apple-touch-icon.png — иконки для старых браузеров и iPhone

Тексты берутся из data.js, фото — photo.jpg.
Нужен Python с библиотекой Pillow и шрифт Segoe UI (есть в Windows).
"""

import json, re, subprocess, sys, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Русские сообщения в консоли Windows
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

# --- Данные из data.js (через node, чтобы не парсить JS вручную) ------------
site = json.loads(subprocess.check_output(
    ['node', '-e', 'process.stdout.write(JSON.stringify(require("./data.js")))'],
    encoding='utf-8'))

ACCENT  = site['accent']
ACCENT2 = site['accent2']
FONT_DIR = r'C:\Windows\Fonts'
BOLD    = os.path.join(FONT_DIR, 'segoeuib.ttf')
REGULAR = os.path.join(FONT_DIR, 'segoeui.ttf')

def hex2rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def gradient(size, c1, c2, angle_diag=True):
    """Диагональный градиент c1 -> c2."""
    w, h = size
    img = Image.new('RGB', size)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = (x / w + y / h) / 2 if angle_diag else x / w
            px[x, y] = lerp(c1, c2, t)
    return img

def circle_photo(diam, ring=8):
    """Фото в круге с градиентным кольцом."""
    photo = Image.open(site['photo']).convert('RGB').resize((diam, diam), Image.LANCZOS)
    mask = Image.new('L', (diam * 4, diam * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, diam * 4, diam * 4), fill=255)
    mask = mask.resize((diam, diam), Image.LANCZOS)

    full = diam + ring * 2
    ring_img = gradient((full, full), hex2rgb(ACCENT), hex2rgb(ACCENT2))
    ring_mask = Image.new('L', (full * 4, full * 4), 0)
    ImageDraw.Draw(ring_mask).ellipse((0, 0, full * 4, full * 4), fill=255)
    ring_mask = ring_mask.resize((full, full), Image.LANCZOS)

    out = Image.new('RGBA', (full, full), (0, 0, 0, 0))
    out.paste(ring_img, (0, 0), ring_mask)
    out.paste(photo, (ring, ring), mask)
    return out

def wash(canvas, center, radius, color, alpha):
    """Мягкое цветное пятно — как на первом экране сайта."""
    layer = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    x, y = center
    d.ellipse((x - radius, y - radius, x + radius, y + radius), fill=color + (alpha,))
    layer = layer.filter(ImageFilter.GaussianBlur(radius * 0.55))
    canvas.alpha_composite(layer)

def fit_text(draw, text, font_path, max_width, start, minimum):
    """Уменьшает кегль, пока строка не влезет."""
    size = start
    while size > minimum:
        font = ImageFont.truetype(font_path, size)
        if draw.textlength(text, font=font) <= max_width:
            return font
        size -= 2
    return ImageFont.truetype(font_path, minimum)

def wrap(draw, text, font, max_width):
    words, lines, cur = text.split(), [], ''
    for w in words:
        trial = (cur + ' ' + w).strip()
        if draw.textlength(trial, font=font) <= max_width:
            cur = trial
        else:
            lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines

# --- Карточка 1200×630 -------------------------------------------------------
def og_card(lang):
    t = site[lang]
    W, H = 1200, 630
    img = Image.new('RGBA', (W, H), (255, 255, 255, 255))
    wash(img, (80, -40), 420, hex2rgb(ACCENT), 60)
    wash(img, (1180, 40), 380, hex2rgb(ACCENT2), 60)

    # Фото слева
    photo = circle_photo(330, ring=9)
    img.alpha_composite(photo, (90, (H - photo.height) // 2))

    d = ImageDraw.Draw(img)
    x0 = 480
    max_w = W - x0 - 70

    name_font = fit_text(d, t['hero']['name'], BOLD, max_w, 72, 48)
    role_font = fit_text(d, t['hero']['role'], REGULAR, max_w, 36, 26)
    tag_font  = ImageFont.truetype(REGULAR, 24)
    url_font  = ImageFont.truetype(REGULAR, 22)

    tagline = t['meta']['ogDescription']
    tag_lines = wrap(d, tagline, tag_font, max_w)[:3]

    # Вертикальная компоновка по центру
    gap = 14
    h_name = name_font.size + 6
    h_role = role_font.size + 6
    h_tag  = len(tag_lines) * (tag_font.size + 10)
    total  = h_name + gap + h_role + gap * 2 + h_tag
    y = (H - total) // 2 - 14

    ink = (20, 22, 26)
    d.text((x0, y), t['hero']['name'], font=name_font, fill=ink)
    y += h_name + gap

    # Должность — градиентным цветом (рисуем через маску)
    role_txt = t['hero']['role']
    role_w = int(d.textlength(role_txt, font=role_font)) + 4
    role_h = role_font.size + 12
    grad = gradient((role_w, role_h), hex2rgb(ACCENT), hex2rgb(ACCENT2), angle_diag=False).convert('RGBA')
    mask = Image.new('L', (role_w, role_h), 0)
    ImageDraw.Draw(mask).text((0, 0), role_txt, font=role_font, fill=255)
    img.paste(grad, (x0, y), mask)
    y += h_role + gap * 2

    for line in tag_lines:
        d.text((x0, y), line, font=tag_font, fill=(79, 86, 99))
        y += tag_font.size + 10

    # Полоска и адрес внизу
    bar = gradient((W, 8), hex2rgb(ACCENT), hex2rgb(ACCENT2), angle_diag=False)
    img.paste(bar, (0, H - 8))
    domain = site['url'].replace('https://', '')
    d.text((x0, H - 60), domain, font=url_font, fill=(102, 112, 133))

    out = 'og-image-%s.jpg' % lang
    img.convert('RGB').save(out, quality=88, optimize=True)
    print('  ' + out)

# --- Иконки сайта -----------------------------------------------------------
def favicons():
    letters = ''.join(w[0] for w in site['en']['hero']['name'].split()[:2]).upper()

    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/>
  </linearGradient></defs>
  <circle cx="32" cy="32" r="32" fill="url(#g)"/>
  <text x="32" y="41" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#fff">%s</text>
</svg>
''' % (ACCENT, ACCENT2, letters)
    with open('favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg)
    print('  favicon.svg')

    def png(size, name):
        scale = 4
        S = size * scale
        img = gradient((S, S), hex2rgb(ACCENT), hex2rgb(ACCENT2)).convert('RGBA')
        mask = Image.new('L', (S, S), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, S, S), fill=255)
        out = Image.new('RGBA', (S, S), (0, 0, 0, 0))
        out.paste(img, (0, 0), mask)
        d = ImageDraw.Draw(out)
        font = ImageFont.truetype(BOLD, int(S * 0.42))
        bbox = d.textbbox((0, 0), letters, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        d.text(((S - tw) / 2 - bbox[0], (S - th) / 2 - bbox[1]), letters, font=font, fill=(255, 255, 255))
        out.resize((size, size), Image.LANCZOS).save(name)
        print('  ' + name)

    png(32, 'favicon-32.png')
    png(180, 'apple-touch-icon.png')

print('Картинки для превью и иконки:')
og_card('en')
og_card('ru')
favicons()
print('Готово.')
