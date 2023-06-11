import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";


export type TitleProps = SliceComponentProps<Content.TitleSlice>;

const Title = ({ slice }: TitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="title">
       <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="subtitle">
        <PrismicRichText field={slice.primary.subtitle} />
      </div>
    </section>
  );
};

export default Title;
