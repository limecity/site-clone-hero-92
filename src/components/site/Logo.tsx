import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => {
  const color = light ? "text-sand" : "text-forest";
  return (
    <Link to="/" className={`flex items-center gap-3 ${color}`}>
      <svg
        viewBox="0 0 48 60"
        className="h-12 w-10"
        fill="currentColor"
        aria-hidden="true"
      >
        <defs>
          <mask id="kirken-logo-mask">
            <rect width="48" height="60" fill="white" />
            <rect x="21" y="10" width="6" height="22" rx="1" fill="black" />
            <rect x="14" y="17" width="20" height="6" rx="1" fill="black" />
          </mask>
        </defs>
        <path
          d="M24 0C10.745 0 0 10.745 0 24c0 16.5 19 32.5 22.4 35.2a2.6 2.6 0 0 0 3.2 0C29 56.5 48 40.5 48 24 48 10.745 37.255 0 24 0Z"
          mask="url(#kirken-logo-mask)"
        />
      </svg>
      <div className="leading-tight">
        <div className="font-serif text-2xl">kirken.dk</div>
        <div className="text-[10px] uppercase tracking-[0.15em] opacity-80">
          Find kirker i hele Danmark
        </div>
      </div>
    </Link>
  );
};