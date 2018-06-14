// pages/todoList/todoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputtingTask:{
         "title":"",
         "body":"",
         "state":"unfinished"
      },
      todoList:[],
      viewState:"all"
  },

  onTitleInput:function(e){
      let newTask = this.data.inputtingTask
      newTask.title = e.detail.value
      this.setData({
           inputtingTask:newTask
      })
  },
  onBodyInput:function(e){
      let newTask = this.data.inputtingTask
      newTask.body = e.detail.value
      this.setData({
           inputtingTask:newTask
      })
  },

  stateAllOnTap:function(){
     this.setData({
      viewState:"all"
     })
  },
  stateFinishedOnTap:function(){
     this.setData({
      viewState:"finished"
     })
  },
  stateUnfinishedOnTap:function(){
     this.setData({
      viewState:"unfinished"
     })
  },

  changeItemState:function(e){
    let index = e.target.dataset.index
    let newList = this.data.todoList
    newList[index].state = (this.data.todoList[index].state == 'unfinished' ? 'finished' : 'unfinished')
    this.setData({
      todoList:newList
    })
  },

  delTaskItem:function(e){
    let index = e.target.dataset.index
    let newList = this.data.todoList
    newList.splice(index,1)
    this.setData({
      todoList:newList
    })
  },

  /*ontap:(e)=>{
    //this.todoList.unshift[this.inputtingTask]
    //console.log(this)
    //console.log(data.todoList)
    //console.log(todoList)
    console.log(e)
    console.log(arguments)
  },*/

  submitOnTap:function(){
    console.log(this)
    /*this.data.todoList.unshift({
      title:"qqqq",
      body:"dsfsdf",
      ok:true
    })
    this.setData({
      title:"qqqq",
      body:"33333",
      ok:"4444"
    })*/
    
    /*this.setData({
      todoList:this.data.todoList.unshift({
        title:"aaaa",
        body:"aaaaa",
        ok:true
      })
    })*/
    /*
    小程序能力还是不行，惊叹不支持对数组的变异操作，必须重行设置数组。

    */
    if(this.data.inputtingTask.title == "") return;
    let newList = this.data.todoList
    newList.push(this.data.inputtingTask)
    this.setData({
      todoList:newList
    })

    this.setData({
      inputtingTask:{
        title:"",
        body:"",
        state:"unfinished"
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let todoList = [{
         "title":"吃饭",
         "body":"吃饱饱",
         "state":"finished"
      },{
         "title":"碎觉",
         "body":"😪香香",
         "state":"unfinished"
      } 
    ]
    console.log("at onLoad")
    console.log(this)
    // this.data.name = 1
    //既然可以直接设置data，为什么用setData？
    //vue是直接绑定在this上的
    this.setData({todoList:todoList})
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("at onHide")
      this.data.todoList = []
      console.log(this)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})