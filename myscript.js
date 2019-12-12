function operacion(){

    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);

    var radios=document.getElementsByName("radio");
    var radioSeleccionado;
    
    for(i=0;i<radios.length;i++){
        if(radios[i].checked){
            radioSeleccionado=radios[i].value;
        }
    }

    var resultado;

    if(radioSeleccionado=="suma"){
        resultado=num1+num2;
    }
    else{
        resultado=num1-num2;
    }

    document.getElementById("resultado").value=resultado;

}
