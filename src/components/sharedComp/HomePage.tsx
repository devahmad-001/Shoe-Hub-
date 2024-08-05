import Image from "next/image";
import React from "react";
import { Categories, HomeSplide } from "../Data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function HomePage() {
  return (
    <>
      {/* HomeImg */}

      {/* <div className="homeContainer">
        <div className="homeImgbox">
          <img className="homeShoeImg" src="/imgs/home/adidas.jpg" />
          <div className="homeTitleBox">
            <div className="homeHeading">
              <h1>PUME Volume-Up Pack</h1>
              <p>Fresh Look for the 24/7 season</p>
              <button className="homeBtnBox">Shop Now</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Categorey Box */}

      {/* <div className="categoriesCotainer">
        {Categories.map((data, index) => {
          return (
            <>
              <div className="categoreyImgbox" key={index}>
                <Image
                  width={297}
                  height={428}
                  alt=""
                  src={data.img}
                  title=""
                />
                <div className="overlayBackground">
                </div>
                <div className="categoreyTitlebox">
                  <h2>{data.title}</h2>
                <div className="categoreyBtnBox">
                 <button>Show Pack</button>
                 <button>{data.btnText}</button>
                </div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}

      {/* Splide */}

      <Splide aria-label="My Favorite Images">
        {HomeSplide.map((data, index) => {
          return (
            <SplideSlide key={index}>
              <div className="homeImgbox">
                <img className="homeShoeImg" src={data.imgsrc} />
                <div className="homeTitleBox">
                  <div className="homeHeading">
                    <h1>{data.title}</h1>
                    <p>Fresh Look for the 24/7 season</p>
                    <button className="homeBtnBox">Shop Now</button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

{
  /* <div className="categoreyTitlebox">
  <div>
    <h1>Category</h1>
    <p>Description</p>
  </div>
  <div>
    <button>Shop Pack</button>
    <button>Show All Addidas</button>
  </div>
</div>; */
}
