import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("should render", () => {
  const results = render(App, { props: { name: "test" } });
  expect(() => results.getByText("Hello test!")).not.toThrow();
});
