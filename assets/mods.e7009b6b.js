import{d as e,c as a,f as t,g as s,t as l,h as o,i as d,w as i,p as n,j as r,o as c,k as m,l as h,r as u}from"./vendor.4f571790.js";var p=e({name:"Card",props:{media:String,isVideo:{type:Boolean,default:!1},title:String,description:String,link:String},setup:()=>({downloadImg:"/assets/download.9e0438b5.png",downloadIcon:"/assets/tabler-icon-download.4bb61ecb.svg"})});const f=i();n("data-v-79837328");const g={class:"bg-plain-gray-darkish w-full mt-5"},b={class:"flex md:flex-row flex-col p-4 items-center"},v={class:"mt-5 md:mt-0"},x={class:"text-3xl text-white mb-2"},w={class:"text-white max-w-lg"},y=o("Download");r();const k=f(((e,i,n,r,m,h)=>(c(),a("div",g,[t("div",b,[e.isVideo?s("",!0):(c(),a("img",{key:0,src:e.media,alt:"example image of the mod",class:"thumb-img mr-4"},null,8,["src"])),e.isVideo?(c(),a("video",{key:1,class:"thumb-img mr-4",loop:"",muted:"",controls:"",src:e.media},null,8,["src"])):s("",!0),t("div",v,[t("h2",x,l(e.title),1),t("p",w,[o(l(e.description)+" ",1),d(e.$slots,"default",{},void 0,!0)]),t("a",{href:e.link,class:"bg-green-400 hover:bg-green-500 active:bg-green-600 focus:outline-none mt-5 p-2 pr-8 font-semibold inline-flex cursor-pointer select-none w-min"},[t("img",{src:e.downloadIcon,class:"w-full mr-1"},null,8,["src"]),y],8,["href"])])])]))));p.render=k,p.__scopeId="data-v-79837328";var D=e({name:"Modal",props:{show:Boolean,cancelable:{type:Boolean,default:!0}},emits:["close"],setup:(e,a)=>({close:function(){e.cancelable&&a.emit("close")}})});const M={key:0,class:"flex flex-col justify-center items-center left-0 top-0 right-0 bottom-0 fixed"},S={class:"relative z-20"};D.render=function(e,l,o,i,n,r){return e.show?(c(),a("div",M,[t("div",{onClick:l[1]||(l[1]=(...a)=>e.close&&e.close(...a)),class:"absolute left-0 top-0 right-0 bottom-0 bg-black opacity-50 z-10"}),t("div",S,[t("article",null,[d(e.$slots,"default")])])])):s("",!0)};var j=e({components:{"gd-mod":p,modal:D},setup:()=>({runInfo:"/assets/run-info.c19b60d4.webp",rgbtest:"/assets/rgb-color.b689ea44.webm",songSearch:"/assets/song-search.33c64d51.png",sumAttempts:"/assets/sum-attempts.ea76499e.png",menuShaders:"/assets/menu-shaders.3e3d3754.png",gdIcon:"/assets/gd-icon.8c20f2ea.png",tutorial1:"/assets/tutorial2.991815e3.png",tutorial3:"/assets/tutorial3.06f669b3.png",tutorial4:"/assets/tutorial4.a69ef570.png",showMenuShaderModal:m(!1)})});const G=i();n("data-v-1e342af3");const I={class:"md:flex md:justify-center bg-plain-gray-darker"},A={class:"flex flex-col"},C=t("div",{class:"bg-plain-gray-light w-full p-5 mt-5"},[t("h1",{class:"text-4xl text-white font-semibold"},"Small GD Mods"),t("h1",{class:"mt-3 text-white"},"A collection of small utility mods for Geometry Dash"),t("p",{class:"text-gray-200 mt-5 italic"},"Please read the installation instructions below! ↓")],-1),H=h('<div class="bg-plain-gray-darkish p-4 text-white my-5" data-v-1e342af3><h1 class="text-3xl" data-v-1e342af3>Other mods</h1><ul class="list-disc list-inside ml-3 mt-3" data-v-1e342af3><li data-v-1e342af3><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/every-key-jumps.dll" data-v-1e342af3>Every key jumps</a> — Allows you to play gd with almost every key in your keyboard </li><li data-v-1e342af3><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/global-clipboard.dll" data-v-1e342af3>Global clipboard</a> — Stores your object clipboard between levels <span class="text-sm italic" data-v-1e342af3>(this is now included in BetterEdit)</span></li><li data-v-1e342af3><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/crash-logger.dll" data-v-1e342af3>Crash logger</a> — Basic logger that logs crashes in a file named <span class="font-mono" data-v-1e342af3>crash-log.log</span></li><li class="max-w-3xl" data-v-1e342af3><a class="text-blue-400 hover:underline" href="https://github.com/matcool/small-gd-mods/releases/download/mods/fps-multiplier.dll" data-v-1e342af3>FPS &quot;multiplier&quot;</a> — (MHv6 extension only) Runs the gd physics multiple times a frame, letting you play with the same physics as higher fpses. Note that input delay is still the same, so this won&#39;t improve playing experience much. </li></ul></div>',1),z={id:"install-instructions",class:"bg-plain-gray-dark p-4 px-6 text-white"},B=h('<h1 class="text-4xl border-b border-gray-500 mb-4" data-v-1e342af3>Install instructions</h1><h2 id="support-server" class="text-2xl" data-v-1e342af3>Support server</h2><p data-v-1e342af3>If you&#39;re stuck or have an issue you can join here to ask</p><a class="text-blue-400 underline" href="https://discord.gg/K9Kuh3hzTC" data-v-1e342af3>https://discord.gg/K9Kuh3hzTC</a><article style="background-color:#28292d;" class="px-4 pt-2 pb-3 table rounded mt-1" data-v-1e342af3><p class="mb-2 font-medium" data-v-1e342af3>You&#39;ve been invited to join a server</p><section class="flex w-full justify-items-center" data-v-1e342af3><img class="h-12 w-auto rounded-2xl" src="https://cdn.discordapp.com/icons/822510988409831486/39b0193a75727a251bc70870fbbb8da7.webp?size=256" alt="server icon" data-v-1e342af3><p class="ml-2 mt-1 mr-14 font-bold text-base" data-v-1e342af3>GD Mods</p><a href="https://discord.gg/K9Kuh3hzTC" class="bg-green-600 hover:bg-green-700 active:bg-green-800 justify-self-end self-center px-4 py-2 ml-auto rounded" data-v-1e342af3>Join</a></section></article><h2 class="text-3xl my-2" data-v-1e342af3>Locate your Geometry Dash folder</h2>',6),K=o("The GD folder is the one that contains the "),_={class:"inline-flex bg-plain-gray-darkish h-min mx-1"},P=o(" GeometryDash.exe"),R=t("p",null,"An easy way of opening this folder is by going on your Steam library → right click on Geometry Dash → Manage → Browse local files ",-1),E=h('<h2 class="text-3xl mb-2" data-v-1e342af3>Download MinHook</h2><p class="italic text-sm" data-v-1e342af3>if you already have this dll you can skip this step</p><p data-v-1e342af3>Download <span class="font-mono" data-v-1e342af3>minhook.x32.dll</span> and place it in your GD folder (the one found in the previous step)</p><p class="mb-2" data-v-1e342af3>Note that not having this dll will make the mods <span class="font-bold text-2xl underline text-red-200" data-v-1e342af3>not work at all</span></p><a href="https://github.com/HJfod/minhook/releases/latest/download/minhook.x32.dll" class="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-black font-semibold p-2" data-v-1e342af3>Download Here</a><div class="mb-4" data-v-1e342af3></div>',6),T={class:"bg-plain-gray-dark mt-5 p-4 px-6 text-white"},L=t("h1",{class:"text-4xl border-b border-gray-500 mb-4"},"Specific instructions",-1),V=t("h3",{class:"text-2xl mt-3"},"Mega Hack v6",-1),q=t("p",null,"Place the mod you want to install in the extensions folder, which you can open by clicking here",-1),F=h('<h3 class="text-2xl mt-3" data-v-1e342af3>GD-Hackermode</h3><p data-v-1e342af3>Place the mod in the <span class="font-mono" data-v-1e342af3>GDHM-dll</span> folder, located inside your GD folder</p><h3 class="text-2xl mt-3" data-v-1e342af3>GDDLLLoader</h3><p data-v-1e342af3>Place the mod in the <span class="font-mono" data-v-1e342af3>adaf-dll</span> folder, located inside your GD folder</p><h3 class="text-2xl mt-3" data-v-1e342af3>Mega Hack v5</h3><p data-v-1e342af3>You can use Mega Hack v5 for injecting dlls, however, you&#39;ll have to do this every time you want to use the mod</p>',6),U=t("h3",{class:"text-2xl mt-3 text-gray-200"},"else",-1),J=t("p",null,[o("If you don't have a mod loader, you can join the "),t("a",{class:"text-blue-400",href:"#support-server"},"GD Mods"),o(" server and follow the installation instructions for quickldr")],-1),N=t("div",{class:"bg-plain-gray-darker h-32"},null,-1),Y=t("div",{class:"bg-plain-gray-darker text-right pr-4 pb-2"},[t("a",{href:"https://github.com/Partur1",class:"text-blue-400"},"Design from Partur")],-1),$=t("div",{class:"bg-plain-gray text-white p-4 max-w-2xl"},[o(" To customize the shader, create a file named "),t("span",{class:"font-mono"},"menu-shader.fsh"),o(" in your Resources folder with the shader you want. For a few already made shaders, checkout this thread: "),t("a",{class:"text-blue-400",href:"https://twitter.com/mateus44_/status/1412108556921344006?s=20"},"https://twitter.com/mateus44_/status/1412108556921344006?s=20"),t("div",{class:"flex flex-wrap"},[t("img",{src:"https://pbs.twimg.com/media/E5jnEKUXoAQKZuw?format=jpg&name=large",alt:"shader",class:"m-1 w-72"}),t("img",{src:"https://pbs.twimg.com/media/E5jhMUDWUAcISFj?format=jpg&name=large",alt:"shader",class:"m-1 w-72"})])],-1);r();const O=G(((e,s,l,o,d,i)=>{const n=u("gd-mod"),r=u("modal");return c(),a("div",null,[t("div",I,[t("div",A,[C,t(n,{media:e.runInfo,title:"Run Info",description:"Adds an overlay to the corner of the screen which shows info for practice mode and start pos attempts",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/run-info.dll"},null,8,["media"]),t(n,{media:e.rgbtest,isVideo:!0,title:"RGB Color Input",description:"Adds a widget to directly edit the R G and B values of a color channel",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/rgb-color-input.dll"},null,8,["media"]),t(n,{media:e.songSearch,title:"Song search",description:"Allows you to search through your saved songs in the song select dialog",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/song-search.dll"},null,8,["media"]),t(n,{media:e.menuShaders,title:"Menu shaders",description:"Replaces the background of the main menu with a custom shader, which can be customized.",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/menu-shaders.dll"},{default:G((()=>[t("span",{class:"text-blue-300 cursor-pointer hover:underline",onClick:s[1]||(s[1]=a=>e.showMenuShaderModal=!0)},"Click here to see more info.")])),_:1},8,["media"]),t(n,{media:e.sumAttempts,title:"Sum Attempts",description:"Adds a button to the levels screen that adds up all the attempts in that folder",link:"https://github.com/matcool/small-gd-mods/releases/download/mods/sum-attempts.dll"},null,8,["media"]),H,t("div",z,[B,t("p",null,[K,t("pre",_,[t("img",{src:e.gdIcon,class:"h-5"},null,8,["src"]),P])]),R,t("img",{class:"my-2 ml-2",src:e.tutorial1},null,8,["src"]),E]),t("div",T,[L,V,q,t("img",{src:e.tutorial3},null,8,["src"]),F,t("img",{src:e.tutorial4},null,8,["src"]),U,J])])]),N,Y,t(r,{show:e.showMenuShaderModal,onClose:s[2]||(s[2]=a=>e.showMenuShaderModal=!1)},{default:G((()=>[$])),_:1},8,["show"])])}));j.render=O,j.__scopeId="data-v-1e342af3";export default j;
