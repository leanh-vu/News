
<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">
                <button class="modal-default-button button-orange" @click="$emit('close')">
                    x
                </button>
                <div class="modal-header">
                    <div class='flex-row'>
                        <img class='image' :src="currentNews.urlToImage" :alt="currentNews.title">
                        <div class='flex-column p-05'>
                            <h2>{{currentNews.title}}</h2>
                            <div class='public-date'>{{(new Date(currentNews.publishedAt)).toDateString()}}</div>
                            <div>Source: <a target='_blank' :href="currentNews.url"><button class='button button-blue button-source'>{{currentNews.source.name}}</button></a></div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <strong>{{currentNews.description}}</strong>
                    <div v-html='currentNews.content'>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
    .image {
        width: 20vw;
        border: 5px solid gray;
        border-radius: 5px
    }
    .flex-row {
        display: flex;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
    }
    .public-date {
        font-style: italic;
    }
    .button-source {
        padding: 0.2rem 0.4rem
    }
    .p-05 {
        padding: 0.5rem
    }
</style>
<script>
export default {
    props: {
        currentNews: {
            required: true,
            type: Object
        }
    }
}
</script>

