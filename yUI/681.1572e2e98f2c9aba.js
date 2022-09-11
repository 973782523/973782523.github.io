"use strict";(self.webpackChunkyUI=self.webpackChunkyUI||[]).push([[681],{7381:(q,h,u)=>{u.d(h,{a:()=>_,h:()=>e});var A=u(6895),a=u(1571);const m=["code"],T=["*"];let e=(()=>{class s{constructor(r){this.el=r,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(a.SBq))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-code"]],viewQuery:function(r,p){if(1&r&&a.Gf(m,5),2&r){let c;a.iGM(c=a.CRH())&&(p.codeViewChild=c.first)}},inputs:{lang:"lang"},ngContentSelectors:T,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(r,p){1&r&&(a.F$t(),a.TgZ(0,"pre",0)(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA()()),2&r&&a.Q6J("ngClass","language-"+p.lang)},dependencies:[A.mk],encapsulation:2}),s})(),_=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[A.ez]}),s})()},681:(q,h,u)=>{u.r(h),u.d(h,{AutoCompleteDemoModule:()=>S});var A=u(6895),a=u(433),m=u(9859),T=u(8476),e=u(1571),_=u(7296),s=u(6177),Z=u(485),r=u(4619),p=u(3032),c=u(7381);function U(l,d){if(1&l&&(e.TgZ(0,"div",25),e._UZ(1,"img",26),e.TgZ(2,"div"),e._uU(3),e.qZA()()),2&l){const o=d.$implicit;e.xp6(1),e.Tol("flag flag-"+o.code.toLowerCase()),e.xp6(2),e.Oqu(o.name)}}function f(l,d){if(1&l&&(e.TgZ(0,"div",27),e._UZ(1,"img",28),e.TgZ(2,"span"),e._uU(3),e.qZA()()),2&l){const o=d.$implicit;e.xp6(1),e.Tol("mr-2 flag flag-"+o.value),e.xp6(2),e.Oqu(o.label)}}function v(l,d){1&l&&e._UZ(0,"iframe",29)}const y=function(){return["/scroller"]},b=function(){return["/theming"]};let C=(()=>{class l{constructor(o,n){this.countryService=o,this.filterService=n}ngOnInit(){this.countryService.getCountries().then(o=>{this.countries=o}),this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],this.items=[];for(let o=0;o<1e4;o++)this.items.push({label:"Item "+o,value:"Item "+o})}filterCountry(o){let n=[],i=o.query;for(let t=0;t<this.countries.length;t++){let g=this.countries[t];0==g.name.toLowerCase().indexOf(i.toLowerCase())&&n.push(g)}this.filteredCountries=n}filterItems(o){let n=[],i=o.query;for(let t=0;t<this.items.length;t++){let g=this.items[t];0==g.label.toLowerCase().indexOf(i.toLowerCase())&&n.push(g)}this.filteredItems=n}filterGroupedCity(o){let n=o.query,i=[];for(let t of this.groupedCities){let g=this.filterService.filter(t.items,["label"],n,"contains");g&&g.length&&i.push({label:t.label,value:t.value,items:g})}this.filteredGroups=i}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(_.T),e.Y36(T.iZ))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],decls:803,vars:23,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","autocomplete","stackblitz","autocomplete-demo"],[1,"content-section","implementation"],[1,"card"],["field","name",3,"ngModel","showEmptyMessage","suggestions","minLength","ngModelChange","completeMethod"],["field","name",3,"ngModel","suggestions","dropdown","ngModelChange","completeMethod"],["pTemplate","item"],["field","label",3,"ngModel","group","suggestions","dropdown","ngModelChange","completeMethod"],["pTemplate","group"],["field","label",3,"ngModel","virtualScroll","suggestions","virtualScrollItemSize","dropdown","ngModelChange","completeMethod"],[1,"p-fluid"],["field","name",3,"ngModel","suggestions","multiple","ngModelChange","completeMethod"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/autocomplete","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-autocomplete-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"country-item"],["src","assets/showcase/images/demo/flag/flag_placeholder.png"],[1,"flex","align-items-center"],["src","assets/showcase/images/demo/flag/flag_placeholder.png",2,"width","20px"],["src","https://stackblitz.com/edit/primeng-autocomplete-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"AutoComplete"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"AutoComplete is an input component that provides real-time suggestions when being typed."),e.qZA()(),e._UZ(6,"app-demoActions",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"h5"),e._uU(10,"Basic"),e.qZA(),e.TgZ(11,"p-autoComplete",5),e.NdJ("ngModelChange",function(t){return n.selectedCountry=t})("completeMethod",function(t){return n.filterCountry(t)}),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Dropdown and Templating"),e.qZA(),e.TgZ(14,"p-autoComplete",6),e.NdJ("ngModelChange",function(t){return n.selectedCountryAdvanced=t})("completeMethod",function(t){return n.filterCountry(t)}),e.YNc(15,U,4,3,"ng-template",7),e.qZA(),e.TgZ(16,"h5"),e._uU(17,"Grouped"),e.qZA(),e.TgZ(18,"p-autoComplete",8),e.NdJ("ngModelChange",function(t){return n.selectedCity=t})("completeMethod",function(t){return n.filterGroupedCity(t)}),e.YNc(19,f,4,3,"ng-template",9),e.qZA(),e.TgZ(20,"h5"),e._uU(21,"Virtual Scroll (10000 Items)"),e.qZA(),e.TgZ(22,"p-autoComplete",10),e.NdJ("ngModelChange",function(t){return n.selectedItem=t})("completeMethod",function(t){return n.filterItems(t)}),e.qZA(),e.TgZ(23,"h5"),e._uU(24,"Multiple"),e.qZA(),e.TgZ(25,"span",11)(26,"p-autoComplete",12),e.NdJ("ngModelChange",function(t){return n.selectedCountries=t})("completeMethod",function(t){return n.filterCountry(t)}),e.qZA()()()(),e.TgZ(27,"div",13)(28,"p-tabView")(29,"p-tabPanel",14)(30,"h5"),e._uU(31,"Import"),e.qZA(),e.TgZ(32,"app-code",15),e.IAx(),e._uU(33,"\nimport {AutoCompleteModule} from 'primeng/autocomplete';\n"),e.fQ9(),e.qZA(),e.TgZ(34,"h5"),e._uU(35,"Getting Started"),e.qZA(),e.TgZ(36,"p"),e._uU(37,"AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod gets the query text as event.query property and should update the suggestions with the search results."),e.qZA(),e.TgZ(38,"app-code",16),e.IAx(),e._uU(39,'\n<p-autoComplete [(ngModel)]="text" [suggestions]="results" (completeMethod)="search($event)"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(40,"app-code",15),e.IAx(),e._uU(41,"\nexport class AutoCompleteDemo {\n\n    text: string;\n\n    results: string[];\n\n    search(event) {\n        this.mylookupservice.getResults(event.query).then(data => {\n            this.results = data;\n        });\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Change Detection of Suggestions"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"AutoComplete uses setter based checking to realize if the suggestions has changed to update the UI. In order this to work, your changes such as adding or removing a record should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. "),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Note that if no suggestions are available after searching, provide an empty array instead of a null value."),e.qZA(),e.TgZ(48,"h5"),e._uU(49,"Model Driven Forms"),e.qZA(),e.TgZ(50,"p"),e._uU(51,"AutoComplete can be used in a model driven form as well."),e.qZA(),e.TgZ(52,"app-code",16),e.IAx(),e._uU(53,'\n<p-autoComplete formControlName="city" [suggestions]="results" (completeMethod)="search($event)"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(54,"h5"),e._uU(55,"Dropdown"),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Enabling "),e.TgZ(58,"i"),e._uU(59,"dropdown"),e.qZA(),e._uU(60,' property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes "blank" or "current" as possible values. "blank" is the default mode to send a query with an empty string whereas "current" setting sends a query with the current value of the input.'),e.qZA(),e.TgZ(61,"app-code",16),e.IAx(),e._uU(62,'\n<p-autoComplete [(ngModel)]="text" [suggestions]="results" (completeMethod)="search($event)"\n            [dropdown]="true"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(63,"app-code",15),e.IAx(),e._uU(64,"\nexport class AutoCompleteDemo {\n\n    text: string;\n\n    results: string[];\n\n    search(event) {\n        this.mylookupservice.getResults(event.query).then(data => {\n            this.results = data;\n        });\n    }\n\n    handleDropdown(event) {\n        //event.query = current value in input field\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(65,"h5"),e._uU(66,"Multiple Selection"),e.qZA(),e.TgZ(67,"p"),e._uU(68,"Multiple mode is enabled using "),e.TgZ(69,"i"),e._uU(70,"multiple"),e.qZA(),e._uU(71," property to select more than one value from the autocomplete. In this case, value reference should be an array."),e.qZA(),e.TgZ(72,"app-code",16),e.IAx(),e._uU(73,'\n<p-autoComplete [(ngModel)]="texts" [suggestions]="results" (completeMethod)="search($event)" [multiple]="true"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(74,"app-code",15),e.IAx(),e._uU(75,"\nexport class AutoCompleteDemo {\n\n    texts: string[];\n\n    results: string[];\n\n    search(event) {\n        this.mylookupservice.getResults(event.query).then(data => {\n            this.results = data;\n        });\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(76,"h5"),e._uU(77,"Objects"),e.qZA(),e.TgZ(78,"p"),e._uU(79,"AutoComplete can also work with objects using the "),e.TgZ(80,"i"),e._uU(81,"field"),e.qZA(),e._uU(82,' property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as {name:"United States",code:"USA"}.'),e.qZA(),e.TgZ(83,"app-code",16),e.IAx(),e._uU(84,'\n<p-autoComplete [(ngModel)]="val" [suggestions]="results" (completeMethod)="search($event)" field="name"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(85,"app-code",15),e.IAx(),e._uU(86,"\nexport class AutoCompleteDemo {\n\n    val: country;\n\n    results: country[];\n\n    search(event) {\n        this.countrylookupservice.getResults(event.query).then(data => {\n            this.results = data;\n        });\n    }\n\n}\n"),e.fQ9(),e.qZA(),e.TgZ(87,"h5"),e._uU(88,"Force Selection"),e.qZA(),e.TgZ(89,"p"),e._uU(90,"ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions."),e.qZA(),e.TgZ(91,"app-code",16),e.IAx(),e._uU(92,'\n<p-autoComplete [(ngModel)]="val" [suggestions]="results" (completeMethod)="search($event)" [forceSelection]="true"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(93,"h5"),e._uU(94,"Templating"),e.qZA(),e.TgZ(95,"p"),e._uU(96,"Item ng-template allows displaying custom content inside the suggestions panel. The local ng-template variable passed to the ng-template is an object in the suggestions array."),e.qZA(),e.TgZ(97,"app-code",16),e.IAx(),e._uU(98,'\n<p-autoComplete [(ngModel)]="brand" [suggestions]="filteredBrands" (completeMethod)="filterBrands($event)">\n    <ng-template let-brand pTemplate="item">\n            <img src="assets/showcase/images/demo/car/{{brand}}.png" style="width:32px;display:inline-block;margin:5px 0 2px 5px"/>\n            <div style="font-size:18px;float:right;margin:10px 10px 0 0">{{brand}}</div>\n    </ng-template>\n</p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(99,"p"),e._uU(100,"In multiple mode, selected item can be customized using selectedItem ng-template. Note that this template is not supported in single mode. In addition when grouping is enabled, "),e.TgZ(101,"i"),e._uU(102,"group"),e.qZA(),e._uU(103," template is available to customize the option groups. All templates get the option instance as the default local template variable."),e.qZA(),e.TgZ(104,"app-code",16),e.IAx(),e._uU(105,'\n<p-autoComplete [(ngModel)]="texts" [suggestions]="results" (completeMethod)="search($event)" [multiple]="true">\n    <ng-template let-value pTemplate="selectedItem">\n        <span style="font-size:18px">>{{value}}<</span>\n    </ng-template>\n</p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(106,"h5"),e._uU(107,"Animation Configuration"),e.qZA(),e.TgZ(108,"p"),e._uU(109,"Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, example below disables the animations altogether."),e.qZA(),e.TgZ(110,"app-code",16),e.IAx(),e._uU(111,'\n<p-autoComplete [showTransitionOptions]="\'0ms\'" [hideTransitionOptions]="\'0ms\'" [(ngModel)]="texts" [suggestions]="results" (completeMethod)="search($event)"></p-autoComplete>\n'),e.fQ9(),e.qZA(),e.TgZ(112,"h5"),e._uU(113,"Properties"),e.qZA(),e.TgZ(114,"div",17)(115,"table",18)(116,"thead")(117,"tr")(118,"th"),e._uU(119,"Name"),e.qZA(),e.TgZ(120,"th"),e._uU(121,"Type"),e.qZA(),e.TgZ(122,"th"),e._uU(123,"Default"),e.qZA(),e.TgZ(124,"th"),e._uU(125,"Description"),e.qZA()()(),e.TgZ(126,"tbody")(127,"tr")(128,"td"),e._uU(129,"suggestions"),e.qZA(),e.TgZ(130,"td"),e._uU(131,"array"),e.qZA(),e.TgZ(132,"td"),e._uU(133,"null"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"An array of suggestions to display."),e.qZA()(),e.TgZ(136,"tr")(137,"td"),e._uU(138,"field"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"any"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"null"),e.qZA(),e.TgZ(143,"td"),e._uU(144,"Field of a suggested object to resolve and display."),e.qZA()(),e.TgZ(145,"tr")(146,"td"),e._uU(147,"scrollHeight"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"string"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"200px"),e.qZA(),e.TgZ(152,"td"),e._uU(153,"Maximum height of the suggestions panel."),e.qZA()(),e.TgZ(154,"tr")(155,"td"),e._uU(156,"dropdown"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"boolean"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"false"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Displays a button next to the input field when enabled."),e.qZA()(),e.TgZ(163,"tr")(164,"td"),e._uU(165,"multiple"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"boolean"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"false"),e.qZA(),e.TgZ(170,"td"),e._uU(171,"Specifies if multiple values can be selected."),e.qZA()(),e.TgZ(172,"tr")(173,"td"),e._uU(174,"dropdownIcon"),e.qZA(),e.TgZ(175,"td"),e._uU(176,"string"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"pi pi-chevron-down"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Icon class of the dropdown icon."),e.qZA()(),e.TgZ(181,"tr")(182,"td"),e._uU(183,"minLength"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"number"),e.qZA(),e.TgZ(186,"td"),e._uU(187,"1"),e.qZA(),e.TgZ(188,"td"),e._uU(189,"Minimum number of characters to initiate a search."),e.qZA()(),e.TgZ(190,"tr")(191,"td"),e._uU(192,"delay"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"number"),e.qZA(),e.TgZ(195,"td"),e._uU(196,"300"),e.qZA(),e.TgZ(197,"td"),e._uU(198,"Delay between keystrokes to wait before sending a query."),e.qZA()(),e.TgZ(199,"tr")(200,"td"),e._uU(201,"completeOnFocus"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"boolean"),e.qZA(),e.TgZ(204,"td"),e._uU(205,"false"),e.qZA(),e.TgZ(206,"td"),e._uU(207,"Whether to run a query when input receives focus."),e.qZA()(),e.TgZ(208,"tr")(209,"td"),e._uU(210,"style"),e.qZA(),e.TgZ(211,"td"),e._uU(212,"string"),e.qZA(),e.TgZ(213,"td"),e._uU(214,"null"),e.qZA(),e.TgZ(215,"td"),e._uU(216,"Inline style of the component."),e.qZA()(),e.TgZ(217,"tr")(218,"td"),e._uU(219,"inputStyle"),e.qZA(),e.TgZ(220,"td"),e._uU(221,"string"),e.qZA(),e.TgZ(222,"td"),e._uU(223,"null"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"Inline style of the input field."),e.qZA()(),e.TgZ(226,"tr")(227,"td"),e._uU(228,"panelStyle"),e.qZA(),e.TgZ(229,"td"),e._uU(230,"string"),e.qZA(),e.TgZ(231,"td"),e._uU(232,"null"),e.qZA(),e.TgZ(233,"td"),e._uU(234,"Inline style of the overlay panel element."),e.qZA()(),e.TgZ(235,"tr")(236,"td"),e._uU(237,"styleClass"),e.qZA(),e.TgZ(238,"td"),e._uU(239,"string"),e.qZA(),e.TgZ(240,"td"),e._uU(241,"null"),e.qZA(),e.TgZ(242,"td"),e._uU(243,"Style class of the component."),e.qZA()(),e.TgZ(244,"tr")(245,"td"),e._uU(246,"inputStyleClass"),e.qZA(),e.TgZ(247,"td"),e._uU(248,"string"),e.qZA(),e.TgZ(249,"td"),e._uU(250,"null"),e.qZA(),e.TgZ(251,"td"),e._uU(252,"Inline style of the input field."),e.qZA()(),e.TgZ(253,"tr")(254,"td"),e._uU(255,"panelStyleClass"),e.qZA(),e.TgZ(256,"td"),e._uU(257,"string"),e.qZA(),e.TgZ(258,"td"),e._uU(259,"null"),e.qZA(),e.TgZ(260,"td"),e._uU(261,"Style class of the overlay panel element."),e.qZA()(),e.TgZ(262,"tr")(263,"td"),e._uU(264,"inputId"),e.qZA(),e.TgZ(265,"td"),e._uU(266,"string"),e.qZA(),e.TgZ(267,"td"),e._uU(268,"null"),e.qZA(),e.TgZ(269,"td"),e._uU(270,"Identifier of the focus input to match a label defined for the component."),e.qZA()(),e.TgZ(271,"tr")(272,"td"),e._uU(273,"name"),e.qZA(),e.TgZ(274,"td"),e._uU(275,"string"),e.qZA(),e.TgZ(276,"td"),e._uU(277,"null"),e.qZA(),e.TgZ(278,"td"),e._uU(279,"Name of the input element."),e.qZA()(),e.TgZ(280,"tr")(281,"td"),e._uU(282,"optionGroupLabel"),e.qZA(),e.TgZ(283,"td"),e._uU(284,"string"),e.qZA(),e.TgZ(285,"td"),e._uU(286,"label"),e.qZA(),e.TgZ(287,"td"),e._uU(288,"Name of the label field of an option group."),e.qZA()(),e.TgZ(289,"tr")(290,"td"),e._uU(291,"group"),e.qZA(),e.TgZ(292,"td"),e._uU(293,"boolean"),e.qZA(),e.TgZ(294,"td"),e._uU(295,"false"),e.qZA(),e.TgZ(296,"td"),e._uU(297,"Whether to display options as grouped when nested options are provided."),e.qZA()(),e.TgZ(298,"tr")(299,"td"),e._uU(300,"optionGroupChildren"),e.qZA(),e.TgZ(301,"td"),e._uU(302,"string"),e.qZA(),e.TgZ(303,"td"),e._uU(304,"items"),e.qZA(),e.TgZ(305,"td"),e._uU(306,"Name of the options field of an option group."),e.qZA()(),e.TgZ(307,"tr")(308,"td"),e._uU(309,"placeholder"),e.qZA(),e.TgZ(310,"td"),e._uU(311,"string"),e.qZA(),e.TgZ(312,"td"),e._uU(313,"null"),e.qZA(),e.TgZ(314,"td"),e._uU(315,"Hint text for the input field."),e.qZA()(),e.TgZ(316,"tr")(317,"td"),e._uU(318,"readonly"),e.qZA(),e.TgZ(319,"td"),e._uU(320,"boolean"),e.qZA(),e.TgZ(321,"td"),e._uU(322,"false"),e.qZA(),e.TgZ(323,"td"),e._uU(324,"When present, it specifies that the input cannot be typed."),e.qZA()(),e.TgZ(325,"tr")(326,"td"),e._uU(327,"disabled"),e.qZA(),e.TgZ(328,"td"),e._uU(329,"boolean"),e.qZA(),e.TgZ(330,"td"),e._uU(331,"false"),e.qZA(),e.TgZ(332,"td"),e._uU(333,"When present, it specifies that the component should be disabled."),e.qZA()(),e.TgZ(334,"tr")(335,"td"),e._uU(336,"maxlength"),e.qZA(),e.TgZ(337,"td"),e._uU(338,"number"),e.qZA(),e.TgZ(339,"td"),e._uU(340,"null"),e.qZA(),e.TgZ(341,"td"),e._uU(342,"Maximum number of character allows in the input field."),e.qZA()(),e.TgZ(343,"tr")(344,"td"),e._uU(345,"size"),e.qZA(),e.TgZ(346,"td"),e._uU(347,"number"),e.qZA(),e.TgZ(348,"td"),e._uU(349,"null"),e.qZA(),e.TgZ(350,"td"),e._uU(351,"Size of the input field."),e.qZA()(),e.TgZ(352,"tr")(353,"td"),e._uU(354,"appendTo"),e.qZA(),e.TgZ(355,"td"),e._uU(356,"any"),e.qZA(),e.TgZ(357,"td"),e._uU(358,"null"),e.qZA(),e.TgZ(359,"td"),e._uU(360,'Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).'),e.qZA()(),e.TgZ(361,"tr")(362,"td"),e._uU(363,"tabindex"),e.qZA(),e.TgZ(364,"td"),e._uU(365,"number"),e.qZA(),e.TgZ(366,"td"),e._uU(367,"null"),e.qZA(),e.TgZ(368,"td"),e._uU(369,"Index of the element in tabbing order."),e.qZA()(),e.TgZ(370,"tr")(371,"td"),e._uU(372,"dataKey"),e.qZA(),e.TgZ(373,"td"),e._uU(374,"string"),e.qZA(),e.TgZ(375,"td"),e._uU(376,"null"),e.qZA(),e.TgZ(377,"td"),e._uU(378,"A property to uniquely identify a value in options."),e.qZA()(),e.TgZ(379,"tr")(380,"td"),e._uU(381,"autoHighlight"),e.qZA(),e.TgZ(382,"td"),e._uU(383,"boolean"),e.qZA(),e.TgZ(384,"td"),e._uU(385,"false"),e.qZA(),e.TgZ(386,"td"),e._uU(387,"When enabled, highlights the first item in the list by default."),e.qZA()(),e.TgZ(388,"tr")(389,"td"),e._uU(390,"type"),e.qZA(),e.TgZ(391,"td"),e._uU(392,"string"),e.qZA(),e.TgZ(393,"td"),e._uU(394,"text"),e.qZA(),e.TgZ(395,"td"),e._uU(396,'Type of the input, defaults to "text".'),e.qZA()(),e.TgZ(397,"tr")(398,"td"),e._uU(399,"showEmptyMessage"),e.qZA(),e.TgZ(400,"td"),e._uU(401,"boolean"),e.qZA(),e.TgZ(402,"td"),e._uU(403,"false"),e.qZA(),e.TgZ(404,"td"),e._uU(405,"Whether to show the empty message or not."),e.qZA()(),e.TgZ(406,"tr")(407,"td"),e._uU(408,"emptyMessage"),e.qZA(),e.TgZ(409,"td"),e._uU(410,"string"),e.qZA(),e.TgZ(411,"td"),e._uU(412,"No results found"),e.qZA(),e.TgZ(413,"td"),e._uU(414,"Text to display when there is no data. Defaults to global value in i18n translation configuration."),e.qZA()(),e.TgZ(415,"tr")(416,"td"),e._uU(417,"immutable"),e.qZA(),e.TgZ(418,"td"),e._uU(419,"boolean"),e.qZA(),e.TgZ(420,"td"),e._uU(421,"true"),e.qZA(),e.TgZ(422,"td"),e._uU(423,'Defines how the suggestions should be manipulated. More information is available at "Change Detection" section above.'),e.qZA()(),e.TgZ(424,"tr")(425,"td"),e._uU(426,"required"),e.qZA(),e.TgZ(427,"td"),e._uU(428,"boolean"),e.qZA(),e.TgZ(429,"td"),e._uU(430,"false"),e.qZA(),e.TgZ(431,"td"),e._uU(432,"When present, it specifies that an input field must be filled out before submitting the form."),e.qZA()(),e.TgZ(433,"tr")(434,"td"),e._uU(435,"autofocus"),e.qZA(),e.TgZ(436,"td"),e._uU(437,"boolean"),e.qZA(),e.TgZ(438,"td"),e._uU(439,"false"),e.qZA(),e.TgZ(440,"td"),e._uU(441,"When present, it specifies that the component should automatically get focus on load."),e.qZA()(),e.TgZ(442,"tr")(443,"td"),e._uU(444,"forceSelection"),e.qZA(),e.TgZ(445,"td"),e._uU(446,"boolean"),e.qZA(),e.TgZ(447,"td"),e._uU(448,"false"),e.qZA(),e.TgZ(449,"td"),e._uU(450,"When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions."),e.qZA()(),e.TgZ(451,"tr")(452,"td"),e._uU(453,"dropdownMode"),e.qZA(),e.TgZ(454,"td"),e._uU(455,"string"),e.qZA(),e.TgZ(456,"td"),e._uU(457,"blank"),e.qZA(),e.TgZ(458,"td"),e._uU(459,'Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.'),e.qZA()(),e.TgZ(460,"tr")(461,"td"),e._uU(462,"baseZIndex"),e.qZA(),e.TgZ(463,"td"),e._uU(464,"number"),e.qZA(),e.TgZ(465,"td"),e._uU(466,"0"),e.qZA(),e.TgZ(467,"td"),e._uU(468,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(469,"tr")(470,"td"),e._uU(471,"autoZIndex"),e.qZA(),e.TgZ(472,"td"),e._uU(473,"boolean"),e.qZA(),e.TgZ(474,"td"),e._uU(475,"true"),e.qZA(),e.TgZ(476,"td"),e._uU(477,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(478,"tr")(479,"td"),e._uU(480,"showTransitionOptions"),e.qZA(),e.TgZ(481,"td"),e._uU(482,"string"),e.qZA(),e.TgZ(483,"td"),e._uU(484,".12s cubic-bezier(0, 0, 0.2, 1)"),e.qZA(),e.TgZ(485,"td"),e._uU(486,"Transition options of the show animation."),e.qZA()(),e.TgZ(487,"tr")(488,"td"),e._uU(489,"hideTransitionOptions"),e.qZA(),e.TgZ(490,"td"),e._uU(491,"string"),e.qZA(),e.TgZ(492,"td"),e._uU(493,".1s linear"),e.qZA(),e.TgZ(494,"td"),e._uU(495,"Transition options of the hide animation."),e.qZA()(),e.TgZ(496,"tr")(497,"td"),e._uU(498,"ariaLabel"),e.qZA(),e.TgZ(499,"td"),e._uU(500,"string"),e.qZA(),e.TgZ(501,"td"),e._uU(502,"null"),e.qZA(),e.TgZ(503,"td"),e._uU(504,"Defines a string that labels the input for accessibility."),e.qZA()(),e.TgZ(505,"tr")(506,"td"),e._uU(507,"ariaLabelledBy"),e.qZA(),e.TgZ(508,"td"),e._uU(509,"string"),e.qZA(),e.TgZ(510,"td"),e._uU(511,"null"),e.qZA(),e.TgZ(512,"td"),e._uU(513,"Specifies one or more IDs in the DOM that labels the input field."),e.qZA()(),e.TgZ(514,"tr")(515,"td"),e._uU(516,"dropdownAriaLabel"),e.qZA(),e.TgZ(517,"td"),e._uU(518,"string"),e.qZA(),e.TgZ(519,"td"),e._uU(520,"null"),e.qZA(),e.TgZ(521,"td"),e._uU(522,"Defines a string that labels the dropdown button for accessibility."),e.qZA()(),e.TgZ(523,"tr")(524,"td"),e._uU(525,"unique"),e.qZA(),e.TgZ(526,"td"),e._uU(527,"boolean"),e.qZA(),e.TgZ(528,"td"),e._uU(529,"true"),e.qZA(),e.TgZ(530,"td"),e._uU(531,"Ensures uniqueness of selected items on multiple mode."),e.qZA()(),e.TgZ(532,"tr")(533,"td"),e._uU(534,"autocomplete"),e.qZA(),e.TgZ(535,"td"),e._uU(536,"string"),e.qZA(),e.TgZ(537,"td"),e._uU(538,"null"),e.qZA(),e.TgZ(539,"td"),e._uU(540,"Used to define a string that autocomplete attribute the current element."),e.qZA()(),e.TgZ(541,"tr")(542,"td"),e._uU(543,"showClear"),e.qZA(),e.TgZ(544,"td"),e._uU(545,"boolean"),e.qZA(),e.TgZ(546,"td"),e._uU(547,"false"),e.qZA(),e.TgZ(548,"td"),e._uU(549,"When enabled, a clear icon is displayed to clear the value."),e.qZA()(),e.TgZ(550,"tr")(551,"td"),e._uU(552,"virtualScroll"),e.qZA(),e.TgZ(553,"td"),e._uU(554,"boolean"),e.qZA(),e.TgZ(555,"td"),e._uU(556,"false"),e.qZA(),e.TgZ(557,"td"),e._uU(558,"Whether the data should be loaded on demand during scroll."),e.qZA()(),e.TgZ(559,"tr")(560,"td"),e._uU(561,"virtualScrollItemSize"),e.qZA(),e.TgZ(562,"td"),e._uU(563,"number"),e.qZA(),e.TgZ(564,"td"),e._uU(565,"null"),e.qZA(),e.TgZ(566,"td"),e._uU(567,"Height of an item in the list for VirtualScrolling."),e.qZA()(),e.TgZ(568,"tr")(569,"td"),e._uU(570,"virtualScrollOptions"),e.qZA(),e.TgZ(571,"td"),e._uU(572,"ScrollerOptions"),e.qZA(),e.TgZ(573,"td"),e._uU(574,"null"),e.qZA(),e.TgZ(575,"td"),e._uU(576,"Whether to use the scroller feature. The properties of "),e.TgZ(577,"a",19),e._uU(578,"scroller"),e.qZA(),e._uU(579," component can be used like an object in it."),e.qZA()(),e.TgZ(580,"tr")(581,"td"),e._uU(582,"lazy"),e.qZA(),e.TgZ(583,"td"),e._uU(584,"boolean"),e.qZA(),e.TgZ(585,"td"),e._uU(586,"false"),e.qZA(),e.TgZ(587,"td"),e._uU(588,"Defines if data is loaded and interacted with in lazy manner."),e.qZA()()()()(),e.TgZ(589,"h5"),e._uU(590,"Events"),e.qZA(),e.TgZ(591,"div",17)(592,"table",18)(593,"thead")(594,"tr")(595,"th"),e._uU(596,"Name"),e.qZA(),e.TgZ(597,"th"),e._uU(598,"Parameters"),e.qZA(),e.TgZ(599,"th"),e._uU(600,"Description"),e.qZA()()(),e.TgZ(601,"tbody")(602,"tr")(603,"td"),e._uU(604,"completeMethod"),e.qZA(),e.TgZ(605,"td"),e._uU(606," event.originalEvent: browser event "),e._UZ(607,"br"),e._uU(608," event.query: Value to search with "),e.qZA(),e.TgZ(609,"td"),e._uU(610,"Callback to invoke to search for suggestions."),e.qZA()(),e.TgZ(611,"tr")(612,"td"),e._uU(613,"onFocus"),e.qZA(),e.TgZ(614,"td"),e._uU(615,"event: Browser event"),e.qZA(),e.TgZ(616,"td"),e._uU(617,"Callback to invoke when autocomplete gets focus."),e.qZA()(),e.TgZ(618,"tr")(619,"td"),e._uU(620,"onBlur"),e.qZA(),e.TgZ(621,"td"),e._uU(622,"event: Browser event"),e.qZA(),e.TgZ(623,"td"),e._uU(624,"Callback to invoke when autocomplete loses focus."),e.qZA()(),e.TgZ(625,"tr")(626,"td"),e._uU(627,"onKeyUp"),e.qZA(),e.TgZ(628,"td"),e._uU(629,"event: Browser event"),e.qZA(),e.TgZ(630,"td"),e._uU(631,"Callback to invoke when a user releases a key."),e.qZA()(),e.TgZ(632,"tr")(633,"td"),e._uU(634,"onSelect"),e.qZA(),e.TgZ(635,"td"),e._uU(636," value: Selected value "),e.qZA(),e.TgZ(637,"td"),e._uU(638,"Callback to invoke when a suggestion is selected."),e.qZA()(),e.TgZ(639,"tr")(640,"td"),e._uU(641,"onUnselect"),e.qZA(),e.TgZ(642,"td"),e._uU(643," value: Unselected value in multiple mode "),e.qZA(),e.TgZ(644,"td"),e._uU(645,"Callback to invoke when a selected value is removed."),e.qZA()(),e.TgZ(646,"tr")(647,"td"),e._uU(648,"onDropdownClick"),e.qZA(),e.TgZ(649,"td"),e._uU(650," event.originalEvent: browser event "),e._UZ(651,"br"),e._uU(652," event.query: Current value of the input field "),e.qZA(),e.TgZ(653,"td"),e._uU(654,"Callback to invoke when dropdown button is clicked."),e.qZA()(),e.TgZ(655,"tr")(656,"td"),e._uU(657,"onClear"),e.qZA(),e.TgZ(658,"td"),e._uU(659,"-"),e.qZA(),e.TgZ(660,"td"),e._uU(661,"Callback to invoke when input field is cleared."),e.qZA()(),e.TgZ(662,"tr")(663,"td"),e._uU(664,"onShow"),e.qZA(),e.TgZ(665,"td"),e._uU(666,"event: Animation event"),e.qZA(),e.TgZ(667,"td"),e._uU(668,"Callback to invoke when autocomplete overlay gets visible."),e.qZA()(),e.TgZ(669,"tr")(670,"td"),e._uU(671,"onHide"),e.qZA(),e.TgZ(672,"td"),e._uU(673,"-"),e.qZA(),e.TgZ(674,"td"),e._uU(675,"Callback to invoke when autocomplete overlay gets hidden."),e.qZA()(),e.TgZ(676,"tr")(677,"td"),e._uU(678,"onLazyLoad"),e.qZA(),e.TgZ(679,"td"),e._uU(680,"event.first: First index of the new data range to be loaded."),e._UZ(681,"br"),e._uU(682," event.last: Last index of the new data range to be loaded. "),e.qZA(),e.TgZ(683,"td"),e._uU(684,"Callback to invoke in lazy mode to load new data."),e.qZA()()()()(),e.TgZ(685,"h5"),e._uU(686,"Templates"),e.qZA(),e.TgZ(687,"div",17)(688,"table",18)(689,"thead")(690,"tr")(691,"th"),e._uU(692,"Name"),e.qZA(),e.TgZ(693,"th"),e._uU(694,"Parameters"),e.qZA()()(),e.TgZ(695,"tbody")(696,"tr")(697,"td"),e._uU(698,"item"),e.qZA(),e.TgZ(699,"td"),e._uU(700,"$implicit: Data of the option "),e._UZ(701,"br"),e._uU(702," index: Index of the option"),e.qZA()(),e.TgZ(703,"tr")(704,"td"),e._uU(705,"group"),e.qZA(),e.TgZ(706,"td"),e._uU(707,"$implicit: Group option"),e.qZA()(),e.TgZ(708,"tr")(709,"td"),e._uU(710,"selectedItem"),e.qZA(),e.TgZ(711,"td"),e._uU(712,"$implicit: value"),e.qZA()(),e.TgZ(713,"tr")(714,"td"),e._uU(715,"header"),e.qZA(),e.TgZ(716,"td"),e._uU(717,"-"),e.qZA()(),e.TgZ(718,"tr")(719,"td"),e._uU(720,"footer"),e.qZA(),e.TgZ(721,"td"),e._uU(722,"-"),e.qZA()(),e.TgZ(723,"tr")(724,"td"),e._uU(725,"loader"),e.qZA(),e.TgZ(726,"td"),e._uU(727,"options: Options of the scroller on loading. *This template can be used with virtualScroll."),e.qZA()()()()(),e.TgZ(728,"h5"),e._uU(729,"Styling"),e.qZA(),e.TgZ(730,"p"),e._uU(731,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(732,"a",19),e._uU(733,"theming page"),e.qZA(),e._uU(734,"."),e.qZA(),e.TgZ(735,"div",17)(736,"table",18)(737,"thead")(738,"tr")(739,"th"),e._uU(740,"Name"),e.qZA(),e.TgZ(741,"th"),e._uU(742,"Element"),e.qZA()()(),e.TgZ(743,"tbody")(744,"tr")(745,"td"),e._uU(746,"p-autocomplete"),e.qZA(),e.TgZ(747,"td"),e._uU(748,"Container element"),e.qZA()(),e.TgZ(749,"tr")(750,"td"),e._uU(751,"p-autocomplete-panel"),e.qZA(),e.TgZ(752,"td"),e._uU(753,"Overlay panel of suggestions."),e.qZA()(),e.TgZ(754,"tr")(755,"td"),e._uU(756,"p-autocomplete-items"),e.qZA(),e.TgZ(757,"td"),e._uU(758,"List container of suggestions."),e.qZA()(),e.TgZ(759,"tr")(760,"td"),e._uU(761,"p-autocomplete-item"),e.qZA(),e.TgZ(762,"td"),e._uU(763,"List item of a suggestion."),e.qZA()(),e.TgZ(764,"tr")(765,"td"),e._uU(766,"p-autocomplete-token"),e.qZA(),e.TgZ(767,"td"),e._uU(768,"Element of a selected item in multiple mode."),e.qZA()(),e.TgZ(769,"tr")(770,"td"),e._uU(771,"p-autocomplete-token-icon"),e.qZA(),e.TgZ(772,"td"),e._uU(773,"Close icon element of a selected item in multiple mode."),e.qZA()(),e.TgZ(774,"tr")(775,"td"),e._uU(776,"p-autocomplete-token-label"),e.qZA(),e.TgZ(777,"td"),e._uU(778,"Label of a selected item in multiple mode."),e.qZA()(),e.TgZ(779,"tr")(780,"td"),e._uU(781,"p-autocomplete-loader"),e.qZA(),e.TgZ(782,"td"),e._uU(783,"Loader icon."),e.qZA()()()()(),e.TgZ(784,"h5"),e._uU(785,"Dependencies"),e.qZA(),e.TgZ(786,"p"),e._uU(787,"None."),e.qZA()(),e.TgZ(788,"p-tabPanel",20)(789,"a",21)(790,"span"),e._uU(791,"View on GitHub"),e.qZA()(),e.TgZ(792,"a",22)(793,"span"),e._uU(794,"Edit in StackBlitz"),e.qZA()(),e.TgZ(795,"app-code",16),e.IAx(),e._uU(796,'\n<div class="card">\n    <h5>Basic</h5>\n    <p-autoComplete [(ngModel)]="selectedCountry" [showEmptyMessage]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" [minLength]="1"></p-autoComplete>\n\n    <h5>Dropdown and Templating</h5>\n    <p-autoComplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" [dropdown]="true">\n        <ng-template let-country pTemplate="item">\n            <div class="country-item">\n                <img src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="\'flag flag-\' + country.code.toLowerCase()" />\n                <div>{{country.name}}</div>\n            </div>\n        </ng-template>\n    </p-autoComplete>\n\n    <h5>Grouped</h5>\n    <p-autoComplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" field="label" [dropdown]="true">\n        <ng-template let-group pTemplate="group">\n            <div class="flex align-items-center">\n                <img src="assets/showcase/images/demo/flag/flag_placeholder.png" [class]="\'mr-2 flag flag-\' + group.value" style="width: 20px"/>\n                <span>{{group.label}}</span>\n            </div>\n        </ng-template>\n    </p-autoComplete>\n\n    <h5>Virtual Scroll (10000 Items)</h5>\n    <p-autoComplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" field="label" [dropdown]="true">\n    </p-autoComplete>\n\n    <h5>Multiple</h5>\n    <span class="p-fluid">\n        <p-autoComplete [(ngModel)]="selectedCountries" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name" [multiple]="true">\n        </p-autoComplete>\n    </span>\n</div>\n'),e.fQ9(),e.qZA(),e.TgZ(797,"app-code",15),e.IAx(),e._uU(798,"\nexport class AutoCompleteDemo {\n\n    selectedCountry: any;\n\n    selectedCity: any;\n\n    selectedItem: any;\n\n    countries: any[];\n\n    items: any[];\n\n    filteredCountries: any[];\n\n    filteredItems: any[];\n\n    selectedCountries: any[];\n\n    selectedCountryAdvanced: any[];\n\n    filteredBrands: any[];\n\n    groupedCities: SelectItemGroup[];\n\n    filteredGroups: any[];\n\n    constructor(private countryService: CountryService, private filterService: FilterService) { }\n\n    ngOnInit() {\n        this.countryService.getCountries().then(countries => {\n            this.countries = countries;\n        });\n\n        this.groupedCities = [\n            {\n                label: 'Germany', value: 'de',\n                items: [\n                    {label: 'Berlin', value: 'Berlin'},\n                    {label: 'Frankfurt', value: 'Frankfurt'},\n                    {label: 'Hamburg', value: 'Hamburg'},\n                    {label: 'Munich', value: 'Munich'}\n                ]\n            },\n            {\n                label: 'USA', value: 'us',\n                items: [\n                    {label: 'Chicago', value: 'Chicago'},\n                    {label: 'Los Angeles', value: 'Los Angeles'},\n                    {label: 'New York', value: 'New York'},\n                    {label: 'San Francisco', value: 'San Francisco'}\n                ]\n            },\n            {\n                label: 'Japan', value: 'jp',\n                items: [\n                    {label: 'Kyoto', value: 'Kyoto'},\n                    {label: 'Osaka', value: 'Osaka'},\n                    {label: 'Tokyo', value: 'Tokyo'},\n                    {label: 'Yokohama', value: 'Yokohama'}\n                ]\n            }\n        ];\n\n        this.items = [];\n        for (let i = 0; i < 10000; i++) {\n            this.items.push({label: 'Item ' + i, value: 'Item ' + i});\n        }\n    }\n\n    filterCountry(event) {\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\n        let filtered : any[] = [];\n        let query = event.query;\n\n        for(let i = 0; i < this.countries.length; i++) {\n            let country = this.countries[i];\n            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {\n                filtered.push(country);\n            }\n        }\n\n        this.filteredCountries = filtered;\n    }\n\n    filterItems(event) {\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\n        let filtered : any[] = [];\n        let query = event.query;\n\n        for(let i = 0; i < this.items.length; i++) {\n            let item = this.items[i];\n            if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {\n                filtered.push(item);\n            }\n        }\n\n        this.filteredItems = filtered;\n    }\n\n    filterGroupedCity(event) {\n        let query = event.query;\n        let filteredGroups = [];\n\n        for (let optgroup of this.groupedCities) {\n            let filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, \"contains\");\n            if (filteredSubOptions && filteredSubOptions.length) {\n                filteredGroups.push({\n                    label: optgroup.label,\n                    value: optgroup.value,\n                    items: filteredSubOptions\n                });\n            }\n        }\n\n        this.filteredGroups = filteredGroups;\n    }\n}\n"),e.fQ9(),e.qZA(),e.TgZ(799,"app-code",15),e.IAx(),e._uU(800,"\n@Injectable()\nexport class CountryService {\n\n    constructor(private http: Http) {}\n\n    getCountries() {\n        return this.http.get('showcase/resources/data/countries.json')\n                    .toPromise()\n                    .then(res => <any[]> res.json().data)\n                    .then(data => { return data; });\n    }\n}\n"),e.fQ9(),e.qZA()(),e.TgZ(801,"p-tabPanel",23),e.YNc(802,v,1,0,"ng-template",24),e.qZA()()()),2&o&&(e.xp6(11),e.Q6J("ngModel",n.selectedCountry)("showEmptyMessage",!0)("suggestions",n.filteredCountries)("minLength",1),e.xp6(3),e.Q6J("ngModel",n.selectedCountryAdvanced)("suggestions",n.filteredCountries)("dropdown",!0),e.xp6(4),e.Q6J("ngModel",n.selectedCity)("group",!0)("suggestions",n.filteredGroups)("dropdown",!0),e.xp6(4),e.Q6J("ngModel",n.selectedItem)("virtualScroll",!0)("suggestions",n.filteredItems)("virtualScrollItemSize",34)("dropdown",!0),e.xp6(4),e.Q6J("ngModel",n.selectedCountries)("suggestions",n.filteredCountries)("multiple",!0),e.xp6(551),e.Q6J("routerLink",e.DdM(21,y)),e.xp6(155),e.Q6J("routerLink",e.DdM(22,b)))},dependencies:[a.JJ,a.On,m.yS,s.Qc,Z.jx,r.xf,r.x4,p.P,c.h],encapsulation:2}),l})(),w=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:C}]),m.Bz]}),l})();var M=u(6398),I=u(1508);let S=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[A.ez,a.u5,w,M.WN,I.LU,p.L,c.a]}),l})()}}]);