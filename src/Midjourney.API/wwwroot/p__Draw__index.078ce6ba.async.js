"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[903],{39936:function(Nr,Ce,l){l.r(Ce),l.d(Ce,{default:function(){return Aa}});var ua=l(97857),T=l.n(ua),da=l(15009),I=l.n(da),ca=l(64599),q=l.n(ca),pa=l(19632),ga=l.n(pa),fa=l(99289),z=l.n(fa),ma=l(5574),m=l.n(ma),x=l(66927),va=l(18429),ha=l(51042),we=l(52645),Sa=l(90930),ba=l(80854),W=l(55102),se=l(4393),Ca=l(16568),b=l(2453),Z=l(14726),wa=l(7134),B=l(86250),_=l(42075),ya=l(66309),ja=l(11499),ye=l(74330),Ta=l(38703),N=l(66476),je=l(78045),Te=l(85886),Ia=l(17910),g=l(67294),Ie=l(37823),ue={cardTitleTime:"cardTitleTime___ULudn",taskErrorTip:"taskErrorTip___EJ9yV"},r=l(85893),ne=W.Z.TextArea,xa=se.Z.Meta,Pa=function(){var Za=Ca.ZP.useNotification(),xe=m()(Za,2),L=xe[0],Ea=xe[1],Ma=(0,g.useState)([]),Pe=m()(Ma,2),Fa=Pe[0],Ae=Pe[1],Ra=(0,g.useState)(!1),Ze=m()(Ra,2),ka=Ze[0],Ee=Ze[1],Ua=(0,g.useState)("imagine"),Me=m()(Ua,2),w=Me[0],Ba=Me[1],La=(0,g.useState)("MID_JOURNEY"),Fe=m()(La,2),j=Fe[0],Oa=Fe[1],Da=(0,g.useState)(""),Re=m()(Da,2),E=Re[0],V=Re[1],Na=(0,g.useState)("SQUARE"),ke=m()(Na,2),Ue=ke[0],Ja=ke[1],Wa=(0,g.useState)([]),Be=m()(Wa,2),O=Be[0],H=Be[1],Va=(0,g.useState)([]),Le=m()(Va,2),R=Le[0],ee=Le[1],Ha=(0,g.useState)([]),Oe=m()(Ha,2),k=Oe[0],ae=Oe[1],Ga=(0,g.useState)(""),De=m()(Ga,2),za=De[0],Ne=De[1],Ya=(0,g.useState)(!1),Je=m()(Ya,2),J=Je[0],P=Je[1],$a=(0,g.useState)(new Set),Xa=m()($a,1),y=Xa[0],Qa=(0,g.useState)(!1),We=m()(Qa,2),Ka=We[0],Y=We[1],qa=(0,g.useState)(""),Ve=m()(qa,2),_a=Ve[0],er=Ve[1],ar=(0,g.useState)(""),He=m()(ar,2),ie=He[0],Ge=He[1],rr=(0,g.useState)(""),ze=m()(rr,2),de=ze[0],tr=ze[1],sr=(0,g.useState)(""),Ye=m()(sr,2),le=Ye[0],$e=Ye[1],nr=(0,g.useState)(0),Xe=m()(nr,2),Qe=Xe[0],ir=Xe[1],lr=(0,g.useState)(!1),Ke=m()(lr,2),or=Ke[0],ur=Ke[1],dr=(0,g.useState)(!1),qe=m()(dr,2),cr=qe[0],_e=qe[1],pr=(0,g.useState)([]),ea=m()(pr,2),gr=ea[0],fr=ea[1],mr=(0,g.useState)(),aa=m()(mr,2),$=aa[0],vr=aa[1],u=(0,ba.useIntl)(),ce=(0,g.useRef)([]),X=(0,g.useRef)(null),D="midjourney-proxy-admin",pe=sessionStorage.getItem("mj-image-prefix")||"";(0,g.useEffect)(function(){return br({state:D,pageNumber:0,pageSize:3,statusSet:["NOT_START","SUBMITTED","IN_PROGRESS","FAILURE","SUCCESS"],sort:"submitTime,desc"}),X.current&&clearInterval(X.current),X.current=setInterval(function(){y.size!==0&&hr()},2e3),function(){X.current&&(clearInterval(X.current),X.current=null)}},[]);var hr=function(){var n=z()(I()().mark(function e(){var a,o,i,f,s,p,c,F,v,h,C;return I()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return a=Array.from(y),o=new Set(a),S.next=4,(0,x.BX)(a);case 4:i=S.sent,f=!1,s=ga()(ce.current),p=q()(i),S.prev=8,F=I()().mark(function K(){var U,t;return I()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:U=c.value,o.delete(U.id),(U.status==="FAILURE"||U.status==="SUCCESS"||U.status==="CANCEL")&&y.delete(U.id),t=s.find(function(Dr){return Dr.id===U.id}),t?Sr(t,U)||(f=!0,s.splice(s.indexOf(t),1,U)):(f=!0,s.push(U));case 5:case"end":return A.stop()}},K)}),p.s();case 11:if((c=p.n()).done){S.next=15;break}return S.delegateYield(F(),"t0",13);case 13:S.next=11;break;case 15:S.next=20;break;case 17:S.prev=17,S.t1=S.catch(8),p.e(S.t1);case 20:return S.prev=20,p.f(),S.finish(20);case 23:v=q()(o);try{for(v.s();!(h=v.n()).done;)C=h.value,y.delete(C)}catch(K){v.e(K)}finally{v.f()}f&&(ce.current=s,Ae(s),ra());case 26:case"end":return S.stop()}},e,null,[[8,17,20,23]])}));return function(){return n.apply(this,arguments)}}(),Sr=function(e,a){return e.status===a.status&&e.progress===a.progress&&e.imageUrl===a.imageUrl},ra=function(){setTimeout(function(){var e=document.getElementById("task-panel");e&&e.scrollTo(0,e.scrollHeight)},20)},br=function(){var n=z()(I()().mark(function e(a){var o,i,f,s,p,c;return I()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return Ee(!0),v.next=3,(0,x.Ed)();case 3:return o=v.sent,fr(o),v.next=7,(0,x.Pn)(a);case 7:i=v.sent,f=i.list.reverse(),s=q()(f);try{for(s.s();!(p=s.n()).done;)c=p.value,c.status!=="FAILURE"&&c.status!=="SUCCESS"&&c.action!=="CANCEL"&&y.add(c.id)}catch(h){s.e(h)}finally{s.f()}ce.current=f,Ae(f),Ee(!1),ra();case 15:case"end":return v.stop()}},e)}));return function(a){return n.apply(this,arguments)}}(),Cr=function(e){Ba(e),V(""),H([])},wr=function(e){vr(e)},yr=function(e){var a=e.target.value;Oa(a),V(""),H([])},jr=function(e){var a=e.target.value;Ja(a)},oe=function(e){V(e.target.value)},ta=function(e){Ge(e.target.value)},Q=function(){var n=z()(I()().mark(function e(a){return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise(function(f){var s=new FileReader;s.onload=function(){return f(s.result)},s.readAsDataURL(a)});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},e)}));return function(a){return n.apply(this,arguments)}}(),M=function(){var n=z()(I()().mark(function e(){var a,o,i,f,s,p,c,F,v,h,C,te,S,K;return I()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(j==="INSIGHT_FACE"||j==="FACE_SWAP")){t.next=26;break}if(!(R.length<1)){t.next=4;break}return b.ZP.error(u.formatMessage({id:"pages.draw.swapTip"})),t.abrupt("return");case 4:if(!(k.length<1)){t.next=7;break}return b.ZP.error(u.formatMessage({id:"pages.draw.swapTip"})),t.abrupt("return");case 7:if(P(!0),a={sourceUrl:"",targetUrl:"",sourceBase64:"",targetBase64:"",state:D},!R[0].originFileObj){t.next=15;break}return t.next=12,Q(R[0].originFileObj);case 12:a.sourceBase64=t.sent,t.next=16;break;case 15:a.sourceUrl=R[0].name;case 16:if(!k[0].originFileObj){t.next=22;break}return t.next=19,Q(k[0].originFileObj);case 19:a.targetBase64=t.sent,t.next=23;break;case 22:a.targetUrl=k[0].name;case 23:(0,x.Vl)(a).then(function(d){P(!1),d.code===22||d.code===1?(d.code===22?L.warning({message:"warn",description:d.description}):b.ZP.success(u.formatMessage({id:"pages.draw.submitSuccess"})),y.add(d.result),ee([]),ae([])):L.error({message:"error",description:d.description})}),t.next=143;break;case 26:if(j!=="VIDEO_FACE_SWAP"){t.next=51;break}if(!(R.length<1)){t.next=30;break}return b.ZP.error(u.formatMessage({id:"pages.draw.swapTip"})),t.abrupt("return");case 30:if(!(k.length<1)){t.next=33;break}return b.ZP.error(u.formatMessage({id:"pages.draw.swapTip"})),t.abrupt("return");case 33:if(P(!0),o={sourceUrl:"",targetUrl:"",sourceBase64:"",targetBase64:"",state:D},!R[0].originFileObj){t.next=41;break}return t.next=38,Q(R[0].originFileObj);case 38:o.sourceBase64=t.sent,t.next=42;break;case 41:o.sourceUrl=R[0].name;case 42:i=new FormData,k[0].originFileObj?i.append("TargetFile",k[0].originFileObj):o.targetUrl=k[0].name,i.append("SourceBase64",o.sourceBase64||""),i.append("SourceUrl",o.sourceUrl||""),i.append("TargetUrl",o.targetUrl||""),i.append("Satate",o.state),(0,x.Wv)(i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(d){P(!1),d.code===22||d.code===1?(d.code===22?L.warning({message:"warn",description:d.description}):b.ZP.success(u.formatMessage({id:"pages.draw.submitSuccess"})),y.add(d.result),ee([]),ae([])):L.error({message:"error",description:d.description})}),t.next=143;break;case 51:if(w!=="show"){t.next=59;break}if(E){t.next=55;break}return b.ZP.error(u.formatMessage({id:"pages.draw.taskIdNotBlank"})),t.abrupt("return");case 55:y.add(E),V(""),t.next=143;break;case 59:if(w!=="showjobid"){t.next=67;break}if(E){t.next=63;break}return b.ZP.error(u.formatMessage({id:"pages.draw.promptNotBlank"})),t.abrupt("return");case 63:P(!0),(0,x.cq)("show",{botType:j,jobId:E,state:D,accountFilter:{instanceId:$}}).then(function(d){P(!1);var A=re(d);A&&(y.add(d.result),V(""),H([]))}),t.next=143;break;case 67:if(w!=="imagine"){t.next=95;break}if(E){t.next=71;break}return b.ZP.error(u.formatMessage({id:"pages.draw.promptNotBlank"})),t.abrupt("return");case 71:P(!0),f=[],s=q()(O),t.prev=74,s.s();case 76:if((p=s.n()).done){t.next=84;break}return c=p.value,t.next=80,Q(c.originFileObj);case 80:F=t.sent,f.push(F);case 82:t.next=76;break;case 84:t.next=89;break;case 86:t.prev=86,t.t0=t.catch(74),s.e(t.t0);case 89:return t.prev=89,s.f(),t.finish(89);case 92:(0,x.qJ)(w,{botType:j,prompt:E,base64Array:f,state:D,accountFilter:{instanceId:$}}).then(function(d){P(!1);var A=re(d);A&&(y.add(d.result),V(""),H([]))}),t.next=143;break;case 95:if(w!=="blend"){t.next=123;break}if(!(O.length<2)){t.next=99;break}return b.ZP.error(u.formatMessage({id:"pages.draw.blendTip"})),t.abrupt("return");case 99:P(!0),v=[],h=q()(O),t.prev=102,h.s();case 104:if((C=h.n()).done){t.next=112;break}return te=C.value,t.next=108,Q(te.originFileObj);case 108:S=t.sent,v.push(S);case 110:t.next=104;break;case 112:t.next=117;break;case 114:t.prev=114,t.t1=t.catch(102),h.e(t.t1);case 117:return t.prev=117,h.f(),t.finish(117);case 120:(0,x.qJ)(w,{botType:j,base64Array:v,dimensions:Ue,state:D,accountFilter:{instanceId:$}}).then(function(d){P(!1);var A=re(d);A&&(y.add(d.result),H([]))}),t.next=143;break;case 123:if(w!=="describe"){t.next=134;break}if(!(O.length<1)){t.next=127;break}return b.ZP.error(u.formatMessage({id:"pages.draw.imageEmptyTip"})),t.abrupt("return");case 127:return P(!0),t.next=130,Q(O[0].originFileObj);case 130:K=t.sent,(0,x.qJ)(w,{botType:j,base64:K,state:D,accountFilter:{instanceId:$}}).then(function(d){P(!1);var A=re(d);A&&(y.add(d.result),H([]))}),t.next=143;break;case 134:if(w!=="shorten"){t.next=142;break}if(E){t.next=138;break}return b.ZP.error(u.formatMessage({id:"pages.draw.promptNotBlank"})),t.abrupt("return");case 138:P(!0),(0,x.qJ)(w,{botType:j,prompt:E,state:D,accountFilter:{instanceId:$}}).then(function(d){P(!1);var A=re(d);A&&(y.add(d.result),V(""))}),t.next=143;break;case 142:b.ZP.error(u.formatMessage({id:"pages.draw.unsupportedAction"}));case 143:case"end":return t.stop()}},e,null,[[74,86,89,92],[102,114,117,120]])}));return function(){return n.apply(this,arguments)}}(),re=function(e){return e.code===22||e.code===1?(e.code===22?L.warning({message:"warn",description:e.description}):b.ZP.success(u.formatMessage({id:"pages.draw.submitSuccess"})),!0):(L.error({message:"error",description:e.description}),!1)},Tr=function(e,a){var o=a.customId,i=e.id,f="".concat(a.emoji," ").concat(a.label);Ne("".concat(i,":").concat(o)),(0,x.qJ)("action",{taskId:i,customId:o,state:D,chooseSameChannel:!0}).then(function(s){if(Ne(""),s.code===22)L.warning({message:"warn",description:s.description}),a.style=3,y.add(s.result);else if(s.code===21){if(a.style=3,er("".concat(s.result," ").concat(f)),tr(s.result),Ge(s.properties.finalPrompt),ur(s.properties.remix||!1),o.startsWith("MJ::Inpaint:")){var p="".concat(pe).concat(e.imageUrl),c=new Image;c.src=p,c.onload=function(){ir(Math.floor(550/c.width*c.height)),$e(p),Y(!0),setTimeout(function(){Ir()},300)}}else $e(""),Y(!0);Y(!0)}else if(s.code===1){if(a.style=3,s.result){var F=s.result.split(",");F.forEach(function(v){y.add(v)})}b.ZP.success(u.formatMessage({id:"pages.draw.actionSuccess"}))}else L.error({message:"error",description:s.description})})},ge=!1,fe=0,me=0,Ir=function(){var e=document.getElementById("canvas");e.width=e.clientWidth,e.height=e.clientHeight;var a=e.getBoundingClientRect(),o=Math.floor(a.left),i=Math.floor(a.top),f=e.getContext("2d");f.fillStyle="blue",e.onmousedown=function(s){fe=s.clientX,me=s.clientY,ge=!0},e.onmousemove=function(s){ge===!0&&f.fillRect(fe-o,me-i,s.clientX-fe,s.clientY-me)},e.onmouseup=function(){ge=!1}},xr=function(){(0,x.el)(de),Y(!1)},Pr=function(){var n=z()(I()().mark(function e(){var a,o,i,f;return I()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(_e(!0),!le){p.next=11;break}return o=document.getElementById("canvas"),i=new Image,i.src=o.toDataURL("image/png"),p.next=7,Ar(i);case 7:f=p.sent,a={maskBase64:f,taskId:de,prompt:ie},p.next=12;break;case 11:a={taskId:de,prompt:ie};case 12:(0,x.qJ)("modal",a).then(function(c){_e(!1),c.code===22?(L.warning({message:"warn",description:c.description}),y.add(c.result),Y(!1)):c.code===1?(y.add(c.result),Y(!1),b.ZP.success(u.formatMessage({id:"pages.draw.subSuccess"}))):L.error({message:"error",description:c.description})});case 13:case"end":return p.stop()}},e)}));return function(){return n.apply(this,arguments)}}(),Ar=function(){var n=z()(I()().mark(function e(a){return I()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,new Promise(function(f){a.onload=function(){var s=a.width,p=a.height,c=document.createElement("canvas"),F=c.getContext("2d");c.width=s,c.height=p,F.drawImage(a,0,0,s,p);for(var v=F.getImageData(0,0,s,p),h=v.data,C=0;C<h.length;C+=4)h[C]!==0||h[C+1]!==0||h[C+2]!==0?(h[C]=parseInt("0xff"),h[C+1]=parseInt("0xff"),h[C+2]=parseInt("0xff")):(h[C]=0,h[C+1]=0,h[C+2]=0,h[C+3]=255);F.putImageData(v,0,0);var te=c.toDataURL("png");f(te)}});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},e)}));return function(a){return n.apply(this,arguments)}}(),Zr=function(e){var a="Midjourney - ".concat(e.displays.discordInstanceId);return e.botType==="NIJI_JOURNEY"?a="niji\u30FBjourney - ".concat(e.displays.discordInstanceId):(e.botType==="INSIGHT_FACE"||e.botType==="FACE_SWAP")&&(a="InsightFaceSwap - ".concat(e.displays.discordInstanceId)),e.status!=="SUCCESS"&&e.status!=="FAILURE"&&e.status!=="CANCEL"&&e.action!=="SWAP_FACE"?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{className:ue.cardTitleTime,children:e.displays.submitTime}),(0,r.jsx)(Z.ZP,{style:{marginLeft:"10px"},type:"link",shape:"circle",icon:(0,r.jsx)(va.Z,{}),onClick:function(){return(0,x.el)(e.id)}})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{className:ue.cardTitleTime,children:e.displays.submitTime})]})},Er=function(e){var a=e.description,o=e.properties.messageContent;return o&&(a=o.replace(/<@[^>]+>/g,"")),(0,r.jsx)(Ie.U,{children:a})},Mr=function(){return Fa.map(function(e){var a="./midjourney.webp";return e.botType==="NIJI_JOURNEY"?a="./niji.webp":(e.botType==="INSIGHT_FACE"||e.botType==="FACE_SWAP"||e.botType==="VIDEO_FACE_SWAP")&&(a="./insightface.webp"),(0,r.jsxs)(se.Z,{bordered:!1,bodyStyle:{backgroundColor:"#eaeaea",marginBottom:"10px"},children:[(0,r.jsx)(xa,{avatar:(0,r.jsx)(wa.C,{src:a}),title:Zr(e),description:Er(e)}),(0,r.jsxs)(B.Z,{vertical:!0,style:{paddingLeft:"48px"},children:[Ur(e),(0,r.jsx)(_.Z,{wrap:!0,style:{marginTop:"7px"},children:kr(e)})]})]},e.id)})},sa=function(e){if(!e.properties.finalPrompt)return(0,r.jsx)(r.Fragment,{});var a=e.properties.finalPrompt;return(0,r.jsx)(Ie.U,{children:a.replace(new RegExp("(?<!\\n)\\n","g"),`

