"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface RoleOption {
  id: string;
  icon: string;
  alt: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
}

interface SelectRoleProps {
  roles?: RoleOption[];
  onRoleSelect?: (roleId: string) => void;
  className?: string;
}

function RoleCard({ icon, title, subtitle, buttonLabel, onClick }: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle?: string;
  buttonLabel?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="card flex w-full min-h-auto md:min-h-[360px] lg:min-h-[400px] xl:min-h-[380px] 2xl:min-h-[420px] p-4 sm:p-4 md:p-6 lg:p-8 xl:p-8 2xl:p-10 flex-col justify-between gap-3 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-6 items-start text-start rounded-[10px] border bg-white hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
      style={{
        borderColor: "rgba(17, 80, 86, 0.20)",
        boxShadow:
          "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)",
      }}
      onClick={onClick}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center">
        <div 
          className="flex p-3 sm:p-4 md:p-4 lg:p-5 xl:p-5 2xl:p-5 items-center rounded-[10px] border"
          style={{
            border: "1px solid var(--Primary-Color, #115056)",
            background: "var(--Card-Blue, #F1FAFA)"
          }}
        >
          <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px] xl:w-[85px] xl:h-[85px] 2xl:w-[110px] 2xl:h-[110px] flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Title Section */}
      <div className="flex-1 flex flex-col justify-center">
        <h5
          className="text-start text-[32px] sm:text-[32px] md:text-[32px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[1.5] xl:leading-[1.5] 2xl:leading-[1.5] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
          style={{
            color: "var(--Text-Title, #141414)",
            fontFamily: 'Inter, "Aeonik Pro", sans-serif',
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {title}
        </h5>
      </div>
      
      {/* Subtitle Section */}
      {subtitle && (
        <div className="flex flex-col justify-end">
          <p
            className="text-start text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] font-normal opacity-80 mb-4 sm:mb-4 md:mb-4 lg:mb-2 xl:mb-2 2xl:mb-2"
            style={{
              color: "var(--Text-Body, #141414)",
              fontFamily: 'Inter, sans-serif',
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        </div>
      )}
      
      {/* Button Section */}
      {buttonLabel && (
        <div className="w-full">
          <button
            className="group flex justify-center items-center gap-2 px-4 py-3 sm:px-4 sm:py-3 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4 w-full rounded-[5px] border bg-[var(--Card-Blue,#F1FAFA)] text-center min-h-[44px] sm:min-h-[44px] md:min-h-[48px] lg:min-h-[48px] xl:min-h-[48px] 2xl:min-h-[52px] touch-manipulation hover:bg-[#115056] hover:text-white hover:scale-105 hover:shadow-md transition-all duration-200 text-[20px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] font-normal md:font-normal lg:font-medium xl:font-medium 2xl:font-medium"
            style={{
              borderColor: "var(--Primary-Color, #115056)",
              color: "var(--Text-Title, #141414)",
              fontFamily: 'Inter',
              fontStyle: "normal",
              fontWeight: 400,
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick();
            }}
          >
            <span className="group-hover:text-white transition-colors duration-200">{buttonLabel}</span>
            <span aria-hidden className="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg group-hover:text-white transition-colors duration-200">→</span>
          </button>
        </div>
      )}
    </div>
  );
}

const defaultRoles: RoleOption[] = [
  {
    id: "inspector",
    icon: "/home-page/section 1/inspector-new.svg",
    alt: "Inspector",
    title: "I'm a Home Inspector",
    buttonLabel: "Learn More"
  },
  {
    id: "agent",
    icon: "/home-page/section 1/real-estate-agent-new.svg",
    alt: "Real Estate Agent",
    title: "I'm a Real Estate Agent",
    buttonLabel: "Learn More"
  },
  {
    id: "solar-pro",
    icon: "/home-page/section 1/solar-pro-new.svg",
    alt: "Solar Pro",
    title: "I'm a Solar Pro",
    buttonLabel: "Learn More"
  },
  {
    id: "homeowner",
    icon: "/home-page/section 1/homeowner-new.svg",
    alt: "Homeowner",
    title: "I'm a Homeowner",
    buttonLabel: "Learn More"
  }
];

export default function SelectRole({ 
  roles = defaultRoles, 
  onRoleSelect,
  className = ""
}: SelectRoleProps) {
  const router = useRouter();
  const handleRoleClick = (roleId: string) => {
    if (onRoleSelect) {
      onRoleSelect(roleId);
    }

    const roleRouteMap: Record<string, string> = {
      inspector: "/inspector",
      agent: "/agents",
      "solar-pro": "/solarpro",
      homeowner: "/homeowner",
    };

    const path = roleRouteMap[roleId];
    if (path) {
      router.push(path);
    }
  };

  // Dynamic grid layout based on number of items
  const getGridCols = () => {
    const itemCount = roles.length;
    
    if (itemCount === 1) {
      return "grid-cols-1";
    } else if (itemCount === 2) {
      return "grid-cols-1 sm:grid-cols-2";
    } else if (itemCount === 3) {
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
    } else if (itemCount === 4) {
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4";
    } else {
      // For 5+ items, use responsive grid that adapts
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
    }
  };

  // Remove any existing grid-cols classes from className to avoid conflicts
  const cleanClassName = className.replace(/grid-cols-\d+/g, '').replace(/[sm|md|lg|xl|2xl]:grid-cols-\d+/g, '').trim();

  return (
    <div className={`mt-6 sm:mt-8 md:mt-12 lg:mt-14 xl:mt-16 grid ${getGridCols()} gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 px-0 sm:px-0 md:px-0 lg:px-0 ${cleanClassName}`}>
      {roles.map((role) => (
        <div key={role.id} className="slide-up-cards">
          <RoleCard
            icon={
              <Image 
                src={role.icon} 
                alt={role.alt} 
                width={110} 
                height={110} 
              />
            }
            title={role.title}
            subtitle={role.subtitle}
            buttonLabel={role.buttonLabel}
            onClick={() => handleRoleClick(role.id)}
          />
        </div>
      ))}
    </div>
  );
}

export type { RoleOption, SelectRoleProps };
