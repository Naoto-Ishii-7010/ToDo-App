import { z } from "zod";

export const createTodoSchema = z.object({
	title: z
		.string({
			error: "タイトルは文字列である必要があります",
		})
		.min(1, { error: "タイトルは必須です" }),
	detail: z
		.string({
			error: "詳細は文字列である必要があります",
		})
		.optional(),
});
