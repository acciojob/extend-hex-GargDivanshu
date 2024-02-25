/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const baseUrl = "http://localhost:3000";

describe("Extend Hex()", () => {
  it("extends a short hex code to a full hex code", () => {
    const shortHex = "#abc";
    const fullHex = "#aabbcc";
    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub your functions here
        cy.stub(win, "prompt").onFirstCall().returns(shortHex);
      },
    });
    cy.on("window:alert", (str) => {
      expect(str.toLowerCase()).to.equal(fullHex.toLowerCase());
    });
  });

  it("handles short hex codes without the # prefix", () => {
    const shortHex = "abc";
    const fullHex = "#aabbcc";

    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub your functions here
        cy.stub(win, "prompt").onFirstCall().returns(shortHex);
      },
    });
    cy.on("window:alert", (str) => {
      expect(str.toLowerCase()).to.equal(fullHex.toLowerCase());
    });
  });

  it("handles short hex codes with mixed case", () => {
    const shortHex = "#AbC";
    const fullHex = "#AABBCC";

    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub your functions here
        cy.stub(win, "prompt").onFirstCall().returns(shortHex);
      },
    });
    cy.on("window:alert", (str) => {
      expect(str.toLowerCase()).to.equal(fullHex.toLowerCase());
    });
  });

  it("handles short hex codes with only one character per color", () => {
    const shortHex = "#f09";
    const fullHex = "#ff0099";

    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        // Stub your functions here
        cy.stub(win, "prompt").onFirstCall().returns(shortHex);
      },
    });
    cy.on("window:alert", (str) => {
      expect(str.toLowerCase()).to.equal(fullHex.toLowerCase());
    });
  });
});
