const leftSidebarMenuData = [
  {
    icon: 'fa-solid fa-gamepad',
    title: 'Gaming',
    menu: ['Valheim', 'Genshin Impact', 'Minecraft', 'Pokimane', 'Halo Infinite', 'Call of Duty: Warzone', 'Path of Exile', 'Hollow Knight: Silksong', 'Escape from Tarkov', 'Watch Dogs: Legion'],
  },
  {
    icon: 'fa-solid fa-baseball',
    title: 'Sports',
    menu: ['NFL', 'NBL', 'Megan Anderson', 'Atlanta Hawks', 'Los Angeles Lakers', 'Boston Celtics', 'Arsenal F.C.', 'Philadelphia 76ers', 'Premier League', 'UFC'],
  },
  {
    icon: 'fa-solid fa-chart-column',
    title: 'Business, Economics, and Finance',
    menu: ['GameStop', 'Moderna', 'Pfizer', 'Johnson & Johnson', 'AstraZeneca', 'Walgreens', 'Best Buy', 'Novavax', 'SpaceX', 'Tesla'],
  },
  {
    icon: 'fa-regular fa-snowflake',
    title: 'Crypto',
    menu: ['Cardano', 'Dogecoin', 'Algorand', 'Bitcoin', 'Litecoin', 'Basic Attention Token', 'Bitcoin Cash'],
  },
  {
    icon: 'fa-solid fa-tv',
    title: 'Television',
    menu: ['The Real Housewives of Atlanta', 'The Bachelor', 'Sister Wives', '90 Day Fiance', 'Wife Swap', 'The Amazing Race Australia', 'Married at First Sight', 'The Real Housewives of Dallas', 'My 600-lb Life', 'Last Week Tonight with John Oliver'],
  },
  {
    icon: 'fa-regular fa-star',
    title: 'Celebrity',
    menu: ['Kim Kardashian', 'Doja Cat', 'Iggy Azalea', 'Anya Taylor-Joy', 'Jamie Lee Curtis', 'Natalie Portman', 'Henry Cavill', 'Millie Bobby Brown', 'Tom Hiddleston', 'Keanu Reeves'],
  },
  {
    icon: 'fa-solid fa-ellipsis',
    title: 'More Topics',
    menu: ['Animals and Pets', 'Anime', 'Art', 'Cars and Motor Vehicles', 'Crafts and DIY', 'Culture, Race, and Ethnicity', 'Ethics and Philosophy', 'Fashion', 'Food and Drink', 'History', 'Hobbies', 'Law', 'Learning and Education', 'Military', 'Movies', 'Music', 'Place', 'Podcasts and Streamers', 'Politics', 'Programming', 'Reading, Writing, and Literature', 'Religion and Spirituality', 'Science', 'Tabletop Games', 'Technology', 'Travel'],
  },
];

const settingMenuData = [
  {
    icon: 'fa-regular fa-circle-question',
    title: 'Help Center',
  },
  {
    icon: 'fa-solid fa-circle-info',
    title: 'More',
    moreIcon: 'fa-solid fa-angle-down',
    menu: ['Reddit iOS', 'Reddit Android', 'Rereddit', 'Best Communities', 'Communities', 'About Reddit', 'Blog', 'Careers', 'Press'],
  },
  {
    icon: 'fa-regular fa-rectangle-list',
    title: 'Terms & Policies',
    moreIcon: 'fa-solid fa-angle-down',
    menu: ['User Agreement', 'Privacy Policy', 'Content Policy', 'Moderator Code of Conduct'],
  },
  {
    icon: 'fa-solid fa-volume-high',
    title: 'Advertise on Reddit',
  },
  {
    icon: 'fa-solid fa-arrow-right-to-bracket',
    title: 'Log In / Sign Up',
  },
];

