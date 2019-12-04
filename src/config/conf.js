import { FormattedMessage as Msg, } from 'gatsby-plugin-intl';

const API_HOST_DEV = '//api.bystack.com/supernode/v1';
const API_HOST_PROD = '//api.bystack.com/supernode/v1';
const API_HOST = process.env.BUILD_FOR_TEST === 'true' ? API_HOST_DEV : process.env.NODE_ENV === 'development' ? API_HOST_DEV : API_HOST_PROD;
const API_HOST_DOC = '//api.bystack.com/docapi/v1'


export default {
  imgage_host: API_HOST,
  news_cn: `${API_HOST}/news`,
  news_en: `${API_HOST}/news/english`,
  node_list: `${API_HOST}/sn-table`,
  node_list_mobile: `${API_HOST}/sn-table/voted`,
  node_detail: `${API_HOST}/sn-table/detail`,
  vote: `${API_HOST}/vote`,
  upload: `${API_HOST}/upload`,
  apply: `${API_HOST}/supernode`,
  record: `${API_HOST}/voted/record`,
  recordAll: `${API_HOST}/sn-table/voted/all`,
  bycoin_email: `${API_HOST}/email`,
  reward: `${API_HOST}/reward`,

  doc_menu: `${API_HOST_DOC}/toc?id=ivyh2d/fo3png`,
  doc_menu_en: `${API_HOST_DOC}/toc?id=ivyh2d/gl2m6l`,
  doc_detail: `${API_HOST_DOC}/doc`,

  btm_asset_id: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',

  nav: [
    // {
    //   title: 'nav_wallet',
    //   link: '/wallet',
    // },
    // {
    //   title: 'nav_bp',
    //   link: '/node',
    //   href: '',
    //   target: '_top',
    // },
    {
      title: 'nav_doc',
      link: '/devcenter/docs',
    },
    // {
    //   title: 'nav_explorer',
    //   href: 'https://vapor.blockmeta.com',
    // },
  ],
  nav_atlas: [
    // {
    //   title: 'nav_wallet',
    //   link: '/wallet',
    // },
    {
      title: 'nav_doc',
      link: '/devcenter/docs',
    },
    // {
    //   title: 'nav_bp',
    //   link: '/node',
    //   href: '',
    //   target: '_top',
    // },
    // {
    //   title: 'nav_explorer',
    //   href: 'https://vapor.blockmeta.com',
    // },
  ],

  msgs: {
    zh: {
      name: '节点名称',
      vote: '请输入投票数',
      add: '追加投票数',
      count: '请输入投票数',
      balance: '余额不足',
      fail: '投票失败',
      one: '投票数不能小于1票',
      again: '投票失败，请稍后再试',
      success: '投票成功',
      empty: '请完整填写表单',
    },
    en: {
      name: 'BP Name',
      vote: 'Input your votes',
      add: 'Add your votes',
      count: 'Input your votes',
      balance: 'Balance is not enough',
      fail: 'Voting failed',
      one: 'Cannot be less than 1 vote',
      again: 'Voting failed, try again later',
      success: 'Success',
      empty: 'Please complete the form',
    },
  },
};