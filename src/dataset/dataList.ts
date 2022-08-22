
export type ty_countryList = 'Croatia'| 'UK'| 'USA'| 
'Bangladesh'| 'Spain'| 'Jamaica'| 'India';
export type ty_industry_name = 'Sport'| 'Entertainment'| 'Corporate'| 'Public figure';
export type ty_industry_category = 'Football'| 'Actor'| 'Song'| 'WWE'| 'Race'| 'Cricket'|
'Technology'| 'Politician'| 'Comedy'| 'YouTuber'| 'Automobile' ;

export interface ty_dataItem {
  id: string;
  name: string;
  image: string;
  location: {
    country: ty_countryList;
    city: string;
  };
  joined: string;
  totalFollower: number;
  industry: {
    name: ty_industry_name;
    category: ty_industry_category;
  };
  gender: 'Male'| 'Female';
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  }
}


// const categoryList = {

//   'Sport': [ 'Football', 'WWE', 'Race', 'Cricket' ],

//   'Entertainment': [ 'Actor', 'Song', 'Comedy', 'YouTuber' ],

//   'Corporate': [ 'Technology', 'Automobile' ],

//   'Public figure': [ 'Politician' ],

// }




export const dataList: ty_dataItem[] = [
  
  // {
  //   id: 'user_01',
  //   name: '',
  //   image: '',
  //   location: {
  //     city: '',
  //     country: 'Croatia'
  //   },
  //   joined: "2019-03-25",
  //   totalFollower: 1250,
  //   industry: {
  //     name: 'Sport',
  //     category: 'Football'
  //   },
  //   gender: 'Male',
  //   socialMedia: {
  //     facebook: 'https://www.facebook.com/',
  //     instagram: 'https://www.instagram.com/',
  //     linkedin: 'https://www.linkedin.com/',
  //     twitter: 'https://twitter.com/'
  //   }
  // },
  {
    id: 'user_01',
    name: "George Lincoln D'Costa",
    image: '',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2014-06-18",
    totalFollower: 9847,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_02',
    name: 'Saidus Sumon Bassbaba',
    image: '',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2014-05-13",
    totalFollower: 7136,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_03',
    name: 'Christian Bale',
    image: '',
    location: {
      city: 'Haverfordwest',
      country: 'UK'
    },
    joined: "2011-03-25",
    totalFollower: 49234,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_04',
    name: 'Katy Perry',
    image: '',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2010-01-25",
    totalFollower: 75400,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_05',
    name: 'Sergio Ramos',
    image: '',
    location: {
      city: 'Camas',
      country: 'Spain'
    },
    joined: "2011-09-06",
    totalFollower: 13607,
    industry: {
      name: 'Sport',
      category: 'Football'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_06',
    name: 'Usain Bolt',
    image: '',
    location: {
      city: 'Sherwood',
      country: 'Jamaica'
    },
    joined: "2013-12-16",
    totalFollower: 33601,
    industry: {
      name: 'Sport',
      category: 'Race'
    },
    gender: 'Male',
    socialMedia: {
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_07',
    name: 'The Undertaker',
    image: '',
    location: {
      city: 'Texas',
      country: 'USA'
    },
    joined: "2012-01-30",
    totalFollower: 11230,
    industry: {
      name: 'Sport',
      category: 'WWE'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    id: 'user_08',
    name: 'Sachin Tendulkar',
    image: '',
    location: {
      city: 'Mumbai',
      country: 'India'
    },
    joined: "2015-02-10",
    totalFollower: 23650,
    industry: {
      name: 'Sport',
      category: 'Cricket'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_09',
    name: 'Jeff Bezos',
    image: '',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2010-08-08",
    totalFollower: 10036,
    industry: {
      name: 'Corporate',
      category: 'Technology'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_10',
    name: 'Donald Trump',
    image: '',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2018-12-19",
    totalFollower: 20446,
    industry: {
      name: 'Public figure',
      category: 'Politician'
    },
    gender: 'Male',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/'
    }
  },
  {
    id: 'user_11',
    name: 'Rowan Atkinson',
    image: '',
    location: {
      city: 'Consett',
      country: 'UK'
    },
    joined: "2013-10-06",
    totalFollower: 26201,
    industry: {
      name: 'Entertainment',
      category: 'Comedy'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_12',
    name: 'MrBeast',
    image: '',
    location: {
      city: 'Kansas',
      country: 'USA'
    },
    joined: "2016-12-02",
    totalFollower: 87965,
    industry: {
      name: 'Entertainment',
      category: 'YouTuber'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_13',
    name: 'Henry Ford',
    image: '',
    location: {
      city: 'Michigan',
      country: 'USA'
    },
    joined: "2019-07-16",
    totalFollower: 7896,
    industry: {
      name: 'Corporate',
      category: 'Automobile'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },






  {
    id: 'user_10',
    name: '',
    image: '',
    location: {
      city: 'Zadar',
      country: 'Croatia'
    },
    joined: "2010-03-25",
    totalFollower: 1250,
    industry: {
      name: 'Sport',
      category: 'WWE'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },














]