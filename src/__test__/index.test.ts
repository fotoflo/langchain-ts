import { initialCall } from "../index.ts";

describe("initialCall", () => {
  it("should return some text from openai", async () => {
    const result = await initialCall();

    console.log(result);

    expect(typeof result).toBe("string");
  }, 10000);
});
