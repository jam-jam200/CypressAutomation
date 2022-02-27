///<reference types = "cypress"/>

//This function describes your test suite
describe("Instagram login Test suite", function () {
  //This function is to write test cases
  it("Instagram Login", function () {
    //This line of script is used to visit or open a web application/base url
    cy.visit("https://www.instagram.com/");
    //spy on the username input field
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
      //type your instagram username
      .type("Jessy_oyaks");
    //spy on the password field
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
      //type password
      .type("2852003.");
    //spy login button
    cy.get(".sqdOP > .qF0y9").click();
    //inspect search box
    cy.get(".eyXLr")
    //Assert that the search box is visible
        .should("be.visible");
  });
});
