
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "LOUD MULTI",
  description: "Multi Stream Hub da LOUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="background" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
