import AppLayout from "@lib/components/Layouts/AppLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { status, data } = useSession({
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
            Hello, {`${data.user.name ?? data.user.email}`} This is a protected
            route. You can see it because you're logged in.
          </h1>
        </div>
        <blockquote>
          <code>
            <pre>
              <p>This page is protected using the useSession hook.</p>
              <p>Either way works.</p>
              <p>
                But in this case the session is <strong>not</strong> available
                on the first render.
              </p>
            </pre>
          </code>
        </blockquote>
      </AppLayout>
    </>
  );
};

export default Page;
