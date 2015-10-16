  /*...........YOUR MISSION...........

  Write a program that will convert a dollar amount to the
  number of coins that make up the amount. Use the common
  American coins of quarters, dimes, nickels, and pennies.

  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
*/

function coinCounter (dollarAmount) {
  var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
  }

  dollarAmount = Math.round(dollarAmount * 100);

  coinPurse.quarters = Math.floor(dollarAmount/25);
  dollarAmount = dollarAmount - coinPurse.quarters * 25;

  coinPurse.dimes = Math.floor(dollarAmount/10);
  dollarAmount = dollarAmount - coinPurse.dimes * 10;

  coinPurse.nickels = Math.floor(dollarAmount/5);
  dollarAmount = dollarAmount - coinPurse.nickels *5;

  coinPurse.pennies = Math.floor(dollarAmount/1);
  return coinPurse;
  
}
var dollarAmount = (1.37);
console.log(coinCounter(dollarAmount));
