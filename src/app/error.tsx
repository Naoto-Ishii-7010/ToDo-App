"use client";

const ErrorPage = ({ error }: { error: Error }) => {
	return <div>ErrorPage: {error.message}</div>;
};

export default ErrorPage;
