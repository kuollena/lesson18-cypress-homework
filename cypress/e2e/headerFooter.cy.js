describe('Header and Footer Buttons Exist and Visible', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: 'guest',
          password: 'welcome2qauto'
        }
      });
    });
  
    it('should check that header buttons exist', () => {
      cy.contains('Home').should('exist').and('be.visible');
      cy.contains('About').should('exist').and('be.visible');
      cy.contains('Contact').should('exist').and('be.visible');
      cy.contains('Guest log in').should('exist').and('be.visible');
      cy.contains('Sign In').should('exist').and('be.visible');
    });

    it('should check that footer icons exist', () => {    
        cy.get('a.socials_link').filter('[href*="facebook.com/Hillel.IT.School"]')
        .should('exist').and('be.visible');
        cy.get('a.socials_link').filter('[href*="t.me/ithillel_kyiv"]')
        .should('exist').and('be.visible');
        cy.get('a.socials_link').filter('[href*="youtube.com/user/HillelITSchool?sub_confirmation=1"]')  
        .should('exist').and('be.visible');
        cy.get('a.socials_link').filter('[href*="instagram.com/hillel_itschool"]') 
        .should('exist').and('be.visible'); 
        cy.get('a.socials_link').filter('[href*="inkedin.com/school/ithillel"]') 
        .should('exist').and('be.visible'); 
      });

    it('should check that footer links exist', () => {
      cy.contains('ithillel.ua').should('exist').and('be.visible');
      cy.contains('support@ithillel.ua').should('exist').and('be.visible');;
   });
    
  });
