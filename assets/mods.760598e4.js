import{d as e,c as a,f as t,g as s,t as l,w as o,p as d,h as n,i,o as r,j as c,r as m}from"./vendor.e22d4117.js";var h=e({name:"Card",props:{media:String,isVideo:{type:Boolean,default:!1},title:String,description:String,link:String,dark:Boolean},setup:()=>({downloadImg:"/assets/download.9e0438b5.png",downloadIcon:"/assets/tabler-icon-download.4bb61ecb.svg"})});const u=o();d("data-v-1bd1784b");const b={class:"flex lg:flex-row flex-col p-4"},p={class:""},g={class:"text-3xl text-white mb-2"},v={class:"text-white max-w-lg"},f=n("Download");i();const y=u(((e,o,d,n,i,c)=>(r(),a("div",{class:[{"bg-plain-gray-darkish":!e.dark,"bg-plain-gray-dark":e.dark},"w-full"]},[t("div",b,[e.isVideo?s("",!0):(r(),a("img",{key:0,src:e.media,alt:"example image of the mod",class:"thumb-img mr-4"},null,8,["src"])),e.isVideo?(r(),a("video",{key:1,class:"thumb-img mr-4",loop:"",muted:"",controls:"",src:e.media},null,8,["src"])):s("",!0),t("div",p,[t("h2",g,l(e.title),1),t("p",v,l(e.description),1),t("a",{href:e.link,class:"bg-green-400 hover:bg-green-500 active:bg-green-600 focus:outline-none mt-5 p-2 pr-8 font-semibold inline-flex cursor-pointer select-none w-min"},[t("img",{src:e.downloadIcon,class:"w-full mr-1"},null,8,["src"]),f],8,["href"])])])],2))));h.render=y,h.__scopeId="data-v-1bd1784b";var x=e({components:{"gd-mod":h},setup:()=>({runInfo:"/assets/run-info.c19b60d4.webp",rgbtest:"/assets/rgb-color.b689ea44.webm",songSearch:"/assets/song-search.33c64d51.png",sumAttempts:"/assets/sum-attempts.ea76499e.png",menuShaders:"/assets/menu-shaders.3e3d3754.png",gdIcon:"/assets/gd-icon.8c20f2ea.png",tutorial1:"/assets/tutorial2.991815e3.png",tutorial3:"/assets/tutorial3.06f669b3.png",tutorial4:"/assets/tutorial4.a69ef570.png"})});const w=o();d("data-v-48eb6656");const k={class:""},D=t("div",{class:"bg-plain-gray-light w-full p-5"},[t("h1",{class:"text-4xl text-white font-semibold"},"Small GD Mods"),t("h1",{class:"mt-3 text-white"},"A collection of small utility mods for Geometry Dash"),t("p",{class:"text-gray-200 mt-5 italic text-sm"},"Please read the installation instructions below! ↓")],-1),G=c('<div class="bg-plain-gray-darkish p-4 text-white" data-v-48eb6656><h1 class="text-3xl" data-v-48eb6656>Other mods</h1><ul class="list-disc list-inside ml-3 mt-3" data-v-48eb6656><li data-v-48eb6656><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/every-key-jumps.dll" data-v-48eb6656>Every key jumps</a> — Allows you to play gd with almost every key in your keyboard </li><li data-v-48eb6656><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/global-clipboard.dll" data-v-48eb6656>Global clipboard</a> — Stores your object clipboard between levels <span class="text-sm italic" data-v-48eb6656>(this is now included in BetterEdit)</span></li></ul></div>',1),I={id:"install-instructions",class:"bg-plain-gray-dark p-4 px-6 text-white"},S=c('<h1 class="text-4xl border-b border-gray-500 mb-4" data-v-48eb6656>Install instructions</h1><h2 id="support-server" class="text-2xl" data-v-48eb6656>Support server</h2><p data-v-48eb6656>If you&#39;re stuck or have an issue you can join here to ask</p><a class="text-blue-400 underline" href="https://discord.gg/K9Kuh3hzTC" data-v-48eb6656>https://discord.gg/K9Kuh3hzTC</a><article style="background-color:#28292d;" class="px-4 pt-2 pb-3 table rounded mt-1" data-v-48eb6656><p class="mb-2 font-medium" data-v-48eb6656>You&#39;ve been invited to join a server</p><section class="flex w-full justify-items-center" data-v-48eb6656><img class="h-12 w-auto rounded-2xl" src="https://cdn.discordapp.com/icons/822510988409831486/39b0193a75727a251bc70870fbbb8da7.webp?size=256" alt="server icon" data-v-48eb6656><p class="ml-2 mt-1 mr-14 font-bold text-base" data-v-48eb6656>GD Mods</p><a href="https://discord.gg/K9Kuh3hzTC" class="bg-green-600 hover:bg-green-700 active:bg-green-800 justify-self-end self-center px-4 py-2 ml-auto rounded" data-v-48eb6656>Join</a></section></article><h2 class="text-3xl my-2" data-v-48eb6656>Locate your Geometry Dash folder</h2>',6),j=n("The GD folder is the one that contains the "),A={class:"inline-flex bg-plain-gray-darkish h-min mx-1"},M=n(" GeometryDash.exe"),H=t("p",null,"An easy way of opening this folder is by going on your Steam library → right click on Geometry Dash → Manage → Browse local files ",-1),B=c('<h2 class="text-3xl mb-2" data-v-48eb6656>Download MinHook</h2><p class="italic text-sm" data-v-48eb6656>if you already have this dll you can skip this step</p><p data-v-48eb6656>Download <span class="font-mono" data-v-48eb6656>minhook.x32.dll</span> and place it in your GD folder</p><p class="mb-2" data-v-48eb6656>Note that not having this dll will make the mods <span class="font-bold" data-v-48eb6656>not work at all</span></p><a href="https://github.com/HJfod/minhook/releases/latest/download/minhook.x32.dll" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-black font-semibold p-2" data-v-48eb6656>Download Here</a><div class="border-b border-gray-500 mt-7 mb-2" data-v-48eb6656></div><h3 class="text-2xl mt-3" data-v-48eb6656>Mega Hack v6</h3><p data-v-48eb6656>Place the mod you want to install in the extensions folder, which you can open by clicking here</p>',8),K=c('<h3 class="text-2xl mt-3" data-v-48eb6656>GD-Hackermode</h3><p data-v-48eb6656>Place the mod in the <span class="font-mono" data-v-48eb6656>GDHM-dll</span> folder, located inside your GD folder</p><h3 class="text-2xl mt-3" data-v-48eb6656>GDDLLLoader</h3><p data-v-48eb6656>Place the mod in the <span class="font-mono" data-v-48eb6656>adaf-dll</span> folder, located inside your GD folder</p><h3 class="text-2xl mt-3" data-v-48eb6656>Mega Hack v5</h3><p data-v-48eb6656>You can use Mega Hack v5 for injecting dlls, however, you&#39;ll have to do this every time you want to use the mod</p>',6),z=t("h3",{class:"text-2xl mt-3 text-gray-200"},"else",-1),C=t("p",null,[n("If you don't have a mod loader, you can join the "),t("a",{class:"text-blue-400",href:"#support-server"},"GD Mods"),n(" server and follow the installation instructions for quickldr")],-1),L=t("div",{class:"bg-plain-gray-dark h-32"},null,-1);i();const P=w(((e,s,l,o,d,n)=>{const i=m("gd-mod");return r(),a("div",k,[D,t(i,{media:e.runInfo,title:"Run Info",description:"Adds an overlay to the corner of the screen which shows info for practice mode and start pos attempts",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/run-info.dll",dark:!1},null,8,["media"]),t(i,{media:e.rgbtest,isVideo:!0,title:"RGB Color Input",description:"Adds a widget to directly edit the R G and B values of a color channel",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/rgb-color-input.dll",dark:!0},null,8,["media"]),t(i,{media:e.songSearch,title:"Song search",description:"Allows you to search through your saved songs in the song select dialog",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/song-search.dll",dark:!1},null,8,["media"]),t(i,{media:e.menuShaders,title:"Menu shaders",description:"Replaces the background of the main menu with a custom shader, which can be customized.",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/menu-shaders.dll",dark:!0},null,8,["media"]),t(i,{media:e.sumAttempts,title:"Sum Attempts",description:"Adds a button to the levels screen that adds up all the attempts in that folder",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/sum-attempts.dll",dark:!1},null,8,["media"]),G,t("div",I,[S,t("p",null,[j,t("pre",A,[t("img",{src:e.gdIcon,class:"h-5"},null,8,["src"]),M])]),H,t("img",{class:"my-2 ml-2",src:e.tutorial1},null,8,["src"]),B,t("img",{src:e.tutorial3},null,8,["src"]),K,t("img",{src:e.tutorial4},null,8,["src"]),z,C]),L])}));x.render=P,x.__scopeId="data-v-48eb6656";export default x;