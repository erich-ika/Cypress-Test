describe('Links funcionam', () => {
  it('clica nos links', async () => {
    cy.visit('https://ri.aygroup.com.br/')

    cy.get('div.listagem').find('a').each(($link) => {
      const href = $link.prop('href')
      // console.log(href)
      if (href && href !== '#') {
        cy.request(href).then((res) => {
          expect(res.status).to.equal(200)
        })
      }
    })
  })
})
