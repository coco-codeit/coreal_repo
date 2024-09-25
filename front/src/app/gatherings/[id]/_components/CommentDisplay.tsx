import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { useCommentStore } from "@/store/gatheringsDetail/useCommentStore";
import { Comment } from "@/types/gatheringsDetail/comment";

//코드의 가독성을 위해 코드를 분리하지않고 밀접한 관계를 가진 컴포넌트를 같은 파일내에 작성을 했습니다

export default function CommentDisplay() {
  const { comments, addComment, addReply, deleteComment } = useCommentStore();
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`mb-4 ${isReply ? "ml-12" : ""}`}>
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-gray-400 rounded-full flex-shrink-0" />
        <div className="flex-grow">
          <p className="text-xl text-[#484848] font-semibold">{comment.user}</p>
          <p className="text-lg text-[#484848] mt-1">{comment.text}</p>
          <div className="flex space-x-2 text-sm text-[#6a6a6a] mt-1">
            <span>{comment.createdAt}</span>
            <button onClick={() => setReplyingTo(comment.id)}>답글달기</button>
            <button onClick={() => deleteComment(comment.id)}>삭제</button>
          </div>
        </div>
      </div>
      {replyingTo === comment.id && (
        <div className="mt-2 ml-14">
          <CommentForm
            onSubmit={(text) => {
              addReply(comment.id, text);
              setReplyingTo(null);
            }}
            placeholder="답글을 작성해주세요"
          />
        </div>
      )}
    </div>
  );

  const renderCommentWithReplies = (comment: Comment) => {
    const flattenReplies = (c: Comment): Comment[] => {
      return [c, ...(c.replies?.flatMap(flattenReplies) || [])];
    };

    const allComments = flattenReplies(comment);

    return (
      <div key={comment.id} className="mb-8">
        {allComments.map((c, index) => renderComment(c, index > 0))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-8">
      <p className="text-[28px] font-semibold text-[#484848] mb-6">댓글</p>
      {comments.map(renderCommentWithReplies)}
      <CommentForm onSubmit={addComment} />
    </div>
  );
}
