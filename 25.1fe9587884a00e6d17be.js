(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{D0EO:function(e,l,n){"use strict";n.d(l,"a",function(){return r});class r{}},JLZd:function(e,l,n){"use strict";n.r(l);var r=n("kZht"),t=n("D57K"),a=n("cc5W"),o=n("XApm");n("JRn2");let c=(()=>{return t.a([Object(a.c)("pbl-target-events-example",{title:"Cell/Row -> Click Events"})],class{constructor(e){this.datasource=e,this.columns=Object(o.j)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(o.k)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}onClickEvents(e){let l="";!function(e){return!!e.cellTarget}(e)?e.root&&(l=` [Bubbled from CELL: ${e.root.colIndex}]`):l=`  CELL: ${e.colIndex}`,alert(`CLICK EVENT at ROW: ${e.rowIndex}${l}\nType: ${e.type}\nSubType: ${e.subType}`)}})})(),b=(()=>{return t.a([Object(a.c)("pbl-focus-and-range-selection-example",{title:"Focus & Range Selection"})],class{constructor(e){this.datasource=e,this.columns=Object(o.j)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"}).build(),this.ds=Object(o.k)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}})})(),s=(()=>{return t.a([Object(a.c)("pbl-enter-and-leave-events-example",{title:"Cell/Row -> Enter/Leave Events"})],class{constructor(e){this.datasource=e,this.columns=Object(o.j)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"},{prop:"lead"},{prop:"settings.avatar"},{prop:"settings.background"},{prop:"settings.timezone"},{prop:"settings.emailFrequency"},{prop:"lastLoginIp"}).header({id:"HEADER",label:"A SIMPLE 1 CELL HEADER"}).headerGroup({prop:"name",span:4,label:"Personal Info"},{prop:"settings.avatar",span:3,label:"User Settings"}).build(),this.ds=Object(o.k)().onTrigger(()=>this.datasource.getPeople(0,90)).create()}onEnterLeaveEvents(e,l=!1){!function(e){return!!e.cellTarget}(e)?l?e.rowTarget.classList.add("row-hovered"):(e.rowTarget.classList.remove("row-hovered"),e.rowTarget.classList.remove("row-cell-hovered")):l?(e.cellTarget.classList.add("cell-hovered"),e.rowTarget.classList.add("row-cell-hovered")):(e.cellTarget.classList.remove("cell-hovered"),e.rowTarget.classList.remove("row-cell-hovered"))}})})(),i=(()=>{return t.a([Object(a.a)(c,b,s)],class{})})();var u=n("C9Ky"),d=n("pLqg"),p=n("aM4+"),h=n("CTcY"),g=n("ibhO"),v=n("lpRu"),k=n("HZcV"),m=n("iHGu"),w=n("TEiM"),F=n("8Y4T"),f=n("uJF3"),E=n("R3BP"),x=n("ELgr"),L=n("zRZK"),R=r.tb({encapsulation:2,styles:[[""]],data:{}});function C(e){return r.Rb(2,[(e()(),r.vb(0,16777216,null,null,7,"pbl-ngrid",[["blockUi",""]],null,[[null,"cellClick"],[null,"rowClick"]],function(e,l,n){var r=!0,t=e.component;return"cellClick"===l&&(r=!1!==t.onClickEvents(n)&&r),"rowClick"===l&&(r=!1!==t.onClickEvents(n)&&r),r},g.b,g.a)),r.Mb(5120,null,v.a,k.b,[k.a]),r.Mb(5120,null,m.a,k.c,[k.a]),r.Mb(131584,null,w.a,w.a,[[3,w.a]]),r.ub(4,6209536,null,0,k.a,[r.s,r.R,r.l,r.t,r.B,r.h,F.b,w.a,[8,null]],{dataSource:[0,"dataSource"],columns:[1,"columns"]},null),r.Mb(1024,null,f.b,k.d,[k.a]),r.ub(6,147456,null,0,E.a,[k.a,f.b],{blockUi:[0,"blockUi"]},null),r.ub(7,147456,null,0,x.b,[k.a,r.s,f.b],null,{rowClick:"rowClick",cellClick:"cellClick"})],function(e,l){var n=l.component;e(l,4,0,n.ds,n.columns),e(l,6,0,"")},null)}function j(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,1,"pbl-target-events-example",[],null,null,null,C,R)),r.ub(1,49152,null,0,c,[L.a],null,null)],null,null)}var O=r.rb("pbl-target-events-example",c,j,{},{},[]),T=r.tb({encapsulation:2,styles:[[""]],data:{}});function U(e){return r.Rb(2,[(e()(),r.vb(0,16777216,null,null,7,"pbl-ngrid",[["blockUi",""],["focusMode","cell"],["targetEvents",""]],null,null,null,g.b,g.a)),r.Mb(5120,null,v.a,k.b,[k.a]),r.Mb(5120,null,m.a,k.c,[k.a]),r.Mb(131584,null,w.a,w.a,[[3,w.a]]),r.ub(4,6209536,null,0,k.a,[r.s,r.R,r.l,r.t,r.B,r.h,F.b,w.a,[8,null]],{focusMode:[0,"focusMode"],dataSource:[1,"dataSource"],columns:[2,"columns"]},null),r.Mb(1024,null,f.b,k.d,[k.a]),r.ub(6,147456,null,0,E.a,[k.a,f.b],{blockUi:[0,"blockUi"]},null),r.ub(7,147456,null,0,x.b,[k.a,r.s,f.b],null,null)],function(e,l){var n=l.component;e(l,4,0,"cell",n.ds,n.columns),e(l,6,0,"")},null)}function _(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,1,"pbl-focus-and-range-selection-example",[],null,null,null,U,T)),r.ub(1,49152,null,0,b,[L.a],null,null)],null,null)}var S=r.rb("pbl-focus-and-range-selection-example",b,_,{},{},[]),y=n("tBgR"),M=n("2Re8"),P=r.tb({encapsulation:2,styles:[[".enter-and-leave-grid-example .pbl-ngrid-cell{border:2px solid transparent}.enter-and-leave-grid-example .cell-hovered{border:2px solid red}.enter-and-leave-grid-example .cell-hovered.pbl-ngrid-header-cell{border:2px solid #ff0}.enter-and-leave-grid-example .cell-hovered.pbl-header-group-cell{border:2px solid #00f}.enter-and-leave-grid-example .cell-hovered.pbl-ngrid-footer-cell{border:2px solid pink}.enter-and-leave-grid-example .row-hovered{transition:all 250ms ease;background:red}.enter-and-leave-grid-example .row-hovered.row-cell-hovered{background:rgba(255,0,0,.25)}.enter-and-leave-grid-example .row-hovered.pbl-ngrid-header-row{background:#ff0}.enter-and-leave-grid-example .row-hovered.pbl-ngrid-header-row.row-cell-hovered{background:rgba(255,255,0,.25)}.enter-and-leave-grid-example .row-hovered.pbl-meta-group-row{background:#00f}.enter-and-leave-grid-example .row-hovered.pbl-meta-group-row.row-cell-hovered{background:rgba(0,0,255,.25)}.enter-and-leave-grid-example .row-hovered.pbl-ngrid-footer-row{background:pink}.enter-and-leave-grid-example .row-hovered.pbl-ngrid-footer-row.row-cell-hovered{background:rgba(255,192,203,.25)}"]],data:{}});function I(e){return r.Rb(2,[(e()(),r.vb(0,16777216,null,null,9,"pbl-ngrid",[["blockUi",""],["class","pbl-ngrid-cell-ellipsis enter-and-leave-grid-example "],["showFooter",""],["vScrollNone",""]],null,[[null,"cellEnter"],[null,"cellLeave"],[null,"rowEnter"],[null,"rowLeave"]],function(e,l,n){var r=!0,t=e.component;return"cellEnter"===l&&(r=!1!==t.onEnterLeaveEvents(n,!0)&&r),"cellLeave"===l&&(r=!1!==t.onEnterLeaveEvents(n)&&r),"rowEnter"===l&&(r=!1!==t.onEnterLeaveEvents(n,!0)&&r),"rowLeave"===l&&(r=!1!==t.onEnterLeaveEvents(n)&&r),r},g.b,g.a)),r.Mb(5120,null,v.a,k.b,[k.a]),r.Mb(5120,null,m.a,k.c,[k.a]),r.Mb(6144,null,y.g,null,[M.b]),r.Mb(131584,null,w.a,w.a,[[3,w.a]]),r.ub(5,6209536,null,0,k.a,[r.s,r.R,r.l,r.t,r.B,r.h,F.b,w.a,[8,null]],{showFooter:[0,"showFooter"],dataSource:[1,"dataSource"],columns:[2,"columns"]},null),r.ub(6,606208,null,0,M.b,[r.l,k.a],null,null),r.Mb(1024,null,f.b,k.d,[k.a]),r.ub(8,147456,null,0,E.a,[k.a,f.b],{blockUi:[0,"blockUi"]},null),r.ub(9,147456,null,0,x.b,[k.a,r.s,f.b],null,{rowEnter:"rowEnter",rowLeave:"rowLeave",cellEnter:"cellEnter",cellLeave:"cellLeave"})],function(e,l){var n=l.component;e(l,5,0,"",n.ds,n.columns),e(l,6,0),e(l,8,0,"")},null)}function B(e){return r.Rb(0,[(e()(),r.vb(0,0,null,null,1,"pbl-enter-and-leave-events-example",[],null,null,null,I,P)),r.ub(1,49152,null,0,s,[L.a],null,null)],null,null)}var D=r.rb("pbl-enter-and-leave-events-example",s,B,{},{},[]),V=n("An66"),q=n("76xf"),W=n("OcC5"),A=n("ApNh"),H=n("D4FV"),K=n("pOQZ"),z=n("aFla"),J=n("zab8"),Z=n("ENSU"),$=n("Sgnd"),N=n("2ob+"),Q=n("1VvW"),G=n("DiCn"),X=n("qBwE"),Y=n("4rR8"),ee=n("9Z2Q"),le=n("S/D4"),ne=n("a+5/"),re=n("8JnZ"),te=n("1PzT"),ae=n("dFIu"),oe=n("uWIS"),ce=n("owzC"),be=n("Lv2H"),se=n("9qA3"),ie=n("EsQC"),ue=n("0S3s"),de=n("SWcI"),pe=n("kiRk"),he=n("nTHA"),ge=n("FJu8"),ve=n("pDuH"),ke=n("D0EO"),me=n("x8eK"),we=n("kxS8");n.d(l,"TargetEventsExampleModuleNgFactory",function(){return Fe});var Fe=r.sb(i,[],function(e){return r.Eb([r.Fb(512,r.j,r.eb,[[8,[u.a,d.a,p.a,h.a,O,S,D]],[3,r.j],r.z]),r.Fb(4608,V.q,V.p,[r.v,[2,V.H]]),r.Fb(5120,r.b,function(e,l){return[q.h(e,l)]},[V.e,r.D]),r.Fb(4608,W.c,W.c,[]),r.Fb(4608,A.d,A.d,[]),r.Fb(4608,H.c,H.c,[H.i,H.e,r.j,H.h,H.f,r.s,r.B,V.e,K.b,[2,V.k]]),r.Fb(5120,H.j,H.k,[H.c]),r.Fb(5120,z.c,z.k,[H.c]),r.Fb(5120,J.b,J.c,[H.c]),r.Fb(4608,Z.f,A.e,[[2,A.i],[2,A.n]]),r.Fb(1073742336,V.c,V.c,[]),r.Fb(1073742336,q.b,q.b,[]),r.Fb(1073742336,K.a,K.a,[]),r.Fb(1073742336,$.e,$.e,[]),r.Fb(1073742336,N.b,N.b,[]),r.Fb(1073742336,Q.q,Q.q,[[2,Q.w],[2,Q.o]]),r.Fb(1073742336,G.h,G.h,[]),r.Fb(1073742336,W.d,W.d,[]),r.Fb(1073742336,X.d,X.d,[]),r.Fb(1073742336,Y.b,Y.b,[]),r.Fb(1073742336,ee.c,ee.c,[]),r.Fb(1073742336,le.c,le.c,[]),r.Fb(1073742336,A.n,A.n,[[2,A.f],[2,Z.g]]),r.Fb(1073742336,ne.c,ne.c,[]),r.Fb(1073742336,A.y,A.y,[]),r.Fb(1073742336,re.c,re.c,[]),r.Fb(1073742336,y.e,y.e,[]),r.Fb(1073742336,H.g,H.g,[]),r.Fb(1073742336,z.j,z.j,[]),r.Fb(1073742336,z.g,z.g,[]),r.Fb(1073742336,te.d,te.d,[]),r.Fb(1073742336,te.c,te.c,[]),r.Fb(1073742336,A.p,A.p,[]),r.Fb(1073742336,A.w,A.w,[]),r.Fb(1073742336,ae.a,ae.a,[]),r.Fb(1073742336,oe.c,oe.c,[]),r.Fb(1073742336,ce.a,ce.a,[]),r.Fb(1073742336,be.k,be.k,[]),r.Fb(1073742336,se.b,se.b,[]),r.Fb(1073742336,J.e,J.e,[]),r.Fb(1073742336,ie.c,ie.c,[]),r.Fb(1073742336,ue.c,ue.c,[]),r.Fb(1073742336,de.c,de.c,[]),r.Fb(1073742336,pe.q,pe.q,[]),r.Fb(131584,w.a,w.a,[[3,w.a]]),r.Fb(1073742336,he.b,he.b,[r.z,w.a,[6,he.a]]),r.Fb(1073742336,ge.a,ge.a,[]),r.Fb(1073742336,ve.a,ve.a,[]),r.Fb(1073742336,ke.a,ke.a,[]),r.Fb(1073742336,me.a,me.a,[]),r.Fb(1073742336,we.a,we.a,[[3,we.a],F.b]),r.Fb(1073742336,i,i,[])])})},R3BP:function(e,l,n){"use strict";n.d(l,"a",function(){return b});var r=n("D57K"),t=n("9bRT"),a=n("WT5v"),o=n("SKbq"),c=n("XApm");let b=(()=>{return r.a([Object(c.i)({id:"blockUi"}),Object(o.a)()],class{constructor(e,l){this.table=e,this._blockInProgress=!1,this._removePlugin=l.setPlugin("blockUi",this),e.registry.changes.subscribe(e=>{for(const l of e)switch(l.type){case"blocker":this.setupBlocker()}}),l.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:l,curr:n}=e;l&&o.a.kill(this,l),n.onSourceChanging.pipe(Object(o.a)(this,n)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),n.onSourceChanged.pipe(Object(o.a)(this,n)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let l=Object(a.c)(e);!l||"auto"!==e&&""!==e||(l="auto"),Object(t.a)(e)&&this._blockUi!==e?(Object(t.a)(this._blockUi)&&o.a.kill(this,this._blockUi),this._blockUi=e,e.pipe(Object(o.a)(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==l&&(this._blockUi=l,"auto"!==l&&(this._blockInProgress=l,this.setupBlocker()))}ngOnDestroy(){this._removePlugin(this.table)}setupBlocker(){if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.table.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.table.createView("afterContent",e.tRef,{$implicit:this.table}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.table.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}})})()},x8eK:function(e,l,n){"use strict";n.d(l,"a",function(){return r});class r{}}}]);