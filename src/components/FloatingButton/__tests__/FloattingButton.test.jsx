import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import FloatingButton from "../FloatingButton";

const tags = ["Today", "This Week"];

const TestWrapper = () => {
  const [value, setValue] = useState(0);
  return <FloatingButton value={value} tags={tags} callback={setValue} />;
};

describe("FloatingButton - Rendering", () => {
  it("Should render FloatingButton", () => {
    render(<FloatingButton value={0} tags={tags} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("Should render correct amount of items in FloatingButton", () => {
    render(<FloatingButton value={0} tags={tags} />);
    const buttons = screen.getAllByRole("tab");
    expect(buttons).toHaveLength(2);
  });
});

describe("FloatingButton - Behavior", () => {
  it("Should change FloatingButton value when user clicks on inactive tab", async () => {
    render(<TestWrapper />);
    const buttons = screen.getAllByRole("tab");

    expect(buttons[0]).toHaveAttribute("aria-selected", "true");

    await userEvent.click(buttons[1]);

    expect(buttons[0]).toHaveAttribute("aria-selected", "false");
    expect(buttons[1]).toHaveAttribute("aria-selected", "true");
  });
});
