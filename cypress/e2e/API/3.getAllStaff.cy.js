describe("Get all staff", () => {
  let adminToken;
  before(() => {
    cy.readFile("cypress/fixtures/adminToken.json").then((info) => {
      adminToken = info.adminToken;
      //   console.log(adminToken);
    });
  });
  it("As an admin, I should be able to get all the staff successfully", () => {
    cy.request({
      method: "GET",
      url: "/api/staff/getall",
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }).then((res) => {
      console.log(res);

      //   assertions
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.eq("Succeed");
      expect(res.body).to.have.property("success");
      expect(res.body.success).to.eq(true);
      expect(res.duration).lessThan(2000);
    });
  });
});
