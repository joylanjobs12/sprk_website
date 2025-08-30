'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface TrustedByProps {
  title?: string
  description?: string[]
  logoSrc?: string
  logoCount?: number
  logoWidth?: number
  logoHeight?: number
  logoAlt?: string
  slideDuration?: number
}

export default function TrustedBy({
  title = "Trusted by:",
  description = [
    "Thousands of agents across the U.S. use Sprk to simplify solar transactions,",
    "protect their clients, and stand out in a growing market."
  ],
  logoSrc = "/agents-page/section 1/logo-test.svg",
  logoCount = 5,
  logoWidth = 150,
  logoHeight = 82,
  logoAlt = "Trusted partner logo",
  slideDuration = 3000
}: TrustedByProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Create infinite scroll animation
    const totalWidth = (logoWidth + 25) * logoCount // logo width + gap
    
    // Set up CSS animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes infiniteSlide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${totalWidth}px);
        }
      }
      .infinite-slider {
        animation: infiniteSlide ${slideDuration * logoCount}ms linear infinite;
      }
      .infinite-slider:hover {
        animation-play-state: paused;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [logoCount, logoWidth, slideDuration])

  // Create double the logos for seamless infinite scroll
  const totalLogos = logoCount * 2

  return (
    <div className="bounce-in flex flex-col gap-[25px] items-center justify-start w-full">
      <div className={`${inter.className} text-reveal font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-[120%] text-center text-[rgba(0,0,0,0.66)] w-full mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4`}>
        <p className="font-semibold mb-2">{title}</p>
        {description.map((line, index) => (
          <p key={index} className="mb-0">{line}</p>
        ))}
      </div>

      <div className="w-full overflow-hidden">
        <div 
          ref={sliderRef}
          className="infinite-slider flex gap-[25px] items-center"
          style={{ width: `${(logoWidth + 25) * totalLogos}px` }}
        >
          {Array.from({ length: totalLogos }).map((_, index) => (
            <Image
              key={index}
              src={logoSrc}
              alt={`${logoAlt} ${(index % logoCount) + 1}`}
              width={logoWidth}
              height={logoHeight}
              className="opacity-50 shrink-0 hover:opacity-80 transition-opacity duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
