// module
import { useState, useEffect, useReducer } from 'react';
import { Grid  } from '@mui/material';
import { fetchData, fetchDataInitial } from '../../dataset/fetchData';
import { ProfileList } from './profileList';
// comp
import { SearchBar } from './searchBar';
import { ty_dataItem } from '../../dataset/dataList';
import { ty_Fetch_StatusT } from '../../types/general.types';
import { Paginate } from './paginate';
import { Filter } from './filter';
import { filterDataReducer, filterDataReducerInitial } 
from './filter/reducer/filter.reducer';


export const Dashboard = () => {

  const [currentList, setCurrentList] = useState<ty_dataItem[]>([]);
  const [status, setStatus] = useState<ty_Fetch_StatusT>('loading');
  const [lastPage] = useState(10);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filterState, filterDispatch] = 
  useReducer(filterDataReducer, filterDataReducerInitial);

  // const handleFilterData = useCallback(() => {
  //   setStatus('loading');
  //   const getList = fetchData({...filterState});
  //   setCurrentList([...getList]);
  //   setStatus('success');
  // }, [filterState]);

  // =================== get initial data ===================
  useEffect(() => {

    setStatus('loading');
    setCurrentList([...fetchDataInitial]);
    setStatus('success');

  }, []);


  // ============ only run when search name or page changed ============
  useEffect(() => {

    handleFilterData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState.name, filterState.page]);


  const handleFilterData = () => {
    setStatus('loading');
    const getList = fetchData({...filterState});
    setCurrentList([...getList]);
    setStatus('success');
  }

  return (
    <Grid container>

      <SearchBar setIsFilterMenuOpen={setIsFilterMenuOpen}
        filterState={filterState} filterDispatch={filterDispatch}
      />

      <ProfileList status={status} list={currentList} />

      <Paginate currentPage={filterState.page} lastPage={lastPage}
        filterDispatch={filterDispatch} currentTotalData={currentList.length}
      />

      <Filter isOpen={isFilterMenuOpen} setIsOpen={setIsFilterMenuOpen} 
        filterState={filterState} filterDispatch={filterDispatch}
        handleFilterData={handleFilterData}
      />

     
    </Grid>
  )
}