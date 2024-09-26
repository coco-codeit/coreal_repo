"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const commentSchema = z.object({
  comment: z
    .string()
    .min(1, "댓글을 입력해주세요.")
    .max(300, "댓글은 300자를 초과할 수 없습니다."),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentFormProps {
  onSubmit: (text: string) => void;
  placeholder?: string;
}

export default function CommentForm({
  onSubmit,
  placeholder = "댓글을 입력하세요.",
}: CommentFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isValid, isDirty },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
  });

  const commentLength = watch("comment")?.length || 0;

  const handleFormSubmit = (data: CommentFormData) => {
    onSubmit(data.comment);
    reset();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(handleFormSubmit)();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col p-4 mt-10 w-full rounded-lg border border-zinc-300 bg-slate-100"
    >
      <textarea
        {...register("comment")}
        //TODO : onKeyDown 쓰면 이상하게 오류가나감.. 수정필요
        onKeyPress={handleKeyPress}
        className="w-full text-lg leading-relaxed text-slate-700 bg-transparent border-none resize-none outline-none placeholder-slate-400"
        placeholder={placeholder}
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-slate-500">{commentLength}/300</span>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-bold text-white bg-violet-500 rounded border border-violet-500 hover:bg-violet-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isValid || !isDirty}
        >
          등록
        </button>
      </div>
    </form>
  );
}
