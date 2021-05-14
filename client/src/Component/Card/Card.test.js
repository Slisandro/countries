import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Card from "./Card";

configure({ adapter: new Adapter() });

describe("<Card />", () => {
  describe("Estructura", () => {
    let wrapper;
    let props = {
      id: "ARG",
      name: "Argentina",
      region: "Americas",
      capital: "Buenos Aires",
      image: "https://restcountries.eu/data/arg.svg",
    }
    beforeEach(() => {
      wrapper = shallow(<Card props={props} />);
    });

    it('Renderiza una imagen', () => {
      expect(wrapper.find('img')).toHaveLength(1);
    });

    it('Debe tener un boton de tipo submit', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });
});