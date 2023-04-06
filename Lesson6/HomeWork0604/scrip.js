let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
   let theme = document.getElementById("theme");

   if (theme.getAttribute("href") == "./style/style.css") {
      theme.href = "./style/style2.css";
   }
   else {
      theme.href = "./style/style.css";
   }
}