##### 小程序格式化代码

wxml 和 wxss 右键格式化代码 mac 下 shift+option+f

##### 自动创建页面代码

app.json 里面定义好文件路径后，在小程序开发工具中点编译，自动生成 js json wxml wxss 4 个文件


##### 遇到的问题
1、不支持async 出现regeneratorRuntime is not defined错误
2、自定义组件不能引入全局样式,需单独编写
3､scroll-view 横向滑动不行
解决方案:
.scroll-view_H{
height: 50%;
white-space: nowrap;
}
.scroll-view-item_H {
display: inline-block;
width: 30%;
height:100%;
}