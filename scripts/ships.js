import { getShips } from "./database.js";

export const shipList = () => {
  const ships = getShips();
  let shipHTML = `<ul>`;
  for (const ship of ships) {
    shipHTML += `<li>${ship.name}</li>`;
  }
  shipHTML += `</ul>`;
  return shipHTML;
};
