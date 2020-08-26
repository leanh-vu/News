<template>
  <div class='container'>
    <div class="button-container">
        <button @click="changeTopic('top')" class='button button-blue mb-05 button-fit'>Top headline</button>
        <div class="dropdown">
          <button class="dropbtn button">Topic</button>
          <div class="dropdown-content">
              <button @click="changeTopic('bitcoin')" class='button button-blue mb-05 button-fit'>Bitcoin</button>
              <button @click="changeTopic('apple')" class='button button-blue mb-05 button-fit'>Apple</button>
              <button @click="changeTopic('earthquake')" class='button button-blue mb-05 button-fit'>Earthquake</button>
              <button @click="changeTopic('animal')" class='button button-blue mb-05 button-fit'>Animal</button>
          </div>
        </div>
          <button @click="hideNews" class='button button-blue mb-05 button-fit'>Profile
        </button>
    </div>
    <div class="content-container inde-scroll scrollbar" @scroll="onScroll">
      <div v-if='isNewsShow'>
        <new-list :articlesArray='articlesArray'></new-list>

      </div>
      <div v-else>
        <profile></profile>
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    width: 97vw;
    height: 97vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .button-container {
    display: flex;
    width: 100%;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 5px;
  }
  .content-container {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 5px;
  }
  .image {
    width: 20vw;
  }
</style>

<script>
import Profile from '../views/Profile.vue'
import NewsList from '../components/NewsList.vue'
export default {
  components: {
    'profile': Profile,
    'new-list': NewsList
  },
  data () {
    return {
      apiKey: '9107bea924304f6888a53af8e7e42a07',
      currentPage: 0,
      articlePerPage: 10,
      topic: localStorage.getItem('favoriteTopic'),
      articlesArray: [],
      isNewsShow: true,
    }
  },
  computed: {
    url: function () {
      let topic_usersearch = `https://newsapi.org/v2/everything?pageSize=${this.articlePerPage}&page=${this.currentPage}&q=${this.topic}&apiKey=9107bea924304f6888a53af8e7e42a07`
      let headline_url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${this.articlePerPage}&page=${this.currentPage}&apiKey=${this.apiKey}`
      if (this.topic == 'top') {
        return  headline_url
      } else {
        return  topic_usersearch
      }
    }
  },
  methods: {
    hideNews() {
      this.isNewsShow = false
    },
    updateArticlesArray() {
      this.currentPage += 1
      var request = new Request(this.url);
      fetch(request)
          .then(res => res.json())
          .then(res => {
            this.articlesArray = this.articlesArray.concat(res.articles)
          })
          .catch(er => console.log(er))
    },
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.updateArticlesArray()
      }
    },
    changeTopic (topic) {
      this.currentPage = 0
      this.articlesArray = []
      this.topic = topic
      this.isNewsShow = true
      localStorage.setItem('favoriteTopic', topic)
      this.updateArticlesArray()
    }
  },
  mounted() {
    this.updateArticlesArray()
  }
}
</script>
