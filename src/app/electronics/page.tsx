import AppHead from "@/components/AppHead";
import ProductCategoryList from "@/components/ProductCategoryList";
import { NextPage } from "next";
import { loadCategories } from "utils/helper";

interface Props {}

// /* @ts-expect-error Server Component */
const Electronics = () => {
  //   const { product_category } = await fetch(
  //     "/api/category?name=electronics"
  //   ).then((res) => res.json());
  const { product_category } = loadCategories("electronics");
  return (
    <>
      <AppHead title="Electronics" />
      <div>
        <ProductCategoryList
          slugPrefix="electronics"
          categories={product_category}
        />
      </div>
    </>
  );
};

export default Electronics;
