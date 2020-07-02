export default {
  /**
  * 测试
  * */
  baseURL: 'http://192.144.229.49:8000/api/',
  // baseURL: 'http://127.0.0.1:8000/api/',
  qianduanURL: 'http://59.64.3.20:8088',
  uploadURL: 'http://192.144.229.49:8000/api/',
  imageURL:'http://127.0.0.1:8000/api/base/getPhoto/',


  method: 'post',

  /**
   * 基本
   */
  login:{url:'login'},
   signUp:{url:'account'},

  /**
   * 人员管理
   */
  oldPersonList:{url:'person/oldManList'},
  oldPersonDetail:{url:'person/oldManDetail'},
  employeeList:{url:'person/employeeList'},
  employeeDetail:{url:'person/employeeDetail'},

  volunteerList:{url:'person/volunteerList'},
  volunteerDetail:{url:'person/volunteerDetail'},
  eventList:{url:'event/list'},




}
