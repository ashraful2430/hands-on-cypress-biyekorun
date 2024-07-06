describe("Delete staff", () => {
  let adminToken;
  let staffId;
  before(() => {
    cy.readFile("cypress/fixtures/adminToken.json").then((info) => {
      adminToken = info.adminToken;
      //   console.log(adminToken);
    });
    cy.readFile("cypress/fixtures/staffId.json").then((info) => {
      staffId = info.staffId;
    });
  });
  it("As an admin I should be able to delete staff", () => {
    cy.request({
      method: "DELETE",
      url: `/api/staff/delete/${staffId}`,
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq("Staff deleted successfully");
      expect(res.body.success).to.eq(true);
    });
  });
});
