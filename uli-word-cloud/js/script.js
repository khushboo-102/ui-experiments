let container = document.getElementById("container")
let words = ["Apple", "Mango", "Orange", "Banana", "Apple",
    "Mango", "Orange", "Banana", "Apple", "Mango", "Orange",
    "Banana", "Apple", "Mango", "Orange", "Banana", "Apple",
    "Mango", "Orange", "Banana", "Apple", "Mango", "Orange",
    "Banana", "Apple", "Mango", "Orange", "Banana", "Apple",
    "Mango", "Orange", "Banana", "Apple", "Mango", "Orange", "Banana", "Apple", "Mango", "Orange", "Banana"]
// console.log(words)
for (let i = 0; i < words.length; i++) {
    
    let textDiv = document.createElement("div")
   //    console.log(textDiv)
    let word = document.createElement("p")
   //   console.log(words[i]);
   word.textContent = words[i]
  //  console.log(word);
  textDiv.append(word)
  //  console.log(textDiv)
   container.appendChild(textDiv)
 }


let textDiv = document.querySelector("div")
textDiv.addEventlistener("mousemove", (e) => {
   const X = e.clientX;
  const Y = e.clientY;
  textDiv.style.left = `${X - 25}px`; // 
  textDiv.style.top = `${Y- 25}px`
 console.log("Hello")
})


