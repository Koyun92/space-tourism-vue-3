(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26834acd"],{"0201":function(e,n,t){e.exports=t.p+"img/image-europa.222080ea.png"},"0678":function(e,n,t){"use strict";t("bd8e")},"0cb2":function(e,n,t){var r=t("e330"),a=t("7b0b"),i=Math.floor,o=r("".charAt),c=r("".replace),s=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,t,r,d,p){var g=t+e.length,f=r.length,v=l;return void 0!==d&&(d=a(d),v=u),c(p,v,(function(a,c){var u;switch(o(c,0)){case"$":return"$";case"&":return e;case"`":return s(n,0,t);case"'":return s(n,g);case"<":u=d[s(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>f){var p=i(l/10);return 0===p?a:p<=f?void 0===r[p-1]?o(c,1):r[p-1]+o(c,1):a}u=r[l-1]}return void 0===u?"":u}))}},"107c":function(e,n,t){var r=t("d039"),a=t("da84"),i=a.RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,n,t){var r=t("da84"),a=t("c65b"),i=t("825a"),o=t("1626"),c=t("c6b6"),s=t("9263"),u=r.TypeError;e.exports=function(e,n){var t=e.exec;if(o(t)){var r=a(t,e,n);return null!==r&&i(r),r}if("RegExp"===c(e))return a(s,e,n);throw u("RegExp#exec called on incompatible receiver")}},"26c6":function(e,n,t){"use strict";t.r(n);t("99af"),t("ac1f"),t("5319"),t("b0c0");var r=t("7a23"),a={class:"crewTech crew subpage__wrapper"},i=Object(r["h"])("div",{class:"subpage__title"},[Object(r["h"])("span",null,"01"),Object(r["h"])("h1",null,"meet your crew")],-1),o=["src","alt"];function c(e,n,c,s,u,l){var d=Object(r["C"])("subpage"),p=Object(r["C"])("swiper-slide"),g=Object(r["C"])("swiper");return Object(r["x"])(),Object(r["g"])("div",a,[i,Object(r["h"])("img",{class:"subpage__img subpage__img--crew",src:t("8e82")("./assets".concat(e.$route.path,"/image-").concat(u.data[this.currentIndex].name.replace(" ","-").toLowerCase(),".png")),alt:u.data.name},null,8,o),Object(r["k"])(g,{ref:"mySwiper",pagination:u.pagination,modules:u.modules,class:"mySwiper","slides-per-view":1,"space-between":50,onSwiper:u.onSwiper,onSlideChange:l.onSlide},{default:Object(r["H"])((function(){return[(Object(r["x"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(u.data,(function(e){return Object(r["x"])(),Object(r["e"])(p,{key:e.name},{default:Object(r["H"])((function(){return[Object(r["k"])(d,{data:e},null,8,["data"])]})),_:2},1024)})),128))]})),_:1},8,["pagination","modules","onSwiper","onSlideChange"])])}var s=t("1725"),u=t("8349"),l=t("f92d"),d=(t("bbe3"),t("6417"),t("a1bf"),t("4da1")),p={name:"Crew",mounted:function(){},beforeCreate:function(){document.body.className="crew-body"},beforeUnmount:function(){document.body.classList.remove("crew-body")},components:{Swiper:u["a"],SwiperSlide:u["b"],subpage:l["a"]},data:function(){var e=function(e){console.log(e),e.observerUpdate},n=function(e){console.log(e.activeIndex),e.updateSlidesClasses()};return{data:s.crew,currentIndex:0,onSwiper:e,onSlideChange:n,pagination:{clickable:!0},modules:[d["a"]]}},methods:{onSlide:function(e){console.log(e.activeIndex),this.currentIndex=e.activeIndex}}},g=(t("0678"),t("6b0d")),f=t.n(g);const v=f()(p,[["render",c]]);n["default"]=v},3061:function(e,n,t){e.exports=t.p+"img/image-douglas-hurley.d812b585.png"},"32ca":function(e,n,t){e.exports=t.p+"img/image-titan.be591595.png"},"4ee0":function(e,n,t){e.exports=t.p+"img/image-victor-glover.9015628a.png"},5319:function(e,n,t){"use strict";var r=t("2ba4"),a=t("c65b"),i=t("e330"),o=t("d784"),c=t("d039"),s=t("825a"),u=t("1626"),l=t("5926"),d=t("50c4"),p=t("577e"),g=t("1d80"),f=t("8aa5"),v=t("dc4a"),x=t("0cb2"),b=t("14c3"),m=t("b622"),h=m("replace"),w=Math.max,I=Math.min,O=i([].concat),y=i([].push),S=i("".indexOf),j=i("".slice),E=function(e){return void 0===e?e:String(e)},k=function(){return"$0"==="a".replace(/./,"$0")}(),$=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),_=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,n,t){var i=$?"$":"$0";return[function(e,t){var r=g(this),i=void 0==e?void 0:v(e,h);return i?a(i,e,r,t):a(n,p(r),e,t)},function(e,a){var o=s(this),c=p(e);if("string"==typeof a&&-1===S(a,i)&&-1===S(a,"$<")){var g=t(n,o,c,a);if(g.done)return g.value}var v=u(a);v||(a=p(a));var m=o.global;if(m){var h=o.unicode;o.lastIndex=0}var k=[];while(1){var $=b(o,c);if(null===$)break;if(y(k,$),!m)break;var _=p($[0]);""===_&&(o.lastIndex=f(c,d(o.lastIndex),h))}for(var C="",R=0,A=0;A<k.length;A++){$=k[A];for(var T=p($[0]),N=w(I(l($.index),c.length),0),U=[],M=1;M<$.length;M++)y(U,E($[M]));var D=$.groups;if(v){var B=O([T],U,N,c);void 0!==D&&y(B,D);var K=p(r(a,void 0,B))}else K=x(T,c,N,U,D,a);N>=R&&(C+=j(c,R,N)+K,R=N+T.length)}return C+j(c,R)}]}),!_||!k||$)},"8aa5":function(e,n,t){"use strict";var r=t("6547").charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},"8e82":function(e,n,t){var r={"./assets/crew/image-anousheh-ansari.png":"d811","./assets/crew/image-douglas-hurley.png":"3061","./assets/crew/image-mark-shuttleworth.png":"979d","./assets/crew/image-victor-glover.png":"4ee0","./assets/destination/image-europa.png":"0201","./assets/destination/image-mars.png":"f545","./assets/destination/image-moon.png":"a6e4","./assets/destination/image-titan.png":"32ca","./assets/logo.png":"cf05"};function a(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="8e82"},9263:function(e,n,t){"use strict";var r=t("c65b"),a=t("e330"),i=t("577e"),o=t("ad6d"),c=t("9f7f"),s=t("5692"),u=t("7c73"),l=t("69f3").get,d=t("fce3"),p=t("107c"),g=s("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,v=f,x=a("".charAt),b=a("".indexOf),m=a("".replace),h=a("".slice),w=function(){var e=/a/,n=/b*/g;return r(f,e,"a"),r(f,n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),I=c.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],y=w||O||I||d||p;y&&(v=function(e){var n,t,a,c,s,d,p,y=this,S=l(y),j=i(e),E=S.raw;if(E)return E.lastIndex=y.lastIndex,n=r(v,E,j),y.lastIndex=E.lastIndex,n;var k=S.groups,$=I&&y.sticky,_=r(o,y),C=y.source,R=0,A=j;if($&&(_=m(_,"y",""),-1===b(_,"g")&&(_+="g"),A=h(j,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==x(j,y.lastIndex-1))&&(C="(?: "+C+")",A=" "+A,R++),t=new RegExp("^(?:"+C+")",_)),O&&(t=new RegExp("^"+C+"$(?!\\s)",_)),w&&(a=y.lastIndex),c=r(f,$?t:y,A),$?c?(c.input=h(c.input,R),c[0]=h(c[0],R),c.index=y.lastIndex,y.lastIndex+=c[0].length):y.lastIndex=0:w&&c&&(y.lastIndex=y.global?c.index+c[0].length:a),O&&c&&c.length>1&&r(g,c[0],t,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&k)for(c.groups=d=u(null),s=0;s<k.length;s++)p=k[s],d[p[0]]=c[p[1]];return c}),e.exports=v},"979d":function(e,n,t){e.exports=t.p+"img/image-mark-shuttleworth.995026f4.png"},"9f7f":function(e,n,t){var r=t("d039"),a=t("da84"),i=a.RegExp,o=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=o||r((function(){return!i("a","y").sticky})),s=o||r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:o}},a6e4:function(e,n,t){e.exports=t.p+"img/image-moon.56ed2a5e.png"},ac1f:function(e,n,t){"use strict";var r=t("23e7"),a=t("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,n,t){"use strict";var r=t("825a");e.exports=function(){var e=r(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},bd8e:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},d784:function(e,n,t){"use strict";t("ac1f");var r=t("e330"),a=t("6eeb"),i=t("9263"),o=t("d039"),c=t("b622"),s=t("9112"),u=c("species"),l=RegExp.prototype;e.exports=function(e,n,t,d){var p=c(e),g=!o((function(){var n={};return n[p]=function(){return 7},7!=""[e](n)})),f=g&&!o((function(){var n=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return n=!0,null},t[p](""),!n}));if(!g||!f||t){var v=r(/./[p]),x=n(p,""[e],(function(e,n,t,a,o){var c=r(e),s=n.exec;return s===i||s===l.exec?g&&!o?{done:!0,value:v(n,t,a)}:{done:!0,value:c(t,n,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(l,p,x[1])}d&&s(l[p],"sham",!0)}},d811:function(e,n,t){e.exports=t.p+"img/image-anousheh-ansari.a342d00e.png"},f545:function(e,n,t){e.exports=t.p+"img/image-mars.748179d1.png"},fce3:function(e,n,t){var r=t("d039"),a=t("da84"),i=a.RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-26834acd.b8e71040.js.map