import { signIn } from "../../../auth";

const SignInButton = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
		>
			<button type="submit">Signin with Google</button>
		</form>
	);
};

export default SignInButton;
