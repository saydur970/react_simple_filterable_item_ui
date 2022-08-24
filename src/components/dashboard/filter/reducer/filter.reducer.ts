import { ty_filter_DispatchAction, ty_FilterReducer } from './filter_reducer.type';

export const filterDataReducerInitial: ty_FilterReducer = {
  name: '',
  page: 1,
  country: null,
  gender: 'Male',
  social_media: null,
  industry: {
    name: null,
    category: []
  },
  totalFollower: 100000
};

export const filterDataReducer = 
(state:ty_FilterReducer, action: ty_filter_DispatchAction): ty_FilterReducer => {

  switch(action.type) {

    // ==================== Handle name =========================
    case 'name': {

      return {
        ...state,
        name: action.payload
      }

    }

    // ==================== Handle country =========================
    case 'country': {

      return {
        ...state,
        country: action.payload ? action.payload: null
      }

    }

    // ==================== Handle page =========================
    case 'page': {

      return {
        ...state,
        page: action.payload
      }

    }

    // ==================== Handle gender =========================
    case 'gender': {

      return {
        ...state,
        gender: action.payload
      }

    }

    // ==================== Handle social media =========================
    case 'social_media': {

      return {
        ...state,
        social_media: action.payload ? action.payload: null
      }

    }

    // ==================== handle industry_name =========================
    case 'industry_name': {
      return {
        ...state,
        industry: {
          name: action.payload ? action.payload: null,
          category: []
        }
      }
    }

    // ==================== Add industry category =========================
    case 'industry_category': {

      if(!action.payload) return {...state};

      const targetIdx = state.industry.category.findIndex(el => el === action.payload);

      let currentCategoryList = [...state.industry.category];

      // console.log(targetIdx, action.payload)

      if(targetIdx > -1) { // adready exist
        currentCategoryList.splice(targetIdx, 1);
      }
      else { // not exist
        currentCategoryList = [...currentCategoryList, action.payload]
      }

      return {
        ...state,
        industry: {
          name: state.industry.name,
          category: [...currentCategoryList]
        }
      }
    }

    // ==================== handle industry_name =========================
    case 'totalFollower': {
      return {
        ...state,
        totalFollower: action.payload
      }
    }


    // ==================== handle industry_name =========================
    case 'reset': {
      return {
       ...filterDataReducerInitial
      }
    }

    default:
      return state;

  }


}