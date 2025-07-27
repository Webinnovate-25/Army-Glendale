function verifierAcces() {
  const code = document.getElementById("code").value;
  if (code === "GLENDALEAUTOP") {
    window.location.href = "dashboard.html";
    return false;
  } else {
    alert("Code incorrect !");
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulaire");
  const classementJour = document.getElementById("classementJour");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("nom").value;
      const grade = document.getElementById("grade").value;
      const heures = parseInt(document.getElementById("heures").value);
      const rondes = parseInt(document.getElementById("rondes").value);
      const score = heures * 2 + rondes;

      const donnees = JSON.parse(localStorage.getItem("donnees")) || [];
      donnees.push({ nom, grade, heures, rondes, score });
      localStorage.setItem("donnees", JSON.stringify(donnees));
      location.reload();
    });
  }

  if (classementJour) {
    const donnees = JSON.parse(localStorage.getItem("donnees")) || [];
    donnees.sort((a, b) => b.score - a.score);
    classementJour.innerHTML = "";
    donnees.forEach((d) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${d.nom}</td><td>${d.grade}</td><td>${d.heures}</td><td>${d.rondes}</td><td>${d.score}</td>`;
      classementJour.appendChild(tr);
    });
  }

  // Réinitialisation auto tous les jours
  const lastReset = localStorage.getItem("lastReset");
  const today = new Date().toDateString();
  if (lastReset !== today) {
    localStorage.setItem("lastReset", today);
    localStorage.setItem("donnees", "[]");
  }
});
