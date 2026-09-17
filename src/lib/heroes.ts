/**
 * Hero background photography, one entry per page.
 *
 * Every frame is surveillance hardware: a lit camera against darkness, in the
 * spirit of the obsidian gallery reference — one object glowing against black.
 * These are web-optimised Unsplash placeholders. To move to owned product
 * photography, drop the file in /public and change `src` to the local path;
 * nothing else in the app needs to change.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";

/** Landscape crop, 2400px wide, quality 72, auto format. */
function shot(id: string) {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=2400&h=1350&q=72`;
}

export type HeroImage = {
  src: string;
  /** Empty string marks it decorative: the headline already carries the meaning. */
  alt: string;
  /** object-position, so the subject survives a tall mobile crop. */
  position: string;
};

export const heroes = {
  /** PTZ speed dome lit against pure black. */
  home: {
    src: shot("1672073311074-f60c4a5e7b92"),
    alt: "",
    position: "center 40%",
  },
  /** Distribution warehouse racking. */
  about: {
    src: shot("1553413077-190dd305871c"),
    alt: "",
    position: "center 60%",
  },
  /** A wall grid of bullet cameras — the catalogue, as a picture. */
  products: {
    src: "/img/poducts.jpg",
    alt: "Security product display",
    position: "center",
  },
  /** Bullet camera at night against marquee lighting. */
  pricing: {
    src: shot("1531328153895-18add1c7398e"),
    alt: "",
    position: "center 45%",
  },
  /** Macro on a dome camera's glass element. */
  contact: {
    src: shot("1520697830682-bbb6e85e2b0b"),
    alt: "",
    position: "center 40%",
  },
} satisfies Record<string, HeroImage>;

/** Deal of the week banner on the home page: a multi-head camera pole. */
export const promoImage: HeroImage = {
  src: shot("1618482914248-29272d021005"),
  alt: "",
  position: "center 35%",
};
