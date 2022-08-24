import { FC, Dispatch, SetStateAction } from 'react';
import { Grid, Card, Divider, CardContent, Button } 
from '@mui/material';
import { Backdrop } from '../../shared/model/backdrop';
import { Typo } from '../../shared/typography';
import { FilterInfluncerIndustry } from './filterItem/influncerIndustry';
import { ty_FilterReducer, ty_filter_DispatchAction } from './reducer/filter_reducer.type';
import { FilterInfluncerCountry } from './filterItem/influncerCountry';
import { FilterInfluncerCategory } from './filterItem/influncerCategory';
import { FilterInfluncerGender } from './filterItem/influncerGender';
import { FilterInfluncerFollower } from './filterItem/influncerFollower';
import { FilterInfluncerSocial } from './filterItem/influncerSocialMedia';

interface IComp {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
  handleFilterData: () => void;
}

export const Filter: FC<IComp> = 
({ isOpen, setIsOpen, filterState, filterDispatch, handleFilterData }) => {

  const closeHandler = () => {
    setIsOpen(false);
  }

  const applyHandler = () => {
    handleFilterData();
    closeHandler();
  }

  if(!isOpen) return null;

  return (
    <Backdrop close={closeHandler}>

      <div style={{ position: 'absolute', top: '15%', right: '5%', height: '100%'}} >


        <Card sx={{ width: '30rem' }} >

          <div>
            <Typo txt="Filter Options" variant="h4" margin="1.5rem 2rem" />
            <Divider />
          </div>

          <CardContent>
            <Grid container >

              <FilterInfluncerIndustry 
                filterState={filterState} filterDispatch={filterDispatch} 
              />

              <FilterInfluncerCountry 
                filterState={filterState} filterDispatch={filterDispatch} 
              />

              <FilterInfluncerCategory
                filterState={filterState} filterDispatch={filterDispatch}
              />

              <FilterInfluncerSocial
                filterState={filterState} filterDispatch={filterDispatch}
              />


              <FilterInfluncerFollower
                filterState={filterState} filterDispatch={filterDispatch}
              />

              <FilterInfluncerGender
                filterState={filterState} filterDispatch={filterDispatch}
              />

            </Grid>

            <Grid item xs={12} container>
              <Button variant="contained" 
                sx={{backgroundColor: '#050405', marginRight: '1.5rem'}}
                  onClick={() => filterDispatch({type: 'reset'})}
                > 
                  Reset 
              </Button>
              <Button variant="contained" onClick={applyHandler} > 
                Apply 
              </Button>
            </Grid>
            
          </CardContent>

        </Card>

      </div>

    </Backdrop>
  )
};