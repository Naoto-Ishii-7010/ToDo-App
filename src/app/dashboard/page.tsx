import Image from "next/image";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/common/SignOutButton";
import { getAllTodos } from "@/lib/fetchData";
import { auth } from "../../../auth";

const Dashboard = async () => {
	const session = await auth();
	if (!session || !session.user || !session.user.id) {
		redirect("/");
	}
	const allTodos = await getAllTodos(session.user.id);
	return (
		<div>
			<div>
				<p>signed in as {session?.user?.name || session?.user?.email}</p>
				{session?.user?.image ? (
					<Image
						src={session.user.image}
						alt={"プロフィール画像"}
						width={32}
						height={32}
						className="rounded-full"
					/>
				) : null}
			</div>
			<div>
				<h1>Todos</h1>
				{allTodos.length > 0 ? (
					<ul>
						{allTodos.map((todo) => (
							<li key={todo.id}>{todo.title}</li>
						))}
					</ul>
				) : (
					<p>No todos found</p>
				)}
			</div>
			<SignOutButton />
		</div>
	);
};

export default Dashboard;
