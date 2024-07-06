import Login from "../pages/Login";

describe("Search user", () => {
  const login = new Login();
  it("As a groom/bride I should be able to search user", () => {
    login.loginToTheWebsite();
    // get the search input and search the user name
    cy.get(".search-input").type("Salma Sarkar");
    // click on the search button
    cy.get(".search_btn").click();
    // check all the users
    cy.get(".grid").children("div").should("have.length", 4);
    cy.wait(3000);
    //    click ont send request button
    cy.get(
      ":nth-child(1) > .mantine-Card-cardSection > .card-footer > .mantine-Group-root > :nth-child(2) > .btn-fill"
    ).click();

    cy.wait(3000);
    // click on the cancel request button
    cy.get(".btn-light").click();
    cy.wait(3000);
    // click on the Ok button to cancel the friend request
    cy.get(".reminder-box > :nth-child(2) > :nth-child(2) > .btn-fill").click();

    // checking if the send request button is visible or not
    cy.get(
      ":nth-child(1) > .mantine-Card-cardSection > .card-footer > .mantine-Group-root > :nth-child(2) > .btn-fill"
    ).should("be.visible");
  });
});
