(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{19:function(e,t,c){e.exports={header:"Header_header__egG_7",logo:"Header_logo__1hi0P",navbar:"Header_navbar__2hmuM",navItems:"Header_navItems__KbiDO",active:"Header_active__2hcz3",signin:"Header_signin__2Y56w"}},20:function(e,t,c){e.exports={FirstRow:"Movie_FirstRow__lD25q",logo:"Movie_logo__2q9Fo"}},24:function(e,t,c){e.exports={socialLinks:"_3z7Agd_cGOoFkSHayiLIWi",Links:"_2zHVEPmDn1jqI35RbblthT",logo:"HGMwsd8H-YMUiZRQfZ2ES",copyright:"pJ_1ZeZdAfStUm7I-ZoFr"}},45:function(e,t,c){e.exports={Form:"SigninForm_Form__2D6xw",submit:"SigninForm_submit__SkXnG"}},46:function(e,t,c){e.exports={Form:"SigninButton_Form__1qzLO",Signbutton:"SigninButton_Signbutton__2fPpj",Footer:"SigninButton_Footer__CADS-",submit:"SigninButton_submit__3ecPx"}},49:function(e,t,c){e.exports={card:"MovieList_card__1S724"}},59:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(14),r=c.n(a),i=c(19),j=c.n(i),o=c(6),l=c(64),d=c(67),h=c(69),b=c(45),x=c.n(b),m=c(0),O=function(e){return Object(m.jsxs)(h.a,{className:x.a.Form,children:[Object(m.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(h.a.Control,{type:"email",placeholder:"Enter email"}),Object(m.jsx)(h.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(m.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(m.jsx)(h.a.Control,{type:"password",placeholder:"Password"})}),Object(m.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(m.jsx)(h.a.Check,{type:"checkbox",label:"Remember me"})}),Object(m.jsxs)("p",{children:["New to MoviesLand? ",Object(m.jsx)("a",{href:"/NewUser",children:"Sign up now"}),"."]}),Object(m.jsx)(l.a,{className:x.a.submit,style:{backgroundColor:"var(--first-color)"},children:"Sign in"})," "]})},u=c(46),p=c.n(u),f=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),n=c[0],a=c[1];return Object(m.jsxs)("div",{className:p.a.Form,children:[Object(m.jsx)(l.a,{variant:"primary",onClick:function(){return a(!0)},className:p.a.Signbutton,style:{backgroundColor:"var(--first-color)"},children:"Sign In"}),Object(m.jsxs)(d.a,{show:n,onHide:function(){return a(!1)},animation:!1,children:[Object(m.jsx)(d.a.Header,{closeButton:!0,children:Object(m.jsx)(d.a.Title,{style:{color:"black"},children:"Sign in"})}),Object(m.jsx)(d.a.Body,{children:Object(m.jsx)(O,{})})]})]})},v=function(e){return Object(m.jsx)("div",{className:j.a.head,children:Object(m.jsx)("header",{className:j.a.header,children:Object(m.jsxs)("div",{className:j.a.navbar,children:[Object(m.jsxs)("a",{className:j.a.logo,href:"/",children:[Object(m.jsx)("span",{children:"Movies"})," ",Object(m.jsx)("span",{children:"Land"})]}),Object(m.jsx)("nav",{className:j.a.navItems,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:j.a.navLink,href:"#series",children:"Series"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#Movies",children:"Movies"})}),Object(m.jsx)("li",{className:j.a.navitem,children:Object(m.jsx)("a",{href:"#New&popler",children:"New & Populer"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#Movies",children:"My List"})})]})}),Object(m.jsx)(f,{})]})})})},w=c(7),g=c.n(w),N=c(12),_=function(e){return Object(m.jsx)("div",{className:"col",style:{padding:"20px"},children:Object(m.jsx)("h2",{children:e.heading})})},y=(c(21),c(49)),S=c.n(y),k=function(e){return Object(m.jsx)(m.Fragment,{children:e.moviesLand.map((function(e,t){return Object(m.jsxs)("div",{className:S.a.card,children:[Object(m.jsx)("a",{href:"/trailer",children:Object(m.jsx)("img",{src:e.Poster,alt:"Movie"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[e.Title,"(",e.Year,")"]})})]},t)}))})},M=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.omdbapi.com/?apikey=ae24d018&s=movie&y=2020",e.next=3,fetch("http://www.omdbapi.com/?apikey=ae24d018&s=movie&y=2020");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(m.jsx)(k,{moviesLand:c},c)},F=c(20),L=c.n(F),C=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),n=c[0],a=c[1],r=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.omdbapi.com/?apikey=ae24d018&s=series&Type=series",e.next=3,fetch("http://www.omdbapi.com/?apikey=ae24d018&s=series&Type=series");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(k,{moviesLand:n})})},I=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.omdbapi.com/?apikey=ae24d018&s=movie",e.next=3,fetch("http://www.omdbapi.com/?apikey=ae24d018&s=movie");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(k,{moviesLand:c})})},T=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.omdbapi.com/?apikey=ae24d018&s=movie&Y=2021&Type=movie",e.next=3,fetch("http://www.omdbapi.com/?apikey=ae24d018&s=movie&Y=2021&Type=movie");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{moviesLand:c}),";"]})},H=function(e){return Object(m.jsx)("div",{className:"col col-sm-2",children:Object(m.jsx)("input",{className:"form-control",placeholder:"Search Movie",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)}})})},R=c(65),P=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(o.a)(a,2),i=r[0],j=r[1],l=function(){var e=Object(N.a)(g.a.mark((function e(t){var c,s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=ae24d018"),e.next=3,fetch(c);case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,console.log(a),a.Search&&n(a.Search);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l(i)}),[i]),console.log(n),Object(m.jsx)(R.a,{children:Object(m.jsxs)("div",{className:"container-fluid movie-app",id:"Movies",children:[Object(m.jsxs)("div",{className:"row d-flex align-items-center mt-5 mb-5",id:"home",children:[Object(m.jsx)(_,{heading:Object(m.jsxs)("a",{className:L.a.logo,href:"#Movies",children:[Object(m.jsx)("span",{children:"Movies"})," ",Object(m.jsx)("span",{children:"Land"})]})}),Object(m.jsx)(H,{searchValue:i,setSearchValue:j})]}),Object(m.jsx)("div",{className:L.a.FirstRow,children:Object(m.jsx)(k,{moviesLand:c})}),Object(m.jsx)("div",{className:"row d-flex align-items-center mt-5 mb-5",children:Object(m.jsx)(_,{heading:"Trending Movies"})}),Object(m.jsx)("div",{className:L.a.FirstRow,children:Object(m.jsx)(T,{trending:c})}),Object(m.jsx)("div",{className:"row d-flex align-items-center mt-5 mb-5",children:Object(m.jsx)(_,{heading:"New Movies"})}),Object(m.jsx)("div",{className:L.a.FirstRow,children:Object(m.jsx)(M,{newMovies:c})}),Object(m.jsx)("div",{className:"row d-flex align-items-center mt-5 mb-5",id:"series",children:Object(m.jsx)(_,{heading:"Top Series"})}),Object(m.jsx)("div",{className:L.a.FirstRow,children:Object(m.jsx)(C,{series:c})}),Object(m.jsx)("div",{className:"row d-flex align-items-center mt-5 mb-5",id:"New&popler",children:Object(m.jsx)(_,{heading:"New & popler"})}),Object(m.jsx)("div",{className:L.a.FirstRow,children:Object(m.jsx)(I,{popular:c})})]})})},G=c(66),B=c(48),E=c(24),V=c.n(E),W=c(28),U=function(e){var t="",c="",s="",n="";return Object(m.jsx)("footer",{className:V.a.Footer,children:Object(m.jsxs)(R.a,{children:[Object(m.jsxs)(G.a,{className:V.a.socialLinks,children:[Object(m.jsxs)("a",{className:V.a.logo,href:"#Movies",children:[Object(m.jsx)("span",{children:"Movies"})," ",Object(m.jsx)("span",{children:"Land"})]}),Object(m.jsxs)(B.a,{sm:4,children:[Object(m.jsx)("a",{href:t,children:Object(m.jsx)(W.a,{})}),Object(m.jsx)("a",{href:s,children:Object(m.jsx)(W.c,{})}),Object(m.jsx)("a",{href:c,children:Object(m.jsx)(W.d,{})}),Object(m.jsx)("a",{href:n,children:Object(m.jsx)(W.b,{})})]})]}),Object(m.jsxs)(G.a,{className:V.a.Links,children:[Object(m.jsx)(B.a,{sm:4,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#about",children:"Investor Relations"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#about",children:"Investor Relations"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#services",children:"Privacy"})})]})}),Object(m.jsx)(B.a,{sm:4,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"Portfolio.html",children:"Help Center"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#about",children:"Cookie Preferences"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#services",children:"Legal Notices"})})]})}),Object(m.jsx)(B.a,{sm:4,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"Portfolio.html",children:"Account"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#about",children:"Ways to Watch"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#services",children:"Corporate Information"})})]})})]}),Object(m.jsx)(G.a,{className:V.a.copyright,children:Object(m.jsxs)("p",{children:["\xa9 2021 ",Object(m.jsx)("span",{children:"MovieLand"})," All Right Reserved"]})})]})})},A=c(68),D=c.p+"static/media/1.5a33a807.jpg",Y=c.p+"static/media/2.6d63a6e3.jpg",Z=c.p+"static/media/3.a7e59cc7.jpg",q=c.p+"static/media/4.352f382e.jpg",z=(c(59),function(e){return Object(m.jsx)("div",{id:"Home",children:Object(m.jsxs)(A.a,{children:[Object(m.jsxs)(A.a.Item,{interval:700,children:[Object(m.jsx)("img",{className:"d-block w-100",src:D,alt:"First slide"}),Object(m.jsxs)(A.a.Caption,{children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("a",{href:"#Movies",className:"getStart",children:"Get Started"})]})]}),Object(m.jsxs)(A.a.Item,{interval:700,children:[Object(m.jsx)("img",{className:"d-block w-100",src:Y,alt:"Third slide"}),Object(m.jsxs)(A.a.Caption,{children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("a",{href:"#Movies",className:"getStart",children:"Get Started"})]})]}),Object(m.jsxs)(A.a.Item,{interval:700,children:[Object(m.jsx)("img",{className:"d-block w-100",src:Z,alt:"Third slide"}),Object(m.jsxs)(A.a.Caption,{children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("a",{href:"#Movies",className:"getStart",children:"Get Started"})]})]}),Object(m.jsxs)(A.a.Item,{interval:700,children:[Object(m.jsx)("img",{className:"d-block w-100",src:q,alt:"Third slide"}),Object(m.jsxs)(A.a.Caption,{children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("a",{href:"#Movies",className:"getStart",children:"Get Started"})]})]})]})})}),J=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(v,{}),Object(m.jsx)(z,{}),Object(m.jsx)(P,{}),Object(m.jsx)(U,{})]})};c(61);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bb038b55.chunk.js.map