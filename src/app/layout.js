import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}