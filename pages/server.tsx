import AppLayout from "@lib/components/Layouts/AppLayout";
import { useSession } from "next-auth/react";
import { getSession } from "@lib/auth/session";

const Page = () => {
  const { status, data: session } = useSession({
    required: false,
  });

  console.log(status, session);
  return (
    <>
      <AppLayout title="Server">
        <blockquote>
          <p>
            This page uses the universal getSession() method in
            getServerSideProps().
          </p>

          <p>
            Using getSession() in getServerSideProps() is the recommended
            approach if you need to support Server Side Rendering with
            authentication.
          </p>

          <p>
            The advantage of Server Side Rendering is this page does not require
            client side JavaScript.
          </p>

          <p>
            The disadvantage of Server Side Rendering is that this page is
            slower to render.
          </p>

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

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default Page;
