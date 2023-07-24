import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type QuemSomosProps = SliceComponentProps<Content.QuemSomosSlice>;

const QuemSomos = ({ slice }: QuemSomosProps): JSX.Element => {
  return (
    <section className="quem-somos"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text">
        <div className="title">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="body">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </div>
      <div className="image">
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </section>
  );
};

export default QuemSomos;
