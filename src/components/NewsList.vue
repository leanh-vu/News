<template>
    <div>
        <modal :currentNews='currentNews' v-if="showModal" @close="showModal = false"></modal>
        <div v-for='(ar, k) in articlesArray' :key='k' class='news-container'>
            <img class='image' :src="ar.urlToImage" :alt="ar.title">
            <div class='news-outline-container'>
                <a class='open-modal-link' @click="showModal = true; currentNews=ar"><h2>{{ar.title}}</h2></a>
                <div>{{ar.description}}</div>
                <div>{{(new Date(ar.publishedAt)).toDateString()}}</div>
                <div>Source: {{ar.source.name}}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
  .image {
    width: 20vw;
    border-radius: 5px
  }
  .news-container {
    display: flex;
    margin: 1rem
  }
  .news-outline-container {
      margin-left: 1rem;
  }
  .open-modal-button {
      margin: 0;
      padding: 0;
      background-color: rgba(255, 255, 255, 0);
      outline: none;
      border:none
  }
  .open-modal-link :hover {
      color:#303f9f
  }
  
</style>

<script>
    import Modal from './Modal.vue'
export default {
    components: {
        'modal': Modal
    },
    props: {
        articlesArray: {
            type: Array,
            required: true
        }
    },
  data () {
    return {
        showModal: false,
        currentNews: {}
    }
  },
  methods: {
  },
}
</script>
