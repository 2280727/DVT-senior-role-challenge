"use client"
import { useState } from "react";
import { HorizontalScrollerTabs } from "../ui/dashboard/horizontal-scroller-tabs";
import { useGetCategories } from "@/app/lib/hooks/useGetCategories";
import { useGetProducts } from "../lib/hooks/useGetProducts";
import { ProductCard } from "../ui/dashboard/product-card";
import { useAtom } from "jotai";
import { categoryAtom } from "../lib/state/atoms";
import React from "react";




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

    return(
        <main className="">
            <section className="p-6">
              <h2 className="pb-4 font-bold">Preview By Category</h2>
              {!isLoadingCategories && 
                <HorizontalScrollerTabs 
                    categories={categories} 
                    startIndex={startIndex} 
                    onNext={handleNext} 
                    onPrev={handlePrev}/>
                  }
            </section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-6 w-screen bg-gray-100 ">
            {!isLoadingProducts && products && Array.isArray(products) &&
                products.map((product, i) => (
                    <ProductCard
                        key={i} 
                        imgUrl={product.image}
                        productTitle={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))
            } 
            </div>
        </main>
    )
} 