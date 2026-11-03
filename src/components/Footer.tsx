import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/icons";

const shopLinks = [
  { label: "Shop all", href: "#shop" },
  { label: "Samples & Singles", href: "#shop" },
];

const companyLinks = [
  { label: "Shipping and Delivery", href: "#" },
  { label: "Returns and Exchanges", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TiktokIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-forest-800/95 text-cream-100/80">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-cream-100">
              Shop
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-cream-100">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-cream-100">
              Follow
            </h3>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 transition-colors hover:border-cream-100/50 hover:text-cream-100"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-100/10 pt-8 text-center text-sm">
          © Cap Pure. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
