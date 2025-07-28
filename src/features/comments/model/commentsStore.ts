import { defineStore } from "pinia";
import { fetchNewsItem } from "shared/api/fetchNewsItem";
import { commentSchema, type comment } from "entities/comment/commentType";



export const CommentStore = defineStore('comments', {
  state: () => ({
    comments: [] as comment[],
    idListComments: [] as number[],
    isLoading: false,
    isError: false,
  }),

  actions: {
    setRoot(commentsID: number[]){
      this.idListComments = [...commentsID];
    },

    async fetchComment(index: number):Promise<comment | undefined>{
      this.isLoading = true;
      try {
        for (const commentID of this.idListComments){
          const response = await fetchNewsItem(commentID);
          return({
            id: response.id,
            author: response.by ?? '',
            text: response.text ?? '',
            child: response.kids ?? [],
          })
        }
      } catch {
        this.isError = true;
        console.error(`Ошибка в получении комментария с ИД ${index}!`);
      } finally {
        this.isLoading = false;
      }
    },

    async getComments(idListComments: number[]){
      this.idListComments = idListComments;
      for (const commentID of this.idListComments){
        const comment = await this.fetchComment(commentID);
        !!comment && this.comments.push(comment);
      };
    },

    findCommentById(comments: comment[], id: number): comment | null {
      for (const comment of comments) {
        if (comment.id === id) {
          return comment;
        }
        
        if (Array.isArray(comment.child)) {
          const isComment = commentSchema.safeParse(comment.child);
          if (isComment.success){
            const foundInChildren = this.findCommentById(comment.child as comment[], id);
            if (foundInChildren) {
              return foundInChildren;
            }
          }
        }
      }
      return null;
    },

    async updateComment(updateID: number):Promise<void>{
      const fundComment = this.findCommentById(this.comments, updateID);
      if (!!fundComment){
        const isComment = commentSchema.safeParse(fundComment.child);
        if (!isComment.success){
          const uploadedComments:comment[] = [];
          for (const commentID of (fundComment.child as number[])){
            const comment = await this.fetchComment(commentID);
            !!comment && uploadedComments.push(comment);
          }
          fundComment.child = uploadedComments;
        }
      }
    },
  },
})