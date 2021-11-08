import AppLayout from "@lib/components/Layouts/AppLayout";

const Page = () => {
  return (
    <>
      <AppLayout>
        <blockquote>
          <h1>Welcome to the PlanetScale Next.js Starter App!</h1>

          <p>
            This is an example site to demonstrate how to use{" "}
            <a href={`https://next-auth.js.org`}>NextAuth.js</a> for
            authentication.
          </p>
        </blockquote>
      </AppLayout>
    </>
  );
};

export default Page;
