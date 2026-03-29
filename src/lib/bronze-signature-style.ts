import type { CSSProperties } from "react";

export const BRONZE_SIGNATURE_BASE_STYLE: CSSProperties = {
  backgroundColor: "#0b0503",
  background: `
    radial-gradient(circle at 16% 18%, rgba(145, 90, 44, 0.14) 0%, rgba(145, 90, 44, 0) 60%),
    radial-gradient(circle at 84% 76%, rgba(120, 71, 36, 0.11) 0%, rgba(120, 71, 36, 0) 64%),
    linear-gradient(180deg, #120805 0%, #1c0d08 18%, #2d170d 38%, #1f1009 60%, #150a06 82%, #0b0503 100%)
  `,
};

export const BRONZE_SIGNATURE_TONE_STYLE: CSSProperties = {
  background: `
    radial-gradient(circle at 50% 24%, rgba(201, 136, 78, 0.14) 0%, rgba(201, 136, 78, 0.05) 34%, rgba(201, 136, 78, 0) 66%),
    radial-gradient(circle at 50% 112%, rgba(3, 1, 1, 0.62) 0%, rgba(3, 1, 1, 0) 58%),
    linear-gradient(90deg, rgba(2, 1, 1, 0.3) 0%, rgba(2, 1, 1, 0) 16%, rgba(2, 1, 1, 0) 84%, rgba(2, 1, 1, 0.3) 100%)
  `,
};

export const BRONZE_SIGNATURE_GHOST_STYLE: CSSProperties = {
  opacity: 0.47,
  mixBlendMode: "soft-light",
  background: `
    radial-gradient(circle at 50% 34%, rgba(255, 199, 136, 0.26) 0%, rgba(255, 199, 136, 0.1) 32%, rgba(255, 199, 136, 0) 64%),
    url("/ragnar.png"),
    repeating-linear-gradient(118deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 1px, rgba(0, 0, 0, 0.02) 1px, rgba(0, 0, 0, 0.02) 4px)
  `,
  backgroundSize: "cover, cover, auto",
  backgroundPosition: "center, center, center",
};
