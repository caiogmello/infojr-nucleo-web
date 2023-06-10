import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for quem_somos (variation: {slice.variation}) Slices
    </section>
  );
};

export default QuemSomos;
