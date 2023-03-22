/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome.
ruolo.
foto.
DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 */

/* creo una array per i membri del Team */
const membriTeam = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "/assets/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "/assets/img/angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "/assets/img/walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "/assets/img/angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "./assets/img/scott-estrada-developer.jpg",
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "./assets/img/barbara-ramos-graphic-designer.jpg",
  },
];

// Stampo le informazioni di ogni membro del team su console
membriTeam.forEach((member) => {
  console.log(
    `Nome: ${member.nome} | Ruolo: ${member.ruolo} | Foto: ${member.foto}`
  );
});

/* 
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

/*
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
 */

/* assegno tramite "getElementById" il container nel main  */
const teamMembersContainer = document.getElementById("teamMembers");

/* seleziono ogni membro per creare un elemento in dom */
membriTeam.forEach((member) => {
  const memberDiv = document.createElement("div");
  memberDiv.className = "team-member";

  const memberName = document.createElement("h3");
  memberName.textContent = member.nome;

  const memberRole = document.createElement("p");
  memberRole.textContent = member.ruolo;

  const memberImage = document.createElement("img");
  memberImage.src = member.foto;
  memberImage.alt = "Foto di " + member.nome;

  memberDiv.appendChild(memberName);
  memberDiv.appendChild(memberRole);
  memberDiv.appendChild(memberImage);

  teamMembersContainer.appendChild(memberDiv);
});

/* BONUS 2:
Organizzare i singoli membri in card/schede */

