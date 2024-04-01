import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { ImageTab } from "./image-tab"
import { capitalizeFirstLetter, getImage } from "@/lib/utils"
import { useAtom } from "jotai";
import { categoryAtom } from "@/lib/state/atoms";




interface HorizontalScrollerTabsProps {
    categories: string[];
    startIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

export const HorizontalScrollerTabs: React.FC<HorizontalScrollerTabsProps> = ({
        categories,
        startIndex,
        onNext,
        onPrev,
    }) => {
      const [ category1,setCategory ] = useAtom(categoryAtom)
    // const { categories, isLoadingCategories } = useGetCategories();
    // const [startIndex, setStartIndex] = useState(0);
  
    // const handleNext = () => {
    //   const nextIndex = startIndex + 1;
    //   if (nextIndex < categories.length -1) {
    //     setStartIndex(nextIndex);
    //   }
    // };
  
    // const handlePrev = () => {
    //   const prevIndex = startIndex - 1;
    //   if (prevIndex >= 0) {
    //     setStartIndex(prevIndex);
    //   }
    // };

    return (
        <div className="flex relative">
          <button
            aria-label={'left'}
            onClick={onPrev}
          >
                <ChevronLeftIcon
                    onClick={onPrev}
                    className="h-9 w-9 absolute left-2 top-6 rounded-full shadow-md shadow-gray-500 cursor-pointer"
                />
          </button>

          <div className="flex flex-grow justify-center space-x-6">
            {categories?.slice(startIndex, startIndex + 2).map((category: string) => (
              <button onClick={() => {setCategory(category); 
                console.log("***",category1)
              }}>
                <ImageTab
                  key={category}
                  tabTitle={capitalizeFirstLetter(category)}
                  imgUrl={getImage(category, "cat")}
                />
              </button>
            ))}
          </div>
          <button
            aria-label={'right'}
            onClick={onNext}
          >
            <ChevronRightIcon
                className="h-9 w-9 absolute right-2 top-6 rounded-full shadow-md shadow-gray-500 cursor-pointer"
            />
          </button>
        </div>
      );
}