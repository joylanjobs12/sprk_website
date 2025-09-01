"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type ButtonsTypeProps = {
  type: number; // 1..10
  label: string;
  isShowArrow?: boolean; // optional override for arrow visibility
  link?: string; // internal path or external URL
  redirection?: "redirect" | "new-tab"; // same tab redirect or open in new tab
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

const ARROW_DARK = "/icons/arrow-dark.svg";
const ARROW_WHITE = "/icons/arrow-white.svg";

function getVariantClasses(variant: number) {
  // Common, responsive, accessible sizing and transitions per workspace rules
  const base = [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "w-full",
    "px-4",
    "py-2",
    "min-h-11", // 44px tap target
    "transition-all",
    "duration-200",
    "ease-in-out",
    "group",
    "focus:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[#115056]",
  ].join(" ");

  // Text sizing follows viewport rules (Small vs Big button variants)
  const textSmall = "text-[16px] md:text-[18px] lg:text-[22px] font-normal"; // 22 at lg for small buttons
  const textBig = "text-[16px] md:text-[20px] lg:text-[25px] font-medium"; // 25 at lg for big buttons

  // Variants mapped from Figma selections provided by the user
  switch (variant) {
    // 1) White bg, teal border, small text, dark arrow (node 12:3353)
    case 1:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-white text-[#141414] hover:bg-[#115056] hover:text-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textSmall,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: true,
      } as const;

    // 2) Solid teal, small text, white arrow (node 12:3361)
    case 2:
      return {
        container: `${base} p-[5px] rounded-[5px] bg-[#115056] text-white border border-transparent hover:bg-white hover:text-[#115056] hover:border-[#115056] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textSmall,
        arrowDefault: "white",
        arrowHover: "dark",
        isShowArrow: true,
      } as const;

    // 3) Solid teal pill, small text, white arrow (node 12:3377)
    case 3:
      return {
        container: `${base} rounded-[50px] bg-[#115056] text-white border border-transparent hover:bg-white hover:text-[#115056] hover:border-[#115056] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textSmall,
        arrowDefault: "white",
        arrowHover: "dark",
        isShowArrow: true,
      } as const;

    // 4) White bg, teal border, big text, dark arrow (node 12:3357)
    case 4:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-white text-[#141414] hover:bg-[#115056] hover:text-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textBig,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: true,
      } as const;

    // 5) Light teal bg (#F1FAFA), teal border, big text, dark arrow (node 12:3369)
    case 5:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-[#F1FAFA] text-[#141414] hover:bg-[#115056] hover:text-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textBig,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: true,
      } as const;

    // 6) Filter style pill: light gray bg, subtle border, small text, dark arrow (node 12:3381)
    case 6:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-gray-50 text-[#141414] hover:bg-[#115056] hover:text-white hover:border-[#fff] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textSmall,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: false,
      } as const;

    // 7) Solid teal, big text, white arrow (node 12:3365)
    case 7:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-white text-[#115056] hover:bg-[#115056] hover:text-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textBig,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: true,
      } as const;

    // 8) Teal outline, no fill, small text in teal, dark arrow (node 12:3373)
    case 8:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-transparent text-[#115056] hover:bg-[#115056] hover:text-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textSmall,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: true,
      } as const;

    // 9) Primary (solid teal, big text) — node 12:1153
    case 9:
      return {
        container: `${base} py-[12px] px-[30px] rounded-[30px] bg-[#115056] text-white border border-transparent hover:bg-white hover:text-[#115056] hover:border-[#115056] hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textBig,
        arrowDefault: "white",
        arrowHover: "dark",
        isShowArrow: false,
      } as const;

    // 10) Secondary (white bg, teal outline, big text in teal) — node 12:1155
    case 10:
      return {
        container: `${base} py-[12px] px-[30px] rounded-[30px] border border-[#115056] bg-white text-[#115056] hover:bg-[#115056] hover:text-white hover:shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.05]`,
        text: textBig,
        arrowDefault: "dark",
        arrowHover: "white",
        isShowArrow: false,
      } as const;

    default:
      return {
        container: `${base} rounded-[5px] border border-[#115056] bg-white text-[#141414]`,
        text: textSmall,
        arrowDefault: "dark",
        arrowHover: "dark",
        isShowArrow: true,
      } as const;
  }
}

export default function ButtonsType({ type: variant, label, isShowArrow, link, redirection = "redirect", onClick }: ButtonsTypeProps) {
  const { container, text, arrowDefault, arrowHover, isShowArrow: defaultShowArrow } = getVariantClasses(variant);

  // Allow consumer to override arrow visibility via prop while maintaining variant defaults
  const showArrow = typeof isShowArrow === "boolean" ? isShowArrow : defaultShowArrow;

  const defaultIsWhite = arrowDefault === "white";
  const hoverIsWhite = arrowHover === "white";

  const innerContent = (
    <>
      <span
        className={[
          // font family per rules
          variant === 4 || variant === 5 || variant === 7 ? "font-['Inter']" : "font-['Inter']",
          text,
          // smoothing and tight line-height
          "leading-[1.1]",
          "whitespace-nowrap",
        ].join(" ")}
      >
        {label}
      </span>
      {showArrow && (
        <span className={["relative", "ml-2", "w-[17px]", "h-[12px]", "transition-transform", "duration-200", "ease-in-out", "group-hover:translate-x-0.5"].join(" ")}>
          {/* Dark arrow */}
          <Image
            src={ARROW_DARK}
            alt=""
            width={17}
            height={12}
            aria-hidden
            className={[
              "absolute",
              "inset-0",
              "select-none",
              "pointer-events-none",
              defaultIsWhite ? "opacity-0" : "opacity-100",
              hoverIsWhite ? "group-hover:opacity-0" : "group-hover:opacity-100",
              "transition-opacity",
              "duration-200",
              "ease-in-out",
            ].join(" ")}
            priority={false}
          />
          {/* White arrow */}
          <Image
            src={ARROW_WHITE}
            alt=""
            width={17}
            height={12}
            aria-hidden
            className={[
              "absolute",
              "inset-0",
              "select-none",
              "pointer-events-none",
              defaultIsWhite ? "opacity-100" : "opacity-0",
              hoverIsWhite ? "group-hover:opacity-100" : "group-hover:opacity-0",
              "transition-opacity",
              "duration-200",
              "ease-in-out",
            ].join(" ")}
            priority={false}
          />
        </span>
      )}
    </>
  );

  // If link provided, render as Link (internal) or anchor (external or new tab)
  if (link && link.trim().length > 0) {
    const openInNewTab = redirection === "new-tab";
    const isInternal = link.startsWith("/");

    if (isInternal && !openInNewTab) {
      return (
        <Link href={link} className={container} aria-label={label} onClick={onClick}>
          {innerContent}
        </Link>
      );
    }

    return (
      <a
        href={link}
        className={container}
        aria-label={label}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {innerContent}
      </a>
    );
  }

  // Default: plain button without navigation
  return (
    <button className={container} type="button" aria-label={label} onClick={onClick}>
      {innerContent}
    </button>
  );
}


