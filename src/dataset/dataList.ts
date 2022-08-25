export type ty_gender = 'Male'| 'Female';
export type ty_countryList = 'UK'| 'USA'| 'Germany'| 'Brazil'|
'Bangladesh'| 'Spain'| 'Jamaica'| 'India';
export type ty_industry_name = 'Sport'| 'Entertainment'| 'Corporate'| 'Public figure';
export type ty_industry_category = 'Football'| 'Actor'| 'Song'| 'WWE'| 'Race'| 'Cricket'|
'Technology'| 'Politician'| 'Comedy'| 'YouTuber'| 'Automobile'| 'Writter' ;
export type ty_social_media = 'facebook'| 'instagram'| 'linkedin'| 'twitter';

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
  gender: ty_gender;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  }
}


export const dataList: ty_dataItem[] = [
  
  // {
  //   id: 'user_01',
  //   name: '',
  //   image: '1.jpg',
  //   location: {
  //     city: '',
  //     country: 'Croatia'
  //   },
  //   joined: "2019-03-25",
  //   totalFollower: 10250,
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
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2014-06-18",
    totalFollower: 90847,
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
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2014-05-13",
    totalFollower: 70136,
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
    image: '1.jpg',
    location: {
      city: 'Haverfordwest',
      country: 'UK'
    },
    joined: "2011-03-25",
    totalFollower: 600234,
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
    image: '2.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2010-01-25",
    totalFollower: 508400,
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
    image: '1.jpg',
    location: {
      city: 'Camas',
      country: 'Spain'
    },
    joined: "2011-09-06",
    totalFollower: 903607,
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
    image: '1.jpg',
    location: {
      city: 'Sherwood',
      country: 'Jamaica'
    },
    joined: "2013-12-16",
    totalFollower: 803601,
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
    image: '1.jpg',
    location: {
      city: 'Texas',
      country: 'USA'
    },
    joined: "2012-01-30",
    totalFollower: 601230,
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
    name: 'Kaya Scodelario',
    image: '2.jpg',
    location: {
      city: 'Haywards Heath',
      country: 'UK'
    },
    joined: "2016-09-26",
    totalFollower: 905987,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_09',
    name: 'Jeff Bezos',
    image: '1.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2010-08-08",
    totalFollower: 100036,
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
    image: '1.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2018-12-19",
    totalFollower: 100446,
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
    image: '1.jpg',
    location: {
      city: 'Consett',
      country: 'UK'
    },
    joined: "2013-10-06",
    totalFollower: 606201,
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
    image: '1.jpg',
    location: {
      city: 'Kansas',
      country: 'USA'
    },
    joined: "2016-12-02",
    totalFollower: 203795,
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
    image: '1.jpg',
    location: {
      city: 'Michigan',
      country: 'USA'
    },
    joined: "2019-07-16",
    totalFollower: 70896,
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
    id: 'user_14',
    name: 'Sachin Tendulkar',
    image: '1.jpg',
    location: {
      city: 'Mumbai',
      country: 'India'
    },
    joined: "2015-02-10",
    totalFollower: 203650,
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
    id: 'user_15',
    name: 'James Hetfield',
    image: '1.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2018-03-25",
    totalFollower: 400250,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    id: 'user_16',
    name: 'Dwayne Johnson',
    image: '1.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2010-06-03",
    totalFollower: 406963,
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
  {
    id: 'user_17',
    name: 'Alexa Bliss',
    image: '2.jpg',
    location: {
      city: 'Columbus',
      country: 'USA'
    },
    joined: "2019-11-02",
    totalFollower: 304398,
    industry: {
      name: 'Sport',
      category: 'WWE'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_18',
    name: 'PewDiePie',
    image: '1.jpg',
    location: {
      city: 'Gothenburg',
      country: 'Spain'
    },
    joined: "2011-08-26",
    totalFollower: 303250,
    industry: {
      name: 'Entertainment',
      category: 'YouTuber'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_19',
    name: 'Henry Cavill',
    image: '1.jpg',
    location: {
      city: 'Jersey',
      country: 'UK'
    },
    joined: "2014-02-09",
    totalFollower: 402350,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_20',
    name: 'Angela Merkel',
    image: '2.jpg',
    location: {
      city: 'Hamburg',
      country: 'Germany'
    },
    joined: "2012-07-15",
    totalFollower: 50230,
    industry: {
      name: 'Public figure',
      category: 'Politician'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_21',
    name: 'Agatha Christie',
    image: '2.jpg',
    location: {
      city: 'Torquay',
      country: 'UK'
    },
    joined: "2022-01-01",
    totalFollower: 20250,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
    }
  },
  {
    id: 'user_22',
    name: 'Jack Dorsey',
    image: '1.jpg',
    location: {
      city: 'Missouri',
      country: 'USA'
    },
    joined: "2011-06-11",
    totalFollower: 60230,
    industry: {
      name: 'Corporate',
      category: 'Technology'
    },
    gender: 'Male',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_23',
    name: 'David Beckham',
    image: '1.jpg',
    location: {
      city: 'London',
      country: 'UK'
    },
    joined: "2012-08-03",
    totalFollower: 406239,
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
    id: 'user_24',
    name: 'Joe Root',
    image: '1.jpg',
    location: {
      city: 'Sheffield',
      country: 'UK'
    },
    joined: "2019-07-12",
    totalFollower: 60900,
    industry: {
      name: 'Sport',
      category: 'Cricket'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_25',
    name: 'Lucy Bronze',
    image: '2.jpg',
    location: {
      city: 'Berwick',
      country: 'UK'
    },
    joined: "2018-12-29",
    totalFollower: 60397,
    industry: {
      name: 'Sport',
      category: 'Football'
    },
    gender: 'Female',
    socialMedia: {
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    id: 'user_26',
    name: 'Arthur Conan Doyle',
    image: '1.jpg',
    location: {
      city: 'Edinburgh',
      country: 'UK'
    },
    joined: "2020-10-18",
    totalFollower: 70937,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Male',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/'
    }
  },
  {
    id: 'user_27',
    name: 'Ratan Tata',
    image: '1.jpg',
    location: {
      city: 'Mumbai',
      country: 'India'
    },
    joined: "2015-08-26",
    totalFollower: 90367,
    industry: {
      name: 'Corporate',
      category: 'Automobile'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_28',
    name: 'Sabine Schmitz',
    image: '2.jpg',
    location: {
      city: 'Adenau',
      country: 'Germany'
    },
    joined: "2016-12-13",
    totalFollower: 30761,
    industry: {
      name: 'Sport',
      category: 'Race'
    },
    gender: 'Female',
    socialMedia: {
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_29',
    name: 'Ayrton Senna',
    image: '1.jpg',
    location: {
      city: 'São Paulo',
      country: 'Brazil'
    },
    joined: "2017-06-12",
    totalFollower: 60834,
    industry: {
      name: 'Sport',
      category: 'Race'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    id: 'user_30',
    name: 'Aamir Khan',
    image: '1.jpg',
    location: {
      city: 'Mumbai',
      country: 'India'
    },
    joined: "2011-07-03",
    totalFollower: 100080,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_31',
    name: 'Virat Kohli',
    image: '1.jpg',
    location: {
      city: 'New Delhi',
      country: 'India'
    },
    joined: "2013-04-16",
    totalFollower: 303565,
    industry: {
      name: 'Sport',
      category: 'Cricket'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_32',
    name: 'Taylor Swift',
    image: '2.jpg',
    location: {
      city: 'Pennsylvania',
      country: 'USA'
    },
    joined: "2014-10-01",
    totalFollower: 102350,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Female',
    socialMedia: {
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_33',
    name: 'Taylor Swift',
    image: '2.jpg',
    location: {
      city: 'Pennsylvania',
      country: 'USA'
    },
    joined: "2014-10-01",
    totalFollower: 702693,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Female',
    socialMedia: {
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_34',
    name: 'Neymar',
    image: '1.jpg',
    location: {
      city: 'São Paulo',
      country: 'Brazil'
    },
    joined: "2013-05-17",
    totalFollower: 508386,
    industry: {
      name: 'Sport',
      category: 'Football'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
    }
  },
  {
    id: 'user_35',
    name: 'Mukesh Ambani',
    image: '1.jpg',
    location: {
      city: 'Mumbai',
      country: 'India'
    },
    joined: "2011-08-26",
    totalFollower: 90393,
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
    id: 'user_36',
    name: 'Bibhutibhushan Bandyopadhyay',
    image: '1.jpg',
    location: {
      city: 'North 24 Parganas',
      country: 'India'
    },
    joined: "2015-08-12",
    totalFollower: 20800,
    industry: {
      name: 'Public figure',
      category: 'Writter'
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
    id: 'user_37',
    name: 'Becky Lynch',
    image: '2.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2017-12-07",
    totalFollower: 300234,
    industry: {
      name: 'Sport',
      category: 'WWE'
    },
    gender: 'Female',
    socialMedia: {
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_38',
    name: 'Pelé',
    image: '1.jpg',
    location: {
      city: 'Três Corações',
      country: 'Brazil'
    },
    joined: "2018-08-30",
    totalFollower: 90070,
    industry: {
      name: 'Sport',
      category: 'Football'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_39',
    name: 'Sheikh Ishtiaque',
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2019-04-23",
    totalFollower: 40830,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
    }
  },
  {
    id: 'user_40',
    name: 'Joe Biden',
    image: '1.jpg',
    location: {
      city: 'Pennsylvania',
      country: 'USA'
    },
    joined: "2014-06-29",
    totalFollower: 100090,
    industry: {
      name: 'Public figure',
      category: 'Politician'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_41',
    name: 'Satyajit Ray',
    image: '1.jpg',
    location: {
      city: 'Kolkata',
      country: 'India'
    },
    joined: "2018-01-25",
    totalFollower: 30058,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_42',
    name: 'Sarat Chandra Chattopadhyay',
    image: '1.jpg',
    location: {
      city: 'Kolkata',
      country: 'India'
    },
    joined: "2018-01-13",
    totalFollower: 70936,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_43',
    name: 'Manik Bandopadhyay',
    image: '1.jpg',
    location: {
      city: 'Kolkata',
      country: 'India'
    },
    joined: "2018-04-26",
    totalFollower: 20063,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_44',
    name: 'Humayun Ahmed',
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2018-04-29",
    totalFollower: 60838,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_45',
    name: 'Humayun Faridi',
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2018-07-14",
    totalFollower: 20908,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_46',
    name: 'Tanzir Tuhin',
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2014-03-28",
    totalFollower: 90904,
    industry: {
      name: 'Entertainment',
      category: 'Song'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_47',
    name: 'Mohammad Rafique',
    image: '1.jpg',
    location: {
      city: 'Dhaka',
      country: 'Bangladesh'
    },
    joined: "2014-12-02",
    totalFollower: 3096,
    industry: {
      name: 'Sport',
      category: 'Cricket'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_48',
    name: 'Eddie Murphy',
    image: '1.jpg',
    location: {
      city: 'New York',
      country: 'USA'
    },
    joined: "2011-06-13",
    totalFollower: 505380,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_49',
    name: 'Brock Lesnar',
    image: '1.jpg',
    location: {
      city: ' South Dakota',
      country: 'USA'
    },
    joined: "2012-08-17",
    totalFollower: 80932,
    industry: {
      name: 'Sport',
      category: 'WWE'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_50',
    name: 'Bayley',
    image: '2.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2017-09-26",
    totalFollower: 80600,
    industry: {
      name: 'Sport',
      category: 'WWE'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_51',
    name: 'Syed Mustafa Siraj',
    image: '1.jpg',
    location: {
      city: 'Kolkata',
      country: 'India'
    },
    joined: "2018-01-26",
    totalFollower: 20921,
    industry: {
      name: 'Public figure',
      category: 'Writter'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/'
    }
  },
  {
    id: 'user_52',
    name: 'Narendra Modi',
    image: '1.jpg',
    location: {
      city: 'Vadnagar',
      country: 'India'
    },
    joined: "2013-02-18",
    totalFollower: 307064,
    industry: {
      name: 'Public figure',
      category: 'Politician'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_53',
    name: 'Chris Gayle',
    image: '1.jpg',
    location: {
      city: 'Kingston',
      country: 'Jamaica'
    },
    joined: "2012-06-11",
    totalFollower: 50317,
    industry: {
      name: 'Sport',
      category: 'Cricket'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_54',
    name: 'Dwayne Bravo',
    image: '1.jpg',
    location: {
      city: 'Santa Cruz',
      country: 'Jamaica'
    },
    joined: "2012-12-04",
    totalFollower: 50031,
    industry: {
      name: 'Sport',
      category: 'Cricket'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_55',
    name: 'Ronaldo',
    image: '1.jpg',
    location: {
      city: 'Rio de Janeiro',
      country: 'Brazil'
    },
    joined: "2017-09-07",
    totalFollower: 70901,
    industry: {
      name: 'Sport',
      category: 'Football'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    id: 'user_56',
    name: 'Ronaldinho',
    image: '1.jpg',
    location: {
      city: 'Grande do Sul',
      country: 'Brazil'
    },
    joined: "2017-12-17",
    totalFollower: 80105,
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
    id: 'user_57',
    name: 'Gal Gadot',
    image: '2.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2016-09-10",
    totalFollower: 406700,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_58',
    name: 'Emma Watson',
    image: '2.jpg',
    location: {
      city: 'New York',
      country: 'USA'
    },
    joined: "2017-05-23",
    totalFollower: 401914,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Female',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_59',
    name: 'Tom Hardy',
    image: '1.jpg',
    location: {
      city: 'London',
      country: 'UK'
    },
    joined: "2014-05-23",
    totalFollower: 500078,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'user_60',
    name: 'Ben Affleck',
    image: '1.jpg',
    location: {
      city: 'California',
      country: 'USA'
    },
    joined: "2014-07-14",
    totalFollower: 409301,
    industry: {
      name: 'Entertainment',
      category: 'Actor'
    },
    gender: 'Male',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/'
    }
  }


  // {
  //   id: 'user_50',
  //   name: '',
  //   image: '1.jpg',
  //   location: {
  //     city: 'California',
  //     country: 'USA'
  //   },
  //   joined: "2010-03-25",
  //   totalFollower: 102350,
  //   industry: {
  //     name: 'Sport',
  //     category: 'WWE'
  //   },
  //   gender: 'Male',
  //   socialMedia: {
  //     facebook: 'https://www.facebook.com/',
  //     instagram: 'https://www.instagram.com/',
  //     linkedin: 'https://www.linkedin.com/',
  //     twitter: 'https://twitter.com/'
  //   }
  // },

]