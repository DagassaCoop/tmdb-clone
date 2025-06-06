import { render, screen, waitFor } from "@testing-library/react";

import MediaList from "../MediaList";
import { mediaListContents } from "../mock/mediaListContents";
import { MediaListContents } from "../types";

describe("MediaList - Rendering", () => {
  describe("Trending type of content", () => {
    it("Should render title", () => {
      render(
        <MediaList content={mediaListContents[MediaListContents.TRENDING]} />
      );
      expect(screen.getByText("Trending")).toBeInTheDocument();
    });

    it("Should render list of items in div with role: 'list-wrapper'", async () => {
      const content = mediaListContents[MediaListContents.TRENDING];

      render(<MediaList content={content} />);

      const listWrapper = screen.getByRole("list-wrapper");
      expect(listWrapper).toBeInTheDocument();

      await waitFor(() => {
        expect(listWrapper.children.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Popular type of content", () => {
    it("Should render title", () => {
      render(
        <MediaList content={mediaListContents[MediaListContents.POPULAR]} />
      );
      expect(screen.getByText("What's Popular")).toBeInTheDocument();
    });

    it("Should render list of items in div with role: 'list-wrapper'", async () => {
      const content = mediaListContents[MediaListContents.POPULAR];

      render(<MediaList content={content} />);

      const listWrapper = screen.getByRole("list-wrapper");
      expect(listWrapper).toBeInTheDocument();

      await waitFor(() => {
        expect(listWrapper.children.length).toBeGreaterThan(0);
      });
    });
  });

  it("Should render FloatingButton", () => {
    const content = mediaListContents[MediaListContents.TRENDING];

    render(<MediaList content={content} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
});
