"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[4763],{7381:(A,d,c)=>{c.d(d,{a:()=>f,h:()=>g});var u=c(6895),o=c(1571);const n=["code"],h=["*"];let g=(()=>{class t{constructor(s){this.el=s,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return t.\u0275fac=function(s){return new(s||t)(o.Y36(o.SBq))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-code"]],viewQuery:function(s,m){if(1&s&&o.Gf(n,5),2&s){let e;o.iGM(e=o.CRH())&&(m.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:h,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(s,m){1&s&&(o.F$t(),o.TgZ(0,"pre",0)(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA()()),2&s&&o.Q6J("ngClass","language-"+m.lang)},dependencies:[u.mk],encapsulation:2}),t})(),f=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez]}),t})()},4763:(A,d,c)=>{c.r(d),c.d(d,{IconsModule:()=>m});var u=c(6895),o=c(9859),n=c(1571),h=c(9925),g=c(6440),f=c(7381);function t(e,p){if(1&e&&(n.TgZ(0,"div",16),n._UZ(1,"i"),n.TgZ(2,"div"),n._uU(3),n.qZA()()),2&e){const i=p.$implicit;n.xp6(1),n.Gre("pi pi-",i.properties.name,""),n.xp6(2),n.hij("pi-",i.properties.name,"")}}let l=(()=>{class e{constructor(i){this.iconService=i}ngOnInit(){this.iconService.getIcons().subscribe(i=>{let r=i=i.filter(a=>-1===a.icon.tags.indexOf("deprecate"));r.sort((a,Z)=>a.properties.name<Z.properties.name?-1:a.properties.name<Z.properties.name?1:0),this.icons=r,this.filteredIcons=i})}onFilter(i){let r=i.target.value;this.filteredIcons=r?this.icons.filter(a=>a.icon.tags[0].includes(r)):this.icons}}return e.\u0275fac=function(i){return new(i||e)(n.Y36(h.C))},e.\u0275cmp=n.Xpm({type:e,selectors:[["ng-component"]],decls:74,vars:1,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["href","https://github.com/primefaces/primeicons"],["href","https://www.primetek.com.tr"],[1,"content-section","documentation"],["lang","markup"],[1,"pi","pi-check","mr-2"],[1,"pi","pi-times"],[1,"pi","pi-check"],[1,"pi","pi-check",2,"font-size","2rem"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],["lang","typescript"],["href","https://github.com/primefaces/primeicons/issues"],["pInputText","","placeholder","Search an icon",1,"icon-filter",3,"input"],[1,"grid","icons-list"],["class","col-12 sm:col-6 md:col-4 lg:col-2 mb-4",4,"ngFor","ngForOf"],[1,"col-12","sm:col-6","md:col-4","lg:col-2","mb-4"]],template:function(i,r){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h1"),n._uU(3,"Icons"),n.qZA(),n.TgZ(4,"p"),n._uU(5,"PrimeNG components internally use "),n.TgZ(6,"a",2),n._uU(7,"PrimeIcons"),n.qZA(),n._uU(8," library, the official icons suite from "),n.TgZ(9,"a",3),n._uU(10,"PrimeTek"),n.qZA(),n._uU(11,"."),n.qZA()()(),n.TgZ(12,"div",4)(13,"h5"),n._uU(14,"Download"),n.qZA(),n.TgZ(15,"p"),n._uU(16,"PrimeIcons is available at npm, run the following command to download it to your project."),n.qZA(),n.TgZ(17,"app-code",5),n.IAx(),n._uU(18,"\nnpm install primeicons --save\n"),n.fQ9(),n.qZA(),n.TgZ(19,"h5"),n._uU(20,"Getting Started"),n.qZA(),n.TgZ(21,"p"),n._uU(22,"PrimeIcons use the "),n.TgZ(23,"strong"),n._uU(24,"pi pi-{icon}"),n.qZA(),n._uU(25," syntax such as "),n.TgZ(26,"strong"),n._uU(27,"pi pi-check"),n.qZA(),n._uU(28,". A standalone icon can be displayed using an element such as "),n.TgZ(29,"i"),n._uU(30,"i"),n.qZA(),n._uU(31," or "),n.TgZ(32,"i"),n._uU(33,"span"),n.qZA()(),n.TgZ(34,"app-code",5),n.IAx(),n._uU(35,'\n<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>\n'),n.fQ9(),n.qZA(),n._UZ(36,"i",6)(37,"i",7),n.TgZ(38,"h5"),n._uU(39,"Size"),n.qZA(),n.TgZ(40,"p"),n._uU(41,"Size of the icons can easily be changed using font-size property."),n.qZA(),n.TgZ(42,"app-code",5),n.IAx(),n._uU(43,'\n<i class="pi pi-check"></i>\n'),n.fQ9(),n.qZA(),n._UZ(44,"i",8),n.TgZ(45,"app-code",5),n.IAx(),n._uU(46,'\n<i class="pi pi-check" style="font-size: 2rem"></i>\n'),n.fQ9(),n.qZA(),n._UZ(47,"i",9),n.TgZ(48,"h5"),n._uU(49,"Spinning Animation"),n.qZA(),n.TgZ(50,"p"),n._uU(51,"Special pi-spin class applies infinite rotate to an icon."),n.qZA(),n.TgZ(52,"app-code",5),n.IAx(),n._uU(53,'\n<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>\n'),n.fQ9(),n.qZA(),n._UZ(54,"i",10),n.TgZ(55,"h5"),n._uU(56,"Constants"),n.qZA(),n.TgZ(57,"p"),n._uU(58,"PrimeIcons constants API is provided to easily choose an icon with typescript e.g. when defining a menu model."),n.qZA(),n.TgZ(59,"app-code",5),n.IAx(),n._uU(60,'\n<p-menu [model]="items"></p-menu>\n'),n.fQ9(),n.qZA(),n.TgZ(61,"app-code",11),n.IAx(),n._uU(62,"\nimport {MenuItem, PrimeIcons} from 'primeng/api';\n\nexport class MenuDemo {\n\n    private items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: PrimeIcons.PLUS},\n                {label: 'Open', icon: PrimeIcons.DOWNLOAD}\n            ]\n        },\n        {\n            label: 'Edit',\n            items: [\n                {label: 'Undo', icon: PrimeIcons.REFRESH},\n                {label: 'Redo', icon: PrimeIcons.REPEAT}\n            ]\n        }];\n    }\n}\n"),n.fQ9(),n.qZA(),n.TgZ(63,"h5"),n._uU(64,"List of Icons"),n.qZA(),n.TgZ(65,"p"),n._uU(66,"Here is the current list of PrimeIcons, more icons will be added periodically. You may also "),n.TgZ(67,"a",12),n._uU(68,"request new icons"),n.qZA(),n._uU(69," at the issue tracker."),n.qZA(),n.TgZ(70,"div")(71,"input",13),n.NdJ("input",function(Z){return r.onFilter(Z)}),n.qZA()(),n.TgZ(72,"div",14),n.YNc(73,t,4,4,"div",15),n.qZA()()),2&i&&(n.xp6(73),n.Q6J("ngForOf",r.filteredIcons))},dependencies:[u.sg,g.o,f.h],styles:[".icon-filter[_ngcontent-%COMP%]{width:100%;padding:1rem;margin:1rem 0 1.5rem}.icons-list[_ngcontent-%COMP%]{text-align:center}.icons-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--text-color-secondary);margin-bottom:.5rem}"]}),e})(),s=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[o.Bz.forChild([{path:"",component:l}]),o.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,g.j,f.a,s]}),e})()}}]);