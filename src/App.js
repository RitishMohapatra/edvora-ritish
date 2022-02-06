import "./App.css";
import Navbar from "./comp/Navbar";
import React, { Component } from "react";
import News from "./comp/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await fetch("https://assessment-edvora.herokuapp.com/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }


  render() {
    const { DataisLoaded, items } = this.state;
    let brands = [];
    items.map((elem) => {
      brands.push(elem.brand_name);
    });

    let uniq = [...new Set(brands)];
    // Filter
    let filter_brand= ["Oil"]

    let state_name = [];
    items.map((elem) => {
      state_name.push(elem.address.state);
    });
    let uniq_state = [...new Set(state_name)];
    // Filter
    let filter_state= ["Bihar"]

    let city_name = [];
    items.map((elem) => {
      city_name.push(elem.address.city);
    });
    let uniq_city = [...new Set(city_name)];
    // Filter
    let filter_city= ["Kadi"]

    let new_test_arr = [];
    for (let item of uniq) {
      new_test_arr.push({
        list: items.filter((element) => element.brand_name === item),
        brandName: item,
      });
    }



    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "#2d2d2d",
        border: 0,
      }),
      menu: (base) => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
      }),
    };

    return (
      <>
        <Router>
          <Navbar
            new_test_arr={new_test_arr}
            state_list={uniq_state}
            city_list={uniq_city}
            brand_list={uniq  }
            customStyles={customStyles}
          />

          <Switch>
            <Route exact path="/">
              <News new_test_arr={new_test_arr} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
