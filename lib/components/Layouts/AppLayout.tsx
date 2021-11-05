import { useSession } from "next-auth/react";
import Link from "next/link";

/**
 * Here Session could be passed to the application.
 * Also an "AuthController HOC" can be used in _app.jsx
 * https://next-auth.js.org/getting-started/client#custom-client-session-handling
 * 
 * @param props 
 * @returns 
 */
const AppLayout = (props) => {
  const { status } = useSession({
    required: false,
  });

  const NAV_ITEMS = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Protected",
      href: "/protected",
    },
  ];

  status === "unauthenticated" &&
    NAV_ITEMS.push({
      title: "Sign In",
      href: "/sign-in",
    });

  return (
    <>
      <nav>
        <ul className="inline-flex space-x-6">
          {NAV_ITEMS.map((item) => {
            return (
              <li>
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="my-96 flex flex-col justify-center items-center content-center">
        <img src="/assets/planet-scale.svg" />
        {props.children}
      </div>
    </>
  );
};

export default AppLayout;
