import "./globals.css";

export const metadata = {
  title: "Book a Room App",
  description: "Created by Ivan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
