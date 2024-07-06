describe("Admin login", () => {
  it("As a admin, I should be able to login to the website", () => {
    cy.request({
      method: "POST",
      url: "/api/admin/login",
      body: {
        email: "mituldas751@gmail.com",
        password: "Mitul@23",
      },
    }).then((res) => {
      // logged the response
      console.log(res);
      cy.log(res.body.token.accessToken);

      //   set the token to fixture files
      const adminToken = res.body.token.accessToken;
      cy.writeFile("cypress/fixtures/adminToken.json", {
        adminToken: adminToken,
      });

      //   assertions
      expect(res.body).to.have.property("token");
      expect(res.body.token).to.have.property("accessToken");
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq("Login succeed");
      expect(res.duration).lessThan(2000);
    });
  });
});
