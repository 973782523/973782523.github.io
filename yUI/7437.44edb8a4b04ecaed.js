"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[7437],{7371:(w,f,d)=>{d.d(f,{Q:()=>s,s:()=>r});var n=d(1571),u=d(6895),b=d(8476),U=d(3421),g=d(7340),e=d(4174);function c(i,h){if(1&i&&(n.TgZ(0,"span",10),n._uU(1),n.qZA()),2&i){const t=n.oxw(2);n.uIk("id",t.id+"_header"),n.xp6(1),n.Oqu(t.header)}}function v(i,h){1&i&&n.GkF(0)}function m(i,h){}function M(i,h){1&i&&n.YNc(0,m,0,0,"ng-template")}function A(i,h){if(1&i){const t=n.EpF();n.TgZ(0,"button",11),n.NdJ("click",function(T){n.CHM(t);const Z=n.oxw(2);return n.KtG(Z.onIconClick(T))})("keydown.enter",function(T){n.CHM(t);const Z=n.oxw(2);return n.KtG(Z.onIconClick(T))}),n._UZ(1,"span"),n.qZA()}if(2&i){const t=n.oxw(2);n.uIk("aria-label","collapse button")("id",t.id+"-label")("aria-controls",t.id+"-content")("aria-expanded",!t.collapsed),n.xp6(1),n.Tol(t.collapsed?t.expandIcon:t.collapseIcon)}}const y=function(i,h,t){return{"p-panel-icons-start":i,"p-panel-icons-end":h,"p-panel-icons-center":t}};function C(i,h){if(1&i){const t=n.EpF();n.TgZ(0,"div",6),n.NdJ("click",function(T){n.CHM(t);const Z=n.oxw();return n.KtG(Z.onHeaderClick(T))}),n.YNc(1,c,2,2,"span",7),n.Hsn(2,1),n.YNc(3,v,1,0,"ng-container",4),n.TgZ(4,"div",8),n.YNc(5,M,1,0,null,4),n.YNc(6,A,2,6,"button",9),n.qZA()()}if(2&i){const t=n.oxw();n.uIk("id",t.id+"-titlebar"),n.xp6(1),n.Q6J("ngIf",t.header),n.xp6(2),n.Q6J("ngTemplateOutlet",t.headerTemplate),n.xp6(1),n.Q6J("ngClass",n.kEZ(6,y,"start"===t.iconPos,"end"===t.iconPos,"center"===t.iconPos)),n.xp6(1),n.Q6J("ngTemplateOutlet",t.iconTemplate),n.xp6(1),n.Q6J("ngIf",t.toggleable)}}function k(i,h){1&i&&n.GkF(0)}function q(i,h){1&i&&n.GkF(0)}function x(i,h){if(1&i&&(n.TgZ(0,"div",12),n.Hsn(1,2),n.YNc(2,q,1,0,"ng-container",4),n.qZA()),2&i){const t=n.oxw();n.xp6(2),n.Q6J("ngTemplateOutlet",t.footerTemplate)}}const P=["*",[["p-header"]],[["p-footer"]]],D=function(i,h){return{"p-panel p-component":!0,"p-panel-toggleable":i,"p-panel-expanded":h}},E=function(i){return{transitionParams:i,height:"0",opacity:"0"}},I=function(i){return{value:"hidden",params:i}},l=function(i){return{transitionParams:i,height:"*",opacity:"1"}},_=function(i){return{value:"visible",params:i}},o=["*","p-header","p-footer"];let a=0,r=(()=>{class i{constructor(t){this.el=t,this.collapsed=!1,this.iconPos="end",this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new n.vpe,this.onBeforeToggle=new n.vpe,this.onAfterToggle=new n.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+a++}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":default:this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"icons":this.iconTemplate=t.template}})}onHeaderClick(t){"header"===this.toggler&&this.toggle(t)}onIconClick(t){"icon"===this.toggler&&this.toggle(t)}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(t):this.collapse(t)),t.preventDefault()}expand(t){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(t){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(t){this.animating=!1,this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed})}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(n.SBq))},i.\u0275cmp=n.Xpm({type:i,selectors:[["p-panel"]],contentQueries:function(t,p,T){if(1&t&&(n.Suo(T,b.$_,5),n.Suo(T,b.jx,4)),2&t){let Z;n.iGM(Z=n.CRH())&&(p.footerFacet=Z.first),n.iGM(Z=n.CRH())&&(p.templates=Z)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:o,decls:7,vars:23,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],["role","tablist",1,"p-panel-icons",3,"ngClass"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(t,p){1&t&&(n.F$t(P),n.TgZ(0,"div",0),n.YNc(1,C,7,10,"div",1),n.TgZ(2,"div",2),n.NdJ("@panelContent.done",function(Z){return p.onToggleDone(Z)}),n.TgZ(3,"div",3),n.Hsn(4),n.YNc(5,k,1,0,"ng-container",4),n.qZA(),n.YNc(6,x,3,1,"div",5),n.qZA()()),2&t&&(n.Tol(p.styleClass),n.Q6J("ngClass",n.WLB(12,D,p.toggleable,!p.collapsed&&p.toggleable))("ngStyle",p.style),n.uIk("id",p.id),n.xp6(1),n.Q6J("ngIf",p.showHeader),n.xp6(1),n.Q6J("@panelContent",p.collapsed?n.VKq(17,I,n.VKq(15,E,p.animating?p.transitionOptions:"0ms")):n.VKq(21,_,n.VKq(19,l,p.animating?p.transitionOptions:"0ms"))),n.uIk("id",p.id+"-content")("aria-hidden",p.collapsed)("aria-labelledby",p.id+"-titlebar"),n.xp6(3),n.Q6J("ngTemplateOutlet",p.contentTemplate),n.xp6(1),n.Q6J("ngIf",p.footerFacet||p.footerTemplate))},dependencies:[u.mk,u.O5,u.tP,u.PC,e.H],styles:[".p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded .p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[(0,g.X$)("panelContent",[(0,g.SB)("hidden",(0,g.oB)({height:"0"})),(0,g.SB)("void",(0,g.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,g.SB)("visible",(0,g.oB)({height:"*"})),(0,g.eR)("visible <=> hidden",[(0,g.jt)("{{transitionParams}}")]),(0,g.eR)("void => hidden",(0,g.jt)("{{transitionParams}}")),(0,g.eR)("void => visible",(0,g.jt)("{{transitionParams}}"))])]},changeDetection:0}),i})(),s=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[u.ez,b.m8,U.T,b.m8]}),i})()},3427:(w,f,d)=>{d.d(f,{Q:()=>n.Q});var n=d(7371)},7381:(w,f,d)=>{d.d(f,{a:()=>e,h:()=>g});var n=d(6895),u=d(1571);const b=["code"],U=["*"];let g=(()=>{class c{constructor(m){this.el=m,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return c.\u0275fac=function(m){return new(m||c)(u.Y36(u.SBq))},c.\u0275cmp=u.Xpm({type:c,selectors:[["app-code"]],viewQuery:function(m,M){if(1&m&&u.Gf(b,5),2&m){let A;u.iGM(A=u.CRH())&&(M.codeViewChild=A.first)}},inputs:{lang:"lang"},ngContentSelectors:U,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(m,M){1&m&&(u.F$t(),u.TgZ(0,"pre",0)(1,"code",null,1),u.Hsn(3),u._uU(4,"\n"),u.qZA()()),2&m&&u.Q6J("ngClass","language-"+M.lang)},dependencies:[n.mk],encapsulation:2}),c})(),e=(()=>{class c{}return c.\u0275fac=function(m){return new(m||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[n.ez]}),c})()},7437:(w,f,d)=>{d.r(f),d.d(f,{KnobDemoModule:()=>I});var n=d(6895),u=d(433),b=d(1928),U=d(3427),g=d(1508),e=d(1571);function c(l,_){if(1&l&&(e.O4$(),e.TgZ(0,"text",5),e._uU(1),e.qZA()),2&l){const o=e.oxw();e.uIk("x",50)("y",57)("fill",o.textColor)("name",o.name),e.xp6(1),e.Oqu(o.valueToDisplay())}}const v={provide:u.JU,useExisting:(0,e.Gpc)(()=>m),multi:!0};let m=(()=>{class l{constructor(o,a){this.cd=o,this.el=a,this.valueColor="var(--primary-color, Black)",this.rangeColor="var(--surface-border, LightGray)",this.textColor="var(--text-color-secondary, Black)",this.valueTemplate="{value}",this.size=100,this.step=1,this.min=0,this.max=100,this.strokeWidth=14,this.showValue=!0,this.readonly=!1,this.onChange=new e.vpe,this.radius=40,this.midX=50,this.midY=50,this.minRadians=4*Math.PI/3,this.maxRadians=-Math.PI/3,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}mapRange(o,a,r,s,i){return(o-a)*(i-s)/(r-a)+s}onClick(o){!this.disabled&&!this.readonly&&this.updateValue(o.offsetX,o.offsetY)}updateValue(o,a){let i=Math.atan2(this.size/2-a,o-this.size/2),h=-Math.PI/2-Math.PI/6;this.updateModel(i,h)}updateModel(o,a){let r;if(o>this.maxRadians)r=this.mapRange(o,this.minRadians,this.maxRadians,this.min,this.max);else{if(!(o<a))return;r=this.mapRange(o+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max)}let s=Math.round((r-this.min)/this.step)*this.step+this.min;this.value=s,this.onModelChange(this.value),this.onChange.emit(this.value)}onMouseDown(o){!this.disabled&&!this.readonly&&(this.windowMouseMoveListener=this.onMouseMove.bind(this),this.windowMouseUpListener=this.onMouseUp.bind(this),window.addEventListener("mousemove",this.windowMouseMoveListener),window.addEventListener("mouseup",this.windowMouseUpListener),o.preventDefault())}onMouseUp(o){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.windowMouseMoveListener),window.removeEventListener("mouseup",this.windowMouseUpListener),this.windowMouseUpListener=null,this.windowMouseMoveListener=null,o.preventDefault())}onTouchStart(o){!this.disabled&&!this.readonly&&(this.windowTouchMoveListener=this.onTouchMove.bind(this),this.windowTouchEndListener=this.onTouchEnd.bind(this),window.addEventListener("touchmove",this.windowTouchMoveListener),window.addEventListener("touchend",this.windowTouchEndListener),o.preventDefault())}onTouchEnd(o){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.windowTouchMoveListener),window.removeEventListener("touchend",this.windowTouchEndListener),this.windowTouchMoveListener=null,this.windowTouchEndListener=null,o.preventDefault())}onMouseMove(o){!this.disabled&&!this.readonly&&(this.updateValue(o.offsetX,o.offsetY),o.preventDefault())}onTouchMove(o){if(!this.disabled&&!this.readonly&&1==o.touches.length){const a=this.el.nativeElement.children[0].getBoundingClientRect(),r=o.targetTouches.item(0);this.updateValue(r.clientX-a.left,r.clientY-a.top)}}writeValue(o){this.value=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}containerClass(){return{"p-knob p-component":!0,"p-disabled":this.disabled}}rangePath(){return`M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`}valuePath(){return`M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`}zeroRadians(){return this.mapRange(this.min>0&&this.max>0?this.min:0,this.min,this.max,this.minRadians,this.maxRadians)}valueRadians(){return this.mapRange(this._value,this.min,this.max,this.minRadians,this.maxRadians)}minX(){return this.midX+Math.cos(this.minRadians)*this.radius}minY(){return this.midY-Math.sin(this.minRadians)*this.radius}maxX(){return this.midX+Math.cos(this.maxRadians)*this.radius}maxY(){return this.midY-Math.sin(this.maxRadians)*this.radius}zeroX(){return this.midX+Math.cos(this.zeroRadians())*this.radius}zeroY(){return this.midY-Math.sin(this.zeroRadians())*this.radius}valueX(){return this.midX+Math.cos(this.valueRadians())*this.radius}valueY(){return this.midY-Math.sin(this.valueRadians())*this.radius}largeArc(){return Math.abs(this.zeroRadians()-this.valueRadians())<Math.PI?0:1}sweep(){return this.valueRadians()>this.zeroRadians()?0:1}valueToDisplay(){return this.valueTemplate.replace("{value}",this._value.toString())}get _value(){return null!=this.value?this.value:this.min}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(e.sBO),e.Y36(e.SBq))},l.\u0275cmp=e.Xpm({type:l,selectors:[["p-knob"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",valueColor:"valueColor",rangeColor:"rangeColor",textColor:"textColor",valueTemplate:"valueTemplate",name:"name",size:"size",step:"step",min:"min",max:"max",strokeWidth:"strokeWidth",disabled:"disabled",showValue:"showValue",readonly:"readonly"},outputs:{onChange:"onChange"},features:[e._Bn([v])],decls:5,vars:15,consts:[[3,"ngClass","ngStyle"],["viewBox","0 0 100 100",3,"click","mousedown","mouseup","touchstart","touchend"],[1,"p-knob-range"],[1,"p-knob-value"],["text-anchor","middle","class","p-knob-text",4,"ngIf"],["text-anchor","middle",1,"p-knob-text"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0),e.O4$(),e.TgZ(1,"svg",1),e.NdJ("click",function(s){return a.onClick(s)})("mousedown",function(s){return a.onMouseDown(s)})("mouseup",function(s){return a.onMouseUp(s)})("touchstart",function(s){return a.onTouchStart(s)})("touchend",function(s){return a.onTouchEnd(s)}),e._UZ(2,"path",2)(3,"path",3),e.YNc(4,c,2,5,"text",4),e.qZA()()),2&o&&(e.Tol(a.styleClass),e.Q6J("ngClass",a.containerClass())("ngStyle",a.style),e.xp6(1),e.Udp("width",a.size+"px")("height",a.size+"px"),e.xp6(1),e.uIk("d",a.rangePath())("stroke-width",a.strokeWidth)("stroke",a.rangeColor),e.xp6(1),e.uIk("d",a.valuePath())("stroke-width",a.strokeWidth)("stroke",a.valueColor),e.xp6(1),e.Q6J("ngIf",a.showValue))},dependencies:[n.mk,n.O5,n.PC],styles:["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}\n"],encapsulation:2,changeDetection:0}),l})(),M=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[n.ez]}),l})();var A=d(9859),y=d(485),C=d(4619),k=d(3032),q=d(7381);function x(l,_){1&l&&e._UZ(0,"iframe",29)}const P=function(){return["/theming"]};let D=(()=>{class l{constructor(){this.value1=0,this.value2=50,this.value3=75,this.value4=10,this.value5=40,this.value6=60,this.value7=40,this.value8=60,this.value9=50}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],decls:308,vars:18,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","knob","stackblitz","knob-demo"],[1,"content-section","implementation"],[1,"card"],[1,"grid","formgrid","text-center"],[1,"field","col-12","md:col-4"],[3,"ngModel","ngModelChange"],[3,"ngModel","readonly","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[1,"mt-3"],[3,"ngModel","min","max","ngModelChange"],[3,"ngModel","step","ngModelChange"],["valueTemplate","{value}%",3,"ngModel","ngModelChange"],[3,"ngModel","strokeWidth","ngModelChange"],[3,"ngModel","size","ngModelChange"],["valueColor","SlateGray","rangeColor","MediumTurquoise",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/knob","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-knob-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-knob-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Knob"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Knob is a form component to define number inputs with a dial."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"h5"),e._uU(12,"Basic"),e.qZA(),e.TgZ(13,"p-knob",7),e.NdJ("ngModelChange",function(s){return a.value1=s}),e.qZA()(),e.TgZ(14,"div",6)(15,"h5"),e._uU(16,"Readonly"),e.qZA(),e.TgZ(17,"p-knob",8),e.NdJ("ngModelChange",function(s){return a.value2=s}),e.qZA()(),e.TgZ(18,"div",6)(19,"h5"),e._uU(20,"Disabled"),e.qZA(),e.TgZ(21,"p-knob",9),e.NdJ("ngModelChange",function(s){return a.value3=s}),e.qZA()(),e.TgZ(22,"div",6)(23,"h5",10),e._uU(24,"Min/Max"),e.qZA(),e.TgZ(25,"p-knob",11),e.NdJ("ngModelChange",function(s){return a.value4=s}),e.qZA()(),e.TgZ(26,"div",6)(27,"h5",10),e._uU(28,"Step"),e.qZA(),e.TgZ(29,"p-knob",12),e.NdJ("ngModelChange",function(s){return a.value5=s}),e.qZA()(),e.TgZ(30,"div",6)(31,"h5",10),e._uU(32,"Template"),e.qZA(),e.TgZ(33,"p-knob",13),e.NdJ("ngModelChange",function(s){return a.value6=s}),e.qZA()(),e.TgZ(34,"div",6)(35,"h5",10),e._uU(36,"Stroke"),e.qZA(),e.TgZ(37,"p-knob",14),e.NdJ("ngModelChange",function(s){return a.value7=s}),e.qZA()(),e.TgZ(38,"div",6)(39,"h5",10),e._uU(40,"Size"),e.qZA(),e.TgZ(41,"p-knob",15),e.NdJ("ngModelChange",function(s){return a.value8=s}),e.qZA()(),e.TgZ(42,"div",6)(43,"h5",10),e._uU(44,"Color"),e.qZA(),e.TgZ(45,"p-knob",16),e.NdJ("ngModelChange",function(s){return a.value9=s}),e.qZA()()()()(),e.TgZ(46,"div",17)(47,"p-tabView")(48,"p-tabPanel",18)(49,"h5"),e._uU(50,"Import"),e.qZA(),e.TgZ(51,"app-code",19),e.IAx(),e._uU(52,"\nimport {KnobModule} from 'primeng/knob';\n"),e.fQ9(),e.qZA(),e.TgZ(53,"h5"),e._uU(54,"Getting Started"),e.qZA(),e.TgZ(55,"p"),e._uU(56,"Knob is an input component and used with the standard "),e.TgZ(57,"i"),e._uU(58,"ngModel"),e.qZA(),e._uU(59," directive."),e.qZA(),e.TgZ(60,"app-code",20),e.IAx(),e._uU(61,'\n<p-knob [(ngModel)]="value"></p-knob>\n'),e.fQ9(),e.qZA(),e.TgZ(62,"app-code",19),e.IAx(),e._uU(63,"\nvalue: number = 0;\n"),e.fQ9(),e.qZA(),e.TgZ(64,"h5"),e._uU(65,"Minimum and Maximum"),e.qZA(),e.TgZ(66,"p"),e._uU(67,"Boundaries are configured with the "),e.TgZ(68,"i"),e._uU(69,"min"),e.qZA(),e._uU(70," and "),e.TgZ(71,"i"),e._uU(72,"max"),e.qZA(),e._uU(73," values whose defaults are 0 and 100 respectively."),e.qZA(),e.TgZ(74,"app-code",20),e.IAx(),e._uU(75,'\n<p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>\n'),e.fQ9(),e.qZA(),e.TgZ(76,"h5"),e._uU(77,"Step"),e.qZA(),e.TgZ(78,"p"),e._uU(79,"Step factor is 1 by default and can be customized with "),e.TgZ(80,"i"),e._uU(81,"step"),e.qZA(),e._uU(82," option."),e.qZA(),e.TgZ(83,"app-code",20),e.IAx(),e._uU(84,'\n<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>\n'),e.fQ9(),e.qZA(),e.TgZ(85,"h5"),e._uU(86,"Size"),e.qZA(),e.TgZ(87,"p"),e._uU(88,"Default size of the Knob is 100 pixels for width and height, use the "),e.TgZ(89,"i"),e._uU(90,"size"),e.qZA(),e._uU(91," property to customize it per your requirements."),e.qZA(),e.TgZ(92,"app-code",20),e.IAx(),e._uU(93,'\n<p-knob [(ngModel)]="value" [size]="200"></p-knob>\n'),e.fQ9(),e.qZA(),e.TgZ(94,"h5"),e._uU(95,"Properties"),e.qZA(),e.TgZ(96,"div",21)(97,"table",22)(98,"thead")(99,"tr")(100,"th"),e._uU(101,"Name"),e.qZA(),e.TgZ(102,"th"),e._uU(103,"Type"),e.qZA(),e.TgZ(104,"th"),e._uU(105,"Default"),e.qZA(),e.TgZ(106,"th"),e._uU(107,"Description"),e.qZA()()(),e.TgZ(108,"tbody")(109,"tr")(110,"td"),e._uU(111,"size"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"number"),e.qZA(),e.TgZ(114,"td"),e._uU(115,"100"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"Size of the component in pixels."),e.qZA()(),e.TgZ(118,"tr")(119,"td"),e._uU(120,"disabled"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"boolean"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"false"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"When present, it specifies that the component should be disabled."),e.qZA()(),e.TgZ(127,"tr")(128,"td"),e._uU(129,"readonly"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"boolean"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"false"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"When present, it specifies that the component value cannot be edited."),e.qZA()(),e.TgZ(136,"tr")(137,"td"),e._uU(138,"step"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"number"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"null"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"Step factor to increment/decrement the value."),e.qZA()(),e.TgZ(145,"tr")(146,"td"),e._uU(147,"min"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"number"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"0"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"Mininum boundary value."),e.qZA()(),e.TgZ(154,"tr")(155,"td"),e._uU(156,"max"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"number"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"100"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Maximum boundary value."),e.qZA()(),e.TgZ(163,"tr")(164,"td"),e._uU(165,"valueColor"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"string"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"null"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"Background of the value."),e.qZA()(),e.TgZ(172,"tr")(173,"td"),e._uU(174,"rangeColor"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"number"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"null"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Background color of the range."),e.qZA()(),e.TgZ(181,"tr")(182,"td"),e._uU(183,"textColor"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"number"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"null"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"Color of the value text."),e.qZA()(),e.TgZ(190,"tr")(191,"td"),e._uU(192,"strokeWidth"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"number"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"14"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"Width of the knob stroke."),e.qZA()(),e.TgZ(199,"tr")(200,"td"),e._uU(201,"showValue"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"boolean"),e.qZA(),e.TgZ(204,"td"),e._uU(205,"true"),e.qZA(),e.TgZ(206,"td"),e._uU(207,"Whether the show the value inside the knob."),e.qZA()(),e.TgZ(208,"tr")(209,"td"),e._uU(210,"valueTemplate"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"string"),e.qZA(),e.TgZ(213,"td"),e._uU(214,"{value}"),e.qZA(),e.TgZ(215,"td"),e._uU(216,"Template string of the value."),e.qZA()(),e.TgZ(217,"tr")(218,"td"),e._uU(219,"style"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"object"),e.qZA(),e.TgZ(222,"td"),e._uU(223,"null"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"Inline style of the component."),e.qZA()(),e.TgZ(226,"tr")(227,"td"),e._uU(228,"styleClass"),e.qZA(),e.TgZ(229,"td"),e._uU(230,"string"),e.qZA(),e.TgZ(231,"td"),e._uU(232,"null"),e.qZA(),e.TgZ(233,"td"),e._uU(234,"Style class of the component."),e.qZA()()()()(),e.TgZ(235,"h5"),e._uU(236,"Events"),e.qZA(),e.TgZ(237,"div",21)(238,"table",22)(239,"thead")(240,"tr")(241,"th"),e._uU(242,"Name"),e.qZA(),e.TgZ(243,"th"),e._uU(244,"Parameters"),e.qZA(),e.TgZ(245,"th"),e._uU(246,"Description"),e.qZA()()(),e.TgZ(247,"tbody")(248,"tr")(249,"td"),e._uU(250,"onChange"),e.qZA(),e.TgZ(251,"td"),e._uU(252,"value: New value "),e.qZA(),e.TgZ(253,"td"),e._uU(254,"Callback to invoke when the value changes."),e.qZA()()()()(),e.TgZ(255,"h5"),e._uU(256,"Styling"),e.qZA(),e.TgZ(257,"p"),e._uU(258,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(259,"a",23),e._uU(260,"theming"),e.qZA(),e._uU(261," page."),e.qZA(),e.TgZ(262,"div",21)(263,"table",22)(264,"thead")(265,"tr")(266,"th"),e._uU(267,"Name"),e.qZA(),e.TgZ(268,"th"),e._uU(269,"Element"),e.qZA()()(),e.TgZ(270,"tbody")(271,"tr")(272,"td"),e._uU(273,"p-knob"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"Container element."),e.qZA()(),e.TgZ(276,"tr")(277,"td"),e._uU(278,"p-knob-text"),e.qZA(),e.TgZ(279,"td"),e._uU(280,"Text element."),e.qZA()(),e.TgZ(281,"tr")(282,"td"),e._uU(283,"p-knob-value"),e.qZA(),e.TgZ(284,"td"),e._uU(285,"Value element."),e.qZA()(),e.TgZ(286,"tr")(287,"td"),e._uU(288,"p-knob-text"),e.qZA(),e.TgZ(289,"td"),e._uU(290,"Text element."),e.qZA()()()()(),e.TgZ(291,"h5"),e._uU(292,"Dependencies"),e.qZA(),e.TgZ(293,"p"),e._uU(294,"None."),e.qZA()(),e.TgZ(295,"p-tabPanel",24)(296,"a",25)(297,"span"),e._uU(298,"View on GitHub"),e.qZA()(),e.TgZ(299,"a",26)(300,"span"),e._uU(301,"Edit in StackBlitz"),e.qZA()(),e.TgZ(302,"app-code",20),e.IAx(),e._uU(303,'\n<div class="grid formgrid text-center">\n    <div class="field col-12 md:col-4">\n        <h5>Basic</h5>\n        <p-knob [(ngModel)]="value1"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5>Readonly</h5>\n        <p-knob [(ngModel)]="value2" [readonly]="true"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5>Disabled</h5>\n        <p-knob [(ngModel)]="value3" [disabled]="true"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5 class="mt-3">Min/Max</h5>\n        <p-knob [(ngModel)]="value4" [min]="-50" [max]="50"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5 class="mt-3">Step</h5>\n        <p-knob [(ngModel)]="value5" [step]="10"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5 class="mt-3">Template</h5>\n        <p-knob [(ngModel)]="value6" valueTemplate="{value}%"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5 class="mt-3">Stroke</h5>\n        <p-knob [(ngModel)]="value7" [strokeWidth]="5"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5 class="mt-3">Size</h5>\n        <p-knob [(ngModel)]="value8" [size]="200"></p-knob>\n    </div>\n    <div class="field col-12 md:col-4">\n        <h5 class="mt-3">Color</h5>\n        <p-knob [(ngModel)]="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>\n    </div>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(304,"app-code",19),e.IAx(),e._uU(305,"\nexport class KnobDemo {\n\n    value1: number = 0;\n\n    value2: number = 50;\n\n    value3: number = 75;\n\n    value4: number = 10;\n\n    value5: number = 40;\n\n    value6: number = 60;\n\n    value7: number = 40;\n\n    value8: number = 60;\n\n    value9: number = 50;\n    \n}\n"),e.fQ9(),e.qZA()(),e.TgZ(306,"p-tabPanel",27),e.YNc(307,x,1,0,"ng-template",28),e.qZA()()()),2&o&&(e.xp6(13),e.Q6J("ngModel",a.value1),e.xp6(4),e.Q6J("ngModel",a.value2)("readonly",!0),e.xp6(4),e.Q6J("ngModel",a.value3)("disabled",!0),e.xp6(4),e.Q6J("ngModel",a.value4)("min",-50)("max",50),e.xp6(4),e.Q6J("ngModel",a.value5)("step",10),e.xp6(4),e.Q6J("ngModel",a.value6),e.xp6(4),e.Q6J("ngModel",a.value7)("strokeWidth",5),e.xp6(4),e.Q6J("ngModel",a.value8)("size",200),e.xp6(4),e.Q6J("ngModel",a.value9),e.xp6(214),e.Q6J("routerLink",e.DdM(17,P)))},dependencies:[A.yS,y.jx,C.xf,C.x4,u.JJ,u.On,m,k.P,q.h],encapsulation:2}),l})(),E=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[A.Bz.forChild([{path:"",component:D}]),A.Bz]}),l})(),I=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[n.ez,E,b.hJ,U.Q,g.LU,u.u5,M,k.L,q.a]}),l})()}}]);