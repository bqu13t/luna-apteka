import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <h2>Ошибка 404. Запрашиваемая страница не найдена</h2>
        <p>Похоже такой странички не существует</p>
        <Link href="/">Вернуться на главную страницу</Link>
      </main>
      <Footer />
    </>
  );
}
