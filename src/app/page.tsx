// "use client";

import { Suspense } from "react";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { useContext, useEffect } from "react";

const HomePage = async () => {
  //  const wixClient = useWixClient();
  //
  //  useEffect(() => {
  //    const getProducts = async () => {
  //      const res = await wixClient.products.queryProducts().find();
  //
  //      console.log(res);
  //    };
  //
  //    getProducts();
  //  }, [wixClient]);

  //  const wixClient = await wixClientServer();

  //  const res = await wixClient.products.queryProducts().find();

  //  console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          카테고리
        </h1>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">새상품</h1>
        <ProductList categoryId={""} />
      </div>
    </div>
  );
};

export default HomePage;
