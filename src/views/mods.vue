<template>
    <div class="">
        <div class="bg-plain-gray-light w-full p-5">
            <h1 class="text-4xl text-white font-semibold">Small GD Mods</h1>
        </div>

        <gd-mod
            :media="runInfo"
            title="Run Info"
            description="Adds an overlay to the corner of the screen which shows info for practice mode and start pos attempts"
            link="https://github.com/matcool/small-gd-mods/releases/download/mods/run-info.dll"
            :dark="false"
        />
        <gd-mod
            :media="rgbtest"
            :isVideo="true"
            title="RGB Color Input"
            description="Adds a widget to directly edit the R G and B values of a color channel"
            link="https://github.com/matcool/small-gd-mods/releases/download/mods/rgb-color-input.dll"
            :dark="true"
        />
        <gd-mod
            :media="songSearch"
            title="Song search"
            description="Allows you to search through your saved songs in the song select dialog"
            link="https://github.com/matcool/small-gd-mods/releases/download/mods/song-search.dll"
            :dark="false"
        />
        <gd-mod
            :media="sumAttempts"
            title="Sum Attempts"
            description="Adds a button to the levels screen that adds up all the attempts in that folder"
            link="https://github.com/matcool/small-gd-mods/releases/download/mods/sum-attempts.dll"
            :dark="true"
        />
        <div class="bg-plain-gray-darkish p-4 text-white">
            <h1 class="text-3xl">Other mods</h1>
            <ul class="list-disc list-inside ml-3 mt-3">
                <li><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/every-key-jumps.dll">Every key jumps</a> &mdash; Allows you to play gd with almost every key in your keyboard </li>
                <li><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/global-clipboard.dll">Global clipboard</a> &mdash; Stores your object clipboard between levels <span class="text-sm italic">(this is now included in BetterEdit)</span></li>
            </ul>
        </div>
        <div id="install-instructions" class="bg-plain-gray-dark p-4 px-6 text-white">
            <h1 class="text-4xl border-b border-gray-500 mb-4">Install instructions</h1>

            <h2 id="support-server" class="text-2xl">Support server</h2>

            <p>if youre stuck or smth u can join here and ask :D</p>
            <a class="text-blue-400 underline" href="https://discord.gg/K9Kuh3hzTC">https://discord.gg/K9Kuh3hzTC</a>
            <article style="background-color: #28292d;" class="px-4 pt-2 pb-3 table rounded mt-1">
                <p class="mb-2 font-medium">You've been invited to join a server</p>
                <section class="flex w-full justify-items-center">
                    <img class="h-12 w-auto rounded-2xl" src="https://cdn.discordapp.com/icons/822510988409831486/39b0193a75727a251bc70870fbbb8da7.webp?size=256" alt="server icon">
                    <p class="ml-2 mt-1 mr-14 font-bold text-base">GD Mods</p>
                    <a href="https://discord.gg/K9Kuh3hzTC" class="bg-green-600 hover:bg-green-700 active:bg-green-800 justify-self-end self-center px-4 py-2 ml-auto rounded">Join</a>
                </section>
            </article>


            <h2 class="text-3xl my-2">Locate your Geometry Dash folder</h2>

            <p>The GD folder is the one that contains the <pre class="inline-flex bg-plain-gray-darkish h-min mx-1"><img :src="gdIcon" class="h-5"> GeometryDash.exe</pre></p>
            <p>An easy way of opening this folder is by going on your Steam library → right click on Geometry Dash → Manage → Browse local files </p>
            <img class="my-2 ml-2" :src="tutorial1">


            <h2 class="text-3xl mb-2">Download MinHook</h2>

            <p class="italic text-sm">if you already have it you can skip this step</p>
            <p class="mb-2">Download <span class="font-mono">minhook.x32.dll</span> and place it in your GD folder</p>
            <a href="https://github.com/HJfod/minhook/releases/latest/download/minhook.x32.dll" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-black font-semibold p-2">Download Here</a>

            <div class="border-b border-gray-500 mt-4 mb-2"></div>


            <h3 class="text-2xl mt-3">Mega Hack v6</h3>
            <p>Place the mod you want to install in the extensions folder, which you can open by clicking here</p>
            <img :src="tutorial3">

            <h3 class="text-2xl mt-3">GD-Hackermode</h3>
            <p>Place the mod in the <span class="font-mono">GDHM-dll</span> folder, located inside your GD folder</p>

            <h3 class="text-2xl mt-3">GDDLLLoader</h3>
            <p>Place the mod in the <span class="font-mono">adaf-dll</span> folder, located inside your GD folder</p>

            <h3 class="text-2xl mt-3">Mega Hack v5</h3>
            <p>You can use Mega Hack v5 for injecting dlls, however, you'll have to do this every time you want to use the mod</p>
            <img :src="tutorial4">

            <h3 class="text-2xl mt-3 text-gray-200">else</h3>
            <p>If you don't have a mod loader, you can join the <a class="text-blue-400" href="#support-server">GD Mods</a> server and follow the installation instructions for quickldr</p>
        </div>
        <div class="bg-plain-gray-dark h-32"></div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import GDMod from '../components/GDMod.vue';
import runInfo from '../assets/run-info.webp';
import rgbtest from '../assets/rgb-color.webm';
import songSearch from '../assets/song-search.png';
import sumAttempts from '../assets/sum-attempts.png';
import gdIcon from '../assets/gd-icon.png';
import tutorial1 from '../assets/tutorial2.png';
import tutorial3 from '../assets/tutorial3.png';
import tutorial4 from '../assets/tutorial4.png';

export default defineComponent({
    components: {
        'gd-mod': GDMod
    },
    setup() {
        return {
            runInfo,
            rgbtest,
            songSearch,
            sumAttempts,
            gdIcon,
            tutorial1,
            tutorial3,
            tutorial4
        };
    }
});
</script>
