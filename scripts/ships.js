import { getCargoShips, getHaulingShips } from "./database.js";

export const shipList = () => {
  const ships = getCargoShips();
  let shipHTML = `<ul>`;
  for (const ship of ships) {
    shipHTML += `<li data-type="cargo" data-id="${ship.id}" data-haulerid="${ship.haulerId}">${ship.name}</li>`;
  }
  shipHTML += `</ul>`;
  return shipHTML;
};

document.addEventListener("click", (clickEvt) => {
  const shipClicked = clickEvt.target;
  if (shipClicked.dataset.type === "cargo") {
    const haulers = getHaulingShips();
    for (const hauler of haulers) {
      if (parseInt(shipClicked.dataset.haulerid) === hauler.id) {
        window.alert(
          `${shipClicked.innerText} is being hauled by ${hauler.name}.`
        );
      }
    }
  }
});
