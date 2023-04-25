/// <reference types="cypress" />

const { SearchPage } = require("../../selectors/google");
const { WikiPage } = require("../../selectors/wikipedia");

describe("Search Automation word in wikipedia", () => {
  const wordToSearch = "automatizacion";

  before(() => {
    cy.visit("/");
  });

  it('should be able to see search the word "Automatizacion"', () => {
    cy.get(SearchPage.searchBar).should("be.visible");
    cy.get(SearchPage.searchInput).type(wordToSearch, { delay: 20 });
    cy.get(SearchPage.autocompleteModal).should("be.visible");
    cy.get(SearchPage.searchInput).type("{enter}");
    cy.url().should("include", `/search?q=${wordToSearch}`);
  });

  it("should look for wikipedia result in results page", () => {
    cy.contains(" - Wikipedia")
      .scrollIntoView()
      .then(($ele) => {
        cy.get($ele)
          .should("have.attr", "href")
          .and("include", "https://es.wikipedia.org/wiki/");
        cy.get($ele).click();
      });
  });

  it("should find the paragraph with the first automatic process", () => {
    const year = "1785";

    cy.get(WikiPage.header)
      .should("be.visible")
      .and("contain", "Automatización");
    cy.get(WikiPage.indexList)
      .scrollIntoView()
      .within(() => {
        cy.get(WikiPage.historySection)
          .should("contain", "Historia")
          .find("a")
          .last()
          .should(
            "have.attr",
            "href",
            "#La_Revolución_Industrial_en_Europa_Occidental"
          )
          .click();
      });
    cy.get(WikiPage.secondHistorySection).should("be.visible");
    cy.contains(year).then(($ele) => {
      cy.wrap($ele)
        .invoke("text")
        .then(($text) => {
          expect($text).include(
            `en ${year}, convirtiéndose en el primer proceso industrial completamente automatizado`
          );
        });
    });
  });

  it('should take an screenshot of the wikipedia page', () => {
    cy.screenshot('Screenshot of the result page')
    cy.get(WikiPage.secondHistorySection).screenshot('Screenshot of the paragraph')
  });
});
