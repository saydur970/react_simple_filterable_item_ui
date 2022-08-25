// module
import { useState, useEffect, useReducer } from 'react';
import { Grid } from '@mui/material';
import { fetchData, ty_FetchDataParam } from '../../dataset/fetchData';
import { ProfileList } from './profileList';
// comp
import { SearchBar } from './searchBar';
import { ty_dataItem } from '../../dataset/dataList';
import { ty_Fetch_StatusT } from '../../types/general.types';
import { Paginate } from './paginate';
import { Filter } from './filter';
import { filterDataReducer, filterDataReducerInitial }
  from './filter/reducer/filter.reducer';

const LAST_PAGE = 10;

export const Dashboard = () => {

  const [currentList, setCurrentList] = useState<ty_dataItem[]>([]);
  const [status, setStatus] = useState<ty_Fetch_StatusT>('loading');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [filterState, filterDispatch] =
    useReducer(filterDataReducer, filterDataReducerInitial);
  const [willFilterData, setWillFilterData] = useState(false);

  // ============ run initially and when search name or page changed 
  useEffect(() => {
    handleFilterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState.name, filterState.page]);


  // ================= filter and get new data 
  useEffect(() => {
    if (willFilterData) {
      handleFilterData();
    }
    setWillFilterData(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [willFilterData]);



  const handleFilterData = () => {

    // default filter options
    let filterOption: ty_FetchDataParam = {
      name: filterState.name,
      page: filterState.page,
      country: null,
      social_media: null,
      totalFollower: null,
      gender: null
    }


    // if filter option is applied, then pass changed value
    if (filterState.isApplied) {
      filterOption = { ...filterState };
    }

    setStatus('loading');
    const getList = fetchData(filterOption);
    setCurrentList([...getList]);
    setStatus('success');
  }


  // const handleFilterData = useCallback(() => {
  //   setStatus('loading');
  //   const getList = fetchData({...filterState});
  //   setCurrentList([...getList]);
  //   setStatus('success');
  // }, [filterState]);

  return (
    <Grid container>

      <SearchBar setIsFilterMenuOpen={setIsFilterMenuOpen}
        filterState={filterState} filterDispatch={filterDispatch}
      />

      <ProfileList status={status} list={currentList} />

      <Paginate currentPage={filterState.page} lastPage={LAST_PAGE}
        filterDispatch={filterDispatch} currentTotalData={currentList.length}
      />

      <Filter isOpen={isFilterMenuOpen} setIsOpen={setIsFilterMenuOpen}
        filterState={filterState} filterDispatch={filterDispatch}
        handleFilterData={handleFilterData} setWillFilterData={setWillFilterData}
      />


    </Grid>
  )
}