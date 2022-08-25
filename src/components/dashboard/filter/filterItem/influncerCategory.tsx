import { FC, Dispatch } from 'react';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } from '../reducer/filter_reducer.type';
import { ty_industry_category } from '../../../../dataset/dataList';
import { data_IndustryCategoryList } from '../../../../dataset/utilData';
import { InputSelectMultiple } from './input/multipleSelect';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

export const FilterInfluncerCategory: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: string) => {
    const newValue = val as ty_industry_category;
    filterDispatch({type: 'industry_category', payload: newValue})
  }

  return (
   <ItemWrapper title="Influencer's Category" >

      <InputSelectMultiple value={filterState.industry.category} 
        optionList={data_IndustryCategoryList(filterState.industry.name)}
        changeHandler={changeHandler}
        isDisable={filterState.industry.name ? false: true}
        disableTxt="First Select Influencer's Industry"
      />

   </ItemWrapper>
  )
};