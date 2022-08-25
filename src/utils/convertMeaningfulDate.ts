const monthList = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

// date format = 2014-12-02'
export const convertMeaningfulDate = (date: string): string => {

  const dateArr = date.split('-').map(el => Number(el));

  // get month
  const month = monthList[dateArr[1]-1];


  return `${month} ${dateArr[2]}th, ${dateArr[0]}`
}