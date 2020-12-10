<template>
    <div class="flex justify-center mt-10">
        <div class="flex flex-col items-center">
            <img :src="matLogo" alt="mat" class="h-32 logo">
            <div class="flex gap-2 mt-7">
                <a href="https://github.com/matcool"><img :src="githubLogo" class="w-8 h-auto"></a>
                <a href="https://www.youtube.com/channel/UCvIsjvDr8uUQJ820smcvDCg"><img :src="youtubeLogo" class="w-8 h-auto"></a>
            </div>
            <h2 class="text-4xl font-semibold text-gray-100 text-shadow-lg my-5">Websites</h2>
            <div class="flex flex-wrap justify-center gap-10 lg:mx-40">
                <card v-for="(website, i) in websites" :key="i" :content="website" />
            </div>
            <h2 class="text-4xl font-semibold text-gray-100 text-shadow-lg my-5">Other projects</h2>
            <div class="flex flex-wrap justify-center gap-10 lg:mx-40">
                <card v-for="(content, i) in other" :key="i" :content="content" />
            </div>
        </div>
    </div>

    <a
        href="https://unsplash.com/photos/JgOeRuGD_Y4"
        class="fixed bottom-0 right-0 hover:underline unsplash-text text-sm"
        >Image from unsplash</a
    >
</template>

<style lang="postcss">
    .unsplash-text {
        color: rgba(255, 255, 255, 0.3);
    }

    .logo {
        image-rendering: pixelated;
        filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.3));
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from './components/Card.vue';
import type { CardContent } from './types';
import matLogo from './assets/mat.png';
import githubLogo from 'super-tiny-icons/images/svg/github.svg';
import youtubeLogo from 'super-tiny-icons/images/svg/youtube.svg';

export default defineComponent({
    components: {
        Card,
    },
    setup() {
        const websites: CardContent[] = [
            {
                title: 'Extreme Demon Roulette',
                link: 'https://matcool.github.io/extreme-demon-roulette/',
                description: "A website for npesta's extreme demon roulette challenge",
            },
            {
                title: "Jacob's Farming Contests",
                link: 'https://sky.matcool.tk/',
                description: "A tracker for upcoming Jacob's contests for hypixel skyblock",
            },
            {
                title: 'Braille Paint',
                link: 'https://matcool.github.io/braille-paint/',
                description: 'Simple monochrome paint app that converts into braille characters',
            },
            {
                title: 'Mat Typer',
                link: 'https://matcool.github.io/mattyper',
                description: 'Incredible solo typing game!',
            },
        ];

        const other: CardContent[] = [
            {
                title: 'Anvil Parser',
                link: 'https://github.com/matcool/anvil-parser',
                description: 'A python library for parsing Minecraft region files',
            },
            {
                title: 'Schezo',
                link: 'https://github.com/matcool/schezo-bot',
                description: 'A private discord bot',
            },
            {
                title: 'GD Song Server',
                link: 'https://github.com/matcool/gd-song-server',
                description: 'A custom song server for Geometry Dash with additional features',
            },
            {
                title: 'PyGDPS',
                link: 'https://github.com/matcool/pygdps',
                description: 'A GDPS written in python. Currently WIP',
            },
            {
                title: 'Cursed Obsidian',
                link: 'https://github.com/matcool/cursed-obsidian',
                description: 'A manager for curseforge Minecraft mods (would not recommend using)',
            },
        ];
        return {
            websites,
            other,
            matLogo,
            githubLogo,
            youtubeLogo
        };
    },
});
</script>
