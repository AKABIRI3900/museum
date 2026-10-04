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