const rightSideMenuData = [
  {
    title: 'POPULAR COMMUNITIES',
    menu: ['AskReddit', 'NoStupidQuestions', 'DestinyTheGame', 'explainlikeimfive', 'AskMen', 'leagueoflegends', 'Minecraft']
  },
  {
    title: 'GAMING',
    menu: ['StardewValley', 'FortniteCompetitive', 'Warframe', 'totalwar', 'Fallout', 'RocketLeague', 'fo76', 'yugioh', 'eu4'],
  },
  {
    title: 'SPORTS',
    menu: ['running', 'soccer', 'bjj', 'MMA', 'hockey', 'formula1', 'CFB', 'barstoolsports', 'airsoft', 'rugbyunion', 'golf', 'MTB', 'cycling'],
  },
  {
    title: 'TV',
    menu: ['Naruto', 'BokuNoHeroAcademia', 'marvelstudios', 'rupaulsdragrace', '90DayFiance', 'dbz', 'Boruto']
  },
  {
    title: 'TRAVEL',
    menu: ['vancouver', 'brasil', 'australia', 'mexico', 'argentina', 'melbourne', 'ottawa', 'korea', 'ireland', 'travel', 'Calgary', 'portugal']
  },
  {
    title: 'HEALTH & FITNESS',
    menu: ['orangetheory', 'bodybuilding', 'bodyweightfitness', 'vegan', 'crossfit', 'nattyorjuice', 'EatCheapAndHealthy', 'EatCheapAndHealthy', 'loseit']
  },
  {
    title: 'FASHION',
    menu: ['MakeupAddiction', 'Watches', 'BeautyGuruChatter', 'femalefashionadvice', 'frugalmalefashion', 'curlyhair', 'poshmark']
  },
];

const countries = [
  { name: 'Afghanistan', code: 'AF', id: 0 },
  { name: 'Aland Islands', code: 'AX', id: 1 },
  { name: 'Albania', code: 'AL', id: 2 },
  { name: 'Algeria', code: 'DZ', id: 3 },
  { name: 'American Samoa', code: 'AS', id: 4 },
  { name: 'Andorra', code: 'AD', id: 5 },
  { name: 'Angola', code: 'AO', id: 6 },
  { name: 'Anguilla', code: 'AI', id: 7 },
  { name: 'Antarctica', code: 'AQ', id: 8 },
  { name: 'Antigua and Barbuda', code: 'AG', id: 9 },
  { name: 'Argentina', code: 'AR', id: 10 },
  { name: 'Armenia', code: 'AM', id: 11 },
  { name: 'Aruba', code: 'AW', id: 12 },
  { name: 'Australia', code: 'AU', id: 13 },
  { name: 'Austria', code: 'AT', id: 14 },
  { name: 'Azerbaijan', code: 'AZ', id: 15 },
  { name: 'Bahamas', code: 'BS', id: 16 },
  { name: 'Bahrain', code: 'BH', id: 17 },
  { name: 'Bangladesh', code: 'BD', id: 18 },
  { name: 'Barbados', code: 'BB', id: 19 },
  { name: 'Belarus', code: 'BY', id: 20 },
];

const postsMenu = [
  {
    likes: 5,
    disLikes: 2,
    time: '225553',
    groupName: 'GROOOp',
    userName: 'ahmedirheem',
    userAvatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

    content: {
      caption: 'HEEdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddEEEEEEEEEEEEEEEEELO',
      category: 'Politics',
      images: ['https://images.unsplash.com/photo-1669082072800-ee5e9a06b8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', '../assets/people-1284253_960_720.jpg'],
      video: '../assets/yt5s.io-سورة الضحى _ عثمان مشعل الحداد(720p).mp4'
    },

    comments: [
      {
        name: '',
        avatar: '',
        comment: '',
        time: '',
        likes: '',
        disLikes: '',
        replies: [
          {
            name: '',
            avatar: '',
            comment: '',
            time: '',
            likes: '',
            disLikes: '',
          },
        ]
      },
    ]
  },
];
