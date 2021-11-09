import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { GetServerSidePropsContext } from "next";
import classNames from "classnames";
import AdminLayout from "@lib/components/Layouts/AdminLayout";
import { getSession } from "@lib/auth/session";
import superagent from "superagent";

const statusStyles = {
  true: "bg-green-100 text-green-800",
  false: "bg-gray-100 text-gray-800",
};

function Page() {
  const router = useRouter();
  const {
    status,
    data: { session },
  } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/", "/", {});
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  const usersQuery = useQuery(["users"], async () => {
    const data = await superagent.get("/api/users").send({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        emailVerified: true,
        accounts: {
          select: {
            type: true,
            provider: true,
          },
        },
      },
    });

    return data.body;
  });

  if (usersQuery.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <AdminLayout title="Users">
        {/* {/* Activity list (smallest breakpoint only) */}
        <div className=" sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden  sm:hidden"
          >
            {usersQuery?.data &&
              usersQuery.data.map((user) => {
                return (
                  <li key={user.email}>
                    <a className="block px-4 py-4 bg-white hover:bg-gray-50">
                      <span className="flex items-center space-x-4">
                        <span className="flex-1 flex space-x-2 truncate">
                          <span className="flex flex-col text-gray-500 text-sm truncate">
                            <span className="truncate">{user.email}</span>
                            <span>{user.name}</span>
                            <span
                              className={classNames(
                                statusStyles[
                                  user.emailVerified ? "true" : "false"
                                ],
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                              )}
                            >
                              {user.emailVerified ? "Verified" : "Not Verified"}
                            </span>
                          </span>
                        </span>
                        <ChevronRightIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2">
              <div className="align-middle min-w-full overflow-x-auto overflow-hidden ">
                <table className="min-w-full">
                  <thead className="border rounded-md">
                    <tr className="border rounded-md">
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Providers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white ">
                    {usersQuery?.data &&
                      usersQuery.data.map((user) => {
                        return (
                          <tr key={user.email} className="bg-white">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <div className="flex">
                                <a className="group inline-flex space-x-2 truncate text-sm">
                                  <p className="text-gray-500 truncate group-hover:text-gray-900">
                                    {user.email}
                                  </p>
                                </a>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                              {user.name}
                            </td>
                            <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                              <span
                                className={classNames(
                                  statusStyles[
                                    user.emailVerified ? "true" : "false"
                                  ],
                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                                )}
                              >
                                {user.emailVerified
                                  ? "Verified"
                                  : "Not Verified"}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                              {user?.accounts && user?.accounts?.length > 0 ? (
                                user.accounts.map((account) => {
                                  return <p>{account.provider}</p>;
                                })
                              ) : (
                                <p>credentials</p>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

// Page.auth = true

export default Page;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session || session?.user?.role !== "admin") {
    return { redirect: { permanent: false, destination: "/" } };
  }

  return {
    props: { session: session },
  };
}
