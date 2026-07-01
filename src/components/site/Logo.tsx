import { Link } from "react-router-dom";
import logoDark from "@/assets/logo.svg";
import logoLight from "@/assets/logo-light.svg";

export const Logo = ({ light = false }: { light?: boolean }) => {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="kirken.dk">
      <img
        src={light ? logoLight : logoDark}
        alt="kirken.dk — find kirker i hele Danmark"
        width={1916}
        height={640}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className="h-16 w-auto"
      />
    </Link>
  );
};