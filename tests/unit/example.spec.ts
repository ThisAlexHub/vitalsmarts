import { shallowMount } from "@vue/test-utils";
import QATest from "@/views/QATest.vue";

describe("QATest", () => {
  it("Does Something", () => {
    const msg = "new message";
    const wrapper = shallowMount(QATest, {});
    console.log(msg, wrapper);
  });
});
