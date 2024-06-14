import React from "react";
import Image from "next/image";

interface TokenImageProps {
  alt: string;
  src?: string;
  index?: number;
}

export function TokenImage({ src, alt, index }: TokenImageProps) {
  const base664Placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAARklEQVR42u3PQREAAAQAMJKr4U5ZGXzd1mDZPRUPpIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjIxQIFMnKnd5iysAAAAABJRU5ErkJggg==";
  return (
    <Image
      src={src || base664Placeholder}
      alt={alt}
      placeholder="blur"
      blurDataURL={base664Placeholder}
      width={50}
      height={50}
      priority={index ? index < 20 : false}
      data-testid={`token-image`}
    />
  );
}
