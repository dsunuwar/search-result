"use client";

import { render, screen } from "@testing-library/react";
import Image from "./image";

describe("image", () => {
  it("renders image", () => {
    render(<Image url="https://somecdn.com/img/1" caption="Mock image" />);
    expect(screen.getByAltText("Mock image")).not.toBeNull();
  });
});
