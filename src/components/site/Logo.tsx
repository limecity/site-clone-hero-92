import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

export const Logo = ({ light = false }: { light?: boolean }) => {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="kirken.dk">
      <img
        src={logoImg}
        alt="kirken.dk — find kirker i hele Danmark"
        className={`h-16 w-auto ${light ? "" : "invert"}`}
      />
    </Link>
  );
};