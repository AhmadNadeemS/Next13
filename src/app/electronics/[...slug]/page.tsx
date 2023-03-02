import { loadAllProducts } from "utils/helper";

interface Props {
  params: { slug: string[] };
}

export const generateStaticParams = () => {
  const products = loadAllProducts();
  const slugs = [];
  for (let key in products) {
    const productByCategory = products[key];
    for (let product of productByCategory) {
      slugs.push({
        slug: [key, product.slug],
      });
    }
  }
  return slugs;
};

const ElectronicsDetail = (props: Props) => {
  return (
    <div className="font-semibold text-lg">
      ElectronicsDetail {props.params.slug[0]} / {props.params.slug[1]}
    </div>
  );
};

export default ElectronicsDetail;
