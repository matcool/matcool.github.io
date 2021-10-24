<template>
    <div>
        <div class="md:flex md:justify-center bg-plain-gray-darker">
            <div class="flex flex-col">
                <div class="bg-plain-gray-light w-full p-5 mt-5">
                    <h1 class="text-4xl text-white font-semibold">Small GD Mods</h1>
                    <h1 class="mt-3 text-white">A collection of small utility mods for Geometry Dash</h1>
                    <p class="text-gray-200 mt-5 italic">Please read the <a href="#install-instructions" class="text-blue-300 hover:underline">install instructions</a> below! ↓</p>
                </div>
                <div class="bg-plain-gray-dark text-white w-full p-5 mt-5">
                    <h2 class="text-3xl mb-2">MinHook</h2>

                    <p>This library is required for <b>all</b> of these mods to work</p>
                    <p>Not having it will make them <span class="font-bold text-2xl underline text-red-400">not work at all</span></p>
                    <p>Download <span class="font-mono">minhook.x32.dll</span> and place it in your <span class="font-medium">GD folder</span> (for more info read the <a href="#install-instructions" class="link">install instructions</a>)</p>
                    <div class="my-3">
                        <a href="https://github.com/HJfod/minhook/releases/latest/download/minhook.x32.dll" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-black font-semibold p-2">Download Here</a>
                    </div>
                </div>

                <div class="bg-plain-gray-dark text-white p-5 mt-5">
                    <h2 class="text-3xl mb-2">Visual C++ Redistributables</h2>

                    <p>Having issues with the mods simply not loading at all? Try installing the Microsoft Visual C++ Redistributables</p>
                    <a class="link" href="https://aka.ms/vs/16/release/vc_redist.x86.exe">
                    https://aka.ms/vs/16/release/vc_redist.x86.exe</a>
                </div>
                
                <gd-mod
                    :media="runInfo"
                    title="Run Info"
                    description="Adds an overlay to the corner of the screen which shows info for practice mode and start pos attempts"
                    link="https://github.com/matcool/small-gd-mods/releases/download/mods/run-info.dll"
                />
                <gd-mod
                    :media="rgbtest"
                    :isVideo="true"
                    title="RGB Color Input"
                    description="Adds a widget to directly edit the R G and B values of a color channel"
                    link="https://github.com/matcool/small-gd-mods/releases/download/mods/rgb-color-input.dll"
                />
                <gd-mod
                    :media="songSearch"
                    title="Song search"
                    description="Allows you to search through your saved songs in the song select dialog"
                    link="https://github.com/matcool/small-gd-mods/releases/download/mods/song-search.dll"
                />
                <gd-mod
                    :media="menuShaders"
                    title="Menu shaders"
                    description="Replaces the background of the main menu with a custom shader, which can be customized."
                    link="https://github.com/matcool/small-gd-mods/releases/download/mods/menu-shaders.dll">
                    <span class="link cursor-pointer" @click="showMenuShaderModal = true">Click here to see more info.</span>
                </gd-mod>
                <gd-mod
                    :media="sumAttempts"
                    title="Sum Attempts"
                    description="Adds a button to the levels screen that adds up all the attempts in that folder"
                    link="https://github.com/matcool/small-gd-mods/releases/download/mods/sum-attempts.dll"
                />
                <div class="bg-plain-gray-darkish p-4 text-white my-5">
                    <h1 class="text-3xl">Other mods</h1>
                    <ul class="list-disc list-inside ml-3 mt-3">
                        <li><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/every-key-jumps.dll">Every key jumps</a> &mdash; Allows you to play gd with almost every key in your keyboard </li>
                        <li><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/global-clipboard.dll">Global clipboard</a> &mdash; Stores your object clipboard between levels <span class="text-sm italic">(this is now included in BetterEdit)</span></li>
                        <li>
                            <a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/crash-logger.dll">Crash logger</a>
                            &mdash; Basic logger that logs crashes in a file named <span class="font-mono">crash-log.log</span>
                        </li>
                        <li class="max-w-3xl">
                            <a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/fps-multiplier.dll">FPS "multiplier"</a>
                            &mdash; (MHv6 extension only) Runs the gd physics multiple times a frame, letting you play with the same physics as higher fpses. Note that
                            input delay is still the same, so this won't improve playing experience much.
                        </li>
                    </ul>
                </div>
                <div id="install-instructions" class="bg-plain-gray-dark p-4 px-6 text-white">
                    <h1 class="text-4xl border-b border-gray-500 mb-4">Install instructions</h1>

                    <h2 id="support-server" class="text-2xl">Support server</h2>

                    <p>If you're stuck or have an issue you can join here to ask</p>
                    <a class="text-blue-400 underline" href="https://discord.gg/K9Kuh3hzTC">https://discord.gg/K9Kuh3hzTC</a>
                    <article style="background-color: #28292d;" class="px-4 pt-2 pb-3 table rounded mt-1">
                        <p class="mb-2 font-medium">You've been invited to join a server</p>
                        <section class="flex w-full justify-items-center">
                            <img class="h-12 w-auto rounded-2xl" src="https://cdn.discordapp.com/icons/822510988409831486/39b0193a75727a251bc70870fbbb8da7.webp?size=256" alt="server icon">
                            <p class="ml-2 mt-1 mr-14 font-bold text-base">GD Modding</p>
                            <a href="https://discord.gg/K9Kuh3hzTC" class="bg-green-600 hover:bg-green-700 active:bg-green-800 justify-self-end self-center px-4 py-2 ml-auto rounded">Join</a>
                        </section>
                    </article>


                    <h2 class="text-3xl my-2">Locate your Geometry Dash folder</h2>

                    <p>The GD folder is the one that contains the <pre class="inline-flex bg-plain-gray-darkish h-min mx-1"><img :src="gdIcon" class="h-5"> GeometryDash.exe</pre></p>
                    <p>An easy way of opening this folder is by going on your Steam library → right click on Geometry Dash → Manage → Browse local files </p>
                    <img class="my-2 ml-2" :src="tutorial1">


                    <h2 class="text-3xl mb-2">Download MinHook</h2>

                    <p class="italic text-sm">if you already have this dll you can skip this step</p>
                    <p>Download <span class="font-mono">minhook.x32.dll</span> and place it in your GD folder (the one found in the previous step)</p>
                    <p class="mb-2">Note that not having this dll will make the mods <span class="font-bold text-2xl underline text-red-200">not work at all</span></p>
                    <a href="https://github.com/HJfod/minhook/releases/latest/download/minhook.x32.dll" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-black font-semibold p-2">Download Here</a>
                    <div class="mb-4"></div>
                </div>
                <div class="bg-plain-gray-dark mt-5 p-4 px-6 text-white">
                    <h1 class="text-4xl border-b border-gray-500 mb-4">Specific instructions</h1>

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
                    <p>If you don't have a mod loader, you can join the <a class="link" href="#support-server">GD Mods</a> server and follow the installation instructions for quickldr</p>
                </div>
            </div>
        </div>
        <div class="bg-plain-gray-darker h-32"></div>
        <div class="bg-plain-gray-darker text-right pr-4 pb-2">
            <a href="https://github.com/Partur1" class="link">Design by Partur</a>
        </div>
        <modal :show="showMenuShaderModal" @close="showMenuShaderModal = false">
            <div class="bg-plain-gray text-white p-4 max-w-2xl">
                To customize the shader, create a file named <span class="font-mono">menu-shader.fsh</span> in your Resources folder
                with the shader you want. For a few already made shaders, checkout this thread: <a class="link" href="https://twitter.com/mateus44_/status/1412108556921344006?s=20">https://twitter.com/mateus44_/status/1412108556921344006?s=20</a>
                <div class="flex flex-wrap">
                    <img src="https://pbs.twimg.com/media/E5jnEKUXoAQKZuw?format=jpg&name=large" alt="shader" class="m-1 w-72">
                    <img src="https://pbs.twimg.com/media/E5jhMUDWUAcISFj?format=jpg&name=large" alt="shader" class="m-1 w-72">
                </div>
                <div class="border-b-2 border-plain-gray-dark my-5"></div>
                If you want to convert shaders from shadertoy yourself you can try using Tning's <a class="link" href="https://shadertoyporter.github.io/">Shadertoy porter</a>,
                but be aware that not every shader will work
            </div>
        </modal>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GDMod from '../components/GDMod.vue';
import Modal from '../components/Modal.vue';
import runInfo from '../assets/run-info.webp';
import rgbtest from '../assets/rgb-color.webm';
import songSearch from '../assets/song-search.png';
import sumAttempts from '../assets/sum-attempts.png';
import menuShaders from '../assets/menu-shaders.png';
import gdIcon from '../assets/gd-icon.png';
import tutorial1 from '../assets/tutorial2.png';
import tutorial3 from '../assets/tutorial3.png';
import tutorial4 from '../assets/tutorial4.png';

export default defineComponent({
    components: {
        'gd-mod': GDMod,
        modal: Modal
    },
    setup() {
        return {
            runInfo,
            rgbtest,
            songSearch,
            sumAttempts,
            menuShaders,
            gdIcon,
            tutorial1,
            tutorial3,
            tutorial4,
            showMenuShaderModal: ref(false)
        };
    }
});
</script>
