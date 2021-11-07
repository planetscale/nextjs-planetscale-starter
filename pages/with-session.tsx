import AppLayout from "@lib/components/Layouts/AppLayout";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Page = () => {
  const { status, data: session } = useSession({
    required: false,
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  if (!session) {
    return (
      <>
        <AppLayout title="With Session">
          <blockquote>
            <h1>Access Denied</h1>
            <h1>
              <Link href="/sign-in">Login</Link> to see a secret message
            </h1>
          </blockquote>
        </AppLayout>
      </>
    );
  }
  return (
    <>
      <AppLayout title="With Session">
        <div>
          <h1>
            Hello, {`${session.user.name ?? session.user.email}`} You can see
            this because you're logged in.
          </h1>
        </div>
      </AppLayout>
    </>
  );
};

export default Page;
