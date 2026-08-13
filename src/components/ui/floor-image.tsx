type ResponsiveImageSource = {
  avif: string;
  webp: string;
};

type FloorImageProps = {
  desktop: ResponsiveImageSource;
  mobile: ResponsiveImageSource;
  alt: string;
  aspectClassName?: string;
  className?: string;
};

// Art-directed responsive image: mobile and desktop use different crops of
// the same photograph, not just different resolutions (06-asset-guide.md
// §65). A plain <picture> with media-query <source>s only fetches the one
// matching source — two next/image elements toggled by CSS would fetch both.
export function FloorImage({
  desktop,
  mobile,
  alt,
  aspectClassName = "aspect-[4/5] md:aspect-[16/9]",
  className,
}: FloorImageProps) {
  return (
    <picture
      className={`block w-full overflow-hidden rounded-lg ${aspectClassName} ${className ?? ""}`}
    >
      <source media="(min-width: 768px)" srcSet={desktop.avif} type="image/avif" />
      <source media="(min-width: 768px)" srcSet={desktop.webp} type="image/webp" />
      <source srcSet={mobile.avif} type="image/avif" />
      <source srcSet={mobile.webp} type="image/webp" />
      <img
        src={mobile.webp}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </picture>
  );
}
