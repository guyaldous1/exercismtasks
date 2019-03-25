export const toRoman = (num) => {
  var roman = '';

  function convert(val, nume) {
    while (num >= val) {
      roman += nume;
      num -= val;
    }
  };

  convert(1000, 'M');
  convert(900,  'CM');
  convert(500,  'D');
  convert(400,  'CD');
  convert(100,  'C');
  convert(90,   'XC');
  convert(50,   'L');
  convert(40,   'XL');
  convert(10,   'X');
  convert(9,    'IX');
  convert(5,    'V');
  convert(4,    'IV');
  convert(1,    'I');

  return roman;
};
