if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const l=e=>n(e,a),o={module:{uri:a},exports:t,require:l};s[a]=Promise.all(i.map((e=>o[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-13d6fed4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180.21bf94a3.png",revision:null},{url:"assets/favicon-196.63d77d28.png",revision:null},{url:"assets/globe-500px.b690b84c.jpeg",revision:null},{url:"assets/index.013121a2.css",revision:null},{url:"assets/index.5596b97b.js",revision:null},{url:"assets/vendor.93ce5b75.js",revision:null},{url:"index.html",revision:"d5d424901894bae1df8f69a69ba2cfcc"},{url:"manifest.webmanifest",revision:"bdcaab67eaa1cb738a804deaff58efd6"},{url:"manifest-icon-192.maskable.png",revision:"99992b094b0f9016e112b0dbbaecf0e2"},{url:"manifest-icon-512.maskable.png",revision:"e8ed8f93e9ffa374f1c688d121e600fa"},{url:"manifest.webmanifest",revision:"bdcaab67eaa1cb738a804deaff58efd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("https://inshortsapi.vercel.app/news?category=",new e.NetworkFirst,"GET"),e.registerRoute(/\/\/inshortsapi.vercel.app\/news?category=\/[a-z-]+\/?/,new e.NetworkFirst,"GET")}));
