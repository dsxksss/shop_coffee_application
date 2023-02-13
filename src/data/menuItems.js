import { BuildingStorefrontIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'

const menuItems = [
    {
        index: 0,
        title: "商品",
        iconColor: '',
        isActive: true,
        component: BuildingStorefrontIcon,
    },
    {
        index: 1,
        title: "购物车",
        iconColor: '',
        isActive: false,
        component: ShoppingCartIcon,
    },
    {
        index: 2,
        title: "个人",
        iconColor: '',
        isActive: false,
        component: UserIcon,
    },
    {
        index: 3,
        title: "设置",
        iconColor: '',
        isActive: false,
        component: Cog6ToothIcon,
    },
];

export default menuItems;