import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Title`.
 */
export type TitleProps = SliceComponentProps<Content.TitleSlice>;

/**
 * Component for "Title" Slices.
 */
const Title = ({ slice }: TitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <PrismicRichText field={slice.primary.title} />
     <PrismicRichText field={slice.primary.subtitle} />
    </section>
  );
};

export default Title;
