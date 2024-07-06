class Login {
  // login to the website
  loginToTheWebsite() {
    // visit the website
    cy.visit("https://staging.biyekorun.us/");
    cy.wait(5000);
    cy.get(
      "body > main > div > div:nth-child(1) > div.heroSectionV3 > div > div > div > div.form-btn > div:nth-child(2) > div:nth-child(2) > div.flex.flex-gap-15 > a"
    ).click();
    cy.wait(3000);
    // get the email field and type the email
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > div.mantine-InputWrapper-root.mantine-TextInput-root.mantine-1sq88d3 > div"
    ).type("ashrafulislamashik960@gmail.com");
    // get the password field and type the password
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > div:nth-child(5) > div > div > div.mantine-PasswordInput-input.mantine-Input-input.mantine-PasswordInput-input.mantine-a7hhxl"
    ).type("Ashik@2430");
    // click on the login button
    cy.get(
      "body > div:nth-child(16) > div > div > div > div > div.loginComp__wrapper--left.box-shadow.flex.flex-column.justify-center.align-center > button"
    ).click();
    cy.wait(3000);
    // click on the close button to navigate to the dashboard (copy from the cypress)
    cy.get(".btn-fill").scrollIntoView().click();
    cy.wait(3000);

    // the logo should be visible
    cy.get("img").should("be.visible");
  }
}

export default Login;
