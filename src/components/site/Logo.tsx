import { MapPin, Cross } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => {
  const color = light ? "text-sand" : "text-forest";
  return (
    <Link to="/" className={`flex items-center gap-3 ${color}`}>
      <div className="relative">
        <MapPin className="h-9 w-9" strokeWidth={1.5} />
        <Cross
          className="absolute left-1/2 top-[10px] h-3.5 w-3.5 -translate-x-1/2"
          strokeWidth={2.5}
        />
      </div>
      <div className="leading-tight">
        <div className="font-serif text-2xl">kirken.dk</div>
        <div className="text-[10px] uppercase tracking-[0.15em] opacity-80">
          Find kirker i hele Danmark
        </div>
      </div>
    </Link>
  );
};