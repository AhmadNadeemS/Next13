import HeadClient from "@/components/HeadClient";
import ProductCategoryList from "@/components/ProductCategoryList";
import { loadAllProducts, loadCategories, loadProductList } from "utils/helper";

interface Props {
  params: { subCategory: string };
}

export const generateStaticParams = () => {
  const { product_category } = loadCategories("electronics");
  const slugs = product_category.map(({ slug }) => {
    return {
      subCategory: slug,
    };
  });
  return slugs;
};

const ElectronicsSubCat = ({ params }: Props) => {
  const { subCategory } = params;
  const { product } = loadProductList(subCategory);
  return (
    <>
      {/* <AppHead title={subCategory} /> */}
      <HeadClient subCategory={subCategory}>
        <ProductCategoryList
          slugPrefix={"electronics/" + subCategory}
          categories={product}
        />
      </HeadClient>
    </>
  );
};

export default ElectronicsSubCat;
