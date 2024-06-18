"use client"
import { useState } from "react";
import { HorizontalScrollerTabs } from "@/components/ui/dashboard/horizontal-scroller-tabs";
import { useGetCategories } from "@/lib/hooks/useGetCategories";
import { useGetProducts } from "@/lib/hooks/useGetProducts";
import { ProductCard } from "@/components/ui/dashboard/product-card";
import React from "react";
import { CardSkeleton, CategorySkeleton } from "@/components/ui/skeletons";


export default function Dashboard() {
    //state varibles
    const [category, setCategory] = useState<string | undefined>();
    const [startIndex, setStartIndex] = useState(0);
    //queries
    const { categories, isLoadingCategories } = useGetCategories(); 
    const { products, isLoadingProducts } = useGetProducts(category);
 
    const handleNext = () => {
      const nextIndex = startIndex + 1;
      if (nextIndex < categories.length -1) {
        setStartIndex(nextIndex);
      }
    };


    const handlePrev = () => {
      const prevIndex = startIndex - 1;
      if (prevIndex >= 0) {
        setStartIndex(prevIndex);
      }
    };

    const CardList = [1,2,3,4,5,6,7,8];
    return(
        <main className="">
            <section ariea-aria-label="categorySection" className="p-6">
              <h2 className="pb-4 font-bold">Preview By Category</h2>
              {isLoadingCategories &&
                <div  aria-label="categoryLoader" className="flex flex-grow justify-center space-x-6">
                  <CategorySkeleton/>
                  <CategorySkeleton/>
                </div>
              }
              {!isLoadingCategories && 
                <HorizontalScrollerTabs 
                    categories={categories} 
                    startIndex={startIndex} 
                    onNext={handleNext} 
                    onPrev={handlePrev}
                    setCategory={setCategory}/>
              }
               {/*Need to handle error state*/}
            </section>
            <section aria-label="productsSection" className="p-6 bg-gray-100">
              <div className="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4 max-md:w-[320px] md:w-[700px]">
                {isLoadingProducts  &&
                <div aria-label="productsLoader">
                  {CardList.map((i) => (
                      <CardSkeleton />
                  ))}
                </div>
                }
                {!isLoadingProducts && products && Array.isArray(products) &&
                    products.map((product, i) => (
                        <ProductCard
                        key={product.id}
                        product={product}
                        />
                    ))
                } 
                {/*Need to handle error state*/}
              </div>
            </section>
        </main>
    )
} 