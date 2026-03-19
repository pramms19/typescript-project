export function ProductSkeletonCard() {
  return (
    <div className=" border border-background rounded-sm flex flex-col items-center p-4">
      <div className="bg-background rounded-md h-40 w-40"></div>
      <div className="flex gap-5 md:gap-12 justify-between items-center pt-2">
        <div className="space-y-2">
          <div className="bg-background h-3 w-20 rounded-sm"></div>
          <div className="bg-background h-3 w-10 rounded-sm"></div>
          <div className="bg-background h-3 w-10 rounded-sm"></div>
        </div>
        <div className="bg-background rounded-full place-content-center h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"></div>
      </div>
    </div>
  );
}

interface ProductSkeletonProps{
    length : number;
}

export function ProductSkeleton({ length }: ProductSkeletonProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {Array.from({ length }).map((_, index) => (
        <ProductSkeletonCard key={index} />
      ))}
    </div>
  );
}
