import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const Navbar = (props) => {


  const brand_name = [];
  for (let item of props.new_test_arr) {
    brand_name.push({
      value: item.brandName,
      label: item.brandName,
    });
  }
  const state_name = [];
  for (let item of props.state_list) {
    state_name.push({
      value: item,
      label: item,
    });
  }
  const city_name = [];
  for (let item of props.city_list) {
    city_name.push({
      value: item,
      label: item,
    });
  }
function handleChange(e) {
  // e.preventDefault();
  // console.log(e.target.value);

}


  return (
    <div className="hidden lg:block xl:z-50 fixed h-full mt-10 ml-5">
      <div className=" h-64 w-64 shadow-md  rounded-2xl bg-black  ">
        {/* Left Part */}
        <div className="ml-2 pt-1 ">
          <Link
            to="/"
            className="items-center  text-gray-400 text-2xl pt-2 pl-2 "
          >
            Filters
          </Link>

          <div className="bg-black border-t text-blue-700 pt-5 pr-5 mt-2 space-y-4">
            <Select
            onChange={handleChange}
              styles={props.customStyles}
              placeholder="Products"
              options={brand_name}
            />
            <Select
              styles={props.customStyles}
              placeholder="State"
              options={state_name}
            />
            <Select
              styles={props.customStyles}
              placeholder="City"
              options={city_name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
