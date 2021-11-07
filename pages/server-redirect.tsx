import AppLayout from "@lib/components/Layouts/AppLayout";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  return (
    <>
      <AppLayout title="Server Redirect">
        <div>
          <h1>
            Hello, {`${session.user.name ?? session.user.email}`} This is a
            protected route. You can see it because you're logged in.
          </h1>
        </div>
        <blockquote>
          <p>This page is protected using Page.auth = true</p>
          <p>Either way works.</p>
          <p>But in this case the session is available on the first render.</p>
        </blockquote>
      </AppLayout>
    </>
  );
};

Page.auth = {
  redirectTo: "/",
};

export default Page;
