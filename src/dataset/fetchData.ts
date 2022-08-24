import { dataList, ty_countryList, ty_industry_category, 
  ty_industry_name, ty_gender } from "./dataList";

interface IFetchData {
  name: string;
  page: number;
  country: ty_countryList|null;
  gender: ty_gender;
  industry: {
    name: ty_industry_name|null;
    category: ty_industry_category[];
  };
  totalFollower: number;
}

const DOC_LIMIT = 6;

export const fetchData = 
({ name, page, country, gender, industry, totalFollower }: IFetchData) => {

  let list = dataList;

  // ============ filter country data ============
  if(country) {
    list = [...list].filter(el => el.location.country === country);
  }

  // ============ filter gender ============
  if(gender) {
    list = [...list].filter(el => el.gender === gender);
  }

  // ============ filter industry name ============
  if(industry.name) {

    list = [...list].filter(el => industry.name === el.industry.name)

  }

  // ============ filter industry category ============
  if (industry.name && industry.category.length > 0) {
    // check for category name (if provided)
    list = [...list].filter(el => {
      if (industry.category.includes(el.industry.category)) {
        return true;
      }
      return false;
    })
  }

  // ============ filter follower count ============
  if(totalFollower) {
    list = [...list].filter(el => el.totalFollower <= totalFollower );
  }

  // ============ filter name ============
  if(name) {
    const substring = name.toLowerCase();
    list = [...list].filter(el => el.name.toLowerCase().includes(substring));
  }


  // ========== pagination ============
  if(page >= 1) {
    const startIdx = (page-1)*DOC_LIMIT;
    list = [...list.slice(startIdx, startIdx+DOC_LIMIT)];
  }


  return list;

}

export const fetchDataInitial = dataList.slice(0, 6);