interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({
  className = "",
  showTagline = false,
  size = "md",
  variant = "light",
}: LogoProps) {
  const sizes = {
    sm: { icon: 42, text: "text-base" },
    md: { icon: 50, text: "text-xl sm:text-2xl" },
    lg: { icon: 64, text: "text-2xl sm:text-4xl" },
  };

  const { icon: iconSize, text: textSize } = sizes[size];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Logo mark - refined house icon */}
      <div className="relative shrink-0">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: iconSize,
            height: iconSize,
            background: "linear-gradient(145deg, #1F7A7A 0%, #1a6565 50%, #155555 100%)",
            boxShadow: "0 4px 12px rgba(31, 122, 122, 0.3)",
          }}
        >
          <svg
            width={iconSize * 0.6}
            height={iconSize * 0.6}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-hidden
          >
            {/* Roof - clean triangle */}
            <path
              d="M28 4L4 28H52L28 4Z"
              fill="white"
              fillOpacity="0.98"
            />
            {/* House body */}
            <rect x="10" y="28" width="36" height="24" fill="white" fillOpacity="0.98" />
            {/* Left window */}
            <rect x="14" y="32" width="7" height="7" rx="1" fill="#1F7A7A" fillOpacity="0.2" />
            {/* Right window */}
            <rect x="35" y="32" width="7" height="7" rx="1" fill="#1F7A7A" fillOpacity="0.2" />
            {/* Heart inside the house - care & compassion */}
            <path
              d="M28 46.5c-2-1.5-5-3-5-6 0-2 1.5-3.5 3.5-3.5.8 0 1.2.3 1.5 1 .3-.7.7-1 1.5-1 2 0 3.5 1.5 3.5 3.5 0 3-3 4.5-5 6z"
              fill="#1F7A7A"
              fillOpacity="0.55"
            />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-heading font-bold leading-tight tracking-tight ${textSize} ${
            variant === "dark" ? "text-white" : "text-[#1a3d3d]"
          }`}
        >
          Friendly Support
        </span>
        <span
          className={`font-heading font-semibold tracking-wider ${
            size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"
          } ${variant === "dark" ? "text-white/85" : "text-[#1F7A7A]"}`}
        >
          Limited
        </span>
        {showTagline && (
          <span
            className={`mt-0.5 text-xs font-medium ${
              variant === "dark" ? "text-white/60" : "text-[#718096]"
            }`}
          >
            Compassionate Care at Home
          </span>
        )}
      </div>
    </div>
  );
}
