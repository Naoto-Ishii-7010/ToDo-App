import { redirect } from "next/navigation";
import SignInButton from "@/components/common/SignInButton";
import { auth } from "../../auth";

const Home = async () => {
	const session = await auth();
	session && redirect("/dashboard");
	return <SignInButton />;
};

export default Home;
