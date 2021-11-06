import AppLayout from "@lib/components/Layouts/AppLayout";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Page = (props) => {
  const { status, data } = useSession({
    required: false,
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return (
    <>
      <AppLayout>
        <div>
          {data?.user ? (
            <>
              <h1>
                Welcome, {`${data.user.name ?? data.user.email}`} to the planet
                scale starter application.
              </h1>
              <p>PlanetScale is the best =]</p>
            </>
          ) : (
            <>
              <h1>Welcome! to the planet scale starter application.</h1>
              <p>Sign In to see a secret message</p>
              <Link href="/sign-in">
                <a>Sign In</a>
              </Link>
            </>
          )}
        </div>
        <blockquote>
          <code>
            <pre>
              <p>This page is unprotected.</p>
            </pre>
          </code>
        </blockquote>
      </AppLayout>
    </>
  );
};

export default Page;
