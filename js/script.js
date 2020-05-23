window.addEventListener('load', function(){
    divisionPromise(12, 0).then(result => console.log(result))
    .catch(errorMessage => console.log('Falha na divisão ' + errorMessage));
})

function divisionPromise(a, b){
    return new Promise((resolve, reject) => {
        if (b === 0){
            reject('Não é possível dividir por 0');
        }

        resolve (a / b);
    });
}