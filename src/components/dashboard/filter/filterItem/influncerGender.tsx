import { FC, Dispatch } from 'react';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } 
from '../reducer/filter_reducer.type';
import { ty_gender } from '../../../../dataset/dataList';
import { data_GenderList } from '../../../../dataset/utilData';
import { InputRadio } from './input/radio';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

export const FilterInfluncerGender: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: string) => {
    const newValue = val as ty_gender;
    filterDispatch({type: 'gender', payload: newValue});
  }

  return (
   <ItemWrapper title="Influencer's Gender" >

      <InputRadio value={filterState.gender} optionList={data_GenderList}
        changeHandler={changeHandler}
      />

   </ItemWrapper>
  )
};