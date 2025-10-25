import NewsCard from "./NewsCard.vue";
import { createRouter, createWebHistory, useRouter } from "vue-router";
import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it, test, vi } from "vitest";

vi.mock("vue-router");

useRouter.mockReturnValue({
  push: vi.fn(),
})

describe('widget - NewsCard', () => {
  it('Проверка отрисовки пропсов', () => {
    render(NewsCard, {
      props: {
        id: 1,
        header: "Example Header",
        rating: 5,
        author: "John Doe",
        date: "2023-10-25",
      },
    });

    expect(screen.getByText("Example Header")).toBe;
    expect(screen.getByText("автор: John Doe")).toBe;
    expect(screen.getByText("рейтинг: 5")).toBe;
    expect(screen.getByText("дата публикации: 2023-10-25")).toBe;
  })
  it("Переходит на страницу новости при клике", async () => {
    const utils = render(NewsCard, {
      props: {
        id: 1,
        header: "Заголовок новости",
        rating: 5,
        author: "Автор",
        date: "2023-10-25",
      }
    });

    await fireEvent.click(screen.getByText("Заголовок новости"));

    expect(useRouter().push).toHaveBeenCalled;
    expect(useRouter().push).toHaveBeenCalledOnce;
    expect(useRouter().push).toHaveBeenCalledWith('/news/1');
  });
})