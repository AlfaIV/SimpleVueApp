import { z } from 'zod';

export type comment = {
  id: number,
  author: string;
  text: string;
  child: number[] | comment[]| null;
};

export const commentSchema: z.ZodType<comment> = z.lazy(() =>
  z.object({
    id: z.number(),
    author: z.string(),
    text: z.string(),
    child: z.union([
      z.array(z.number()),
      z.array(commentSchema),
      z.null(),
    ]),
  })
);