(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),t=n(1),o=n.n(t),c=n(3),s=n.n(c),r=(n(10),n(4));n(11),n(12);var m=function(e){var a=e.name,n=e.email,t=e.phone;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h1",{className:"name",children:a}),Object(i.jsx)("img",{alt:"Robots",src:"https://robohash.org/".concat(t,"?200*200")}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("h2",{children:n}),Object(i.jsx)("h2",{children:t})]})]})};n(13);var h=function(e){var a=e.robots;return Object(i.jsx)("div",{className:"CardList",children:a.map((function(e,a){return Object(i.jsx)(m,{name:e.name,email:e.email,phone:e.phone},a)}))})};var l=function(e){var a=e.searchChange;return Object(i.jsx)("input",{type:"search",placeholder:"Search RoboFriends.....",onChange:a})},d=[{name:"Jisan",email:"jisan.thecoder@gmail.com",phone:"+8801968475500"},{name:"Raha",email:"sonaliruh@gmail.com",phone:"+8801307122603"},{name:"Shara",email:"hossainshara19@gmail.com",phone:"+8801849116907"},{name:"Raihan",email:"zushitt@gmail.com",phone:"+8801711448568"},{name:"Sudipta",email:"sdptpddr@gmail.com",phone:"+8801998502617"},{name:"Arafat",email:"yasir@iut-dhaka.edu",phone:"+8801793691363"},{name:"Rafi",email:"fahimrafi7@gmail.com",phone:"+8801556334003"},{name:"Abdullah",email:"abdullah.mncorp@gmail.com",phone:"+8801531554110"},{name:"Minhaz",email:"md.akm98@gmail.com",phone:"+8801627970308"},{name:"Tonni",email:"tonnichowdhury2020@gmail.com",phone:"+8801635598540"},{name:"Wahid",email:"Ahmedwahidpro@gmail.com",phone:"+8801995392848"},{name:"Nafis",email:"nafisfuad185@gmail.com",phone:"+8801990979098"}];var j=function(){var e=Object(t.useState)(""),a=Object(r.a)(e,2),n=a[0],o=a[1],c=d.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())||e.phone.toLowerCase().includes(n.toLowerCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"title",children:"RoboFriends"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{searchChange:function(e){o(e.target.value)},className:"search"}),Object(i.jsx)("br",{}),Object(i.jsx)(h,{robots:c})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(a){var n=a.getCLS,i=a.getFID,t=a.getFCP,o=a.getLCP,c=a.getTTFB;n(e),i(e),t(e),o(e),c(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),u()}],[[14,1,2]]]);
//# sourceMappingURL=main.d5e39b94.chunk.js.map