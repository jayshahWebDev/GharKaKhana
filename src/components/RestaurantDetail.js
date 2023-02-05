import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constant";

const RestaurantDetail = () => {
  const { name, id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  async function getRestaurantData() {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=23.022505&lng=72.5713621&menuId=${id}`
    );

    let json = await data.json();
    console.log(json);
    setRestaurantData(json);
  }

  useEffect(() => {
    getRestaurantData();
  }, []);
  console.log("restaurantData?.menu?.widgets::", restaurantData);
  return (
    <div>
      <div className="laptop:bg-black laptop:py-[20px]">
        <div className="mx-[4%] tablet:mx-[10%]">
          <div className="tablet:flex tablet:gap-x-[25px] laptop:gap-x-0">
            <div className="hidden tablet:block tablet:w-[25%] tablet:mr-[20px]">
              <img
                alt="hotelImage"
                src={IMG_URL + restaurantData?.data?.cloudinaryImageId}
                className="h-[100px] w-[250px] laptop:h-[170] object-cover"
              />
            </div>
            <div className="font-Poopins laptop:text-white tablet:w-[75%] flex justify-between tablet:items-center">
              <div className="laptop:flex laptop:flex-col laptop:gap-y-[5px]">
                <p className="font-semibold laptop:font-normal laptop:text-[30px]">
                  {restaurantData?.data?.name}
                </p>
                <p className="text-[12px] laptop:text-[13px] w-[250px] truncate">
                  {restaurantData?.data?.cuisines?.join(", ")}
                </p>
                <p className="text-[12px] laptop:text-[13px] w-[250px] truncate">
                  {restaurantData?.data?.locality +
                    ", " +
                    restaurantData?.data?.area}
                </p>
                <div className="hidden laptop:flex laptop:justify-between">
                  <div>
                    <div className="flex justify-center items-center gap-x-[3px]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                      </svg>
                      <p className="text-[12px] laptop:font-semibold laptop:text-[15px]">
                        {restaurantData?.data?.avgRatingString}
                      </p>
                    </div>
                    <p className="text-[12px]">
                      {restaurantData?.data?.totalRatingsString}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[15px] font-semibold">
                      {restaurantData?.data?.sla?.slaString}
                    </p>
                    <p className="text-[12px]">Delivery time</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[15px] font-semibold">
                      {"₹" +
                        restaurantData?.data?.costForTwo
                          ?.toString()
                          .substring(
                            0,
                            restaurantData?.data?.costForTwo?.toString()
                              .length - 2
                          )}
                    </p>
                    <p className="text-[12px]">Cost for two</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="border-[1px] py-[10px] px-[5px] shadow-md rounded-[10px] laptop:hidden">
                  <div className="flex justify-center items-center gap-x-[3px]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#3d4152"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    <p className="text-[12px]">
                      {restaurantData?.data?.avgRatingString}
                    </p>
                  </div>
                  <p className="text-[10px]">
                    {restaurantData?.data?.totalRatingsString}
                  </p>
                </div>

                {restaurantData?.data?.aggregatedDiscountInfo?.descriptionList
                  ?.length > 0 ? (
                  <div className="hidden laptop:w-[270px] h-[140px] border-[1px] border-white relative laptop:flex laptop:justify-center laptop:items-center laptop:px-[10px]">
                    <div className="bg-black absolute top-[-10px] left-[-5px] px-[10px] py-[5px]">
                      <p className="text-[17px] font-semibold font-Poopins">
                        OFFER
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                      {restaurantData?.data?.aggregatedDiscountInfo?.descriptionList?.map(
                        (offer) => (
                          <p
                            key={offer?.meta}
                            className="text-white laptop:text-[12px]"
                          >
                            {offer?.meta}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="laptop:hidden">
            <hr className="h-[5px] mt-[2%]" />
            <div className="flex gap-x-[15px]">
              <div className="flex justify-center items-center gap-x-[5px] font-semibold">
                <svg viewBox="0 0 100 100" width="16" height="16">
                  <circle cx="50" cy="50" r="50" fill="#000000" />
                  <line
                    x1="50"
                    y1="55"
                    x2="50"
                    y2="10"
                    stroke="white"
                    stroke-width="10"
                  />
                  <line
                    x1="55"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="white"
                    stroke-width="10"
                  />
                </svg>
                <p className="text-[15px]">23 Mins</p>
              </div>
              <div className="flex justify-center items-center gap-x-[5px] font-semibold">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 320 512"
                  fill="#000000"
                >
                  <path d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z" />
                </svg>
                <p className="text-[15px]">400 for two</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[4%] my-[2%] tablet:mx-[10%]">
        {restaurantData?.data?.menu?.widgets?.map((widget) =>
          widget?.entities?.length > 0 ? (
            <div key={widget.name}>
              {widget?.entities?.map((entity) =>
                restaurantData?.data?.menu?.items?.hasOwnProperty(
                  entity?.id
                ) ? (
                  <div className="font-Poopins">
                    <div className="flex mb-[2%] py-[10px]">
                      <div className="flex w-[75%] flex-col gap-y-[10px]">
                        <div className="w-[85%]">
                          <p className="font-semibold text-[14px] laptop:text-[17px]">
                            {
                              restaurantData?.data?.menu?.items?.[entity?.id]
                                ?.name
                            }
                          </p>
                          <p className="text-[14px] laptop:text-[17px]">
                            {"₹ " +
                              restaurantData?.data?.menu?.items?.[
                                entity?.id
                              ]?.price
                                ?.toString()
                                .substring(
                                  0,
                                  restaurantData?.data?.menu?.items?.[
                                    entity?.id
                                  ]?.price?.toString().length - 2
                                )}
                          </p>
                        </div>
                        <p className="line-clamp-2 w-[85%] text-[14px] laptop:text-[17px] min-h-[40px] max-h-[40px] laptop:max-h-[50px]">
                          {
                            restaurantData?.data?.menu?.items?.[entity?.id]
                              ?.description
                          }
                        </p>
                      </div>
                      <div className="w-[25%] relative">
                        <img
                          alt="menuImage"
                          src={
                            IMG_URL +
                            restaurantData?.data?.menu?.items?.[entity?.id]
                              ?.cloudinaryImageId
                          }
                          className="h-[80px] w-[120px] laptop:w-[150px] laptop:h-[100px] desktop:w-[200px] desktop:h-[120px] object-cover"
                        />
                        <button className="bg-white text-green-600 font-semibold px-[15px] py-[4px] border-[1px] shadow-md absolute top-[70%] left-[15%] laptop:top-[80%] laptop:left-[20%]">
                          ADD
                        </button>
                      </div>
                    </div>
                    <hr className="h-[7px]" />
                  </div>
                ) : (
                  ""
                )
              )}
              <hr className="h-[5px]" />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
