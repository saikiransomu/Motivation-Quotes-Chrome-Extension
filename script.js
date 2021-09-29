url = "https://type.fit/api/quotes";
let text= document.getElementById("text");
fetch(url)
.then(response => response.json())
.then(data => text.innerHTML = data[Math.floor(Math.random() * 500)].text);
