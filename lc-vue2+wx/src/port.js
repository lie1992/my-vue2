// const WEB_PATH = 'http://10.9.254.116:10082'
// const WEB_PATH = 'http://10.9.254.106:10082'
// const WEB_PATH = 'http://10.9.254.19:10082'
// const WEB_PATH = 'http://202.107.219.16'
// const WEB_PATH = 'http://114.55.101.33:10082/'
// const WEB_PATH = 'http://114.55.101.33:18201/'
const WEB_PATH = 'http://www.smliche.com'



const port = {
    // 注册 获取短信验证码
    'regCode': WEB_PATH + '/api/Customer/SendRegisterCode',
    // 注册 提交
    'regSubmit': WEB_PATH + '/api/Customer/Register',
    // 登录
    'Authenticate': WEB_PATH + '/api/Customer/Authenticate',
    // 登录 获取图形验证码
    'LoginCode': WEB_PATH + '/api/Customer/LoginCode',
    // 登录 验证是否需要验证码
    'NeededCode': WEB_PATH + '/api/Customer/NeededCode',
    // 忘记密码 获取短信验证码
    'findCode': WEB_PATH + '/api/Customer/SendForgetCode',
    // 忘记密码 提交
    'findSubmit': WEB_PATH + '/api/Customer/ForgetPassword',
    // 首页 轮播图
    'AppHomeAdvers': WEB_PATH + '/api/Adver/AppHomeAdvers',
    // 首页 广告位图片
    'AppAdverSpace1Advers': WEB_PATH + '/api/Adver/AppAdverSpace1Advers',
    // 首页 获取默认车辆
    'GetDefaultCustomerCar': WEB_PATH + '/api/CustomerCar/GetDefaultCustomerCar',
    // 首页 修改车险到期时间
    'UpdateCarInsurance': WEB_PATH + '/api/CustomerCar/UpdateCarInsurance',
    // 首页 修改年检到期时间
    'UpdateAnnualInspection': WEB_PATH + '/api/CustomerCar/UpdateAnnualInspection',
    // 首页 修改车辆公里数
    'UpdateTotalKm': WEB_PATH + '/api/CustomerCar/UpdateTotalKm',
    // 首页 获取省市区联动
    'GetAllRegionsWithoutTown': WEB_PATH + '/api/SystemInfo/GetAllRegionsWithoutTown',
    // 首页 搜索
    'SearchServiceProducts': WEB_PATH + '/api/Product/SearchServiceProducts',
    // 服务 门店列表
    'GetStores': WEB_PATH + '/api/Store/GetStores',
    // 我的 主页
    'MyInfo': WEB_PATH + '/api/Customer/MyInfo',
    // 我的 地址列表
    'MyAddresses': WEB_PATH + '/api/Customer/MyAddresses',
    // 我的 添加地址
    'AddAddress': WEB_PATH + '/api/Customer/AddAddress',
    // 我的 删除地址
    'DeleteAddress': WEB_PATH + '/api/Customer/DeleteAddress',
    // 我的 设置默认地址
    'SetDefaultAddress': WEB_PATH + '/api/Customer/SetDefaultAddress',
    // 我的 获取地址详情
    'GetCustomerAddress': WEB_PATH + '/api/Customer/GetCustomerAddress',
    // 我的 更新地址
    'UpdateAddress': WEB_PATH + '/api/Customer/UpdateAddress',
    // 我的 余额明细
    'BalanceRecords': WEB_PATH + '/api/CustomerInfo/BalanceRecords',
    // 我的 优惠券
    'GetCurrentCoupons': WEB_PATH + '/api/CustomerInfo/GetCurrentCoupons',
    // 我的 修改密码
    'UpdatePassword': WEB_PATH + '/api/Customer/UpdatePassword',
    // 我的 设置用户名
    'SetRealName': WEB_PATH + '/api/Customer/SetRealName',
    // 我的 设置生日
    'SetBirthday': WEB_PATH + '/api/Customer/SetBirthday',
    // 我的 设置性别
    'SetGender': WEB_PATH + '/api/Customer/SetGender',
    // 我的 设置头像
    'UpdateAvatar': WEB_PATH + '/api/Customer/UpdateAvatar',
    // 我的 消息
    'MyMessages': WEB_PATH + '/api/Customer/MyMessages',
    // 我的 读取消息
    'ReadNotify': WEB_PATH + '/api/Customer/ReadNotify',
    // 我的 关于我们
    'AboutUs': WEB_PATH + '/api/SystemInfo/AboutUs',
    // 地址 获取省级数据
    'GetAllRegionsWithoutTown': WEB_PATH + '/api/SystemInfo/GetAllRegionsWithoutTown',
    // 地址 根据父级地址获取区域
    'GetRegionsByParentId': WEB_PATH + '/api/SystemInfo/GetRegionsByParentId',
    // 车辆 添加车辆
    'CreateCustomerCar': WEB_PATH + '/api/CustomerCar/CreateCustomerCar',
    // 车辆 获取车辆列表
    'GetCustomerCars': WEB_PATH + '/api/CustomerCar/GetCustomerCars',
    // 车辆 设置默认车辆
    'SetDefaultCustomerCar': WEB_PATH + '/api/CustomerCar/SetDefaultCustomerCar',
    // 车辆 删除车辆
    'DelCustomerCar': WEB_PATH + '/api/CustomerCar/DelCustomerCar',
    // 获取车辆详情
    'GetCustomerCarDetail': WEB_PATH + '/api/CustomerCar/GetCustomerCarDetail',
    // 车辆 获取品牌
    'GetBrands': WEB_PATH + '/api/Car/GetBrands',
    // 车辆 获取品牌车系和系列
    'GetBrandSeriesAndSeries': WEB_PATH + '/api/Car/GetBrandSeriesAndSeries',
    // 车辆 获取指定车款详情
    'GetCarDetailByCarId': WEB_PATH + '/api/Car/GetCarDetailByCarId',
    // 车辆 更新车辆信息
    'UpdateCustomerCar': WEB_PATH + '/api/CustomerCar/UpdateCustomerCar',
    // 根据系列，选择车款
    'GetCarsBySeriesId': WEB_PATH + '/api/Car/GetCarsBySeriesId',
    // 上传图片 返回图片ID
    'PictureUpload': WEB_PATH + '/api/Picture/PictureUpload',
    // 上传 返回图片id和预览
    'PictureUploadForView': WEB_PATH + '/api/Picture/PictureUploadForView',
    // 其他 意见反馈
    'Feedback': WEB_PATH + '/api/SystemInfo/Feedback',
    // 其他 车险报名
    'CreateInsuranceApplication': WEB_PATH + '/api/Others/CreateInsuranceApplication',
    // 其他 获取保险公司信息（名称）
    'GetAllInsuranceCompanies': WEB_PATH + '/api/Others/GetAllInsuranceCompanies',
    // 其他 常见问题
    'GetQuestionAndAnswers': WEB_PATH + '/api/Others/GetQuestionAndAnswers',
    // 其他 获取救援资料
    'GetRescues': WEB_PATH + '/api/Others/GetRescues',
    // 其他 获取保养手册
    'GetMaintenanceTips': WEB_PATH + '/api/Others/GetMaintenanceTips',
    // 其他 已开通地区
    'GetStoreServiceRegions': WEB_PATH + '/api/SystemInfo/GetStoreServiceRegions',
    // 文章
    'GetRecommendArticles': WEB_PATH + '/api/Others/GetRecommendArticles',
    // 文章详情
    'GetArticleDetail': WEB_PATH + '/api/Others/GetArticleDetail',
    // 服务 服务列表
    'GetServiceProducts': WEB_PATH + '/api/Product/GetServiceProducts',
    // 服务 服务详情
    'GetServiceProductDetail': WEB_PATH + '/api/Product/GetServiceProductDetail',
    // 服务 获取适用配件
    'GetApplicableAccessoryProducts': WEB_PATH + '/api/Product/GetApplicableAccessoryProducts',
    // 购物车 获取购物车
    'GetShoppingCart': WEB_PATH + '/api/ShoppingCart/GetShoppingCart',
    // 购物车 添加购物车
    'AddServiceProductToCart': WEB_PATH + '/api/ShoppingCart/AddServiceProductToCart',
    // 购物车 移除服务
    'RemoveServiceProductCartItems': WEB_PATH + '/api/ShoppingCart/RemoveServiceProductCartItems',
    // 购物车 更新购物车服务
    'UpdateServiceProductCartItem': WEB_PATH + '/api/ShoppingCart/UpdateServiceProductCartItem',
    // 购物车 更新购物车服务下的配件
    'UpdateAccessoryProductCartItems': WEB_PATH + '/api/ShoppingCart/UpdateAccessoryProductCartItems',
    // 购物车 拆单（确认订单）
    'BuildPreOrder': WEB_PATH + '/api/Checkout/BuildPreOrder',
    // 购物车 预约时间
    'GetDispatchInfo': WEB_PATH + '/api/Checkout/GetDispatchInfo',
    // 购物车 编辑购物车配件的数量
    'UpdateAccessoryProductCartItem': WEB_PATH + '/api/ShoppingCart/UpdateAccessoryProductCartItem',
    // 购物车 获取可预约日期
    'GetDispatchDayInfo': WEB_PATH + '/api/Checkout/GetDispatchDayInfo',
    // 购物车 获取预约时间
    'GetDispatchInfo': WEB_PATH + '/api/Checkout/GetDispatchInfo',
    // 购物车 获取门店预约时间
    'GetStoreDispatchInfo': WEB_PATH + '/api/Checkout/GetStoreDispatchInfo',
    // 购物车 批量下单
    'AddServiceProductsToCart': WEB_PATH + '/api/ShoppingCart/AddServiceProductsToCart',
    // 购物车 下单
    'PlaceOrder': WEB_PATH + '/api/Checkout/PlaceOrder',
    // 购物车 选择优惠券  更新数据 尚门
    'UpdateDoorToDoorPreOrder': WEB_PATH + '/api/Checkout/UpdateDoorToDoorPreOrder',
    // 购物车 选择优惠券  更新数据 门店
    'UpdateStorePreOrder': WEB_PATH + '/api/Checkout/UpdateStorePreOrder',
    // 定位 检索地区是否已存在 并返回ID
    'CheckRegion': WEB_PATH + '/api/SystemInfo/CheckRegion',
    // 定位 检查区域是否已开通
    'CheckStoreServiceRegion': WEB_PATH + '/api/SystemInfo/CheckStoreServiceRegion',
    // 充值 获取充值优惠列表
    'GetRechargeTemps': WEB_PATH + '/api/CustomerInfo/GetRechargeTemps',
    // 充值
    'Recharge': WEB_PATH + '/api/CustomerInfo/Recharge',
    // 订单列表
    'GetMyOrders': WEB_PATH + '/api/Order/GetMyOrders',
    // 订单详情
    'GetOrderDetail': WEB_PATH + '/api/Order/GetOrderDetail',
    // 取消订单
    'CancelOrder': WEB_PATH + '/api/Order/CancelOrder',
    // 订单支付
    'PayOrder': WEB_PATH + '/api/Order/PayOrder',
    // 支付页面的订单数据
    'PrePayInfo': WEB_PATH + '/api/Order/PrePayInfo',
    // 余额明细
    'BalanceRecords': WEB_PATH + '/api/CustomerInfo/BalanceRecords',
    // 获取车系的图片
    'GetCarPicture': WEB_PATH + '/api/Car/GetCarPicture',
    // 优惠券使用说明
    'CouponInstructions': WEB_PATH + '/api/SystemInfo/CouponInstructions',
    // 获取个人二维码
    'GetSharePic': WEB_PATH + '/api/CustomerInfo/GetSharePic',
    // 获取被推荐人列表
    'GetInvited': WEB_PATH + '/api/CustomerInfo/GetInvited',
    // 支付尾款
    'FinalPayOrder': WEB_PATH + '/api/Order/FinalPayOrder',
    // 线下支付
    'OfflinePayOrder': WEB_PATH + '/api/Order/OfflinePayOrder',
    // 服务协议
    'ConditionsOfUse': WEB_PATH + '/api/SystemInfo/ConditionsOfUse',
    // 获取服务评价
    'GetServiceProductReviews': WEB_PATH + '/api/Review/GetServiceProductReviews',
    // 提交评价
    'SubmitReview': WEB_PATH + '/api/Review/SubmitReview',
    // 车检报告
    'GetReports': WEB_PATH + '/api/Order/GetReports',
    // 获取微信公众号支付的跳转地址
    'GetRedirectUrl': WEB_PATH + '/api/WxPay/GetRedirectUrl',
    // 获取微信jssdk配置参数
    'GetWxPayConfig': WEB_PATH + '/api/WxPay/GetWxPayConfig',
    // 根据省市区查询区域id
    'QueryRegion': WEB_PATH + '/api/SystemInfo/QueryRegion',
    // 添加到临时购物车
    'AddTempServiceProductToCart': WEB_PATH + '/api/ShoppingCart/AddTempServiceProductToCart',
    // 获取临时购物车数据
    'GetTempShoppingCart': WEB_PATH + '/api/ShoppingCart/GetTempShoppingCart',
    // 获取违章URL
    'GetInquiry': WEB_PATH + '/api/systemInfo/GetInquiry',
    // 获取违章URL2 根据城市code
    'GetOffender': WEB_PATH + '/api/Others/GetOffender',
    // 获取客服电话
    'GetTelephone': WEB_PATH + '/api/SystemInfo/GetTelephone'
}
export default {
    port
}