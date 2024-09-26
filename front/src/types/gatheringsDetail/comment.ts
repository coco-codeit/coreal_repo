//임시로 만든 댓글의 타입입니다. 추후 수정이 필요합니다.

export interface Comment {
  id: number;
  text: string;
  user: string;
  createdAt: string;
  replies?: Comment[];
}

export interface CommentState {
  comments: Comment[];
  addComment: (text: string) => void;
  addReply: (parentId: number, text: string) => void;
  deleteComment: (id: number) => void;
}
