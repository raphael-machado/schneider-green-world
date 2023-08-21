function validarInput(idInput, idTxt, msg, idIcon) {
    var input = document.getElementById(idInput);
    var txt = document.getElementById(idTxt);
    var icon = document.getElementById(idIcon)
    var valorInput = input.value;
   

    if (valorInput === "") {
        input.classList.add("input-vazio");
        input.classList.remove('input-cheio');
        txt.classList.remove("txt-verd");
        txt.innerHTML = msg;
        icon.innerHTML = "error"
        icon.classList.add('txt-verm')
        icon.classList.remove('txt-verd')
    
    } else {
        input.classList.add("input-cheio");
        txt.classList.add("txt-verd")
        txt.innerHTML = "Informação Válida";
        icon.innerHTML = "done"
        icon.classList.remove('txt-verm')
        icon.classList.add('txt-verd')
    }
}

function validarCheckbox(){
    var checkbox = document.getElementById('exampleCheck1')
    var txtConf = document.getElementById('txtConf')
    var msgConf = document.getElementById('msgConf')

    if(checkbox.checked){
        checkbox.classList.add('input-cheio')
        txtConf.innerHTML = "Informação Válida"
        txtConf.classList.add('txt-verd')
        msgConf.classList.add('txt-verd')
        
    }
    else{
        checkbox.classList.remove('input-cheio')
        txtConf.innerHTML = "Clique em concordar para seguir"
        checkbox.classList.add('input-vazio')
        txtConf.classList.remove('txt-verd')
        txtConf.classList.add('txt-verm')
        msgConf.classList.remove('txt-verd')
        msgConf.classList.add('txt-verm')

    }
}

function borda() {
    validarInput("exampleInputEmail1", "txt1","Preencha o dado de usuário","icon1");
    validarInput("exampleInputPassword1", "txt2","Informe a senha","icon2");
    validarInput("exampleInputPassword2", "txt3","Informe a senha","icon3");
    validarCheckbox();
}



