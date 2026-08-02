import Image from "next/image";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const LOGO_SRC = "/fs-logo.png";
const LOGO_SRC_DARK = "/fs-logo-white.png";

export default function Logo({
  className = "",
  showTagline = false,
  size = "md",
  variant = "light",
}: LogoProps) {
  const sizes = {
    sm: { width: 150, height: 56 },
    md: { width: 200, height: 72 },
    lg: { width: 260, height: 96 },
  };

  const { width, height } = sizes[size];
  const isDark = variant === "dark";

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="inline-flex overflow-hidden rounded-lg">
        <Image
          src={isDark ? LOGO_SRC_DARK : LOGO_SRC}
          alt="Friendly Support Limited"
          width={width}
          height={height}
          className="h-auto w-auto object-contain"
          style={{ width, height: "auto", maxHeight: height }}
          priority
        />
      </div>
      {showTagline && (
        <span
          className={`mt-1.5 text-xs font-medium ${
            isDark ? "text-white/60" : "text-[#718096]"
          }`}
        >
          Compassionate Support at Home
        </span>
      )}
    </div>
  );
}
