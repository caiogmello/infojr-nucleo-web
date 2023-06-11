import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `QuemSomos`.
 */
export type QuemSomosProps = SliceComponentProps<Content.QuemSomosSlice>;

/**
 * Component for "QuemSomos" Slices.
 */
const QuemSomos = ({ slice }: QuemSomosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextImage field={slice.primary.image} />
    </section>
  );
};

export default QuemSomos;