`)})},ve=function(e){if(e.status==="FAILURE")return(0,r.jsx)("span",{className:ue.taskErrorTip,children:e.failReason});if(e.status==="SUCCESS")return(0,r.jsx)(r.Fragment,{});if(e.status==="IN_PROGRESS")return(0,r.jsx)(r.Fragment,{children:Rr(e)});var a="purple";return e.status==="SUBMITTED"?a="lime":e.status==="CANCEL"?a="magenta":e.status==="MODAL"&&(a="warning"),(0,r.jsx)("span",{children:(0,r.jsx)(ya.Z,{color:a,children:e.displays.status})})},na=function(e,a){return e?(0,r.jsx)(ja.Z,{width:a,src:"".concat(pe).concat(e),placeholder:(0,r.jsx)(ye.Z,{tip:"Loading",size:"large"})}):(0,r.jsx)(r.Fragment,{})},Fr=function(e,a){return e?(0,r.jsx)("video",{width:a,controls:!0,src:pe+e,placeholder:(0,r.jsx)(ye.Z,{tip:"Loading",size:"large"})}):(0,r.jsx)(r.Fragment,{})},Rr=function(e){var a=e.progress,o=0;return a&&a.indexOf("%")>0&&(o=parseInt(a.substring(0,a.indexOf("%")))),(0,r.jsx)("span",{style:{width:250},children:(0,r.jsx)(Ta.Z,{percent:o,status:"normal"})})},kr=function(e){return e.buttons.map(function(a){return(0,r.jsxs)(Z.ZP,{ghost:!0,style:{backgroundColor:a.style===3?"#258146":"rgb(131 133 142)"},onClick:function(){Tr(e,a)},loading:za==="".concat(e.id,":").concat(a.customId),children:[a.emoji," ",a.label]},"".concat(e.id,":").concat(a.customId))})},G=(0,r.jsxs)("div",{children:[(0,r.jsx)(ha.Z,{}),(0,r.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),Ur=function(e){return e.action==="DESCRIBE"?(0,r.jsxs)(r.Fragment,{children:[ve(e)," ",sa(e)," ",na(e.imageUrl,120)]}):e.action==="SHORTEN"?(0,r.jsxs)(r.Fragment,{children:[ve(e)," ",sa(e)]}):(0,r.jsxs)(r.Fragment,{children:[ve(e),e.action==="SWAP_VIDEO_FACE"?(0,r.jsx)(r.Fragment,{children:Fr(e.imageUrl,250)}):na(e.imageUrl,250)]})},Br=function(){return j==="INSIGHT_FACE"||j==="FACE_SWAP"?(0,r.jsxs)(B.Z,{vertical:!0,gap:8,children:[(0,r.jsx)(N.Z,T()(T()({},la),{},{listType:"picture-card",children:R.length>=1?null:G})),(0,r.jsx)(W.Z,{onChange:function(a){a.target.value&&ee([{uid:"1",name:a.target.value,url:a.target.value}])},placeholder:u.formatMessage({id:"pages.draw.swap1Desc"})}),(0,r.jsx)(N.Z,T()(T()({},oa),{},{listType:"picture-card",children:k.length>=1?null:G})),(0,r.jsx)(W.Z,{onChange:function(a){a.target.value&&ae([{uid:"2",name:a.target.value,url:a.target.value}])},placeholder:u.formatMessage({id:"pages.draw.swap2Desc"})}),(0,r.jsx)(Z.ZP,{style:{marginTop:"10px"},type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.swapDesc"})})]}):j==="VIDEO_FACE_SWAP"?(0,r.jsxs)(B.Z,{vertical:!0,gap:8,children:[(0,r.jsx)(N.Z,T()(T()({},la),{},{listType:"picture-card",children:R.length>=1?null:G})),(0,r.jsx)(W.Z,{onChange:function(a){a.target.value&&ee([{uid:"1",name:a.target.value,url:a.target.value}])},placeholder:u.formatMessage({id:"pages.draw.swap1Desc"})}),(0,r.jsx)(N.Z,T()(T()({},oa),{},{listType:"picture-card",children:k.length>=1?null:G})),(0,r.jsx)(W.Z,{onChange:function(a){a.target.value&&ae([{uid:"2",name:a.target.value,url:a.target.value}])},placeholder:u.formatMessage({id:"pages.draw.swap2VidelDesc"})}),(0,r.jsx)(Z.ZP,{style:{marginTop:"10px"},type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.swapVideoDesc"})})]}):w==="show"?(0,r.jsxs)(_.Z.Compact,{style:{width:"100%"},children:[(0,r.jsx)(W.Z,{placeholder:u.formatMessage({id:"pages.draw.inputIdShow"}),value:E,onChange:oe,onPressEnter:M}),(0,r.jsx)(Z.ZP,{type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.submitTask"})})]}):w==="showjobid"?(0,r.jsxs)(_.Z.Compact,{style:{width:"100%"},children:[(0,r.jsx)(W.Z,{placeholder:u.formatMessage({id:"pages.draw.inputJobIdShow"}),value:E,onChange:oe,onPressEnter:M}),(0,r.jsx)(Z.ZP,{type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.submitTask"})})]}):w==="imagine"?(0,r.jsxs)(B.Z,{vertical:!0,children:[(0,r.jsx)(N.Z,T()(T()({},be),{},{listType:"picture-card",children:O.length>=5?null:G})),(0,r.jsxs)(B.Z,{style:{width:"100%",marginTop:"10px"},gap:6,children:[(0,r.jsx)(ne,{placeholder:"Prompt",value:E,onChange:oe,onPressEnter:M,autoSize:{minRows:1,maxRows:12}}),(0,r.jsx)(Z.ZP,{type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.submitTask"})})]})]}):w==="blend"?(0,r.jsxs)(B.Z,{vertical:!0,children:[(0,r.jsx)(N.Z,T()(T()({},be),{},{listType:"picture-card",children:O.length>=5?null:G})),(0,r.jsxs)(_.Z,{style:{width:"100%",marginTop:"10px"},children:[(0,r.jsx)(je.ZP.Group,{value:Ue,onChange:jr,options:[{value:"PORTRAIT",label:u.formatMessage({id:"pages.draw.PORTRAIT"})},{value:"SQUARE",label:u.formatMessage({id:"pages.draw.SQUARE"})},{value:"LANDSCAPE",label:u.formatMessage({id:"pages.draw.LANDSCAPE"})}],optionType:"button"}),(0,r.jsx)(Z.ZP,{type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.submitTask"})})]})]}):w==="describe"?(0,r.jsxs)(B.Z,{vertical:!0,children:[(0,r.jsx)(N.Z,T()(T()({},be),{},{listType:"picture-card",children:O.length>=1?null:G})),(0,r.jsx)(Z.ZP,{style:{marginTop:"10px"},type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.submitTask"})})]}):w==="shorten"?(0,r.jsxs)(B.Z,{style:{width:"100%",marginTop:"10px"},gap:6,children:[(0,r.jsx)(ne,{placeholder:"Prompt",value:E,onChange:oe,onPressEnter:M,autoSize:{minRows:1,maxRows:12}}),(0,r.jsx)(Z.ZP,{type:"primary",onClick:M,loading:J,children:u.formatMessage({id:"pages.draw.submitTask"})})]}):(0,r.jsx)(r.Fragment,{})},ia=function(){var e=document.getElementById("canvas");e.width=e.clientWidth,e.height=e.clientHeight;var a=e.getContext("2d");a.fillStyle="blue"},Lr=function(){return le?or?(0,r.jsxs)(B.Z,{vertical:!0,children:[(0,r.jsx)(Z.ZP,{style:{marginBottom:"10px"},icon:(0,r.jsx)(we.Z,{}),onClick:ia,children:u.formatMessage({id:"pages.draw.clear"})}),(0,r.jsx)("canvas",{style:{backgroundImage:"url('".concat(le,"')"),backgroundSize:"100% 100%"},id:"canvas",width:"550",height:Qe}),(0,r.jsx)(ne,{style:{marginTop:"10px"},rows:2,value:ie,onChange:ta})]}):(0,r.jsxs)(B.Z,{vertical:!0,children:[(0,r.jsx)(Z.ZP,{style:{marginBottom:"10px"},icon:(0,r.jsx)(we.Z,{}),onClick:ia,children:u.formatMessage({id:"pages.draw.clear"})}),(0,r.jsx)("canvas",{style:{backgroundImage:"url('".concat(le,"')"),backgroundSize:"100% 100%"},id:"canvas",width:"550",height:Qe})]}):(0,r.jsx)(ne,{rows:3,value:ie,onChange:ta})};function he(n){n.onSuccess()}var Se=function(e){var a=e.type==="image/jpeg"||e.type==="image/png"||e.type==="video/mp4"||e.type==="image/webp";a||b.ZP.error(u.formatMessage({id:"pages.draw.onlyJpgPng"}));var o=e.size/1024/1024<10;return o||b.ZP.error(u.formatMessage({id:"pages.draw.limit10M"})),a&&o||N.Z.LIST_IGNORE},be={customRequest:he,beforeUpload:Se,fileList:O,onChange:function(e){H(e.fileList)},showUploadList:{showRemoveIcon:!0,showPreviewIcon:!1}},la={customRequest:he,beforeUpload:Se,maxCount:1,fileList:R,onChange:function(e){ee(e.fileList)},showUploadList:{showRemoveIcon:!0,showPreviewIcon:!1}},oa={customRequest:he,beforeUpload:Se,maxCount:1,fileList:k,onChange:function(e){ae(e.fileList)},showUploadList:{showRemoveIcon:!0,showPreviewIcon:!1}},Or=function(){var e,a=!1;j==="INSIGHT_FACE"||j==="FACE_SWAP"||j==="VIDEO_FACE_SWAP"?(a=!0,e=[{value:"swap",label:"/swap"}]):e=[{value:"imagine",label:"/imagine"},{value:"blend",label:"/blend"},{value:"describe",label:"/describe"},{value:"shorten",label:"/shorten"},{value:"showjobid",label:"/show job_id"},{value:"show",label:"/show task_id"}];var o=gr.map(function(i){return{value:i.channelId,label:i.channelId+" - "+(i.remark||""),disabled:!i.enable||!i.running}});return(0,r.jsxs)(_.Z,{style:{marginBottom:"10px"},children:[(0,r.jsx)(Te.Z,{value:a?"swap":w,style:{width:150},onChange:Cr,options:e}),(0,r.jsx)(Te.Z,{value:$,style:{width:320},onChange:wr,options:o,allowClear:!0,placeholder:u.formatMessage({id:"pages.draw.selectAccount"})}),(0,r.jsx)(je.ZP.Group,{value:j,onChange:yr,options:[{value:"MID_JOURNEY",label:"Midjourney"},{value:"NIJI_JOURNEY",label:"niji\u30FBjourney"},{value:"FACE_SWAP",label:"FaceSwap"},{value:"VIDEO_FACE_SWAP",label:"Video\u30FBFaceSwap"}],optionType:"button"})]})};return(0,r.jsxs)(Sa._z,{children:[Ea,(0,r.jsx)(se.Z,{style:{marginBottom:"15px",overflow:"auto",height:"70vh"},loading:ka,id:"task-panel",children:Mr()}),(0,r.jsxs)(se.Z,{children:[Or(),Br()]}),(0,r.jsx)(Ia.Z,{title:_a,open:Ka,onCancel:xr,onOk:Pr,confirmLoading:cr,width:600,children:Lr()})]})},Aa=Pa}}]);