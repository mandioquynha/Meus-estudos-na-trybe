let estados = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo ',
    ' GO - Goiás ',
    ' MA - Maranhão ',
    ' MT - Mato Grosso ',
    ' MS - Mato Grosso do Sul ',
    ' MG - Minas Gerais ',
    ' PA - Pará ',
    ' PB - Paraíba ' ,
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia' ,
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
    ];

    let selecionar = document.querySelector("#estado");
    for(let index = 0; index < estados.length; index += 1) {

        let options = estados[index];
        let criaOption = document.createElement("option");
        criaOption.innerText = options;
        selecionar.appendChild(criaOption);
    }
    


    let body = document.getElementsByTagName("body");


    let inputNome = document.querySelector("#nome");
    let inputEmail = document.querySelector("#email");
    let inputCpf = document.querySelector("#cpf");
    let inputEndereco = document.querySelector("#endereco");
    let inputCidade = document.querySelector("#cidade");
    let inputTextArea = document.querySelector("#texto-area");
    let inputCargo = document.querySelector("#cargo");
    let inputDescricao = document.querySelector("#descricao");
    let inputData = document.querySelector("#data");


    

    

    
    function formularioValido (nomeCurriculo, emailCurriculo, cpfCurriculo, enderecoCurriculo, cidadeCurriculo,
         textAreaCurriculo, cargoCurriculo, descricaoCurriculo, dataCurriculo) {
           if (nomeCurriculo.length === 0) {
               return false;
           } if (emailCurriculo.length === 0) {
               return false;
           } if (cpfCurriculo.length === 0) {
               return false;
           } if (enderecoCurriculo.length === 0) {
               return false;
           } if (cidadeCurriculo === 0) {
               return false;
           } if (textAreaCurriculo === 0) {
               return false;
           } if (cargoCurriculo === 0) {
               return false;
           } if (descricaoCurriculo === 0) {
               return false;
           } if (isNaN(Date.parse(dataCurriculo))) {
               return false;
           } else {
            return true;
        }
    }
    
    
    function prevenirEvento (event) {
        event.preventDefault();
        let nomeCurriculo = inputNome.value;
        let emailCurriculo = inputEmail.value;
        let cpfCurriculo = inputCpf.value;
        let enderecoCurriculo = inputEndereco.value;
        let cidadeCurriculo = inputCidade.value;
        let textAreaCurriculo = inputTextArea.value;
        let cargoCurriculo = inputCargo.value;
        let descricaoCurriculo = inputDescricao.value;
        let dataCurriculo = inputData.value;
        let elementos = [nomeCurriculo + emailCurriculo + cpfCurriculo + enderecoCurriculo + cidadeCurriculo + textAreaCurriculo + cargoCurriculo
        + descricaoCurriculo + dataCurriculo];
        if (formularioValido(nomeCurriculo, emailCurriculo, cpfCurriculo, enderecoCurriculo, cidadeCurriculo,
              textAreaCurriculo, cargoCurriculo, descricaoCurriculo, dataCurriculo)) {
                console.log("Currículo válido!")
             } else {
                 console.log("Currículo inválido!")
             }
            
    }

    let botao = document.querySelector("#button");
    botao.addEventListener("click", prevenirEvento);

    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'D/M/YYYY',
        toString(date, format) {
            // you should do formatting based on the passed format,
            // but we will just return 'D/M/YYYY' for simplicity
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        parse(dateString, format) {
            // dateString is the result of `toString` method
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        }
    });