function CancelamentoDeCadastro(){
   var confirmacao = confirm("Tem certeza que deseja cancelar o Cadastro? ");
   if(confirmacao){
      
   }
}

function validarFormulario() {
   var usuario = document.getElementById("usuario").value;
   var senha = document.getElementById("senha").value;

   if (usuario === "" || senha === "") {
       alert("Por favor, preencha o usuário e a senha.");
       return false;
   }

   return true;
}

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
   event.preventDefault();
   
   var inputs = document.querySelectorAll('#cadastro-form input[required]');
   var allFilled = true;
   
   inputs.forEach(function(input) {
       if (!input.value.trim()) {
           allFilled = false;
       }
   });

   if (allFilled) {
       alert('Cadastro realizado com sucesso!');
   } else {
       alert('Por favor, preencha todos os campos.');
   }
});


