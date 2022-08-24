import { FC, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Grid, Card, Input, Button, CardContent, InputAdornment } from '@mui/material';
import { Typo } from '../shared/typography';
import SearchIcon from '@mui/icons-material/Search';
import { ty_filter_DispatchAction, ty_FilterReducer } 
from './filter/reducer/filter_reducer.type';

interface IComp {
  setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>;
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>
}


export const SearchBar: FC<IComp> = 
({ setIsFilterMenuOpen, filterState, filterDispatch }) => {

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    filterDispatch({ type: 'name', payload: event.target.value })
  }

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>

          <Grid container alignItems="center">

            <Grid item xs={12} sm={2} md={2} lg={2} container justifyContent="center" 
              alignItems="center"
              sx={{ marginBottom: { xs: '0.5rem', sm: 0 }, marginTop: { xs: 0, sm: '1rem' } }}
            >
              <Typo txt="Profile (100)" />
              {/* <Typography>
                Profile (100)
              </Typography> */}
            </Grid>

            <Grid item xs={12} sm={7} md={7} lg={8}
              sx={{ marginBottom: { xs: '1.5rem', sm: 0 } }}
            >
              <Input fullWidth={true} placeholder="Search Profile"
                value={filterState.name} 
                onChange={changeHandler}
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                }

              />
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={2} container justifyContent="center" >
              <Button variant="contained"
                onClick={() => setIsFilterMenuOpen(true)}
              >
                Advanced Filter
              </Button>
            </Grid>

          </Grid>

        </CardContent>

      </Card>
    </Grid>
  )

};