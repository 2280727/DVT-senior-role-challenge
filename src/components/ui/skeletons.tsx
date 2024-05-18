// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >   
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="w-[230px] h-[300px] rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CategorySkeleton() {
    return (
        <div
          className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >   
          <div className="flex items-center justify-center truncate rounded-full bg-white px-4 py-8">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-200" />
          </div>
        </div>
      );
}