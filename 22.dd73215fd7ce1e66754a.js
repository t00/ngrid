(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{D0EO:function(l,e,n){"use strict";n.d(e,"a",function(){return a});class a{}},R3BP:function(l,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("D57K"),t=n("9bRT"),i=n("WT5v"),o=n("SKbq"),u=n("XApm");let r=(()=>{return a.a([Object(u.i)({id:"blockUi"}),Object(o.a)()],class{constructor(l,e){this.table=l,this._blockInProgress=!1,this._removePlugin=e.setPlugin("blockUi",this),l.registry.changes.subscribe(l=>{for(const e of l)switch(e.type){case"blocker":this.setupBlocker()}}),e.events.subscribe(l=>{if("onDataSource"===l.kind){const{prev:e,curr:n}=l;e&&o.a.kill(this,e),n.onSourceChanging.pipe(Object(o.a)(this,n)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),n.onSourceChanged.pipe(Object(o.a)(this,n)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(l){let e=Object(i.c)(l);!e||"auto"!==l&&""!==l||(e="auto"),Object(t.a)(l)&&this._blockUi!==l?(Object(t.a)(this._blockUi)&&o.a.kill(this,this._blockUi),this._blockUi=l,l.pipe(Object(o.a)(this,this._blockUi)).subscribe(l=>{this._blockInProgress=l,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){this._removePlugin(this.table)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const l=this.table.registry.getSingle("blocker");l&&(this._blockerEmbeddedVRef=this.table.createView("afterContent",l.tRef,{$implicit:this.table}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.table.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}})})()},eNUZ:function(l,e,n){"use strict";n.r(e);var a=n("kZht"),t=n("D57K"),i=n("cc5W"),o=n("XApm");n("JRn2");let u=(()=>{return t.a([Object(i.c)("pbl-focus-and-selection-example",{title:"Focus And Selection"})],class{constructor(l){this.datasource=l,this.columns=Object(o.j)().table({prop:"id",sort:!0,width:"40px",wontBudge:!0},{prop:"name",sort:!0},{prop:"email",minWidth:250,width:"150px"},{prop:"address"},{prop:"rating",type:"starRatings",width:"120px"}).build(),this.ds=Object(o.k)().onTrigger(()=>this.datasource.getSellers(500)).create()}applyRange(l,e){if(e){const n=l.contextApi.focusedCell;if(n){const a=[];for(let t=0;t<e;t++){const i=l.contextApi.findRowInCache(n.rowIdent,t,!0);if(i)for(let l=0;l<e;l++)i.cells[n.colIndex+l]&&a.push({rowIdent:i.identity,colIndex:n.colIndex+l})}l.contextApi.selectCells(a,!0,!0)}}else l.contextApi.unselectCells(!0)}})})(),r=(()=>{return t.a([Object(i.a)(u)],class{})})();var b=n("C9Ky"),c=n("pLqg"),d=n("aM4+"),s=n("CTcY"),p=n("QH8h"),m=n("ApNh"),f=n("ibhO"),h=n("lpRu"),H=n("HZcV"),g=n("iHGu"),_=n("TEiM"),v=n("8Y4T"),w=n("uJF3"),y=n("R3BP"),k=n("Sgnd"),x=n("76xf"),F=n("pOQZ"),S=n("Gien"),C=n("8JnZ"),N=n("owzC"),R=n("FxgA"),A=n("QsvA"),P=n("qBwE"),I=n("4rR8"),O=n("rW4h"),L=n("5ohT"),B=n("tBgR"),j=n("3kIJ"),T=n("An66"),q=n("zRZK"),D=a.tb({encapsulation:2,styles:[[""]],data:{}});function U(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,1)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Hb(l,1)._handleKeydown(n)&&t),t},p.c,p.a)),a.ub(1,8568832,[[10,4]],0,m.s,[a.l,a.h,[2,m.l],[2,m.r]],{value:[0,"value"]},null),(l()(),a.Pb(2,0,[" "," "]))],function(l,e){l(e,1,0,e.context.index)},function(l,e){l(e,0,0,a.Hb(e,1)._getTabIndex(),a.Hb(e,1).selected,a.Hb(e,1).multiple,a.Hb(e,1).active,a.Hb(e,1).id,a.Hb(e,1)._getAriaSelected(),a.Hb(e,1).disabled.toString(),a.Hb(e,1).disabled),l(e,2,0,e.context.$implicit.id+" - "+e.context.$implicit.name)})}function E(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,1)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Hb(l,1)._handleKeydown(n)&&t),t},p.c,p.a)),a.ub(1,8568832,[[22,4]],0,m.s,[a.l,a.h,[2,m.l],[2,m.r]],{value:[0,"value"]},null),(l()(),a.Pb(2,0,[" "," "]))],function(l,e){l(e,1,0,e.context.index)},function(l,e){l(e,0,0,a.Hb(e,1)._getTabIndex(),a.Hb(e,1).selected,a.Hb(e,1).multiple,a.Hb(e,1).active,a.Hb(e,1).id,a.Hb(e,1)._getAriaSelected(),a.Hb(e,1).disabled.toString(),a.Hb(e,1).disabled),l(e,2,0,e.context.$implicit.label)})}function V(l){return a.Rb(2,[(l()(),a.vb(0,16777216,null,null,6,"pbl-ngrid",[["blockUi",""],["class","pbl-ngrid-cell-ellipsis"]],null,null,null,f.b,f.a)),a.Mb(5120,null,h.a,H.b,[H.a]),a.Mb(5120,null,g.a,H.c,[H.a]),a.Mb(131584,null,_.a,_.a,[[3,_.a]]),a.ub(4,6209536,[["grid",4]],0,H.a,[a.s,a.R,a.l,a.t,a.B,a.h,v.b,_.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),a.Mb(1024,null,w.b,H.d,[H.a]),a.ub(6,147456,null,0,y.a,[H.a,w.b],{blockUi:[0,"blockUi"]},null),(l()(),a.vb(7,0,null,null,93,"div",[["fxLayout","column"],["fxLayoutGap","16px"]],null,null,null,null,null)),a.ub(8,671744,null,0,k.c,[a.l,x.g,[2,k.i],x.d],{fxLayout:[0,"fxLayout"]},null),a.ub(9,1720320,null,0,k.d,[a.l,a.B,F.b,x.g,[2,k.h],x.d],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),a.vb(10,0,null,null,51,"div",[["fxLayout","row"],["fxLayoutGap","16px"]],null,null,null,null,null)),a.ub(11,671744,null,0,k.c,[a.l,x.g,[2,k.i],x.d],{fxLayout:[0,"fxLayout"]},null),a.ub(12,1720320,null,0,k.d,[a.l,a.B,F.b,x.g,[2,k.h],x.d],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),a.vb(13,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,4).contextApi.focusCell({rowIdent:a.Hb(l,32).value,colIndex:a.Hb(l,55).value},!0)&&t),t},S.d,S.b)),a.ub(14,180224,null,0,C.b,[a.l,N.h,[2,R.a]],{color:[0,"color"]},null),(l()(),a.Pb(-1,0,["Set Focus:"])),(l()(),a.vb(16,0,null,null,22,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,A.b,A.a)),a.ub(17,7520256,null,9,P.b,[a.l,a.h,[2,m.j],[2,F.b],[2,P.a],I.a,a.B,[2,R.a]],null,null),a.Nb(603979776,1,{_controlNonStatic:0}),a.Nb(335544320,2,{_controlStatic:0}),a.Nb(603979776,3,{_labelChildNonStatic:0}),a.Nb(335544320,4,{_labelChildStatic:0}),a.Nb(603979776,5,{_placeholderChild:0}),a.Nb(603979776,6,{_errorChildren:1}),a.Nb(603979776,7,{_hintChildren:1}),a.Nb(603979776,8,{_prefixChildren:1}),a.Nb(603979776,9,{_suffixChildren:1}),(l()(),a.vb(27,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.ub(28,16384,[[3,4],[4,4]],0,P.e,[],null,null),(l()(),a.Pb(-1,null,["Row To Focus"])),(l()(),a.vb(30,0,null,1,8,"mat-select",[["class","mat-select"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,e,n){var t=!0;return"keydown"===e&&(t=!1!==a.Hb(l,32)._handleKeydown(n)&&t),"focus"===e&&(t=!1!==a.Hb(l,32)._onFocus()&&t),"blur"===e&&(t=!1!==a.Hb(l,32)._onBlur()&&t),t},O.b,O.a)),a.Mb(6144,null,m.l,null,[L.c]),a.ub(32,2080768,[["fRow",4]],3,L.c,[B.h,a.h,a.B,m.d,a.l,[2,F.b],[2,j.f],[2,j.b],[2,P.b],[8,null],[8,null],L.a,N.l],null,null),a.Nb(603979776,10,{options:1}),a.Nb(603979776,11,{optionGroups:1}),a.Nb(603979776,12,{customTrigger:0}),a.Mb(2048,[[1,4],[2,4]],P.c,null,[L.c]),(l()(),a.lb(16777216,null,1,1,null,U)),a.ub(38,278528,null,0,T.n,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),(l()(),a.vb(39,0,null,null,22,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,A.b,A.a)),a.ub(40,7520256,null,9,P.b,[a.l,a.h,[2,m.j],[2,F.b],[2,P.a],I.a,a.B,[2,R.a]],null,null),a.Nb(603979776,13,{_controlNonStatic:0}),a.Nb(335544320,14,{_controlStatic:0}),a.Nb(603979776,15,{_labelChildNonStatic:0}),a.Nb(335544320,16,{_labelChildStatic:0}),a.Nb(603979776,17,{_placeholderChild:0}),a.Nb(603979776,18,{_errorChildren:1}),a.Nb(603979776,19,{_hintChildren:1}),a.Nb(603979776,20,{_prefixChildren:1}),a.Nb(603979776,21,{_suffixChildren:1}),(l()(),a.vb(50,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.ub(51,16384,[[15,4],[16,4]],0,P.e,[],null,null),(l()(),a.Pb(-1,null,["Column To Focus"])),(l()(),a.vb(53,0,null,1,8,"mat-select",[["class","mat-select"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,e,n){var t=!0;return"keydown"===e&&(t=!1!==a.Hb(l,55)._handleKeydown(n)&&t),"focus"===e&&(t=!1!==a.Hb(l,55)._onFocus()&&t),"blur"===e&&(t=!1!==a.Hb(l,55)._onBlur()&&t),t},O.b,O.a)),a.Mb(6144,null,m.l,null,[L.c]),a.ub(55,2080768,[["fCol",4]],3,L.c,[B.h,a.h,a.B,m.d,a.l,[2,F.b],[2,j.f],[2,j.b],[2,P.b],[8,null],[8,null],L.a,N.l],null,null),a.Nb(603979776,22,{options:1}),a.Nb(603979776,23,{optionGroups:1}),a.Nb(603979776,24,{customTrigger:0}),a.Mb(2048,[[13,4],[14,4]],P.c,null,[L.c]),(l()(),a.lb(16777216,null,1,1,null,E)),a.ub(61,278528,null,0,T.n,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),(l()(),a.vb(62,0,null,null,38,"div",[["fxLayout","row"],["fxLayoutGap","16px"]],null,null,null,null,null)),a.ub(63,671744,null,0,k.c,[a.l,x.g,[2,k.i],x.d],{fxLayout:[0,"fxLayout"]},null),a.ub(64,1720320,null,0,k.d,[a.l,a.B,F.b,x.g,[2,k.h],x.d],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),a.vb(65,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.applyRange(a.Hb(l,4),a.Hb(l,83).value)&&t),t},S.d,S.b)),a.ub(66,180224,null,0,C.b,[a.l,N.h,[2,R.a]],{color:[0,"color"]},null),(l()(),a.Pb(-1,0,["Set Range:"])),(l()(),a.vb(68,0,null,null,32,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,A.b,A.a)),a.ub(69,7520256,null,9,P.b,[a.l,a.h,[2,m.j],[2,F.b],[2,P.a],I.a,a.B,[2,R.a]],null,null),a.Nb(603979776,25,{_controlNonStatic:0}),a.Nb(335544320,26,{_controlStatic:0}),a.Nb(603979776,27,{_labelChildNonStatic:0}),a.Nb(335544320,28,{_labelChildStatic:0}),a.Nb(603979776,29,{_placeholderChild:0}),a.Nb(603979776,30,{_errorChildren:1}),a.Nb(603979776,31,{_hintChildren:1}),a.Nb(603979776,32,{_prefixChildren:1}),a.Nb(603979776,33,{_suffixChildren:1}),(l()(),a.vb(79,0,null,3,2,"mat-label",[],null,null,null,null,null)),a.ub(80,16384,[[27,4],[28,4]],0,P.e,[],null,null),(l()(),a.Pb(-1,null,["Range Size"])),(l()(),a.vb(82,0,null,1,18,"mat-select",[["class","mat-select"],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,e,n){var t=!0;return"keydown"===e&&(t=!1!==a.Hb(l,83)._handleKeydown(n)&&t),"focus"===e&&(t=!1!==a.Hb(l,83)._onFocus()&&t),"blur"===e&&(t=!1!==a.Hb(l,83)._onBlur()&&t),t},O.b,O.a)),a.ub(83,2080768,[["fRange",4]],3,L.c,[B.h,a.h,a.B,m.d,a.l,[2,F.b],[2,j.f],[2,j.b],[2,P.b],[8,null],[8,null],L.a,N.l],null,null),a.Nb(603979776,34,{options:1}),a.Nb(603979776,35,{optionGroups:1}),a.Nb(603979776,36,{customTrigger:0}),a.Mb(2048,[[25,4],[26,4]],P.c,null,[L.c]),a.Mb(2048,null,m.l,null,[L.c]),(l()(),a.vb(89,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,90)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Hb(l,90)._handleKeydown(n)&&t),t},p.c,p.a)),a.ub(90,8568832,[[34,4]],0,m.s,[a.l,a.h,[2,m.l],[2,m.r]],{value:[0,"value"]},null),(l()(),a.Pb(-1,0,["1 X 1"])),(l()(),a.vb(92,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,93)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Hb(l,93)._handleKeydown(n)&&t),t},p.c,p.a)),a.ub(93,8568832,[[34,4]],0,m.s,[a.l,a.h,[2,m.l],[2,m.r]],{value:[0,"value"]},null),(l()(),a.Pb(-1,0,["2 X 2"])),(l()(),a.vb(95,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,96)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Hb(l,96)._handleKeydown(n)&&t),t},p.c,p.a)),a.ub(96,8568832,[[34,4]],0,m.s,[a.l,a.h,[2,m.l],[2,m.r]],{value:[0,"value"]},null),(l()(),a.Pb(-1,0,["3 X 3"])),(l()(),a.vb(98,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a.Hb(l,99)._selectViaInteraction()&&t),"keydown"===e&&(t=!1!==a.Hb(l,99)._handleKeydown(n)&&t),t},p.c,p.a)),a.ub(99,8568832,[[34,4]],0,m.s,[a.l,a.h,[2,m.l],[2,m.r]],{value:[0,"value"]},null),(l()(),a.Pb(-1,0,["Clear"]))],function(l,e){var n=e.component;l(e,4,0,n.ds,n.columns),l(e,6,0,""),l(e,8,0,"column"),l(e,9,0,"16px"),l(e,11,0,"row"),l(e,12,0,"16px"),l(e,14,0,"primary"),l(e,32,0),l(e,38,0,n.ds.source),l(e,55,0),l(e,61,0,n.columns.table.cols),l(e,63,0,"row"),l(e,64,0,"16px"),l(e,66,0,"primary"),l(e,83,0),l(e,90,0,1),l(e,93,0,2),l(e,96,0,3),l(e,99,0,0)},function(l,e){l(e,13,0,a.Hb(e,14).disabled||null,"NoopAnimations"===a.Hb(e,14)._animationMode),l(e,16,1,["standard"==a.Hb(e,17).appearance,"fill"==a.Hb(e,17).appearance,"outline"==a.Hb(e,17).appearance,"legacy"==a.Hb(e,17).appearance,a.Hb(e,17)._control.errorState,a.Hb(e,17)._canLabelFloat,a.Hb(e,17)._shouldLabelFloat(),a.Hb(e,17)._hasFloatingLabel(),a.Hb(e,17)._hideControlPlaceholder(),a.Hb(e,17)._control.disabled,a.Hb(e,17)._control.autofilled,a.Hb(e,17)._control.focused,"accent"==a.Hb(e,17).color,"warn"==a.Hb(e,17).color,a.Hb(e,17)._shouldForward("untouched"),a.Hb(e,17)._shouldForward("touched"),a.Hb(e,17)._shouldForward("pristine"),a.Hb(e,17)._shouldForward("dirty"),a.Hb(e,17)._shouldForward("valid"),a.Hb(e,17)._shouldForward("invalid"),a.Hb(e,17)._shouldForward("pending"),!a.Hb(e,17)._animationsEnabled]),l(e,30,1,[a.Hb(e,32).id,a.Hb(e,32).tabIndex,a.Hb(e,32)._getAriaLabel(),a.Hb(e,32)._getAriaLabelledby(),a.Hb(e,32).required.toString(),a.Hb(e,32).disabled.toString(),a.Hb(e,32).errorState,a.Hb(e,32).panelOpen?a.Hb(e,32)._optionIds:null,a.Hb(e,32).multiple,a.Hb(e,32)._ariaDescribedby||null,a.Hb(e,32)._getAriaActiveDescendant(),a.Hb(e,32).disabled,a.Hb(e,32).errorState,a.Hb(e,32).required,a.Hb(e,32).empty]),l(e,39,1,["standard"==a.Hb(e,40).appearance,"fill"==a.Hb(e,40).appearance,"outline"==a.Hb(e,40).appearance,"legacy"==a.Hb(e,40).appearance,a.Hb(e,40)._control.errorState,a.Hb(e,40)._canLabelFloat,a.Hb(e,40)._shouldLabelFloat(),a.Hb(e,40)._hasFloatingLabel(),a.Hb(e,40)._hideControlPlaceholder(),a.Hb(e,40)._control.disabled,a.Hb(e,40)._control.autofilled,a.Hb(e,40)._control.focused,"accent"==a.Hb(e,40).color,"warn"==a.Hb(e,40).color,a.Hb(e,40)._shouldForward("untouched"),a.Hb(e,40)._shouldForward("touched"),a.Hb(e,40)._shouldForward("pristine"),a.Hb(e,40)._shouldForward("dirty"),a.Hb(e,40)._shouldForward("valid"),a.Hb(e,40)._shouldForward("invalid"),a.Hb(e,40)._shouldForward("pending"),!a.Hb(e,40)._animationsEnabled]),l(e,53,1,[a.Hb(e,55).id,a.Hb(e,55).tabIndex,a.Hb(e,55)._getAriaLabel(),a.Hb(e,55)._getAriaLabelledby(),a.Hb(e,55).required.toString(),a.Hb(e,55).disabled.toString(),a.Hb(e,55).errorState,a.Hb(e,55).panelOpen?a.Hb(e,55)._optionIds:null,a.Hb(e,55).multiple,a.Hb(e,55)._ariaDescribedby||null,a.Hb(e,55)._getAriaActiveDescendant(),a.Hb(e,55).disabled,a.Hb(e,55).errorState,a.Hb(e,55).required,a.Hb(e,55).empty]),l(e,65,0,a.Hb(e,66).disabled||null,"NoopAnimations"===a.Hb(e,66)._animationMode),l(e,68,1,["standard"==a.Hb(e,69).appearance,"fill"==a.Hb(e,69).appearance,"outline"==a.Hb(e,69).appearance,"legacy"==a.Hb(e,69).appearance,a.Hb(e,69)._control.errorState,a.Hb(e,69)._canLabelFloat,a.Hb(e,69)._shouldLabelFloat(),a.Hb(e,69)._hasFloatingLabel(),a.Hb(e,69)._hideControlPlaceholder(),a.Hb(e,69)._control.disabled,a.Hb(e,69)._control.autofilled,a.Hb(e,69)._control.focused,"accent"==a.Hb(e,69).color,"warn"==a.Hb(e,69).color,a.Hb(e,69)._shouldForward("untouched"),a.Hb(e,69)._shouldForward("touched"),a.Hb(e,69)._shouldForward("pristine"),a.Hb(e,69)._shouldForward("dirty"),a.Hb(e,69)._shouldForward("valid"),a.Hb(e,69)._shouldForward("invalid"),a.Hb(e,69)._shouldForward("pending"),!a.Hb(e,69)._animationsEnabled]),l(e,82,1,[a.Hb(e,83).id,a.Hb(e,83).tabIndex,a.Hb(e,83)._getAriaLabel(),a.Hb(e,83)._getAriaLabelledby(),a.Hb(e,83).required.toString(),a.Hb(e,83).disabled.toString(),a.Hb(e,83).errorState,a.Hb(e,83).panelOpen?a.Hb(e,83)._optionIds:null,a.Hb(e,83).multiple,a.Hb(e,83)._ariaDescribedby||null,a.Hb(e,83)._getAriaActiveDescendant(),a.Hb(e,83).disabled,a.Hb(e,83).errorState,a.Hb(e,83).required,a.Hb(e,83).empty]),l(e,89,0,a.Hb(e,90)._getTabIndex(),a.Hb(e,90).selected,a.Hb(e,90).multiple,a.Hb(e,90).active,a.Hb(e,90).id,a.Hb(e,90)._getAriaSelected(),a.Hb(e,90).disabled.toString(),a.Hb(e,90).disabled),l(e,92,0,a.Hb(e,93)._getTabIndex(),a.Hb(e,93).selected,a.Hb(e,93).multiple,a.Hb(e,93).active,a.Hb(e,93).id,a.Hb(e,93)._getAriaSelected(),a.Hb(e,93).disabled.toString(),a.Hb(e,93).disabled),l(e,95,0,a.Hb(e,96)._getTabIndex(),a.Hb(e,96).selected,a.Hb(e,96).multiple,a.Hb(e,96).active,a.Hb(e,96).id,a.Hb(e,96)._getAriaSelected(),a.Hb(e,96).disabled.toString(),a.Hb(e,96).disabled),l(e,98,0,a.Hb(e,99)._getTabIndex(),a.Hb(e,99).selected,a.Hb(e,99).multiple,a.Hb(e,99).active,a.Hb(e,99).id,a.Hb(e,99)._getAriaSelected(),a.Hb(e,99).disabled.toString(),a.Hb(e,99).disabled)})}function z(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,1,"pbl-focus-and-selection-example",[],null,null,null,V,D)),a.ub(1,49152,null,0,u,[q.a],null,null)],null,null)}var G=a.rb("pbl-focus-and-selection-example",u,z,{},{},[]),K=n("OcC5"),M=n("D4FV"),W=n("aFla"),Y=n("zab8"),Z=n("ENSU"),J=n("DiCn"),Q=n("2ob+"),X=n("1VvW"),$=n("9Z2Q"),ll=n("S/D4"),el=n("a+5/"),nl=n("1PzT"),al=n("dFIu"),tl=n("uWIS"),il=n("Lv2H"),ol=n("9qA3"),ul=n("EsQC"),rl=n("0S3s"),bl=n("SWcI"),cl=n("kiRk"),dl=n("nTHA"),sl=n("FJu8"),pl=n("pDuH"),ml=n("D0EO"),fl=n("x8eK");n.d(e,"FocusAndSelectionExampleModuleNgFactory",function(){return hl});var hl=a.sb(r,[],function(l){return a.Eb([a.Fb(512,a.j,a.eb,[[8,[b.a,c.a,d.a,s.a,G]],[3,a.j],a.z]),a.Fb(4608,T.q,T.p,[a.v,[2,T.H]]),a.Fb(4608,K.c,K.c,[]),a.Fb(4608,M.c,M.c,[M.i,M.e,a.j,M.h,M.f,a.s,a.B,T.e,F.b,[2,T.k]]),a.Fb(5120,M.j,M.k,[M.c]),a.Fb(5120,L.a,L.b,[M.c]),a.Fb(5120,a.b,function(l,e){return[x.h(l,e)]},[T.e,a.D]),a.Fb(4608,m.d,m.d,[]),a.Fb(5120,W.c,W.k,[M.c]),a.Fb(5120,Y.b,Y.c,[M.c]),a.Fb(4608,Z.f,m.e,[[2,m.i],[2,m.n]]),a.Fb(1073742336,T.c,T.c,[]),a.Fb(1073742336,F.a,F.a,[]),a.Fb(1073742336,m.n,m.n,[[2,m.f],[2,Z.g]]),a.Fb(1073742336,I.b,I.b,[]),a.Fb(1073742336,m.y,m.y,[]),a.Fb(1073742336,C.c,C.c,[]),a.Fb(1073742336,K.d,K.d,[]),a.Fb(1073742336,P.d,P.d,[]),a.Fb(1073742336,J.h,J.h,[]),a.Fb(1073742336,B.e,B.e,[]),a.Fb(1073742336,M.g,M.g,[]),a.Fb(1073742336,m.w,m.w,[]),a.Fb(1073742336,m.t,m.t,[]),a.Fb(1073742336,L.d,L.d,[]),a.Fb(1073742336,x.b,x.b,[]),a.Fb(1073742336,k.e,k.e,[]),a.Fb(1073742336,Q.b,Q.b,[]),a.Fb(1073742336,X.q,X.q,[[2,X.w],[2,X.o]]),a.Fb(1073742336,$.c,$.c,[]),a.Fb(1073742336,ll.c,ll.c,[]),a.Fb(1073742336,el.c,el.c,[]),a.Fb(1073742336,W.j,W.j,[]),a.Fb(1073742336,W.g,W.g,[]),a.Fb(1073742336,nl.d,nl.d,[]),a.Fb(1073742336,nl.c,nl.c,[]),a.Fb(1073742336,m.p,m.p,[]),a.Fb(1073742336,al.a,al.a,[]),a.Fb(1073742336,tl.c,tl.c,[]),a.Fb(1073742336,N.a,N.a,[]),a.Fb(1073742336,il.k,il.k,[]),a.Fb(1073742336,ol.b,ol.b,[]),a.Fb(1073742336,Y.e,Y.e,[]),a.Fb(1073742336,ul.c,ul.c,[]),a.Fb(1073742336,rl.c,rl.c,[]),a.Fb(1073742336,bl.c,bl.c,[]),a.Fb(1073742336,cl.q,cl.q,[]),a.Fb(131584,_.a,_.a,[[3,_.a]]),a.Fb(1073742336,dl.b,dl.b,[a.z,_.a,[6,dl.a]]),a.Fb(1073742336,sl.a,sl.a,[]),a.Fb(1073742336,pl.a,pl.a,[]),a.Fb(1073742336,ml.a,ml.a,[]),a.Fb(1073742336,fl.a,fl.a,[]),a.Fb(1073742336,r,r,[])])})},rW4h:function(l,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return p});var a=n("kZht"),t=(n("5ohT"),n("An66")),i=n("D4FV"),o=n("pOQZ"),u=(n("OcC5"),n("DiCn"),n("4rR8"),n("tBgR"),n("ApNh"),n("ENSU"),n("qBwE"),n("3kIJ"),n("owzC"),a.tb({encapsulation:2,styles:[".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],data:{animation:[{type:7,name:"transformPanelWrap",definitions:[{type:1,expr:"* => void",animation:{type:11,selector:"@transformPanel",animation:[{type:9,options:null}],options:{optional:!0}},options:null}],options:{}},{type:7,name:"transformPanel",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"scaleY(0.8)",minWidth:"100%",opacity:0},offset:null},options:void 0},{type:0,name:"showing",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:0,name:"showing-multiple",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"120ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"100ms 25ms linear"},options:null}],options:{}}]}}));function r(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,1,"span",[["class","mat-select-placeholder"]],null,null,null,null,null)),(l()(),a.Pb(1,null,["",""]))],null,function(l,e){l(e,1,0,e.component.placeholder||"\xa0")})}function b(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Pb(1,null,["",""]))],null,function(l,e){l(e,1,0,e.component.triggerValue||"\xa0")})}function c(l){return a.Rb(0,[a.Gb(null,0),(l()(),a.lb(0,null,null,0))],null,null)}function d(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,5,"span",[["class","mat-select-value-text"]],null,null,null,null,null)),a.ub(1,16384,null,0,t.s,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.lb(16777216,null,null,1,null,b)),a.ub(3,16384,null,0,t.u,[a.R,a.O,t.s],null,null),(l()(),a.lb(16777216,null,null,1,null,c)),a.ub(5,278528,null,0,t.t,[a.R,a.O,t.s],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,e){l(e,1,0,!!e.component.customTrigger),l(e,5,0,!0)},null)}function s(l){return a.Rb(0,[(l()(),a.vb(0,0,null,null,4,"div",[["class","mat-select-panel-wrap"]],[[24,"@transformPanelWrap",0]],null,null,null,null)),(l()(),a.vb(1,0,[[2,0],["panel",1]],null,3,"div",[],[[24,"@transformPanel",0],[4,"transformOrigin",null],[4,"font-size","px"]],[[null,"@transformPanel.done"],[null,"keydown"]],function(l,e,n){var a=!0,t=l.component;return"@transformPanel.done"===e&&(a=!1!==t._panelDoneAnimatingStream.next(n.toState)&&a),"keydown"===e&&(a=!1!==t._handleKeydown(n)&&a),a},null,null)),a.Mb(512,null,t.C,t.D,[a.t,a.u,a.l,a.G]),a.ub(3,278528,null,0,t.m,[t.C],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Gb(null,1)],function(l,e){var n=e.component;l(e,3,0,a.zb(1,"mat-select-panel ",n._getPanelTheme(),""),n.panelClass)},function(l,e){var n=e.component;l(e,0,0,void 0),l(e,1,0,n.multiple?"showing-multiple":"showing",n._transformOrigin,n._triggerFontSize)})}function p(l){return a.Rb(2,[a.Nb(671088640,1,{trigger:0}),a.Nb(671088640,2,{panel:0}),a.Nb(671088640,3,{overlayDir:0}),(l()(),a.vb(3,0,[[1,0],["trigger",1]],null,9,"div",[["aria-hidden","true"],["cdk-overlay-origin",""],["class","mat-select-trigger"]],null,[[null,"click"]],function(l,e,n){var a=!0;return"click"===e&&(a=!1!==l.component.toggle()&&a),a},null,null)),a.ub(4,16384,[["origin",4]],0,i.b,[a.l],null,null),(l()(),a.vb(5,0,null,null,5,"div",[["class","mat-select-value"]],null,null,null,null,null)),a.ub(6,16384,null,0,t.s,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.lb(16777216,null,null,1,null,r)),a.ub(8,278528,null,0,t.t,[a.R,a.O,t.s],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.lb(16777216,null,null,1,null,d)),a.ub(10,278528,null,0,t.t,[a.R,a.O,t.s],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.vb(11,0,null,null,1,"div",[["class","mat-select-arrow-wrapper"]],null,null,null,null,null)),(l()(),a.vb(12,0,null,null,0,"div",[["class","mat-select-arrow"]],null,null,null,null,null)),(l()(),a.lb(16777216,null,null,1,function(l,e,n){var a=!0,t=l.component;return"backdropClick"===e&&(a=!1!==t.close()&&a),"attach"===e&&(a=!1!==t._onAttached()&&a),"detach"===e&&(a=!1!==t.close()&&a),a},s)),a.ub(14,671744,[[3,4]],0,i.a,[i.c,a.O,a.R,i.j,[2,o.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetY:[2,"offsetY"],minWidth:[3,"minWidth"],backdropClass:[4,"backdropClass"],scrollStrategy:[5,"scrollStrategy"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"],lockPosition:[8,"lockPosition"]},{backdropClick:"backdropClick",attach:"attach",detach:"detach"})],function(l,e){var n=e.component;l(e,6,0,n.empty),l(e,8,0,!0),l(e,10,0,!1),l(e,14,0,a.Hb(e,4),n._positions,n._offsetY,null==n._triggerRect?null:n._triggerRect.width,"cdk-overlay-transparent-backdrop",n._scrollStrategy,n.panelOpen,"","")},null)}},x8eK:function(l,e,n){"use strict";n.d(e,"a",function(){return a});class a{}}}]);