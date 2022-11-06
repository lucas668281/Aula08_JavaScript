function podeSubir (altura , acompanhante){

if (altura >= 1.40 && altura < 2.00) {
    return true;
}
else if( altura < 1.40 && altura >= 1.20 && acompanhante >= 1){
    return true;
}
else{
    return false;
}
}

console.log (podeSubir(1.53));
console.log (podeSubir(1.39 , 1 ));
console.log (podeSubir(1.19 , 1));

// Parte 2 exe

function podeSubirExe2 (altura , acompanhante){

    if (altura >= 1.40 && altura < 2.00) {
        return "Acesso autorizado";
    }
    else if( altura < 1.40 && altura >= 1.20 && acompanhante >= 1){
        return "Acesso autorizado somente com acompanhante";
    }
    else{
        return "Acesso negado";
    }
    }
    
    console.log (podeSubirExe2(1.45));
    console.log (podeSubirExe2(1.39 , 1));
    console.log (podeSubirExe2(1.19 , 1));
