(this.webpackJsonpnovistart=this.webpackJsonpnovistart||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),l=a.n(c),r=(a(22),a(5)),i=a(2);var s=function(e){var t=Object(n.useState)(e.edit?e.edit.value:""),a=Object(i.a)(t,2),c=a[0],l=a[1],r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current.focus()}));var s=function(e){l(e.target.value)},u=function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),title:c}),l("")};return o.a.createElement("form",{onSubmit:u,className:"todo-form"},e.edit?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{placeholder:"Update your item",value:c,onChange:s,name:"text",ref:r,className:"todo-input edit"}),o.a.createElement("button",{onClick:u,className:"btn add-task-btn btn-update"},"Update")):o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{placeholder:"Add a todo",value:c,onChange:s,name:"text",className:"todo-input",ref:r}),o.a.createElement("button",{onClick:u,className:"btn add-task-btn"},"+ Add task")))},u=function(e){var t=e.todos,a=e.completeTodo,c=e.removeTodo,l=e.updateTodo,r=Object(n.useState)({id:null,value:""}),u=Object(i.a)(r,2),m=u[0],d=u[1];return m.id?o.a.createElement(s,{edit:m,onSubmit:function(e){l(m.id,e),d({id:null,value:""})}}):t.map((function(e,t){return o.a.createElement("div",{className:e.completed?"todo-row complete":"todo-row",key:t},o.a.createElement("div",{key:e.id,onClick:function(){return a(e.id)}},o.a.createElement("button",{className:"btn-circle task-btn"},o.a.createElement("i",{className:"fa fa-circle-o"})),e.title.slice(0,23)),o.a.createElement("div",{className:"icons"},o.a.createElement("button",{className:"btn-edit task-btn",onClick:function(){return d({id:e.id,value:e.title})}},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("button",{className:"btn-delete task-btn",onClick:function(){return c(e.id)}},o.a.createElement("i",{className:"fa fa-trash-o"}))))}))},m=a(16),d=a.n(m);var f=function(){var e=JSON.parse(localStorage.getItem("tasks"))||[],t=Object(n.useState)(e),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){d.a.get("https://jsonplaceholder.typicode.com/todos?_limit=20").then((function(e){var t=e.data,a=localStorage.getItem("tasks");a?(console.log("Local storage is Not Empty = ".concat(a)),console.log("Local State is Not Empty = ".concat(c)),localStorage.setItem("tasks",JSON.stringify(c))):(console.log("Local storage is Empty"),localStorage.setItem("tasks",JSON.stringify(t)),l(t))}))}),[c]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"todo-header"},o.a.createElement("button",{className:"btn-navicon task-btn"},o.a.createElement("i",{className:"fa fa-navicon"})),o.a.createElement("h1",null,"Motiff To-do List")),o.a.createElement("div",{className:"todo-list-container"},o.a.createElement(u,{todos:c,completeTodo:function(e){var t=c.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));l(t)},removeTodo:function(e){var t=Object(r.a)(c).filter((function(t){return t.id!==e}));l(t)},updateTodo:function(e,t){t.title&&!/^\s*$/.test(t.title)&&l((function(a){return a.map((function(a){return a.id===e?t:a}))}))}}),o.a.createElement(s,{onSubmit:function(e){var t;if(e.title&&!/^\s*$/.test(e.title)){var a=[e].concat(Object(r.a)(c));l(a),(t=console).log.apply(t,Object(r.a)(c))}}})))};var p=function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement(f,null))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2d8f8c87.chunk.js.map