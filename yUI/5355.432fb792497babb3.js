"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[5355],{5355:(y,l,i)=>{i.r(l),i.d(l,{TieredMenuDemoModule:()=>_});var d=i(6895),p=i(9859),e=i(1571),Z=i(5071),m=i(2863),u=i(4619),c=i(485),a=i(7381),r=i(3032);function g(n,o){1&n&&e._UZ(0,"iframe",23)}const T=function(){return["/menumodel"]},b=function(){return["/theming"]};let A=(()=>{class n{ngOnInit(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:293,vars:7,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","tieredmenu","stackblitz","tieredmenu-demo"],[1,"content-section","implementation"],[1,"card"],[3,"model"],["type","button","pButton","","icon","pi pi-bars","label","Show",3,"click"],["btn",""],[3,"model","popup"],["menu",""],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],[3,"routerLink"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tieredmenu","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-tieredmenu-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-tieredmenu-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(t,s){if(1&t){const w=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"TieredMenu"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"TieredMenu displays submenus in nested overlays."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Inline"),e.qZA(),e._UZ(11,"p-tieredMenu",5),e.TgZ(12,"h5"),e._uU(13,"Popup"),e.qZA(),e.TgZ(14,"button",6,7),e.NdJ("click",function(v){e.CHM(w);const M=e.MAs(17);return e.KtG(M.toggle(v))}),e.qZA(),e._UZ(16,"p-tieredMenu",8,9),e.qZA()(),e.TgZ(18,"div",10)(19,"p-tabView")(20,"p-tabPanel",11)(21,"h5"),e._uU(22,"Import"),e.qZA(),e.TgZ(23,"app-code",12),e.IAx(),e._uU(24,"\nimport {TieredMenuModule} from 'primeng/tieredmenu';\nimport {MenuItem} from 'primeng/api';\n"),e.fQ9(),e.qZA(),e.TgZ(25,"h5"),e._uU(26,"MenuModel API"),e.qZA(),e.TgZ(27,"p"),e._uU(28,"TieredMenu uses the common menumodel api to define its items, visit "),e.TgZ(29,"a",13),e._uU(30,"MenuModel API"),e.qZA(),e._uU(31," for details."),e.qZA(),e.TgZ(32,"h5"),e._uU(33,"Getting Started"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"TieredMenu requires nested menuitems as its "),e.TgZ(36,"i"),e._uU(37,"model"),e.qZA(),e._uU(38,"."),e.qZA(),e.TgZ(39,"app-code",14),e.IAx(),e._uU(40,'\n<p-tieredMenu [model]="items"></p-tieredMenu>\n'),e.fQ9(),e.qZA(),e.TgZ(41,"app-code",12),e.IAx(),e._uU(42,"\nexport class TieredMenuDemo {\n\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n                label: 'File',\n                items: [{\n                        label: 'New', \n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            {label: 'Project'},\n                            {label: 'Other'},\n                        ]\n                    },\n                    {label: 'Open'},\n                    {label: 'Quit'}\n                ]\n            },\n            {\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},\n                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}\n                ]\n            }\n        ];\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(43,"h5"),e._uU(44,"Popup Mode"),e.qZA(),e.TgZ(45,"p"),e._uU(46,"Menu is inline by default, popup mode is also supported by enabling "),e.TgZ(47,"i"),e._uU(48,"popup"),e.qZA(),e._uU(49," property and calling toggle method by passing the event from the anchor element."),e.qZA(),e.TgZ(50,"app-code",14),e.IAx(),e._uU(51,'\n<p-tieredMenu #menu [model]="items" [popup]="true"></p-tieredMenu>\n<button #btn type="button" pButton icon="pi pi-fw pi-list" label="Show" (click)="menu.toggle($event)"></button>\n'),e.fQ9(),e.qZA(),e.TgZ(52,"h5"),e._uU(53,"Animation Configuration"),e.qZA(),e.TgZ(54,"p"),e._uU(55,"Transition of the open and hide animations can be customized using the "),e.TgZ(56,"i"),e._uU(57,"showTransitionOptions"),e.qZA(),e._uU(58," and "),e.TgZ(59,"i"),e._uU(60,"hideTransitionOptions"),e.qZA(),e._uU(61," properties, example below disables the animations altogether."),e.qZA(),e.TgZ(62,"app-code",14),e.IAx(),e._uU(63,'\n<p-tieredMenu [showTransitionOptions]="\'0ms\'" [hideTransitionOptions]="\'0ms\'" #menu [model]="items" [popup]="true"></p-tieredMenu>\n<button #btn type="button" pButton icon="pi pi-fw pi-list" label="Show" (click)="menu.toggle($event)"></button>\n'),e.fQ9(),e.qZA(),e.TgZ(64,"h5"),e._uU(65,"Properties"),e.qZA(),e.TgZ(66,"div",15)(67,"table",16)(68,"thead")(69,"tr")(70,"th"),e._uU(71,"Name"),e.qZA(),e.TgZ(72,"th"),e._uU(73,"Type"),e.qZA(),e.TgZ(74,"th"),e._uU(75,"Default"),e.qZA(),e.TgZ(76,"th"),e._uU(77,"Description"),e.qZA()()(),e.TgZ(78,"tbody")(79,"tr")(80,"td"),e._uU(81,"model"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"array"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"null"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"An array of menuitems."),e.qZA()(),e.TgZ(88,"tr")(89,"td"),e._uU(90,"popup"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"boolean"),e.qZA(),e.TgZ(93,"td"),e._uU(94,"false"),e.qZA(),e.TgZ(95,"td"),e._uU(96,"Defines if menu would displayed as a popup."),e.qZA()(),e.TgZ(97,"tr")(98,"td"),e._uU(99,"appendTo"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"any"),e.qZA(),e.TgZ(102,"td"),e._uU(103,"null"),e.qZA(),e.TgZ(104,"td"),e._uU(105,'Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.'),e.qZA()(),e.TgZ(106,"tr")(107,"td"),e._uU(108,"style"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"string"),e.qZA(),e.TgZ(111,"td"),e._uU(112,"null"),e.qZA(),e.TgZ(113,"td"),e._uU(114,"Inline style of the component."),e.qZA()(),e.TgZ(115,"tr")(116,"td"),e._uU(117,"styleClass"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"string"),e.qZA(),e.TgZ(120,"td"),e._uU(121,"null"),e.qZA(),e.TgZ(122,"td"),e._uU(123,"Style class of the component."),e.qZA()(),e.TgZ(124,"tr")(125,"td"),e._uU(126,"baseZIndex"),e.qZA(),e.TgZ(127,"td"),e._uU(128,"number"),e.qZA(),e.TgZ(129,"td"),e._uU(130,"0"),e.qZA(),e.TgZ(131,"td"),e._uU(132,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(133,"tr")(134,"td"),e._uU(135,"autoZIndex"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"boolean"),e.qZA(),e.TgZ(138,"td"),e._uU(139,"true"),e.qZA(),e.TgZ(140,"td"),e._uU(141,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(142,"tr")(143,"td"),e._uU(144,"autoDisplay"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"boolean"),e.qZA(),e.TgZ(147,"td"),e._uU(148,"false"),e.qZA(),e.TgZ(149,"td"),e._uU(150,"Whether to show a root submenu on mouse over."),e.qZA()(),e.TgZ(151,"tr")(152,"td"),e._uU(153,"showTransitionOptions"),e.qZA(),e.TgZ(154,"td"),e._uU(155,"string"),e.qZA(),e.TgZ(156,"td"),e._uU(157,".12s cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e.TgZ(158,"td"),e._uU(159,"Transition options of the show animation."),e.qZA()(),e.TgZ(160,"tr")(161,"td"),e._uU(162,"hideTransitionOptions"),e.qZA(),e.TgZ(163,"td"),e._uU(164,"string"),e.qZA(),e.TgZ(165,"td"),e._uU(166,".1s linear"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"Transition options of the hide animation."),e.qZA()()()()(),e.TgZ(169,"h5"),e._uU(170,"Events"),e.qZA(),e.TgZ(171,"div",15)(172,"table",16)(173,"thead")(174,"tr")(175,"th"),e._uU(176,"Name"),e.qZA(),e.TgZ(177,"th"),e._uU(178,"Parameters"),e.qZA(),e.TgZ(179,"th"),e._uU(180,"Description"),e.qZA()()(),e.TgZ(181,"tbody")(182,"tr")(183,"td"),e._uU(184,"onShow"),e.qZA(),e.TgZ(185,"td"),e._uU(186,"event: Event object"),e.qZA(),e.TgZ(187,"td"),e._uU(188,"Callback to invoke when overlay menu is shown."),e.qZA()(),e.TgZ(189,"tr")(190,"td"),e._uU(191,"onHide"),e.qZA(),e.TgZ(192,"td"),e._uU(193,"event: Event object"),e.qZA(),e.TgZ(194,"td"),e._uU(195,"Callback to invoke when overlay menu is hidden."),e.qZA()()()()(),e.TgZ(196,"h5"),e._uU(197,"Methods"),e.qZA(),e.TgZ(198,"div",15)(199,"table",16)(200,"thead")(201,"tr")(202,"th"),e._uU(203,"Name"),e.qZA(),e.TgZ(204,"th"),e._uU(205,"Parameters"),e.qZA(),e.TgZ(206,"th"),e._uU(207,"Description"),e.qZA()()(),e.TgZ(208,"tbody")(209,"tr")(210,"td"),e._uU(211,"toggle"),e.qZA(),e.TgZ(212,"td"),e._uU(213,"event: browser event"),e.qZA(),e.TgZ(214,"td"),e._uU(215,"Toggles the visibility of the popup menu."),e.qZA()(),e.TgZ(216,"tr")(217,"td"),e._uU(218,"show"),e.qZA(),e.TgZ(219,"td"),e._uU(220,"event: browser event"),e.qZA(),e.TgZ(221,"td"),e._uU(222,"Displays the popup menu."),e.qZA()(),e.TgZ(223,"tr")(224,"td"),e._uU(225,"hide"),e.qZA(),e.TgZ(226,"td"),e._uU(227,"-"),e.qZA(),e.TgZ(228,"td"),e._uU(229,"Hides the popup menu."),e.qZA()()()()(),e.TgZ(230,"h5"),e._uU(231,"Styling"),e.qZA(),e.TgZ(232,"p"),e._uU(233,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(234,"a",17),e._uU(235,"theming page"),e.qZA(),e._uU(236,"."),e.qZA(),e.TgZ(237,"div",15)(238,"table",16)(239,"thead")(240,"tr")(241,"th"),e._uU(242,"Name"),e.qZA(),e.TgZ(243,"th"),e._uU(244,"Element"),e.qZA()()(),e.TgZ(245,"tbody")(246,"tr")(247,"td"),e._uU(248,"p-tieredmenu"),e.qZA(),e.TgZ(249,"td"),e._uU(250,"Container element."),e.qZA()(),e.TgZ(251,"tr")(252,"td"),e._uU(253,"p-menu-list"),e.qZA(),e.TgZ(254,"td"),e._uU(255,"List element."),e.qZA()(),e.TgZ(256,"tr")(257,"td"),e._uU(258,"p-menuitem"),e.qZA(),e.TgZ(259,"td"),e._uU(260,"Menuitem element."),e.qZA()(),e.TgZ(261,"tr")(262,"td"),e._uU(263,"p-menuitem-text"),e.qZA(),e.TgZ(264,"td"),e._uU(265,"Label of a menuitem."),e.qZA()(),e.TgZ(266,"tr")(267,"td"),e._uU(268,"p-menuitem-icon"),e.qZA(),e.TgZ(269,"td"),e._uU(270,"Icon of a menuitem."),e.qZA()(),e.TgZ(271,"tr")(272,"td"),e._uU(273,"p-submenu-icon"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"Arrow icon of a submenu."),e.qZA()()()()(),e.TgZ(276,"h5"),e._uU(277,"Dependencies"),e.qZA(),e.TgZ(278,"p"),e._uU(279,"None."),e.qZA()(),e.TgZ(280,"p-tabPanel",18)(281,"a",19)(282,"span"),e._uU(283,"View on GitHub"),e.qZA()(),e.TgZ(284,"a",20)(285,"span"),e._uU(286,"Edit in StackBlitz"),e.qZA()(),e.TgZ(287,"app-code",14),e.IAx(),e._uU(288,'\n<h5>Inline</h5>\n<p-tieredMenu [model]="items"></p-tieredMenu>\n\n<h5>Popup</h5>\n<button #btn type="button" pButton icon="pi pi-bars" label="Show" (click)="menu.toggle($event)"></button>\n<p-tieredMenu #menu [model]="items" [popup]="true"></p-tieredMenu>\n'),e.fQ9(),e.qZA(),e.TgZ(289,"app-code",12),e.IAx(),e._uU(290,"\nexport class TieredMenuDemo {\n\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n            label:'File',\n            icon:'pi pi-fw pi-file',\n            items:[\n                {\n                    label:'New',\n                    icon:'pi pi-fw pi-plus',\n                    items:[\n                        {\n                        label:'Bookmark',\n                        icon:'pi pi-fw pi-bookmark'\n                        {,\n                        {\n                        label:'Video',\n                        icon:'pi pi-fw pi-video'\n                        {,\n\n                    ]\n                {,\n                {\n                    label:'Delete',\n                    icon:'pi pi-fw pi-trash'\n                {,\n                {\n                    separator:true\n                {,\n                {\n                    label:'Export',\n                    icon:'pi pi-fw pi-external-link'\n                {\n            ]\n            {,\n            {\n            label:'Edit',\n            icon:'pi pi-fw pi-pencil',\n            items:[\n                {\n                    label:'Left',\n                    icon:'pi pi-fw pi-align-left'\n                {,\n                {\n                    label:'Right',\n                    icon:'pi pi-fw pi-align-right'\n                {,\n                {\n                    label:'Center',\n                    icon:'pi pi-fw pi-align-center'\n                {,\n                {\n                    label:'Justify',\n                    icon:'pi pi-fw pi-align-justify'\n                {,\n\n            ]\n            {,\n            {\n            label:'Users',\n            icon:'pi pi-fw pi-user',\n            items:[\n                {\n                    label:'New',\n                    icon:'pi pi-fw pi-user-plus',\n\n                {,\n                {\n                    label:'Delete',\n                    icon:'pi pi-fw pi-user-minus',\n\n                {,\n                {\n                    label:'Search',\n                    icon:'pi pi-fw pi-users',\n                    items:[\n                        {\n                        label:'Filter',\n                        icon:'pi pi-fw pi-filter',\n                        items:[\n                            {\n                                label:'Print',\n                                icon:'pi pi-fw pi-print'\n                            {\n                        ]\n                        {,\n                        {\n                        icon:'pi pi-fw pi-bars',\n                        label:'List'\n                        {\n                    ]\n                {\n            ]\n            {,\n            {\n            label:'Events',\n            icon:'pi pi-fw pi-calendar',\n            items:[\n                {\n                    label:'Edit',\n                    icon:'pi pi-fw pi-pencil',\n                    items:[\n                        {\n                        label:'Save',\n                        icon:'pi pi-fw pi-calendar-plus'\n                        {,\n                        {\n                        label:'Delete',\n                        icon:'pi pi-fw pi-calendar-minus'\n                        {,\n\n                    ]\n                {,\n                {\n                    label:'Archieve',\n                    icon:'pi pi-fw pi-calendar-times',\n                    items:[\n                        {\n                        label:'Remove',\n                        icon:'pi pi-fw pi-calendar-minus'\n                        {\n                    ]\n                {\n            ]\n            {,\n            {\n            separator:true\n            {,\n            {\n            label:'Quit',\n            icon:'pi pi-fw pi-power-off'\n            {\n        ]\n    }\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(291,"p-tabPanel",21),e.YNc(292,g,1,0,"ng-template",22),e.qZA()()()}2&t&&(e.xp6(11),e.Q6J("model",s.items),e.xp6(5),e.Q6J("model",s.items)("popup",!0),e.xp6(13),e.Q6J("routerLink",e.DdM(5,T)),e.xp6(205),e.Q6J("routerLink",e.DdM(6,b)))},dependencies:[p.yS,Z.yp,m.Hq,u.xf,u.x4,c.jx,a.h,r.P],encapsulation:2}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:A}]),p.Bz]}),n})();var U=i(9410),h=i(1928),q=i(1508);let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,f,U.QK,h.hJ,q.LU,a.a,r.L]}),n})()}}]);