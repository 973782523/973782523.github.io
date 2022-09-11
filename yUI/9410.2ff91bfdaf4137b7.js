"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[9410],{7381:(A,Z,p)=>{p.d(Z,{a:()=>x,h:()=>T});var m=p(6895),t=p(1571);const r=["code"],e=["*"];let T=(()=>{class a{constructor(i){this.el=i,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-code"]],viewQuery:function(i,g){if(1&i&&t.Gf(r,5),2&i){let c;t.iGM(c=t.CRH())&&(g.codeViewChild=c.first)}},inputs:{lang:"lang"},ngContentSelectors:e,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(i,g){1&i&&(t.F$t(),t.TgZ(0,"pre",0)(1,"code",null,1),t.Hsn(3),t._uU(4,"\n"),t.qZA()()),2&i&&t.Q6J("ngClass","language-"+g.lang)},dependencies:[m.mk],encapsulation:2}),a})(),x=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez]}),a})()},7881:(A,Z,p)=>{p.r(Z),p.d(Z,{InputTextDemoModule:()=>v});var m=p(6895),t=p(433),r=p(9859),e=p(1571),T=p(6440),x=p(4619),a=p(485),o=p(3032),i=p(7381);function g(n,d){1&n&&e._UZ(0,"iframe",42)}const c=function(){return["/theming"]};let f=(()=>{class n{constructor(){this.disabled=!0,this.value5="Disabled"}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:209,vars:12,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","inputtext","stackblitz","inputtext-demo"],[1,"content-section","implementation"],[1,"card"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"ml-2"],[1,"p-float-label"],["id","float-input","type","text","pInputText","",3,"ngModel","ngModelChange"],["for","float-input"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Search",3,"ngModel","ngModelChange"],[1,"p-input-icon-right"],[1,"pi","pi-spin","pi-spinner"],["type","text","pInputText",""],[1,"field"],["for","username1",1,"block"],["id","username1","type","username","aria-describedby","username1-help","pInputText","",3,"ngModel","ngModelChange"],["id","username1-help",1,"block"],["for","username2",1,"block"],["id","username2","type","username","aria-describedby","username2-help","pInputText","",1,"ng-invalid","ng-dirty"],["id","username2-help",1,"p-error","block"],["id","float-input-invalid","type","text","pInputText","",1,"ng-invalid","ng-dirty",3,"ngModel","ngModelChange"],["for","float-input-invalid"],["id","disabled-input","type","text","pInputText","",3,"disabled","ngModel","ngModelChange"],[1,"sizes"],["type","text","placeholder","Small","pInputText","",1,"p-inputtext-sm"],["type","text","placeholder","Normal","pInputText",""],["type","text","placeholder","Large","pInputText","",1,"p-inputtext-lg"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputtext","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-inputtext-demo","target","_blank",1,"btn-viewsource","ml-2"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-inputtext-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(s,l){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Inputtext"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"InputText renders a text field to enter data."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"input",5),e.NdJ("ngModelChange",function(u){return l.value1=u}),e.qZA(),e.TgZ(12,"span",6),e._uU(13),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Float Label"),e.qZA(),e.TgZ(16,"span",7)(17,"input",8),e.NdJ("ngModelChange",function(u){return l.value2=u}),e.qZA(),e.TgZ(18,"label",9),e._uU(19,"Username"),e.qZA()(),e.TgZ(20,"h5"),e._uU(21,"Left Icon"),e.qZA(),e.TgZ(22,"span",10),e._UZ(23,"i",11),e.TgZ(24,"input",12),e.NdJ("ngModelChange",function(u){return l.value3=u}),e.qZA()(),e.TgZ(25,"h5"),e._uU(26,"Right Icon"),e.qZA(),e.TgZ(27,"span",13),e._UZ(28,"i",14)(29,"input",15),e.qZA(),e.TgZ(30,"h5"),e._uU(31,"Help Text"),e.qZA(),e.TgZ(32,"div",16)(33,"label",17),e._uU(34,"Username"),e.qZA(),e.TgZ(35,"input",18),e.NdJ("ngModelChange",function(u){return l.value4=u}),e.qZA(),e.TgZ(36,"small",19),e._uU(37,"Enter your username to reset your password."),e.qZA()(),e.TgZ(38,"h5"),e._uU(39,"Invalid"),e.qZA(),e.TgZ(40,"div",16)(41,"label",20),e._uU(42,"Username"),e.qZA(),e._UZ(43,"input",21),e.TgZ(44,"small",22),e._uU(45,"Username is not available."),e.qZA()(),e.TgZ(46,"h5"),e._uU(47,"Invalid with Float Label"),e.qZA(),e.TgZ(48,"span",7)(49,"input",23),e.NdJ("ngModelChange",function(u){return l.value6=u}),e.qZA(),e.TgZ(50,"label",24),e._uU(51,"Username"),e.qZA()(),e.TgZ(52,"h5"),e._uU(53,"Disabled"),e.qZA(),e.TgZ(54,"input",25),e.NdJ("ngModelChange",function(u){return l.value5=u}),e.qZA(),e.TgZ(55,"h5"),e._uU(56,"Sizes"),e.qZA(),e.TgZ(57,"div",26),e._UZ(58,"input",27)(59,"input",28)(60,"input",29),e.qZA()()(),e.TgZ(61,"div",30)(62,"p-tabView")(63,"p-tabPanel",31)(64,"h5"),e._uU(65,"Import"),e.qZA(),e.TgZ(66,"app-code",32),e.IAx(),e._uU(67,"\nimport {InputTextModule} from 'primeng/inputtext';\n"),e.fQ9(),e.qZA(),e.TgZ(68,"h5"),e._uU(69,"Getting Started"),e.qZA(),e.TgZ(70,"p"),e._uU(71,"InputText is applied to an input field with pInputText directive."),e.qZA(),e.TgZ(72,"app-code",33),e.IAx(),e._uU(73,'\n<input type="text" pInputText />\n'),e.fQ9(),e.qZA(),e.TgZ(74,"h5"),e._uU(75,"Model Binding"),e.qZA(),e.TgZ(76,"p"),e._uU(77,"A model can be bound using standard ngModel directive."),e.qZA(),e.TgZ(78,"app-code",33),e.IAx(),e._uU(79,'\n<input type="text" pInputText [(ngModel)]="property"/>\n'),e.fQ9(),e.qZA(),e.TgZ(80,"h5"),e._uU(81,"Float Label"),e.qZA(),e.TgZ(82,"p"),e._uU(83,"A floating label is implemented by wrapping the input and the label inside a container with "),e.TgZ(84,"i"),e._uU(85,".p-float-label"),e.qZA(),e._uU(86," class."),e.qZA(),e.TgZ(87,"app-code",33),e.IAx(),e._uU(88,'\n<span class="p-float-label">\n    <input id="float-input" type="text" pInputText> \n    <label for="float-input">Username</label>\n</span>\n'),e.fQ9(),e.qZA(),e.TgZ(89,"h5"),e._uU(90,"Icons"),e.qZA(),e.TgZ(91,"p"),e._uU(92,"An icon can be integrated within an input field by wrapping the input and the icon with an element having either "),e.TgZ(93,"i"),e._uU(94,"p-input-icon-right"),e.qZA(),e._uU(95," or "),e.TgZ(96,"i"),e._uU(97,"p-input-icon-left"),e.qZA(),e._uU(98," class depending on the icon location."),e.qZA(),e.TgZ(99,"app-code",33),e.IAx(),e._uU(100,'\n<span class="p-input-icon-left">\n    <i class="pi pi-search"></i>\n    <input type="text" pInputText [(ngModel)]="value1" placeholder="Search">         \n</span>\n\n<span class="p-input-icon-right">\n    <i class="pi pi-spin pi-spinner"></i>\n    <input type="text" pInputText [(ngModel)]="value2" >        \n</span> \n'),e.fQ9(),e.qZA(),e.TgZ(101,"h5"),e._uU(102,"Sizes"),e.qZA(),e.TgZ(103,"p"),e._uU(104,"2 more sizes are available in addition to a regular input, for a smaller input add "),e.TgZ(105,"i"),e._uU(106,"p-inputtext-sm"),e.qZA(),e._uU(107," and for a larger one, use "),e.TgZ(108,"i"),e._uU(109,"p-inputtext-lg"),e.qZA(),e._uU(110,". Note that these classes should be used to change the size of a particular field, for global scaling see "),e.TgZ(111,"a",34),e._uU(112,"theming"),e.qZA(),e._uU(113," page."),e.qZA(),e.TgZ(114,"app-code",33),e.IAx(),e._uU(115,'\n<input type="text" pInputText class="p-inputtext-sm" placeholder="Small">         \n<input type="text" pInputText class="p-inputtext-sm" placeholder="Small">         \n<input type="text" pInputText class="p-inputtext-lg"  placeholder="Large">   \n'),e.fQ9(),e.qZA(),e.TgZ(116,"p"),e._uU(117,"Instead of repeating the scale classes for each input, sizing can also be applied to a group by adding the class to a container element so that descendant inputs share the same style easier"),e.qZA(),e.TgZ(118,"app-code",33),e.IAx(),e._uU(119,'\n<div class="p-inputtext-sm">\n    <input type="text" pInputText>\n    <p-inputnumber></p-inputnumber>\n    <p-inputmask></p-inputmask>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(120,"h5"),e._uU(121,"Outlined vs Filled"),e.qZA(),e.TgZ(122,"p"),e._uU(123,"Input fields come in two styles, default is "),e.TgZ(124,"i"),e._uU(125,"outlined"),e.qZA(),e._uU(126," with borders around the field whereas "),e.TgZ(127,"i"),e._uU(128,"filled"),e.qZA(),e._uU(129," alternative adds a background color to the field. Applying "),e.TgZ(130,"i"),e._uU(131,"p-input-filled"),e.qZA(),e._uU(132," to an ancestor of an input "),e.TgZ(133,"i"),e._uU(134,"p-input-filled"),e.qZA(),e._uU(135," enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as document body or the application element to apply the style class."),e.qZA(),e.TgZ(136,"app-code",33),e.IAx(),e._uU(137,'\n<div class="p-input-filled">\n    <input type="text" pInputText>\n</div>   \n'),e.fQ9(),e.qZA(),e.TgZ(138,"h5"),e._uU(139,"Addons"),e.qZA(),e.TgZ(140,"p"),e._uU(141,"Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside "),e.TgZ(142,"i"),e._uU(143,".p-inputgroup element"),e.qZA(),e._uU(144,". Multiple addons can be used within the same group as well."),e.qZA(),e.TgZ(145,"app-code",33),e.IAx(),e._uU(146,'\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon"><i class="pi pi-user"></i></span>\n    <input type="text" pInputText placeholder="Username">         \n</div>\n\n<div class="p-inputgroup">\n    <span class="p-inputgroup-addon"><i class="pi pi-tags"></i></span>  \n    <span class="p-inputgroup-addon"><i class="pi pi-shopping-cart"></i></span>   \n    <input type="text" pInputText placeholder="Price"> \n    <span class="p-inputgroup-addon">$</span>  \n    <span class="p-inputgroup-addon">.00</span>      \n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(147,"h5"),e._uU(148,"Properties"),e.qZA(),e.TgZ(149,"div",35)(150,"table",36)(151,"thead")(152,"tr")(153,"th"),e._uU(154,"Name"),e.qZA(),e.TgZ(155,"th"),e._uU(156,"Type"),e.qZA(),e.TgZ(157,"th"),e._uU(158,"Default"),e.qZA(),e.TgZ(159,"th"),e._uU(160,"Description"),e.qZA()()(),e.TgZ(161,"tbody")(162,"tr")(163,"td"),e._uU(164,"disabled"),e.qZA(),e.TgZ(165,"td"),e._uU(166,"boolean"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"false"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"When present, it specifies that the element should be disabled."),e.qZA()()()()(),e.TgZ(171,"h5"),e._uU(172,"Styling"),e.qZA(),e.TgZ(173,"p"),e._uU(174,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(175,"a",34),e._uU(176,"theming page"),e.qZA(),e._uU(177,"."),e.qZA(),e.TgZ(178,"div",35)(179,"table",36)(180,"thead")(181,"tr")(182,"th"),e._uU(183,"Name"),e.qZA(),e.TgZ(184,"th"),e._uU(185,"Element"),e.qZA()()(),e.TgZ(186,"tbody")(187,"tr")(188,"td"),e._uU(189,"p-inputtext"),e.qZA(),e.TgZ(190,"td"),e._uU(191,"Input element"),e.qZA()()()()(),e.TgZ(192,"h5"),e._uU(193,"Dependencies"),e.qZA(),e.TgZ(194,"p"),e._uU(195,"None."),e.qZA()(),e.TgZ(196,"p-tabPanel",37)(197,"a",38)(198,"span"),e._uU(199,"View on GitHub"),e.qZA()(),e.TgZ(200,"a",39)(201,"span"),e._uU(202,"Edit in StackBlitz"),e.qZA()(),e.TgZ(203,"app-code",33),e.IAx(),e._uU(204,'\n<h5>Basic</h5>\n<input type="text" pInputText [(ngModel)]="value1"> \n<span class="ml-2">{{value1}}</span>\n\n<h5>Float Label</h5>\n<span class="p-float-label">\n    <input id="float-input" type="text" pInputText [(ngModel)]="value2"> \n    <label for="float-input">Username</label>\n</span>\n\n<h5>Left Icon</h5>\n<span class="p-input-icon-left">\n    <i class="pi pi-search"></i>\n    <input type="text" pInputText placeholder="Search" [(ngModel)]="value3" />\n</span>\n\n<h5>Right Icon</h5>\n<span class="p-input-icon-right">\n    <i class="pi pi-spin pi-spinner"></i>\n    <input type="text" pInputText />\n</span>\n\n<h5>Help Text</h5>\n<div class="field">\n    <label for="username1" class="block">Username</label>\n    <input id="username1" type="username" aria-describedby="username1-help" pInputText [(ngModel)]="value4" />\n    <small id="username1-help" class="block">Enter your username to reset your password.</small>\n</div>\n\n<h5>Invalid</h5>\n<div class="field">\n    <label for="username2" class="block">Username</label>\n    <input id="username2" type="username" aria-describedby="username2-help" class="ng-invalid ng-dirty" pInputText />\n    <small id="username2-help" class="p-error block">Username is not available.</small>\n</div>\n\n<h5>Invalid with Float Label</h5>\n<span class="p-float-label">\n    <input id="float-input-invalid" type="text" pInputText [(ngModel)]="value6" class="ng-invalid ng-dirty"> \n    <label for="float-input-invalid">Username</label>\n</span>\n\n<h5>Disabled</h5>\n<input id="disabled-input" type="text" pInputText [disabled]="disabled" [(ngModel)]="value5" />\n\n<h5>Sizes</h5>\n<div class="sizes">\n    <input type="text" class="p-inputtext-sm" placeholder="Small" pInputText />\n    <input type="text" placeholder="Normal" pInputText />\n    <input type="text" class="p-inputtext-lg" placeholder="Large"  pInputText />\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(205,"app-code",32),e.IAx(),e._uU(206,"\nexport class InputTextDemo {\n\n    disabled: boolean = true;\n\n    value1: string;\n\n    value2: string;\n\n    value3: string;\n\n    value4: string;\n\n    value5: string = 'Disabled';\n\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(207,"p-tabPanel",40),e.YNc(208,g,1,0,"ng-template",41),e.qZA()()()),2&s&&(e.xp6(11),e.Q6J("ngModel",l.value1),e.xp6(2),e.Oqu(l.value1),e.xp6(4),e.Q6J("ngModel",l.value2),e.xp6(7),e.Q6J("ngModel",l.value3),e.xp6(11),e.Q6J("ngModel",l.value4),e.xp6(14),e.Q6J("ngModel",l.value6),e.xp6(5),e.Q6J("disabled",l.disabled)("ngModel",l.value5),e.xp6(57),e.Q6J("routerLink",e.DdM(10,c)),e.xp6(64),e.Q6J("routerLink",e.DdM(11,c)))},dependencies:[r.yS,t.Fj,t.JJ,t.On,T.o,x.xf,x.x4,a.jx,o.P,i.h],styles:[".sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:last-child{margin-bottom:0}.field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}"]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:f}]),r.Bz]}),n})();var _=p(1928),b=p(1508);let v=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,U,t.u5,T.j,_.hJ,b.LU,o.L,i.a]}),n})()}}]);