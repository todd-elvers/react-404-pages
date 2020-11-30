import * as React from "react";
import { SadHamburger } from "./SadHamburger";
import { LostInSpace } from "./LostInSpace";

export default {
  title: "404 Pages",
};

export const Sad_Hamburger = () => <SadHamburger />;

export const Lost_Space_Man = () => (
  <LostInSpace height="100vh" width="100vw" className="todd" />
);
