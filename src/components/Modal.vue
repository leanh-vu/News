
<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">
                    <button class="modal-default-button" @click="$emit('close')">
                    x
                    </button>
                <div class="modal-header">
                    <div>
                        <img class='image' :src="currentNews.urlToImage" :alt="currentNews.title">
                        <h2>{{currentNews.title}}</h2>
                        <div>{{currentNews.description}}</div>
                        <div>{{(new Date(currentNews.publishedAt)).toDateString()}}</div>
                        <a target='_blank' :href="currentNews.url"><button class='button button-orange'>Source: {{currentNews.source.name}}</button></a>
                    </div>
                </div>
                <div class="modal-body">
                    <div v-html='currentNews.content'>
                    </div>
                </div>
                <div class="modal-footer">
                <slot name="footer">
                    default footer
                </slot>
                </div>
            </div>
            </div>
        </div>
    </transition>
</template>
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

