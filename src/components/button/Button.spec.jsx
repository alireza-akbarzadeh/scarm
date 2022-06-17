/* eslint-disable no-undef */
import * as React from "react";
import { mount } from "@cypress/react";
import Button from "./Button";

it("Button", () => {
  mount(<Button>Test</Button>);
  cy.visit("http://localhost:3000/");
  cy.get("button").contains("Test").click();
});
