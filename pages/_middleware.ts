import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getManyAdministrator } from "@client/administrator/queries/getManyAdministrator";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname === "/") {
    try {
      const administrators = await getManyAdministrator({});
      if (!administrators || administrators.length === 0) {
        return NextResponse.redirect("/admin/setup");
      }
    } catch (error) {
      console.error(error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
