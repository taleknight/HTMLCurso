let email = 'reinaldo@hotmail.com';

email = 'juca@htomail.com'; /*altera o email definido*/

console.log(email);

console.log(`O seu E-mail é: ${email}`); /* email seguido de CRÁSE*/


document.getElementById('btn-submit').addEventListener('click', e =>{

    console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário.');

});

document.querySelector('#form-login').addEventListener('mmouseleave', e =>{

    console.log('O mouse está fora do formulário.');

});

document.querySelector('#form-login').addEventListener('submit', e =>{

    e.preventDefault();

    console.log('Formulário enviado! Aqui vai o Ajax.');
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    
    /*console.log('Seu E-mail:',email,'Sua senha:',password); SE FAZ DESNECESSARIO A PARTIR DE QUE TEM UM 'JSON' ABAIXO */

    let json ={
        email,
        password
    };

    if(!json.email){
        
        console.error("O campo e-mail deve ser preenchido")

        // if(json.email=="reinaldo@hotmail.com" && json.password=="reinaldo"){
        //     console.log(json,"Correto");
        // }else{
        //     console.log(json,"Incorreto");

    }else if(!json.email){
        
        console.error("O campo password deve ser preenchido!")
    
    }else{

        console.info("Dados validados com sucesso!")
    }

    // console.log(json);

    /*let stringJSON = JSON.stringify(json);
    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);
    */
});

/* 8:04 aula 23. Trabalhando com JSON.mp4*/