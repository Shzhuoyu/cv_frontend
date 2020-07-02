export default {
  /**
  * 测试
  * */
  baseURL: 'http://192.144.229.49:8000/api/',
  qianduanURL: 'http://59.64.3.20:8088',
  uploadURL: 'http://192.144.229.49:8000/api/',
  imageURL:'http://127.0.0.1:8000/api/base/getPhoto/',


  method: 'post',
  /**
   * 首页
   */
  food:{url:'food'},
  electronic:{url:'electronic'},
  life:{url:'life'},
  cloth:{url:'cloth'},

  /**
   * 基本
   */
  login:{url:'login'},

  /**
   * 人员管理
   */
  oldPersonList:{url:'person/oldManList'},
  oldPersonDetail:{url:'person/oldManDetail'},
  employeeList:{url:'person/employeeList'},
  employeeDetail:{url:'person/employeeDetail'},

  volunteerList:{url:'person/volunteerList'},
  volunteerDetail:{url:'person/volunteerDetail'},

  /**
   * 实时事件
   */
  eventList:{url:'event/list'},

  /**
   * 统计报表
   */
  peopleCount:{url:'/statistics/all'},

}
