let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")
const volumeEl = document.getElementById("volume-el")

convertBtn.addEventListener("click", function(){
    length()
    volume()
    mass()   
    
})

function length(){
    let metersToFeet = inputEl.value * 3.281
    let feetToMeters = inputEl.value / 3.281
    lengthEl.textContent = `${inputEl.value} meters = ${metersToFeet.toFixed(2)} feet | ${inputEl.value} feet = ${feetToMeters.toFixed(2)} meters`
}
function mass(){
    let kiloToPound = inputEl.value * 2.204
    let poundToKilo = inputEl.value / 2.204
    volumeEl.textContent = `${inputEl.value} kilograms = ${kiloToPound.toFixed(2)} pound | ${inputEl.value} pound = ${poundToKilo.toFixed(2)} kilograms`
}
function volume(){
    let literToGallon = inputEl.value * 0.264
    let gallonToLiter = inputEl.value / 0.264
    massEl.textContent = `${inputEl.value} liters = ${literToGallon.toFixed(2)} gallons | ${inputEl.value} gallons = ${gallonToLiter.toFixed(2)} liters`
}