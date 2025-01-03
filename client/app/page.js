import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="inner-content">
        <h1>Boka ett rum</h1>
        <Link className="book-button" href="/rooms">
          Boka
        </Link>
      </div>
    </main>
  );
}
