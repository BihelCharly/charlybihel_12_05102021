(this.webpackJsonpcharlybihel_12_05102021=this.webpackJsonpcharlybihel_12_05102021||[]).push([[0],{195:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},29:function(e,t){e.exports={USER_MAIN_DATA:[{id:12,userInfos:{firstName:"Karl",lastName:"Dovineau",age:31},todayScore:.12,keyData:{calorieCount:1930,proteinCount:155,carbohydrateCount:290,lipidCount:50}},{id:18,userInfos:{firstName:"Cecilia",lastName:"Ratorez",age:34},score:.3,keyData:{calorieCount:2500,proteinCount:90,carbohydrateCount:150,lipidCount:120}}],USER_ACTIVITY:[{userId:12,sessions:[{day:"2020-07-01",kilogram:80,calories:240},{day:"2020-07-02",kilogram:80,calories:220},{day:"2020-07-03",kilogram:81,calories:280},{day:"2020-07-04",kilogram:81,calories:290},{day:"2020-07-05",kilogram:80,calories:160},{day:"2020-07-06",kilogram:78,calories:162},{day:"2020-07-07",kilogram:76,calories:390}]},{userId:18,sessions:[{day:"2020-07-01",kilogram:70,calories:240},{day:"2020-07-02",kilogram:69,calories:220},{day:"2020-07-03",kilogram:70,calories:280},{day:"2020-07-04",kilogram:70,calories:500},{day:"2020-07-05",kilogram:69,calories:160},{day:"2020-07-06",kilogram:69,calories:162},{day:"2020-07-07",kilogram:69,calories:390}]}],USER_AVERAGE_SESSIONS:[{userId:12,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:23},{day:3,sessionLength:45},{day:4,sessionLength:50},{day:5,sessionLength:0},{day:6,sessionLength:0},{day:7,sessionLength:60}]},{userId:18,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:40},{day:3,sessionLength:50},{day:4,sessionLength:30},{day:5,sessionLength:30},{day:6,sessionLength:50},{day:7,sessionLength:50}]}],USER_PERFORMANCE:[{userId:12,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:80,kind:1},{value:120,kind:2},{value:140,kind:3},{value:50,kind:4},{value:200,kind:5},{value:90,kind:6}]},{userId:18,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:200,kind:1},{value:240,kind:2},{value:80,kind:3},{value:80,kind:4},{value:220,kind:5},{value:110,kind:6}]}]}},334:function(e,t,a){},335:function(e,t,a){},337:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),c=a(68),n=a.n(c),o=a(88),l=a(17),r=a.p+"static/media/logo.c9828dd8.svg",d=(a(195),a(2));var j=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{src:r,className:"Logo",alt:"SportSee",title:"Logo de SportSee"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/",className:"home",children:"Accueil"})}),Object(d.jsx)("li",{children:"Profil"}),Object(d.jsx)("li",{children:"R\xe9glage"}),Object(d.jsx)("li",{children:"Communaut\xe9"})]})})]})},h=(a(201),a.p+"static/media/yoga.6c31a277.svg"),u=a.p+"static/media/swim.e26dba43.svg",b=a.p+"static/media/cycle.d516c0e8.svg",g=a.p+"static/media/gym.4fe7fb9f.svg";function x(){return Object(d.jsxs)("aside",{className:"nav-left",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:h,className:"logo--yoga nav-logo",alt:"Yoga",title:"Logo Yoga"})}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("img",{src:u,className:"logo--Swim nav-logo",alt:"Swim",title:"Logo Swim"})]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("img",{src:b,className:"logo--Cycle nav-logo",alt:"Cycle",title:"Logo de Cycle"})]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)("img",{src:g,className:"logo--Gym nav-logo",alt:"Gym",title:"Logo de Gym"})]})]}),Object(d.jsx)("div",{className:"copiryght",children:Object(d.jsx)("p",{children:"Copiryght, SportSee 2020"})})]})}var m=a(343),O=a(344),p=a(348),f=a(95),y=a(96),v=a(77),k=a(74),S=a(178),N=a(29),C=a.n(N);a(202);function L(){var e=[];C.a.USER_ACTIVITY[0].sessions.forEach((function(t,a){var s={name:a+1,kg:3*t.kilogram,kCal:t.calories};e.push(s)}));return Object(d.jsx)(m.a,{width:"100%",height:"90%",children:Object(d.jsxs)(O.a,{barSize:8,data:e,margin:{top:50,right:50,left:40,bottom:45},children:[Object(d.jsx)("text",{x:"5%",y:"10%",fill:"black",fontSize:"15",children:"Activit\xe9 quotidienne"}),Object(d.jsx)(p.a,{vertical:!1,stroke:"#DEDEDE",strokeDasharray:"3 3"}),Object(d.jsx)(f.a,{allowDataOverflow:!0,dataKey:"name",tickSize:"0",tickMargin:"30",stroke:"#9B9EAC",padding:{left:-44,right:-44}}),Object(d.jsx)(y.a,{axisLine:!1,dataKey:"kCal",tickSize:"0",tickMargin:"50",stroke:"#9B9EAC",orientation:"right",domain:["dataMin - 100","dataMax "],padding:{top:30,bottom:0},tickFormatter:function(e){return"test".concat("%")}}),Object(d.jsx)(v.a,{content:function(e){var t=e.active,a=e.payload;return t&&a&&a.length?Object(d.jsxs)("div",{className:"barchart-tooltip",style:{paddingLeft:"8%"},children:[Object(d.jsx)("p",{className:"label",children:"".concat(a[1].value,"kg")}),Object(d.jsx)("p",{className:"label",children:"".concat(a[0].value,"kCal")})]}):null},isAnimationActive:!0}),Object(d.jsx)(k.a,{align:"right",verticalAlign:"top",iconType:"circle",iconSize:7,formatter:function(e){return Object(d.jsx)("span",{style:{color:"#74798C"},children:e})}}),Object(d.jsx)(S.a,{name:"Poids (kg)",dataKey:"kg",fill:"#282D30",radius:[5,5,0,0]}),Object(d.jsx)(S.a,{name:"Calories br\xfbl\xe9es (kCal)",dataKey:"kCal",fill:"red",radius:[5,5,0,0]})]})})}var A=a(349),E=a(179);a(334);function w(){var e=["L","M","M","J","V","S","D"],t=[];C.a.USER_AVERAGE_SESSIONS[0].sessions.forEach((function(a,s){var i={name:e[s++],day:a.day,sessionLength:a.sessionLength};t.push(i)}));return Object(d.jsxs)(A.a,{className:"sessions-length",width:270,height:270,data:t,margin:{top:40,right:15,left:15,bottom:60},interval:"preserveStartEnd",children:[Object(d.jsx)(k.a,{width:"70%",align:"left",verticalAlign:"top",iconSize:"0",formatter:function(){return Object(d.jsx)("span",{style:{color:"white",opacity:"60%"},children:"Dur\xe9e moyenne des sessions"})}}),Object(d.jsx)(f.a,{axisLine:!1,tickLine:!1,dataKey:"name",stroke:"white",tickMargin:"45",tick:{opacity:.6}}),Object(d.jsx)(v.a,{cursor:{strokeWidth:0},content:function(e){var t=e.active,a=e.payload;e.label;return t&&a&&a.length?Object(d.jsx)("div",{className:"linechart-tooltip",children:Object(d.jsx)("p",{className:"label",children:"".concat(a[0].value," mn")})}):null}}),Object(d.jsx)(E.a,{type:"natural",dataKey:"sessionLength",dot:!1,strokeWidth:2,stroke:"url(#gradient)"}),Object(d.jsx)("defs",{children:Object(d.jsxs)("linearGradient",{id:"gradient",children:[Object(d.jsx)("stop",{offset:"10%",stopColor:"white",stopOpacity:"0.4"}),Object(d.jsx)("stop",{offset:"30%",stopColor:"white",stopOpacity:"0.5"}),Object(d.jsx)("stop",{offset:"60%",stopColor:"white",stopOpacity:"0.7"}),Object(d.jsx)("stop",{offset:"80%",stopColor:"white",stopOpacity:"0.9"}),Object(d.jsx)("stop",{offset:"100%",stopColor:"white",stopOpacity:"1"})]})})]})}var R=a(350),I=a(351),_=a(98),D=a(99),M=a(180);a(335);function F(){var e=[],t=C.a.USER_PERFORMANCE[0].data,a=C.a.USER_PERFORMANCE[0].kind;return t.forEach((function(t,s){var i={activity:Object.values(a)[s++],kind:t.value,fullMark:150};e.push(i)})),Object(d.jsxs)(R.a,{className:"sessions-performances",outerRadius:85,width:270,height:270,data:e,cx:"50%",cy:"50%",children:[Object(d.jsx)(I.a,{stroke:"white",radialLines:!1}),Object(d.jsx)(_.a,{dataKey:"activity",stroke:"white",fontSize:"10",tickLine:!1}),Object(d.jsx)(D.a,{tick:!1,axisLine:!1}),Object(d.jsx)(M.a,{dataKey:"kind",stroke:"red",fill:"red",fillOpacity:.65})]})}var B=a(352),T=a(184),z=a(25),U=a(94);a(337);function K(){var e=100*C.a.USER_MAIN_DATA[0].todayScore,t=[{name:"Score",value:e},{name:"Total",value:100-e}],a=["red","#FBFBFB"];function s(e){var t=e.viewBox,a=e.value1,s=e.value2,i=t.cx,c=t.cy;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("text",{x:i,y:c-5,fill:"black",className:"recharts-text recharts-label",textAnchor:"middle",dominantBaseline:"central",children:Object(d.jsx)("tspan",{alignmentBaseline:"middle",fontSize:"35px",children:a})}),Object(d.jsx)("text",{x:i,y:c+20,fill:"#74798C",className:"recharts-text recharts-label",textAnchor:"middle",dominantBaseline:"central",children:Object(d.jsx)("tspan",{fontSize:"12.3px",children:s})})]})}return Object(d.jsxs)(B.a,{width:270,height:270,children:[Object(d.jsx)(k.a,{align:"left",verticalAlign:"top",content:function(){return Object(d.jsx)("p",{className:"piechart-legend",style:{paddingLeft:"8%"},children:t[0].name})}}),Object(d.jsx)("circle",{cx:"50%",cy:"51.6%",fill:"white",r:"33%"}),Object(d.jsxs)(T.a,{data:t,dataKey:"value",cx:"50%",cy:"40%",label:!1,cornerRadius:50,innerRadius:89,outerRadius:100,startAngle:90,endAngle:450,paddingAngle:0,stroke:"",children:[Object(d.jsx)(z.a,{position:"center",content:Object(d.jsx)(s,{value1:t[0].value+"%",value2:"de votre objectif"})}),t.map((function(e,t){return Object(d.jsx)(U.a,{fill:a[t%a.length]},"cell-".concat(t))}))]})]})}var P=a.p+"static/media/calories-icon.5db5a3af.svg",G=a.p+"static/media/protein-icon.c2859796.svg",V=a.p+"static/media/carbs-icon.aa0e7466.svg",Y=a.p+"static/media/fat-icon.82c6cb9f.svg";a(339);function J(){var e=Object.entries(C.a.USER_MAIN_DATA[0].keyData),t=[],a=["Calories","Proteines","Glucides","Lipides"],s=["",P,G,V,Y];return e.forEach((function(e,i){var c={name:a[i++],value:e[1],logo:s[i++]};t.push(c)})),Object(d.jsx)("div",{className:"nutrition-block",children:t.map((function(e,t){return Object(d.jsxs)("article",{className:"nutrition-article",children:[Object(d.jsx)("img",{src:e.logo,alt:e.name,title:"Logo "+e.name}),Object(d.jsx)("p",{children:e.value+"kCal"}),Object(d.jsx)("p",{children:e.name})]},t)}))})}a(340);function W(){return Object(d.jsxs)("main",{className:"dashboard",children:[Object(d.jsxs)("div",{className:"welcome-block",children:[Object(d.jsxs)("p",{className:"welcome-user",children:["Bonjour"," ",Object(d.jsx)("span",{className:"user--name",children:C.a.USER_MAIN_DATA[0].userInfos.firstName})]}),Object(d.jsx)("p",{className:"welcome-goals",children:"F\xe9licitation ! Vous avez explos\xe9 vos objectifs hier \ud83d\udc4f"})]}),Object(d.jsxs)("section",{className:"charts-block",children:[Object(d.jsx)(L,{}),Object(d.jsxs)("div",{className:"cards-block",children:[Object(d.jsx)(w,{}),Object(d.jsx)(F,{}),Object(d.jsx)(K,{})]}),Object(d.jsx)(J,{})]})]})}var q=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"404"})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,354)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),c(e),n(e)}))},Q=(a(341),function(){return Object(d.jsxs)(o.a,{basename:"/",children:[Object(d.jsx)(j,{}),Object(d.jsx)(x,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:W}),Object(d.jsx)(l.a,{path:"*",component:q}),Object(d.jsx)(l.a,{component:q})]})]})});n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root")),H()}},[[342,1,2]]]);
//# sourceMappingURL=main.8d75839f.chunk.js.map