(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(t,e,a){t.exports={todoListHeader:"TodoListHeader_todoListHeader__2RNMM",todoListHeaderTitle:"TodoListHeader_todoListHeaderTitle__2AkYX",todoListNewTaskForm:"TodoListHeader_todoListNewTaskForm__1-UrT",error:"TodoListHeader_error__UPzlX"}},,function(t,e,a){t.exports={todoListTask:"TodoListTask_todoListTask__1_9cR",done:"TodoListTask_done__3WQ7n"}},function(t,e,a){t.exports={filterActive:"TodoListFooter_filterActive__2kImf"}},function(t,e,a){t.exports={Wrap:"TodoList_Wrap__2CKfj",todoList:"TodoList_todoList__33CCz","todoList-task":"TodoList_todoList-task__1RPKD",done:"TodoList_done__1Oq0q","filter-active":"TodoList_filter-active__Y8MuN",error:"TodoList_error__1r7Z6"}},,,function(t,e,a){t.exports={todoListTasks:"TodoListTasks_todoListTasks__yAmFh"}},function(t,e,a){t.exports={App:"App_App__cqxsi"}},,,function(t,e,a){t.exports=a(22)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),s=(a(21),a(1)),c=a(3),l=a(2),d=a(4),u=a(15),p=a(14),h=a(6),k=a(9),f=a.n(k),m=function(t){var e=JSON.stringify(t);localStorage.setItem("our-state",e)},v=a(5),T=a.n(v),g=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={error:!1,title:"",inputEmptyDisable:!1},a.onAddTaskClick=function(){var t=""!==a.state.title?a.state.title:a.setState({inputEmptyDisable:!0});a.state.title="",""===t?a.setState({error:!0}):(a.setState({error:!1}),a.props.addTask(t))},a.onAddText=function(t){a.setState({error:!1,title:t.currentTarget.value,inputEmptyDisable:!1})},a.onPressEnter=function(t){"Enter"===t.key&&alert("\u0442\u044b \u043a\u043b\u0430\u0446\u043d\u0443\u043b \u043f\u043e Enter")},a.render=function(){return o.a.createElement("div",{className:T.a.todoListHeader},o.a.createElement("h3",{className:T.a.todoListHeaderTitle},"What to Learn"),o.a.createElement("div",{className:T.a.todoListNewTaskForm},o.a.createElement("input",{onKeyPress:a.onPressEnter,onChange:a.onAddText,className:a.state.error?T.a.error:"",type:"text",placeholder:"New task name",value:a.state.title}),o.a.createElement("button",{onClick:a.onAddTaskClick,disabled:a.state.inputEmptyDisable},"Add")))},a}return Object(d.a)(e,t),e}(o.a.Component),_=a(7),C=a.n(_),E=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={editMode:!1},a.onIsDoneChanged=function(t){a.props.changeStatus(a.props.task.id,t.currentTarget.checked)},a.activatedEditMode=function(){a.setState({editMode:!0})},a.deactivatedEditMode=function(){a.setState({editMode:!0})},a.onTitleChanged=function(t){a.props.changeTitle(a.props.task.id,t.currentTarget.value)},a.clickForDel=function(){a.props.removeTask(a.props.task.id)},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props.task.isDone?C.a.todoListTask+""+C.a.done:C.a.todoListTask;return o.a.createElement("div",{className:t},o.a.createElement("input",{type:"checkbox",checked:this.props.task.isDone,onChange:this.onIsDoneChanged}),this.state.editMode?o.a.createElement("input",null):o.a.createElement("span",{onClick:this.activatedEditMode,autofocus:!0,onBlur:this.deactivatedEditMode,onChange:this.onTitleChanged},this.props.task.id," :",this.props.task.title,","),o.a.createElement("span",null," priority:",this.props.task.priority),o.a.createElement("span",null,o.a.createElement("button",{onClick:this.clickForDel},"Del")))}}]),e}(o.a.Component),b=a(12),L=a.n(b),A=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=a.props.tasks.map((function(t){return o.a.createElement(E,{key:t.id,task:t,removeTask:a.props.removeTask,changeStatus:a.props.changeStatus,changeTitle:a.props.changeTitle})}));return o.a.createElement("div",{className:L.a.todoListTasks},t)},a}return Object(d.a)(e,t),e}(o.a.Component),y=a(8),O=a.n(y),j=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={isHidden:!1},a.onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a.onClickIsHidden=function(){a.setState({isHidden:!1})},a.onClickIsShow=function(){a.setState({isHidden:!0})},a.render=function(){var t="All"===a.props.filterValue?O.a.filterActive:"",e="Completed"===a.props.filterValue?O.a.filterActive:"",n="Active"===a.props.filterValue?O.a.filterActive:"";return o.a.createElement("div",{className:"todoList-footer"},!a.state.isHidden&&o.a.createElement("div",null,o.a.createElement("button",{className:t,onClick:a.onAllFilterClick},"All"),o.a.createElement("button",{className:e,onClick:a.onCompletedFilterClick},"Completed"),o.a.createElement("button",{className:n,onClick:a.onActiveFilterClick},"Active")),!a.state.isHidden&&o.a.createElement("span",{onClick:a.onClickIsShow},"hide"),a.state.isHidden&&o.a.createElement("span",{onClick:a.onClickIsHidden},"show"))},a}return Object(d.a)(e,t),e}(o.a.Component),S=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).nextTaskId=0,a.state={tasks:[],filterValue:"All"},a.removeTask=function(t){var e=a.state.tasks.filter((function(e){return e.id!==t}));a.setState({tasks:e},(function(){return m(a.state)}))},a.addTask=function(t){var e={id:a.nextTaskId,title:t,isDone:!1,priority:"low"};a.nextTaskId++;var n=[].concat(Object(p.a)(a.state.tasks),[e]);a.setState({tasks:n},(function(){return m(a.state)}))},a.changeFilter=function(t){a.setState({filterValue:t},(function(){return m(a.state)}))},a.changeStatus=function(t,e){a.changeTask(t,{isDone:e})},a.changeTitle=function(t,e){a.changeTask(t,{title:e})},a.changeTask=function(t,e){var n=a.state.tasks.map((function(a){return a.id===t?Object(u.a)({},a,{},e):a}));a.setState({tasks:n},(function(){return m(a.state)}))},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=function(){var t={tasks:[],filterValue:"All"},e=localStorage.getItem("our-state");return null!==e&&(t=JSON.parse(e)),t}();this.setState(t)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:f.a.Wrap},o.a.createElement("div",{className:f.a.todoList},o.a.createElement(g,{addTask:this.addTask}),o.a.createElement(A,{removeTask:this.removeTask,changeTitle:this.changeTitle,changeStatus:this.changeStatus,tasks:this.state.tasks.filter((function(e){switch(t.state.filterValue){case"Active":return!e.isDone;case"Completed":return e.isDone;case"All":default:return!0}}))}),o.a.createElement(j,{filterValue:this.state.filterValue,changeFilter:this.changeFilter})))}}]),e}(o.a.Component),w=a(13),N=a.n(w),F=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return o.a.createElement("div",{className:N.a.App},o.a.createElement(S,null))},a}return Object(d.a)(e,t),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.c6a303a6.chunk.js.map