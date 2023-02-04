import { useEffect, useState } from "react";
import RestaurantListShimmer from "./Shimmer/RestaurantListShimmer";
import { IMG_URL } from "../constant";

const RestaurantsList = () => {
  const [restaurant, setRestaurant] = useState(null);

  async function getCarouselData() {
    console.log("useEffect");
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );

    let finalData = await data.json();
    setRestaurant(finalData?.data?.cards?.[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getCarouselData();
  }, []);

  //   console.log("data:::", restaurant);
  //   if (!restaurant) {
  //     return null;
  //   }

  return (
    <div className="mx-[4%] mt-[2%] tablet:mx-[10%]">
      {!restaurant ? (
        <RestaurantListShimmer />
      ) : (
        <div className="grid grid-cols-1 gap-y-[10px] tablet:flex tablet:justify-between tablet:flex-wrap">
          {restaurant.map((card) => (
            <div
              key={card?.data?.id}
              className="flex tablet:flex-col tablet:w-[260px] tablet:p-[10px] cursor-pointer hover:shadow-lg tablet:hover:border-[1px]"
            >
              <div className="w-[20%] tablet:w-full tablet:flex tablet:justify-center tablet:items-center">
                <img
                  alt="hotelImage"
                  src={IMG_URL + card?.data?.cloudinaryImageId}
                  className="h-[65px] w-[60px] tablet:h-[150px] tablet:w-[230px] object-cover rounded-[10px] tablet:rounded-none shadow-md"
                />
              </div>
              <div className="w-[80%] tablet:w-full font-Poopins flex flex-col tablet:gap-y-[7px] tablet:mt-[10px] justify-center tablet:items-center">
                <p className="font-semibold tablet:w-[230px] text-[13px] tablet:text-[17px] tablet:font-medium">
                  {card?.data?.name}
                </p>
                <div className="flex justify-between w-[70%] tablet:w-[230px] font-Poopins font-medium text-navBarText">
                  <div className="flex justify-center items-center gap-x-[3px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#3d4152"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <p className="text-[12px] tablet:text-[14px]">
                      {card?.data?.avgRating}
                    </p>
                  </div>
                  <p className="text-[12px] tablet:text-[14px]">
                    {card?.data?.slaString}
                  </p>
                  <p className="text-[12px] tablet:text-[14px]">
                    {card?.data?.costForTwoString}
                  </p>
                </div>
                <p className="text-[11px] tablet:text-[14px] truncate tablet:w-[230px]">
                  {card?.data?.cuisines?.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantsList;
