import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TitleProps = SliceComponentProps<Content.TitleSlice>;

const Title = ({ slice }: TitleProps): JSX.Element => {
  return (
    <section
      className="font-bold "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <PrismicRichText field={slice.primary.title} />
     <PrismicRichText field={slice.primary.subtitle} />
    </section>
  );
};

export default Title;
