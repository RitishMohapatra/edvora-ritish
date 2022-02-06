import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <div className=" text-white bg-custom-gray">
        <section className="max-w-6xl lg:ml-72 lg:mr-14 py-12">
          <h1 className="text-3xl font-bold   pb-4 bold">Edvora</h1>
          <h1 className="text-3xl pb-2 text-gray-400 bold">Products</h1>
          {/* {console.log(this.props.new_test_arr)} */}

          <div className=" rounded-box border-gray-500">
            {this.props.new_test_arr.map((item, index) => {
              return (
                <div>
                  <h1 className="text-3xl border-b  bold">{item.brandName}</h1>

                  <div className="flex bg-black space-x-6  overflow-x-scroll ">
                    {item.list.map((elem) => {
                      return (
                        <NewsItem
                          key={elem.image}
                          title={elem.product_name}
                          description={elem.discription}
                          imageUrl={elem.image}
                          brandname={elem.brand_name}
                          price={elem.price}
                          location={elem.address.city}
                          date={elem.date}
                        />
                      );
                    })}
                  </div>
                  <h1 className=" text-sm p-2 text-center text-white bold">
                    ←←← Scroll →→→
                  </h1>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default News;
