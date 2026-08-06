import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#171717', color: '#fff', border: '1px solid #333' } }} />
      {children}
    </NextIntlClientProvider>
  );
}