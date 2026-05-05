import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-forest text-sand">
    <div className="container flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
      <div>
        <Logo light />
        <p className="mt-3 max-w-md text-sm text-sand/70">
          Find kirker i hele Danmark — folkekirker og frikirker.
        </p>
      </div>
      <p className="text-sm text-sand/70">© 2026 kirken.dk</p>
    </div>
  </footer>
);