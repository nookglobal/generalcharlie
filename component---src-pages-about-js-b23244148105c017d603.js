(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return p});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(162),c=n(163),s=n(158),m=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(s.a,{pageTitle:t.aboutJson.title}),r.a.createElement(c.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.aboutJson.content.childMarkdownRemark.html}})))};m.propTypes={data:o.a.object.isRequired},t.default=m;var p="3981516706"},153:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(34),c=n.n(l);n.d(t,"a",function(){return c.a});n(154);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(151),c=n.n(l),s=n(152),m=n(156);function p(){var e=c()(["\n    font-size: ",";\n  "]);return p=function(){return e},e}function u(){var e=c()(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return u=function(){return e},e}var d=s.c.span(u(),function(e){var t=e.size;return function(){switch(t){case"large":return"400";default:return"500"}}},function(e){var t=e.size;return function(){switch(t){case"large":return"3.2rem";default:return"2rem"}}},m.a.TABLET(p(),function(e){var t=e.size;return function(){switch(t){case"large":return"2.6rem";default:return"2rem"}}})),f=function(e){var t=e.children,n=e.as,a=void 0===n?"span":n,i=e.size;return r.a.createElement(d,{as:a,size:i},t)};f.propTypes={children:o.a.string.isRequired,as:o.a.string,size:o.a.oneOf(["large"])};t.a=f},156:function(e,t,n){"use strict";var a=n(151),r=n.n(a),i=(n(78),n(56),n(36),n(165),n(152)),o={DESKTOP:992,TABLET:768,PHONE:376};function l(){var e=r()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return l=function(){return e},e}function c(){var e=r()(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return c=function(){return e},e}var s=Object.keys(o).reduce(function(e,t){return e[t]=function(){return Object(i.b)(c(),o[t]/16,i.b.apply(void 0,arguments))},e["MIN_"+t]=function(){return Object(i.b)(l(),o[t]/16,i.b.apply(void 0,arguments))},e},{});t.a=s},157:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="#f90000"},158:function(e,t,n){"use strict";n(35);var a=n(161),r=n(0),i=n.n(r),o=n(2),l=n.n(o),c=n(164),s=n(153),m=n(18),p=function(e){var t=e.siteTitle,n=e.siteDescription,a=e.siteUrl,r=e.prefix,o=e.pageTitle,l=e.pageTitleFull,s=void 0===l?o?t+": "+o:t:l,m=e.themeColor,p=e.social,u=e.imageUrl,d=e.location,f=e.canonical,g=void 0===f?a+r+(d.pathname||""):f;return i.a.createElement(c.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:t+r,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:s,property:"og:title"}),i.a.createElement("meta",{content:s,name:"twitter:title"}),i.a.createElement("title",null,s),i.a.createElement("meta",{content:n,name:"description"}),i.a.createElement("meta",{content:n,property:"og:description"}),i.a.createElement("meta",{content:n,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:m,name:"theme-color"}),i.a.createElement("meta",{content:t+r,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:t+r,property:"og:site_name"}),i.a.createElement("meta",{content:p.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+p.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+p.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:s,name:"twitter:text:title"}),i.a.createElement("meta",{content:g,property:"og:url"}),i.a.createElement("meta",{content:g,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:g}),i.a.createElement("meta",{content:u||a+r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:u||a+r+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:u||a+r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:m,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:r+"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:r+"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:r+"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:r+"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:r+"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:r+"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:r+"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:r+"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.location,n=e.canonical,a=e.siteUrl,r=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:n,name:r||i,alternateName:e.pageTitleFull}];return r&&"/"!==t.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:i}},{"@type":"ListItem",position:2,item:{"@id":n,name:r}}]}),o}({location:d,canonical:g,siteUrl:a,pageTitle:o,siteTitle:t,pageTitleFull:s}))))};p.propTypes={siteTitle:l.a.string,prefix:l.a.string,siteTitleShort:l.a.string,siteDescription:l.a.string,siteUrl:l.a.string,themeColor:l.a.string,social:l.a.objectOf(l.a.string),imageUrl:l.a.string,canonical:l.a.string,pageTitle:l.a.string,pageTitleFull:l.a.string,location:l.a.object.isRequired};t.a=function(e){return i.a.createElement(s.b,{query:"3142784422",render:function(t){return i.a.createElement(m.Location,null,function(n){var a=n.location;return i.a.createElement(p,Object.assign({},t.site.siteMetadata,e,{location:a}))})},data:a})}},159:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"General Charlie"}}}}},160:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(57),c=n(4),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},161:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"General Charlie",prefix:"/generalcharlie",siteTitleShort:"GeneralCharlie",siteDescription:"General Charlie Cafe",siteUrl:"https://nookglobal.github.io",themeColor:"#000",social:{twitter:"generalcharliecrowsnest",fbAppId:"generalcharliecrowsnest"}}}}}},162:function(e,t,n){"use strict";n(35);var a=n(159),r=n(0),i=n.n(r),o=n(2),l=n.n(o),c=n(153),s=n(158),m=n(41),p=n(151),u=n.n(p),d=n(152);function f(){var e=u()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return f=function(){return e},e}var g=d.c.header(f()),h=n(155);function E(){var e=u()(["\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n\n    li {\n      text-transform: uppercase;\n      font-size: 1.3rem;\n\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n"]);return E=function(){return e},e}var b=d.c.nav(E()),y=function(){return i.a.createElement(b,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/fabe/gatsby-universal"},"GitHub"))))},v=m.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),x=function(e){var t=e.title;return i.a.createElement(v,null,i.a.createElement(g,null,i.a.createElement(c.a,{to:"/"},i.a.createElement(h.a,{as:"h1"},t)),i.a.createElement(y,null)))};x.propTypes={title:l.a.string.isRequired};var w=x,k=n(157);function T(){var e=u()(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n']);return T=function(){return e},e}var q=Object(d.a)(T(),k.a,k.a),z=function(e){var t=e.data,n=e.children;return i.a.createElement("div",null,i.a.createElement(q,null),i.a.createElement(s.a,null),i.a.createElement(w,{title:t.site.siteMetadata.siteTitle}),n)};z.propTypes={children:l.a.node.isRequired,data:l.a.object.isRequired};var j=function(e){return i.a.createElement(c.b,{query:"2302781957",render:function(t){return i.a.createElement(z,Object.assign({data:t},e))},data:a})};j.propTypes={children:l.a.node.isRequired};t.a=j},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),o=n.n(i),l=n(151),c=n.n(l);function s(){var e=c()(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n"]);return s=function(){return e},e}var m=n(152).c.div(s()),p=function(e){var t=e.children;return r.a.createElement(m,null,t)};p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-about-js-b23244148105c017d603.js.map