import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

type BaseProps = { variant?: Variant; className?: string };
type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#C8A04D] text-[#050505] hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-[#F8F8F5] border border-[#F8F8F5] hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AsLink;
    return (
      <a href={href} className={classes} {...rest} />
    );
  }

  return <button className={classes} {...(props as AsButton)} />;
}
