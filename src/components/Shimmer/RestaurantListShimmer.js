const RestaurantListShimmer = () => {
  return (
    <div className="grid grid-cols-1 gap-y-[10px] tablet:flex tablet:justify-between tablet:flex-wrap">
      {Array(16)
        .fill("")
        .map((e, index) => (
          <div key={index} className="flex tablet:flex-col tablet:w-[260px]">
            <div className="w-[20%]">
              <div className="bg-shimmerUi h-[65px] w-[60px] tablet:h-[150px] tablet:w-[230px] rounded-[10px] tablet:rounded-none shadow-md"></div>
            </div>
            <div className="w-[80%] font-Poopins flex flex-col justify-center gap-y-[10px] tablet:mt-[10px]">
              <div className=" bg-shimmerUi h-[10px] w-[40%]"></div>
              <div className=" bg-shimmerUi h-[10px] w-[60%]"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantListShimmer;
