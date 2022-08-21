// module
import { useState, useEffect } from 'react';
import { Grid  } from '@mui/material';
import { fetchData } from '../../dataset/fetchData';
// comp
import { SearchBar } from './searchBar';
import { ty_dataItem } from '../../dataset/dataList';

export const Dashboard = () => {

  const [currentList, setCurrentList] = useState<ty_dataItem[]>([]);

  console.log(currentList);

  useEffect(() => {

    const getList = fetchData({ page: 1 });
    setCurrentList([...getList]);

  }, [])

  return (
    <Grid container>

      <SearchBar />

     
    </Grid>
  )
}