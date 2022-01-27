import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Rockets from "../components/Space-rockets";

describe("Rocket Element Tests", () => {
  test("Check if Component Renders in DOM", () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
    expect(screen.queryByText(/Missions/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
