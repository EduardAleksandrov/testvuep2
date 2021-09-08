<template>
  <div class="news">
    <h1 class="title">This is a News page</h1>
    <div class="wrapper">
      <div class="news-item"
           v-for="(item, number) in news" :key="item.id"
           v-if="!isNewsLoading"
      >
        <div class="shape"></div>
        {{ item.name }}
      </div>
      <Loader v-else />
      <div class="page__wrapper">
        <div
            v-for="pageNumber in totalPages" :key="pageNumber"
            class="page"
            :class="{'current-page': page === pageNumber}"
            @click="changePage(pageNumber);changeRoute(pageNumber)"
        >
          <!--<router-link class="page-link" :to="{ name: 'HomeId', params: { id: pageNumber  }}">{{ pageNumber }}</router-link> -->
          {{ pageNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from '@/components/Loader'

export default {
  name: 'News',
  components: {Loader},
  data() {
    return {
      news: [],
      number: 0,
      page: +this.$route.params.id || +this.$route.query.page || 1, //типизация
      totalPages: 10,
      isNewsLoading: false
    }
  },
  methods: {
    changePage(pageNumber){
      this.page = pageNumber;
    },
    changeRoute(pageLink) {
      this.$router.push({ name: 'HomeId', params: { id: pageLink } });
    },
    async fetchNews(){
      try{
        this.isNewsLoading = true;
        //const response = await axios.get('https://jsonplaceholder.typicode.com/todos?page=3');
        const response = await axios.get('https://rusradio.ru/api/news/news',{
          params: {
            page: this.page
          }
        });
        this.news = response.data.items;
        //console.log(response);
      } catch (e) {
        console.log(e.message);
      } finally {
        this.isNewsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchNews();
  },
  watch: {
    page() {
      this.fetchNews();
    },
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 40%;
  margin: 0 auto;
}
.news-item {
  display:flex;
  margin-bottom: 10px;
  text-align: left;
}
.title {
  margin-bottom: 80px;
}
.page__wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  margin-right: 3px;
  padding: 10px;
}
.current-page {
  border: 3px solid #3cd621;
}
.page-link {
  color: black;
  text-decoration: none;
}
.shape {
  margin-top: 4px;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  background: #83A7C9;
  border-radius: 50%;
}
</style>