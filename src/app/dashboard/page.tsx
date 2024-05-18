"use client"
import { useState } from "react";
import { HorizontalScrollerTabs } from "@/components/ui/dashboard/horizontal-scroller-tabs";
import { useGetCategories } from "@/lib/hooks/useGetCategories";
import { useGetProducts } from "@/lib/hooks/useGetProducts";
import { ProductCard } from "@/components/ui/dashboard/product-card";
import { useAtom } from "jotai";
import { cartItemsAtom, categoryAtom } from "@/lib/state/atoms";
import React from "react";
import { Product } from "@/lib/types/product";
import { CardSkeleton, CategorySkeleton } from "@/components/ui/skeletons";




export default function Page() {
    //does this state really neaads to be managed globally?
    const [ category,] = useAtom(categoryAtom)


    const { categories, isLoadingCategories } = useGetCategories(); 
    const { products, isLoadingProducts, refetchProducts } = useGetProducts(category);
    const [startIndex, setStartIndex] = useState(0);

   
    
    const handleNext = () => {
      const nextIndex = startIndex + 1;
      if (nextIndex < categories.length -1) {
        setStartIndex(nextIndex);
      }
    };

    React.useEffect(() => {
      refetchProducts();
      console.log("refetch")
    },[category])

    const handlePrev = () => {
      const prevIndex = startIndex - 1;
      if (prevIndex >= 0) {
        setStartIndex(prevIndex);
      }
    };

    const CardList = [1,2,3,4,5,6,7,8];
    return(
        <main className="">
            <section className="p-6">
              <h2 className="pb-4 font-bold">Preview By Category</h2>
              {isLoadingCategories &&
                <div className="flex flex-grow justify-center space-x-6">
                  <CategorySkeleton/>
                  <CategorySkeleton/>

                </div>
              }
              {!isLoadingCategories && 
                <HorizontalScrollerTabs 
                    categories={categories} 
                    startIndex={startIndex} 
                    onNext={handleNext} 
                    onPrev={handlePrev}/>
                  }
            </section>
            <section className="p-6 bg-gray-100">
              <div className="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4 max-md:w-[320px] md:w-[700px]">
              {isLoadingProducts  &&
              CardList.map((i) => (
                  <CardSkeleton   />
              ))
              
              }
              {!isLoadingProducts && products && Array.isArray(products) &&
                  products.map((product, i) => (
                      <ProductCard
                      product={product}
                      />
                  ))
              } 
              </div>
            </section>
        </main>
    )
} 