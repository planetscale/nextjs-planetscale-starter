import AppLayout from "@lib/components/Layouts/AppLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/", "/", {});
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return (
    <>
      <AppLayout>
        <div>
          <h1>
            Hello, {`${session.user.name ?? session.user.email}`} This is a
            protected route. You can see it because you're logged in.
          </h1>
        </div>
        Client Side Rendering This page uses the useSession() React Hook. The
        useSession() React Hook is easy to use and allows pages to render very
        quickly. The advantage of this approach is that session state is shared
        between pages by using the Provider in _app.js so that navigation
        between pages using useSession() is very fast. The disadvantage of
        useSession() is that it requires client side JavaScript.
        <blockquote>
          <p>This page is protected using the useSession hook.</p>
          <p>Either way works.</p>
          <p>
            But in this case the session is <strong>not</strong> available on
            the first render.
          </p>
        </blockquote>
      </AppLayout>
    </>
  );
};

export default Page;
