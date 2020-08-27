<template>
  <div class='container'>
    <div class="button-container">
      <div class='logo-container'>
        <button to="/" class='p-0 navbar-logo logo-button' @click="showNews">
            <img class="navbar-logo" src="../../public/img/mylogo.png" alt="mylogo">
        </button>
        <div class='news-text'>
          NEWS
        </div>
      </div>
        <button @click="changeTopic('top')" class='button button-blue mb-05 button-fit mr-05'>Top headline</button>
        <div class="dropdown mr-05">
          <button class="dropbtn button button-blue">Topic</button>
          <div class="dropdown-content">
              <button @click="changeTopic('bitcoin')" class='button button-purple  button-fit'>Bitcoin</button>
              <button @click="changeTopic('apple')" class='button button-purple button-fit'>Apple</button>
              <button @click="changeTopic('earthquake')" class='button button-purple button-fit'>Earthquake</button>
              <button @click="changeTopic('animal')" class='button button-purple button-fit'>Animal</button>
          </div>
        </div>
          <button @click="hideNews" class='button button-blue mb-05 button-fit'>Profile</button>
    </div>
    <div class="content-container inde-scroll scrollbar" @scroll="onScroll">
      <transition name="slide-fade">
        <div v-if='isNewsShow'>
          <new-list :articlesArray='articlesArray'></new-list>
        </div>
      </transition>
    <transition name="slide-fade">
        <profile v-if='!isNewsShow'></profile>
    </transition>
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
    border-radius: 5px;
    padding: 0.5em;
  }
  .content-container {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .image {
    width: 20vw;
  }
  .logo-container {
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-family:Arial, Helvetica, sans-serif;
    padding-right: 1rem;
  }
  .news-text {
    display: block;
    color: white;
    font-weight: bold;
    border: 2px solid;
    border-radius: 5px;
    padding: 0 0.5rem;
    height: fit-content;
    transition: .5s ease;
  }
  .topnav {
    background-color: rgba(255, 255, 255, 0);
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 5px 5px;
  }
  .p-0 {
    padding: 0!important
  }
  .navbar-logo {
    display: block;
    height: 5vh;
    transition: .5s ease;
    padding-left: 2rem;
  }
  .navbar-logo :hover{
    transform: scale(1.5);
  }
  .mr-05 {
    margin-right: 0.5rem;
  }
  .logo-button {
    background: none;
    outline: none;
    color: rgba(255, 255, 255, 0);
      border: none;
  }
  .logo-button:active {
      outline: none;
      border: none;
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
    showNews() {
      this.isNewsShow = true
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
