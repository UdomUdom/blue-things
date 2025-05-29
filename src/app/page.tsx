"use client";
import { asciiStrangers, asciiWelcome } from "../../public/asciiArt";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const router = useRouter();
  const [isAnimatingAbout, setIsAnimatingAbout] = useState(false);
  const expandingDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleContinueClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault(); // Not strictly necessary for a button not in a form/link
    setIsAnimatingAbout(true);
  };

  useEffect(() => {
    if (isAnimatingAbout && expandingDivRef.current) {
      const node = expandingDivRef.current;
      const handleAnimationEnd = (event: AnimationEvent) => {
        // Ensure it's the expandToFill animation that ended
        if (event.animationName === 'expandToFill') {
          router.push('/about');
        }
      };

      node.addEventListener('animationend', handleAnimationEnd);

      return () => {
        node.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [isAnimatingAbout, router]);

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="text-blue-400 text-lg font-mono whitespace-pre-wrap break-all">
        <div
          className={`transition-all duration-1000 ease-in-out ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <pre className="animate-glow leading-5">{asciiWelcome}</pre>
        </div>
        <div
          className={`flex justify-center mt-4 transition-all duration-[1200ms] ease-out 
    ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    ${showContent ? "delay-[1200ms]" : ""}`}
        >
          <button
            onClick={handleContinueClick}
            className={`
      relative font-mono font-semibold text-2xl py-4 px-8 
      text-center cursor-pointer rounded-lg overflow-hidden
      hover:scale-105 duration-300 transition-all ease-in-out
      before:absolute before:inset-0 before:bg-blue-400 before:opacity-0
      before:hover:opacity-15 before:pointer-events-none
      after:absolute after:inset-0 after:bg-blue-400 after:opacity-0
      after:hover:opacity-30 after:pointer-events-none after:blur-md
      active:scale-95
    `}
          >
            <span className="relative z-10">click here to continue</span>
          </button>
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out delay-500 ${
            showContent ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <pre className="animate-glow leading-5">{asciiStrangers}</pre>
        </div>
      </div>

      {/* NEW: Expanding div */}
      {isAnimatingAbout && (
        <div
          ref={expandingDivRef}
          className="fixed inset-0 bg-blue-400 flex items-center justify-center text-white font-mono font-semibold text-2xl z-50 animate-expandToFill"
        >
          <span className="relative z-10 animate-fadeOutText">click here to continue</span>
        </div>
      )}
    </div>
  );
}
