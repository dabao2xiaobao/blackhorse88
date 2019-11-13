<template>
  <div class="login">
    <!-- elementUI card卡片组件-->
    <el-card class='login-card'>
      <!-- 卡片内容 -->
      <div class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单 -->
      <el-form ref="fromObj" style="margin-top:30px" :model="loginFrom" :rules="loginRules">
        <!-- 一个表单域就是一个form-item -->
        <el-form-item prop='mobile'>
          <!-- 放置表单组件  -->
          <!-- 手机号 -->
          <el-input v-model="loginFrom.mobile" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <!-- 验证码 和发送验证码 -->
          <el-input style='width:280px' v-model="loginFrom.code" placeholder="请输入您的验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
         <el-form-item prop='checked'>
           <!-- 勾选同意框 -->
           <el-checkbox v-model="loginFrom.checked">我已阅读并同意用户协议及条款</el-checkbox>
         </el-form-item>
         <el-form-item>
           <el-button style="width:100%" type='primary' @click='login'>登录</el-button>
         </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginFrom: {
        mobile: '',
        code: '',
        checked: true
      },
      // 校验规则对象,名字随便你
      loginRules: {
        // 键值对,key要校验的字段名,vlaue数组,数组里边方对象,一条对象一条规则,可以放多条规则
        mobile: [
          // required为必填字段  错误提示信息
          { required: true, message: '请输入正确的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '输入的手机号不正确' }
        ],
        code: [
          { required: true, message: '请输入正确的密码' },
          { pattern: /^\d{6}$/, message: '输入的密码不正确' }
        ],
        checked: [
          // 表单验证自定义规则  是一个函数,有三个参数 rule代表当前的规则,value代表当前的值,callback回调函数
          { validator: function (rule, value, callback) {
            if (value) {
              callback()
            } else {
              callback(new Error('请您勾选用户协议'))
            }
          } }
        ]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.fromObj 获取el-from的对象实例
      this.$refs.fromObj.validate(function (isOK) {
        if (isOK) {
          // 如果结果为true, 继续下一步, 调用接口, 登录
          console.log('验证成功')
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
 .login {
    background-image: url('../../assets/img/login_bg.jpg');
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
      width: 440px;
      height:360px;
      .title {
        text-align: center;
        img {
          height: 45px;
        }
      }
    }
  }
</style>
