const grid = document.querySelector(".grid");

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopty',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage= `url('../img/${character}.png')`

  card.appendChild(front);
  card.appendChild(back);

  return card;
}


const loadGame = () => {
  characters.forEach((character)=> {

    const card = createCard(character);
    grid.appendChild(card);

  });
  
}
loadGame()


"ACOM";"Galaxy Inform�tica ";"02/02/2024";"02/02/2024";;"08/02/2024";"22/02/2024";"Venda Marketplace";"02-1023999104";"201023999104001";"Venda";"Liberado";"123,21";;"a vista";"Semanal"
"ACOM";"Galaxy Inform�tica ";"02/02/2024";"02/02/2024";;"08/02/2024";"22/02/2024";"Comiss�o cobrada sobre a venda";"02-1023999104";"201023999104001";"Comissao";"Liberado";"-20,38";;"a vista";"Semanal"
"ACOM";"Galaxy Inform�tica ";"02/02/2024";"02/02/2024";;"08/02/2024";"22/02/2024";"Frete B2W Entrega";"02-1023999104";"201023999104001";"Frete_B2W_Entrega";"Liberado";"-0,00";;"a vista";"Semanal"
"ACOM";"Galaxy Inform�tica ";"02/02/2024";"02/02/2024";;"08/02/2024";"22/02/2024";"Tarifa Adicional";"02-1023999104";"201023999104001";"Tarifa_Adicional";"Liberado";"-3,31";;"a vista";"Semanal"
"ACOM";"Galaxy Inform�tica ";"02/02/2024";"02/02/2024";;"08/02/2024";"22/02/2024";"Participa��o de Frete";"02-1023999104";"201023999104001";"Participacao_frete";"Liberado";"-32,90";;"a vista";"Semanal"
