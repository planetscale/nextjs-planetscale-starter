import AppLayout from "@lib/components/Layouts/AppLayout";
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <AppLayout>
        {/* <blockquote> */}
        <h1>Welcome to the PlanetScale Next.js Starter App!</h1>
        <p>
          This is an example site to demonstrate how to use{" "}
          <a href={`https://next-auth.js.org`}>NextAuth.js</a> for
          authentication with PlanetScale and Prisma.
        </p>
        <blockquote>
          <p>  
            You can find how to get started{" "}
            <a href={`https://github.com/planetscale/nextjs-planetscale-starter`}>here</a>.
          </p>
        </blockquote>
      </AppLayout>
    </>
  );
};

export default Page;
