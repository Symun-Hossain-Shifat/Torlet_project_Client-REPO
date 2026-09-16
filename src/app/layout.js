import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}