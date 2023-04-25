/// <reference types="cypress" />

const petUrl = "https://petstore.swagger.io/v2";
const petStatus = "sold";

describe("Get sold pet information", () => {
  it("should return all Sold's pet information", () => {
    cy.request("GET", petUrl + `/pet/findByStatus?status=${petStatus}`).then(
      (response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        cy.log(response.body.length);
      }
    );
  });

  it("should return Id and Name of Sold's pet information", () => {
    cy.request("GET", petUrl + `/pet/findByStatus?status=${petStatus}`).then(
      (response) => {
        const data = [];
        for (let i = 0; i < response.body.length; i++) {
          let id = JSON.stringify(response.body[i].id);
          let name = response.body[i].name;
          data.push({ id, name });
        }
        cy.log(JSON.stringify(data));
      }
    );
  });

  it("should return the number of pets called in the same way per name", () => {
    cy.request("GET", petUrl + `/pet/findByStatus?status=${petStatus}`).then(
      (response) => {
        const jsonObj = response.body;
        const valuesCount = {};

        for (let key in jsonObj) {
          const value = jsonObj[key].name;
          if (!valuesCount[value]) {
            valuesCount[value] = 1;
          } else {
            valuesCount[value]++;
          }
        }

        cy.log(JSON.stringify(valuesCount));
      }
    );
  });
});
