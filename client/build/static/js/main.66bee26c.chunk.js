(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=10},101:function(e,t,a){},163:function(e,t,a){e.exports=a.p+"static/media/Flat design illustration your design icons for online.5333b0e0.png"},164:function(e,t,a){e.exports=a(282)},174:function(e,t){e.exports={externals:{config:JSON.stringify({apiUrl:"http://localhost:3001/"})}}},186:function(e,t,a){},191:function(e,t,a){},193:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(97),s=a(11),o=a(30),A=Object(o.a)(),i=a(34),l=a(161),E=a(162),u={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},m={REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE",DELETE_REQUEST:"USERS_DELETE_REQUEST",DELETE_SUCCESS:"USERS_DELETE_SUCCESS",DELETE_FAILURE:"USERS_DELETE_FAILURE"},h={NEW_PROJECT_REQUEST:"PROJECTS_REQUEST",NEW_PROJECT_SUCCESS:"PROJECTS_SUCCESS",NEW_PROJECT_FAILURE:"PROJECTS_FAILURE",GETALL_REQUEST:"PROJECTS_GETALL_REQUEST",GETALL_SUCCESS:"PROJECTS_GETALL_SUCCESS",GETALL_FAILURE:"PROJECTS_GETALL_FAILURE",DELETE_REQUEST:"PROJECTS_DELETE_REQUEST",DELETE_SUCCESS:"PROJECTS_DELETE_SUCCESS",DELETE_FAILURE:"PROJECTS_DELETE_FAILURE"},d={NEW_TASK_REQUEST:"TASKS_REQUEST",NEW_TASK_SUCCESS:"TASKS_SUCCESS",NEW_TASK_FAILURE:"TASKS_FAILURE",GETALL_REQUEST:"TASKS_GETALL_REQUEST",GETALL_SUCCESS:"TASKS_GETALL_SUCCESS",GETALL_FAILURE:"TASKS_GETALL_FAILURE",DELETE_REQUEST:"TASKS_DELETE_REQUEST",DELETE_SUCCESS:"TASKS_DELETE_SUCCESS",DELETE_FAILURE:"TASKS_DELETE_FAILURE"},p=JSON.parse(localStorage.getItem("user")),f=p?{loggedIn:!0,user:p}:{};var S=a(29),g=a(3);var C=Object(i.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case m.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case m.LOGIN_FAILURE:case m.LOGOUT:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case m.REGISTER_REQUEST:return{registering:!0};case m.REGISTER_SUCCESS:case m.REGISTER_FAILURE:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.GETALL_REQUEST:return{loading:!0};case m.GETALL_SUCCESS:return{items:t.users};case m.GETALL_FAILURE:return{error:t.error};case m.DELETE_REQUEST:return Object(g.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(g.a)({},e,{deleting:!0}):e})});case m.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case m.DELETE_FAILURE:return Object(g.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var a=Object(S.a)(e,["deleting"]);return Object(g.a)({},a,{deleteError:t.error})}return e})});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.SUCCESS:return{type:"alert-success",message:t.message};case u.ERROR:return{type:"alert-danger",message:t.message};case u.CLEAR:return{};default:return e}},newProjectCreation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case h.NEW_PROJECT_REQUEST:return{creatingproject:!0};case h.NEW_PROJECT_SUCCESS:case h.NEW_PROJECT_FAILURE:return{};default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],loading:!1,error:"",deleting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.GETALL_REQUEST:return{loading:!0};case h.GETALL_SUCCESS:return Object(g.a)({},e,{items:t.projects});case h.GETALL_FAILURE:return{error:t.error};case h.DELETE_REQUEST:return Object(g.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(g.a)({},e,{deleting:!0}):e})});case h.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case h.DELETE_FAILURE:return Object(g.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var a=Object(S.a)(e,["deleting"]);return Object(g.a)({},a,{deleteError:t.error})}return e})});default:return e}},newTaskCreation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case d.NEW_TASK_REQUEST:return{creatingtask:!0};case d.NEW_TASK_SUCCESS:case d.NEW_TASK_FAILURE:return{};default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],loading:!1,error:"",deleting:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.GETALL_REQUEST:return{loading:!0};case d.GETALL_SUCCESS:return Object(g.a)({},e,{items:t.tasks});case d.GETALL_FAILURE:return{error:t.error};case d.DELETE_REQUEST:return Object(g.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(g.a)({},e,{deleting:!0}):e})});case d.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case d.DELETE_FAILURE:return Object(g.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var a=Object(S.a)(e,["deleting"]);return Object(g.a)({},a,{deleteError:t.error})}return e})});default:return e}}}),T=Object(E.createLogger)(),b=Object(i.d)(C,Object(i.a)(l.a,T));function L(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var j=a(16),R=a(17),U=a(19),O=a(18),v=a(20),I=a(286),N=a(284),k=(a(101),{success:function(e){return{type:u.SUCCESS,message:e}},error:function(e){return{type:u.ERROR,message:e}},clear:function(){return{type:u.CLEAR}}});a(174);var w={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("http://localhost:3001/users/authenticate",a).then(Q).then(function(e){return e.token&&localStorage.setItem("user",JSON.stringify(e)),e})},logout:_,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("http://localhost:3001/users/register",t).then(Q)},getAll:function(){var e={method:"GET",headers:L()};return fetch("http://localhost:3001/users",e).then(Q)},getById:function(e){var t={method:"GET",headers:L()};return fetch("http://localhost:3001/users/".concat(e),t).then(Q)},update:function(e){var t={method:"PUT",headers:Object(g.a)({},L(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("http://localhost:3001/users/".concat(e.id),t).then(Q)},delete:function(e){var t={method:"DELETE",headers:L()};return fetch("http://localhost:3001/users/".concat(e),t).then(Q)}};function _(){localStorage.removeItem("user")}function Q(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&_();var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})}a(175);var G={getAll:function(){return fetch(" https://infinite-escarpment-45010.herokuapp.com/createProject/",{method:"GET"}).then(D)},getById:function(e){return fetch(" https://infinite-escarpment-45010.herokuapp.com/projects/".concat(e),{method:"GET"}).then(D)},createProject:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(" https://infinite-escarpment-45010.herokuapp.com/createProject/createProject",t).then(D)},update:function(e){var t={method:"PUT",body:JSON.stringify(e)};return fetch(" https://infinite-escarpment-45010.herokuapp.com/projects/".concat(e.id),t).then(D)},delete:function(e){return fetch(" https://infinite-escarpment-45010.herokuapp.com/projects/".concat(e),{method:"DELETE"}).then(D)}};function D(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){e.status;var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})}var y={getAll:function(){return fetch(" https://infinite-escarpment-45010.herokuapp.com/createTask/",{method:"GET"}).then(P)},getById:function(e){return fetch(" https://infinite-escarpment-45010.herokuapp.com/tasks/".concat(e),{method:"GET"}).then(P)},createTask:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(" https://infinite-escarpment-45010.herokuapp.com/createTask/createTask",t).then(P)},update:function(e){var t={method:"PUT",body:JSON.stringify(e)};return fetch(" https://infinite-escarpment-45010.herokuapp.com/tasks/".concat(e.id),t).then(P)},delete:function(e){return fetch(" https://infinite-escarpment-45010.herokuapp.com/tasks/".concat(e),{method:"DELETE"}).then(P)}};function P(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){e.status;var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})}var M={login:function(e,t){return function(a){var n;a((n={username:e},{type:m.LOGIN_REQUEST,user:n})),w.login(e,t).then(function(e){a(function(e){return{type:m.LOGIN_SUCCESS,user:e}}(e)),A.push("/")},function(e){a(function(e){return{type:m.LOGIN_FAILURE,error:e}}(e.toString())),a(k.error(e.toString()))})}},logout:function(){return w.logout(),{type:m.LOGOUT}},register:function(e){return function(t){t(function(e){return{type:m.REGISTER_REQUEST,user:e}}(e)),w.register(e).then(function(e){t(function(e){return{type:m.REGISTER_SUCCESS,user:e}}()),A.push("/login"),t(k.success("Registration successful"))},function(e){t(function(e){return{type:m.REGISTER_FAILURE,error:e}}(e.toString())),t(k.error(e.toString()))})}},getAll:function(){return function(e){e({type:m.GETALL_REQUEST}),w.getAll().then(function(t){return e(function(e){return{type:m.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:m.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:m.DELETE_REQUEST,id:e}}(e)),w.delete(e).then(function(a){return t(function(e){return{type:m.DELETE_SUCCESS,id:e}}(e))},function(a){return t(function(e,t){return{type:m.DELETE_FAILURE,id:e,error:t}}(e,a.toString()))})}}};var F={createProject:function(e){return function(t){t(function(e){return{type:h.NEW_PROJECT_REQUEST,newProject:e}}(e)),console.log("newprojserv",G),G.createProject(e).then(function(e){t(function(e){return{type:h.NEW_PROJECT_SUCCESS,newProject:e}}()),A.push("/projectMap"),t(k.success("New Project successful"))},function(e){t(function(e){return{type:h.NEW_PROJECT_FAILURE,error:e}}(e.toString())),t(k.error(e.toString()))})}},getAll:function(){return function(e){e({type:h.GETALL_REQUEST}),G.getAll().then(function(t){return e(function(e){return{type:h.GETALL_SUCCESS,projects:e}}(t))},function(t){return e(function(e){return{type:h.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:h.DELETE_REQUEST,id:e}}(e)),G.delete(e).then(function(a){return t(function(e){return{type:h.DELETE_SUCCESS,id:e}}(e))},function(a){return t(function(e,t){return{type:h.DELETE_FAILURE,id:e,error:t}}(e,a.toString()))})}}};var J={createTask:function(e){return function(t){t(function(e){return{type:d.NEW_TASK_REQUEST,newTask:e}}(e)),console.log("newtaskserv",y),y.createTask(e).then(function(e){t(function(e){return{type:d.NEW_TASK_SUCCESS,newTask:e}}()),A.push("/newTask"),t(k.success("New Task successful"))},function(e){t(function(e){return{type:d.NEW_TASK_FAILURE,error:e}}(e.toString())),t(k.error(e.toString()))})}},getAll:function(){return function(e){e({type:d.GETALL_REQUEST}),y.getAll().then(function(t){return e(function(e){return{type:d.GETALL_SUCCESS,tasks:e}}(t))},function(t){return e(function(e){return{type:d.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:d.DELETE_REQUEST,id:e}}(e)),y.delete(e).then(function(a){return t(function(e){return{type:d.DELETE_SUCCESS,id:e}}(e))},function(a){return t(function(e,t){return{type:d.DELETE_FAILURE,id:e,error:t}}(e,a.toString()))})}}};var K=a(285),B=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(N.a,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(K.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Y=a(283),H=(a(186),a(163)),W=a.n(H),x=a(22),z=a.n(x),V={backgroundImage:"url(".concat(W.a,")"),backgroundSize:"cover",height:"100%"},Z=function(e){function t(){return Object(j.a)(this,t),Object(U.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(M.getAll())}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.dispatch(M.delete(e))}}},{key:"render",value:function(){var e=this.props,t=e.user;e.users;return r.a.createElement(z.a,{className:"HomePageClass"},r.a.createElement("section",{style:V},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 bakcolor"},r.a.createElement("h1",null,"Hi ",t.firstName,"!"),r.a.createElement("p",null,r.a.createElement(Y.a,{to:"/login"},"Logout")),r.a.createElement("p",null,r.a.createElement(Y.a,{to:"/projectMap"},"My Project")),r.a.createElement("p",null,r.a.createElement(Y.a,{to:"/project"},"Create new Project")))))}}]),t}(r.a.Component);var q=Object(s.b)(function(e){var t=e.users;return{user:e.authentication.user,users:t}})(Z),X=a(24),$=a(5),ee=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(U.a)(this,Object(O.a)(t).call(this,e))).props.dispatch(M.logout()),a.state={username:"",password:"",submitted:!1},a.handleChange=a.handleChange.bind(Object($.a)(Object($.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object($.a)(Object($.a)(a))),a}return Object(v.a)(t,e),Object(R.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(X.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.username,n=t.password,r=this.props.dispatch;a&&n&&r(M.login(a,n))}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.state,a=t.username,n=t.password,c=t.submitted;return r.a.createElement(z.a,{className:"loginPageClass"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron logback1 "},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(c&&!a?" has-error":"")},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a,onChange:this.handleChange}),c&&!a&&r.a.createElement("div",{className:"help-block"},"Username is required")),r.a.createElement("div",{className:"form-group"+(c&&!n?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:n,onChange:this.handleChange}),c&&!n&&r.a.createElement("div",{className:"help-block"},"Password is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Login"),e&&r.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r.a.createElement(Y.a,{to:"/register",className:"btn btn-link"},"Register"))))))}}]),t}(r.a.Component);var te=Object(s.b)(function(e){return{loggingIn:e.authentication.loggingIn}})(ee),ae=(a(191),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(U.a)(this,Object(O.a)(t).call(this,e))).state={user:{firstName:"",lastName:"",username:"",password:""},submitted:!1},a.handleChange=a.handleChange.bind(Object($.a)(Object($.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object($.a)(Object($.a)(a))),a}return Object(v.a)(t,e),Object(R.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.user;this.setState({user:Object(g.a)({},r,Object(X.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user,a=this.props.dispatch;t.firstName&&t.lastName&&t.username&&t.password&&a(M.register(t))}},{key:"render",value:function(){var e=this.props.registering,t=this.state,a=t.user,n=t.submitted;return r.a.createElement(z.a,{className:"registerPageClass"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Register"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(n&&!a.firstName?" has-error":"")},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"firstName",value:a.firstName,onChange:this.handleChange}),n&&!a.firstName&&r.a.createElement("div",{className:"help-block"},"First Name is required")),r.a.createElement("div",{className:"form-group"+(n&&!a.lastName?" has-error":"")},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"lastName",value:a.lastName,onChange:this.handleChange}),n&&!a.lastName&&r.a.createElement("div",{className:"help-block"},"Last Name is required")),r.a.createElement("div",{className:"form-group"+(n&&!a.username?" has-error":"")},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:this.handleChange}),n&&!a.username&&r.a.createElement("div",{className:"help-block"},"Username is required")),r.a.createElement("div",{className:"form-group"+(n&&!a.password?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:this.handleChange}),n&&!a.password&&r.a.createElement("div",{className:"help-block"},"Password is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Register"),e&&r.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r.a.createElement(Y.a,{to:"/login",className:"btn btn-link"},"Cancel")))))}}]),t}(r.a.Component));var ne=Object(s.b)(function(e){return{registering:e.registration.registering}})(ae),re=(a(193),a(195),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(U.a)(this,Object(O.a)(t).call(this,e))).state={newProject:{projectName:"",description:"",finishDate:""},submitted:!1},a.handleChange=a.handleChange.bind(Object($.a)(Object($.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object($.a)(Object($.a)(a))),a}return Object(v.a)(t,e),Object(R.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.newProject;this.setState({newProject:Object(g.a)({},r,Object(X.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.newProject,a=this.props.dispatch;console.log("new pro a",F),console.log("user act",M),t.projectName&&t.description&&t.finishDate&&a(F.createProject(t))}},{key:"render",value:function(){var e=this.props.creatingproject,t=this.state,a=t.newProject,n=t.submitted;return r.a.createElement(z.a,{className:"projectpageclass"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3 newprojectback1"},r.a.createElement("h2",null,"Start a Project"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(n&&!a.projectName?" has-error":"")},r.a.createElement("label",{htmlFor:"projectName"},"Project Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"projectName",value:a.projectName,onChange:this.handleChange}),n&&!a.projectName&&r.a.createElement("div",{className:"help-block"},"Project Name is required")),r.a.createElement("div",{className:"form-group"+(n&&!a.description?" has-error":"")},r.a.createElement("label",{htmlFor:"description"},"Project Description"),r.a.createElement("input",{type:"text",className:"form-control",name:"description",value:a.description,onChange:this.handleChange}),n&&!a.description&&r.a.createElement("div",{className:"help-block"},"Description is required")),r.a.createElement("div",{className:"form-group"+(n&&a.finishDate?" has-error":"")},r.a.createElement("label",{htmlFor:"finishDate"},"Estimated Completion Date"),r.a.createElement("input",{type:"date",className:"form-control",name:"finishDate",value:a.finishDate,onChange:this.handleChange}),n&&!a.finishDate&&r.a.createElement("div",{className:"help-block"},"Estimated Completion Date is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Start Project"),e&&r.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r.a.createElement(Y.a,{to:"/",className:"btn btn-link"},"Cancel")))))}}]),t}(r.a.Component));var ce=Object(s.b)(function(e){return{creatingproject:e.newProjectCreation.creatingproject}})(re),se=(a(252),a(276),a(278),function(e){function t(){return Object(j.a)(this,t),Object(U.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(F.getAll())}},{key:"handleDeleteproject",value:function(e){var t=this;return function(a){return t.props.dispatch(F.delete(e))}}},{key:"render",value:function(){var e=(this.props.createProject||[]).map(function(e){return r.a.createElement("tr",{id:"projectTable"},r.a.createElement(Y.a,{to:"/newTask"},"  ",r.a.createElement("td",{className:"a"},e.projectName),r.a.createElement("td",{className:"b"},e.description),r.a.createElement("td",{className:"e"}," ",e.finishDate),r.a.createElement("td",{className:"d"}," ",e.endDate)))}),t=this.props;t.user,t.users;return r.a.createElement(z.a,{className:"ProjectPageClass"},r.a.createElement("section",{id:"projectpage",className:"hideMe backlook"},r.a.createElement("p",{className:"Logoutback"},r.a.createElement("h1",{className:"left"},"Hi! Here are your current projects."),r.a.createElement(Y.a,{to:"/project"},"Add New Project"),r.a.createElement(Y.a,{to:"/login"},"Logout")),r.a.createElement("table",{id:"projectTable"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"a"},"Project Name"),r.a.createElement("th",{className:"b"},"Description"),r.a.createElement("th",{className:"e"},"Finish Date"),r.a.createElement("th",{className:"d"},"status"))),r.a.createElement("tbody",null,e))))}}]),t}(r.a.Component));var oe=Object(s.b)(function(e){return console.log("yo",e),e.createProject,{createProject:e.projects.items}})(se),Ae=(a(280),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(U.a)(this,Object(O.a)(t).call(this,e))).state={newTask:{projectTask:""},submitted:!1},a.handleChange=a.handleChange.bind(Object($.a)(Object($.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object($.a)(Object($.a)(a))),a}return Object(v.a)(t,e),Object(R.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.newTask;this.setState({newTask:Object(g.a)({},r,Object(X.a)({},a,n))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.newTask,a=this.props.dispatch;console.log("new pro a",J),console.log("user act",M),t.projectTask&&a(J.createTask(t))}},{key:"componentDidMount",value:function(){this.props.dispatch(J.getAll())}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.dispatch(J.delete(e))}}},{key:"render",value:function(){var e=this,t=this.props.creatingtask,a=this.state,n=a.newTask,c=a.submitted,s=(this.props.createTask||[]).map(function(t){return r.a.createElement("tr",{className:"tr_newtask",onClick:e.onOpenModal},r.a.createElement("td",null,t.projectTask),r.a.createElement("td",null,t.createdDate))});return r.a.createElement(z.a,{className:"taskPageClass"},r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Add a Task"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(c&&!n.projectTask?" has-error":"")},r.a.createElement("label",{htmlFor:"projectTask"},"Task Description"),r.a.createElement("input",{type:"text",className:"form-control",name:"projectTask",value:n.projectTask,onChange:this.handleChange}),c&&!n.projectTask&&r.a.createElement("div",{className:"help-block"},"A Project Task is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Add Task"),t&&r.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r.a.createElement(Y.a,{to:"/",className:"btn btn-link"},"Cancel")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"New Task"),r.a.createElement("div",null,this.state.isShowing?r.a.createElement("div",{onClick:this.closeModalHandler,className:"back-drop"}):null),r.a.createElement("table",{id:"taskTable-new"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"a"},"Task Description"),r.a.createElement("th",{className:"b"},"Created On"))),r.a.createElement("tbody",null,s))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"In Progress"),r.a.createElement("table",{id:"taskTable-inProgress"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"a"},"Task Description"),r.a.createElement("th",{className:"b"},"Created On"))),r.a.createElement("tbody",null))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,"Completed"),r.a.createElement("table",{id:"taskTable-Complete"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"a"},"Task Description"),r.a.createElement("th",{className:"b"},"Created On"))),r.a.createElement("tbody",null)))))}}]),t}(r.a.Component));var ie=Object(s.b)(function(e){var t=e.newTaskCreation.creatingtask;return e.createTask,{creatingtask:t,createTask:e.tasks.items}})(Ae),le=function(e){function t(e){var a;Object(j.a)(this,t);var n=(a=Object(U.a)(this,Object(O.a)(t).call(this,e))).props.dispatch;return A.listen(function(e,t){n(k.clear())}),a}return Object(v.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement("div",{className:"jumbotron jumboton_back"},r.a.createElement("div",{className:"container container_back"},r.a.createElement("div",{className:"col-sm-8 col-sm-offset-2"},e.message&&r.a.createElement("div",{className:"alert ".concat(e.type)},e.message),r.a.createElement(I.a,{history:A},r.a.createElement("div",null,r.a.createElement(B,{exact:!0,path:"/",component:q}),r.a.createElement(N.a,{path:"/login",component:te}),r.a.createElement(N.a,{path:"/register",component:ne}),r.a.createElement(N.a,{path:"/projectMap",component:oe}),r.a.createElement(N.a,{path:"/project",component:ce}),r.a.createElement(N.a,{path:"/newTask",component:ie}))))),r.a.createElement("div",{className:"backimg"}))}}]),t}(r.a.Component);var Ee=Object(s.b)(function(e){return{alert:e.alert}})(le);Object(c.render)(r.a.createElement(s.a,{store:b},r.a.createElement(Ee,null)),document.getElementById("app"))}},[[164,2,1]]]);
//# sourceMappingURL=main.66bee26c.chunk.js.map