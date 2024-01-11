const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", printInput);

function printInput() {
   // console.log(document.getElementById("textInput").value);
   const text = document.getElementById("textInput").value;
   const result = document.getElementById("result");
   // const newDiv = document.createElement("div");
   // const newContent = document.createTextNode(text);
   // newDiv.appendChild(newContent);

   // const currentDiv = document.getElementById("div1");
   // document.body.insertBefore(newDiv, currentDiv);
   result.innerHTML += `<p>${text}</p>`;
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then((response) => response.json())
   .then((json) => console.log(json));

async function fetchData() {
   const data = await fetch("https://jsonplaceholder.typicode.com/todos");
   const json = await data.json();
   console.log(json);

   const titleList = document.getElementById("titleList");
   for (let i = 0; i < json.length; i++) {
      titleList.innerHTML += `<h3>${json[i].title}</h3>`;
   }
}
fetchData();
