import { useEffect, useState } from "react";
import { IMG_URL } from "../constant";
import CarouselShimmer from "./Shimmer/CarouselShimmer";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);

  async function getCarouselData() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING"
    );

    let finalData = await data.json();
    setCarouselData(finalData?.data?.cards?.[1]?.data?.data?.cards);
  }

  useEffect(() => {
    getCarouselData();
  }, []);

  return (
    // <div className="flex overflow-x-auto mx-[4%]">
    //   <div className="flex gap-x-[30px]">
    //     <img
    //       alt="carousel"
    //       src={"https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/production/pneknawbadtvceqzwiep"}
    //       className="h-[200px] w-[200px]"
    //     />
    //     <img
    //       alt="carousel"
    //       src={"https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/production/pneknawbadtvceqzwiep"}
    //       className="h-[200px] w-[200px]"
    //     />
    //     <img
    //       alt="carousel"
    //       src={"https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/production/pneknawbadtvceqzwiep"}
    //       className="h-[200px] w-[200px]"
    //     />
    //     <img
    //       alt="carousel"
    //       src={"https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/production/pneknawbadtvceqzwiep"}
    //       className="h-[200px] w-[200px]"
    //     />
    //   </div>
    // </div>

    <div className="overflow-x-auto flex">
      {carouselData.length <= 0 ? (
        <CarouselShimmer />
      ) : (
        carouselData.map((card) => (
          <div key={card?.data?.bannerId} className="flex gap-x-[30px]">
            <img
              alt="carousel"
              src={IMG_URL + card?.data?.creativeId}
              className="h-[200px] w-[200px]"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Carousel;
