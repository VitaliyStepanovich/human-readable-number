module.exports = function toReadable (n) { 

  let hundreds = Math.floor(n / 100);
  let tens = Math.floor((n - (hundreds * 100)) > 19 ? (n - (hundreds * 100)) / 10 : 0);
  let units = n - (hundreds * 100) - (tens * 10);

  const unitsAs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensAs = ['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const scalesAs = ['hundred', 'thousand', 'million', 'billion'];

  let readable =  (hundreds > 0 ? unitsAs[hundreds] + ' ' + scalesAs[0] + ' ' : '') +  (tens > 0 ?  tensAs[tens] + ' ' : '') +  (units > 0 ? unitsAs[units] : '');

  return readable.trim() || 'zero';  
}
