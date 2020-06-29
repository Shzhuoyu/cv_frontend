export default {
  /**
  * 测试
  * */
  baseURL: 'http://127.0.0.1:8000/api/',
  qianduanURL: 'http://59.64.3.20:8088',
  uploadURL: 'http://192.144.229.49:8000/api/',
  imageURL:'http://127.0.0.1:8000/api/img/',


  method: 'post',
  /**
   * 首页
   */
  food:{url:'food'},
  electronic:{url:'electronic'},
  life:{url:'life'},
  cloth:{url:'cloth'},

  /**
   * 登入
   */
  login:{url:'login'},
  usersignup:{url:'usersignup'},
  salersignup:{url:'salersignup'},
  personinf:{url:'personinf'},
  userupdate:{url:'userupdate'},
  salerupdate:{url:'salerupdate'},

  chats:{url:'chats'},
  test:{url:'check'},
  queryPro:{url:'query'},
  finePoint: {url: 'map/finepoint'},
  abPoint: {url:'map/unusualpoint'},

  allProduct: {url: ' allProduct'},

  /**
   * 机位信息
   *
   */
  cameraList:{url:'cameras'},
  cameraDetail:{url:'camera/detail'},


  /**
   * 图片
   */
  foreignList:{url:'images'},

  /**
   * 商家
   */
  salChat:{url:'salChat'},
  storeProduct:{url:'storeProduct'},
  insertProduct:{url:'insertProduct'},
  deleteProduct:{url:'deleteProduct'},
  updateProduct:{url:'updateProduct'},
  unshippedOrder:{url:'unshippedOrder'},
  shippedOrder:{url:'shippedOrder'},
  servedOrder:{url:'servedOrder'},
  detailOrder:{url:'detailOrder'},
  evaOrder:{url:'evaOrder'},
  suniProduct:{url:'suniProduct'},//查看单个产品

  /**
   * 用户
   */
  viewHistory:{url:'viewhistory'},
  cunshippedOrder:{url:'cunshippedOrder'},
  cshippedOrder:{url:'cshippedOrder'},
  historyOrder:{url:'historyOrder'},
  buyFromCar:{url:'buyFromCar'},
  delFromCar:{url:'delFromCar'},
  store:{url:'myStore'},
  uniproduct:{url:'uniproduct'},
  insertShoppingCar:{url:'insertShoppingCar'},
  directBuy:{url:'directBuy'},
  evalution:{url:'evalution'},

  viewCar:{url:'viewCar'},

  /**
   * 聊天记录
   */
  cusrecentChat:{url:'CusrecentChat'},
  chatList:{url:'ChatList'},
  cusChat:{url:'cusChat'},

}
