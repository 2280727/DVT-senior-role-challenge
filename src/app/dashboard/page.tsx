"use client"
import { useState } from "react";
import { HorizontalScrollerTabs } from "../ui/dashboard/horizontal-scroller-tabs";
import { useGetCategories } from "@/app/lib/hooks/useGetCategories";



export default function Page() {
    const { categories, isLoadingCategories } = useGetCategories(); 
    const [startIndex, setStartIndex] = useState(0);
    
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

    return(
        <main>
            <h2 className="pb-4 font-bold">Preview By Category</h2>
            {!isLoadingCategories&&<HorizontalScrollerTabs categories={categories} startIndex={startIndex} onNext={handleNext} onPrev={handlePrev}/>}
        </main>
    )
} 