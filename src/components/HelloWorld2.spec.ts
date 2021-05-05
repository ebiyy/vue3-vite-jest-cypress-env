import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld2";

describe("HelloWorld", () => {
  it("should display header text", () => {
    const msg = "Hello Vue 3";
    const wrapper = mount(HelloWorld, { props: { msg } });

    expect(wrapper.find("h1").text()).toEqual(msg);
  });
});
