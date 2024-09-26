import { create } from "zustand";
import { CommentState, Comment } from "@/types/gatheringsDetail/comment";

// 댓글 추가 , 답글 추가 , 댓글 or 답글 삭제 기능입니다 단 백엔드 연동이 된 후에 리팩토링이 무조건적으로 되어야하는 부분입니다.

const addReplyToComment = (
  comment: Comment,
  parentId: number,
  newReply: Comment,
): Comment => {
  if (comment.id === parentId) {
    return {
      ...comment,
      replies: [...(comment.replies || []), newReply],
    };
  }
  if (comment.replies) {
    return {
      ...comment,
      replies: comment.replies.map((reply) =>
        addReplyToComment(reply, parentId, newReply),
      ),
    };
  }
  return comment;
};

const removeCommentById = (comments: Comment[], id: number): Comment[] => {
  return comments.filter((comment) => {
    if (comment.id === id) {
      return false;
    }
    if (comment.replies) {
      comment.replies = removeCommentById(comment.replies, id);
    }
    return true;
  });
};

export const useCommentStore = create<CommentState>((set) => ({
  comments: [
    {
      id: 1,
      text: "오 근데 이거 아이템 이상한대요?",
      user: "징니",
      createdAt: "10분전",
      replies: [
        {
          id: 2,
          text: "@징니 ??????네 진짜요?",
          user: "김댓글",
          createdAt: "10분전",
        },
      ],
    },
  ],

  addComment: (text: string) =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          id: Date.now(),
          text,
          user: "현재 사용자",
          createdAt: "방금 전",
          replies: [],
        },
      ],
    })),

  addReply: (parentId: number, text: string) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        addReplyToComment(comment, parentId, {
          id: Date.now(),
          text,
          user: "현재 사용자",
          createdAt: "방금 전",
          replies: [],
        }),
      ),
    })),

  deleteComment: (id: number) =>
    set((state) => ({
      comments: removeCommentById(state.comments, id),
    })),
}));
