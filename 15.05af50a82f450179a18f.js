(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{D0EO:function(e,t,l){"use strict";l.d(t,"a",function(){return n});class n{}},EVGB:function(e,t,l){"use strict";l.d(t,"a",function(){return u});var n=l("D57K"),o=l("SKbq"),a=l("XApm"),c=l("kad2");let u=(()=>{return n.a([Object(a.i)({id:"matCheckboxSelection"}),Object(o.a)()],class{constructor(e,t,l,n){this.table=e,this.cfr=t,this.injector=l,this._removePlugin=n.setPlugin("matCheckboxSelection",this)}get isCheckboxDisabled(){return this._isCheckboxDisabled}set isCheckboxDisabled(e){e!==this._isCheckboxDisabled&&(this._isCheckboxDisabled=e,this.cmpRef&&e&&(this.cmpRef.instance.isCheckboxDisabled=e,this.cmpRef.changeDetectorRef.detectChanges()))}get matCheckboxSelection(){return this._name}set matCheckboxSelection(e){e!==this._name&&(this._name=e,e?(this.cmpRef||(this.cmpRef=this.cfr.resolveComponentFactory(c.a).create(this.injector),this.cmpRef.instance.table=this.table,this._bulkSelectMode&&(this.cmpRef.instance.bulkSelectMode=this._bulkSelectMode),this.cmpRef.instance.color=this._color),this.isCheckboxDisabled&&(this.cmpRef.instance.isCheckboxDisabled=this.isCheckboxDisabled),this.cmpRef.instance.name=e,this.cmpRef.changeDetectorRef.detectChanges()):this.cmpRef&&(this.cmpRef.destroy(),this.cmpRef=void 0))}get bulkSelectMode(){return this._bulkSelectMode}set bulkSelectMode(e){e!==this._bulkSelectMode&&(this._bulkSelectMode=e,this.cmpRef&&(this.cmpRef.instance.bulkSelectMode=e))}get matCheckboxSelectionColor(){return this._color}set matCheckboxSelectionColor(e){e!==this._color&&(this._color=e,this.cmpRef&&(this.cmpRef.instance.color=e))}ngOnDestroy(){this.cmpRef&&this.cmpRef.destroy(),this._removePlugin(this.table)}})})()},FzdH:function(e,t,l){"use strict";var n=l("kZht"),o=l("Kej7"),a=l("3kIJ"),c=l("1PzT"),u=l("owzC"),i=l("FxgA"),b=l("An66"),s=l("3GoZ"),r=l("TEiM"),d=l("kad2"),h=l("HZcV");l.d(t,"a",function(){return C});var g=n.tb({encapsulation:2,styles:[[".mat-cell.pbl-ngrid-checkbox,.mat-header-cell.pbl-ngrid-checkbox{box-sizing:content-box;flex:0 0 24px;overflow:visible}"]],data:{}});function p(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"],["style","overflow: initial"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"change"]],function(e,t,l){var n=!0,o=e.component;return"click"===t&&(n=!1!==l.stopPropagation()&&n),"change"===t&&(n=!1!==(l?o.masterToggle():null)&&n),n},o.b,o.a)),n.Mb(5120,null,a.e,function(e){return[e]},[c.b]),n.ub(2,8568832,null,0,c.b,[n.l,n.h,u.h,n.B,[8,null],[2,c.a],[2,i.a]],{color:[0,"color"],checked:[1,"checked"],indeterminate:[2,"indeterminate"]},{change:"change"})],function(e,t){var l=t.component;e(t,2,0,l.color,l.allSelected,l.length>0&&!l.allSelected)},function(e,t){e(t,0,0,n.Hb(t,2).id,null,n.Hb(t,2).indeterminate,n.Hb(t,2).checked,n.Hb(t,2).disabled,"before"==n.Hb(t,2).labelPosition,"NoopAnimations"===n.Hb(t,2)._animationMode)})}function m(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.lb(16777216,null,null,1,null,p)),n.ub(2,16384,null,0,b.o,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.lb(0,null,null,0))],function(e,t){e(t,2,0,"none"!==t.component.bulkSelectMode)},null)}function k(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"],["style","overflow: initial"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"change"]],function(e,t,l){var n=!0,o=e.component;return"click"===t&&(n=!1!==l.stopPropagation()&&n),"change"===t&&(n=!1!==o.rowItemChange(e.context.row)&&n),n},o.b,o.a)),n.Mb(5120,null,a.e,function(e){return[e]},[c.b]),n.ub(2,8568832,null,0,c.b,[n.l,n.h,u.h,n.B,[8,null],[2,c.a],[2,i.a]],{color:[0,"color"],checked:[1,"checked"],disabled:[2,"disabled"]},{change:"change"})],function(e,t){var l=t.component;e(t,2,0,l.color,l.selection.isSelected(t.context.row),l.isCheckboxDisabled(t.context.row))},function(e,t){e(t,0,0,n.Hb(t,2).id,null,n.Hb(t,2).indeterminate,n.Hb(t,2).checked,n.Hb(t,2).disabled,"before"==n.Hb(t,2).labelPosition,"NoopAnimations"===n.Hb(t,2)._animationMode)})}function f(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),n.Pb(1,null,["",""]))],null,function(e,t){var l=t.component;e(t,1,0,l.length?l.length:"")})}function x(e){return n.Rb(2,[n.Nb(402653184,1,{headerDef:0}),n.Nb(402653184,2,{cellDef:0}),n.Nb(402653184,3,{footerDef:0}),(e()(),n.lb(0,null,null,1,null,m)),n.ub(4,212992,[[1,4]],0,s.d,[n.O,r.a],{name:[0,"name"]},null),(e()(),n.lb(0,null,null,1,null,k)),n.ub(6,212992,[[2,4]],0,s.a,[n.O,r.a],{name:[0,"name"]},null),(e()(),n.lb(0,null,null,1,null,f)),n.ub(8,212992,[[3,4]],0,s.c,[n.O,r.a],{name:[0,"name"]},null)],function(e,t){var l=t.component;e(t,4,0,l.name),e(t,6,0,l.name),e(t,8,0,l.name)},null)}function v(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,1,"pbl-ngrid-checkbox",[],null,null,null,x,g)),n.ub(1,4243456,null,0,d.a,[[2,h.a],n.h],null,null)],null,null)}var C=n.rb("pbl-ngrid-checkbox",d.a,v,{name:"name",bulkSelectMode:"bulkSelectMode",selection:"selection",isCheckboxDisabled:"isCheckboxDisabled",color:"color"},{},[])},Qjwt:function(e,t,l){"use strict";l.r(t);var n=l("kZht"),o=l("D57K"),a=l("cc5W"),c=l("XApm");l("JRn2");let u=(()=>{return o.a([Object(a.c)("pbl-selection-column-example",{title:"Selection Column"})],class{constructor(e){this.datasource=e,this.columns=Object(c.j)().default({minWidth:100}).table({prop:"selection",width:"48px"},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(c.k)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}})})(),i=(()=>{return o.a([Object(a.c)("pbl-bulk-mode-and-virtual-scroll-example",{title:"Bulk Mode & Virtual Scroll"})],class{constructor(e){this.datasource=e,this.columns=Object(c.j)().default({minWidth:100}).table({prop:"selection",width:"48px"},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(c.k)().onTrigger(()=>this.datasource.getPeople(0,500)).create(),this.bulkSelectMode="all"}})})(),b=(()=>{return o.a([Object(a.c)("pbl-checkbox-color-example",{title:"CheckBox Color"})],class{constructor(e){this.datasource=e,this.columns=Object(c.j)().default({minWidth:100}).table({prop:"selection",width:"48px"},{prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(c.k)().onTrigger(()=>this.datasource.getPeople(100,500)).create()}})})(),s=(()=>{return o.a([Object(a.a)(u,i,b)],class{})})();var r=l("C9Ky"),d=l("pLqg"),h=l("aM4+"),g=l("CTcY"),p=l("FzdH"),m=l("ibhO"),k=l("lpRu"),f=l("HZcV"),x=l("iHGu"),v=l("TEiM"),C=l("8Y4T"),F=l("uJF3"),S=l("EVGB"),y=l("zRZK"),w=n.tb({encapsulation:2,styles:[[""]],data:{}});function M(e){return n.Rb(2,[(e()(),n.vb(0,16777216,null,null,6,"pbl-ngrid",[["matCheckboxSelection","selection"]],null,null,null,m.b,m.a)),n.Mb(5120,null,k.a,f.b,[f.a]),n.Mb(5120,null,x.a,f.c,[f.a]),n.Mb(131584,null,v.a,v.a,[[3,v.a]]),n.ub(4,6209536,null,0,f.a,[n.s,n.R,n.l,n.t,n.B,n.h,C.b,v.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),n.Mb(1024,null,F.b,f.d,[f.a]),n.ub(6,147456,null,0,S.a,[f.a,n.j,n.s,F.b],{matCheckboxSelection:[0,"matCheckboxSelection"]},null)],function(e,t){var l=t.component;e(t,4,0,l.ds,l.columns),e(t,6,0,"selection")},null)}function R(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,1,"pbl-selection-column-example",[],null,null,null,M,w)),n.ub(1,49152,null,0,u,[y.a],null,null)],null,null)}var H=n.rb("pbl-selection-column-example",u,R,{},{},[]),D=l("yQVu"),_=l("Sgnd"),j=l("76xf"),O=l("pOQZ"),T=l("3kIJ"),B=l("YXDS"),A=l("ApNh"),P=l("ENSU"),I=l("4rR8"),z=l("FxgA"),E=l("owzC"),L=n.tb({encapsulation:2,styles:[".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],data:{}});function G(e){return n.Rb(2,[n.Nb(671088640,1,{_buttonElement:0}),(e()(),n.vb(1,0,[[1,0],["button",1]],null,2,"button",[["class","mat-button-toggle-button"],["type","button"]],[[8,"id",0],[1,"tabindex",0],[1,"aria-pressed",0],[8,"disabled",0],[1,"name",0],[1,"aria-label",0],[1,"aria-labelledby",0]],[[null,"click"]],function(e,t,l){var n=!0;return"click"===t&&(n=!1!==e.component._onButtonClick()&&n),n},null,null)),(e()(),n.vb(2,0,null,null,1,"div",[["class","mat-button-toggle-label-content"]],null,null,null,null,null)),n.Gb(null,0),(e()(),n.vb(4,0,null,null,0,"div",[["class","mat-button-toggle-focus-overlay"]],null,null,null,null,null)),(e()(),n.vb(5,0,null,null,1,"div",[["class","mat-button-toggle-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),n.ub(6,212992,null,0,A.x,[n.l,n.B,I.a,[2,A.m],[2,z.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null)],function(e,t){var l=t.component;e(t,6,0,l.disableRipple||l.disabled,n.Hb(t,1))},function(e,t){var l=t.component;e(t,1,0,l.buttonId,l.disabled?-1:l.tabIndex,l.checked,l.disabled||null,l.name||null,l.ariaLabel,l.ariaLabelledby),e(t,5,0,n.Hb(t,6).unbounded)})}var N=n.tb({encapsulation:2,styles:[[""]],data:{}});function q(e){return n.Rb(2,[(e()(),n.vb(0,16777216,null,null,9,"pbl-ngrid",[["class","pbl-ngrid-cell-ellipsis"],["matCheckboxSelection","selection"],["showFooter",""]],null,null,null,m.b,m.a)),n.Mb(5120,null,k.a,f.b,[f.a]),n.Mb(5120,null,x.a,f.c,[f.a]),n.Mb(131584,null,v.a,v.a,[[3,v.a]]),n.ub(4,6209536,null,0,f.a,[n.s,n.R,n.l,n.t,n.B,n.h,C.b,v.a,[8,null]],{showFooter:[0,"showFooter"],dataSource:[1,"dataSource"],columns:[2,"columns"]},null),n.Mb(1024,null,F.b,f.d,[f.a]),n.ub(6,147456,null,0,D.a,[f.a,n.t,F.b],{stickyHeader:[0,"stickyHeader"],stickyFooter:[1,"stickyFooter"]},null),n.Ib(7,1),n.Ib(8,1),n.ub(9,147456,null,0,S.a,[f.a,n.j,n.s,F.b],{matCheckboxSelection:[0,"matCheckboxSelection"],bulkSelectMode:[1,"bulkSelectMode"]},null),(e()(),n.vb(10,0,null,null,19,"div",[["fxLayout","row"],["fxLayoutAlign","start center"],["fxLayoutGap","16px"],["style","margin: 8px 16px"]],null,null,null,null,null)),n.ub(11,671744,null,0,_.c,[n.l,j.g,[2,_.i],j.d],{fxLayout:[0,"fxLayout"]},null),n.ub(12,1720320,null,0,_.d,[n.l,n.B,O.b,j.g,[2,_.h],j.d],{fxLayoutGap:[0,"fxLayoutGap"]},null),n.ub(13,671744,null,0,_.b,[n.l,j.g,[2,_.g],j.d],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(e()(),n.vb(14,0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),n.Pb(-1,null,["Bulk Mode: "])),(e()(),n.vb(16,0,null,null,13,"mat-button-toggle-group",[["class","mat-button-toggle-group"],["role","group"]],[[1,"aria-disabled",0],[2,"mat-button-toggle-vertical",null],[2,"mat-button-toggle-group-appearance-standard",null]],null,null,null,null)),n.Mb(5120,null,T.e,function(e){return[e]},[B.c]),n.Mb(6144,null,B.d,null,[B.c]),n.ub(19,1130496,null,1,B.c,[n.h,[2,B.a]],null,null),n.Nb(603979776,1,{_buttonToggles:1}),(e()(),n.vb(21,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"],["value","all"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"change"],[null,"focus"]],function(e,t,l){var o=!0,a=e.component;return"focus"===t&&(o=!1!==n.Hb(e,22).focus()&&o),"change"===t&&(o=!1!==(a.bulkSelectMode="all")&&o),o},G,L)),n.ub(22,245760,[[1,4]],0,B.b,[[2,B.c],n.h,n.l,E.h,[8,null],[2,B.a]],{value:[0,"value"],checked:[1,"checked"]},{change:"change"}),(e()(),n.Pb(-1,0,["All"])),(e()(),n.vb(24,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"],["value","view"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"change"],[null,"focus"]],function(e,t,l){var o=!0,a=e.component;return"focus"===t&&(o=!1!==n.Hb(e,25).focus()&&o),"change"===t&&(o=!1!==(a.bulkSelectMode="view")&&o),o},G,L)),n.ub(25,245760,[[1,4]],0,B.b,[[2,B.c],n.h,n.l,E.h,[8,null],[2,B.a]],{value:[0,"value"],checked:[1,"checked"]},{change:"change"}),(e()(),n.Pb(-1,0,["View"])),(e()(),n.vb(27,0,null,null,2,"mat-button-toggle",[["class","mat-button-toggle"],["value","none"]],[[2,"mat-button-toggle-standalone",null],[2,"mat-button-toggle-checked",null],[2,"mat-button-toggle-disabled",null],[2,"mat-button-toggle-appearance-standard",null],[1,"tabindex",0],[1,"id",0],[1,"name",0]],[[null,"change"],[null,"focus"]],function(e,t,l){var o=!0,a=e.component;return"focus"===t&&(o=!1!==n.Hb(e,28).focus()&&o),"change"===t&&(o=!1!==(a.bulkSelectMode="none")&&o),o},G,L)),n.ub(28,245760,[[1,4]],0,B.b,[[2,B.c],n.h,n.l,E.h,[8,null],[2,B.a]],{value:[0,"value"],checked:[1,"checked"]},{change:"change"}),(e()(),n.Pb(-1,0,["None"]))],function(e,t){var l=t.component;e(t,4,0,"",l.ds,l.columns);var n=e(t,7,0,"table"),o=e(t,8,0,"table");e(t,6,0,n,o),e(t,9,0,"selection",l.bulkSelectMode),e(t,11,0,"row"),e(t,12,0,"16px"),e(t,13,0,"start center"),e(t,19,0),e(t,22,0,"all","all"===l.bulkSelectMode),e(t,25,0,"view","view"===l.bulkSelectMode),e(t,28,0,"none","none"===l.bulkSelectMode)},function(e,t){e(t,16,0,n.Hb(t,19).disabled,n.Hb(t,19).vertical,"standard"===n.Hb(t,19).appearance),e(t,21,0,!n.Hb(t,22).buttonToggleGroup,n.Hb(t,22).checked,n.Hb(t,22).disabled,"standard"===n.Hb(t,22).appearance,-1,n.Hb(t,22).id,null),e(t,24,0,!n.Hb(t,25).buttonToggleGroup,n.Hb(t,25).checked,n.Hb(t,25).disabled,"standard"===n.Hb(t,25).appearance,-1,n.Hb(t,25).id,null),e(t,27,0,!n.Hb(t,28).buttonToggleGroup,n.Hb(t,28).checked,n.Hb(t,28).disabled,"standard"===n.Hb(t,28).appearance,-1,n.Hb(t,28).id,null)})}function K(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,1,"pbl-bulk-mode-and-virtual-scroll-example",[],null,null,null,q,N)),n.ub(1,49152,null,0,i,[y.a],null,null)],null,null)}var V=n.rb("pbl-bulk-mode-and-virtual-scroll-example",i,K,{},{},[]),W=n.tb({encapsulation:2,styles:[[""]],data:{}});function Z(e){return n.Rb(2,[(e()(),n.vb(0,16777216,null,null,6,"pbl-ngrid",[["class","pbl-ngrid-cell-ellipsis"],["matCheckboxSelection","selection"],["matCheckboxSelectionColor","warn"]],null,null,null,m.b,m.a)),n.Mb(5120,null,k.a,f.b,[f.a]),n.Mb(5120,null,x.a,f.c,[f.a]),n.Mb(131584,null,v.a,v.a,[[3,v.a]]),n.ub(4,6209536,null,0,f.a,[n.s,n.R,n.l,n.t,n.B,n.h,C.b,v.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),n.Mb(1024,null,F.b,f.d,[f.a]),n.ub(6,147456,null,0,S.a,[f.a,n.j,n.s,F.b],{matCheckboxSelection:[0,"matCheckboxSelection"],matCheckboxSelectionColor:[1,"matCheckboxSelectionColor"]},null)],function(e,t){var l=t.component;e(t,4,0,l.ds,l.columns),e(t,6,0,"selection","warn")},null)}function J(e){return n.Rb(0,[(e()(),n.vb(0,0,null,null,1,"pbl-checkbox-color-example",[],null,null,null,Z,W)),n.ub(1,49152,null,0,b,[y.a],null,null)],null,null)}var Q=n.rb("pbl-checkbox-color-example",b,J,{},{},[]),X=l("An66"),Y=l("OcC5"),U=l("D4FV"),$=l("aFla"),ee=l("zab8"),te=l("2ob+"),le=l("1VvW"),ne=l("DiCn"),oe=l("qBwE"),ae=l("9Z2Q"),ce=l("S/D4"),ue=l("a+5/"),ie=l("8JnZ"),be=l("tBgR"),se=l("1PzT"),re=l("dFIu"),de=l("uWIS"),he=l("Lv2H"),ge=l("9qA3"),pe=l("EsQC"),me=l("0S3s"),ke=l("SWcI"),fe=l("kiRk"),xe=l("nTHA"),ve=l("FJu8"),Ce=l("pDuH"),Fe=l("D0EO"),Se=l("x8eK"),ye=l("tv5g"),we=l("wRBk");l.d(t,"SelectionColumnExampleModuleNgFactory",function(){return Me});var Me=n.sb(s,[],function(e){return n.Eb([n.Fb(512,n.j,n.eb,[[8,[r.a,d.a,h.a,g.a,p.a,H,V,Q]],[3,n.j],n.z]),n.Fb(4608,X.q,X.p,[n.v,[2,X.H]]),n.Fb(5120,n.b,function(e,t){return[j.h(e,t)]},[X.e,n.D]),n.Fb(4608,Y.c,Y.c,[]),n.Fb(4608,A.d,A.d,[]),n.Fb(4608,U.c,U.c,[U.i,U.e,n.j,U.h,U.f,n.s,n.B,X.e,O.b,[2,X.k]]),n.Fb(5120,U.j,U.k,[U.c]),n.Fb(5120,$.c,$.k,[U.c]),n.Fb(5120,ee.b,ee.c,[U.c]),n.Fb(4608,P.f,A.e,[[2,A.i],[2,A.n]]),n.Fb(1073742336,X.c,X.c,[]),n.Fb(1073742336,O.a,O.a,[]),n.Fb(1073742336,A.n,A.n,[[2,A.f],[2,P.g]]),n.Fb(1073742336,I.b,I.b,[]),n.Fb(1073742336,A.y,A.y,[]),n.Fb(1073742336,B.e,B.e,[]),n.Fb(1073742336,j.b,j.b,[]),n.Fb(1073742336,_.e,_.e,[]),n.Fb(1073742336,te.b,te.b,[]),n.Fb(1073742336,le.q,le.q,[[2,le.w],[2,le.o]]),n.Fb(1073742336,ne.h,ne.h,[]),n.Fb(1073742336,Y.d,Y.d,[]),n.Fb(1073742336,oe.d,oe.d,[]),n.Fb(1073742336,ae.c,ae.c,[]),n.Fb(1073742336,ce.c,ce.c,[]),n.Fb(1073742336,ue.c,ue.c,[]),n.Fb(1073742336,ie.c,ie.c,[]),n.Fb(1073742336,be.e,be.e,[]),n.Fb(1073742336,U.g,U.g,[]),n.Fb(1073742336,$.j,$.j,[]),n.Fb(1073742336,$.g,$.g,[]),n.Fb(1073742336,se.d,se.d,[]),n.Fb(1073742336,se.c,se.c,[]),n.Fb(1073742336,A.p,A.p,[]),n.Fb(1073742336,A.w,A.w,[]),n.Fb(1073742336,re.a,re.a,[]),n.Fb(1073742336,de.c,de.c,[]),n.Fb(1073742336,E.a,E.a,[]),n.Fb(1073742336,he.k,he.k,[]),n.Fb(1073742336,ge.b,ge.b,[]),n.Fb(1073742336,ee.e,ee.e,[]),n.Fb(1073742336,pe.c,pe.c,[]),n.Fb(1073742336,me.c,me.c,[]),n.Fb(1073742336,ke.c,ke.c,[]),n.Fb(1073742336,fe.q,fe.q,[]),n.Fb(131584,v.a,v.a,[[3,v.a]]),n.Fb(1073742336,xe.b,xe.b,[n.z,v.a,[6,xe.a]]),n.Fb(1073742336,ve.a,ve.a,[]),n.Fb(1073742336,Ce.a,Ce.a,[]),n.Fb(1073742336,Fe.a,Fe.a,[]),n.Fb(1073742336,Se.a,Se.a,[]),n.Fb(1073742336,ye.a,ye.a,[[3,ye.a],C.b]),n.Fb(1073742336,we.a,we.a,[]),n.Fb(1073742336,s,s,[])])})},kad2:function(e,t,l){"use strict";l.d(t,"a",function(){return c});var n=l("D57K"),o=l("SKbq");l("XApm");const a=()=>!1;let c=(()=>{return n.a([Object(o.a)()],class{constructor(e,t){this.table=e,this.cdr=t,this.allSelected=!1,this._isCheckboxDisabled=a}get bulkSelectMode(){return this._bulkSelectMode}set bulkSelectMode(e){e!==this._bulkSelectMode&&(this._bulkSelectMode=e,this.cdr.markForCheck(),this.cdr.detectChanges())}get selection(){return this._selection}set selection(e){e!==this._selection&&(this._selection=e,this.setupSelection())}get isCheckboxDisabled(){return this._isCheckboxDisabled}set isCheckboxDisabled(e){e!==this._isCheckboxDisabled&&(this._isCheckboxDisabled=e,this._isCheckboxDisabled&&"function"==typeof this._isCheckboxDisabled||(this._isCheckboxDisabled=a))}get color(){return this._color}set color(e){e!==this._color&&(this._color=e,this.cdr.markForCheck(),this.cdr.detectChanges())}ngAfterViewInit(){this.selection||(this.selection=this.table.ds.selection);const e=this.table.registry;e.addMulti("headerCell",this.headerDef),e.addMulti("tableCell",this.cellDef),e.addMulti("footerCell",this.footerDef)}masterToggle(){if(this.allSelected)this.selection.clear();else{const e=this.getCollection().filter(e=>!this._isCheckboxDisabled(e));this.selection.select(...e)}}rowItemChange(e){this.selection.toggle(e)}getCollection(){const{ds:e}=this.table;return"view"===this.bulkSelectMode?e.renderedData:e.source}setupSelection(){o.a.kill(this,this.table),this._selection?(this.length=this.selection.selected.length,this.selection.changed.pipe(Object(o.a)(this,this.table)).subscribe(()=>{const{length:e}=this.getCollection();this.allSelected=!this.selection.isEmpty()&&this.selection.selected.length===e,this.length=this.selection.selected.length,this.cdr.markForCheck(),this.cdr.detectChanges()})):this.length=0}})})()},wRBk:function(e,t,l){"use strict";l.d(t,"a",function(){return n});class n{}},x8eK:function(e,t,l){"use strict";l.d(t,"a",function(){return n});class n{}}}]);