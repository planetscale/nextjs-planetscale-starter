import AppLayout from "@lib/components/Layouts/AppLayout";
import { useSession, signIn } from "next-auth/react";
import { useQuery } from "react-query";
import superagent from "superagent";

const Page = () => {
  const { status, data: session } = useSession({
    required: false,
  });

  const withSessionQuery = useQuery(
    ["with-session-example", session],
    async () => {
      console.log(session);
      const data = await superagent.get("/api/with-session-example");

      return data.body.content;
    },
    {
      // The query will not execute until the session exists
      enabled: !!session,
    }
  );

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  console.log(withSessionQuery);
  if (!session) {
    return (
      <>
        <AppLayout title="With Session">
          <blockquote>
            <h1>Access Denied</h1>
            <h1>
              <button type="button" onClick={() => signIn()}>
                <a>Login</a>&nbsp;
              </button>
              to see a secret message
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
          <blockquote>
            <p>
              This example shows usage with React Query and protected api
              routes.
            </p>
          </blockquote>
          {withSessionQuery?.data && <p>{withSessionQuery.data}</p>}
        </div>
      </AppLayout>
    </>
  );
};

export default Page;
