import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import * as stories from './NewsCard.stories';
import NewsCard from '../widgets/newsCard/NewsCard.vue';

Object.entries(stories).forEach(([storyName, Story]) => {
  describe(`Story ${storyName}`, () => {
    it('Renders properly', () => {
      render(NewsCard);
      expect(screen).not.toBeUndefined;
    });
  });
});