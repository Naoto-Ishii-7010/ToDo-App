import { cache } from "react";
import { prisma } from "../../../prisma";

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
