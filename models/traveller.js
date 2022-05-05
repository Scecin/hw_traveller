const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return result
}

Traveller.prototype.getJourneysByTransport = function (transport) {
  const trasnportList = this.journeys.filter ((journey) => {
    return journey.transport === transport
  })
  return trasnportList
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const checkDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
  return checkDistance

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => {
    return journey.transport
  })
  // Shove the resulting into a Set to remove the duplicates.
  // The constructor of Set takes an iterable object, like an Array, and the spread operator ... transform the set back into an Array.
  return [...new Set (result)]
};


module.exports = Traveller;
