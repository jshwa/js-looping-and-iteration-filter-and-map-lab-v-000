// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return console.log(driversWithRevenueOver(drivers, revenue).name)
}

function exactMatch() {

}

function exactMatchToList() {

}
