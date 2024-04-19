"use strict";(self.webpackChunkchat2db=self.webpackChunkchat2db||[]).push([[5081],{75081:function(k,j,l){l.d(j,{Z:function(){return Y}});var o=l(67294),L=l(94184),v=l.n(L),X=l(10366);function G(t,i,e){var n=e||{},a=n.noTrailing,c=a===void 0?!1:a,u=n.noLeading,S=u===void 0?!1:u,C=n.debounceMode,m=C===void 0?void 0:C,r,$=!1,d=0;function E(){r&&clearTimeout(r)}function p(f){var h=f||{},s=h.upcomingOnly,y=s===void 0?!1:s;E(),$=!y}function b(){for(var f=arguments.length,h=new Array(f),s=0;s<f;s++)h[s]=arguments[s];var y=this,w=Date.now()-d;if($)return;function g(){d=Date.now(),i.apply(y,h)}function I(){r=void 0}!S&&m&&!r&&g(),E(),m===void 0&&w>t?S?(d=Date.now(),c||(r=setTimeout(m?I:g,t))):g():c!==!0&&(r=setTimeout(m?I:g,m===void 0?t-w:t))}return b.cancel=p,b}function B(t,i,e){var n=e||{},a=n.atBegin,c=a===void 0?!1:a;return G(t,i,{debounceMode:c!==!1})}var x=l(96159),O=l(53124),T=l(7693),H=l(14747),q=l(91945),A=l(45503);const F=new T.E4("antSpinMove",{to:{opacity:1}}),R=new T.E4("antRotate",{to:{transform:"rotate(405deg)"}}),W=t=>{const{componentCls:i,calc:e}=t;return{[`${i}`]:Object.assign(Object.assign({},(0,H.Wf)(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${i}-text`]:{fontSize:t.fontSize,paddingTop:e(e(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:t.colorBgMask,zIndex:t.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",pointerEvents:"none",opacity:0,visibility:"hidden",transition:`all ${t.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${i}-dot ${i}-dot-item`]:{backgroundColor:t.colorWhite},[`${i}-text`]:{color:t.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${i}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${i}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:e(t.dotSize).mul(-1).div(2).equal()},[`${i}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${t.colorBgContainer}`},[`&${i}-show-text ${i}-dot`]:{marginTop:e(t.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${i}-dot`]:{margin:e(t.dotSizeSM).mul(-1).div(2).equal()},[`${i}-text`]:{paddingTop:e(e(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()},[`&${i}-show-text ${i}-dot`]:{marginTop:e(t.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${i}-dot`]:{margin:e(t.dotSizeLG).mul(-1).div(2).equal()},[`${i}-text`]:{paddingTop:e(e(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()},[`&${i}-show-text ${i}-dot`]:{marginTop:e(t.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${i}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${i}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none",["&::after"]:{opacity:.4,pointerEvents:"auto"}}},["&-tip"]:{color:t.spinDotDefault},[`${i}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:e(t.dotSize).sub(e(t.marginXXS).div(2)).div(2).equal(),height:e(t.dotSize).sub(e(t.marginXXS).div(2)).div(2).equal(),backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:F,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:R,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${i}-dot`]:{fontSize:t.dotSizeSM,i:{width:e(e(t.dotSizeSM).sub(e(t.marginXXS).div(2))).div(2).equal(),height:e(e(t.dotSizeSM).sub(e(t.marginXXS).div(2))).div(2).equal()}},[`&-lg ${i}-dot`]:{fontSize:t.dotSizeLG,i:{width:e(e(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),height:e(e(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()}},[`&${i}-show-text ${i}-text`]:{display:"block"}})}},Z=t=>{const{controlHeightLG:i,controlHeight:e}=t;return{contentHeight:400,dotSize:i/2,dotSizeSM:i*.35,dotSizeLG:e}};var V=(0,q.I$)("Spin",t=>{const i=(0,A.TS)(t,{spinDotDefault:t.colorTextDescription});return[W(i)]},Z),J=function(t,i){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)i.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(e[n[a]]=t[n[a]]);return e};const _=null;let N=null;function K(t,i){const{indicator:e}=i,n=`${t}-dot`;return e===null?null:(0,x.l$)(e)?(0,x.Tm)(e,{className:v()(e.props.className,n)}):(0,x.l$)(N)?(0,x.Tm)(N,{className:v()(N.props.className,n)}):o.createElement("span",{className:v()(n,`${t}-dot-spin`)},o.createElement("i",{className:`${t}-dot-item`,key:1}),o.createElement("i",{className:`${t}-dot-item`,key:2}),o.createElement("i",{className:`${t}-dot-item`,key:3}),o.createElement("i",{className:`${t}-dot-item`,key:4}))}function Q(t,i){return!!t&&!!i&&!isNaN(Number(i))}const U=t=>{const{spinPrefixCls:i,spinning:e=!0,delay:n=0,className:a,rootClassName:c,size:u="default",tip:S,wrapperClassName:C,style:m,children:r,hashId:$,fullscreen:d}=t,E=J(t,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId","fullscreen"]),[p,b]=o.useState(()=>e&&!Q(e,n));o.useEffect(()=>{if(e){const z=B(n,()=>{b(!0)});return z(),()=>{var D;(D=z==null?void 0:z.cancel)===null||D===void 0||D.call(z)}}b(!1)},[n,e]);const f=o.useMemo(()=>typeof r!="undefined"&&!d,[r,d]),{direction:h,spin:s}=o.useContext(O.E_),y=v()(i,s==null?void 0:s.className,{[`${i}-sm`]:u==="small",[`${i}-lg`]:u==="large",[`${i}-spinning`]:p,[`${i}-show-text`]:!!S,[`${i}-fullscreen`]:d,[`${i}-fullscreen-show`]:d&&p,[`${i}-rtl`]:h==="rtl"},a,c,$),w=v()(`${i}-container`,{[`${i}-blur`]:p}),g=(0,X.Z)(E,["indicator","prefixCls"]),I=Object.assign(Object.assign({},s==null?void 0:s.style),m),P=o.createElement("div",Object.assign({},g,{style:I,className:y,"aria-live":"polite","aria-busy":p}),K(i,t),S&&(f||d)?o.createElement("div",{className:`${i}-text`},S):null);return f?o.createElement("div",Object.assign({},g,{className:v()(`${i}-nested-loading`,C,$)}),p&&o.createElement("div",{key:"loading"},P),o.createElement("div",{className:w,key:"container"},r)):P},M=t=>{const{prefixCls:i}=t,{getPrefixCls:e}=o.useContext(O.E_),n=e("spin",i),[a,c]=V(n),u=Object.assign(Object.assign({},t),{spinPrefixCls:n,hashId:c});return a(o.createElement(U,Object.assign({},u)))};M.setDefaultIndicator=t=>{N=t};var Y=M}}]);
