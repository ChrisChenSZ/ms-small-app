/* eslint-disable */
import axios from './require'
import qs from 'qs'
// import mockjs from 'mockjs'

const localMock = false
const mockIt = (data) => {
  let duplicateArray = []
  if (data.length) {
    for (let i = 0; i < Math.floor(Math.random() * 45); i++) {
      duplicateArray.push(data)
    }
  }
  // return Promise.resolve({
  //   data: mockjs.mock(data.length ? duplicateArray : data)
  // })
}
/**
 * @summary st-front
 * @description 社团系统
 * @version 1.0.0
 * @link http://dev.quliansg.com:18765/api/swagger-ui.html
 */
/** group api by tags */
export default {
  clubMessage: { //社团动态
    list: (query) => { // GET /api/clubMessages 社团动态列表《完》/获取社团动态列表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "action": "@string", //操作动作,
          "clubName": "@string", //社团名称,
          "content|10-45": [{
            "clubMessageContentType|1": ["DEFAULT", "NOTICE", "MEETING", "ACTIVITY", "IMAGE_COLLECTION", "VIDEO", "FILE", "USER", "CLUB"], //消息类型 DEFAULT(缺省) NOTICE(公告) MEETING(会议) ACTIVITY(活动) IMAGE_COLLECTION(相册) VIDEO(视频) FILE(文档) USER(用户),
            "id|+1": "@string", //操作Id,
            "text": "@string", //文本内容
          }], //内容,
          "createTime": "@integer(1483200000000,1527782400000)", //创建时间,
          "exitClub": false, //用户是否退出社团，false未退出，true已退出,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //用户信息
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubMessages?` + qs.stringify(query))
    },
  },
  init: { //初始化
    init: (body) => { // POST /api/init 设备初始化/设备初始化，初始化数据
      let _body = {
        "appOwnership": "@string",
        "deviceName": "@string",
        "deviceYearClass": "@integer(1,100)",
        "expoVersion": "@string",
        "installationId": "@string",
        "sessionId": "@string",
        "token": "@string",
        "isDevice": true,
        "statusBarHeight": "@integer(1,100)",
        "manifest": {
          "name": "@string", //应用名称,
          "orientation": "@string", //方位,
          "sdkVersion": "@string", //react native sdk版本,
          "version": "@string", //应用版本
        },
        "platform": {
          "ios": {
            "buildNumber": "@string",
            "model": "@string",
            "platform": "@string",
            "systemVersion": "@string",
            "userInterfaceIdiom": "@string"
          },
          "android": {
            "versionCode": "@string"
          }
        }
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/init`, body)
    },
  },
  articleComment: { //话题评论
    list: (query) => { // GET /api/articleComments 评论列表/
      let _query = {
        "articleId": "@integer(1,100)", //话题id
        "sort": ["ASC", "DESC"], //排序 ASC:顺序 DESC:倒序
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "content": "@string", //评论内容,
          "createTime": "@integer(1483200000000,1527782400000)", //评论时间,
          "id|+1": 1, //id,
          "like": false, //当前登陆的用户是否有点赞 true:有点赞，false:未点赞,
          "likeCount": "@integer(1,100)", //点赞数,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //用户信息
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/articleComments?` + qs.stringify(query))
    },
    create: (body) => { // POST /api/articleComments 对话题发表评论/
      let _body = {
        "articleId": "@integer(1,100)", //话题id,
        "content": "@string", //评论内容
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/articleComments`, body)
    },
    like: (id) => { // PATCH /api/articleComments/{id}/like 话题评论点赞，重复点赞则取消/对话题评论进行点赞，重复点赞则取消
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/articleComments/${id}/like`)
    },
  },
  basic_error_controller: { //Basic Error Controller
    errorHtml: () => { // GET /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.get(`/api/error`)
    },
    errorHtml1: () => { // HEAD /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.head(`/api/error`)
    },
    errorHtml2: () => { // POST /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.post(`/api/error`)
    },
    errorHtml3: () => { // PUT /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.put(`/api/error`)
    },
    errorHtml4: () => { // DELETE /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.delete(`/api/error`)
    },
    errorHtmlUsingOPTIONS: () => { // OPTIONS /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.options(`/api/error`)
    },
    errorHtml5: () => { // PATCH /api/error errorHtml/
      let _return = {
        "empty": true,
        "model": {/* unresolved */},
        "modelMap": {/* unresolved */},
        "reference": true,
        "status|1": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "451", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"],
        "view": {
          "contentType": "@string"
        },
        "viewName": "@string"
      }
      return localMock ? mockIt(_return) : axios.patch(`/api/error`)
    },
  },
  clubUser: { //社团成员
    listClubUsers: (query) => { // GET /api/clubUsers 本届社团成员《完》/获取本届社团成员
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "account": "@string", //账号/手机号码,
          "avatar": "@string", //头像,
          "enrollmentYear": "@integer(1,100)", //入学年份,
          "nickName": "@string", //成员昵称,
          "realName": "@string", //真实姓名,
          "role|1": ["OW", "MANAGER", "MEMBER"], //职位、角色,
          "schoolName": "@string", //学校名称,
          "userId": "@string", //用户id
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubUsers?` + qs.stringify(query))
    },
    listApplication: (query) => { // GET /api/clubUsers/application 获取入会申请表《完》/获取入会申请表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "account": "@string", //账号/手机号码,
          "approvalStatus|1": ["APPROVALING", "AGREEN", "OVERDRUE"], //审批状态,
          "avatar": "@string", //头像,
          "enrollmentYear": "@integer(1,100)", //入学年份,
          "id|+1": 1, //入社申请id,
          "nickName": "@string", //成员昵称,
          "realName": "@string", //真实姓名,
          "schoolName": "@string", //学校名称,
          "userId": "@string", //用户id
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubUsers/application?` + qs.stringify(query))
    },
    applyToJoinClub: (query) => { // POST /api/clubUsers/application 申请加入社团《完》/申请加入社团
      let _query = {
        "clubId": "@integer(1,100)", //社团id
      }
      let _return = {
        "code": "@integer(1,100)", //错误代码:0成功，其他失败,
        "message": "@string", //信息提示
      }
      return localMock ? mockIt(_return) : axios.post(`/api/clubUsers/application?` + qs.stringify(query))
    },
    passApplication: (id) => { // PATCH /api/clubUsers/application/{id}/pass 通过用户入社申请《完》/通过用户入社申请
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/clubUsers/application/${id}/pass`)
    },
    expelClubUser: (body) => { // DELETE /api/clubUsers/expel 把用户逐出社团《完》/把用户逐出社团
      let _body = ["@string"]
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/clubUsers/expel`, {
        data: body
      })
    },
    listHistoryClubUsers: (query) => { // GET /api/clubUsers/history 往届成员《完》/获取往届成员
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "account": "@string", //账号/手机号码,
          "avatar": "@string", //头像,
          "enrollmentYear": "@integer(1,100)", //入学年份,
          "nickName": "@string", //成员昵称,
          "realName": "@string", //真实姓名,
          "role|1": ["OW", "MANAGER", "MEMBER"], //职位、角色,
          "schoolName": "@string", //学校名称,
          "userId": "@string", //用户id
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubUsers/history?` + qs.stringify(query))
    },
    searchUserForInvitation: (query) => { // GET /api/clubUsers/invitation 搜索用户用以邀请用户加入社团《完》/搜索用户用以邀请用户加入社团
      let _query = {
        "condition": "@string", //用户昵称模糊查询，账号全匹配
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "account": "@string", //账号/手机号码,
          "avatar": "@string", //头像,
          "enrollmentYear": "@integer(1,100)", //入学年份,
          "nickName": "@string", //成员昵称,
          "realName": "@string", //真实姓名,
          "role|1": ["OW", "MANAGER", "MEMBER"], //职位、角色,
          "schoolName": "@string", //学校名称,
          "status|1": ["UNINVITED", "ALREADYINVITED", "ALREADYJOINED"], //状态,
          "userId": "@string", //用户id
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubUsers/invitation?` + qs.stringify(query))
    },
    inviteToJoinClub: (query) => { // POST /api/clubUsers/invitation 邀请用户加入社团《完》/邀请用户加入社团
      let _query = {
        "userId": "@string", //用户id
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/clubUsers/invitation?` + qs.stringify(query))
    },
    acceptInvite: (id) => { // PATCH /api/clubUsers/invitation/{id}/accept 用户接受邀请《完》/用户接受邀请
      let _return = "@integer(1,100)"
      return localMock ? mockIt(_return) : axios.patch(`/api/clubUsers/invitation/${id}/accept`)
    },
    setClubManager: (body) => { // PATCH /api/clubUsers/manager 设置管理员《完》/设置管理员
      let _body = ["@string"]
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/clubUsers/manager`, body)
    },
    notReadMessage: () => { // GET /api/clubUsers/notReadMessage 获取社团成员消息未读数量《完》/获取社团成员消息未读数量
      let _return = {
        "activity": "@integer(1,100)", //社团活动数量,
        "clubMessage": "@integer(1,100)", //社团动态数量,
        "clubUserApplication": "@integer(1,100)", //入会审批数量,
        "clubUserCount": "@integer(1,100)", //社团成员数量,
        "imageCollection": "@integer(1,100)", //社团相册数量,
        "notice": "@integer(1,100)", //社团公告数量
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubUsers/notReadMessage`)
    },
    transferCurrentHistory: (body) => { // PATCH /api/clubUsers/transformation 本届与往届互转《完》/本届与往届互转
      let _body = {
        "action|1": ["CURRENT_TO_HISTORY", "HISTORY_TO_CURRENT"], //转换动作 CURRENT_TO_HISTORY(本届转到往届) HISTORY_TO_CURRENT(往届转到本届),
        "userIds|10-45": ["@string"], //用户id数组 如：["a","b","c"]
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/clubUsers/transformation`, body)
    },
    withdrawClub: () => { // DELETE /api/clubUsers/withdraw 退出社团《完》/退出社团
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/clubUsers/withdraw`)
    },
  },
  user: { //用户
    listUserArticleComment: (query) => { // GET /api/users/articleComments 用户详情-评论列表《完》/用户详情-评论列表
      let _query = {
        "userId": "@string", //用户id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "articleId": "@integer(1,100)", //话题id,
          "articleTitle": "@string", //话题标题,
          "articleType": "@string", //话题类型,
          "content": "@string", //评论内容,
          "createTime": "@integer(1483200000000,1527782400000)", //评论时间,
          "id|+1": 1, //评论id,
          "like": false, //是否有点赞 true:有点赞 false:未点赞,
          "likeCount": "@integer(1,100)", //点赞数量
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/users/articleComments?` + qs.stringify(query))
    },
    listUserArticle: (query) => { // GET /api/users/articles 用户详情-话题列表《完》/用户详情-话题列表
      let _query = {
        "userId": "@string", //用户id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "commentCount": "@integer(1,100)", //评论数量,
          "content": "@string", //话题内容（话题的简短内容）,
          "id|+1": 1, //id,
          "imgUrls|10-45": ["@string"], //图片列表,
          "likeCount": "@integer(1,100)", //点赞数量,
          "title": "@string", //标题,
          "type": "@string", //类型,
          "updateTime": "@integer(1483200000000,1527782400000)", //更新时间
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/users/articles?` + qs.stringify(query))
    },
    checkUserSchool: () => { // GET /api/users/checkSchoolInfo 检查用户学校信息是否完整《完》/检查用户学校信息是否完整
      let _return = {
        "id|+1": 1, //id,
        "name": "@string", //学校名称
      }
      return localMock ? mockIt(_return) : axios.get(`/api/users/checkSchoolInfo`)
    },
    searchUser: (query) => { // GET /api/users/search 模糊查询用户昵称《完》/根据昵称模糊查询
      let _query = {
        "nickName": "@string", //昵称
      }
      let _return = ["@string"]
      return localMock ? mockIt(_return) : axios.get(`/api/users/search?` + qs.stringify(query))
    },
    get: (id) => { // GET /api/users/{id} 用户详情《完》/通过用户id获取用户详情
      let _return = {
        "articleCount": "@integer(1,100)", //话题数量,
        "avatar": "@string", //头像,
        "clubs|10-45": [{
          "name": "@string", //社团名称,
          "type|1": ["CURRENT", "PREVIOUS"], //CURRENT(本届) PREVIOUS(往届)
        }], //用户社团信息列表,
        "commentCount": "@integer(1,100)", //评论数量,
        "createTime": "@integer(1483200000000,1527782400000)", //创建时间/注册时间,
        "id|+1": "@string", //id,
        "nickName": "@string", //成员昵称,
        "realName": "@string", //真实姓名,
        "school": {
          "enrollmentYear": "@integer(1,100)", //入学年份,
          "name": "@string", //学校名称
        }, //用户的学校信息
      }
      return localMock ? mockIt(_return) : axios.get(`/api/users/${id}`)
    },
  },
  userShield: { //屏蔽
    list: (query) => { // GET /api/userShields 屏蔽列表/获取屏蔽列表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/userShields?` + qs.stringify(query))
    },
    create: (body) => { // POST /api/userShields 添加屏蔽/添加屏蔽
      let _body = {
        "userId": "@string", //需要屏蔽的用户id
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/userShields`, body)
    },
    delete: (body) => { // DELETE /api/userShields/{userId} 移除屏蔽/移除屏蔽
      let _body = ["@string"]
      return localMock ? mockIt(_body) : axios.delete(`/api/userShields`, {
        data: body
      })
    },
  },
  sms: { //短信
    aliSms: (tel, smsType) => { // POST /api/sms/{smsType}/{tel} 发送短信验证码/sendSms
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/sms/${smsType}/${tel}`)
    },
  },
  club: { //社团
    list: (query) => { // GET /api/clubs 获取社团列表《完》/
      let _query = {
        "name": "@string", //社团名称,模糊查询
        "schoolId": "@integer(1,100)", //学校id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "coverImage": "@string", //社团封面图,
          "id|+1": 1, //id,
          "name": "@string", //社团名称,
          "personCount": "@integer(1,100)", //社团人数,
          "sign": "@string", //社团个性化签名,
          "type": "@string", //社团类型
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubs?` + qs.stringify(query))
    },
    create: (body) => { // POST /api/clubs 创建社团《完》/
      let _body = {
        "coverImage": "@string", //社团封面,
        "materials|10-45": ["@string"], //社团申请材料,
        "name": "@string", //社团名称,
        "schoolId": "@integer(1,100)", //学校id,
        "typeId": "@integer(1,100)", //社团类型
      }
      let _return = {
        "code": "@integer(1,100)", //错误代码:0成功，其他失败,
        "message": "@string", //信息提示
      }
      return localMock ? mockIt(_return) : axios.post(`/api/clubs`, body)
    },
    searchClubName: (query) => { // GET /api/clubs/names 模糊查询社团名字/最多5条数据
      let _query = {
        "name": "@string", //社团名称,模糊查询
      }
      let _return = ["@string"]
      return localMock ? mockIt(_return) : axios.get(`/api/clubs/names?` + qs.stringify(query))
    },
    listClubType: () => { // GET /api/clubs/types 社团类型《完》/
      let _return = [{
        "id|+1": 1, //社团类型id,
        "name": "@string", //社团类型名称
      }]
      return localMock ? mockIt(_return) : axios.get(`/api/clubs/types`)
    },
    get: (id) => { // GET /api/clubs/{id} 社团详情《完》/
      let _return = {
        "createTime": "@integer(1483200000000,1527782400000)", //创建时间,
        "id|+1": 1, //id,
        "imageCollection": {
          "cover": "@string", //封面图,
          "createTime": "@integer(1483200000000,1527782400000)", //创建时间,
          "fixed": false, //是否时默认相册,
          "id|+1": 1, //id,
          "imageCount": "@integer(1,100)", //图片数量,
          "name": "@string", //相册名
        }, //社团风采(相册),
        "introduction": "@string", //社团介绍,
        "joined": false, //是否已加入社团,
        "name": "@string", //社团名称,
        "personCount": "@integer(1,100)", //社团人数,
        "proprieter": "@string", //社长,
        "schoolName": "@string", //学校名称,
        "sign": "@string", //社团个性化签名,
        "type": "@string", //社团类型
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubs/${id}`)
    },
    update: (id, body) => { // PATCH /api/clubs/{id} 修改社团属性《完》/
      let _body = {
        "clubJoinLimit|1": ["NO", "SCHOOL"], //加入限制,
        "coverImage": "@string", //社团封面,
        "introduction": "@string", //社团简介,
        "sign": "@string", //社团签名
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/clubs/${id}`, body)
    },
    getClubProperty: (id) => { // GET /api/clubs/{id}/property 获取社团属性《完》/
      let _return = {
        "clubJoinLimit|1": ["NO", "SCHOOL"], //加入限制,
        "coverImage": "@string", //社团封面,
        "introduction": "@string", //社团简介,
        "sign": "@string", //社团签名
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubs/${id}/property`)
    },
  },
  school: { //学校
    list: (query) => { // GET /api/schools 获取学校列表《完》/
      let _query = {
        "areaId": "@integer(1,100)", //省份id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "id|+1": 1, //id,
          "name": "@string", //学校名称
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/schools?` + qs.stringify(query))
    },
  },
  activity: { //活动
    list: (query) => { // GET /api/activities 活动列表/
      let _query = {
        "clubId": "@integer(1,100)", //社团id（获取社团下的活动用到）
        "name": "@string", //活动名称
        "areaId": "@integer(1,100)", //地区 (全国则不需要传)
        "typeId": "@integer(1,100)", //活动类型（社团类型）
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "address": "@string", //活动地点,
          "coverImage": "@string", //封面图,
          "endTime": "@integer(1483200000000,1527782400000)", //活动结束时间,
          "id|+1": 1, //id,
          "joinLimit|1": ["NO", "CLUB", "SCHOOL"], //活动报名限制,
          "joinNumber": "@integer(1,100)", //报名参加人数,
          "name": "@string", //活动标题,
          "startTime": "@integer(1483200000000,1527782400000)", //活动开始时间
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/activities?` + qs.stringify(query))
    },
    create: (body) => { // POST /api/activities 新增活动/
      let _body = {
        "address": "@string", //活动地点,
        "coverImage": "@string", //封面图,
        "endTime": "@integer(1483200000000,1527782400000)", //结束时间（格式：时间戳）,
        "introduction": "@string", //介绍,
        "joinLimit|1": ["NO", "CLUB", "SCHOOL"], //报名限制,
        "name": "@string", //活动名称,
        "startTime": "@integer(1483200000000,1527782400000)", //开始时间（格式：时间戳）,
        "type|1": ["GENERAL", "ELECTION"], //活动类型
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/activities`, body)
    },
    listActivityConfig: () => { // GET /api/activities/config 活动配置项(新增或编辑活动的时候需要)/
      let _return = {
        "activityLimits|10-45": [{
          "key|1": ["NO", "CLUB", "SCHOOL"], //枚举值,
          "value": "@string", //类型名词
        }], //活动限制,
        "activityTypes|10-45": [{
          "key|1": ["GENERAL", "ELECTION"], //枚举值,
          "value": "@string", //类型名词
        }], //活动类型
      }
      return localMock ? mockIt(_return) : axios.get(`/api/activities/config`)
    },
    searchActivityName: (query) => { // GET /api/activities/names 模糊查询活动名称列表/
      let _query = {
        "name": "@string", //活动名称
      }
      let _return = ["@string"]
      return localMock ? mockIt(_return) : axios.get(`/api/activities/names?` + qs.stringify(query))
    },
    get: (id) => { // GET /api/activities/{id} 活动详情/
      let _return = {
        "address": "@string", //活动地点,
        "clubName": "@string", //社团名称,
        "coverImage": "@string", //封面图,
        "endTime": "@integer(1483200000000,1527782400000)", //活动结束时间,
        "id|+1": 1, //id,
        "introduction": "@string", //介绍,
        "join": false, //是否已报名,
        "joinLimit|1": ["NO", "CLUB", "SCHOOL"], //报名限制,
        "name": "@string", //活动标题,
        "official": false, //是否官方 true:官方 false:非官方,
        "schoolName": "@string", //学校名称,
        "startTime": "@integer(1483200000000,1527782400000)", //活动开始时间,
        "type|1": ["GENERAL", "ELECTION"], //活动类型
      }
      return localMock ? mockIt(_return) : axios.get(`/api/activities/${id}`)
    },
    update: (id, body) => { // PUT /api/activities/{id} 编辑活动/
      let _body = {
        "address": "@string", //活动地点,
        "coverImage": "@string", //封面图,
        "endTime": "@integer(1483200000000,1527782400000)", //结束时间（格式：时间戳）,
        "introduction": "@string", //介绍,
        "joinLimit|1": ["NO", "CLUB", "SCHOOL"], //报名限制,
        "name": "@string", //活动名称,
        "startTime": "@integer(1483200000000,1527782400000)", //开始时间（格式：时间戳）,
        "type|1": ["GENERAL", "ELECTION"], //活动类型
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/activities/${id}`, body)
    },
    update1: (id) => { // DELETE /api/activities/{id} 删除活动/
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/activities/${id}`)
    },
  },
  auth: { //授权（登陆、注册、注销、重置密码）
    login: (body) => { // POST /api/auth/login 登陆/登陆（访问的所有接口都需要在header上带上 Authorization:token值）
      let _body = {
        "account": "@string", //账号,
        "password": "@string", //密码
      }
      let _return = {
        "token": "@string", //token,
        "user": {
          "account": "@string", //用户账号,
          "avatar": "@string", //用户头像,
          "clubs|10-45": [{
            "current": false, //是否用户当前切换的社团 true:当前社团,
            "id|+1": 1, //社团id,
            "name": "@string", //社团名称,
            "school": "@string", //社团所在学校,
            "type|1": ["CURRENT", "PREVIOUS"], //CURRENT(本届) PREVIOUS(往届)
          }], //用户参与的社团列表,
          "id|+1": "@string", //用户id,
          "nickName": "@string", //昵称,
          "password": "@string", //密码,
          "realName": "@string", //真实姓名,
          "sex|1": ["UNKNOWN", "MALE", "FEMALE"], //性别 UNKNOWN(未知) MALE(男) FEMALE(女),
          "tel": "@string", //手机号码
        }, //用户信息
      }
      return localMock ? mockIt(_return) : axios.post(`/api/auth/login`, body)
    },
    logout: () => { // POST /api/auth/logout 注销/注销
      let _return = "@string"
      return localMock ? mockIt(_return) : axios.post(`/api/auth/logout`)
    },
    resetPassword: (body) => { // PUT /api/auth/password 重置密码/重置密码
      let _body = {
        "code": "@string", //验证码,
        "password": "@string", //密码,
        "tel": "@string", //手机号码
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/auth/password`, body)
    },
    register: (body) => { // POST /api/auth/register 注册/注册
      let _body = {
        "code": "@string", //验证码,
        "password": "@string", //密码,
        "tel": "@string", //手机号码
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/auth/register`, body)
    },
  },
  ad: { //广告
    list: () => { // GET /api/ads 广告图/获取广告图列表
      let _return = {
        "adImgActivityMain": "@string", //活动主页广告图,
        "adImgClubBuiltIn": "@string", //社团内置广告图,
        "adImgInitFullScreen": "@string", //初始全屏广告图
      }
      return localMock ? mockIt(_return) : axios.get(`/api/ads`)
    },
  },
  activityUser: { //活动报名用户
    list: (query) => { // GET /api/activityUsers 活动报名人员列表/
      let _query = {
        "activityId": "@integer(1,100)", //活动id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "joinId": "@integer(1,100)", //报名id,
          "joinTime": "@integer(1483200000000,1527782400000)", //报名时间,
          "slogan": "@string", //竞选口号,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //报名用户信息,
          "vote": false, //是否已投票,
          "voteCount": "@integer(1,100)", //投票数,
          "worksLink": "@string", //作品链接
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/activityUsers?` + qs.stringify(query))
    },
    joinActivity: (query, body) => { // POST /api/activityUsers 活动报名/
      let _query = {
        "activityId": "@integer(1,100)", //活动id
      }
      let _body = {
        "name": "@string", //姓名,
        "slogan": "@string", //竞选口号 (选举报名时需要),
        "tel": "@string", //电话号码,
        "worksLink": "@string", //作品链接 (选举报名时需要)
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/activityUsers?` + qs.stringify(query), body)
    },
    voteJoinMember: (joinId) => { // POST /api/activityUsers/{joinId}/vote 对活动下的报名成员投票/
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/activityUsers/${joinId}/vote`)
    },
  },
  clubMeeting: { //会议
    list: (query) => { // GET /api/clubMeetings 会议列表/
      let _query = {
        "clubId": "@integer(1,100)", //社团id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "address": "@string", //地点,
          "createTime": "@integer(1483200000000,1527782400000)", //创建时间,
          "emcee": "@string", //主持人,
          "id|+1": 1, //id,
          "name": "@string", //主题,
          "startTime": "@string", //时间,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //发布人信息
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubMeetings?` + qs.stringify(query))
    },
    add: (body) => { // POST /api/clubMeetings 新增会议/
      let _body = {
        "address": "@string", //地点,
        "clubId": "@integer(1,100)", //社团,
        "emcee": "@string", //主持人,
        "fileVOS|10-45": [{
          "extension": "@string", //文件扩展名,
          "format|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式：IMAGE_JPG(图片JPG) IMAGE_PNG(图片PNG) VIDEO_MP4(视频MP4) VIDEO_3GP(视频3GP) VIDEO_MOV(视频MOV) FILE_WORD(文档WORD) FILE_EXCEL(文档EXCEL) FILE_PDF(文档PDF),
          "id|+1": 1, //文件Id 【编辑时，必须】,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "url": "@string", //文件链接地址
        }], //附件,
        "name": "@string", //主题,
        "startTime": "@string", //时间,
        "userId|10-45": ["@string"], //参会人员
      }
      let _return = {
        "address": "@string", //地点,
        "emcee": "@string", //主持人,
        "fileVOS|10-45": [{
          "extension": "@string", //扩展名,
          "fileFormat|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式,
          "index": "@integer(1,100)", //序号,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "success": false, //是否成功,
          "url": "@string", //文件链接地址
        }], //附件,
        "id|+1": 1, //id,
        "name": "@string", //主题,
        "startTime": "@string", //时间,
        "users|10-45": [{
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }], //参会人员
      }
      return localMock ? mockIt(_return) : axios.post(`/api/clubMeetings`, body)
    },
    detail: (id) => { // GET /api/clubMeetings/{id} 会议详情/
      let _return = {
        "address": "@string", //地点,
        "emcee": "@string", //主持人,
        "fileVOS|10-45": [{
          "extension": "@string", //扩展名,
          "fileFormat|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式,
          "index": "@integer(1,100)", //序号,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "success": false, //是否成功,
          "url": "@string", //文件链接地址
        }], //附件,
        "id|+1": 1, //id,
        "name": "@string", //主题,
        "startTime": "@string", //时间,
        "users|10-45": [{
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }], //参会人员
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubMeetings/${id}`)
    },
  },
  upload: { //文件处理
    uploadFileOss: (type) => { // POST /api/upload/{type} 文件上传/Oss
      let _return = [{
        "extension": "@string", //扩展名,
        "fileFormat|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式,
        "index": "@integer(1,100)", //序号,
        "name": "@string", //文件名字,
        "size": "@integer(1,100)", //文件大小,
        "success": false, //是否成功,
        "url": "@string", //文件链接地址
      }]
      return localMock ? mockIt(_return) : axios.post(`/api/upload/${type}`)
    },
  },
  feedback: { //意见反馈与客服消息
    create: (body) => { // POST /api/feedback 创建意见反馈(v1.1)《完》/创建意见反馈
      let _body = {
        "content": "@string", //反馈内容
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/feedback`, body)
    },
    get: (id) => { // GET /api/feedback/{id} 意见反馈详情(v1.1)《完》/意见反馈详情
      let _return = {
        "content": "@string", //反馈内容,
        "createTime": "@integer(1483200000000,1527782400000)", //提交时间,
        "id|+1": 1, //id,
        "replyContent": "@string", //回复内容,
        "replyTime": "@integer(1483200000000,1527782400000)", //回复时间,
        "user": {
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }, //用户信息
      }
      return localMock ? mockIt(_return) : axios.get(`/api/feedback/${id}`)
    },
  },
  clubNotice: { //社团公告
    list: (query) => { // GET /api/clubNotices 社团公告列表《完》/获取社团公告列表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "id|+1": 1, //id,
          "title": "@string", //标题,
          "updateTime": "@integer(1483200000000,1527782400000)", //更新时间,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //发表人信息
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubNotices?` + qs.stringify(query))
    },
    create: (body) => { // POST /api/clubNotices 新增社团公告《完》/新增社团公告
      let _body = {
        "content": "@string", //内容,
        "title": "@string", //标题
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/clubNotices`, body)
    },
    get: (id) => { // GET /api/clubNotices/{id} 社团公告详情《完》/获取社团公告详情
      let _return = {
        "content": "@string", //内容,
        "id|+1": 1, //id,
        "title": "@string", //标题,
        "updateTime": "@integer(1483200000000,1527782400000)", //更新时间,
        "user": {
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }, //发表人信息
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubNotices/${id}`)
    },
    update: (id, body) => { // PUT /api/clubNotices/{id} 修改社团公告《完》/修改社团公告
      let _body = {
        "content": "@string", //内容,
        "title": "@string", //标题
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/clubNotices/${id}`, body)
    },
    delete: (id) => { // DELETE /api/clubNotices/{id} 删除社团公告《完》/删除社团公告
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/clubNotices/${id}`)
    },
  },
  area: { //省市
    list: (query) => { // GET /api/areas 获取省市列表《完》/
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "id|+1": 1, //id,
          "name": "@string", //省份/市/区、县
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/areas?` + qs.stringify(query))
    },
  },
  clubFile: { //图片、视频、文件管理
    listClubImageCollection: (query) => { // GET /api/clubFileImageCollections 相册列表《完》/获取相册列表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "cover": "@string", //封面图,
          "createTime": "@integer(1483200000000,1527782400000)", //创建时间,
          "fixed": false, //是否时默认相册,
          "id|+1": 1, //id,
          "imageCount": "@integer(1,100)", //图片数量,
          "name": "@string", //相册名
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubFileImageCollections?` + qs.stringify(query))
    },
    createClubImageCollection: (body) => { // POST /api/clubFileImageCollections 新增相册《完》/新增相册
      let _body = {
        "images|10-45": [{
          "del": false, //true:删除,false：正常,
          "extension": "@string", //文件扩展名,
          "format|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式：IMAGE_JPG(图片JPG) IMAGE_PNG(图片PNG) VIDEO_MP4(视频MP4) VIDEO_3GP(视频3GP) VIDEO_MOV(视频MOV) FILE_WORD(文档WORD) FILE_EXCEL(文档EXCEL) FILE_PDF(文档PDF),
          "id|+1": 1, //社团图片Id 【编辑时用到】,
          "introduction": "@string", //图片介绍,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "url": "@string", //文件链接地址
        }], //图片组,
        "name": "@string", //相册名、相册标题
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/clubFileImageCollections`, body)
    },
    getClubImageCollection: (id) => { // GET /api/clubFileImageCollections/{id} 获取相册详情《完》/获取相册详情包括图片
      let _return = {
        "images|10-45": [{
          "del": false, //true:删除,false：正常,
          "extension": "@string", //文件扩展名,
          "format|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式：IMAGE_JPG(图片JPG) IMAGE_PNG(图片PNG) VIDEO_MP4(视频MP4) VIDEO_3GP(视频3GP) VIDEO_MOV(视频MOV) FILE_WORD(文档WORD) FILE_EXCEL(文档EXCEL) FILE_PDF(文档PDF),
          "id|+1": 1, //社团图片Id 【编辑时用到】,
          "introduction": "@string", //图片介绍,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "url": "@string", //文件链接地址
        }], //图片组,
        "name": "@string", //相册名、相册标题
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubFileImageCollections/${id}`)
    },
    updateClubImageCollection: (id, body) => { // PUT /api/clubFileImageCollections/{id} 编辑相册《完》/编辑相册
      let _body = {
        "images|10-45": [{
          "del": false, //true:删除,false：正常,
          "extension": "@string", //文件扩展名,
          "format|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式：IMAGE_JPG(图片JPG) IMAGE_PNG(图片PNG) VIDEO_MP4(视频MP4) VIDEO_3GP(视频3GP) VIDEO_MOV(视频MOV) FILE_WORD(文档WORD) FILE_EXCEL(文档EXCEL) FILE_PDF(文档PDF),
          "id|+1": 1, //社团图片Id 【编辑时用到】,
          "introduction": "@string", //图片介绍,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "url": "@string", //文件链接地址
        }], //图片组,
        "name": "@string", //相册名、相册标题
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/clubFileImageCollections/${id}`, body)
    },
    deleteClubImageCollection: (id) => { // DELETE /api/clubFileImageCollections/{id} 删除相册《完》/删除相册
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/clubFileImageCollections/${id}`)
    },
    listClubImage: (query) => { // GET /api/clubFileImages 相册下图片列表《完》/相册下图片列表
      let _query = {
        "imageCollectionId": "@integer(1,100)", //相册id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "createTime": "@integer(1483200000000,1527782400000)", //上传时间,
          "creator": "@string", //上传人,
          "id|+1": 1, //id,
          "image": "@string", //图片地址,
          "introduction": "@string", //简介
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubFileImages?` + qs.stringify(query))
    },
    deleteImage: (id) => { // DELETE /api/clubFileImages/{id} 删除图片《完》/删除图片
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/clubFileImages/${id}`)
    },
    updateClubImageIntroduction: (id, body) => { // PATCH /api/clubFileImages/{id}/introduction 编辑图片简介《完》/编辑图片简介
      let _body = {
        "introduction": "@string", //图片简介
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/clubFileImages/${id}/introduction`, body)
    },
    videoList: (query) => { // GET /api/clubFileVideos 视频列表《完》/视频列表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "clubFileId": "@integer(1,100)", //视频文件id,
          "id|+1": 1, //id,
          "introduction": "@string", //介绍,
          "title": "@string", //标题,
          "updateTime": "@integer(1483200000000,1527782400000)", //更新时间,
          "url": "@string", //视频地址,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //上传人
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubFileVideos?` + qs.stringify(query))
    },
    createVideo: (body) => { // POST /api/clubFileVideos 上传视频《完》/上传视频
      let _body = {
        "clubFileDTO": {
          "extension": "@string", //文件扩展名,
          "format|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式：IMAGE_JPG(图片JPG) IMAGE_PNG(图片PNG) VIDEO_MP4(视频MP4) VIDEO_3GP(视频3GP) VIDEO_MOV(视频MOV) FILE_WORD(文档WORD) FILE_EXCEL(文档EXCEL) FILE_PDF(文档PDF),
          "id|+1": 1, //文件Id 【编辑时，必须】,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "url": "@string", //文件链接地址
        }, //文件详情,
        "introduction": "@string", //介绍,
        "title": "@string", //标题
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/clubFileVideos`, body)
    },
    videoDetail: (id) => { // GET /api/clubFileVideos/{id} 视频详情/视频详情
      let _return = {
        "clubFileId": "@integer(1,100)", //视频文件id,
        "id|+1": 1, //id,
        "introduction": "@string", //介绍,
        "title": "@string", //标题,
        "updateTime": "@integer(1483200000000,1527782400000)", //更新时间,
        "url": "@string", //视频地址,
        "user": {
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }, //上传人
      }
      return localMock ? mockIt(_return) : axios.get(`/api/clubFileVideos/${id}`)
    },
    updateVideo: (id, body) => { // PUT /api/clubFileVideos/{id} 编辑视频《完》/编辑视频
      let _body = {
        "clubFileDTO": {
          "extension": "@string", //文件扩展名,
          "format|1": ["IMAGE_JPG", "IMAGE_PNG", "VIDEO_MP4", "VIDEO_3GP", "VIDEO_MOV", "FILE_WORD", "FILE_EXCEL", "FILE_PDF"], //文件格式：IMAGE_JPG(图片JPG) IMAGE_PNG(图片PNG) VIDEO_MP4(视频MP4) VIDEO_3GP(视频3GP) VIDEO_MOV(视频MOV) FILE_WORD(文档WORD) FILE_EXCEL(文档EXCEL) FILE_PDF(文档PDF),
          "id|+1": 1, //文件Id 【编辑时，必须】,
          "name": "@string", //文件名字,
          "size": "@integer(1,100)", //文件大小,
          "url": "@string", //文件链接地址
        }, //文件详情,
        "introduction": "@string", //介绍,
        "title": "@string", //标题
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/clubFileVideos/${id}`, body)
    },
    deleteVideo: (id) => { // DELETE /api/clubFileVideos/{id} 删除视频/删除视频
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/clubFileVideos/${id}`)
    },
  },
  article: { //话题
    list: (query) => { // GET /api/articles 话题列表/
      let _query = {
        "typeId": "@integer(1,100)", //话题类型Id
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "commentCount": "@integer(1,100)", //评论数量,
          "content": "@string", //话题内容（话题的简短内容）,
          "id|+1": 1, //id,
          "imgUrls|10-45": ["@string"], //图片列表,
          "like": false, //是否有点赞 true:有点赞 false:未点赞,
          "likeCount": "@integer(1,100)", //点赞数量,
          "official": false, //是否官方,
          "title": "@string", //标题,
          "top": false, //是否置顶,
          "updateTime": "@integer(1483200000000,1527782400000)", //更新时间,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //发布该话题的用户信息
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/articles?` + qs.stringify(query))
    },
    create: (body) => { // POST /api/articles 发表话题/
      let _body = {
        "content": "@string", //内容,
        "title": "@string", //话题,
        "typeId": "@integer(1,100)", //话题类型Id
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/articles`, body)
    },
    listArticleTypes: () => { // GET /api/articles/types 话题类型列表/获取话题类型列表
      let _return = [{
        "id|+1": 1, //id,
        "name": "@string", //话题分类名称
      }]
      return localMock ? mockIt(_return) : axios.get(`/api/articles/types`)
    },
    get: (id) => { // GET /api/articles/{id} 话题详情/获取话题详情
      let _return = {
        "commentCount": "@integer(1,100)", //评论数量,
        "content": "@string", //话题内容 (包含了所有文本内容),
        "id|+1": 1, //id,
        "like": false, //是否有点赞 true:有点赞 false:未点赞,
        "likeCount": "@integer(1,100)", //点赞数量,
        "official": false, //是否官方,
        "title": "@string", //标题,
        "top": false, //是否置顶,
        "updateTime": "@integer(1483200000000,1527782400000)", //更新时间,
        "user": {
          "avatar": "@string", //用户头像,
          "id|+1": "@string", //id,
          "nickName": "@string", //用户昵称,
          "realName": "@string", //真实姓名
        }, //发布该话题的用户信息
      }
      return localMock ? mockIt(_return) : axios.get(`/api/articles/${id}`)
    },
    delete: (id) => { // DELETE /api/articles/{id} 删除话题/删除话题
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/articles/${id}`)
    },
    like: (id) => { // PATCH /api/articles/{id}/like 话题点赞，重复点赞则为取消点赞/对话题进行点赞，重复点赞则为取消点赞
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/articles/${id}/like`)
    },
  },
  mine: { //我的模块
    listMineArticleMessage: (query) => { // GET /api/mine/articleMessages 获取我的话题动态《完》/获取我的话题动态（通过token）
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "article": {
            "commentCount": "@integer(1,100)", //评论数量,
            "del": false, //是否删除，ture:已被删，false:正常,
            "id|+1": 1, //id,
            "likeCount": "@integer(1,100)", //点赞数量,
            "title": "@string", //标题,
            "type": "@string", //分类、类型
          }, //话题,
          "articleMessageType|1": ["PUBLISH_ARTICLE", "EDIT_ARTICLE", "COMMENT_ARTICLE", "LIKE_ARTICLE", "LIKE_COMMENT"], //话题动态类型,
          "comment": {
            "content": "@string", //评论内容,
            "del": false, //是否删除，ture:已被删，false:正常,
            "id|+1": 1, //id,
            "likeCount": "@integer(1,100)", //点赞数
          }, //评论（类型与评论相关的才需要）,
          "time": "@integer(1483200000000,1527782400000)", //话题发表时间、编辑时间、点赞时间
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/articleMessages?` + qs.stringify(query))
    },
    listMineClubMessage: (query) => { // GET /api/mine/clubMessages 获取我的社团动态《完》/获取我的社团动态（通过token）
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "action": "@string", //操作动作,
          "clubName": "@string", //社团名称,
          "content|10-45": [{
            "clubMessageContentType|1": ["DEFAULT", "NOTICE", "MEETING", "ACTIVITY", "IMAGE_COLLECTION", "VIDEO", "FILE", "USER", "CLUB"], //消息类型 DEFAULT(缺省) NOTICE(公告) MEETING(会议) ACTIVITY(活动) IMAGE_COLLECTION(相册) VIDEO(视频) FILE(文档) USER(用户),
            "id|+1": "@string", //操作Id,
            "text": "@string", //文本内容
          }], //内容,
          "createTime": "@integer(1483200000000,1527782400000)", //创建时间,
          "exitClub": false, //用户是否退出社团，false未退出，true已退出,
          "user": {
            "avatar": "@string", //用户头像,
            "id|+1": "@string", //id,
            "nickName": "@string", //用户昵称,
            "realName": "@string", //真实姓名
          }, //用户信息
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/clubMessages?` + qs.stringify(query))
    },
    listMineClub: (query) => { // GET /api/mine/clubs 获取我的社团《完》/获取我的社团（通过token）
      let _query = {
        "flag": "@integer(1,100)", //类型标识 0:加入的社团 1:创建的社团
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "id|+1": 1, //社团Id,
          "name": "@string", //社团名称,
          "personCount": "@integer(1,100)", //社团人数,
          "schoolName": "@string", //学校名称,
          "status|1": ["LOCKED", "AUDITING", "AUDITING_FAIL", "NORMAL"], //状态,
          "type": "@string", //社团类型
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/clubs?` + qs.stringify(query))
    },
    listMineFeedback: (query) => { // GET /api/mine/feedback 获取我的客户消息/获取我的客户消息（通过token）
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "createTime": "@integer(1483200000000,1527782400000)", //提交时间,
          "id|+1": 1, //id,
          "replyTime": "@integer(1483200000000,1527782400000)", //回复时间
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/feedback?` + qs.stringify(query))
    },
    getMineInfo: () => { // GET /api/mine/info 获取我的信息《完》/获取我的信息（通过token）
      let _return = {
        "account": "@string", //账号,
        "avatar": "@string", //头像,
        "nickName": "@string", //昵称,
        "sex|1": ["UNKNOWN", "MALE", "FEMALE"], //性别
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/info`)
    },
    updateMineInfo: (body) => { // PUT /api/mine/info 编辑我的基础资料《完》/编辑我的基础资料（通过token）
      let _body = {
        "avatar": "@string", //头像,
        "nickName": "@string", //昵称,
        "sex|1": ["UNKNOWN", "MALE", "FEMALE"], //性别
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/mine/info`, body)
    },
    notReadMessage: () => { // GET /api/mine/notReadMessage 获取我的消息未读数量《完》/获取我的消息未读数量
      let _return = {
        "articleMessage": "@integer(1,100)", //话题动态数量,
        "clubMessage": "@integer(1,100)", //社团动态数量,
        "feedbackMessage": "@integer(1,100)", //客服消息数量,
        "systemMessage": "@integer(1,100)", //系统消息数量
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/notReadMessage`)
    },
    modifyPassword: (body) => { // PATCH /api/mine/password 修改密码《完》/修改密码（通过token）
      let _body = {
        "code": "@string", //验证码,
        "password": "@string", //密码
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.patch(`/api/mine/password`, body)
    },
    getMineSchool: () => { // GET /api/mine/school 获取我的学校信息《完》/获取我的学校信息（通过token）
      let _return = {
        "enrollmentYear": "@integer(1,100)", //入学年份,
        "realName": "@string", //真实姓名,
        "school": {
          "id|+1": 1, //id,
          "name": "@string", //学校名称
        }, //学校,
        "tel": "@string", //手机号码
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/school`)
    },
    updateMineSchool: (body) => { // PUT /api/mine/school 编辑我的学校信息《完》/编辑我的学校信息（通过token）
      let _body = {
        "code": "@string", //手机短信验证码,
        "enrollmentYear": "@integer(1,100)", //入学年份,
        "realName": "@string", //真实姓名,
        "schoolId": "@integer(1,100)", //学校Id,
        "tel": "@string", //手机号码
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.put(`/api/mine/school`, body)
    },
    listMineSystemMessage: (query) => { // GET /api/mine/systemMessages 获取我的系统消息《完》/获取我的系统消息（通过token）
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页显示数量
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "clickable": false, //是否可点击,
          "content": "@string", //消息内容,
          "createTime": "@integer(1483200000000,1527782400000)", //发送时间,
          "invitationRecordId": "@integer(1,100)", //邀请记录id,
          "systemMessageType|1": ["PRIVITE", "PRIVITE_INVITATION_ING", "PRIVITE_INVITATION", "ALL"], //PRIVITE(私人系统消息),PRIVITE_INVITATION_ING(还未接受邀请),PRIVITE_INVITATION(已接受邀请),ALL(群发消息)
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/mine/systemMessages?` + qs.stringify(query))
    },
  },
  recycle: { //回收站
    list: (query) => { // GET /api/recycles 回收站列表《完》/回收站列表
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "createTime": "@integer(1483200000000,1527782400000)", //删除时间,
          "id|+1": 1, //id,
          "recycleType|1": ["NOTICE", "IMAGE_COLLECTION", "VIDEO", "ACTIVITY"], //类型，NOTICE:公告,IMAGE_COLLECTION:相册,VIDEO:视频,ACTIVITY:活动,
          "title": "@string", //标题
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/recycles?` + qs.stringify(query))
    },
    empty: () => { // DELETE /api/recycles/empty 清空《完》/清空
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/recycles/empty`)
    },
    delete: (id) => { // DELETE /api/recycles/{id} 恢复内容《完》/恢复内容
      let _return = {}
      return localMock ? mockIt(_return) : axios.delete(`/api/recycles/${id}`)
    },
  },
  userClub: { //用户参与的社团
    listUserClub: (query) => { // GET /api/userClubs 用户参与的社团列表/用户参与的社团列表（通过token查询）
      let _query = {
        "page": "@integer(1,100)", //当前页
        "pageSize": 10, //每页大小
      }
      let _return = {
        "hasNext": false, //是否有下一页,
        "hasPre": false, //是否有上一页,
        "page": "@integer(1,100)", //当前页,
        "pageCount": "@integer(1,100)", //总页数,
        "pageSize": 10, //每页显示数量,
        "rows|10-45": [{
          "current": false, //是否用户当前切换的社团 true:当前社团,
          "id|+1": 1, //社团id,
          "name": "@string", //社团名称,
          "school": "@string", //社团所在学校,
          "type|1": ["CURRENT", "PREVIOUS"], //CURRENT(本届) PREVIOUS(往届)
        }], //数据列表,
        "total": "@integer(1,100)", //总记录数
      }
      return localMock ? mockIt(_return) : axios.get(`/api/userClubs?` + qs.stringify(query))
    },
    initUserClub: () => { // POST /api/userClubs/init 初始化社团/初始化社团(登录时、切换社团时调用)
      let _return = {
        "clubName": "@string", //社团名称,
        "role|1": ["OW", "MANAGER", "MEMBER"], //职位、角色 OW(社长) MANAGER(管理员) MEMBER(普通成员)
      }
      return localMock ? mockIt(_return) : axios.post(`/api/userClubs/init`)
    },
  },
  report: { //举报
    create: (body) => { // POST /api/reports 举报/举报
      let _body = {
        "itemId": "@integer(1,100)", //举报的内容id,
        "type|1": ["ARTICLE", "ARTICLE_COMMENT"], //举报类型 ARTICLE(文章),ARTICLE_COMMENT(文章的评论)
      }
      let _return = {}
      return localMock ? mockIt(_return) : axios.post(`/api/reports`, body)
    },
  },
}
