function numberGen(sides) {

const inputValue=document.querySelector("#sides").value;
const outputValue =Math.ceil( Math.random()*inputValue)


document.querySelector("#dice").textContent = outputValue ;

}



