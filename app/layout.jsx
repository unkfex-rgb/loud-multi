import "./globals.css";

export const metadata = {
  title: "LOUD MULTI",
  description: "Multi Stream Hub da LOUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
