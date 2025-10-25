import { cache } from "react";
import { auth } from "../../../auth";
import { prisma } from "../../../prisma";

// UserIDの取得
export const getUserId = cache(async () => {
	const session = await auth();
	if (!session) {
		throw new Error("認証されていません。サインインし直してください。");
	}
	if (!session.user?.id) {
		throw new Error("ユーザーIDが取得できません。サインインし直してください。");
	}
	return session.user.id;
});

// 全Todoの取得
export const getAllTodos = cache(async (userId: string) => {
	try {
		const allTodos = await prisma.todo.findMany({
			where: {
				userId: userId,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		return allTodos;
	} catch (error) {
		console.error(error);
		throw new Error("Todoの取得に失敗しました。");
	}
});
