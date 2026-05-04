import { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "main";
}

export default function SectionWrapper({
  as: Tag = "section",
  children,
  className = "",
  ...props
}: SectionWrapperProps) {
  return (
    <Tag
      className={`w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
