<template>
  <div>
    <h2>detail _id</h2>
    <pre v-if="goodsInfo">{{goodsInfo}}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    console.log(params);
    if (params.id) {
      const { data: goodsInfo } = await $axios.$get("/api/detail", { params });
      if (goodsInfo) {
        return { goodsInfo };
      }
      error({ statusCode: 400, message: "商品详情查询失败~" });
    } else {
      return { goodsInfo: null };
    }
  }
};
</script>