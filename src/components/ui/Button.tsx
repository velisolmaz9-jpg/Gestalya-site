import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  /** Navigation interne (react-router) */
  to?: string;
  /** Lien externe ou ancre (#section) */
  href?: string;
  /** Ouvre href dans un nouvel onglet (par défaut true, sauf pour les ancres internes) */
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-700 shadow-soft",
  secondary: "bg-champagne-300 text-navy-900 hover:bg-champagne-400",
  outline: "border border-navy-900/15 text-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 hover:bg-navy-50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  to,
  href,
  external = true,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
