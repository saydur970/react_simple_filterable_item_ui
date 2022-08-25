import {
  dataList, ty_countryList, ty_industry_category,
  ty_industry_name, ty_gender, ty_social_media
} from "./dataList";
import { DATA_PER_PAGE_LIMIT } from "./utilData";

export interface ty_FetchDataParam {
  name: string | null;
  page: number;
  country: ty_countryList | null;
  social_media: ty_social_media | null;
  gender: ty_gender | null;
  industry?: {
    name: ty_industry_name | null;
    category: ty_industry_category[];
  };
  totalFollower: number | null;
}


export const fetchData = ({
  name, page, country, gender, industry, totalFollower, social_media
}: ty_FetchDataParam) => {

  let list = dataList;

  // ============ filter country data ============
  if (country) {
    list = [...list].filter(el => el.location.country === country);
  }

  // ============ filter gender ============
  if (gender) {
    list = [...list].filter(el => el.gender === gender);
  }

  // ============ filter social media ============
  if (social_media) {
    list = [...list].filter(el => el.socialMedia.hasOwnProperty(social_media));
  }

  // ============ filter industry name ============
  if (industry && industry.name) {

    list = [...list].filter(el => industry.name === el.industry.name)

  }

  // ============ filter industry category ============
  if (industry && industry.name && industry.category.length > 0) {
    // check for category name (if provided)
    list = [...list].filter(el => {
      if (industry.category.includes(el.industry.category)) {
        return true;
      }
      return false;
    })
  }

  // ============ filter follower count ============
  if (totalFollower !== null) {
    list = [...list].filter(el => el.totalFollower <= totalFollower);
  }

  // ============ filter name ============
  if (name) {
    const substring = name.toLowerCase();
    list = [...list].filter(el => el.name.toLowerCase().includes(substring));
  }


  // ========== pagination ============
  if (page >= 1) {
    const startIdx = (page - 1) * DATA_PER_PAGE_LIMIT;
    list = [...list.slice(startIdx, startIdx + DATA_PER_PAGE_LIMIT)];
  }


  return list;

}