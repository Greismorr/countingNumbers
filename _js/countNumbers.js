function countNumbers(){

    /*Using numberInput = Number(window.document.querySelector('input#numberInput').value) would make an empty input be an 
    acceptable value. But allow empty inputs wasn't my objective on this site. */

    const numberInput = window.document.querySelector('input#numberInput').value
    const incrementInput = (window.document.querySelector('input#incrementNumber').value)
    const targetInput = (window.document.querySelector('input#targetNumber').value)
    const showCount = window.document.querySelector('p#showCount')

    var numberToIncrement = Number(window.document.querySelector('input#numberInput').value)
    var incrementNumber = Number(window.document.querySelector('input#incrementNumber').value)
    var targetNumber = Number(window.document.querySelector('input#targetNumber').value)

    if(numberInput === '' || incrementInput === '' || targetInput === '' || numberToIncrement > targetNumber){ 
        alert("Por favor, preencha todos os dados corretamente.\nNote que o número inicial deve sempre ser menor que o final.")
    }else{
        showCount.innerHTML = ''

        while(numberToIncrement < targetNumber){
            numberToIncrement += incrementNumber

            if(numberToIncrement > targetNumber){
                numberToIncrement = 10
                break
            }
            showCount.innerHTML += '👉' + numberToIncrement + ' '
        }
    }
}