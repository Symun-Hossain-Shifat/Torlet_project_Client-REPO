import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api)
    // - Static files (/favicon.ico, etc.)
    // - Next.js internals (_next, _vercel)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match root page '/'
    '/'
  ]
};
