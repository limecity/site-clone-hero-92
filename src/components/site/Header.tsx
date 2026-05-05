import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Logo } from "./Logo";

type Variant = "home" | "back-home" | "back-list";

export const Header = ({ variant = "home" }: { variant?: Variant }) => {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container flex items-center justify-between py-6">
        <Logo light />
        {variant === "home" && (
          <nav className="hidden items-center gap-8 text-sand md:flex">
            <a href="#hvad" className="text-sm hover:text-warmth transition-colors">
              Hvad er kirken.dk?
            </a>
            <Link to="/troesretninger" className="text-sm hover:text-warmth transition-colors">
              Trosretninger
            </Link>
            <a href="#find" className="text-sm hover:text-warmth transition-colors">
              Find kirke
            </a>
            <Link
              to="/ansog"
              className="inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/5 px-5 py-2.5 text-sm text-sand backdrop-blur transition hover:bg-sand/15"
            >
              <FileText className="h-4 w-4" />
              Ansøg om optagelse
            </Link>
          </nav>
        )}
        {variant === "back-home" && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-sand transition hover:text-warmth"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbage til forsiden
          </Link>
        )}
        {variant === "back-list" && (
          <Link
            to="/troesretninger"
            className="inline-flex items-center gap-2 text-sm text-sand transition hover:text-warmth"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle kirkeretninger
          </Link>
        )}
      </div>
    </header>
  );
};