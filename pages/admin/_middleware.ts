import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getManyAdministrator } from "@client/administrator/queries/getManyAdministrator";
import { getSession } from "next-auth/react";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // const session = await getSession({req});

  // if (session) {
  // //   return { redirect: { permanent: false, destination: "/" } };
  // }

  return NextResponse.next();
}
