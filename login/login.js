function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var alerta = document.getElementById('alerta');

    if (nome && email && senha && confirmarSenha) {
        fetch('pagprincipal.html')
            .then(() => {
                document.getElementById('login').innerHTML = '';
            })
        
        // Redirecionar para a página do site
        window.location.href = 'file:///C:/Users/User/OneDrive/%C3%81rea%20de%20Trabalho/-/praticas/sitehtml.facul/pagprincipal.html';
    } else {
        alerta.classList.add('show');
    }
}

