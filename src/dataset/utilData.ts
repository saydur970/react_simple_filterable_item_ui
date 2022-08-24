import { ty_countryList, ty_gender, ty_industry_category, ty_industry_name, ty_social_media } 
from "./dataList";

const categoryList:  { [key in ty_industry_name]: ty_industry_category[] } = {

  'Sport': [ 'Football', 'WWE', 'Race', 'Cricket' ],

  'Entertainment': [ 'Actor', 'Song', 'Comedy', 'YouTuber' ],

  'Corporate': [ 'Technology', 'Automobile' ],

  'Public figure': [ 'Politician' ],

}

export const data_CountryList: ty_countryList[] = [
  'Croatia', 'UK', 'USA', 'Bangladesh', 'Spain', 'Jamaica', 'India'
]

export const data_IndustryNameList: ty_industry_name[] = [
  'Sport', 'Entertainment', 'Corporate', 'Public figure'
]

export const data_GenderList: ty_gender[] = ['Male', 'Female'];

export const data_SocialList: ty_social_media[] = [
  'facebook', 'instagram', 'linkedin', 'twitter'
]

export const data_IndustryCategoryList = (name: ty_industry_name|null): string[] => {

  if(!name) return [];

  if(categoryList.hasOwnProperty(name)) {
    return categoryList[name]
  }

  return [];

}