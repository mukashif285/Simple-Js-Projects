const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn =document.getElementById("btn");
const color =document.querySelector('.color');
btn.addEventListener("click",function(){
    const randomNumber =mathrandom()
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]
    randomNumber +=1;
})
function mathrandom(){
    return Math.round(Math.random()* colors.length)
}