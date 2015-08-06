function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers= maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  if (this.passengers.length < this.maxNumberOfPassengers) {
   this.passengers.push(passengerName);
}else {
  console.log('full');
}
};

Taxi.prototype.passengerCount = function(){
  return this.passengers.length;
};
Taxi.prototype.full = function(){
  if (this.passengerCount() <= this.maxNumberOfPassengers -1) {
    return false;
  }else{
    return true;
  }
};
Taxi.prototype.dropOffPassengers = function(){
  this.passengers = [];
};

cab = new Taxi("bob colins", 4);
// your code here

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
