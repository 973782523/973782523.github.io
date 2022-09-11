"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[6013],{7381:(h,p,n)=>{n.d(p,{a:()=>g,h:()=>Z});var c=n(6895),a=n(1571);const e=["code"],m=["*"];let Z=(()=>{class r{constructor(o){this.el=o,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return r.\u0275fac=function(o){return new(o||r)(a.Y36(a.SBq))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-code"]],viewQuery:function(o,s){if(1&o&&a.Gf(e,5),2&o){let l;a.iGM(l=a.CRH())&&(s.codeViewChild=l.first)}},inputs:{lang:"lang"},ngContentSelectors:m,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(o,s){1&o&&(a.F$t(),a.TgZ(0,"pre",0)(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA()()),2&o&&a.Q6J("ngClass","language-"+s.lang)},dependencies:[c.mk],encapsulation:2}),r})(),g=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[c.ez]}),r})()},6013:(h,p,n)=>{n.r(p),n.d(p,{CardDemoModule:()=>D});var c=n(6895),a=n(9859),e=n(1571),m=n(2186),Z=n(485),g=n(2863),r=n(4619),i=n(7381),o=n(3032);function s(t,d){1&t&&e._UZ(0,"img",20)}const l=function(){return{"margin-left":".5em"}};function A(t,d){1&t&&e._UZ(0,"p-button",21)(1,"p-button",22),2&t&&(e.xp6(1),e.Akn(e.DdM(2,l)))}function T(t,d){1&t&&e._UZ(0,"iframe",23)}const q=function(){return{width:"25rem","margin-bottom":"2em"}},U=function(){return{width:"360px"}},f=function(){return["/theming"]};let _=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:196,vars:8,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","card","stackblitz","card-demo"],[1,"content-section","implementation"],["header","Simple Card"],["header","Advanced Card","subheader","Card Subheader","styleClass","p-card-shadow"],["pTemplate","header"],["pTemplate","footer"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/card","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-card-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["alt","Card","src","assets/showcase/images/usercard.png"],["label","Save","icon","pi pi-check"],["label","Cancel","icon","pi pi-times","styleClass","p-button-secondary"],["src","https://stackblitz.com/edit/primeng-card-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(u,w){1&u&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Card"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Card is a flexible container component."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"p-card",4)(9,"p"),e._uU(10,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.qZA()(),e.TgZ(11,"p-card",5),e.YNc(12,s,1,0,"ng-template",6),e.TgZ(13,"p"),e._uU(14,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.qZA(),e.YNc(15,A,2,3,"ng-template",7),e.qZA()(),e.TgZ(16,"div",8)(17,"p-tabView")(18,"p-tabPanel",9)(19,"h5"),e._uU(20,"Import"),e.qZA(),e.TgZ(21,"app-code",10),e.IAx(),e._uU(22,"\nimport {CardModule} from 'primeng/card';\n"),e.fQ9(),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Getting Started"),e.qZA(),e.TgZ(25,"p"),e._uU(26,"Card is defined with p-card element."),e.qZA(),e.TgZ(27,"app-code",11),e.IAx(),e._uU(28,"\n<p-card>\n    Content\n</p-card>\n"),e.fQ9(),e.qZA(),e.TgZ(29,"h5"),e._uU(30,"Header"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Header text of the card is provided using the "),e.TgZ(33,"i"),e._uU(34,"header"),e.qZA(),e._uU(35," property, optionally "),e.TgZ(36,"i"),e._uU(37,"subheader"),e.qZA(),e._uU(38," property is available for additional information about the card."),e.qZA(),e.TgZ(39,"app-code",11),e.IAx(),e._uU(40,'\n<p-card header="header">\n    Content\n</p-card>\n'),e.fQ9(),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"Header and Footer Content"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Header and Footers sections can be customized using "),e.TgZ(45,"i"),e._uU(46,"header"),e.qZA(),e._uU(47," and "),e.TgZ(48,"i"),e._uU(49,"footer"),e.qZA(),e._uU(50," templates."),e.qZA(),e.TgZ(51,"app-code",11),e.IAx(),e._uU(52,'\n<p-card>\n    <ng-template pTemplate="header">\n        Header content here\n    </ng-template>\n    Body Content\n    <ng-template pTemplate="footer">\n        Footer content here\n    </ng-template>\n</p-card>\n'),e.fQ9(),e.qZA(),e.TgZ(53,"h5"),e._uU(54,"Properties"),e.qZA(),e.TgZ(55,"div",12)(56,"table",13)(57,"thead")(58,"tr")(59,"th"),e._uU(60,"Name"),e.qZA(),e.TgZ(61,"th"),e._uU(62,"Type"),e.qZA(),e.TgZ(63,"th"),e._uU(64,"Default"),e.qZA(),e.TgZ(65,"th"),e._uU(66,"Description"),e.qZA()()(),e.TgZ(67,"tbody")(68,"tr")(69,"td"),e._uU(70,"header"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"string"),e.qZA(),e.TgZ(73,"td"),e._uU(74,"null"),e.qZA(),e.TgZ(75,"td"),e._uU(76,"Title of the card."),e.qZA()(),e.TgZ(77,"tr")(78,"td"),e._uU(79,"subheader"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"string"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"null"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"Secondary title of the card."),e.qZA()(),e.TgZ(86,"tr")(87,"td"),e._uU(88,"style"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"string"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"null"),e.qZA(),e.TgZ(93,"td"),e._uU(94,"Inline style of the component."),e.qZA()(),e.TgZ(95,"tr")(96,"td"),e._uU(97,"styleClass"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"string"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"null"),e.qZA(),e.TgZ(102,"td"),e._uU(103,"Style class of the component."),e.qZA()()()()(),e.TgZ(104,"h5"),e._uU(105,"Templates"),e.qZA(),e.TgZ(106,"div",12)(107,"table",13)(108,"thead")(109,"tr")(110,"th"),e._uU(111,"Name"),e.qZA(),e.TgZ(112,"th"),e._uU(113,"Parameters"),e.qZA()()(),e.TgZ(114,"tbody")(115,"tr")(116,"td"),e._uU(117,"header"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"-"),e.qZA()(),e.TgZ(120,"tr")(121,"td"),e._uU(122,"title"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"-"),e.qZA()(),e.TgZ(125,"tr")(126,"td"),e._uU(127,"subtitle"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"-"),e.qZA()(),e.TgZ(130,"tr")(131,"td"),e._uU(132,"content"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"-"),e.qZA()(),e.TgZ(135,"tr")(136,"td"),e._uU(137,"footer"),e.qZA(),e.TgZ(138,"td"),e._uU(139,"-"),e.qZA()()()()(),e.TgZ(140,"h5"),e._uU(141,"Styling"),e.qZA(),e.TgZ(142,"p"),e._uU(143,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(144,"a",14),e._uU(145,"theming page"),e.qZA(),e._uU(146,"."),e.qZA(),e.TgZ(147,"div",12)(148,"table",13)(149,"thead")(150,"tr")(151,"th"),e._uU(152,"Name"),e.qZA(),e.TgZ(153,"th"),e._uU(154,"Element"),e.qZA()()(),e.TgZ(155,"tbody")(156,"tr")(157,"td"),e._uU(158,"p-card"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"Container element."),e.qZA()(),e.TgZ(161,"tr")(162,"td"),e._uU(163,"p-card-header"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"Title element."),e.qZA()(),e.TgZ(166,"tr")(167,"td"),e._uU(168,"p-card-subheader"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"Subtitle element."),e.qZA()(),e.TgZ(171,"tr")(172,"td"),e._uU(173,"p-card-content"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"Content of the card."),e.qZA()(),e.TgZ(176,"tr")(177,"td"),e._uU(178,"p-card-footer"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Footer of the card."),e.qZA()()()()(),e.TgZ(181,"h5"),e._uU(182,"Dependencies"),e.qZA(),e.TgZ(183,"p"),e._uU(184,"None."),e.qZA()(),e.TgZ(185,"p-tabPanel",15)(186,"a",16)(187,"span"),e._uU(188,"View on GitHub"),e.qZA()(),e.TgZ(189,"a",17)(190,"span"),e._uU(191,"Edit in StackBlitz"),e.qZA()(),e.TgZ(192,"app-code",11),e.IAx(),e._uU(193,'\n<p-card header="Simple Card" [style]="{\'width\': \'25rem\', \'margin-bottom\': \'2em\'}">\n    <ng-template pTemplate="header">\n        <img alt="Card" src="assets/showcase/images/usercard.png">\n    </ng-template>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n</p-card>\n\n<p-card header="Advanced Card" subheader="Card Subheader" [style]="{width: \'360px\'}" styleClass="p-card-shadow">\n    <ng-template pTemplate="header">\n        <img alt="Card" src="assets/showcase/images/usercard.png">\n    </ng-template>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n    <ng-template pTemplate="footer">\n        <p-button label="Save" icon="pi pi-check"></p-button>\n        <p-button label="Cancel" icon="pi pi-times" styleClass="p-button-secondary" [style]="{\'margin-left\': \'.5em\'}"></p-button>\n    </ng-template>\n</p-card>\n'),e.fQ9(),e.qZA()(),e.TgZ(194,"p-tabPanel",18),e.YNc(195,T,1,0,"ng-template",19),e.qZA()()()),2&u&&(e.xp6(8),e.Akn(e.DdM(5,q)),e.xp6(3),e.Akn(e.DdM(6,U)),e.xp6(133),e.Q6J("routerLink",e.DdM(7,f)))},dependencies:[a.yS,m.Z,Z.jx,g.zx,r.xf,r.x4,i.h,o.P],styles:["[_nghost-%COMP%]     p{line-height:1.5;margin:0}"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild([{path:"",component:_}]),a.Bz]}),t})();var b=n(4378),y=n(1508),v=n(1928);let D=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,C,b.d,v.hJ,y.LU,i.a,o.L]}),t})()}}]);