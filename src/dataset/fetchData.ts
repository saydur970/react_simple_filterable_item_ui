import { dataList, ty_countryList, ty_industry_category, ty_industry_name } from "./dataList";

interface IFetchData {
  page: number;
  country?: ty_countryList;
  industry?: {
    name: ty_industry_name;
    category: ty_industry_category[];
  };
  totalFollower?: {
    min: number; max: number;
  };
}

const DOC_LIMIT = 6;

export const fetchData = ({ page, country, industry, totalFollower }: IFetchData) => {

  let list = dataList;

  // ============ filter country data ============
  if(country) {
    list = [...list].filter(el => el.location.country === country);
  }

  // ============ filter industry ============
  if(industry) {

    list = [...list].filter(el => {

      // check industry name
      if(el.industry.name === industry.name) {

        // check for category name (if provided)
        if(industry.category.length === 0 || 
          industry.category.includes(el.industry.category)
        ) {
          return true;
        }

      }
      return false;
    })


  }

  // ============ filter follower count ============
  if(totalFollower) {
    list = [...list].filter(el => el.totalFollower >= totalFollower.min && 
      el.totalFollower <= totalFollower.max )
  }


  // ========== pagination ============
  if(page >= 1) {

    const startIdx = (page-1)*DOC_LIMIT;
    list = [...list.slice(startIdx, startIdx+DOC_LIMIT)];
  }


  return list;

}