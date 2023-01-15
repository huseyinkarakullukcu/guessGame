//guess game
const randomNumber = Math.round(Math.random()*100)
console.log(randomNumber)
let count = 0
//let dizi =[100]
//
const btnEl = document.getElementById("btn")
const btnY = document.getElementById("btnY")
const pEl = document.getElementById("resultGuess")
function resultGuess(){
    const inputValue = Number(document.querySelector("input").value)
    count++
    //if(inputValue>dizi[dizi.length-2] && inputValue<dizi[dizi.length-1]){
      //  dizi.push(inputValue)
    //}
    //console.log(dizi)

    if(randomNumber > inputValue){
        //alert(`${inputValue} - 100 arasında bir sayı giriniz`)
        pEl.style.color ="red"
        pEl.innerText = `${inputValue} - 100 arasında bir sayı giriniz`
    }else if(randomNumber < inputValue){
        //alert(`0 - ${inputValue} arasında bir sayı giriniz`)
        pEl.style.color ="red"

        pEl.innerText = `0 - ${inputValue} arasında bir sayı giriniz`
    }else if(randomNumber === inputValue){
        pEl.innerText = `Tebrikler bildiniz!!! - ${inputValue}`
        pEl.style.color ="green"
    }

    document.querySelector("input").value=""
    document.querySelector("input").focus()
    pEl.innerHTML+=` - <b>Deneme ${count}</b>`
}
btnEl.addEventListener("click",resultGuess)

btnY.addEventListener("click",()=>{
    window.location.reload()
})


// const buton = document.querySelector("button")


// document.querySelector("button").addEventListener("click",()=>{
//     const inputValue = Number(document.querySelector("input").value)
//     if(randomNumber > inputValue){
//         alert(`${inputValue} - 100 arasında bir sayı giriniz`)
//     }else if(randomNumber < inputValue){
//         alert(`0 - ${inputValue} arasında bir sayı giriniz`)
//     }else if(randomNumber === inputValue){
//         alert("Tebrikler bildiniz!!!")
//     }
//     document.querySelector("input").value=""
//     document.querySelector("input").focus()
// })
window.addEventListener("load",()=>{
    document.querySelector("input").focus()
})