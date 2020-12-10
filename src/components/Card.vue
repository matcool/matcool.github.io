<template>
    <div class="card shadow-lg px-5 py-3 rounded text-center w-80">
        <a :href="content.link">
            <h3 class="text-xl mb-2 font-medium" :class="{ 'hover:underline': content.link }">
                {{ content.title }}
            </h3>
        </a>
        <p>{{ content.description }}</p>
    </div>
</template>

<style lang="postcss" scoped>
.card {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardContent } from '../types';

export default defineComponent({
    name: 'Card',
    props: {
        content: {
            type: Object as PropType<CardContent>,
            required: true,
        },
    },
    setup() {
        return {};
    },
});
</script>
