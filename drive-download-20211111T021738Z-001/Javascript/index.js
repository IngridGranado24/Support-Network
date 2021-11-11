    //Função para validar CPF
    function ValidarCPF(input) {
        s = input.value;
        filteredValues = ".-/";
        let i;
        let returnString = "";
        for (i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            if (filteredValues.indexOf(c) == -1) returnString += c;
        }
        if (returnString == '11111111111' || returnString == '22222222222' ||
            returnString == '33333333333' || returnString == '44444444444' ||
            returnString == '55555555555' || returnString == '66666666666' ||
            returnString == '77777777777' || returnString == '88888888888' ||
            returnString == '99999999999' || returnString == '00000000000' || returnString == '00000000191') {
            alert('CFP Inválido!');
            input.value = "";
            return false;
        }
        if (returnString.length != 11) {
            sim = false
        } else {
            sim = true
        }
        if (sim) {
            for (i = 0;
                ((i <= (returnString.length - 1)) && sim); i++) {
                val = returnString.charAt(i)
                if ((val != "9") && (val != "0") && (val != "1") && (val != "2") && (val != "3") && (val != "4") &&
                    (val != "5") && (val != "6") && (val != "7") && (val != "8")) {
                    sim = false
                }
            }
            if (sim) {
                soma = 0
                for (i = 0; i <= 8; i++) {
                    val = eval(returnString.charAt(i))
                    soma = soma + (val * (i + 1))
                }
                resto = soma % 11
                if (resto > 9) dig = resto - 10
                else dig = resto
                if (dig != eval(returnString.charAt(9))) {
                    sim = false
                } else {
                    soma = 0
                    for (i = 0; i <= 7; i++) {
                        val = eval(returnString.charAt(i + 1))
                        soma = soma + (val * (i + 1))
                    }
                    soma = soma + (dig * 9)
                    resto = soma % 11
                    if (resto > 9) dig = resto - 10
                    else dig = resto
                    if (dig != eval(returnString.charAt(10))) {
                        sim = false
                    } else {
                        sim = true;
                    }
                }
            }
        }
        if (sim != true) {
            if (input.value != '') {
                alert("CPF Invalido!");
                input.value = '';
                return false;
            } else {
                return false;
            }
        }
    }
    //Função validar data
    function ValidaData(campo) {
        let erro = true;
        if (campo.value != '') {
            let strData = campo.value;

            let dia = strData.substr(0, 2);
            let mes = strData.substr(3, 2);
            let ano = strData.substr(6, 4);
            let datainteira = new String();
            datainteira = "";

            if (dia > 31) {
                alert("Dia inválido!");
                campo.value = "";
                return false;
            }
            datainteira = dia + '/';

            if (mes > 12) {
                alert("Mes inválido!");
                campo.value = "";
                return false;
            }

            datainteira = datainteira + mes + '/';
            if (ano < 1920 || ano > 2500) {
                alert("Ano inválido!");
                campo.value = "";
                return false;
            }
            datainteira = datainteira + ano;
            if (mes == 02 && ano % 4 == 0) {
                if (dia > 29) {
                    alert("O mês de fevereiro em um ano bissexto so possui 29 dias!");
                    campo.value = "";
                    return false;
                }
            }

            if (mes == 02 && ano % 4 != 0) {
                if (dia > 28) {
                    alert("O mês de fevereiro so possui 28 dias!");
                    campo.value = ""
                    return false;
                }
            }

            if (mes != 01 || mes != 03 || mes != 05 || mes != 07 || mes != 08 || mes != 10 || mes != 12) {
                if (dia > 31) {
                    alert("O Mês informado não possui 31 dias!")
                    campo.value = ""
                    return false;
                }
            }
            campo.value = datainteira;
        }
    }
    //função somente caracteres de email
    function SomenteEmail() {
        let tecla = (window.event) ? event.keyCode : e.which;
        if ((tecla > 63 && tecla < 91 || tecla == 46)) return true;
        else {
            if (tecla > 96 && tecla < 123 || tecla == 95) return true;
            else {
                if (tecla > 47 && tecla < 58) return true;
                else
                    return false;
            }
        }
    }
    //Função validar Email
    function ValidaEmail(campo) {
        if (campo.value != '' && campo.value != null) {
            let f = campo.value
            if ((f.indexOf("@") == -1) || (f.indexOf(".") == -1) && (f != '')) {
                window.alert('Email invalido');
                campo.focus();
                campo.value = '';
            }
        }
    }
    //Função somente números
    function SomenteNumero() {
        let tecla = (window.event) ? event.keyCode : e.which;
        if ((tecla > 47 && tecla < 58)) return true;
        else {
            if (tecla == 8 || tecla == 0) return true;
            else return false;
        }

    }
    //Função somente letras com espaço
    function SomenteLetras() {
        let tecla = (window.event) ? event.keyCode : e.which;
        if ((tecla > 64 && tecla < 91)) return true;
        else {
            if (tecla > 96 && tecla < 123 || tecla == 32) return true;
            else return false;
        }

    }
    //Função para formatar mascara
    function formatar(mascara, documento) {
        let i = documento.value.length;
        let saida = mascara.substring(0, 1);
        let texto = mascara.substring(i)
        if (texto.substring(0, 1) != saida) {
            documento.value += texto.substring(0, 1);

        }
    }
    //Função Limpa todos os campos
    function limpaCampo() {
        let input = document.querySelectorAll('input');
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }

    // Função Manual
    function cadastraDados() {
        document.querySelector('#hdnCadastro').value = 1;
        document.querySelector('#formCadastro').submit();
    }

    //Função para preencher todos campos
    function confirmar() {
        let form = document.querySelector('#formCadastro');
        let msg = new String();
        let erro = false;

        msg = '==== Para prosseguir, preencha os seguintes campos====\n\n';

        if (form.txtNome.value == '') {
            msg = msg + '- Digite o Nome Completo \n';
            erro = true
        }

        if (form.txtNascimento.value == '') {
            msg = msg + '- Digite sua data de Nascimento \n';
            erro = true
        }

        if (form.slcGenero.value == '') {
            msg = msg + '- Selecione o Sexo\n';
            erro = true
        }

        if (form.slcCivil.value == '') {
            msg = msg + '- Selecione o Estado Civil\n';
            erro = true
        }

        if (form.txtCpf.value == '') {
            msg = msg + '- Digite o CPF \n';
            erro = true
        }

        if (form.txtRg.value == '') {
            msg = msg + '- Digite o RG \n';
            erro = true
        }

        if (form.txtTelResidencial.value == '') {
            msg = msg + '- Digite o seu Número de Telefone \n';
            erro = true
        }

        if (form.txtCelular.value == '') {
            msg = msg + '- Digite o seu Número Celular \n';
            erro = true
        }

        if (form.txtEmail.value == '') {
            msg = msg + '- Digite o seu Email \n';
            erro = true
        }

        if (erro) {
            alert(msg);
        } else {
            cadastraDados()
                /* limpaCampo() */
        }

    }