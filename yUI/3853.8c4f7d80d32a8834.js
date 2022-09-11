"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[3853],{7381:(Z,i,e)=>{e.d(i,{a:()=>r,h:()=>m});var l=e(6895),n=e(1571);const d=["code"],g=["*"];let m=(()=>{class u{constructor(a){this.el=a,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return u.\u0275fac=function(a){return new(a||u)(n.Y36(n.SBq))},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-code"]],viewQuery:function(a,s){if(1&a&&n.Gf(d,5),2&a){let A;n.iGM(A=n.CRH())&&(s.codeViewChild=A.first)}},inputs:{lang:"lang"},ngContentSelectors:g,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(a,s){1&a&&(n.F$t(),n.TgZ(0,"pre",0)(1,"code",null,1),n.Hsn(3),n._uU(4,"\n"),n.qZA()()),2&a&&n.Q6J("ngClass","language-"+s.lang)},dependencies:[l.mk],encapsulation:2}),u})(),r=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[l.ez]}),u})()},3853:(Z,i,e)=>{e.r(i),e.d(i,{AutoFocusDemoModule:()=>h});var l=e(6895),n=e(433),d=e(7381),g=e(1508),m=e(5814),r=e(3032),u=e(9859),t=e(1571),a=e(4619),s=e(6440);let A=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["autofocusdemo"]],decls:69,vars:1,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","autofocus","stackblitz","autofocus-demo"],[1,"content-section","implementation"],["type","text","pInputText","","placeholder","Automatically focused",3,"pAutoFocus"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/autofocus","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-autofocus-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"]],template:function(c,T){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"AutoFocus"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"AutoFocus manages focus on focusable element on load."),t.qZA()(),t._UZ(6,"app-demoActions",2),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"div",5)(10,"p-tabView")(11,"p-tabPanel",6)(12,"h5"),t._uU(13,"Import"),t.qZA(),t.TgZ(14,"app-code",7),t.IAx(),t._uU(15,"\nimport {AutoFocusModule} from 'primeng/autofocus';\n"),t.fQ9(),t.qZA(),t.TgZ(16,"h5"),t._uU(17,"Getting Started"),t.qZA(),t.TgZ(18,"p"),t._uU(19,"AutoFocus is applied to any focusable input element on initial load. It's disabled by default and needs to be enabled manually."),t.qZA(),t.TgZ(20,"app-code",8),t.IAx(),t._uU(21,'\n<input [pAutoFocus]="true" >\n'),t.fQ9(),t.qZA(),t.TgZ(22,"app-code",7),t.IAx(),t._uU(23,"\nexport class AutoFocusDemo { }\n"),t.fQ9(),t.qZA(),t.TgZ(24,"h5"),t._uU(25,"Properties"),t.qZA(),t.TgZ(26,"div",9)(27,"table",10)(28,"thead")(29,"tr")(30,"th"),t._uU(31,"Name"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Type"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Default"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Description"),t.qZA()()(),t.TgZ(38,"tbody")(39,"tr")(40,"td"),t._uU(41,"pAutoFocus"),t.qZA(),t.TgZ(42,"td"),t._uU(43,"boolean"),t.qZA(),t.TgZ(44,"td"),t._uU(45,"null"),t.qZA(),t.TgZ(46,"td"),t._uU(47,"When present, it specifies that the component should automatically get focus on load."),t.qZA()()()()(),t.TgZ(48,"h5"),t._uU(49,"Events"),t.qZA(),t.TgZ(50,"p"),t._uU(51,"Directive has no events."),t.qZA(),t.TgZ(52,"h5"),t._uU(53,"Styling"),t.qZA(),t.TgZ(54,"p"),t._uU(55,"Directive does not apply any styling to host."),t.qZA(),t.TgZ(56,"h5"),t._uU(57,"Dependencies"),t.qZA(),t.TgZ(58,"p"),t._uU(59,"None."),t.qZA()(),t.TgZ(60,"p-tabPanel",11)(61,"a",12)(62,"span"),t._uU(63,"View on GitHub"),t.qZA()(),t.TgZ(64,"a",13)(65,"span"),t._uU(66,"Edit in StackBlitz"),t.qZA()(),t.TgZ(67,"app-code",8),t.IAx(),t._uU(68,'\n<input type="text" pInputText [pAutoFocus]="true" placeholder="Automatically focused" >\n'),t.fQ9(),t.qZA()()()()),2&c&&(t.xp6(8),t.Q6J("pAutoFocus",!0))},dependencies:[d.h,a.xf,a.x4,m.P,s.o,r.P],encapsulation:2}),o})(),f=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild([{path:"",component:A}]),u.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,n.u5,d.a,g.LU,m.E,s.j,r.L,f]}),o})()}}]);