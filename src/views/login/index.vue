<template>
  <div>
    <p>home</p>
    <div style="display:flex;flex-direction:row;justify-content:center;align-items:flex-start;flex-wrap:wrap;">
    <xi-button><span slot="title">默认按钮</span></xi-button>
    <xi-button type="primary">主要按钮</xi-button>
    <xi-button type="success">成功按钮</xi-button>
    <xi-button type="info">信息按钮</xi-button>
    <xi-button type="warning">警告按钮</xi-button>
    <xi-button type="danger">危险按钮</xi-button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>