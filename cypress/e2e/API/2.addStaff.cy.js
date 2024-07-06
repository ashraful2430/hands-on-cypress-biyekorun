import { faker } from "@faker-js/faker";
describe("Add staff", () => {
  let adminToken;
  before(() => {
    cy.readFile("cypress/fixtures/adminToken.json").then((info) => {
      adminToken = info.adminToken;
      //   console.log(adminToken);
    });
  });
  it("As an admin I should be able to add staff", () => {
    const newStaffEmail = faker.internet.email();
    cy.request({
      method: "POST",
      url: "/api/staff/create",
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
      body: {
        email: `${newStaffEmail}`,
        firstName: "Shakil",
        lastName: "Ahmed",
        permission: ["64eadb6a5bd5576dd4df3cd8"],
        phone: {
          number: "1775069169",
          countryCode: "880",
        },
        dateOfBirth: "2024-07-04",
        gender: "Male",
        password: "testPassword",
      },
    }).then((res) => {
      console.log(res);

      //   accessing the staff id
      const staffId = res.body.data.staff.user.id;
      console.log(staffId);

      //   store the staff id in fixtures path
      cy.writeFile("cypress/fixtures/staffId.json", { staffId: staffId });

      // assertions

      expect(res.status).to.eq(201);
      expect(res.body.message).to.eq("Staff add succeed");
      expect(res.body.success).to.eq(true);
      expect(res.duration).lessThan(2000);
    });
  });
});
