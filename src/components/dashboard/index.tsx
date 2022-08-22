// module
import { useState, useEffect } from 'react';
import { Grid  } from '@mui/material';
import { fetchData } from '../../dataset/fetchData';
import { ProfileList } from './profileList';
// comp
import { SearchBar } from './searchBar';
import { ty_dataItem } from '../../dataset/dataList';
import { ty_Fetch_StatusT } from '../../types/general.types';
import { Paginate } from './paginate';


export const Dashboard = () => {

  const [currentList, setCurrentList] = useState<ty_dataItem[]>([]);
  const [status, setStatus] = useState<ty_Fetch_StatusT>('loading');
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(10);

  useEffect(() => {

    setStatus('loading');

    const getList = fetchData({ page: 1 });
    setCurrentList([...getList]);
    setStatus('success');

  }, []);

  return (
    <Grid container>

      <SearchBar />

      <ProfileList status={status} list={currentList} />

      {/* <Paginate currentPage={currentPage} lastPage={lastPage} /> */}

     
    </Grid>
  )
}