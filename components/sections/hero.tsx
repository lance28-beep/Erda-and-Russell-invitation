"use client"

import { Button } from "@/components/button"
import { siteConfig } from "@/content/site"
import dynamic from "next/dynamic"
import BounceCards from "@/components/bounce-cards"

const Silk = dynamic(() => import("@/components/silk"), { ssr: false })

export function Hero() {
  const weddingImages: string[] = [
    "/Couple_img/couple (7).webp",
    "/Couple_img/couple (13).webp",
    "/Couple_img/couple (11).webp",
    "/Couple_img/couple (1).webp",
    "/Couple_img/couple (9).webp"
  ]

  const transformStyles: string[] = [
    "rotate(5deg) translate(-120px)",
    "rotate(0deg) translate(-50px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(50px)",
    "rotate(-5deg) translate(120px)",
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-0 pb-8 sm:pb-12"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 w-full h-full">
        <Silk speed={5} scale={1} color="#909E8D" noiseIntensity={1.5} rotation={0} />
      </div>

      {/* Multi-layered Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#525E2C]/20 via-[#909E8D]/15 to-[#D1AB6D]/8"></div>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm md:bg-black/20"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 opacity-10">
        <div className="w-full h-full border-2 border-[#D1AB6D] rounded-full rotate-45"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 md:w-24 md:h-24 opacity-10">
        <div className="w-full h-full border-2 border-[#E0CFB5] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Center Content Layout */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          
          {/* Main Heading Section */}
          <div className="text-center space-y-1 sm:space-y-2 md:space-y-3 w-full">


            {/* Names */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-[#F0F0F0] tracking-wide leading-tight drop-shadow-2xl">
              {siteConfig.couple.bride} & {siteConfig.couple.groom}
            </h1>
                        {/* Subtitle - Getting Married */}
          <p className="text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-[#D1AB6D] font-light mb-0 sm:mb-1 md:mb-2">
              are getting married
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3 md:my-4 lg:my-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#D1AB6D]"></div>
              <div className="w-2 h-2 rounded-full bg-[#D1AB6D]"></div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#D1AB6D]"></div>
            </div>
          </div>

          {/* Image Gallery - Centered */}
          <div className="flex justify-center items-center w-full relative max-w-4xl px-2 sm:px-0">
            <BounceCards
              className="custom-bounceCards relative z-10"
              images={weddingImages}
              containerWidth={220}
              containerHeight={165}
              animationDelay={0.5}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>

          {/* Love Story Card */}
          <div className="w-full max-w-2xl px-2 sm:px-0">
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-[#525E2C]/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-[#D1AB6D]/30 shadow-xl">
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D1AB6D] rounded-tl-xl"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D1AB6D] rounded-tr-xl"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D1AB6D] rounded-bl-xl"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D1AB6D] rounded-br-xl"></div>
              
              <div className="text-center space-y-3 sm:space-y-4 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#D1AB6D] tracking-wide drop-shadow-lg">
                  The Beginning of Forever
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#F0F0F0]/80 leading-relaxed pt-2">
                  With hearts full of love and gratitude, we invite you to witness and celebrate the next chapter of our story as we begin our forever together.
                </p>
              </div>
      
              <div className="text-center space-y-2 mt-4 sm:mt-6">
                <p className="text-lg sm:text-xl md:text-2xl text-[#F0F0F0] font-semibold drop-shadow-md">
                  {siteConfig.ceremony.day}, {siteConfig.ceremony.date}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#D1AB6D] font-medium drop-shadow-md">
                  {siteConfig.ceremony.time}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#E0CFB5] leading-relaxed drop-shadow-md">
                  {siteConfig.wedding.venue}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 justify-center w-full max-w-xl flex-wrap">
            <Button
              href="#narrative"
              variant="primary"
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-lg transition-all duration-500 ease-in-out bg-gradient-to-r from-[#525E2C] via-[#909E8D] to-[#525E2C] border border-[#D1AB6D]/40 text-[#F0F0F0] shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-[#D1AB6D]/60 hover:text-white hover:from-[#6B7A3A] hover:via-[#A0B09D] hover:to-[#6B7A3A] active:scale-[0.98]"
            >
              Our Love Story
            </Button>
            <Button
              href="#rsvp"
              variant="outline"
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide rounded-lg transition-all duration-500 ease-in-out bg-[#D1AB6D] border-2 border-[#D1AB6D] text-[#525E2C] text-center shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-[#DDC4A0] hover:border-[#E8D5BB] hover:text-white active:scale-[0.98]"
            >
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
