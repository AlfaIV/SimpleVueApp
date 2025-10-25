import NewsCard from "./NewsCard.vue";
import { render, screen } from "@testing-library/vue";
import { describe, it, test } from "vitest";

describe('widget - NewsCard', () => {
  it('simple render', () => {
    render(NewsCard, {
      props: {
        id: 1,
        header: "Example Header",
        rating: 5,
        author: "John Doe",
        date: "2023-10-25",
      },
    });
  })
})