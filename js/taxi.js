function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers= maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function(){
  return this.passengers.length;
};
Taxi.prototype.full = function(){
  if (this.passengerCount === maxNumberOfPassengers) {
    return true;
  }else{
    return false;
  }
};
// cab = new Taxi("bob colins");
// your code here

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
