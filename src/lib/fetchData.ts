import { cache } from "react";
import { prisma } from "../../prisma";

export const getAllTodos = cache(async (userId: string) => {
	const allTodos = await prisma.todo.findMany({
		where: {
			userId: userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return allTodos;
});
