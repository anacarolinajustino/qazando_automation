Funcionalidade('login');

Cenário('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.click('#user')
    I.fillField('#user','ana.carolinajl@hotmail.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',3)

}).tag('@LoginSucesso')

Cenário('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')

})

Cenário('Tentando logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.click('#user')
    I.fillField('#user','ana.carolinajl@hotmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',3)
   
})

Cenário('Tentando logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',10)
    I.click('#user')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',3)

})