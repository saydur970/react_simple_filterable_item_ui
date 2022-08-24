import { FC, Dispatch } from 'react';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } 
from '../reducer/filter_reducer.type';
import { InputRange } from './input/range';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

const ADJUST_NUM = 1000;

export const FilterInfluncerFollower: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: number) => {
    const newValue = val * ADJUST_NUM;
    filterDispatch({ type: 'totalFollower', payload: newValue });
  }

  return (
   <ItemWrapper title="Influencer’s Social Media Platform" >

      <InputRange value={Math.round(filterState.totalFollower/ADJUST_NUM)}
        changeHandler={changeHandler}
      />

   </ItemWrapper>
  )
};