import { FC, Dispatch } from 'react';
import { InputSelect } from './input/select';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } from '../reducer/filter_reducer.type';
import { ty_countryList } from '../../../../dataset/dataList';
import { data_CountryList } from '../../../../dataset/utilData';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

export const FilterInfluncerCountry: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: string) => {
    const newValue = val as ty_countryList;
    filterDispatch({type: 'country', payload: newValue})
  }

  return (
   <ItemWrapper title="Influencer's Country" >

      <InputSelect value={filterState.country} optionList={data_CountryList}
        changeHandler={changeHandler}
      />

   </ItemWrapper>
  )
};