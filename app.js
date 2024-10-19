document.getElementById("linkForm").addEventListener("submit", function (e) {
   e.preventDefault();
   const link = document.getElementById("groupLink").value;

   fetch("/.netlify/functions/addLink", {
      method: "POST",
      body: JSON.stringify({ link }),
   })
   .then(response => response.json())
   .then(data => {
      alert(data.message);
      // Adicionar o link na lista (pode recarregar da base de dados também)
      const li = document.createElement("li");
      li.textContent = link;
      document.getElementById("groupList").appendChild(li);
   });
});