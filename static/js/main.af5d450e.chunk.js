(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=n(12),s=n(2),l=n(5),u=n(6),d=n(8),b=n(7),h=n(11),j=n.n(h),m=n(4),f=n(0),C={name:"",number:""},O=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(s.a)({},C),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState(Object(s.a)({},C))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:"name",children:["Name",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),p=function(t){var e=t.filteredContact,n=t.onDeleteContact;return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsx)("p",{children:a}),Object(f.jsx)("p",{children:c}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},v=function(t){var e=t.value,n=t.onChangeFilter;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"filter",children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,onChange:n})]})})},x=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.duplicateContactCheck=function(e){var n=e.name.toLowerCase(),a=t.state.contacts.find((function(t){return t.name.toLowerCase().includes(n)}));a?alert("".concat(a.name," is already in contacts")):t.addContact(e)},t.addContact=function(e){var n=Object(s.a)({id:j.a.generate()},e);t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))},t.formSubmitContacts=function(t){console.log(t)},t.onChangeFilter=function(e){t.setState({filter:e.target.value})},t.filterContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContact();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.duplicateContactCheck}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{onChangeFilter:this.onChangeFilter,value:t}),Object(f.jsx)(p,{filteredContact:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.af5d450e.chunk.js.map