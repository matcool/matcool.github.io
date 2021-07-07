<template>
    <div class="bg-plain-gray-darkish w-full mt-5">
        <div class="flex md:flex-row flex-col p-4 items-center">
            <img v-if="!isVideo" :src="media" alt="example image of the mod" class="thumb-img mr-4">
            <video v-if="isVideo" class="thumb-img mr-4" loop muted controls :src="media"></video>
            <div class="mt-5 md:mt-0">
                <h2 class="text-3xl text-white mb-2">{{ title }}</h2>
                <p class="text-white max-w-lg">{{ description }}</p>
                <a
                :href="link"
                class="bg-green-400 hover:bg-green-500 active:bg-green-600 focus:outline-none mt-5 p-2 pr-8 font-semibold inline-flex cursor-pointer select-none w-min">
                <img :src="downloadIcon" class="w-full mr-1" />Download</a>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.thumb-img {
    max-width: 400px;
    /* max-height: 337px; */
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import downloadImg from '../assets/download.png';
import downloadIcon from '../assets/tabler-icon-download.svg';

export default defineComponent({
    name: 'Card',
    props: {
        media: String,
        isVideo: {
            type: Boolean,
            default: false
        },
        title: String,
        description: String,
        link: String,
    },
    setup() {
        return {
            downloadImg,
            downloadIcon
        };
    },
});
</script>
