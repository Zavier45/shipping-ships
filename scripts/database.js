const database = {
  docks: [
    {
      id: 1,
      location: "Shanghai, China",
      capacity: "43.5",
      haulerId: 1,
    },
    {
      id: 2,
      location: "Busan South Korea",
      capacity: "21.6",
      haulerId: 2,
    },
    {
      id: 3,
      location: "Rotterdam, The Netherlands",
      capacity: "14.35",
    },
    {
      id: 4,
      location: "Antwerp, Belgium",
      capacity: "12.04",
      haulerId: 3,
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
      haulerId: 2,
    },
    {
      id: 2,
      name: "Prairal",
      haulerId: 2,
    },
    {
      id: 3,
      name: "Palais Royal",
      haulerId: 3,
    },
    {
      id: 4,
      name: "Rivoli",
      haulerId: 1,
    },
    {
      id: 5,
      name: "Champs Elysee",
      haulerId: 1,
    },
    {
      id: 6,
      name: "Ever Ace",
      haulerId: 2,
    },
    {
      id: 7,
      name: "Nissei Maru",
      haulerId: 3,
    },
    {
      id: 8,
      name: "MSC Gulsun",
      haulerId: 1,
    },
    {
      id: 9,
      name: "HMM Rotterdam",
      haulerId: 3,
    },
    {
      id: 10,
      name: "CMA CGM Trocadero",
      haulerId: 2,
    },
  ],
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulingShips = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};

export const getCargoShips = () => {
  return database.ships.map((ship) => ({ ...ship }));
};
