import LoadingSkeleton from "components/loading/LoadingSkeleton";
import React from "react";

const BannerLoading = () => {
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] "></div>
      <LoadingSkeleton className="object-cover w-full h-full rounded-lg"></LoadingSkeleton>

      <div className="absolute bottom-0 w-full text-white left-5">
        <h3 className="mb-5 text-4xl font-bold">
          <LoadingSkeleton width="200px" height="40px"></LoadingSkeleton>
        </h3>
        <div className="flex items-center mb-5 gap-x-3">
          <span className="px-5 py-3 border rounded-md"></span>
          <span className="px-5 py-3 border rounded-md"></span>
          <span className="px-5 py-3 border rounded-md"></span>
        </div>
        <LoadingSkeleton
          width="70px"
          height="40px"
          borderRadius="8px"
          className="mb-5"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};

export default BannerLoading;
