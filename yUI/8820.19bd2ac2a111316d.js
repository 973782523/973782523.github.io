"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[8820],{7381:(q,A,n)=>{n.d(A,{a:()=>_,h:()=>c});var i=n(6895),o=n(1571);const p=["code"],e=["*"];let c=(()=>{class a{constructor(s){this.el=s,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return a.\u0275fac=function(s){return new(s||a)(o.Y36(o.SBq))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-code"]],viewQuery:function(s,g){if(1&s&&o.Gf(p,5),2&s){let T;o.iGM(T=o.CRH())&&(g.codeViewChild=T.first)}},inputs:{lang:"lang"},ngContentSelectors:e,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(s,g){1&s&&(o.F$t(),o.TgZ(0,"pre",0)(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA()()),2&s&&o.Q6J("ngClass","language-"+g.lang)},dependencies:[i.mk],encapsulation:2}),a})(),_=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[i.ez]}),a})()},8820:(q,A,n)=>{n.r(A),n.d(A,{PasswordDemoModule:()=>b});var i=n(433),o=n(6895),p=n(9859),e=n(1571),c=n(7108),_=n(485),a=n(4125),l=n(4619),s=n(3032),g=n(7381);function T(t,d){1&t&&(e.TgZ(0,"h6"),e._uU(1,"Pick a password"),e.qZA())}function h(t,d){1&t&&(e._UZ(0,"p-divider"),e.TgZ(1,"p",22),e._uU(2,"Suggestions"),e.qZA(),e.TgZ(3,"ul",23)(4,"li"),e._uU(5,"At least one lowercase"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"At least one uppercase"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"At least one numeric"),e.qZA(),e.TgZ(10,"li"),e._uU(11,"Minimum 8 characters"),e.qZA()())}function f(t,d){1&t&&e._UZ(0,"iframe",24)}const m=function(){return["/i18n"]},w=function(){return["/theming"]};let v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:401,vars:16,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","password","stackblitz","password-demo"],[1,"content-section","implementation"],[1,"card"],[3,"ngModel","feedback","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"ngModel","toggleMask","ngModelChange"],["pTemplate","header"],["pTemplate","footer"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/password","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-password-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"mt-2"],[1,"pl-2","ml-2","mt-0",2,"line-height","1.5"],["src","https://stackblitz.com/edit/primeng-password-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(r,u){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Password"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Password displays strength indicator for password fields."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"p-password",5),e.NdJ("ngModelChange",function(Z){return u.value1=Z}),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Password Meter"),e.qZA(),e.TgZ(14,"p-password",6),e.NdJ("ngModelChange",function(Z){return u.value2=Z}),e.qZA(),e.TgZ(15,"h5"),e._uU(16,"Show Password"),e.qZA(),e.TgZ(17,"p-password",7),e.NdJ("ngModelChange",function(Z){return u.value3=Z}),e.qZA(),e.TgZ(18,"h5"),e._uU(19,"Templating"),e.qZA(),e.TgZ(20,"p-password",6),e.NdJ("ngModelChange",function(Z){return u.value4=Z}),e.YNc(21,T,2,0,"ng-template",8),e.YNc(22,h,12,0,"ng-template",9),e.qZA()()(),e.TgZ(23,"div",10)(24,"p-tabView")(25,"p-tabPanel",11)(26,"h5"),e._uU(27,"Import"),e.qZA(),e.TgZ(28,"app-code",12),e.IAx(),e._uU(29,"\nimport {PasswordModule} from 'primeng/password';\n"),e.fQ9(),e.qZA(),e.TgZ(30,"h5"),e._uU(31,"Getting Started"),e.qZA(),e.TgZ(32,"p"),e._uU(33,"Component is defined using p-password element with a mask and two-way value binding is enabled with standard ngModel directive."),e.qZA(),e.TgZ(34,"app-code",13),e.IAx(),e._uU(35,'\n<input type="password" pPassword />\n<p-password></p-password>\n'),e.fQ9(),e.qZA(),e.TgZ(36,"h5"),e._uU(37,"Model Binding"),e.qZA(),e.TgZ(38,"p"),e._uU(39,"A model can be bound using standard ngModel directive."),e.qZA(),e.TgZ(40,"app-code",13),e.IAx(),e._uU(41,'\n<p-password [(ngModel)]="value1"></p-password>\n'),e.fQ9(),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Customization"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Password component uses regular expressions for middle and strong passwords with the following defaults."),e.qZA(),e.TgZ(46,"h6"),e._uU(47,"Medium"),e.qZA(),e.TgZ(48,"p")(49,"i"),e._uU(50,"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})."),e.qZA()(),e.TgZ(51,"ul")(52,"li"),e._uU(53,"At least one lowercase"),e.qZA(),e.TgZ(54,"li"),e._uU(55,"At least one uppercase or one number"),e.qZA(),e.TgZ(56,"li"),e._uU(57,"Minimum 6 characters"),e.qZA()(),e.TgZ(58,"h6"),e._uU(59,"Strong"),e.qZA(),e.TgZ(60,"p")(61,"i"),e._uU(62,"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),e.qZA()(),e.TgZ(63,"ul")(64,"li"),e._uU(65,"At least one lowercase"),e.qZA(),e.TgZ(66,"li"),e._uU(67,"At least one uppercase"),e.qZA(),e.TgZ(68,"li"),e._uU(69,"At least one numeric"),e.qZA(),e.TgZ(70,"li"),e._uU(71,"Minimum 8 characters"),e.qZA()(),e.TgZ(72,"p"),e._uU(73,"It is possible to define your own checks with the "),e.TgZ(74,"i"),e._uU(75,"mediumRegex"),e.qZA(),e._uU(76," and "),e.TgZ(77,"i"),e._uU(78,"strongRegex"),e.qZA(),e._uU(79," properties."),e.qZA(),e.TgZ(80,"h5"),e._uU(81,"Templating"),e.qZA(),e.TgZ(82,"p"),e._uU(83,"3 templates are included to customize the overlay. These are "),e.TgZ(84,"i"),e._uU(85,"header"),e.qZA(),e._uU(86,", "),e.TgZ(87,"i"),e._uU(88,"content"),e.qZA(),e._uU(89," and "),e.TgZ(90,"i"),e._uU(91,"footer"),e.qZA(),e._uU(92,". Note that content overrides the default meter."),e.qZA(),e.TgZ(93,"app-code",13),e.IAx(),e._uU(94,'\n<p-password [(ngModel)]="value4">\n    <ng-template pTemplate="header">\n        <h6>Pick a password</h6>\n    </ng-template>\n    <ng-template pTemplate="footer">\n        <p-divider></p-divider>\n        <p class="mt-2">Suggestions</p>\n        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">\n            <li>At least one lowercase</li>\n            <li>At least one uppercase</li>\n            <li>At least one numeric</li>\n            <li>Minimum 8 characters</li>\n        </ul>\n    </ng-template>\n</p-password>\n'),e.fQ9(),e.qZA(),e.TgZ(95,"h5"),e._uU(96,"Properties"),e.qZA(),e.TgZ(97,"div",14)(98,"table",15)(99,"thead")(100,"tr")(101,"th"),e._uU(102,"Name"),e.qZA(),e.TgZ(103,"th"),e._uU(104,"Type"),e.qZA(),e.TgZ(105,"th"),e._uU(106,"Default"),e.qZA(),e.TgZ(107,"th"),e._uU(108,"Description"),e.qZA()()(),e.TgZ(109,"tbody")(110,"tr")(111,"td"),e._uU(112,"promptLabel"),e.qZA(),e.TgZ(113,"td"),e._uU(114,"string"),e.qZA(),e.TgZ(115,"td"),e._uU(116,"null"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"Text to prompt password entry. Defaults to PrimeNG "),e.TgZ(119,"a",16),e._uU(120,"I18N API"),e.qZA(),e._uU(121," configuration."),e.qZA()(),e.TgZ(122,"tr")(123,"td"),e._uU(124,"mediumRegex"),e.qZA(),e.TgZ(125,"td"),e._uU(126,"string"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"Regex for a medium level password."),e.qZA(),e.TgZ(129,"td"),e._uU(130,"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})."),e.qZA()(),e.TgZ(131,"tr")(132,"td"),e._uU(133,"strongRegex"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"string"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"Regex for a strong level password."),e.qZA(),e.TgZ(138,"td"),e._uU(139,"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),e.qZA()(),e.TgZ(140,"tr")(141,"td"),e._uU(142,"weakLabel"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"string"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"null"),e.qZA(),e.TgZ(147,"td"),e._uU(148,"Text for a weak password. Defaults to PrimeNG "),e.TgZ(149,"a",16),e._uU(150,"I18N API"),e.qZA(),e._uU(151," configuration."),e.qZA()(),e.TgZ(152,"tr")(153,"td"),e._uU(154,"mediumLabel"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"string"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"null"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"Text for a medium password. Defaults to PrimeNG "),e.TgZ(161,"a",16),e._uU(162,"I18N API"),e.qZA(),e._uU(163," configuration."),e.qZA()(),e.TgZ(164,"tr")(165,"td"),e._uU(166,"strongLabel"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"string"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"null"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"Text for a strong password. Defaults to PrimeNG "),e.TgZ(173,"a",16),e._uU(174,"I18N API"),e.qZA(),e._uU(175," configuration."),e.qZA()(),e.TgZ(176,"tr")(177,"td"),e._uU(178,"feedback"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"boolean"),e.qZA(),e.TgZ(181,"td"),e._uU(182,"true"),e.qZA(),e.TgZ(183,"td"),e._uU(184,"Whether to show the strength indicator or not."),e.qZA()(),e.TgZ(185,"tr")(186,"td"),e._uU(187,"toggleMask"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"boolean"),e.qZA(),e.TgZ(190,"td"),e._uU(191,"false"),e.qZA(),e.TgZ(192,"td"),e._uU(193,"Whether to show an icon to display the password as plain text."),e.qZA()(),e.TgZ(194,"tr")(195,"td"),e._uU(196,"appendTo"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"string"),e.qZA(),e.TgZ(199,"td"),e._uU(200,"null"),e.qZA(),e.TgZ(201,"td"),e._uU(202,'Id of the element or "body" for document where the overlay should be appended to.'),e.qZA()(),e.TgZ(203,"tr")(204,"td"),e._uU(205,"inputStyle"),e.qZA(),e.TgZ(206,"td"),e._uU(207,"any"),e.qZA(),e.TgZ(208,"td"),e._uU(209,"null"),e.qZA(),e.TgZ(210,"td"),e._uU(211,"Inline style of the input field."),e.qZA()(),e.TgZ(212,"tr")(213,"td"),e._uU(214,"inputStyleClass"),e.qZA(),e.TgZ(215,"td"),e._uU(216,"string"),e.qZA(),e.TgZ(217,"td"),e._uU(218,"null"),e.qZA(),e.TgZ(219,"td"),e._uU(220,"Style class of the input field."),e.qZA()(),e.TgZ(221,"tr")(222,"td"),e._uU(223,"inputId"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"string"),e.qZA(),e.TgZ(226,"td"),e._uU(227,"null"),e.qZA(),e.TgZ(228,"td"),e._uU(229,"Identifier of the accessible input element."),e.qZA()(),e.TgZ(230,"tr")(231,"td"),e._uU(232,"style"),e.qZA(),e.TgZ(233,"td"),e._uU(234,"string"),e.qZA(),e.TgZ(235,"td"),e._uU(236,"null"),e.qZA(),e.TgZ(237,"td"),e._uU(238,"Inline style of the component."),e.qZA()(),e.TgZ(239,"tr")(240,"td"),e._uU(241,"styleClass"),e.qZA(),e.TgZ(242,"td"),e._uU(243,"string"),e.qZA(),e.TgZ(244,"td"),e._uU(245,"null"),e.qZA(),e.TgZ(246,"td"),e._uU(247,"Style class of the component."),e.qZA()(),e.TgZ(248,"tr")(249,"td"),e._uU(250,"placeholder"),e.qZA(),e.TgZ(251,"td"),e._uU(252,"string"),e.qZA(),e.TgZ(253,"td"),e._uU(254,"null"),e.qZA(),e.TgZ(255,"td"),e._uU(256,"Advisory information to display on input."),e.qZA()(),e.TgZ(257,"tr")(258,"td"),e._uU(259,"label"),e.qZA(),e.TgZ(260,"td"),e._uU(261,"string"),e.qZA(),e.TgZ(262,"td"),e._uU(263,"null"),e.qZA(),e.TgZ(264,"td"),e._uU(265,"Label of the input for accessibility."),e.qZA()(),e.TgZ(266,"tr")(267,"td"),e._uU(268,"ariaLabel"),e.qZA(),e.TgZ(269,"td"),e._uU(270,"string"),e.qZA(),e.TgZ(271,"td"),e._uU(272,"null"),e.qZA(),e.TgZ(273,"td"),e._uU(274,"Defines a string that labels the input for accessibility."),e.qZA()(),e.TgZ(275,"tr")(276,"td"),e._uU(277,"ariaLabelledBy"),e.qZA(),e.TgZ(278,"td"),e._uU(279,"string"),e.qZA(),e.TgZ(280,"td"),e._uU(281,"null"),e.qZA(),e.TgZ(282,"td"),e._uU(283,"Specifies one or more IDs in the DOM that labels the input field."),e.qZA()(),e.TgZ(284,"tr")(285,"td"),e._uU(286,"showClear"),e.qZA(),e.TgZ(287,"td"),e._uU(288,"boolean"),e.qZA(),e.TgZ(289,"td"),e._uU(290,"false"),e.qZA(),e.TgZ(291,"td"),e._uU(292,"When enabled, a clear icon is displayed to clear the value."),e.qZA()()()()(),e.TgZ(293,"h5"),e._uU(294,"Events"),e.qZA(),e.TgZ(295,"div",14)(296,"table",15)(297,"thead")(298,"tr")(299,"th"),e._uU(300,"Name"),e.qZA(),e.TgZ(301,"th"),e._uU(302,"Parameters"),e.qZA(),e.TgZ(303,"th"),e._uU(304,"Description"),e.qZA()()(),e.TgZ(305,"tbody")(306,"tr")(307,"td"),e._uU(308,"onBlur"),e.qZA(),e.TgZ(309,"td"),e._uU(310,"event: Blur event "),e.qZA(),e.TgZ(311,"td"),e._uU(312,"Callback to invoke on blur of input field."),e.qZA()(),e.TgZ(313,"tr")(314,"td"),e._uU(315,"onFocus"),e.qZA(),e.TgZ(316,"td"),e._uU(317,"event: Focus event "),e.qZA(),e.TgZ(318,"td"),e._uU(319,"Callback to invoke on focus of input field."),e.qZA()(),e.TgZ(320,"tr")(321,"td"),e._uU(322,"onClear"),e.qZA(),e.TgZ(323,"td"),e._uU(324,"-"),e.qZA(),e.TgZ(325,"td"),e._uU(326,"Callback to invoke when input field is cleared."),e.qZA()()()()(),e.TgZ(327,"h5"),e._uU(328,"Templates"),e.qZA(),e.TgZ(329,"div",14)(330,"table",15)(331,"thead")(332,"tr")(333,"th"),e._uU(334,"Name"),e.qZA(),e.TgZ(335,"th"),e._uU(336,"Parameters"),e.qZA()()(),e.TgZ(337,"tbody")(338,"tr")(339,"td"),e._uU(340,"header"),e.qZA(),e.TgZ(341,"td"),e._uU(342,"-"),e.qZA()(),e.TgZ(343,"tr")(344,"td"),e._uU(345,"content"),e.qZA(),e.TgZ(346,"td"),e._uU(347,"-"),e.qZA()(),e.TgZ(348,"tr")(349,"td"),e._uU(350,"footer"),e.qZA(),e.TgZ(351,"td"),e._uU(352,"-"),e.qZA()()()()(),e.TgZ(353,"h5"),e._uU(354,"Styling"),e.qZA(),e.TgZ(355,"p"),e._uU(356,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(357,"a",16),e._uU(358,"theming page"),e.qZA(),e._uU(359,"."),e.qZA(),e.TgZ(360,"div",14)(361,"table",15)(362,"thead")(363,"tr")(364,"th"),e._uU(365,"Name"),e.qZA(),e.TgZ(366,"th"),e._uU(367,"Element"),e.qZA()()(),e.TgZ(368,"tbody")(369,"tr")(370,"td"),e._uU(371,"p-password-panel"),e.qZA(),e.TgZ(372,"td"),e._uU(373,"Container of password panel"),e.qZA()(),e.TgZ(374,"tr")(375,"td"),e._uU(376,"p-password-meter"),e.qZA(),e.TgZ(377,"td"),e._uU(378,"Meter element of password strength"),e.qZA()(),e.TgZ(379,"tr")(380,"td"),e._uU(381,"p-password-info"),e.qZA(),e.TgZ(382,"td"),e._uU(383,"Text to display strength"),e.qZA()()()()(),e.TgZ(384,"h5"),e._uU(385,"Dependencies"),e.qZA(),e.TgZ(386,"p"),e._uU(387,"None."),e.qZA()(),e.TgZ(388,"p-tabPanel",17)(389,"a",18)(390,"span"),e._uU(391,"View on GitHub"),e.qZA()(),e.TgZ(392,"a",19)(393,"span"),e._uU(394,"Edit in StackBlitz"),e.qZA()(),e.TgZ(395,"app-code",13),e.IAx(),e._uU(396,'\n<div class="card">\n    <h5>Basic</h5>\n    <p-password [(ngModel)]="value1" [feedback]="false"></p-password>\n\n    <h5>Password Meter</h5>\n    <p-password [(ngModel)]="value2"></p-password>\n\n    <h5>Show Password</h5>\n    <p-password [(ngModel)]="value3" [toggleMask]="true"></p-password>\n\n    <h5>Templating</h5>\n    <p-password [(ngModel)]="value4">\n        <ng-template pTemplate="header">\n            <h6>Pick a password</h6>\n        </ng-template>\n        <ng-template pTemplate="footer">\n            <p-divider></p-divider>\n            <p class="mt-2">Suggestions</p>\n            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">\n                <li>At least one lowercase</li>\n                <li>At least one uppercase</li>\n                <li>At least one numeric</li>\n                <li>Minimum 8 characters</li>\n            </ul>\n        </ng-template>\n    </p-password>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(397,"app-code",12),e.IAx(),e._uU(398,"\n@Component({\n    templateUrl: './passworddemo.html',\n    styles: [`\n        :host ::ng-deep .p-password input {\n            width: 15rem\n        }\n    `]\n})\nexport class PasswordDemo {\n\n    value1: string;\n\n    value2: string;\n\n    value3: string;\n\n    value4: string;\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(399,"p-tabPanel",20),e.YNc(400,f,1,0,"ng-template",21),e.qZA()()()),2&r&&(e.xp6(11),e.Q6J("ngModel",u.value1)("feedback",!1),e.xp6(3),e.Q6J("ngModel",u.value2),e.xp6(3),e.Q6J("ngModel",u.value3)("toggleMask",!0),e.xp6(3),e.Q6J("ngModel",u.value4),e.xp6(99),e.Q6J("routerLink",e.DdM(11,m)),e.xp6(30),e.Q6J("routerLink",e.DdM(12,m)),e.xp6(12),e.Q6J("routerLink",e.DdM(13,m)),e.xp6(12),e.Q6J("routerLink",e.DdM(14,m)),e.xp6(184),e.Q6J("routerLink",e.DdM(15,w)))},dependencies:[p.yS,c.ro,_.jx,a.i,l.xf,l.x4,i.JJ,i.On,s.P,g.h],styles:["[_nghost-%COMP%]     .p-password input{width:15rem}"]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:v}]),p.Bz]}),t})();var P=n(7735),y=n(1508);let b=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,M,P.gz,a.x,y.LU,i.u5,s.L,g.a]}),t})()}}]);