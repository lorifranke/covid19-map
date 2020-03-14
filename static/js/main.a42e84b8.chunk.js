(this["webpackJsonpcovid19-map"]=this["webpackJsonpcovid19-map"]||[]).push([[0],{34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),o=a.n(l),s=(a(39),a(40),a(31)),c=a(23),i=a(24),m=a(32),d=a(25),u=a(33),f=a(9),h=a(15),p=a.n(h),v=[],E=[],y=[],b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={setTooltipContent:e.setTooltipContent},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",{download:!0,complete:function(t){e.confirmed=[];var a=!0,r=67786,n=!0,l=!1,o=void 0;try{for(var s,c=t.data[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var i=s.value;if(a)a=!1;else{for(var m="",d=i.length-1;""===m&&d>0;)m=i[d],d-=1;""===m&&(m=0),(m=Number(m))>r&&(r=m);var u={markerOffset:0,name:i[0]?i[0]+", "+i[1]:i[1],coordinates:[i[3],i[2]],size:m};v.push(u)}}}catch(h){l=!0,o=h}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}console.log(r);for(var f=0;f<v.length;f++)v[f].size=Math.sqrt(v[f].size-0)/Math.sqrt(r-0);e.setState({})}}),p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv",{download:!0,complete:function(t){e.recovered=[];var a=!0,r=67786,n=!0,l=!1,o=void 0;try{for(var s,c=t.data[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var i=s.value;if(a)a=!1;else{for(var m="",d=i.length-1;""===m&&d>0;)m=i[d],d-=1;""===m&&(m=0),(m=Number(m))>r&&(r=m);var u={markerOffset:0,name:i[0]?i[0]+", "+i[1]:i[1],coordinates:[i[3],i[2]],size:m};E.push(u)}}}catch(h){l=!0,o=h}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}for(var f=0;f<E.length;f++)E[f].size=Math.sqrt(E[f].size-0)/Math.sqrt(r-0);e.setState({})}}),p.a.parse("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",{download:!0,complete:function(t){e.deaths=[];var a=!0,r=67786,n=!0,l=!1,o=void 0;try{for(var s,c=t.data[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var i=s.value;if(a)a=!1;else{for(var m="",d=i.length-1;""===m&&d>0;)m=i[d],d-=1;""===m&&(m=0),(m=Number(m))>r&&(r=m);var u={markerOffset:0,name:i[0]?i[0]+", "+i[1]:i[1],coordinates:[i[3],i[2]],size:m};y.push(u)}}}catch(h){l=!0,o=h}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}for(var f=0;f<y.length;f++)y[f].size=Math.sqrt(y[f].size-0)/Math.sqrt(r-0);e.setState({})}})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.ComposableMap,{projection:"geoMercator",height:window.innerWidth,width:window.innerHeight-50,style:{width:"100%",height:"100%"}},n.a.createElement(f.ZoomableGroup,{zoom:1,maxZoom:1e3},n.a.createElement(f.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-10m.json"},(function(t){return t.geographies.map((function(t){return n.a.createElement(f.Geography,{key:t.rsmKey,geography:t,onMouseEnter:function(){var a,r=t.properties,n=r.NAME,l=r.POP_EST;"Antarctica"!==n&&e.state.setTooltipContent("".concat(n," \u2014 ").concat((a=l)>1e9?Math.round(a/1e8)/10+"Bn":a>1e6?Math.round(a/1e5)/10+"M":Math.round(a/100)/10+"K"))},onMouseLeave:function(){e.state.setTooltipContent("")},style:{default:{fill:"#ddd",outline:"none"},hover:{fill:"#999",outline:"none"},pressed:{fill:"#ddd",outline:"none"}}})}))})),v.map((function(e){var t=e.name,a=e.coordinates,r=e.markerOffset,l=e.size;return n.a.createElement(f.Marker,{coordinates:a},n.a.createElement("circle",{r:10*l,fill:"#F008",style:{hover:{fill:"#F00"}}}),n.a.createElement("title",null,t),n.a.createElement("text",{textAnchor:"middle",y:r,style:{fontSize:"2px",fontFamily:"system-ui",fill:"#5D5A6D"}}))})),E.map((function(e){var t=e.name,a=e.coordinates,r=e.markerOffset,l=e.size;return n.a.createElement(f.Marker,{coordinates:a},n.a.createElement("circle",{r:10*l,fill:"#0F08",style:{hover:{fill:"#0F0"}}}),n.a.createElement("title",null,t),n.a.createElement("text",{textAnchor:"middle",y:r,style:{fontSize:"2px",fontFamily:"system-ui",fill:"#5D5A6D"}}))})),y.map((function(e){var t=e.name,a=e.coordinates,r=e.markerOffset,l=e.size;return n.a.createElement(f.Marker,{coordinates:a},n.a.createElement("circle",{r:5*l,fill:"#0008",style:{hover:{fill:"#000"}}}),n.a.createElement("title",null,t),n.a.createElement("text",{textAnchor:"middle",y:r,style:{fontSize:"2px",fontFamily:"system-ui",fill:"#5D5A6D"}}))})))))}}]),t}(n.a.Component),g=Object(r.memo)(b),_=a(26),S=a(28),w=a(29),x=a(30),D=a(11),k=a(18),M=a(16),O=a(17);var z=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return[n.a.createElement(D.a,{bg:"light",fixed:"top",className:"p-0 pl-2",expand:"lg"},n.a.createElement(D.a.Brand,null,n.a.createElement(M.a,{icon:O.c}),n.a.createElement("span",{className:"small"}," COVID19 ")),n.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"border-0 "}),n.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement("span",{className:"small text-danger"},"Map data responsibly!"),n.a.createElement(k.a,{className:"mr-auto"},n.a.createElement(k.a.Link,{className:"small",href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"},n.a.createElement(M.a,{icon:O.b})," Data source"),n.a.createElement(k.a.Link,{className:"small",href:"https://github.com/daniel-karl/covid19-map"},n.a.createElement(M.a,{icon:O.a})," Source code")))),n.a.createElement(S.a,{fluid:!0,className:"w-100 h-100 p-0"},n.a.createElement(w.a,{noGutters:"true",className:"h-100"},n.a.createElement(x.a,{className:"h-100"},n.a.createElement(g,{setTooltipContent:l,style:{marginTop:"50px"}}),n.a.createElement(_.a,null,a)))),n.a.createElement("div",{class:"info small text-muted"},n.a.createElement("span",{class:"text-danger"},"Red: confirmed"),n.a.createElement("br",null),n.a.createElement("span",{class:"text-success"},"Green: recovered"),n.a.createElement("br",null),n.a.createElement("span",{class:"text-dark"},"Black: deceased"),n.a.createElement("br",null),n.a.createElement("sub",null,"Using live data from John Hopkins repository.",n.a.createElement("br",null),"Last synchronized on:",n.a.createElement("br",null),(new Date).toLocaleDateString(),n.a.createElement("br",null),(new Date).toLocaleTimeString()))]};o.a.render(n.a.createElement(z,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a42e84b8.chunk.js.map