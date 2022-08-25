import { ty_countryList, ty_industry_name, ty_industry_category, ty_gender, ty_social_media } 
from "../../../../dataset/dataList";


export type ty_FilterReducer = {
  name: string;
  page: number;
  country: ty_countryList|null;
  gender: ty_gender;
  industry: {
    name: ty_industry_name|null;
    category: ty_industry_category[];
  };
  totalFollower: number;
  social_media: ty_social_media|null;
  isApplied: boolean;
}

export type ty_filter_DispatchAction =
  { type: 'name', payload: string } |
  { type: 'page', payload: number } |
  { type: 'country', payload: ty_countryList } |
  { type: 'gender', payload: ty_gender } |
  { type: 'social_media', payload: ty_social_media } |

  { type: 'industry_name', payload: ty_industry_name } |
  { type: 'industry_category', payload: ty_industry_category } |
  // { type: 'industry_category_add', payload: ty_industry_category } |
  // { type: 'industry_category_remove', payload: number } |

  { type: 'totalFollower', payload: number }|
  { type: 'apply', payload: boolean }|
  { type: 'reset' };
