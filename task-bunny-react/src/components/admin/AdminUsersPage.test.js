import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AdminUserPage from "./AdminUsersPage";

Enzyme.configure({ adapter: new Adapter() });

describe("AdminComponent", () => {
  const wrapper = shallow(<AdminUserPage />);
  it("should contain parent div", () => {
    const parentDiv = wrapper.find("div");
    expect(parentDiv.length).toBe(1);
  });
  it("should have h3 with the text", () => {
    const h3 = wrapper.find("h3");
    expect(h3.text()).toBe("Users ");
  });
  it("should contain a button", () => {
    const buttons = wrapper.find("button");
    expect(buttons.length).toBe(3);
  });
});
