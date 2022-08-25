import { useState, useEffect, FC, Dispatch } from 'react';
import { Grid, IconButton } from '@mui/material';
import { paginatePage } from '../../utils/paginatePage';
// icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ty_filter_DispatchAction } from './filter/reducer/filter_reducer.type';
import { useUITheme } from '../../hooks/useUITheme';
import { DATA_PER_PAGE_LIMIT } from '../../dataset/utilData';


interface IComp {
  currentPage: number;
  lastPage: number;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
  currentTotalData: number;
}



export const Paginate: FC<IComp> = 
({currentPage, lastPage, filterDispatch, currentTotalData}) => {

  const [pageList, setPageList] = useState<(number|null)[]>([]);
  const { theme } = useUITheme();

  useEffect(() => {
    setPageList(paginatePage({currentPage, lastPage}))
  }, [currentPage, lastPage]);


  const prevHandler = () => {
    if(currentPage > 1) {
      filterDispatch({
        type: 'page',
        payload: currentPage-1
      })
    }
  }

  const nextHandler = () => {
    if(currentTotalData >= DATA_PER_PAGE_LIMIT) {
      filterDispatch({
        type: 'page',
        payload: currentPage+1
      })
    }
  };

  const targetPageHandler = (pageIdx: number) => {

    let targetPage: number|null = null;

    // if pageIdx has actual page
    if (pageList[pageIdx] !== null) {
      targetPage = pageList[pageIdx]
    }
    // if previous idx of pageIdx has actual page
    else if (pageList[pageIdx-1] !== null) {
      targetPage = pageList[pageIdx-1]
    }
    // if next idx of pageIdx has actual page
    else if (pageList[pageIdx+1] !== null) {
      targetPage = pageList[pageIdx+1]
    }

    if(targetPage !== null) {
      filterDispatch({
        type: 'page',
        payload: targetPage
      })
    }

  }

  const buttonListRender = () => {

    return pageList.map((el, idx) => (

      <IconButton key={idx} onClick={()=> targetPageHandler(idx)}
        sx={{
          marginRight: {
            xs: '0.8rem',
            sm: '1rem'
          },
          padding: {
            xs: '1rem 0.5rem',
            sm: '1rem'
          },
          backgroundColor: el === currentPage ? 
          theme.palette.highlight.main : 'transparent',
          color: theme.palette.txt.main
        }}
        disabled={currentTotalData < DATA_PER_PAGE_LIMIT && idx+1 >= currentPage}
      >
        {el !== null ? el: '...'}
      </IconButton>

    ))

  }



  return (
    <Grid item xs={12} container sx={{marginTop: '5rem'}} >

      <Grid item xs={1} sm={2} >
        <IconButton onClick={prevHandler} disabled={currentPage <= 1} >
          <ArrowBackIcon sx={{transform: 'scale(1.2)', marginRight: '0.5rem'}} /> Previous
        </IconButton>
      </Grid>


      <Grid item xs={10} sm={8} container justifyContent="center" >

        {
          buttonListRender()
        }

        {/* {
          pageList.map(el => {
            if(el !== null) {
              return 
            }
          })
        } */}

      </Grid>


      <Grid item xs={1} sm={2} container justifyContent="flex-end" >
        <IconButton onClick={nextHandler} 
          disabled={currentTotalData < DATA_PER_PAGE_LIMIT}
        >
          Next <ArrowForwardIcon sx={{transform: 'scale(1.2)', marginLeft: '0.5rem'}}/>
        </IconButton>
      </Grid>

    </Grid>
  )
};