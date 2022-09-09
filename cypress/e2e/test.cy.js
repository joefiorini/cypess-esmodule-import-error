describe("test", () => {
  before(() => {
    cy.task("seed");
  });
  it("passes", () => {
    expect(2 + 2).to.equal(4);
  });
});
