"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[1114],{7371:(A,_,o)=>{o.d(_,{Q:()=>M,s:()=>D});var t=o(1571),a=o(6895),e=o(8476),v=o(3421),p=o(7340),T=o(4174);function d(l,r){if(1&l&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&l){const n=t.oxw(2);t.uIk("id",n.id+"_header"),t.xp6(1),t.Oqu(n.header)}}function u(l,r){1&l&&t.GkF(0)}function c(l,r){}function k(l,r){1&l&&t.YNc(0,c,0,0,"ng-template")}function f(l,r){if(1&l){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(Z){t.CHM(n);const g=t.oxw(2);return t.KtG(g.onIconClick(Z))})("keydown.enter",function(Z){t.CHM(n);const g=t.oxw(2);return t.KtG(g.onIconClick(Z))}),t._UZ(1,"span"),t.qZA()}if(2&l){const n=t.oxw(2);t.uIk("aria-label","collapse button")("id",n.id+"-label")("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),t.xp6(1),t.Tol(n.collapsed?n.expandIcon:n.collapseIcon)}}const U=function(l,r,n){return{"p-panel-icons-start":l,"p-panel-icons-end":r,"p-panel-icons-center":n}};function b(l,r){if(1&l){const n=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(Z){t.CHM(n);const g=t.oxw();return t.KtG(g.onHeaderClick(Z))}),t.YNc(1,d,2,2,"span",7),t.Hsn(2,1),t.YNc(3,u,1,0,"ng-container",4),t.TgZ(4,"div",8),t.YNc(5,k,1,0,null,4),t.YNc(6,f,2,6,"button",9),t.qZA()()}if(2&l){const n=t.oxw();t.uIk("id",n.id+"-titlebar"),t.xp6(1),t.Q6J("ngIf",n.header),t.xp6(2),t.Q6J("ngTemplateOutlet",n.headerTemplate),t.xp6(1),t.Q6J("ngClass",t.kEZ(6,U,"start"===n.iconPos,"end"===n.iconPos,"center"===n.iconPos)),t.xp6(1),t.Q6J("ngTemplateOutlet",n.iconTemplate),t.xp6(1),t.Q6J("ngIf",n.toggleable)}}function C(l,r){1&l&&t.GkF(0)}function y(l,r){1&l&&t.GkF(0)}function q(l,r){if(1&l&&(t.TgZ(0,"div",12),t.Hsn(1,2),t.YNc(2,y,1,0,"ng-container",4),t.qZA()),2&l){const n=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",n.footerTemplate)}}const x=["*",[["p-header"]],[["p-footer"]]],w=function(l,r){return{"p-panel p-component":!0,"p-panel-toggleable":l,"p-panel-expanded":r}},P=function(l){return{transitionParams:l,height:"0",opacity:"0"}},I=function(l){return{value:"hidden",params:l}},s=function(l){return{transitionParams:l,height:"*",opacity:"1"}},m=function(l){return{value:"visible",params:l}},h=["*","p-header","p-footer"];let S=0,D=(()=>{class l{constructor(n){this.el=n,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new t.vpe,this.onBeforeToggle=new t.vpe,this.onAfterToggle=new t.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+S++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"content":default:this.contentTemplate=n.template;break;case"footer":this.footerTemplate=n.template;break;case"icons":this.iconTemplate=n.template}})}onHeaderClick(n){"header"===this.toggler&&this.toggle(n)}onIconClick(n){"icon"===this.toggler&&this.toggle(n)}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(n):this.collapse(n)),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(n){this.animating=!1,this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed})}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(t.SBq))},l.\u0275cmp=t.Xpm({type:l,selectors:[["p-panel"]],contentQueries:function(n,i,Z){if(1&n&&(t.Suo(Z,e.$_,5),t.Suo(Z,e.jx,4)),2&n){let g;t.iGM(g=t.CRH())&&(i.footerFacet=g.first),t.iGM(g=t.CRH())&&(i.templates=g)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:h,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(n,i){1&n&&(t.F$t(x),t.TgZ(0,"div",0),t.YNc(1,b,7,10,"div",1),t.TgZ(2,"div",2),t.NdJ("@panelContent.done",function(g){return i.onToggleDone(g)}),t.TgZ(3,"div",3),t.Hsn(4),t.YNc(5,C,1,0,"ng-container",4),t.qZA(),t.YNc(6,q,3,1,"div",5),t.qZA()()),2&n&&(t.Tol(i.styleClass),t.Q6J("ngClass",t.WLB(12,w,i.toggleable,!i.collapsed&&i.toggleable))("ngStyle",i.style),t.uIk("id",i.id),t.xp6(1),t.Q6J("ngIf",i.showHeader),t.xp6(1),t.Q6J("@panelContent",i.collapsed?t.VKq(17,I,t.VKq(15,P,i.animating?i.transitionOptions:"0ms")):t.VKq(21,m,t.VKq(19,s,i.animating?i.transitionOptions:"0ms"))),t.uIk("id",i.id+"-content")("aria-hidden",i.collapsed)("aria-labelledby",i.id+"-titlebar"),t.xp6(3),t.Q6J("ngTemplateOutlet",i.contentTemplate),t.xp6(1),t.Q6J("ngIf",i.footerFacet||i.footerTemplate))},dependencies:[a.mk,a.O5,a.tP,a.PC,T.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,p.X$)("panelContent",[(0,p.SB)("hidden",(0,p.oB)({height:"0"})),(0,p.SB)("void",(0,p.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,p.SB)("visible",(0,p.oB)({height:"*"})),(0,p.eR)("visible <=> hidden",[(0,p.jt)("{{transitionParams}}")]),(0,p.eR)("void => hidden",(0,p.jt)("{{transitionParams}}")),(0,p.eR)("void => visible",(0,p.jt)("{{transitionParams}}"))])]},changeDetection:0}),l})(),M=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[a.ez,e.m8,v.T,e.m8]}),l})()},3427:(A,_,o)=>{o.d(_,{Q:()=>t.Q});var t=o(7371)},7381:(A,_,o)=>{o.d(_,{a:()=>T,h:()=>p});var t=o(6895),a=o(1571);const e=["code"],v=["*"];let p=(()=>{class d{constructor(c){this.el=c,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return d.\u0275fac=function(c){return new(c||d)(a.Y36(a.SBq))},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-code"]],viewQuery:function(c,k){if(1&c&&a.Gf(e,5),2&c){let f;a.iGM(f=a.CRH())&&(k.codeViewChild=f.first)}},inputs:{lang:"lang"},ngContentSelectors:v,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(c,k){1&c&&(a.F$t(),a.TgZ(0,"pre",0)(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA()()),2&c&&a.Q6J("ngClass","language-"+k.lang)},dependencies:[t.mk],encapsulation:2}),d})(),T=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=a.oAB({type:d}),d.\u0275inj=a.cJS({imports:[t.ez]}),d})()},1114:(A,_,o)=>{o.r(_),o.d(_,{SkeletonDemoModule:()=>I});var t=o(6895),a=o(9859),e=o(1571),v=o(485),p=o(4619),T=o(6310),d=o(951),u=o(7381),c=o(3032);function k(s,m){1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Code"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Name"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Category"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Quantity"),e.qZA()())}function f(s,m){1&s&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-skeleton"),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"p-skeleton"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"p-skeleton"),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"p-skeleton"),e.qZA()())}function U(s,m){1&s&&e._UZ(0,"iframe",55)}const b=function(){return["/theming"]};let C=(()=>{class s{ngOnInit(){this.products=new Array(5)}}return s.\u0275fac=function(h){return new(h||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:280,vars:3,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","skeleton","stackblitz","skeleton-demo"],[1,"content-section","implementation"],[1,"card"],[1,"grid","formgrid"],[1,"field","col-12","md:col-6"],["styleClass","mb-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height","2rem","styleClass","mb-2"],["width","10rem","height","4rem"],["styleClass","mb-2","borderRadius","16px"],["width","10rem","styleClass","mb-2","borderRadius","16px"],["width","5rem","styleClass","mb-2","borderRadius","16px"],["height","2rem","styleClass","mb-2","borderRadius","16px"],["width","10rem","height","4rem","borderRadius","16px"],[1,"mt-3"],[1,"flex","align-items-end"],["size","2rem","styleClass","mr-2"],["size","3rem","styleClass","mr-2"],["size","4rem","styleClass","mr-2"],["size","5rem"],["shape","circle","size","2rem","styleClass","mr-2"],["shape","circle","size","3rem","styleClass","mr-2"],["shape","circle","size","4rem","styleClass","mr-2"],["shape","circle","size","5rem"],[1,"field","col-12","md:col-6","md:pr-6","pr-0"],[1,"custom-skeleton","p-4"],[1,"flex","mb-3"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-content-between","mt-3"],["width","4rem","height","2rem"],[1,"m-0","o-0"],[1,"mb-3"],[1,"flex"],[2,"flex","1"],["width","100%","styleClass","mb-2"],["width","75%"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/skeleton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-skeleton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-skeleton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(h,S){1&h&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Skeleton"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Skeleton is a placeholder to display instead of the actual content."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"h5"),e._uU(12,"Rectangle"),e.qZA(),e._UZ(13,"p-skeleton",7)(14,"p-skeleton",8)(15,"p-skeleton",9)(16,"p-skeleton",10)(17,"p-skeleton",11),e.qZA(),e.TgZ(18,"div",6)(19,"h5"),e._uU(20,"Rounded"),e.qZA(),e._UZ(21,"p-skeleton",12)(22,"p-skeleton",13)(23,"p-skeleton",14)(24,"p-skeleton",15)(25,"p-skeleton",16),e.qZA(),e.TgZ(26,"div",6)(27,"h5",17),e._uU(28,"Square"),e.qZA(),e.TgZ(29,"div",18),e._UZ(30,"p-skeleton",19)(31,"p-skeleton",20)(32,"p-skeleton",21)(33,"p-skeleton",22),e.qZA()(),e.TgZ(34,"div",6)(35,"h5",17),e._uU(36,"Circle"),e.qZA(),e.TgZ(37,"div",18),e._UZ(38,"p-skeleton",23)(39,"p-skeleton",24)(40,"p-skeleton",25)(41,"p-skeleton",26),e.qZA()()()(),e.TgZ(42,"div",4)(43,"div",5)(44,"div",27)(45,"h5"),e._uU(46,"Card"),e.qZA(),e.TgZ(47,"div",28)(48,"div",29),e._UZ(49,"p-skeleton",25),e.TgZ(50,"div"),e._UZ(51,"p-skeleton",8)(52,"p-skeleton",9)(53,"p-skeleton",30),e.qZA()(),e._UZ(54,"p-skeleton",31),e.TgZ(55,"div",32),e._UZ(56,"p-skeleton",33)(57,"p-skeleton",33),e.qZA()()(),e.TgZ(58,"div",6)(59,"h5"),e._uU(60,"List"),e.qZA(),e.TgZ(61,"div",28)(62,"ul",34)(63,"li",35)(64,"div",36),e._UZ(65,"p-skeleton",25),e.TgZ(66,"div",37),e._UZ(67,"p-skeleton",38)(68,"p-skeleton",39),e.qZA()()(),e.TgZ(69,"li",35)(70,"div",36),e._UZ(71,"p-skeleton",25),e.TgZ(72,"div",37),e._UZ(73,"p-skeleton",38)(74,"p-skeleton",39),e.qZA()()(),e.TgZ(75,"li",35)(76,"div",36),e._UZ(77,"p-skeleton",25),e.TgZ(78,"div",37),e._UZ(79,"p-skeleton",38)(80,"p-skeleton",39),e.qZA()()(),e.TgZ(81,"li")(82,"div",36),e._UZ(83,"p-skeleton",25),e.TgZ(84,"div",37),e._UZ(85,"p-skeleton",38)(86,"p-skeleton",39),e.qZA()()()()()()(),e.TgZ(87,"h5"),e._uU(88,"DataTable"),e.qZA(),e.TgZ(89,"p-table",40),e.YNc(90,k,9,0,"ng-template",41),e.YNc(91,f,9,0,"ng-template",42),e.qZA()()(),e.TgZ(92,"div",43)(93,"p-tabView")(94,"p-tabPanel",44)(95,"h5"),e._uU(96,"Import"),e.qZA(),e.TgZ(97,"app-code",45),e.IAx(),e._uU(98,"\nimport {SkeletonModule} from 'primeng/skeleton';\n"),e.fQ9(),e.qZA(),e.TgZ(99,"h5"),e._uU(100,"Getting Started"),e.qZA(),e.TgZ(101,"p"),e._uU(102,"Skeleton displays a rectangle in its simplest form."),e.qZA(),e.TgZ(103,"app-code",46),e.IAx(),e._uU(104,"\n<p-skeleton></p-skeleton>\n"),e.fQ9(),e.qZA(),e.TgZ(105,"h5"),e._uU(106,"Circle"),e.qZA(),e.TgZ(107,"p"),e._uU(108,"The other option is the circle by setting "),e.TgZ(109,"i"),e._uU(110,"shape"),e.qZA(),e._uU(111,' property as "circle".'),e.qZA(),e.TgZ(112,"app-code",46),e.IAx(),e._uU(113,'\n<p-skeleton shape="circle"></p-skeleton>\n'),e.fQ9(),e.qZA(),e.TgZ(114,"h5"),e._uU(115,"Size"),e.qZA(),e.TgZ(116,"p"),e._uU(117,"In order to customize the size, use "),e.TgZ(118,"i"),e._uU(119,"width"),e.qZA(),e._uU(120," and "),e.TgZ(121,"i"),e._uU(122,"height"),e.qZA(),e._uU(123," properties for rectangles and "),e.TgZ(124,"i"),e._uU(125,"size"),e.qZA(),e._uU(126," for Circle and Square shapes."),e.qZA(),e.TgZ(127,"app-code",46),e.IAx(),e._uU(128,'\n<p-skeleton width="100%" height="2rem"></p-skeleton>\n<p-skeleton shape="circle" size="50px"></p-skeleton>\n'),e.fQ9(),e.qZA(),e.TgZ(129,"h5"),e._uU(130,"Border Radius"),e.qZA(),e.TgZ(131,"p"),e._uU(132,"The default border radius of a rectangle is specified by the theme and can be overriden using the "),e.TgZ(133,"i"),e._uU(134,"borderRadius"),e.qZA(),e._uU(135," property."),e.qZA(),e.TgZ(136,"app-code",46),e.IAx(),e._uU(137,'\n<p-skeleton borderRadius="16px"></p-skeleton>\n'),e.fQ9(),e.qZA(),e.TgZ(138,"h5"),e._uU(139,"Animation"),e.qZA(),e.TgZ(140,"p"),e._uU(141,"Animation can be turned of by setting "),e.TgZ(142,"i"),e._uU(143,"animation"),e.qZA(),e._uU(144,' to "none".'),e.qZA(),e.TgZ(145,"app-code",46),e.IAx(),e._uU(146,'\n<p-skeleton animation="none"></p-skeleton>\n'),e.fQ9(),e.qZA(),e.TgZ(147,"h5"),e._uU(148,"Properties"),e.qZA(),e.TgZ(149,"div",47)(150,"table",48)(151,"thead")(152,"tr")(153,"th"),e._uU(154,"Name"),e.qZA(),e.TgZ(155,"th"),e._uU(156,"Type"),e.qZA(),e.TgZ(157,"th"),e._uU(158,"Default"),e.qZA(),e.TgZ(159,"th"),e._uU(160,"Description"),e.qZA()()(),e.TgZ(161,"tbody")(162,"tr")(163,"td"),e._uU(164,"shape"),e.qZA(),e.TgZ(165,"td"),e._uU(166,"string"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"rectangle"),e.qZA(),e.TgZ(169,"td"),e._uU(170,'Shape of the element, options are "rectangle" and "circle".'),e.qZA()(),e.TgZ(171,"tr")(172,"td"),e._uU(173,"size"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"string"),e.qZA(),e.TgZ(176,"td"),e._uU(177,"null"),e.qZA(),e.TgZ(178,"td"),e._uU(179,"Size of the Circle or Square."),e.qZA()(),e.TgZ(180,"tr")(181,"td"),e._uU(182,"width"),e.qZA(),e.TgZ(183,"td"),e._uU(184,"string"),e.qZA(),e.TgZ(185,"td"),e._uU(186,"100%"),e.qZA(),e.TgZ(187,"td"),e._uU(188,"Width of the element."),e.qZA()(),e.TgZ(189,"tr")(190,"td"),e._uU(191,"height"),e.qZA(),e.TgZ(192,"td"),e._uU(193,"string"),e.qZA(),e.TgZ(194,"td"),e._uU(195,"1rem"),e.qZA(),e.TgZ(196,"td"),e._uU(197,"Height of the element."),e.qZA()(),e.TgZ(198,"tr")(199,"td"),e._uU(200,"borderRadius"),e.qZA(),e.TgZ(201,"td"),e._uU(202,"string"),e.qZA(),e.TgZ(203,"td"),e._uU(204,"null"),e.qZA(),e.TgZ(205,"td"),e._uU(206,"Border radius of the element, defaults to value from theme."),e.qZA()(),e.TgZ(207,"tr")(208,"td"),e._uU(209,"animation"),e.qZA(),e.TgZ(210,"td"),e._uU(211,"string"),e.qZA(),e.TgZ(212,"td"),e._uU(213,"wave"),e.qZA(),e.TgZ(214,"td"),e._uU(215,'Type of the animation, valid options are "wave" and "none".'),e.qZA()(),e.TgZ(216,"tr")(217,"td"),e._uU(218,"style"),e.qZA(),e.TgZ(219,"td"),e._uU(220,"object"),e.qZA(),e.TgZ(221,"td"),e._uU(222,"null"),e.qZA(),e.TgZ(223,"td"),e._uU(224,"Inline style of the component."),e.qZA()(),e.TgZ(225,"tr")(226,"td"),e._uU(227,"styleClass"),e.qZA(),e.TgZ(228,"td"),e._uU(229,"string"),e.qZA(),e.TgZ(230,"td"),e._uU(231,"null"),e.qZA(),e.TgZ(232,"td"),e._uU(233,"Style class of the component."),e.qZA()()()()(),e.TgZ(234,"h5"),e._uU(235,"Styling"),e.qZA(),e.TgZ(236,"p"),e._uU(237,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(238,"a",49),e._uU(239,"theming"),e.qZA(),e._uU(240," page."),e.qZA(),e.TgZ(241,"div",47)(242,"table",48)(243,"thead")(244,"tr")(245,"th"),e._uU(246,"Name"),e.qZA(),e.TgZ(247,"th"),e._uU(248,"Element"),e.qZA()()(),e.TgZ(249,"tbody")(250,"tr")(251,"td"),e._uU(252,"p-skeleton"),e.qZA(),e.TgZ(253,"td"),e._uU(254,"Container element."),e.qZA()(),e.TgZ(255,"tr")(256,"td"),e._uU(257,"p-skeleton-circle"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"Container element of a determinate progressbar."),e.qZA()(),e.TgZ(260,"tr")(261,"td"),e._uU(262,"p-skeleton-animation-none"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"Container element of an indeterminate progressbar."),e.qZA()()()()(),e.TgZ(265,"h5"),e._uU(266,"Dependencies"),e.qZA(),e.TgZ(267,"p"),e._uU(268,"None."),e.qZA()(),e.TgZ(269,"p-tabPanel",50)(270,"a",51)(271,"span"),e._uU(272,"View on GitHub"),e.qZA()(),e.TgZ(273,"a",52)(274,"span"),e._uU(275,"Edit in StackBlitz"),e.qZA()(),e.TgZ(276,"app-code",46),e.IAx(),e._uU(277,'\n<div class="card">\n    <div class="grid formgrid">\n        <div class="field col-12 md:col-6">\n            <h5>Rectangle</h5>\n            <p-skeleton styleClass="mb-2"></p-skeleton>\n            <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>\n            <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>\n            <p-skeleton height="2rem" styleClass="mb-2"></p-skeleton>\n            <p-skeleton width="10rem" height="4rem"></p-skeleton>\n        </div>\n        <div class="field col-12 md:col-6">\n            <h5>Rounded</h5>\n            <p-skeleton styleClass="mb-2" borderRadius="16px"></p-skeleton>\n            <p-skeleton width="10rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>\n            <p-skeleton width="5rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>\n            <p-skeleton height="2rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>\n            <p-skeleton width="10rem" height="4rem" borderRadius="16px"></p-skeleton>\n        </div>\n        <div class="field col-12 md:col-6">\n            <h5 class="mt-3">Square</h5>\n            <div class="flex align-items-end">\n                <p-skeleton size="2rem" styleClass="mr-2"></p-skeleton>\n                <p-skeleton size="3rem" styleClass="mr-2"></p-skeleton>\n                <p-skeleton size="4rem" styleClass="mr-2"></p-skeleton>\n                <p-skeleton size="5rem"></p-skeleton>\n            </div>\n        </div>\n        <div class="field col-12 md:col-6">\n            <h5 class="mt-3">Circle</h5>\n            <div class="flex align-items-end">\n                <p-skeleton shape="circle" size="2rem" styleClass="mr-2"></p-skeleton>\n                <p-skeleton shape="circle" size="3rem" styleClass="mr-2"></p-skeleton>\n                <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>\n                <p-skeleton shape="circle" size="5rem"></p-skeleton>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="card">\n    <div class="grid formgrid">\n        <div class="field col-12 md:col-6 md:pr-6 pr-0">\n            <h5>Card</h5>\n            <div class="custom-skeleton p-4">\n                <div class="flex mb-3">\n                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>\n                    <div>\n                        <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>\n                        <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>\n                        <p-skeleton height=".5rem"></p-skeleton>\n                    </div>\n                </div>\n                <p-skeleton width="100%" height="150px"></p-skeleton>\n                <div class="flex justify-content-between mt-3">\n                    <p-skeleton width="4rem" height="2rem"></p-skeleton>\n                    <p-skeleton width="4rem" height="2rem"></p-skeleton>\n                </div>\n            </div>\n        </div>\n        <div class="field col-12 md:col-6">\n            <h5>List</h5>\n            <div class="custom-skeleton p-4">\n                <ul class="m-0 o-0">\n                    <li class="mb-3">\n                        <div class="flex">\n                            <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>\n                            <div style="flex: 1">\n                                <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>\n                                <p-skeleton width="75%"></p-skeleton>\n                            </div>\n                        </div>\n                    </li>\n                    <li class="mb-3">\n                        <div class="flex">\n                            <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>\n                            <div style="flex: 1">\n                                <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>\n                                <p-skeleton width="75%"></p-skeleton>\n                            </div>\n                        </div>\n                    </li>\n                    <li class="mb-3">\n                        <div class="flex">\n                            <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>\n                            <div style="flex: 1">\n                                <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>\n                                <p-skeleton width="75%"></p-skeleton>\n                            </div>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="flex">\n                            <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>\n                            <div style="flex: 1">\n                                <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>\n                                <p-skeleton width="75%"></p-skeleton>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <h5>DataTable</h5>\n    <p-table [value]="products" responsiveLayout="scroll">\n        <ng-template pTemplate="header">\n            <tr>\n                <th>Code</th>\n                <th>Name</th>\n                <th>Category</th>\n                <th>Quantity</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate="body" let-product>\n            <tr>\n                <td><p-skeleton></p-skeleton></td>\n                <td><p-skeleton></p-skeleton></td>\n                <td><p-skeleton></p-skeleton></td>\n                <td><p-skeleton></p-skeleton></td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n'),e.fQ9(),e.qZA()(),e.TgZ(278,"p-tabPanel",53),e.YNc(279,U,1,0,"ng-template",54),e.qZA()()()),2&h&&(e.xp6(89),e.Q6J("value",S.products),e.xp6(149),e.Q6J("routerLink",e.DdM(2,b)))},dependencies:[a.yS,v.jx,p.xf,p.x4,T.O,d.iA,u.h,c.P],styles:[".custom-skeleton[_ngcontent-%COMP%]{border:1px solid var(--surface-d);border-borderRadius:4px}.custom-skeleton[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}"]}),s})(),y=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:C}]),a.Bz]}),s})();var q=o(1928),x=o(3427),w=o(1508),P=o(4434);let I=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[t.ez,y,q.hJ,x.Q,w.LU,T.m,P.U$,u.a,c.L]}),s})()}}]);