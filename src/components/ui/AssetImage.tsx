import type { Lang } from "@/lib/site";
import type { BrandImage } from "@/lib/brand-assets";

/**
 * Renders one of Anderson's delivered assets as a real `<picture>`/`<img>`
 * pair so the hand-built 1× + `@2x` WebP files are served exactly as delivered
 * (no `/_next/image` re-encode), per the delivered MANIFEST "How to use".
 *
 * - explicit `width`/`height` on the `<img>` → no layout shift
 * - `loading="lazy" decoding="async"` by default; pass `priority` for the
 *   above-the-fold hero (`loading="eager" fetchpriority="high"`)
 * - `mobile` adds the portrait crop as a `max-width: 767px` source
 * - alt text always comes from the manifest (via `BrandImage`)
 */
export default function AssetImage({
  image,
  lang,
  className,
  imgClassName = "block h-auto w-full",
  priority = false,
  mobile,
}: {
  image: BrandImage;
  lang: Lang;
  /** wrapper <picture> classes (sizing, rounding, overflow) */
  className?: string;
  /** <img> classes — override when filling a sized/aspect-ratio container */
  imgClassName?: string;
  priority?: boolean;
  /** optional portrait crop shown at max-width: 767px */
  mobile?: BrandImage;
}) {
  const twoX = (src: string) => src.replace(/\.webp$/, "@2x.webp");

  return (
    <picture className={className}>
      {mobile ? (
        <source
          type="image/webp"
          media="(max-width: 767px)"
          srcSet={`${mobile.src} 1x, ${twoX(mobile.src)} 2x`}
        />
      ) : null}
      <img
        src={image.src}
        srcSet={`${image.src} 1x, ${twoX(image.src)} 2x`}
        width={image.width}
        height={image.height}
        alt={image.alt[lang]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={imgClassName}
      />
    </picture>
  );
}
