import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

export default function Hero() {
  return (
    <section
      id="home"
      className=" w-full flex xl:flex-row flex-col justify-center
         min-h-screen gap-10 max-container"
    >
      <div
        className=" relative xl:w-2/5  w-full flex flex-col justify-center items-start
       max-xl:padding-x pt-28  "
      >
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1
          className="font-bold text-8xl font-palanquin max-sm:text-[72px]
        max-sm:leading-[82]  "
        >
          <span
            className="xl:bg-white
          xl:whitespace-nowrap relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span
            className="text-coral-red 
          inline-block mt-3"
          >
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray
        text-lg leading-8 mt-6 mb-14
        sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop Now"} imgURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl
              font-palanquin
              font-bold"
              >
                {stat.value}
              </p>
              <p
                className="leading-7 
              font-montserrat text-slate-gray"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center items-center 
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
}
