class Carpark {
  constructor({
    id,
    carParkNo,
    address,
    xCoordinate,
    yCoordinate,
    carParkType,
    parkingSystemType,
    shortTermParking,
    freeParking,
    nightParking,
    carParkDecks,
    gantryHeight,
    hasBasement,
  }) {
    this.id = id;
    this.carParkNo = carParkNo;
    this.address = address;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.carParkType = carParkType;
    this.parkingSystemType = parkingSystemType;
    this.shortTermParking = shortTermParking;
    this.freeParking = freeParking;
    this.nightParking = nightParking;
    this.carParkDecks = carParkDecks;
    this.gantryHeight = gantryHeight;
    this.hasBasement = hasBasement;
  }
}

module.exports = Carpark;
