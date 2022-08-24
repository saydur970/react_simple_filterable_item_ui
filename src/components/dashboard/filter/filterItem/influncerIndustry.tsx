import { FC, Dispatch } from 'react';
import { InputSelect } from './input/select';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } from '../reducer/filter_reducer.type';
import { ty_industry_name } from '../../../../dataset/dataList';
import { data_IndustryNameList } from '../../../../dataset/utilData';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

export const FilterInfluncerIndustry: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: string) => {
    const newValue = val as ty_industry_name;
    filterDispatch({type: 'industry_name', payload: newValue})
  }

  return (
   <ItemWrapper title="Influencer's Industry" >

      <InputSelect value={filterState.industry.name} optionList={data_IndustryNameList}
        changeHandler={changeHandler}
      />

   </ItemWrapper>
  )
};