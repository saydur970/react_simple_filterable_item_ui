import { FC, Dispatch } from 'react';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } 
from '../reducer/filter_reducer.type';
import { InputRange } from './input/range';
import { numberKconverter } from '../../../../utils/numberKconerter';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

const ADJUST_NUM = 10;

export const FilterInfluncerFollower: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: number) => {
    const newValue = numberKconverter({num: val*ADJUST_NUM, to: 'unit'})
    filterDispatch({ type: 'totalFollower', payload: newValue });
  }

  return (
   <ItemWrapper title="Influencer’s Social Media Platform" >

      <InputRange changeHandler={changeHandler}
        value={numberKconverter({num: filterState.totalFollower/ADJUST_NUM, to: 'k'})}
      />

   </ItemWrapper>
  )
};