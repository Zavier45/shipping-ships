const database = {
  docks: [
    {
      id: 1,
      locations: "Shanghai, China",
      capacity: "43.5",
    },
    {
      id: 2,
      locations: "Busan South Korea",
      capacity: "21.6",
    },
    {
      id: 3,
      locations: "Rotterdam, The Netherlands",
      capacity: "14.35",
    },
    {
      id: 4,
      locations: "Antwerp, Belgium",
      capacity: "12.04",
    },
  ],
  haulers: [
    {
      id: 1,
      name: "Pioneering Spirit",
    },
    {
      id: 2,
      name: "Boaty McBoatface",
    },
    {
      id: 3,
      name: "Seawise Giant",
    },
  ],
  ships: [
    {
      id: 1,
      name: "Esso Atlantic",
    },
    {
      id: 2,
      name: "Prairal",
    },
    {
      id: 3,
      name: "Palais Royal",
    },
    {
      id: 4,
      name: "Rivoli",
    },
    {
      id: 5,
      name: "Champs Elysee",
    },
    {
      id: 6,
      name: "Ever Ace",
    },
    {
      id: 7,
      name: "Nissei Maru",
    },
    {
      id: 8,
      name: "MSC Gulsun",
    },
    {
      id: 9,
      name: "HMM Rotterdam",
    },
    {
      id: 10,
      name: "CMA CGM Trocadero",
    },
  ],
};

export const getDocks = () => {
  database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  database.haulers.map((hauler) => ({ ...hauler }));
};

export const getShips = () => {
  database.ships.map((ship) => ({ ...ship }));
};
