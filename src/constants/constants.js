const walkthrough_01_01_images = [
  require('../../assets/images/walkthrough/walkthrough_01_01.png'),
  require('../../assets/images/walkthrough/walkthrough_01_02.png'),
  require('../../assets/images/walkthrough/walkthrough_01_03.png'),
  require('../../assets/images/walkthrough/walkthrough_01_04.png'),
];

const walkthrough_01_02_images = [
  require('../../assets/images/walkthrough/walkthrough_01_05.png'),
  require('../../assets/images/walkthrough/walkthrough_01_06.png'),
  require('../../assets/images/walkthrough/walkthrough_01_07.png'),
  require('../../assets/images/walkthrough/walkthrough_01_01.png'),
];

const walkthrough = [
  {
    id: 0,
    title: 'Genuine product',
    sub_title: 'Diversified items of products in life, genuine product, safe',
    image: require('../../assets/images/walkthrough-01.png'),
  },
  {
    id: 1,
    title: 'Convenient ordering',
    sub_title: 'Order multiple items from multiple brands at the same time',
    image: require('../../assets/images/walkthrough-02.png'),
  },
  {
    id: 2,
    title: 'Easy search',
    sub_title:
      'Find products easy with Scanning camera, pay with just one camera scan',
    image: require('../../assets/images/walkthrough-03.png'),
  },
  {
    id: 3,
    title: 'Super fast delivery',
    sub_title: 'Delivery within the next day including Saturday and Sunday',
    image: require('../../assets/images/walkthrough-04.png'),
  },
];

const home_tabs = [
  {
    id: 0,
    label: 'Product',
  },
  {
    id: 1,
    label: 'My Chart',
  },
  {
    id: 2,
    label: 'Service',
  },
];

const dashboard_screens = {
  home: 'Home',
  category: 'Category',
  promo: 'Promo',
  profile: 'Profile',
};

const bottom_tabs = [
  {
    id: 0,
    label: dashboard_screens.home,
  },
  {
    id: 1,
    label: dashboard_screens.category,
  },
  {
    id: 2,
    label: dashboard_screens.promo,
  },
  {
    id: 3,
    label: dashboard_screens.profile,
  },
];

const scan_product_option = {
  qr: 'QR',
  camera: 'CAMERA',
};

export default {
  walkthrough_01_01_images,
  walkthrough_01_02_images,
  walkthrough,
  home_tabs,
  dashboard_screens,
  bottom_tabs,
  scan_product_option,
};
