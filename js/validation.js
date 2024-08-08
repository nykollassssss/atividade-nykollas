let nomeIsOk;
function validaEmail(event){
    // pega o valor digitado no elemento input
    const inputEmail = event.target;
    // cria uma expressão regular: <texto>@<texto>.<texto>
    var regex = /\S+@\S+\.\S+/;
    // se o email estiver correto muda a cor para verde
    if(regex.test(inputEmail.value)){
       
        inputEmail.style.color = "green";
    }
    // caso contrário, para vermelho
    else 
        inputEmail.style.color = "red";
}
let cpfIsOk;

function validacpf(event) {
    const imputedcpf = event.target;
    let formatedcpf = imputedcpf.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    console.log(formatedcpf);
    imputedcpf.value = !formatedcpf[2] ? formatedcpf[1] : 
                    formatedcpf[1] + '.' + formatedcpf[2] + 
                    (formatedcpf[3] ? '.' + formatedcpf[3] : '') + 
                    (formatedcpf[4] ? '-' + formatedcpf[4] : '');
}



function validaTelefone(event){
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    console.log(formatedPhone);
    inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}



function validarenda(event){
    const inputRenda = event.target;
    let valorRenda = inputRenda.value.replace(/\D/g, '')
    valorRenda = (valorRenda / 100).toFixed(2) + ''
    valorRenda = valorRenda.replace(".", ",")
    valorRenda = valorRenda.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    inputRenda.value = 'R$ ' + valorRenda


}
