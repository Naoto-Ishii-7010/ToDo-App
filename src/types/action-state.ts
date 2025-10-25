import type { Todo } from "@prisma/client";

// 共通のエラーメッセージ型
type ErrorMessages<T> = Partial<Record<keyof T, string[]>>;

// 各フォームステートの型定義
export type createTodoActionState = {
	errors?: ErrorMessages<Pick<Todo, "title" | "detail">>;
	message?: string | null;
};
