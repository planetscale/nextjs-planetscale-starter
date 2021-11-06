import AppLayout from "@lib/components/Layouts/AppLayout";
import { Session } from "next-auth";

type Props = {
  session: Session;
};
const Page = (props: Props) => {
  return (
    <>
      <AppLayout>
        <div>
          <h1>
            Hello, {`${props.session.user.name ?? props.session.user.email}`}{" "}
            This is a protected route. You can see it because you're logged in.
          </h1>
        </div>
        <blockquote>
          <code>
            <pre>
              <p>This page is protected using Page.auth = true</p>
              <p>Either way works.</p>
              <p>But in this case the session is available on the first render.</p>
            </pre>
          </code>
        </blockquote>
      </AppLayout>
    </>
  );
};

Page.auth = true;

export default Page;
