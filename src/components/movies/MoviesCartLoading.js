import LoadingSkeleton from "components/loading/LoadingSkeleton";

const MoviesCartLoading = () => {
  return (
    <div className="movies-cart flex flex-col h-[430px] w-full rounded-lg p-3 bg-[#312c26] text-white">
      <LoadingSkeleton
        width="100%"
        height="250px"
        className="object-cover mb-3 rounded-lg"
      ></LoadingSkeleton>

      <div className="flex flex-col flex-1">
        <h3 className="flex-1 mb-3 font-bold text-white ">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-3 opacity-70">
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="40px"
          borderRadius="8px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};

export default MoviesCartLoading;
