"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[7138],{7138:(m,a,o)=>{o.r(a),o.d(a,{CodeHighlighterDemoModule:()=>p});var l=o(6895),r=o(9859),e=o(1571),s=o(4619);let g=(()=>{class n{constructor(t){this.el=t}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.el.nativeElement)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","pCode",""]],hostAttrs:[1,"p-element"]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez]}),n})(),c=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:79,vars:0,consts:[[1,"content-section","introduction"],[1,"content-section","implementation"],[1,"first"],["pCode","","ngPreserveWhitespaces","",1,"language-css"],["pCode","","ngPreserveWhitespaces","",1,"language-markup"],["pCode","","ngPreserveWhitespaces","",1,"language-javascript"],["pCode","","ngPreserveWhitespaces","",1,"language-typescript"],[1,"content-section","documentation"],["header","Documentation"],["href","https://prismjs.com/#basic-usage"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/codehighlighter","target","_blank",1,"btn-viewsource"]],template:function(t,Z){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"h1"),e._uU(3,"CodeHighlighter"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"CodeHighlighter is an attribute directive to highlight code blocks using PrismJS"),e.qZA()()(),e.TgZ(6,"div",1)(7,"h3",2),e._uU(8,"CSS"),e.qZA(),e.TgZ(9,"pre")(10,"code",3),e.IAx(),e._uU(11,"\n.ui-table table {\n    border-collapse:collapse;\n    width: 100%;\n    table-layout: fixed;\n}\n"),e.fQ9(),e.qZA(),e._uU(12,"\n"),e.qZA(),e.TgZ(13,"h3"),e._uU(14,"HTML"),e.qZA(),e.TgZ(15,"pre")(16,"code",4),e.IAx(),e._uU(17,'\n<div id="pm" style="width:300px">\n<div>\n<div><a data-icon="pi-file">File</a></div>\n<div>\n    <ul>\n        <li><a data-icon="pi-plus">New</a>\n            <ul>\n                <li><a>Project</a></li>\n                <li><a>Other</a></li>\n            </ul>\n        </li>\n        <li><a>Open</a></li>\n        <li><a>Quit</a></li>\n    </ul>\n</div>\n</div>\n</div>\n'),e.fQ9(),e.qZA(),e._uU(18,"\n"),e.qZA(),e.TgZ(19,"h3"),e._uU(20,"Javascript"),e.qZA(),e.TgZ(21,"pre")(22,"code",5),e.IAx(),e._uU(23,"\nvar map;\n    function initMap() {\n        map = new google.maps.Map(document.getElementById('map'), {\n        center: {lat: -34.397, lng: 150.644},\n        zoom: 8\n    });\n}\n"),e.fQ9(),e.qZA(),e._uU(24,"\n"),e.qZA(),e.TgZ(25,"h3"),e._uU(26,"Typescript"),e.qZA(),e.TgZ(27,"pre")(28,"code",6),e.IAx(),e._uU(29,"\nimport {Directive, ElementRef, OnInit} from '@angular/core';\n\ndeclare var Prism: any;\n\n@Directive({\n    selector: '[pCode]'\n})\nexport class CodeHighlighter implements OnInit {\n\n    constructor(private el: ElementRef) {}\n\n    ngOnInit() {\n        Prism.highlightElement(this.el.nativeElement);\n    }\n}\n"),e.fQ9(),e.qZA(),e._uU(30,"\n"),e.qZA()(),e.TgZ(31,"div",7)(32,"p-tabView")(33,"p-tabPanel",8)(34,"h3"),e._uU(35,"PrismJS"),e.qZA(),e.TgZ(36,"pre")(37,"code",4),e.IAx(),e._uU(38,"\nnpm install prismjs --save\n"),e.fQ9(),e.qZA(),e._uU(39,"\n"),e.qZA(),e.TgZ(40,"p"),e._uU(41,"Include the javascript and a theme css from Prism. Example for angular.json configuration of a CLI project would be as follows. Refer to the PrismJS "),e.TgZ(42,"a",9),e._uU(43,"documentation"),e.qZA(),e._uU(44," for the list of available languages."),e.qZA(),e.TgZ(45,"pre")(46,"code",5),e.IAx(),e._uU(47,'\n"styles": [\n    "node_modules/prismjs/themes/prism.css",\n    //...\n],\n"scripts": [\n    "node_modules/prismjs/prism.js",\n    //...\n]\n'),e.fQ9(),e.qZA(),e._uU(48,"\n"),e.qZA(),e.TgZ(49,"h3"),e._uU(50,"Import"),e.qZA(),e.TgZ(51,"pre")(52,"code",6),e.IAx(),e._uU(53,"\nimport {CodeHighlighterModule} from 'primeng/codehighlighter';\n"),e.fQ9(),e.qZA(),e._uU(54,"\n"),e.qZA(),e.TgZ(55,"h3"),e._uU(56,"Getting Started"),e.qZA(),e.TgZ(57,"p"),e._uU(58,"CodeHighlighter is applied to a code element with [pCode] directive. The <code> should have a style class having language- prefix to specify the language to highlight. See Prismjs docs for the list of available languages. An example block with css code would be as follows."),e.qZA(),e.TgZ(59,"p"),e._uU(60," It is important to note that in order to use any of the the non-default languages ( markup, css, clike and javascript) you add an import statement for the specific language, for most in the app module."),e.qZA(),e.TgZ(61,"h3"),e._uU(62,"Language Import"),e.qZA(),e.TgZ(63,"pre")(64,"code",6),e.IAx(),e._uU(65,"\n/* Import the language you need to highlight */\nimport 'prismjs/components/prism-sql.js';\n"),e.fQ9(),e.qZA(),e._uU(66,"\n"),e.qZA(),e.TgZ(67,"pre")(68,"code",4),e.IAx(),e._uU(69,'\n<pre>\n<code class="language-css" pCode>\n.ui-table table {\n    border-collapse:collapse;\n    width: 100%;\n    table-layout: fixed;\n}\n</code>\n</pre>\n'),e.fQ9(),e.qZA(),e._uU(70,"\n"),e.qZA(),e.TgZ(71,"h3"),e._uU(72,"Dependencies"),e.qZA(),e.TgZ(73,"p"),e._uU(74,"Prismjs"),e.qZA()(),e.TgZ(75,"p-tabPanel",10)(76,"a",11)(77,"span"),e._uU(78,"View on GitHub"),e.qZA()()()()())},dependencies:[s.xf,s.x4,g],encapsulation:2}),n})(),d=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:c}]),r.Bz]}),n})();var h=o(1508);let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,d,h.LU,u]}),n})()}}]);