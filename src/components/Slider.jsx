import React from "react";
import bannerImg1 from "../assets/banner_dc873741-94c0-4fdf-b15e-f144baab3da8.jpg";
import bannerImg2 from "../assets/istockphoto-1204560673-612x612.jpg";
import bannerImg3 from "../assets/istockphoto-1280491305-612x612.jpg";
import bannerImg4 from "../assets/bollywood-actor-kunal-kapoor-talks-about-ketto-his-crowdfunding-startup-which-has-raised-rs-40-cr-for-social-causes.webp";

const Slider = () => {
  return (
    <div className="mt-28">
      <div className="my-14">
        <h2 className="text-xl px-2 lg:text-3xl lg:w-8/12 mx-auto font-bold text-center ">
          Your Small Contribution Can Spark Big Changes! Join Our Journey to
          Make a Difference Today.
        </h2>
        <p className="text-gray-500 my-6 text-center lg:w-10/12 mx-auto ">
          Join our crowdfunding platform to turn dreams into reality. Support
          meaningful projects or start your own campaign today—together, we can
          create lasting change!
        </p>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={bannerImg1}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={bannerImg2}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={bannerImg3}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={bannerImg4}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
