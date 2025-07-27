function verifierCode() {
  const code = document.getElementById("codeHebdo").value;
  if (code === "Mrmanylemeilleur") {
    document.getElementById("contenuRapport").style.display = "block";

    const donnees = JSON.parse(localStorage.getItem("donnees")) || [];
    donnees.sort((a, b) => b.score - a.score);

    const classement = document.getElementById("classementJour");
    classement.innerHTML = "";
    donnees.forEach((d) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${d.nom}</td><td>${d.grade}</td><td>${d.heures}</td><td>${d.rondes}</td><td>${d.score}</td>`;
      classement.appendChild(tr);
    });
  } else {
    alert("Code incorrect !");
  }
}
