import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AdminTaskDelete from "./AdminTaskDelete";

Enzyme.configure({ adapter: new Adapter() });

describe("AdminComponent", () => {
  const wrapper = shallow(<AdminTaskDelete />);
  it("should contain parent div", () => {
    const parentDiv = wrapper.find("div");
    expect(parentDiv.length).toBe(1);
  });
  it("should have h3 with the text", () => {
    const h3 = wrapper.find("h3");
    expect(h3.text()).toBe("Delete a Task Below");
  });
});
