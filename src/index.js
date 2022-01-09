module.exports = function toReadable(number) {
    const hundred = Math.floor(number/100)
    let text = ''
        switch(hundred) {
      case 1:
      text = 'one hundred';
        break
      case 2:
      text = 'two hundred';
        break
      case 3:
      text = 'three hundred';
        break
      case 4:
      text = 'four hundred';
        break
      case 5:
      text = 'five hundred';
        break
      case 6:
      text = 'six hundred';
        break
      case 7:
      text = 'seven hundred';
        break
      case 8:
      text = 'eight hundred';
        break
      case 9:
      text = 'nine hundred';
        break
      default:
        break
    }
    if ((number%100) > 19) {
    const decades = (Math.floor(number/10)%10)
        switch(decades) {
      case 2:
      text =text+' '+'twenty';
        break
      case 3:
      text =text+' '+'thirty';
        break
      case 4:
      text =text+' '+'forty';
        break
      case 5:
      text =text+' '+'fifty';
        break
      case 6:
      text =text+' '+'sixty';
        break
      case 7:
      text =text+' '+'seventy';
        break
      case 8:
      text =text+ ' eighty';
        break
      case 9:
      text =text+' '+'ninety';
        break
      default:
        break
    }
    const digits = number%10
        switch(digits) {
      case 1:
      text =text+' '+'one';
        break
      case 2:
      text =text+' '+'two';
        break
      case 3:
      text =text+' '+'three';
        break
      case 4:
      text =text+' '+'four';
        break
      case 5:
      text =text+' '+'five';
        break
      case 6:
      text =text+' '+'six';
        break
      case 7:
      text =text+' '+'seven';
        break
      case 8:
      text =text+' '+'eight';
        break
      case 9:
      text =text+' '+'nine';
        break
      default:
        break
    }
    } else {
    const digits =number%100
        switch(digits) {
      case 1:
      text =text+' '+'one';
        break
      case 2:
      text =text+' '+'two';
        break
      case 3:
      text =text+' '+'three';
        break
      case 4:
      text =text+' '+'four';
        break
      case 5:
      text =text+' '+'five';
        break
      case 6:
      text =text+' '+'six';
        break
      case 7:
      text =text+' '+'seven';
        break
      case 8:
      text =text+' '+'eight';
        break
      case 9:
      text =text+' '+'nine';
        break
      case 10:
      text =text+' '+'ten';
        break
      case 11:
      text =text+' '+'eleven';
        break
      case 12:
      text =text+' '+'twelve';
        break
      case 13:
      text =text+' '+'thirteen';
        break
      case 14:
      text =text+' '+'fourteen';
        break
      case 15:
      text =text+' '+'fifteen';
        break
      case 16:
      text =text+' '+'sixteen';
        break
      case 17:
      text =text+' '+'seventeen';
        break
      case 18:
      text =text+' '+'eighteen';
        break
      case 19:
      text =text+' '+'nineteen';
        break
      default:
        break
    }
    }
    if (number == 0) { text='zero'}
      return text.trim()
    }