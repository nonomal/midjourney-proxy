"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[201],{2891:function(sa,Me,l){l.r(Me),l.d(Me,{default:function(){return aa}});var Ce=l(97857),be=l.n(Ce),Se=l(15009),C=l.n(Se),ye=l(99289),W=l.n(ye),we=l(5574),f=l.n(we),X=l(66927),oe=l(16568),Ie=l(86738),$=l(14726),Te=l(82061),u=l(67294),se=l(80854),e=l(85893),ke=function(b){var v=b.record,i=b.onSuccess,n=(0,u.useState)(!1),D=f()(n,2),s=D[0],T=D[1],B=(0,u.useState)(!1),z=f()(B,2),N=z[0],P=z[1],j=oe.ZP.useNotification(),U=f()(j,2),y=U[0],E=U[1],k=(0,se.useIntl)(),R=function(){T(!0)},F=function(){var I=W()(C()().mark(function O(){var m;return C()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return P(!0),r.prev=1,r.next=4,(0,X.tm)(v.id);case 4:m=r.sent,T(!1),m.success?(y.success({message:"success",description:k.formatMessage({id:"pages.account.deleteSuccess"})}),i()):y.error({message:"error",description:m.message}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0);case 12:return r.prev=12,P(!1),r.finish(12);case 15:case"end":return r.stop()}},O,null,[[1,9,12,15]])}));return function(){return I.apply(this,arguments)}}(),H=function(){T(!1)};return(0,e.jsxs)(Ie.Z,{title:k.formatMessage({id:"pages.account.delete"}),description:k.formatMessage({id:"pages.account.deleteTitle"}),open:s,onConfirm:F,okButtonProps:{loading:N},onCancel:H,children:[E,(0,e.jsx)($.ZP,{danger:!0,icon:(0,e.jsx)(Te.Z,{}),onClick:R})]})},Re=ke,je=l(98165),Ae=function(b){var v=b.record,i=b.onSuccess,n=(0,u.useState)(!1),D=f()(n,2),s=D[0],T=D[1],B=(0,u.useState)(!1),z=f()(B,2),N=z[0],P=z[1],j=oe.ZP.useNotification(),U=f()(j,2),y=U[0],E=U[1],k=(0,se.useIntl)(),R=function(){T(!0)},F=function(){var I=W()(C()().mark(function O(){var m;return C()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return P(!0),r.prev=1,r.next=4,(0,X.Je)(v.id);case 4:m=r.sent,console.log("resss",m),T(!1),m.success?(y.success({message:"success",description:k.formatMessage({id:"pages.account.syncSuccess"})}),i()):(y.error({message:"error",description:m.message}),i()),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.error(r.t0);case 13:return r.prev=13,P(!1),r.finish(13);case 16:case"end":return r.stop()}},O,null,[[1,10,13,16]])}));return function(){return I.apply(this,arguments)}}(),H=function(){T(!1)};return(0,e.jsxs)(Ie.Z,{title:k.formatMessage({id:"pages.account.sync"}),description:k.formatMessage({id:"pages.account.syncTitle"}),open:s,onConfirm:F,okButtonProps:{loading:N},onCancel:H,children:[E,(0,e.jsx)($.ZP,{icon:(0,e.jsx)(je.Z,{}),onClick:R})]})},Oe=Ae,a=l(53025),de=l(71230),_=l(15746),J=l(4393),d=l(55102),M=l(72269),A=l(85886),S=l(37804),re=l(42075),me=l(17910),ge=l(38437),Ze=l(5785),Fe=function(b){var v=b.form,i=b.onSubmit,n=(0,se.useIntl)();(0,u.useEffect)(function(){v.setFieldsValue({userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",coreSize:3,queueSize:10,timeoutMinutes:5})});var D=(0,u.useState)([]),s=f()(D,2),T=s[0],B=s[1];(0,u.useEffect)(function(){(0,X.fl)().then(function(I){I.success&&B(I.data)})},[]);var z=(0,u.useState)(!1),N=f()(z,2),P=N[0],j=N[1],U=(0,u.useState)(""),y=f()(U,2),E=y[0],k=y[1],R=function(){j(!0)},F=function(){v.setFieldsValue({subChannels:E.split(`
`)}),j(!1)},H=function(){j(!1)};return(0,e.jsxs)(a.Z,{form:v,labelAlign:"left",layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},onFinish:i,children:[(0,e.jsxs)(de.Z,{gutter:16,children:[(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(J.Z,{type:"inner",title:n.formatMessage({id:"pages.account.info"}),children:[(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.guildId"}),name:"guildId",rules:[{required:!0}],children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.channelId"}),name:"channelId",rules:[{required:!0}],children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.userToken"}),name:"userToken",rules:[{required:!0}],children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.botToken"}),name:"botToken",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.mjChannelId"}),name:"privateChannelId",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.nijiChannelId"}),name:"nijiBotChannelId",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:"User Agent",name:"userAgent",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.enable"}),name:"enable",valuePropName:"checked",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.enableFastToRelax"}),name:"enableFastToRelax",valuePropName:"checked",tooltip:n.formatMessage({id:"pages.account.enableFastToRelaxTips"}),children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.enableRelaxToFast"}),name:"enableRelaxToFast",valuePropName:"checked",tooltip:n.formatMessage({id:"pages.account.enableRelaxToFastTips"}),children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.remixAutoSubmit"}),name:"remixAutoSubmit",valuePropName:"checked",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.mode"}),name:"mode",children:(0,e.jsxs)(A.Z,{allowClear:!0,children:[(0,e.jsx)(A.Z.Option,{value:"RELAX",children:"RELAX"}),(0,e.jsx)(A.Z.Option,{value:"FAST",children:"FAST"}),(0,e.jsx)(A.Z.Option,{value:"TURBO",children:"TURBO"})]})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.allowModes"}),name:"allowModes",children:(0,e.jsxs)(A.Z,{allowClear:!0,mode:"multiple",children:[(0,e.jsx)(A.Z.Option,{value:"RELAX",children:"RELAX"}),(0,e.jsx)(A.Z.Option,{value:"FAST",children:"FAST"}),(0,e.jsx)(A.Z.Option,{value:"TURBO",children:"TURBO"})]})})]})}),(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(J.Z,{type:"inner",title:n.formatMessage({id:"pages.account.poolsize"}),children:[(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.coreSize"}),name:"coreSize",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.queueSize"}),name:"queueSize",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.maxQueueSize"}),name:"maxQueueSize",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.interval"}),name:"interval",children:(0,e.jsx)(S.Z,{min:1.2})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.intervalAfter"}),children:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(a.Z.Item,{name:"afterIntervalMin",style:{margin:0},children:(0,e.jsx)(S.Z,{min:1.2,placeholder:"Min"})}),"~",(0,e.jsx)(a.Z.Item,{name:"afterIntervalMax",style:{margin:0},children:(0,e.jsx)(S.Z,{min:1.2,placeholder:"Max"})})]})})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.weight"}),name:"weight",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.enableMj"}),name:"enableMj",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.enableNiji"}),name:"enableNiji",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.isBlend"}),name:"isBlend",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.isDescribe"}),name:"isDescribe",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.isShorten"}),name:"isShorten",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.dayDrawLimit"}),name:"dayDrawLimit",children:(0,e.jsx)(S.Z,{min:-1})})]})}),(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(J.Z,{type:"inner",title:n.formatMessage({id:"pages.account.otherInfo"}),children:[(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.permanentInvitationLink"}),name:"permanentInvitationLink",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.isVerticalDomain"}),name:"isVerticalDomain",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.verticalDomainIds"}),name:"verticalDomainIds",children:(0,e.jsx)(A.Z,{options:T,allowClear:!0,mode:"multiple"})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.sort"}),name:"sort",children:(0,e.jsx)(S.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.timeoutMinutes"}),name:"timeoutMinutes",children:(0,e.jsx)(S.Z,{min:1,suffix:n.formatMessage({id:"pages.minutes"})})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.sponsor"}),name:"sponsor",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.remark"}),name:"remark",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.workTime"}),name:"workTime",children:(0,e.jsx)(d.Z,{placeholder:"09:00-17:00, 18:00-22:00"})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.fishingTime"}),help:n.formatMessage({id:"pages.account.fishingTimeTips"}),name:"fishingTime",children:(0,e.jsx)(d.Z,{placeholder:"23:30-09:00, 00:00-10:00"})}),(0,e.jsx)(a.Z.Item,{label:n.formatMessage({id:"pages.account.subChannels"}),name:"subChannels",extra:(0,e.jsx)($.ZP,{type:"primary",style:{marginTop:"10px"},onClick:function(){R()},icon:(0,e.jsx)(Ze.Z,{})}),children:(0,e.jsx)(d.Z.TextArea,{disabled:!0,autoSize:{minRows:1,maxRows:5}})})]})})]}),(0,e.jsxs)(me.Z,{title:n.formatMessage({id:"pages.account.subChannels"}),visible:P,onOk:F,onCancel:H,width:960,children:[(0,e.jsx)("div",{children:(0,e.jsx)(ge.Z,{message:n.formatMessage({id:"pages.account.subChannelsHelp"}),type:"info",style:{marginBottom:"10px"}})}),(0,e.jsx)(d.Z.TextArea,{placeholder:"https://discord.com/channels/xxx/xxx",autoSize:{minRows:10,maxRows:24},style:{width:"100%"},value:E,onChange:function(O){k(O.target.value)}})]})]})},De=Fe,Be=function(b){var v=b.form,i=b.onSubmit,n=b.record,D=(0,se.useIntl)(),s=oe.ZP.useNotification(),T=f()(s,2),B=T[0],z=T[1],N=(0,u.useState)(),P=f()(N,2),j=P[0],U=P[1],y=(0,u.useState)(!1),E=f()(y,2),k=E[0],R=E[1];(0,u.useEffect)(function(){U(n)},[]);var F=function(){var I=W()(C()().mark(function O(){var m;return C()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return R(!0),r.next=3,(0,X.qG)(n.id);case 3:m=r.sent,R(!1),m.success&&U(m.data);case 6:case"end":return r.stop()}},O)}));return function(){return I.apply(this,arguments)}}(),H=function(){var I=W()(C()().mark(function O(){var m;return C()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return R(!0),r.next=3,(0,X.eD)(n.id);case 3:m=r.sent,R(!1),m.success&&(B.success({message:"success",description:"Success"}),i(j));case 6:case"end":return r.stop()}},O)}));return function(){return I.apply(this,arguments)}}();return(0,e.jsxs)(a.Z,{form:v,labelAlign:"left",layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},onFinish:i,children:[z,(0,e.jsx)(de.Z,{gutter:16,children:(0,e.jsxs)(_.Z,{span:24,style:{padding:12},children:[j&&(0,e.jsx)("a",{target:"_blank",rel:"noreferrer",href:j==null?void 0:j.cfUrl,children:(j==null?void 0:j.cfUrl)||"-"}),(0,e.jsx)("br",{}),(0,e.jsxs)(re.Z,{style:{marginTop:12},children:[(0,e.jsx)($.ZP,{onClick:F,loading:k,type:"default",children:D.formatMessage({id:"pages.account.cfRefresh"})}),(0,e.jsx)($.ZP,{onClick:H,loading:k,type:"primary",children:D.formatMessage({id:"pages.account.cfok"})})]})]})})]})},Ne=Be,le=l(66309),ce=l(83062),x=l(26412),Pe=l(27484),Ue=l.n(Pe),Le=A.Z.Option,ze=function(b){var v,i=b.record,n=b.onSuccess,D=oe.ZP.useNotification(),s=f()(D,2),T=s[0],B=s[1],z=(0,u.useState)(""),N=f()(z,2),P=N[0],j=N[1],U=(0,u.useState)([]),y=f()(U,2),E=y[0],k=y[1],R=(0,u.useState)([]),F=f()(R,2),H=F[0],I=F[1],O=(0,u.useState)(!1),m=f()(O,2),V=m[0],r=m[1],fe=(0,u.useState)(""),ee=f()(fe,2),ue=ee[0],pe=ee[1],c=(0,se.useIntl)();(0,u.useEffect)(function(){j(i.version),k(i.buttons),I(i.nijiButtons)},[i]);var he=function(g,L,G){var ne=g?"green":"volcano",h=g?L:G;return(0,e.jsx)(le.Z,{color:ne,children:h})},Y=function(g){return!g||g.length<25?g:(0,e.jsx)(ce.Z,{title:g,children:g.substring(0,25)+"..."})},Z=function(g){return Ue()(g).format("YYYY-MM-DD HH:mm")},xe=function(){var g;return(g=i.versionSelector)===null||g===void 0?void 0:g.map(function(L){return(0,e.jsxs)(Le,{value:L.customId,children:[L.emoji," ",L.label]},L.customId)})},ae=function(){return E.map(function(g){return(0,e.jsxs)($.ZP,{ghost:!0,style:{backgroundColor:g.style==3?"#258146":"rgb(131 133 142)"},onClick:function(){K("MID_JOURNEY",g.customId)},loading:ue=="MID_JOURNEY:"+g.customId,children:[g.emoji," ",g.label]},"MID_JOURNEY:"+g.customId)})},ie=function(){return H.map(function(g){return(0,e.jsxs)($.ZP,{ghost:!0,style:{backgroundColor:g.style==3?"#258146":"rgb(131 133 142)"},onClick:function(){K("NIJI_JOURNEY",g.customId)},loading:ue=="NIJI_JOURNEY:"+g.customId,children:[g.emoji," ",g.label]},"NIJI_JOURNEY:"+g.customId)})},ve=function(){var Q=W()(C()().mark(function g(L){var G;return C()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j(L),r(!0),h.next=4,(0,X.p3)(i.id,L);case 4:G=h.sent,G.success?(r(!1),T.success({message:"success",description:c.formatMessage({id:"pages.account.mjVersionSuccess"})}),n()):(j(i.version),r(!1),T.error({message:"error",description:G.message}));case 6:case"end":return h.stop()}},g)}));return function(L){return Q.apply(this,arguments)}}(),K=function(){var Q=W()(C()().mark(function g(L,G){var ne;return C()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(ue===""){o.next=2;break}return o.abrupt("return");case 2:return pe(L+":"+G),o.next=5,(0,X.wO)(i.id,L,G);case 5:ne=o.sent,pe(""),ne.success?n():T.error({message:"error",description:ne.message});case 8:case"end":return o.stop()}},g)}));return function(L,G){return Q.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[B,(0,e.jsx)(J.Z,{type:"inner",title:c.formatMessage({id:"pages.account.info"}),style:{margin:"5px"},children:(0,e.jsxs)(x.Z,{column:3,children:[(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.guildId"}),children:i.guildId}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.channelId"}),children:i.channelId}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.userToken"}),children:Y(i.userToken)}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.botToken"}),children:Y(i.botToken)}),(0,e.jsxs)(x.Z.Item,{label:"User Agent",children:[Y(i.userAgent)," "]}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.remixAutoSubmit"}),children:he(i.remixAutoSubmit,c.formatMessage({id:"pages.yes"}),c.formatMessage({id:"pages.no"}))}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.mjChannelId"}),children:i.privateChannelId}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.nijiChannelId"}),children:i.nijiBotChannelId})]})}),(0,e.jsx)(J.Z,{type:"inner",title:c.formatMessage({id:"pages.account.basicInfo"}),style:{margin:"5px"},children:(0,e.jsxs)(x.Z,{column:3,children:[(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.status"}),children:he(i.enable,c.formatMessage({id:"pages.enable"}),c.formatMessage({id:"pages.disable"}))}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.mjMode"}),children:i.displays.mode}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.nijiMode"}),children:i.displays.nijiMode}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.subscribePlan"}),children:i.displays.subscribePlan}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.billedWay"}),children:i.displays.billedWay}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.renewDate"}),children:i.displays.renewDate}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.fastTimeRemaining"}),children:i.fastTimeRemaining}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.relaxedUsage"}),children:i.relaxedUsage}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.fastUsage"}),children:i.fastUsage}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.turboUsage"}),children:i.turboUsage}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.lifetimeUsage"}),children:i.lifetimeUsage})]})}),(0,e.jsx)(J.Z,{type:"inner",title:c.formatMessage({id:"pages.account.otherInfo"}),style:{margin:"5px"},children:(0,e.jsxs)(x.Z,{column:3,children:[(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.coreSize"}),children:i.coreSize}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.queueSize"}),children:i.queueSize}),(0,e.jsxs)(x.Z.Item,{label:c.formatMessage({id:"pages.account.timeoutMinutes"}),children:[i.timeoutMinutes," ",c.formatMessage({id:"pages.minutes"})]}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.weight"}),children:i.weight}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.dateCreated"}),children:Z(i.dateCreated)}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.remark"}),children:Y(i.remark)}),(0,e.jsx)(x.Z.Item,{label:c.formatMessage({id:"pages.account.disabledReason"}),children:Y(i.disabledReason)})]})}),(0,e.jsxs)(J.Z,{type:"inner",title:c.formatMessage({id:"pages.account.mjSettings"}),style:{margin:"5px"},children:[(0,e.jsx)(A.Z,{style:{width:"35%"},placeholder:(v=i.versionSelector)===null||v===void 0?void 0:v.placeholder,value:P,onChange:ve,loading:V,children:xe()}),(0,e.jsx)(re.Z,{wrap:!0,style:{marginTop:"5px"},children:ae()})]}),(0,e.jsx)(J.Z,{type:"inner",title:c.formatMessage({id:"pages.account.nijiSettings"}),style:{margin:"5px"},children:(0,e.jsx)(re.Z,{wrap:!0,style:{marginTop:"5px"},children:ie()})})]})},Ee=ze,Ve=function(b){var v=b.form,i=b.onSubmit,n=b.record,D=b.r,s=(0,se.useIntl)();(0,u.useEffect)(function(){v.setFieldsValue(n)},[]),(0,u.useEffect)(function(){v.setFieldsValue(n)},[D]);var T=(0,u.useState)([]),B=f()(T,2),z=B[0],N=B[1];(0,u.useEffect)(function(){(0,X.fl)().then(function(m){m.success&&N(m.data)})},[]);var P=(0,u.useState)(!1),j=f()(P,2),U=j[0],y=j[1],E=(0,u.useState)(""),k=f()(E,2),R=k[0],F=k[1],H=function(){y(!0)},I=function(){n.subChannels=R.split(`
`),v.setFieldsValue({subChannels:R.split(`
`)}),y(!1)},O=function(){y(!1)};return(0,e.jsxs)(a.Z,{form:v,labelAlign:"left",layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},onFinish:i,children:[(0,e.jsxs)(de.Z,{gutter:16,children:[(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(J.Z,{type:"inner",title:s.formatMessage({id:"pages.account.info"}),children:[(0,e.jsx)(a.Z.Item,{label:"id",name:"id",hidden:!0,children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.guildId"}),name:"guildId",rules:[{required:!0}],children:(0,e.jsx)(d.Z,{disabled:!0})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.channelId"}),name:"channelId",rules:[{required:!0}],children:(0,e.jsx)(d.Z,{disabled:!0})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.userToken"}),name:"userToken",rules:[{required:!0}],children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.botToken"}),name:"botToken",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.mjChannelId"}),name:"privateChannelId",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.nijiChannelId"}),name:"nijiBotChannelId",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:"User Agent",name:"userAgent",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.enable"}),name:"enable",valuePropName:"checked",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.enableFastToRelax"}),name:"enableFastToRelax",valuePropName:"checked",tooltip:s.formatMessage({id:"pages.account.enableFastToRelaxTips"}),children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.enableRelaxToFast"}),name:"enableRelaxToFast",valuePropName:"checked",tooltip:s.formatMessage({id:"pages.account.enableRelaxToFastTips"}),children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.remixAutoSubmit"}),name:"remixAutoSubmit",valuePropName:"checked",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.mode"}),name:"mode",children:(0,e.jsxs)(A.Z,{allowClear:!0,children:[(0,e.jsx)(A.Z.Option,{value:"RELAX",children:"RELAX"}),(0,e.jsx)(A.Z.Option,{value:"FAST",children:"FAST"}),(0,e.jsx)(A.Z.Option,{value:"TURBO",children:"TURBO"})]})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.allowModes"}),name:"allowModes",tooltip:"\u5982\u679C\u7528\u6237\u6307\u5B9A\u6A21\u5F0F\u6216\u6DFB\u52A0\u4E86\u81EA\u5B9A\u4E49\u53C2\u6570\u4F8B\u5982 --fast\uFF0C\u4F46\u662F\u8D26\u53F7\u4E0D\u5141\u8BB8 FAST\uFF0C\u5219\u81EA\u52A8\u79FB\u9664\u6B64\u53C2\u6570",children:(0,e.jsxs)(A.Z,{allowClear:!0,mode:"multiple",children:[(0,e.jsx)(A.Z.Option,{value:"RELAX",children:"RELAX"}),(0,e.jsx)(A.Z.Option,{value:"FAST",children:"FAST"}),(0,e.jsx)(A.Z.Option,{value:"TURBO",children:"TURBO"})]})})]})}),(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(J.Z,{type:"inner",title:s.formatMessage({id:"pages.account.poolsize"}),children:[(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.coreSize"}),name:"coreSize",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.queueSize"}),name:"queueSize",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.maxQueueSize"}),name:"maxQueueSize",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.interval"}),name:"interval",children:(0,e.jsx)(S.Z,{min:1.2})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.intervalAfter"}),children:(0,e.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:(0,e.jsxs)(re.Z,{children:[(0,e.jsx)(a.Z.Item,{name:"afterIntervalMin",style:{margin:0},children:(0,e.jsx)(S.Z,{min:1.2,placeholder:"Min"})}),"~",(0,e.jsx)(a.Z.Item,{name:"afterIntervalMax",style:{margin:0},children:(0,e.jsx)(S.Z,{min:1.2,placeholder:"Max"})})]})})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.weight"}),name:"weight",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.enableMj"}),name:"enableMj",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.enableNiji"}),name:"enableNiji",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isBlend"}),name:"isBlend",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isDescribe"}),name:"isDescribe",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isShorten"}),name:"isShorten",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.dayDrawLimit"}),name:"dayDrawLimit",extra:n.dayDrawCount>0&&(0,e.jsxs)("span",{children:[s.formatMessage({id:"pages.account.dayDrawCount"})," ",n.dayDrawCount]}),children:(0,e.jsx)(S.Z,{min:-1})})]})}),(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(J.Z,{type:"inner",title:s.formatMessage({id:"pages.account.otherInfo"}),children:[(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.permanentInvitationLink"}),name:"permanentInvitationLink",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isVerticalDomain"}),name:"isVerticalDomain",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.verticalDomainIds"}),name:"verticalDomainIds",children:(0,e.jsx)(A.Z,{options:z,allowClear:!0,mode:"multiple"})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.sort"}),name:"sort",children:(0,e.jsx)(S.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.timeoutMinutes"}),name:"timeoutMinutes",children:(0,e.jsx)(S.Z,{min:1,suffix:s.formatMessage({id:"pages.minutes"})})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.sponsor"}),name:"sponsor",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.remark"}),name:"remark",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.workTime"}),name:"workTime",children:(0,e.jsx)(d.Z,{placeholder:"09:00-17:00, 18:00-22:00"})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.fishingTime"}),help:s.formatMessage({id:"pages.account.fishingTimeTips"}),name:"fishingTime",children:(0,e.jsx)(d.Z,{placeholder:"23:30-09:00, 00:00-10:00"})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.subChannels"}),name:"subChannels",extra:(0,e.jsx)($.ZP,{type:"primary",style:{marginTop:"10px"},onClick:function(){F(v.getFieldValue("subChannels").join(`
`)),H()},icon:(0,e.jsx)(Ze.Z,{})}),children:(0,e.jsx)(d.Z.TextArea,{disabled:!0,autoSize:{minRows:1,maxRows:5}})})]})})]}),(0,e.jsxs)(me.Z,{title:s.formatMessage({id:"pages.account.subChannels"}),visible:U,onOk:I,onCancel:O,width:960,children:[(0,e.jsx)("div",{children:(0,e.jsx)(ge.Z,{message:s.formatMessage({id:"pages.account.subChannelsHelp"}),type:"info",style:{marginBottom:"10px"}})}),(0,e.jsx)(d.Z.TextArea,{placeholder:"https://discord.com/channels/xxx/xxx",autoSize:{minRows:10,maxRows:24},style:{width:"100%"},value:R,onChange:function(V){F(V.target.value)}})]}),(0,e.jsx)(ge.Z,{message:s.formatMessage({id:"pages.account.updateNotice"}),type:"warning",style:{marginTop:"10px"}})]})},$e=Ve,He=function(b){var v=b.form,i=b.onSubmit,n=b.record,D=b.r,s=(0,se.useIntl)();(0,u.useEffect)(function(){v.setFieldsValue(n)},[]),(0,u.useEffect)(function(){v.setFieldsValue(n)},[D]);var T=(0,u.useState)([]),B=f()(T,2),z=B[0],N=B[1];(0,u.useEffect)(function(){(0,X.fl)().then(function(m){m.success&&N(m.data)})},[]);var P=(0,u.useState)(!1),j=f()(P,2),U=j[0],y=j[1],E=(0,u.useState)(""),k=f()(E,2),R=k[0],F=k[1],H=function(){y(!0)},I=function(){n.subChannels=R.split(`
`),v.setFieldsValue({subChannels:R.split(`
`)}),y(!1)},O=function(){y(!1)};return(0,e.jsxs)(a.Z,{form:v,labelAlign:"left",layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},onFinish:i,children:[(0,e.jsxs)(de.Z,{gutter:16,children:[(0,e.jsx)(_.Z,{span:12,children:(0,e.jsxs)(J.Z,{type:"inner",title:s.formatMessage({id:"pages.account.info"}),children:[(0,e.jsx)(a.Z.Item,{label:"id",name:"id",hidden:!0,children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.mjChannelId"}),name:"privateChannelId",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.nijiChannelId"}),name:"nijiBotChannelId",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.remixAutoSubmit"}),name:"remixAutoSubmit",valuePropName:"checked",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.enableMj"}),name:"enableMj",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.enableNiji"}),name:"enableNiji",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isBlend"}),name:"isBlend",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isDescribe"}),name:"isDescribe",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isShorten"}),name:"isShorten",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.dayDrawLimit"}),name:"dayDrawLimit",extra:n.dayDrawCount>0&&(0,e.jsxs)("span",{children:[s.formatMessage({id:"pages.account.dayDrawCount"})," ",n.dayDrawCount]}),children:(0,e.jsx)(S.Z,{min:-1})})]})}),(0,e.jsx)(_.Z,{span:12,children:(0,e.jsxs)(J.Z,{type:"inner",title:s.formatMessage({id:"pages.account.otherInfo"}),children:[(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.permanentInvitationLink"}),name:"permanentInvitationLink",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.isVerticalDomain"}),name:"isVerticalDomain",children:(0,e.jsx)(M.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.verticalDomainIds"}),name:"verticalDomainIds",children:(0,e.jsx)(A.Z,{options:z,allowClear:!0,mode:"multiple"})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.timeoutMinutes"}),name:"timeoutMinutes",children:(0,e.jsx)(S.Z,{min:1,suffix:s.formatMessage({id:"pages.minutes"})})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.weight"}),name:"weight",children:(0,e.jsx)(S.Z,{min:1})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.sponsor"}),name:"sponsor",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.remark"}),name:"remark",children:(0,e.jsx)(d.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.sort"}),name:"sort",children:(0,e.jsx)(S.Z,{})}),(0,e.jsx)(a.Z.Item,{label:s.formatMessage({id:"pages.account.subChannels"}),name:"subChannels",extra:(0,e.jsx)($.ZP,{type:"primary",style:{marginTop:"10px"},onClick:function(){F(v.getFieldValue("subChannels").join(`
`)),H()},icon:(0,e.jsx)(Ze.Z,{})}),children:(0,e.jsx)(d.Z.TextArea,{disabled:!0,autoSize:{minRows:1,maxRows:5}})})]})})]}),(0,e.jsxs)(me.Z,{title:s.formatMessage({id:"pages.account.subChannels"}),visible:U,onOk:I,onCancel:O,width:960,children:[(0,e.jsx)("div",{children:(0,e.jsx)(ge.Z,{message:s.formatMessage({id:"pages.account.subChannelsHelp"}),type:"info",style:{marginBottom:"10px"}})}),(0,e.jsx)(d.Z.TextArea,{placeholder:"https://discord.com/channels/xxx/xxx",autoSize:{minRows:10,maxRows:24},style:{width:"100%"},value:R,onChange:function(V){F(V.target.value)}})]})]})},Je=He,Ye=l(94149),Xe=l(66212),We=l(3355),Qe=l(2830),Ge=l(47389),Ke=l(88360),qe=l(90930),_e=l(17873),ea=function(){var b=(0,u.useState)(!1),v=f()(b,2),i=v[0],n=v[1],D=(0,u.useState)(!1),s=f()(D,2),T=s[0],B=s[1],z=(0,u.useState)((0,e.jsx)(e.Fragment,{})),N=f()(z,2),P=N[0],j=N[1],U=(0,u.useState)(""),y=f()(U,2),E=y[0],k=y[1],R=(0,u.useState)(1e3),F=f()(R,2),H=F[0],I=F[1],O=a.Z.useForm(),m=f()(O,1),V=m[0],r=oe.ZP.useNotification(),fe=f()(r,2),ee=fe[0],ue=fe[1],pe=(0,u.useState)(!1),c=f()(pe,2),he=c[0],Y=c[1],Z=(0,se.useIntl)(),xe=(0,u.useRef)(),ae=function(){j((0,e.jsx)(e.Fragment,{})),n(!1),B(!1)},ie=function(o,t,p){V.resetFields(),k(o),j(t),I(p),n(!0)},ve=(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.ZP,{onClick:ae,children:Z.formatMessage({id:"pages.cancel"})},"back"),(0,e.jsx)($.ZP,{type:"primary",loading:he,onClick:function(){return V.submit()},children:Z.formatMessage({id:"pages.submit"})},"submit")]}),K=function(){var o;ae(),(o=xe.current)===null||o===void 0||o.reload()},Q=function(){var h=W()(C()().mark(function o(t){var p;return C()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return t.subChannels||(t.subChannels=[]),typeof t.subChannels=="string"&&(t.subChannels=t.subChannels.split(`
`)),Y(!0),w.next=5,(0,X.o1)(t);case 5:p=w.sent,Y(!1),console.log("res",p),p.success?(ee.success({message:"success",description:p.message}),ae(),K()):ee.error({message:"error",description:p.message});case 9:case"end":return w.stop()}},o)}));return function(t){return h.apply(this,arguments)}}(),g=function(){var h=W()(C()().mark(function o(t){var p;return C()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return t.subChannels||(t.subChannels=[]),typeof t.subChannels=="string"&&(t.subChannels=t.subChannels.split(`
`)),Y(!0),w.next=5,(0,X.MS)(t.id,t);case 5:p=w.sent,p.success?(ee.success({message:"success",description:p.message}),ae(),K(),Y(!1)):ee.error({message:"error",description:p.message});case 7:case"end":return w.stop()}},o)}));return function(t){return h.apply(this,arguments)}}(),L=function(){var h=W()(C()().mark(function o(t){var p;return C()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return t.subChannels||(t.subChannels=[]),typeof t.subChannels=="string"&&(t.subChannels=t.subChannels.split(`
`)),Y(!0),w.next=5,(0,X.Vx)(t.id,t);case 5:p=w.sent,p.success?ee.success({message:"success",description:p.message}):ee.error({message:"error",description:p.message}),ae(),K(),Y(!1);case 10:case"end":return w.stop()}},o)}));return function(t){return h.apply(this,arguments)}}(),G=function(){var h=W()(C()().mark(function o(){return C()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:Y(!0),ae(),K(),Y(!1);case 4:case"end":return p.stop()}},o)}));return function(){return h.apply(this,arguments)}}(),ne=[{title:Z.formatMessage({id:"pages.account.guildId"}),dataIndex:"guildId",width:200,align:"center",render:function(o,t){return(0,e.jsx)("a",{onClick:function(){B(!0),ie(Z.formatMessage({id:"pages.account.info"})+" - "+t.id,(0,e.jsx)(Ee,{record:t,onSuccess:K}),1100)},children:o})}},{title:Z.formatMessage({id:"pages.account.channelId"}),dataIndex:"channelId",align:"center",width:200},{title:"".concat(Z.formatMessage({id:"pages.account.status"})),dataIndex:"enable",width:200,align:"center",request:function(){var h=W()(C()().mark(function t(){return C()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.abrupt("return",[{label:Z.formatMessage({id:"pages.enable"}),value:!0},{label:Z.formatMessage({id:"pages.disable"}),value:!1}]);case 1:case"end":return q.stop()}},t)}));function o(){return h.apply(this,arguments)}return o}(),render:function(o,t){var p=o?"green":"volcano",q=o?Z.formatMessage({id:"pages.enable"}):Z.formatMessage({id:"pages.disable"});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(le.Z,{color:p,children:q}),t.lock&&(0,e.jsx)(le.Z,{icon:(0,e.jsx)(Ye.Z,{}),color:"warning",children:(0,e.jsx)(ce.Z,{title:Z.formatMessage({id:"pages.account.lockmsg"}),children:Z.formatMessage({id:"pages.account.lock"})})}),o&&!t.running&&!t.lock&&(0,e.jsx)(le.Z,{icon:(0,e.jsx)(je.Z,{}),color:"error",children:Z.formatMessage({id:"pages.account.notRunning"})}),(t==null?void 0:t.runningCount)>0&&(0,e.jsx)(le.Z,{icon:(0,e.jsx)(je.Z,{spin:!0}),color:"cyan",children:(0,e.jsx)(ce.Z,{title:Z.formatMessage({id:"pages.account.runningCount"})+" "+t.runningCount,children:(t==null?void 0:t.runningCount)||0})}),(t==null?void 0:t.queueCount)>0&&(0,e.jsx)(le.Z,{icon:(0,e.jsx)(Xe.Z,{}),color:"processing",children:(0,e.jsx)(ce.Z,{title:Z.formatMessage({id:"pages.account.queueCount"})+" "+t.queueCount,children:t.queueCount||0})})]})}},{title:Z.formatMessage({id:"pages.account.fastTimeRemaining"}),dataIndex:"fastTimeRemaining",ellipsis:!0,width:200,hideInSearch:!0,align:"center"},{title:Z.formatMessage({id:"pages.account.renewDate"}),dataIndex:"renewDate",align:"center",width:160,hideInSearch:!0,render:function(o,t){return t.displays.renewDate}},{title:Z.formatMessage({id:"pages.account.sponsor"}),dataIndex:"sponsor",ellipsis:!0,width:100,render:function(o,t){return(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:t.sponsor||"-"}})}},{title:Z.formatMessage({id:"pages.account.remark"}),dataIndex:"remark",ellipsis:!0,width:150},{title:Z.formatMessage({id:"pages.account.disabledReason"}),dataIndex:"disabledReason",ellipsis:!0,width:150,hideInSearch:!0},{title:Z.formatMessage({id:"pages.operation"}),dataIndex:"operation",width:220,key:"operation",fixed:"right",align:"center",hideInSearch:!0,render:function(o,t){return(0,e.jsxs)(re.Z,{children:[t.lock&&(0,e.jsx)($.ZP,{icon:(0,e.jsx)(We.Z,{}),type:"dashed",onClick:function(){return ie(Z.formatMessage({id:"pages.account.cfmodal"}),(0,e.jsx)(Ne,{form:V,record:t,onSubmit:G}),1e3)}},"Lock"),(0,e.jsx)(Oe,{record:t,onSuccess:K}),(0,e.jsx)(ce.Z,{title:Z.formatMessage({id:"pages.account.updateAndReconnect"}),children:(0,e.jsx)($.ZP,{type:"primary",icon:(0,e.jsx)(Qe.Z,{}),onClick:function(){ie(Z.formatMessage({id:"pages.account.updateAndReconnect"}),(0,e.jsx)($e,{r:Math.random(),form:V,record:t,onSubmit:g}),1600)}},"EditAndReconnect")}),(0,e.jsx)($.ZP,{icon:(0,e.jsx)(Ge.Z,{}),onClick:function(){return ie(Z.formatMessage({id:"pages.account.update"}),(0,e.jsx)(Je,{r:Math.random(),form:V,record:t,onSubmit:L}),1e3)}},"Update"),(0,e.jsx)(Re,{record:t,onSuccess:K})]})}}];return(0,u.useEffect)(function(){},[]),(0,e.jsxs)(qe._z,{children:[ue,(0,e.jsx)(J.Z,{children:(0,e.jsx)(_e.Z,{columns:ne,scroll:{x:1e3},search:{defaultCollapsed:!0},pagination:{pageSize:10,showQuickJumper:!1,showSizeChanger:!1},rowKey:"id",actionRef:xe,toolBarRender:function(){return[(0,e.jsx)($.ZP,{type:"primary",icon:(0,e.jsx)(Ke.Z,{}),onClick:function(){ie(Z.formatMessage({id:"pages.account.add"}),(0,e.jsx)(De,{form:V,onSubmit:Q}),1600)},children:Z.formatMessage({id:"pages.add"})},"primary")]},request:function(){var h=W()(C()().mark(function o(t){var p;return C()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,X.fH)(be()(be()({},t),{},{pageNumber:t.current-1}));case 2:return p=w.sent,w.abrupt("return",{data:p.list,total:p.pagination.total,success:!0});case 4:case"end":return w.stop()}},o)}));return function(o){return h.apply(this,arguments)}}()})}),(0,e.jsx)(me.Z,{title:E,open:i,onCancel:ae,footer:T?null:ve,width:H,children:P})]})},aa=ea}}]);
