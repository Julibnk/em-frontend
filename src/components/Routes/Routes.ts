import { FC } from "react";
import PageLayout from "@components/Layout/PageLayout/PageLayout";

export interface IRoute {
  path: string;
  component: any;
  exact: boolean;
  layout: FC<{ children }>;
}

const routes: IRoute[] = [
  {
    path: "/",
    component: "aaa",
    exact: true,
    layout: PageLayout,
  },
];

export default routes;
