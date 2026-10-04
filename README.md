# موزهٔ نگار (React + Vite)

صفحهٔ فرود فارسی و راست‌به‌چپ برای یک موزهٔ خیالی، ساخته‌شده با React 18 و Vite.

## اجرا

```bash
npm install
npm run dev
```

بعد `http://127.0.0.1:5174` را باز کنید. برای نسخهٔ نهایی:

```bash
npm run build
npm run preview
```

## آدرس عمومی

نسخهٔ زنده: https://akabiri3900.github.io/museum/

سایت از شاخهٔ `gh-pages` همین مخزن روی GitHub Pages سرو می‌شود. کد منبع روی `main` است.

برای به‌روزرسانی سایت:

```bash
npm run build          # پوشهٔ dist و 404.html را می‌سازد
```

بعد محتوای `dist` را (به‌علاوهٔ یک فایل خالی `.nojekyll`) روی شاخهٔ `gh-pages` بفرستید. `404.html` لازم است تا ورود مستقیم به آدرس‌هایی مثل `/museum/ceramics` کار کند.

اگر دامنهٔ واقعی خریدید: در تنظیمات Pages دامنه را ثبت کنید، رکوردهای DNS را طبق راهنمای GitHub بسازید، و در `vite.config.js` مقدار `base` را برای ریشه (`"/"`) عوض کنید.

## ساختار

- `src/data.js`: همهٔ متن‌ها و فهرست آثار. برای عوض‌کردن محتوا فقط همین فایل را ویرایش کنید.
- `src/components/`: هر بخش صفحه یک کامپوننت است (Hero، Exhibitions، About، OnView، Collections، Faq، Footer، BookingDialog).
- `src/components/Objects.jsx`: اشیای باستانی به‌صورت SVG.
- `src/styles.css`: همهٔ استایل‌ها با ویژگی‌های منطقی (`inline-start`/`inline-end`) تا راست‌به‌چپ درست کار کند.
- `public/images/`: تصاویر آثار. برای جایگزینی، فایل هم‌نام بگذارید یا مسیرها را در `data.js` عوض کنید.

## نکته‌ها

- وقت‌گیری نمایشی است و رزروی ثبت نمی‌کند.
- نام‌ها، تاریخ‌ها و نشانی ساختگی‌اند.
- فونت وزیرمتن از Google Fonts بارگذاری می‌شود.
