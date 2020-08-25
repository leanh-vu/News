<template>
  <div class="content-container">
      <div>headline</div>
  </div>
</template>
<style>
  .content-container {
    width: 90%;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 5px;
    margin-left: 1rem
  }
</style>

<script>
export default {
  components: {
  },
  data () {
    return {
      currentPage: 0,
      articlePerPage: 10,
      articlesArray: []
    }
  },
  computed: mapState(['apiKey']),
  methods: {
    updateArticlesArray() {
      this.currentPage += 1
      var url = `https://newsapi.org/v2/top-headlines?
                    country=us&
                    pageSize=${this.articlePerPage}&
                    page=${this.currentPage}&
                    apiKey=${this.apiKey}`
      var request = new Request(url);
      fetch(request)
          .then(res => res.json())
          .then(res => {
            this.articlesArray = this.articlesArray.concat(res.articles)
          })
          .catch(er => console.log(er))
    } 
  },
  mounted() {
    this.updateArticlesArray()
  }
}
</script>
