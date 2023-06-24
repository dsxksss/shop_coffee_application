import { BuildingStorefrontIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

const menuItems = [
    {
        path: '/',
        title: "商品",
        iconColor: '',
        isActive: true,
        component: BuildingStorefrontIcon,
    },
    {
        path: '/productCar',
        title: "购物车",
        iconColor: '',
        isActive: false,
        component: ShoppingCartIcon,
    },
    {
        path: '/my',
        title: "个人",
        iconColor: '',
        isActive: false,
        component: UserIcon,
    },
    {
        path: '/setting',
        title: "设置",
        iconColor: '',
        isActive: false,
        component: Cog6ToothIcon,
    },
];

export default menuItems;