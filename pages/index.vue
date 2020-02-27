<template>
  <div>
    <h2>首页：商品列表</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`/detail/${good.id}`">
          <span>{{good.text}}</span>
          <span>￥{{good.price}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "课程列表",
      // vue-meta利用hid确定要更新meta
      meta: [
        { name: "description", hid: "description", content: "set page meta" }
      ],
      link: [{ rel: "favicon", href: "favicon.ico" }]
    };
  },
  data() {
    return {
      goods: []
    };
  },
  async asyncData({ $axios, error }) {
    const { ok, goods } = await $axios.$get("/api/goods");
    if (ok) {
      return { goods }; //此处的数据会和data的数据对象合并，所有要返回{ goods }
    }
    //错误处理
    error({ statusCode: 400, message: "数据查询失败请重试~" });
  }
};
</script>

<style>
ul,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
h2,
ul {
  margin-top: 20px;
}
</style>
