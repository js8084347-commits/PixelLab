    // ESSA PARTE É DE FUNCIONALIDADES DE ACESSIBILIDADE 

    // Aguarda o carregamento completo da página ----- JÁ VIMOS MUITO SOBRE ISSOOOO
 document.addEventListener('DOMContentLoaded', function() {
     
    // VARIÁVEIS GLOBAIS
   
    const body = document.body;
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const highContrastBtn = document.getElementById('high-contrast');
    const normalViewBtn = document.getElementById('normal-view');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const successMessage = document.getElementById('success-message');
    

    // CONTROLES DE FONTE
   
    
    // Aumenta o tamanho da fonte em 20%
    increaseFontBtn.addEventListener('click', function() {
        body.classList.add('large-text');
        body.classList.remove('high-contrast');
        showTemporaryMessage('Tamanho da fonte aumentado. Pressione Ctrl+0 para voltar ao normal.');
        // Move o foco para o título principal para feedback
        document.getElementById('main-title').focus();
    });
    
    // Diminui o tamanho da fonte (volta ao normal)
    decreaseFontBtn.addEventListener('click', function() {
        body.classList.remove('large-text');
        body.classList.remove('high-contrast');
        showTemporaryMessage('Tamanho da fonte redefinido.');
    });
    
  
    // CONTROLES DE CONTRASTE
  
    
    // Ativa o modo de alto contraste
    highContrastBtn.addEventListener('click', function() {
        body.classList.add('high-contrast');
        body.classList.remove('large-text');
        showTemporaryMessage('Modo de alto contraste ativado.');
    });
    
    // Volta à visualização normal
    normalViewBtn.addEventListener('click', function() {
        body.classList.remove('high-contrast');
        body.classList.remove('large-text');
        showTemporaryMessage('Visualização normal ativada.');
    });    
    
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');
    const forgotPassword = document.getElementById('forgotPassword');
    const signupLink = document.getElementById('signupLink');
    
    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Função para validar senha
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Validação em tempo real
    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#ff6b6b';
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (validatePassword(passwordInput.value)) {
            passwordError.style.display = 'none';
            passwordInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            passwordError.style.display = 'block';
            passwordInput.style.borderColor = '#ff6b6b';
        }
    });
    
    // Envio do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailValid = validateEmail(emailInput.value);
        const passwordValid = validatePassword(passwordInput.value);
        
        if (emailValid && passwordValid) {
            // Simulação de login bem-sucedido
            loginSuccess.style.display = 'block';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            // Aqui você normalmente enviaria os dados para o servidor
            console.log('Login realizado:', {
                email: emailInput.value,
                password: passwordInput.value
            });
            
            // Redirecionar após um breve delay (simulação)
            setTimeout(function() {
                alert('Login realizado com sucesso! Redirecionando...');
            }, 1000);
        } else {
            if (!emailValid) {
                emailError.style.display = 'block';
                emailInput.style.borderColor = '#ff6b6b';
            }
            if (!passwordValid) {
                passwordError.style.display = 'block';
                passwordInput.style.borderColor = '#ff6b6b';
            }
        }
    });
    
    // Link "Esqueci minha senha"
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha será implementada em breve!');
    });
    
    // Link "Cadastre-se"
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecionando para página de cadastro...');
        // window.location.href = 'signup.html'; // Descomente para redirecionar
    });
});

});
