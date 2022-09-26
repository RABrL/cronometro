const inputScreen = document.querySelector('.screen')
const button = document.querySelector('.btn')
const inputResult = document.querySelector('.result')

button.addEventListener('click',()=>inputScreen.value?cronometro(inputScreen.value):alert('ingrese un valor'))

function cronometro(num){
    if(num===0){
        inputResult.value='Finish'
    }else{
        inputResult.value = num
        setTimeout(cronometro,1000,num-1)
    }
}
