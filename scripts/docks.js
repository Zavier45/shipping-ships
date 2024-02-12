import { getDocks, getHaulingShips } from "./database.js";

export const dockList = () => {
  const docks = getDocks();
  let docksHTML = `<ul>`;

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-haulerid="${dock.haulerId}">${dock.location}</li>`;
  }

  docksHTML += `</ul>`;
  return docksHTML;
};

document.addEventListener("click", (eventClicked) => {
  const dockClicked = eventClicked.target;
  if (dockClicked.dataset.type === "dock") {
    const haulers = getHaulingShips();
    let atDock = "";
    for (const hauler of haulers) {
      if (hauler.id === parseInt(dockClicked.dataset.haulerid)) {
        atDock += `\n${hauler.name}`;
      }
    }
    if (atDock === "") {
      window.alert(`${dockClicked.innerText} is currently unloading nothing.`);
    }
    if (atDock !== "") {
      window.alert(
        `The ${dockClicked.innerText} is currently unloading ${atDock}.`
      );
    }
  }
});
