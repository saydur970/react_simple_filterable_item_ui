import { FC, Dispatch } from 'react';
import { InputSelect } from './input/select';
import { ItemWrapper } from './itemWrapper';
import { ty_FilterReducer, ty_filter_DispatchAction } 
from '../reducer/filter_reducer.type';
import { ty_social_media } from '../../../../dataset/dataList';
import { data_SocialList } from '../../../../dataset/utilData';

interface IComp {
  filterState: ty_FilterReducer;
  filterDispatch: Dispatch<ty_filter_DispatchAction>;
}

export const FilterInfluncerSocial: FC<IComp> = ({filterState, filterDispatch}) => {

  const changeHandler = (val: string) => {
    const newValue = val as ty_social_media;
    filterDispatch({type: 'social_media', payload: newValue})
  }

  return (
   <ItemWrapper title="Influencer's Social Media" >

      <InputSelect value={filterState.social_media} optionList={data_SocialList}
        changeHandler={changeHandler}
      />

   </ItemWrapper>
  )
};