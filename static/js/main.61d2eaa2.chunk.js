(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,c){e.exports={container:"Statistic_container__XK-bU",title:"Statistic_title__1Zf6K",text:"Statistic_text__28DsG"}},,,,function(e,t,c){e.exports={container:"SectionTitle_container__18xT2",title:"SectionTitle_title__3LDYZ"}},,function(e,t,c){e.exports={container:"Options_container__3CYQf",btn:"Options_btn__1d6cM"}},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(6),i=c.n(a),r=(c(12),c(13),c(5)),j=c.n(r),o=c(0);var l=function(e){var t=e.children;return Object(o.jsxs)("div",{className:j.a.container,children:[Object(o.jsx)("h1",{className:j.a.title,children:"Please leave feedback "}),t]})},b=c(3),d=c(7),x=c.n(d);var u=function(e){var t=e.options,c=e.onBtnClick;return Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return c(e)},children:e})}))})};var O=function(){return Object(o.jsx)("p",{children:"No feedback given"})},h=c(1),p=c.n(h);function f(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(b.a)(a,2),r=i[0],j=i[1],l=Object(n.useState)(0),d=Object(b.a)(l,2),x=d[0],h=d[1],f=Object.keys({good:c,neutral:r,bad:x}),_=function(){return c+r+x};return Object(o.jsxs)("div",{className:p.a.container,children:[Object(o.jsx)(u,{options:f,onBtnClick:function(e){switch(e){case"good":s((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":h((function(e){return e+1}))}}}),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h2",{className:p.a.title,children:"Statistic"})}),0===_()?Object(o.jsx)(O,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{className:p.a.text,children:[Object(o.jsx)("span",{className:p.a.score,children:"Good:"}),Object(o.jsx)("span",{children:c})]}),Object(o.jsxs)("p",{className:p.a.text,children:[Object(o.jsx)("span",{className:p.a.score,children:"Neutral:"}),Object(o.jsx)("span",{children:r})]}),Object(o.jsxs)("p",{className:p.a.text,children:[Object(o.jsx)("span",{className:p.a.score,children:"Bad:"}),Object(o.jsx)("span",{children:x})]}),Object(o.jsxs)("p",{className:p.a.text,children:[Object(o.jsx)("span",{className:p.a.score,children:"Total:"}),Object(o.jsx)("span",{children:_()})]}),Object(o.jsxs)("p",{className:p.a.text,children:[Object(o.jsx)("span",{className:p.a.score,children:"Positive feedback: "}),Object(o.jsxs)("span",{children:[(c/_()*100).toFixed(),"%"]})]})]})]})}function _(){return Object(o.jsx)("div",{children:Object(o.jsx)(l,{children:Object(o.jsx)(f,{})})})}i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.61d2eaa2.chunk.js.map