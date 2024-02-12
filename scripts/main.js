import { dockList } from "./docks.js";
import { shipList } from "./ships.js";
import { haulerList } from "./haulers.js";

const mainContainer = document.querySelector("#container");
const mainHTML = `
<h1>Shipping Ships</h1>
<article class="row">
    <div class="column">
        <section class="details">
                <h2>Hauling Ships:</h2>
                <div class="divide">${haulerList()}</div>
        </section>
    </div>
    <div class="column">
        <section class="details">
                <h2>Cargo Ships:</h2>
                <div class="divide">${shipList()}</div>
        </section>
    </div>
    <div class="column">
        <section class="details">
                <h2>Docks:</h2>
                <div class="divide">${dockList()}</div>
        </section>
    </div>
</article>`;

mainContainer.innerHTML = mainHTML;
