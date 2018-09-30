<template>
  <div class="index">
      <div v-for="(item,key) in newsListShow" :key="key">
          <news-cell
           :newsDate = "item"
           :key = "key"
          ></news-cell>
      </div>
  </div>
</template>

<script>
import api from "../../axios/api.js";
import NewsCell from "./NewsCell.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      newsListShow: []
    };
  },
  components: {
    NewsCell
  },
  created() {
    this.setNewsApi();
  },
  methods: {
    setNewsApi: function() {
      // api.JH_news("/news/index", "type=top&key=123456").then(res => {
      //   console.log('res',res);
      //   this.newsListShow = res.articles;
      // });
      this.$http.get("/news/index").then(res => {
        console.log("res", res);
      });
    }
  }
};
</script>
