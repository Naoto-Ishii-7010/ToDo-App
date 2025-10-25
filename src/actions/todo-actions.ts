"use server";

import { revalidatePath } from "next/cache";
import z from "zod";
import { getUserId } from "@/lib/fetch-data/fetch-user";
import { createTodoSchema } from "@/lib/schema/todo-schema";
import type { createTodoActionState } from "@/types/action-state";
import { prisma } from "../../prisma";

export const createTodo = async (
	_prevState: createTodoActionState,
	formData: FormData,
) => {
	const userId = await getUserId();

	// zodバリデーションチェック
	const validatedFields = createTodoSchema.safeParse({
		title: formData.get("title"),
		detail: formData.get("detail"),
	});

	if (!validatedFields.success) {
		return {
			errors: z.flattenError(validatedFields.error).fieldErrors,
			message: "入力内容に誤りがあります。",
		};
	}

	// DB処理
	try {
		await prisma.todo.create({
			data: {
				userId: userId,
				title: validatedFields.data.title,
				detail: validatedFields.data.detail,
			},
		});
		revalidatePath("/dashboard");
		return {
			message: "Todoの作成に成功しました。",
		};
	} catch (error) {
		console.error(error);
		return {
			message: "データベースへの接続に失敗しました。再度お試しください。",
		};
	}
};
