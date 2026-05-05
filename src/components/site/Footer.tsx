import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border bg-sand">
    <div className="container flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
      <div>
        <Logo />
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Find kirker i hele Danmark — folkekirker og frikirker.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 kirken.dk</p>
    </div>
  </footer>
);