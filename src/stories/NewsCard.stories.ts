import type { Meta, StoryObj } from '@storybook/vue3-vite';

import NewsCard from '../widgets/newsCard/NewsCard.vue';

const meta = {
  title: 'Widgets/NewsCard',
  component: NewsCard,
  tags: ['autodocs'],
  argTypes: {
    id: { control: { type: 'number', min:0} },
    header: { control: 'text' },
    rating: { control: { type: 'number', min:0, max:5, step: 1 } },
    author: { control: 'text' },
    date: { control: 'text' },
  },
  args: {
    id: 0,
    header: 'header',
    rating: 0,
    author: 'author',
    date: Date.now().toLocaleString("ru-RU"),
  },
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};