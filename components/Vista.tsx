import { ParallaxPhoto } from "./motion";
import { photos } from "@/lib/content";

/**
 * A wide aerial between the green band and the services, with no copy on it.
 * The top edge fades out of the forest ground above and the bottom into the ink
 * below, so the photograph reads as a window rather than a pasted block.
 */
export function Vista() {
  return (
    <div aria-hidden="true" className="relative h-[clamp(320px,62vh,640px)] overflow-hidden">
      <ParallaxPhoto
        src={photos.vista.src}
        strength={0.22}
        className="inset-x-0 -inset-y-[18%]"
        imageClassName="object-[center_25%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-forest)_0%,rgb(0_96_57/0)_16%,rgb(10_13_11/0)_66%,var(--color-ink)_100%)]" />
    </div>
  );
}
