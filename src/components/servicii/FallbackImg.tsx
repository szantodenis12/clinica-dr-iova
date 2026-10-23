"use client";

import type { ImgHTMLAttributes } from "react";

/** <img> with the original `onerror="this.onerror=null;this.src=fallback"` behaviour. */
export default function FallbackImg({
  fallback,
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { fallback: string }) {
  return (
    <img
      {...rest}
      alt={alt}
      onError={(e) => {
        const img = e.currentTarget;
        img.onerror = null;
        img.src = fallback;
      }}
    />
  );
}
