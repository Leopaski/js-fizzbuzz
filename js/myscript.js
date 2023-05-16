const ul= document.querySelector ("ul.list");

for (let i=1; i<=100; i++){
    const element = i;
    ul.innerHTML += element;
}
if (i % 3 ===0){
    document.getElementById("number").innerHTML="fizz";
} else if (i % 5 ===0){
    document.getElementById("number").innerHTML="buzz";
} else {
    document.getElementById("number").innerHTML= i;
}