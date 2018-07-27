<template>
  <div class="app-container">

    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.pic_path" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="0">全部消息</el-menu-item>
          <el-menu-item index="1">临时通知</el-menu-item>
          <el-menu-item index="2">资讯</el-menu-item>
          <el-menu-item index="3">招标信息</el-menu-item>
          <el-menu-item index="4">管理办法</el-menu-item>
          <el-menu-item index="5">公司资质</el-menu-item>
      </el-menu>

      <span v-for="(item, index) in infoList" :key="index">
        <el-card class="box-card">
          <div class="left">
            <img src="https://img.jinse.com/990603_image1.png" alt="">
          </div>
          <div class="right">
            <p>{{item.title}}</p>
            <p class="content">{{item.content}}</p>
          </div>
        </el-card>
      </span>
      

    </div>



  </div>
</template>

<script>
import axios from '@/utils/axios';
export default{
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令
      bannerList: [],
      infoList: [],

      activeIndex: '0',
      
    }
  },

  created(){
    axios.get('/api/send/informationindex').then(res => {
      console.log(JSON.stringify(res));
      this.bannerList = res.data.banner_list;
      this.infoList = res.data.d_list;
    })
  },

  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 30px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: block;
  }
  /deep/ .permission-tag{
    background-color: #ecf5ff;
  }
}

.box-card {
    width: 680px;
    height: 200px;
    margin-top: 30px;
  }
.box-card .left{
  float: left;
}  
.box-card .right{
  width: 350px;
  float: left;
  padding-left:30px;
}
.box-card .right .content {
  color:gray;
  width: 300px;
  height: 90px;
  overflow: hidden;
}
</style>

