import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Profiles from "../components/Space-profiles";

describe("Mission Element Tests", () => {
  test("Check if Component Renders in DOM", () => {
    render(
      <Provider store={store}>
        <Profiles />
      </Provider>
    );
    expect(screen.queryByText(/My Rockets/)).toBeTruthy();
    expect(screen.queryByText(/My Missions/)).toBeTruthy();
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profiles />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
