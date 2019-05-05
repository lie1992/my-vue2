const comm = {
    state: {
        count: 0,
        // 上传车辆行驶证示意图开关
        carFloor: false,
        // 是否打开选车组件
        hasCarSelectSHow: false,
        hasCarSelectParternSHow: false,
        // 当前正在添加的车辆ID
        addCarID: '',
        // 当前地区
        curArea: {}
    },
    mutations: {
        showFoot (state) {
            state.count = 0
        },
        hideFoot (state) {
            state.count = 1
        },
        showCarFloor (state) {
            state.carFloor = true
        },
        hidecarFloor (state) {
            state.carFloor = false
        },
        hideCarSelect (state) {
            state.hasCarSelectSHow = false
        },
        hideCarSelectPartern (state) {
            state.hasCarSelectParternSHow = false
        },
        changeCurCarNum (state) {
            // state.curCarNum
        }
    }
}

const user = {
    state: {
        userName: '',
        userToken: '',
        userInfo: {},
        // 用户默认车辆
        userDefaultCar: {},
        // 用户车辆列表数据
        userCarList: [],
        // 用户当前车辆车牌
        curCarNum: '',
        // 用户当前车辆ID
        curCarID: '',
        // 当前车辆数据 在切换车辆的时候用
        curCarData: {},
        // 用户当前选择的区域 或者默认区域
        curAreaID: '',
        curAreaName: ''
    },
    mutations: {
        logout (state) {
        },
        setUserInfo (state, userData) {
            state.userInfo = userData
        }
    }
}
// 购物车数据
const cart = {
    state: {
        // 当前车辆的购物车数据
        cartData: [],
        // 购物车数据选择状态
        cartSelData: [],
        // 购物车全选按钮
        checkAllStatus: false,
        // 当前车辆 确认订单时 用户地址
        curAddress: {},
        // 确认订单数据
        cartConfirmSMData: {},
        cartConfirmMDData: [],
        cartConfirmDJ: 0,
        // 已选过优惠券数组
        discountSeledList: [],
        // 购物车选择的数据
        selectCartData: [],
        // 购物车选择的id数组
        selectArr: []
    },
    mutations: {
    }
}

// 记录列表位置
const posi = {
    state: {
        cartPosi: 0
    },
    mutations: {
    }
}

const data = {
    'comm': comm,
    'user': user,
    'cart': cart,
    'posi': posi
}

export default {
    data
}
