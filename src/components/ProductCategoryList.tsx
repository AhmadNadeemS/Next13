import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProductCategory } from "utils/helper";

// type ProductCategory = {
//   slug: string;
//   title: string;
//   subtitle: string;
//   thumbnail: string;
// }[];

interface Props {
  categories: ProductCategory;
  slugPrefix: string;
}

const ProductCategoryList: FC<Props> = ({
  slugPrefix,
  categories = [],
}): JSX.Element => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl gap-5">
      {categories.map((item, index) => {
        return (
          <Link href={slugPrefix + "/" + item.slug} key={index}>
            <div className="w-full aspect-video relative rounded overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                //   width={300}
                //   height={150}
                fill
                sizes="(max-width: 896px) 246px,283px"
                priority
              />
            </div>
            <div className="mt-3">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p>{item.subtitle}</p>
              {item.rating ? (
                <p className="bg-yellow-400 font-semibold rounded-full p-2 inline-block">
                  {item.rating}
                </p>
              ) : null}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductCategoryList;
