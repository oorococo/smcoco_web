const initialState = {

    navsLeft: [
        {
            title: '首页',
            href: '/',
        },
        {
            title: '游戏',
            href: 'http://ttd2.fengyun.cc:9999',
        },
        {
            title: '新闻',
            href: '/news',
        },
        {
            title: '关于',
            href: '/about',
        },
    ],

    navsRight: [
        {
            title: '更多',
            href: '#',
            navs: [
                {
                    title: '个人中心',
                    href: '//auth.fengyun.cc',
                },
                {
                    title: '全部产品',
                    href: '/products',
                },
                {
                    title: '友情链接',
                    href: '/links',
                },
            ],
        },
    ],

}

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PAGE = 'GET_PAGE'

// -----------------------------
// @reducer
// -----------------------------
export default () => ({})
