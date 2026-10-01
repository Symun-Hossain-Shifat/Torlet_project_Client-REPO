import { FaWhatsapp } from "react-icons/fa";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" className="dark" suppressHydrationWarning>
      <body>


        {children}

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href="https://wa.me/96897297547"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

      </body>
    </html>
  );
}