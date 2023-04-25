/// <reference types="cypress" />

const petUrl = "https://petstore.swagger.io/v2";
const CREATE_USER = {
  id: 999,
  username: "acorzog",
  firstName: `Andrea`,
  lastName: `Corzo`,
  email: `acorzog@mailinator.com`,
  password: "Test1234",
  phone: "3456776567",
  userStatus: 1,
};

describe("Create a new user", () => {
  it("should be able to create a new user is successfully created", () => {
    cy.request("POST", petUrl + "/user", CREATE_USER).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should return call the user information previously created", () => {
    cy.request("GET", petUrl + `/user/${CREATE_USER.username}`).then(
      (response) => {
        expect(response.status).to.equal(200);
        cy.log(JSON.stringify(response.body));
        console.log(JSON.stringify(response.body));
      }
    );
  });

  it("should compare the response with the previous POST request", () => {
    cy.request("GET", petUrl + `/user/${CREATE_USER.username}`).then(
      (response) => {
        expect(response.body).to.deep.equal(CREATE_USER);
      }
    );
  });
});
