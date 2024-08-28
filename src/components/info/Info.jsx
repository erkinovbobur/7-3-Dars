import { GiCompass } from "react-icons/gi";
import ta from "../../images/ta.png";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import com from "../../images/com.avif"

import { BiSun } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import React from "react";
import { Container } from "../../utils";

import { useSelector } from "react-redux";

const Info = () => {
  const data = useSelector((state) => state.searchData);
  console.log(data);

  if (!data || !data.current || !data.forecast) {
    return;
  }

  return (
    <Container>
      <div
        className="w-[460px] h-[196px] rounded-[30px] p-8 flex items-center justify-between"
        style={{ boxShadow: "0 4px 15px blueviolet" }}
      >
        <div className="text-left">
          <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
            <WiHumidity className="text-[50px]" />
            <p className="text-black text-[18px]">
              Humidity {data.current.humidity}%
            </p>
          </div>
          <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
            <BiSun className="text-[50px]" />
            <p className="text-black text-[18px]">
              UV Index: {data.current.uv} out of 10
            </p>
          </div>
        </div>

        <div className="h-full w-[1px]  bg-[pink] mx-4"></div>

        <div className="text-right">
          <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
            <BsFillSunsetFill className="text-[50px]" />
            <p className="text-black text-[18px]">
              Sunrise {data.forecast.forecastday[0].astro.sunrise}
            </p>
          </div>
          <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
            <BsFillSunriseFill className="text-[50px]" />
            <p className="text-black text-[18px]">
              Sunset {data.forecast.forecastday[0].astro.sunset}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div
          className="w-[460px] h-[196px] rounded-[30px] pt-8 bg-purple-500  flex items-center justify-center gap-[100px]"
          style={{ boxShadow: "0 4px 15px blueviolet" }}
        >
          <div className="w-[150px] ">
            <img className="rounded-[100px]" src={ta} alt="" />
          </div>
          <div className="w-[150px] ">
         <img className="rounded-[100px]" src={com} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
