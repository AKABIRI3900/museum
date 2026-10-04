import { useEffect, useRef } from "react";
import { RouterProvider, useRouter } from "./router";
import { BookingProvider } from "./booking";
import { CATEGORIES } from "./categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import useRipple from "./useRipple";

function Routes() {
  const { path } = useRouter();
  useRipple();
  const mainRef = useRef(null);
  const category = CATEGORIES.find((c) => c.path === path);

  // عنوان تب را به‌روز کن و بعد از تغییر صفحه فوکوس را به محتوا ببر (برای صفحه‌خوان و کیبورد)
  useEffect(() => {
    document.title = category ? `${category.title} | موزهٔ نگار` : "موزهٔ نگار";
    mainRef.current?.focus({ preventScroll: true });
  }, [category]);

  return (
    <>
      <a className="skip" href="#main">
        رفتن به محتوا
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {category ? <CategoryPage category={category} key={category.slug} /> : <Home />}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <BookingProvider>
        <Routes />
      </BookingProvider>
    </RouterProvider>
  );
}
