const SLICE_NUM = 2;
const DISPLAY_NUM = SLICE_NUM * 2 - 1;

interface Iparam {
  currentPage: number;
  lastPage: number;
}

export const paginatePage = ({ currentPage, lastPage}: Iparam) => {

  const currentPageIdx = currentPage -1;
  const pageList = Array.from(Array(lastPage).keys());

  let firstPart = [...pageList.slice(0, SLICE_NUM)];
  let lastPart = [...pageList.slice(lastPage-SLICE_NUM)];
  let middelPart: number[] = [];


  // if currentPageIdx is on first part
  if (currentPageIdx >= firstPart[0] &&
    currentPageIdx <= firstPart[firstPart.length - 1]) {
    firstPart = [...pageList.slice(0, DISPLAY_NUM)];
  }
  // if currentPageIdx is on last part
  else if (currentPageIdx >= lastPart[0] &&
    currentPageIdx <= lastPart[lastPart.length - 1]) {
    lastPart = [...pageList.slice(lastPage - DISPLAY_NUM)];
  }
  else if(
   ( currentPageIdx > firstPart[firstPart.length-1]) &&
   ( currentPageIdx < lastPart[0])
  ) {
    // middelPart = [currentPageIdx-1, currentPageIdx, currentPageIdx+1]
    let newMiddle: number[] = [currentPageIdx];

    // if prev middle part is exist?
    if(currentPageIdx-1 !== firstPart[firstPart.length-1]) {
      newMiddle = [currentPageIdx-1, ...newMiddle];
    }

    // if next middle part is exist?
    if(currentPageIdx+1 !== lastPart[0]) {
      newMiddle = [...newMiddle, currentPageIdx+1];
    }

    middelPart = [...newMiddle];

  }

  let pageNumList: (number|null)[] = [...firstPart];

  // add middle part
  if([0, 1].includes(middelPart[0] - firstPart[firstPart.length-1])) {
    pageNumList = [...pageNumList, ...middelPart]
  }
  else {
    pageNumList = [...pageNumList, null, ...middelPart]
  }

  // add last part
  if(
    [0, 1].includes(lastPart[0]-middelPart[middelPart.length-1]) ||
    pageNumList[pageNumList.length-1] === null
  ) {
    pageNumList = [...pageNumList, ...lastPart]
  }
  else {
    pageNumList = [...pageNumList, null, ...lastPart]
  }

  const finalList = pageNumList.map(el => {
    if(el !== null) return el+1;
    return el;
  });

  return finalList;


}