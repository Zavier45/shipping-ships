import { getHaulingShips, getCargoShips } from "./database.js";

const haulers = getHaulingShips();

document.addEventListener("click", (clickEvent) => {
  const haulerClicked = clickEvent.target;
  if (haulerClicked.dataset.type === "hauler") {
    const haulerId = haulerClicked.dataset.id;
    let haulCounter = 0;
    const ships = getCargoShips();
    for (const ship of ships) {
      if (parseInt(haulerId) === ship.haulerId) {
        haulCounter++;
      }
    }
    window.alert(
      `${haulerClicked.innerText} is carrying ${haulCounter} cargo ships.`
    );
  }
});

export const haulerList = () => {
  let haulerHTML = `<ul>`;
  for (const hauler of haulers) {
    haulerHTML += `<li data-id="${hauler.id}" data-type="hauler">${hauler.name}</li>`;
  }
  haulerHTML += `</ul>`;
  return haulerHTML;
};
