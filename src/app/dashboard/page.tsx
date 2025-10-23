import Image from "next/image";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/common/SignOutButton";
import { auth } from "../../../auth";

const Dashboard = async () => {
	const session = await auth();
	session || redirect("/");
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
			<SignOutButton />
		</div>
	);
};

export default Dashboard;
