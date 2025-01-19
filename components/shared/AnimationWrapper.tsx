"use client";
import { useEffect, useRef, useState } from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-in' | 'scale';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation = "fade",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);
  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    const baseClasses = "transition-all transform";
    const durationClass = `duration-${Math.round(duration * 1000)}`;
    const delayClass = delay > 0 ? `delay-${Math.round(delay * 1000)}` : "";

    switch (animation) {
      case "fade":
        return `${baseClasses} ${durationClass} ${delayClass} opacity-100`;
      case "slide-up":
        return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-y-0`;
      case "slide-in":
        return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-x-0`;
      case "scale":
        return `${baseClasses} ${durationClass} ${delayClass} opacity-100 scale-100`;
      default:
        return `${baseClasses} ${durationClass} ${delayClass} opacity-100`;
    }
  };

  const getInitialStyles = () => {
    switch (animation) {
      case "slide-up":
        return "translate-y-10";
      case "slide-in":
        return "translate-x-10";
      case "scale":
        return "scale-95";
      default:
        return "";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${getInitialStyles()} ${className}`}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;