import{r as g,s as n,T as i,b,j as t,a as e,B as I}from"./index.dc4468e6.js";var _=g.GenIcon,M=function(a){return _({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}}]})(a)},$=g.GenIcon,w=function(a){return $({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]})(a)},G=g.GenIcon,C=function(a){return G({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(a)};const E=n("section",{position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",gap:"$8"}),z=n("div",{borderRadius:"$1",boxShadow:"$default",maxWidth:"100%",display:"flex",margin:"0 auto",zIndex:99,background:"$backgroundLight",[`& ${i}`]:{color:"$textContrast"},"@bp2":{width:"fit-content"},"@bp3":{width:860}}),S=n("div",{display:"flex",flexDirection:"column",gap:"$6",flexGrow:1,padding:"$5",width:450,maxWidth:"100%","& form":{display:"flex",flexDirection:"column",gap:"$4","& input, textarea":{color:"$textConstrast",backgroundColor:"$backgroundLight",border:"1px solid $neutral",borderRadius:"$1",transition:"$default",padding:"$3",resize:"vertical"}},"@bp1":{padding:"$8"}}),V=n("div",{display:"none",alignSelf:"center",minWidth:350,padding:"$8",gap:"$6",borderLeft:"1px solid $neutral","@bp2":{display:"flex",flexDirection:"column"}}),h=n("div",{display:"flex",alignItems:"center",flexWrap:"nowrap",gap:"$4","& svg":{fontSize:"$m",color:"$primary"},"& div":{flexGrow:1}}),k=n("div",{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%) rotate(180deg)",margin:0,minWidth:960,width:"100vw",overflow:"hidden",lineHeight:0}),A=n("svg",{position:"relative",display:"block",width:"100%",height:120,transform:"rotateY(180deg)","& path":{fill:"$primary"}});var D={title:"Get In Touch!",form:{emailPlaceholder:"Enter your email",messagePlaceholder:"Message",button:"Send Message"},location:{label:"Location",description:"Leiria, Portugal, 2410-170"},phone:{label:"Phone Number",description:"+351 913 020 410"},email:{label:"Email Address",description:"miltonboosj@gmail.com"}};const T=l=>{const{title:a,form:d,location:m,phone:u,email:f}=D,[s,c]=b.exports.useState({email:"",message:""}),[x,v]=b.exports.useState(!1),{VITE_GOOGLE_FORM_MESSAGE_ID:L,VITE_GOOGLE_FORM_EMAIL_ID:O,VITE_GOOGLE_FORM_ACTION_URL:y}={VITE_GOOGLE_FORM_EMAIL_ID:"entry.1227060730",VITE_GOOGLE_FORM_MESSAGE_ID:"entry.145728746",VITE_GOOGLE_FORM_ACTION_URL:"https://docs.google.com/forms/u/1/d/e/1FAIpQLSeuXVWQOLt-9FkzUJG3OTxgAvY32DrCxkHfEMKXGZCUyVBKyg/formResponse",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};return t(E,{...l,children:[t(z,{children:[t(S,{children:[e(i,{weight:"bold",size:"l",children:a}),t("form",{onSubmit:r=>{r.preventDefault(),console.log("submiting...");const o=new FormData;o.append(L,s.message),o.append(O,s.email),v(!0),fetch(y,{method:"post",body:o}).then(p=>{console.log("res: ",p),alert("Message sent!")}).catch(p=>alert(p)).finally(()=>{c({email:"",message:""}),v(!1)})},children:[e("input",{type:"email",placeholder:d.emailPlaceholder,required:!0,value:s.email,onChange:r=>c(o=>({...o,email:r.target.value}))}),e("textarea",{required:!0,cols:30,rows:6,placeholder:d.messagePlaceholder,value:s.message,onChange:r=>c(o=>({...o,message:r.target.value}))}),e(I,{type:"submit",variant:"secondary",disabled:x,children:d.button})]})]}),t(V,{children:[t(h,{children:[e(M,{size:24}),t("div",{children:[e(i,{size:"m",weight:"bold",children:m.label}),e(i,{children:m.description})]})]}),t(h,{children:[e(w,{size:24}),t("div",{children:[e(i,{size:"m",weight:"bold",children:u.label}),e(i,{children:u.description})]})]}),t(h,{children:[e(C,{size:24}),t("div",{children:[e(i,{size:"m",weight:"bold",children:f.label}),e(i,{children:f.description})]})]})]})]}),e(k,{children:t(A,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[e("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25"}),e("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5"}),e("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"})]})})]})};export{T as default};