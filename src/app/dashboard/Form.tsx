"use client";
import { useActionState } from "react";
import { createTodo } from "@/actions/todo-actions";
import type { createTodoActionState } from "@/types/action-state";

const Form = () => {
	const initialState: createTodoActionState = {
		errors: {},
		message: null,
	};

	const [state, formAction, isPending] = useActionState(
		createTodo,
		initialState,
	);

	return (
		<>
			<h1>Create Todo</h1>
			{state?.message && <p>{state.message}</p>}
			<form action={formAction}>
				<input type="text" name="title" placeholder="title" />
				{state?.errors?.title?.map((error: string) => (
					<p key={error}>{error}</p>
				))}
				<input type="text" name="detail" placeholder="detail" />
				{state?.errors?.detail?.map((error: string) => (
					<p key={error}>{error}</p>
				))}
				<button type="submit" disabled={isPending}>
					{isPending ? "Creating..." : "Create"}
				</button>
			</form>
		</>
	);
};

export default Form;
