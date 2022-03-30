import React from "react";
import "./Filter.css";
import Selector from "../Selector";
import MovieCalendar from "../MovieCalendar";
import Slider from "../Slider";

const Filter = ({
  setGenre,
  dateStart,
  dateEnd,
  setDateStart,
  setDateEnd,
  sliderValue,
  setSliderValue,
}) => {
  return (
    <div id="filter">
      <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <MovieCalendar
        dateStart={dateStart}
        dateEnd={dateEnd}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
      />
      <Selector setGenre={setGenre} />
    </div>
  );
};

export default Filter;
