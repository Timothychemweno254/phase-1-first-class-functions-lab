// Code your solution in this file!
// returnFirstTwoDrivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // returnLastTwoDrivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  // fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }