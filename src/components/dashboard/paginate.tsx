import { FC } from 'react';
import { Grid, IconButton } from '@mui/material';
// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface IComp {
  currentPage: number;
  lastPage: number;
}

const SLICE_NUM = 2;
const DISPLAY_NUM = SLICE_NUM * 2 - 1;

export const Paginate: FC<IComp> = ({currentPage, lastPage}) => {

  const renderButton = () => {

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
    else {
      middelPart = [currentPageIdx-1, currentPageIdx, currentPageIdx+1]
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


  }

  renderButton()



  return (
    <Grid item xs={12} container sx={{marginTop: '2rem'}} >

      <Grid item xs={2} >
        <IconButton>
          <ArrowBackIcon sx={{transform: 'scale(1.2)', marginRight: '0.5rem'}} /> Previous
        </IconButton>
      </Grid>


      <Grid item xs={8} >

      </Grid>


      <Grid item xs={2} container justifyContent="flex-end" >
        <IconButton >
          Next <ArrowForwardIcon sx={{transform: 'scale(1.2)', marginLeft: '0.5rem'}}/>
        </IconButton>
      </Grid>

    </Grid>
  )
};