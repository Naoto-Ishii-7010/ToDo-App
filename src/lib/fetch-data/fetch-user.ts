import { cache } from "react";
import { auth } from "../../../auth";

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
