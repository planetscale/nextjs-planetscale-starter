import { AppProps } from "next/app";
import { Component } from "react";

export type AuthenticatedPage = {
  role?: string;
  redirectTo?: string; // redirect to this url
};
export type ExtendedPageProps = {
  requiresAuth?: boolean
  auth?: AuthenticatedPage;
  layout?: Component;
};

export type ExtendedAppProps = AppProps & {
  Component: ExtendedPageProps;
};
