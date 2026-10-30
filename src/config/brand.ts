// Single source of truth for brand facts (CLAUDE.md §2, BRAND_GUIDE.md). Import from here
// instead of hard-coding names, emails or domains in components.
//
// Contact values left as '' are not known yet. UI that would show them must hide itself
// (see useCompanyContact). Never fill these with made-up numbers or addresses.

export const COMPANY: string = 'GAW Parcel Delivery Ltd';
export const COMPANY_SHORT: string = 'GAW Parcel Delivery';
export const LEGAL_NAME: string = 'GAW Parcel Delivery Ltd';
export const TAGLINE = 'Fast • Safe • Worldwide';

export const EMAIL = 'info@gawparceldeliveryltd.com';
export const DOMAIN = 'gawparceldeliveryltd.com';
export const SITE_URL = `https://${DOMAIN}`;

// Logo files in Public/brand (BRAND_GUIDE §6). Full colour on light surfaces, white on Ink.
// /brand files are cached for 30 days: bump ?v= whenever the artwork changes.
export const LOGO = '/brand/logo.png?v=7';
export const LOGO_WHITE = '/brand/logo-white.png?v=7';
// Intrinsic size of the full-size PNGs above.
export const LOGO_WIDTH = 2001;
export const LOGO_HEIGHT = 576;
export const LOGO_ALT = COMPANY;
// Small WebP copies (104 px tall, 2x the header's tallest size) for the site header and footer.
// The full-size PNGs above stay for the PDFs and the admin console.
export const LOGO_WEB = '/brand/logo-web.webp?v=7';
export const LOGO_WHITE_WEB = '/brand/logo-white-web.webp?v=7';
export const LOGO_WEB_WIDTH = 361;
export const LOGO_WEB_HEIGHT = 104;

// The admin console lives at this path on the main domain, served by the same app and API
// (plus #/admin on localhost for development). Never listed in robots.txt or the sitemap.
export const ADMIN_PATH = '/private-user/';
export const ADMIN_URL = `${SITE_URL}${ADMIN_PATH}`;

// True only for the admin path itself, with or without the trailing slash, any case.
// '/private-user-x', '/private-users' and '/private-user/anything' don't match.
export function isAdminPathname(pathname: string): boolean {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '');
  return normalized === ADMIN_PATH.replace(/\/+$/, '');
}
export const ADMIN_CONSOLE_NAME = `${COMPANY_SHORT} Operations Console`;

// Role label shown in the admin UI (CONTENT §10), also written as the operator on new records.
export const ADMIN_ROLE_LABEL = 'Administrator';
// Older records may store the operator as "Super Admin". They're left as
// stored (audit history is not rewritten); the UI shows the current label instead.
export function displayOperator(operator?: string | null): string {
  return !operator || operator === 'Super Admin' ? ADMIN_ROLE_LABEL : operator;
}
// Public-facing desk names (CONTENT §10).
export const OPERATIONS_CENTRE = `${COMPANY_SHORT} Operations Centre`;
export const INTAKE_DESK = `${COMPANY_SHORT} Intake Desk`;

// Tracking ID = prefix + 6 characters, 8 total (BRAND_GUIDE §7).
export const TRACKING_PREFIX = 'GW';
// Example ID for placeholders and help text.
export const TRACKING_ID_EXAMPLE = `${TRACKING_PREFIX}7K2M9P`;

// Non-tracking references (tickets, invoices, seals) start with this, e.g. GW-TKT-123456.
export const REFERENCE_PREFIX = 'GW';

// TBD: supplied by the owner.
export const PHONE = '';
export const WHATSAPP = '';
export const HQ_ADDRESS = '';

export const SOCIAL = {
  facebook: '',
  x: '',
  instagram: '',
  linkedin: '',
  youtube: '',
};

// Smartsupp live chat widget key (public: it ships in the page). Loaded on the public site only by
// src/services/liveChat.ts. Set to '' to turn the chat off (off for launch: no key for this site yet).
export const SMARTSUPP_KEY = '';

export type SocialNetwork = keyof typeof SOCIAL;
