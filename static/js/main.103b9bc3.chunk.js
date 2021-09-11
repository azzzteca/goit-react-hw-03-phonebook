(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(4),i=n.n(r),o=(n(15),n(3)),s=n(5),l=n(6),d=n(9),u=n(8),b=n(20),j=n(0);function h(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{className:"section",children:[e&&Object(j.jsx)("h2",{children:e}),n]})}n(17);function m(t){var e=t.addContact;return Object(j.jsxs)("form",{onSubmit:e,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}n(18);function f(t){var e=t.info,n=t.filterContact;return e.contacts.length>2&&Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",onChange:n})]})}function p(t){var e=t.info,n=t.deleteContact,a=t.children,c=e.contacts,r=e.filter;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Contacts"}),a,Object(j.jsx)("ul",{children:r?c.filter((function(t){return t.name.toLowerCase().includes(r)})).map((function(t){return Object(j.jsxs)("li",{children:[t.name," ",t.number,Object(j.jsx)("button",{type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)})):c.map((function(t){return Object(j.jsxs)("li",{children:[t.name," ",t.number,Object(j.jsx)("button",{type:"button",id:t.id,onClick:n,children:"Delete"})]},Object(b.a)())}))})]})}var O=n(7),v=n.n(O),x=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(b.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(b.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(b.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(b.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){e.preventDefault();var n=t.state.contacts.find((function(t){return e.target.elements[0].value.toLowerCase()===t.name.toLowerCase()}));if(n)alert(n.name+"is alredy in contacts");else{var a={id:Object(b.a)(),name:e.target.elements.name.value,number:e.target.elements.number.value};t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[a])}}))}e.target.elements[0].value="",e.target.elements[1].value=""},t.handleFilterContact=function(e){e.preventDefault(),t.setState({filter:e.target.value.toLowerCase()})},t.handleDeleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e.target.id}));t.setState({contacts:Object(o.a)(n)})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:v.a.app,children:Object(j.jsxs)(h,{title:"Phonebook",children:[Object(j.jsx)(m,{addContact:this.handleAddContact}),Object(j.jsx)(p,{info:this.state,deleteContact:this.handleDeleteContact,children:Object(j.jsx)(f,{info:this.state,filterContact:this.handleFilterContact})})]})})}}]),n}(a.Component);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={app:"App_app__16lMO"}}},[[19,1,2]]]);
//# sourceMappingURL=main.103b9bc3.chunk.js.map