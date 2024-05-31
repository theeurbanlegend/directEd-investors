import { Skeleton } from "@radix-ui/themes";


const PoolCardsLoader = () => {
  const renderCard = () => {
    return (
      <div
        className="max-w-lg rounded-xl overflow-hidden shadow-lg"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <Skeleton className="text-lg font-semibold" height={'30px'} />
          <Skeleton className="text-lg font-semibold" height={'30px'} />
          <Skeleton className="text-lg font-semibold" height={'30px'} />
          <Skeleton className="text-lg font-semibold" height={'30px'} />
          <Skeleton className="text-lg font-semibold" height={'30px'} />
          <Skeleton className="text-lg font-semibold" height={'30px'} />
          <Skeleton className="text-lg font-semibold" height={'30px'} />
        </div>
        <div className="px-6 pt-2 pb-2 text-center mb-10">
          <Skeleton className="text-lg font-semibold" height={'30px'} />
        </div>
      </div>
    );
  };

    return (
        <>
        {renderCard()}
        {renderCard()}
        {renderCard()}
        </>
    );
};

export default PoolCardsLoader;
