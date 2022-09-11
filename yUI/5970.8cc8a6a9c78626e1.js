"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[5970],{7808:(D,f,r)=>{r.d(f,{EV:()=>e.EV});var e=r(9064)},9064:(D,f,r)=>{r.d(f,{EV:()=>M,FN:()=>E});var e=r(1571),l=r(6895),h=r(8476),t=r(9716),v=r(3421),c=r(7340),m=r(4174);const u=["container"],d=function(a,p,s,n){return{"pi-info-circle":a,"pi-exclamation-triangle":p,"pi-times-circle":s,"pi-check":n}};function g(a,p){if(1&a&&(e.ynx(0),e._UZ(1,"span",6),e.TgZ(2,"div",7)(3,"div",8),e._uU(4),e.qZA(),e.TgZ(5,"div",9),e._uU(6),e.qZA()(),e.BQk()),2&a){const s=e.oxw();e.xp6(1),e.Tol("p-toast-message-icon pi"+(s.message.icon?" "+s.message.icon:"")),e.Q6J("ngClass",e.l5B(5,d,"info"==s.message.severity,"warn"==s.message.severity,"error"==s.message.severity,"success"==s.message.severity)),e.xp6(3),e.Oqu(s.message.summary),e.xp6(2),e.Oqu(s.message.detail)}}function _(a,p){1&a&&e.GkF(0)}function Z(a,p){if(1&a){const s=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(i){e.CHM(s);const o=e.oxw();return e.KtG(o.onCloseIconClick(i))})("keydown.enter",function(i){e.CHM(s);const o=e.oxw();return e.KtG(o.onCloseIconClick(i))}),e._UZ(1,"span",11),e.qZA()}}const C=function(a){return[a,"p-toast-message"]},O=function(a,p,s,n){return{showTransformParams:a,hideTransformParams:p,showTransitionParams:s,hideTransitionParams:n}},w=function(a){return{value:"visible",params:a}},b=function(a){return{$implicit:a}};function x(a,p){if(1&a){const s=e.EpF();e.TgZ(0,"p-toastItem",3),e.NdJ("onClose",function(i){e.CHM(s);const o=e.oxw();return e.KtG(o.onMessageClose(i))})("@toastAnimation.start",function(i){e.CHM(s);const o=e.oxw();return e.KtG(o.onAnimationStart(i))})("@toastAnimation.done",function(i){e.CHM(s);const o=e.oxw();return e.KtG(o.onAnimationEnd(i))}),e.qZA()}if(2&a){const s=p.$implicit,n=p.index,i=e.oxw();e.Q6J("message",s)("index",n)("template",i.template)("@toastAnimation",void 0)("showTransformOptions",i.showTransformOptions)("hideTransformOptions",i.hideTransformOptions)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}}let I=(()=>{class a{constructor(s){this.zone=s,this.onClose=new e.vpe}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(s){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),s.preventDefault()}ngOnDestroy(){this.clearTimeout()}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(e.R0b))},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-toastItem"]],viewQuery:function(s,n){if(1&s&&e.Gf(u,5),2&s){let i;e.iGM(i=e.CRH())&&(n.containerViewChild=i.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",template:"template",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:6,vars:21,consts:[[3,"ngClass","mouseenter","mouseleave"],["container",""],["role","alert","aria-live","assertive","aria-atomic","true",1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"ngClass"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[1,"p-toast-icon-close-icon","pi","pi-times"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0,1),e.NdJ("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()}),e.TgZ(2,"div",2),e.YNc(3,g,7,10,"ng-container",3),e.YNc(4,_,1,0,"ng-container",4),e.YNc(5,Z,2,0,"button",5),e.qZA()()),2&s&&(e.Tol(n.message.styleClass),e.Q6J("ngClass",e.VKq(10,C,"p-toast-message-"+n.message.severity))("@messageState",e.VKq(17,w,e.l5B(12,O,n.showTransformOptions,n.hideTransformOptions,n.showTransitionOptions,n.hideTransitionOptions))),e.uIk("id",n.message.id),e.xp6(2),e.Q6J("ngClass",n.message.contentStyleClass),e.xp6(1),e.Q6J("ngIf",!n.template),e.xp6(1),e.Q6J("ngTemplateOutlet",n.template)("ngTemplateOutletContext",e.VKq(19,b,n.message)),e.xp6(1),e.Q6J("ngIf",!1!==n.message.closable))},dependencies:[l.mk,l.O5,l.tP,m.H],encapsulation:2,data:{animation:[(0,c.X$)("messageState",[(0,c.SB)("visible",(0,c.oB)({transform:"translateY(0)",opacity:1})),(0,c.eR)("void => *",[(0,c.oB)({transform:"{{showTransformParams}}",opacity:0}),(0,c.jt)("{{showTransitionParams}}")]),(0,c.eR)("* => void",[(0,c.jt)("{{hideTransitionParams}}",(0,c.oB)({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0}),a})(),E=(()=>{class a{constructor(s,n,i){this.messageService=s,this.cd=n,this.config=i,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new e.vpe,this.id=(0,t.Th)()}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(s=>{if(s)if(s instanceof Array){const n=s.filter(i=>this.canAdd(i));this.add(n)}else this.canAdd(s)&&this.add([s])}),this.clearSubscription=this.messageService.clearObserver.subscribe(s=>{s?this.key===s&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(s){this.messages=this.messages?[...this.messages,...s]:[...s],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...s]:[...s]),this.cd.markForCheck()}canAdd(s){let n=this.key===s.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,s)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,s)),n}containsMessage(s,n){return!!s&&null!=s.find(i=>i.summary===n.summary&&i.detail==n.detail&&i.severity===n.severity)}ngAfterContentInit(){this.templates.forEach(s=>{s.getType(),this.template=s.template})}onMessageClose(s){this.messages.splice(s.index,1),this.onClose.emit({message:s.message}),this.cd.detectChanges()}onAnimationStart(s){"void"===s.fromState&&(this.containerViewChild.nativeElement.setAttribute(this.id,""),this.autoZIndex&&""===this.containerViewChild.nativeElement.style.zIndex&&t.P9.set("modal",this.containerViewChild.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(s){"void"===s.toState&&this.autoZIndex&&t.gb.isEmpty(this.messages)&&t.P9.clear(this.containerViewChild.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let s="";for(let n in this.breakpoints){let i="";for(let o in this.breakpoints[n])i+=o+":"+this.breakpoints[n][o]+" !important;";s+=`\n                    @media screen and (max-width: ${n}) {\n                        .p-toast[${this.id}] {\n                           ${i}\n                        }\n                    }\n                `}this.styleElement.innerHTML=s}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&t.P9.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(h.ez),e.Y36(e.sBO),e.Y36(h.b4))},a.\u0275cmp=e.Xpm({type:a,selectors:[["p-toast"]],contentQueries:function(s,n,i){if(1&s&&e.Suo(i,h.jx,4),2&s){let o;e.iGM(o=e.CRH())&&(n.templates=o)}},viewQuery:function(s,n){if(1&s&&e.Gf(u,5),2&s){let i;e.iGM(i=e.CRH())&&(n.containerViewChild=i.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0,1),e.YNc(2,x,1,8,"p-toastItem",2),e.qZA()),2&s&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-toast p-component p-toast-"+n.position)("ngStyle",n.style),e.xp6(2),e.Q6J("ngForOf",n.messages))},dependencies:[l.mk,l.sg,l.PC,I],styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}\n"],encapsulation:2,data:{animation:[(0,c.X$)("toastAnimation",[(0,c.eR)(":enter, :leave",[(0,c.IO)("@*",(0,c.pV)())])])]},changeDetection:0}),a})(),M=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.ez,v.T,h.m8]}),a})()},7381:(D,f,r)=>{r.d(f,{a:()=>c,h:()=>v});var e=r(6895),l=r(1571);const h=["code"],t=["*"];let v=(()=>{class m{constructor(d){this.el=d,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return m.\u0275fac=function(d){return new(d||m)(l.Y36(l.SBq))},m.\u0275cmp=l.Xpm({type:m,selectors:[["app-code"]],viewQuery:function(d,g){if(1&d&&l.Gf(h,5),2&d){let _;l.iGM(_=l.CRH())&&(g.codeViewChild=_.first)}},inputs:{lang:"lang"},ngContentSelectors:t,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(d,g){1&d&&(l.F$t(),l.TgZ(0,"pre",0)(1,"code",null,1),l.Hsn(3),l._uU(4,"\n"),l.qZA()()),2&d&&l.Q6J("ngClass","language-"+g.lang)},dependencies:[e.mk],encapsulation:2}),m})(),c=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=l.oAB({type:m}),m.\u0275inj=l.cJS({imports:[e.ez]}),m})()},5970:(D,f,r)=>{r.r(f),r.d(f,{DeferDemoModule:()=>s});var e=r(6895),l=r(9859),h=r(8476),t=r(1571),v=r(8657);let c=(()=>{class n{constructor(o,T,y,A){this.el=o,this.renderer=T,this.viewContainer=y,this.cd=A,this.onLoad=new t.vpe}ngAfterViewInit(){this.shouldLoad()&&this.load(),this.isLoaded()||(this.documentScrollListener=this.renderer.listen("window","scroll",()=>{this.shouldLoad()&&(this.load(),this.documentScrollListener(),this.documentScrollListener=null)}))}shouldLoad(){if(this.isLoaded())return!1;{let o=this.el.nativeElement.getBoundingClientRect();return document.documentElement.clientHeight>=o.top}}load(){this.view=this.viewContainer.createEmbeddedView(this.template),this.onLoad.emit(),this.cd.detectChanges()}isLoaded(){return null!=this.view}ngOnDestroy(){this.view=null,this.documentScrollListener&&this.documentScrollListener()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.s_b),t.Y36(t.sBO))},n.\u0275dir=t.lG2({type:n,selectors:[["","pDefer",""]],contentQueries:function(o,T,y){if(1&o&&t.Suo(y,t.Rgc,5),2&o){let A;t.iGM(A=t.CRH())&&(T.template=A.first)}},hostAttrs:[1,"p-element"],outputs:{onLoad:"onLoad"}}),n})(),m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez]}),n})();var u=r(9064),d=r(485),g=r(4619),_=r(951),Z=r(3032),C=r(7381);function O(n,i){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Vin"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Year"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Brand"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Color"),t.qZA()())}function w(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&n){const o=i.$implicit;t.xp6(2),t.Oqu(o.vin),t.xp6(2),t.Oqu(o.year),t.xp6(2),t.Oqu(o.brand),t.xp6(2),t.Oqu(o.color)}}function b(n,i){if(1&n&&(t.TgZ(0,"p-table",17),t.YNc(1,O,9,0,"ng-template",18),t.YNc(2,w,9,4,"ng-template",19),t.qZA()),2&n){const o=t.oxw();t.Q6J("value",o.cars)}}function x(n,i){1&n&&t._UZ(0,"iframe",20)}let I=(()=>{class n{constructor(o,T){this.carService=o,this.messageService=T}initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(o=>this.cars=o)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(v.Z),t.Y36(h.ez))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],features:[t._Bn([h.ez])],decls:79,vars:0,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","defer","stackblitz","defer-demo"],[1,"content-section","implementation"],[2,"height","1200px"],["pDefer","",3,"onLoad"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/defer","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-defer-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"],["src","https://stackblitz.com/edit/primeng-defer-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(o,T){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Defer"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Defer postpones the loading the content that is initially not in the viewport until it becomes visible on scroll."),t.qZA()(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3)(8,"div",4),t._uU(9," Table is not loaded yet, scroll down to initialize it. "),t.qZA(),t._UZ(10,"p-toast"),t.TgZ(11,"div",5),t.NdJ("onLoad",function(){return T.initData()}),t.YNc(12,b,3,1,"ng-template"),t.qZA()(),t.TgZ(13,"div",6)(14,"p-tabView")(15,"p-tabPanel",7)(16,"h5"),t._uU(17,"Import"),t.qZA(),t.TgZ(18,"app-code",8),t.IAx(),t._uU(19,"\nimport {DeferModule} from 'primeng/defer';\n"),t.fQ9(),t.qZA(),t.TgZ(20,"h5"),t._uU(21,"Getting Started"),t.qZA(),t.TgZ(22,"p"),t._uU(23,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),t.qZA(),t.TgZ(24,"app-code",9),t.IAx(),t._uU(25,"\n<div pDefer>\n    <ng-template>\n       deferred content\n   </ng-template>\n</div>\n"),t.fQ9(),t.qZA(),t.TgZ(26,"h5"),t._uU(27,"Callback"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data."),t.qZA(),t.TgZ(30,"app-code",9),t.IAx(),t._uU(31,'\n<div pDefer (onLoad)="initData()">\n    <ng-template>\n        <p-table [value]="cars">\n        <ng-template pTemplate="header">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate="body" let-car>\n            <tr>\n                <td>{{car.vin}}</td>\n                <td>{{car.year}}</td>\n                <td>{{car.brand}}</td>\n                <td>{{car.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n    </ng-template>\n</div>\n'),t.fQ9(),t.qZA(),t.TgZ(32,"app-code",8),t.IAx(),t._uU(33,"\nthis.cars = //initialize\n"),t.fQ9(),t.qZA(),t.TgZ(34,"h5"),t._uU(35,"Properties"),t.qZA(),t.TgZ(36,"p"),t._uU(37,"Directive has no attributes."),t.qZA(),t.TgZ(38,"h5"),t._uU(39,"Events"),t.qZA(),t.TgZ(40,"div",10)(41,"table",11)(42,"thead")(43,"tr")(44,"th"),t._uU(45,"Name"),t.qZA(),t.TgZ(46,"th"),t._uU(47,"Parameters"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Description"),t.qZA()()(),t.TgZ(50,"tbody")(51,"tr")(52,"td"),t._uU(53,"onLoad"),t.qZA(),t.TgZ(54,"td"),t._uU(55,"-"),t.qZA(),t.TgZ(56,"td"),t._uU(57,"Callback to invoke when deferred content is loaded."),t.qZA()()()()(),t.TgZ(58,"h5"),t._uU(59,"Styling"),t.qZA(),t.TgZ(60,"p"),t._uU(61,"Directive does not apply any styling to host."),t.qZA(),t.TgZ(62,"h5"),t._uU(63,"Dependencies"),t.qZA(),t.TgZ(64,"p"),t._uU(65,"None."),t.qZA()(),t.TgZ(66,"p-tabPanel",12)(67,"a",13)(68,"span"),t._uU(69,"View on GitHub"),t.qZA()(),t.TgZ(70,"a",14)(71,"span"),t._uU(72,"Edit in StackBlitz"),t.qZA()(),t.TgZ(73,"app-code",9),t.IAx(),t._uU(74,'\n<div style="height:1200px">\n    Table is not loaded yet, scroll down to initialize it.\n</div>\n\n<p-toast></p-toast>\n\n<div pDefer (onLoad)="initData()">\n    <ng-template>\n        <p-table [value]="cars" responsiveLayout="scroll">\n            <ng-template pTemplate="header">\n                <tr>\n                    <th>Vin</th>\n                    <th>Year</th>\n                    <th>Brand</th>\n                    <th>Color</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate="body" let-car>\n                <tr>\n                    <td>{{car.vin}}</td>\n                    <td>{{car.year}}</td>\n                    <td>{{car.brand}}</td>\n                    <td>{{car.color}}</td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </ng-template>\n</div>\n'),t.fQ9(),t.qZA(),t.TgZ(75,"app-code",8),t.IAx(),t._uU(76,"\nexport class DeferDemo {\n\n    cars: Car[];\n\n    constructor(private carService: CarService, private messageService: MessageService)  {}\n\n    initData()  {\n        this.messageService.add({severity:'success', summary:'Data Initialized', detail:'Render Completed'});\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n     }\n\n }\n"),t.fQ9(),t.qZA()(),t.TgZ(77,"p-tabPanel",15),t.YNc(78,x,1,0,"ng-template",16),t.qZA()()())},dependencies:[c,u.FN,d.jx,g.xf,g.x4,_.iA,Z.P,C.h],encapsulation:2}),n})(),E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild([{path:"",component:I}]),l.Bz]}),n})();var M=r(4434),a=r(7808),p=r(1508);let s=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,E,m,a.EV,p.LU,M.U$,Z.L,C.a]}),n})()}}]);