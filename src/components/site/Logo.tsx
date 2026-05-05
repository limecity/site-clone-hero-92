import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.webp";

export const Logo = ({ light = false }: { light?: boolean }) => {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="kirken.dk">
      <img
        src={logoImg}
        alt="kirken.dk — find kirker i hele Danmark"
        width={1194}
        height={537}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className={`h-16 w-auto ${light ? "" : "invert"}`}
      />
    </Link>
  );
};