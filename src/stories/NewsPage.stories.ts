import type { Meta, StoryObj } from '@storybook/vue3-vite';

import NewsPage from '../pages/newsPage/NewsPage.vue';

const meta = {
  title: 'Pages/NewsPage',
  component: NewsPage,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof NewsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};