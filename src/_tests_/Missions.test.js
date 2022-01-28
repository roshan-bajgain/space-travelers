import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Missions from "../components/Space-missions";

describe("Mission Element Tests", () => {
  test("Check if Component Renders in DOM", () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
    expect(screen.queryByText(/Rocket/)).toBeNull();
    expect(screen.queryByText(/Mission/)).toBeTruthy();
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
