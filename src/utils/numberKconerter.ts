
// export const numberKconverter = (num: number): string => {

//   const thousandNum = Math.round(num/1000);

//   return `${thousandNum}K`;

// }

interface INumberKconverter {
  num: number;
  to: 'k'| 'unit'
}

export const numberKconverter = ({num, to}: INumberKconverter): number => {

  let targetNum: number;

  if(to === 'k') {
    targetNum = Math.round(num/1000);
  } 
  else {
    targetNum = num * 1000
  }

  return targetNum;

}