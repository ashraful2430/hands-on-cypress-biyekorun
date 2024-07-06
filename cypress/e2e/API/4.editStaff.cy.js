import { faker } from "@faker-js/faker";
describe("Edit Staff", () => {
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
  it("As an admin I should be able to edit staff", () => {
    const newStaffEmail = faker.internet.email();
    cy.request({
      method: "PATCH",
      url: `/api/staff/update/${staffId}`,
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
        basicInfo: {
          dateOfBirth: "2024-07-04",
          gender: "Male",
        },
      },
    }).then((res) => {
      console.log(res);
      //   Assertions
      expect(res.status).to.eq(201);
      expect(res.duration).lessThan(2000);
      expect(res.body.message).to.eq("Staff update succeed");
    });
  });
});
