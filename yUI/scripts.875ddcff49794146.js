var _self=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var v=/\blang(?:uage)?-([\w-]+)\b/i,g=0,i={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof h?new h(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++g}),a.__id},clone:function a(e,t){var n,r,l=i.util.type(e);switch(t=t||{},l){case"Object":if(r=i.util.objId(e),t[r])return t[r];for(var o in t[r]=n={},e)e.hasOwnProperty(o)&&(n[o]=a(e[o],t));return n;case"Array":return r=i.util.objId(e),t[r]?t[r]:(t[r]=n=[],e.forEach(function(s,d){n[d]=a(s,t)}),n);default:return e}},getLanguage:function(a){for(;a&&!v.test(a.className);)a=a.parentElement;return a?(a.className.match(v)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var a=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}}},languages:{extend:function(a,e){var t=i.util.clone(i.languages[a]);for(var n in e)t[n]=e[n];return t},insertBefore:function(a,e,t,n){var r=(n=n||i.languages)[a],l={};for(var o in r)if(r.hasOwnProperty(o)){if(o==e)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=r[o])}var d=n[a];return n[a]=l,i.languages.DFS(i.languages,function(b,c){c===d&&b!=a&&(this[b]=l)}),l},DFS:function a(e,t,n,r){r=r||{};var l=i.util.objId;for(var o in e)if(e.hasOwnProperty(o)){t.call(e,o,e[o],n||o);var s=e[o],d=i.util.type(s);"Object"!==d||r[l(s)]?"Array"===d&&!r[l(s)]&&(r[l(s)]=!0,a(s,t,o,r)):(r[l(s)]=!0,a(s,t,null,r))}}},plugins:{},highlightAll:function(a,e){i.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var n={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var l,r=0;l=n.elements[r++];)i.highlightElement(l,!0===e,n.callback)},highlightElement:function(a,e,t){var n=i.util.getLanguage(a),r=i.languages[n];a.className=a.className.replace(v,"").replace(/\s+/g," ")+" language-"+n;var l=a.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(v,"").replace(/\s+/g," ")+" language-"+n);var s={element:a,language:n,grammar:r,code:a.textContent};function d(c){s.highlightedCode=c,i.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i.hooks.run("after-highlight",s),i.hooks.run("complete",s),t&&t.call(s.element)}if(i.hooks.run("before-sanity-check",s),!s.code)return i.hooks.run("complete",s),void(t&&t.call(s.element));if(i.hooks.run("before-highlight",s),s.grammar)if(e&&u.Worker){var b=new Worker(i.filename);b.onmessage=function(c){d(c.data)},b.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else d(i.highlight(s.code,s.grammar,s.language));else d(i.util.encode(s.code))},highlight:function(a,e,t){var n={code:a,grammar:e,language:t};return i.hooks.run("before-tokenize",n),n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),h.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var r=new E;return A(r,r.head,a),y(a,r,e,r.head,0),function m(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}(r)},hooks:{all:{},add:function(a,e){var t=i.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=i.hooks.all[a];if(t&&t.length)for(var r,n=0;r=t[n++];)r(e)}},Token:h};function h(a,e,t,n,r){this.type=a,this.content=e,this.alias=t,this.length=0|(n||"").length,this.greedy=!!r}function y(a,e,t,n,r,l,o){for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var d=t[s];d=Array.isArray(d)?d:[d];for(var b=0;b<d.length;++b){if(o&&o==s+","+b)return;var c=d[b],q=c.inside,B=!!c.lookbehind,P=!!c.greedy,z=0,H=c.alias;if(P&&!c.pattern.global){var Z=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,Z+"g")}c=c.pattern||c;for(var p=n.next,w=r;p!==e.tail;w+=p.value.length,p=p.next){var $=p.value;if(e.length>a.length)return;if(!($ instanceof h)){var C=1;if(P&&p!=e.tail.prev){if(c.lastIndex=w,!(f=c.exec(a)))break;var _=f.index+(B&&f[1]?f[1].length:0),I=f.index+f[0].length,x=w;for(x+=p.value.length;_>=x;)x+=(p=p.next).value.length;if(w=x-=p.value.length,p.value instanceof h)continue;for(var k=p;k!==e.tail&&(x<I||"string"==typeof k.value&&!k.prev.value.greedy);k=k.next)C++,x+=k.value.length;C--,$=a.slice(w,x),f.index-=w}else{c.lastIndex=0;var f=c.exec($)}if(!f){if(l)break;continue}B&&(z=f[1]?f[1].length:0),I=(_=f.index+z)+(f=f[0].slice(z)).length;var T=$.slice(0,_),M=$.slice(I),j=p.prev;if(T&&(j=A(e,j,T),w+=T.length),F(e,j,C),p=A(e,j,new h(s,q?i.tokenize(f,q):f,H,f,P)),M&&A(e,p,M),C>1&&y(a,e,t,p.prev,w,!0,s+","+b),l)break}}}}}function E(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function A(a,e,t){var n=e.next,r={value:t,prev:e,next:n};return e.next=r,n.prev=r,a.length++,r}function F(a,e,t){for(var n=e.next,r=0;r<t&&n!==a.tail;r++)n=n.next;e.next=n,n.prev=e,a.length-=r}if(u.Prism=i,h.stringify=function a(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var n="";return e.forEach(function(d){n+=a(d,t)}),n}var r={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),i.hooks.run("wrap",r);var o="";for(var s in r.attributes)o+=" "+s+'="'+(r.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+o+">"+r.content+"</"+r.tag+">"},!u.document)return u.addEventListener&&(i.disableWorkerMessageHandler||u.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,r=e.immediateClose;u.postMessage(i.highlight(e.code,i.languages[t],t)),r&&u.close()},!1)),i;var S=i.util.currentScript();function O(){i.manual||i.highlightAll()}if(S&&(i.filename=S.src,S.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var D=document.readyState;"loading"===D||"interactive"===D&&S&&S.defer?document.addEventListener("DOMContentLoaded",O):window.requestAnimationFrame?window.requestAnimationFrame(O):window.setTimeout(O,16)}return i}(_self);typeof module<"u"&&module.exports&&(module.exports=Prism),typeof global<"u"&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(u){"entity"===u.type&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(v,g){var i={};i["language-"+g]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[g]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var h={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};h["language-"+g]={pattern:/[\s\S]+/,inside:Prism.languages[g]};var y={};y[v]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return v}),"i"),lookbehind:!0,greedy:!0,inside:h},Prism.languages.insertBefore("markup","cdata",y)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,function(u){var v=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+v.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+v.source+")*?(?=\\s*\\{)"),string:{pattern:v,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var g=u.languages.markup;g&&(g.tag.addInlined("style","css"),u.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:g.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:u.languages.css}},alias:"language-css"}},g.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript,typeof self>"u"||!self.Prism||!self.document||!document.querySelector||(self.Prism.fileHighlight=function(u){u=u||document;var v={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(u.querySelectorAll("pre[data-src]")).forEach(function(g){if(!g.hasAttribute("data-src-loaded")){for(var h,i=g.getAttribute("data-src"),y=g,E=/\blang(?:uage)?-([\w-]+)\b/i;y&&!E.test(y.className);)y=y.parentNode;if(y&&(h=(g.className.match(E)||[,""])[1]),!h){var A=(i.match(/\.(\w+)$/)||[,""])[1];h=v[A]||A}var F=document.createElement("code");F.className="language-"+h,g.textContent="",F.textContent="Loading\u2026",g.appendChild(F);var m=new XMLHttpRequest;m.open("GET",i,!0),m.onreadystatechange=function(){4==m.readyState&&(m.status<400&&m.responseText?(F.textContent=m.responseText,Prism.highlightElement(F),g.setAttribute("data-src-loaded","")):F.textContent=m.status>=400?"\u2716 Error "+m.status+" while fetching file: "+m.statusText:"\u2716 Error: File does not exist or is empty")},m.send(null)}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()})),Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript;