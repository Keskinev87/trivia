(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/empty.aa4125d9.svg"},21:function(e,a,t){e.exports=t.p+"static/media/boy1.16ed2e05.svg"},22:function(e,a,t){e.exports=t.p+"static/media/boy2.1fac4474.svg"},23:function(e,a,t){e.exports=t.p+"static/media/boy3.4b8aec94.svg"},24:function(e,a,t){e.exports=t.p+"static/media/boy4.fd5ad395.svg"},25:function(e,a,t){e.exports=t.p+"static/media/girl1.77c17ebe.svg"},26:function(e,a,t){e.exports=t.p+"static/media/girl2.05259861.svg"},27:function(e,a,t){e.exports=t.p+"static/media/girl3.5def5f67.svg"},28:function(e,a,t){e.exports=t.p+"static/media/girl4.5580008b.svg"},54:function(e,a,t){e.exports=t.p+"static/media/cupGold.6347c36c.svg"},55:function(e,a,t){e.exports=t.p+"static/media/cupSilver.02942480.svg"},56:function(e,a,t){e.exports=t.p+"static/media/cupBronze.68f6fe6c.svg"},57:function(e,a,t){e.exports=t.p+"static/media/cloudRainIcon.b678b658.svg"},58:function(e,a,t){e.exports=t(98)},63:function(e,a,t){},64:function(e,a,t){},95:function(e,a){},98:function(e,a,t){"use strict";t.r(a);var n,r,s,o=t(0),c=t.n(o),i=t(20),l=t.n(i),u=(t(63),t(3)),m=t(4),p=t(7),E=t(5),d=t(6),g=(t(64),t(2)),N=t(1);!function(e){e.CHANGE_INTENT="CHANGE_INTENT",e.TRY_LOGIN="TRY_LOGIN",e.LOGIN_SUCCESS="LOGIN_SUCCESS",e.LOGIN_FAILED="LOGIN_FAILED",e.LOGOUT="LOGOUT",e.TRY_SIGNUP="TRY_SIGNUP",e.SIGNUP_SUCCESS="SIGNUP_SUCCESS",e.SIGNUP_FAILED="SIGNUP_FAILED",e.FRIEND_IS_ONLINE="FRIEND_IS_ONLINE",e.FRIEND_IS_OFFLINE="FRIEND_IS_OFFLINE",e.SEARCHING_FOR_GAME="SEARCHING_FOR_GAME",e.START_RANDOM_GAME="START_RANDOM_GAME",e.EXIT_GAME="EXIT_GAME",e.TRY_JOIN_RANDOM_ROOM="",e.CANCEL_JOIN_RANDOM_ROOM="",e.JOIN_RANDOM_ROOM_SUCCESS="",e.JOIN_RANDOM_ROOM_FAIL=""}(n||(n={})),function(e){e.IDLE="IDLE",e.CHALLENGED="CHALLENGED",e.PLAYING="PLAYING",e.SEARCHING_FOR_RANDOM_GAME="SEARCHING_FOR_RANDOM_GAME",e.WAITING="WAITING",e.OFFLINE="OFFLINE",e.RECONNECTING="RECONNECTING"}(r||(r={})),function(e){e.LOGIN="LOGIN",e.SIGNUP="SIGNUP"}(s||(s={}));var v={user:void 0,intent:s.LOGIN,signupData:{email:"",password:"",nickName:"",avatar:"empty"},loginData:{email:"",password:""},token:void 0,status:r.IDLE,challengeRoomId:void 0,isLoading:!1,isError:!1,error:"",email:"",password:""};var S,A,O=function(e){return c.a.createElement("button",{onClick:e.onClick},e.btnName)},h=t(29),I=t.n(h);!function(e){e.REQUEST_RANDOM_GAME_SEARCH="REQUEST_RANDOM_GAME_SEARCH",e.CANCEL_RANDOM_GAME_SEARCH="CANCEL_RANDOM_GAME_SEARCH",e.CREATE_RANDOM_GAME="CREATE_RANDOM_GAME",e.START_RANDOM_GAME="START_RANDOM_GAME",e.RECEIVED_QUESTION="RECEIVE_QUESTION",e.SHOW_QUESTION="SHOW_QUESTION",e.SEND_ANSWER="SEND_ANSWER",e.ANSWER_RECEIVED="ANSWER_RECEIVED",e.RESOLVE_ROUND="RESOLVE_ROUND",e.START_NEW_ROUND="START_NEW_ROUND",e.RESOLVE_GAME="RESOLVE_GAME",e.RESET_GAME_STATE="RESET_GAME_STATE"}(S||(S={})),function(e){e.ERROR="ERROR"}(A||(A={}));var _,R="localhost:3001";/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(R="http://192.168.1.138:3001/");var b={init:function(){console.log("Initing");var e=localStorage.getItem("token");_=I()(R,{query:e?"auth_token=".concat(e):"",reconnection:!0}),console.log(_),!1===_.disconnected?we.dispatch({type:A.ERROR,message:"It seems you have opened the game on another device or tab of your browser. Only one connection is allowed at a time. Please close the other window id you want to continue..."}):(!function e(){_.on("login success",function(a){localStorage.setItem("token",a.token),_=I.a.connect(R,{query:"auth_token=".concat(a.token),reconnection:!0}),e(),we.dispatch({type:n.LOGIN_SUCCESS,user:a.user,token:a.token})});_.on("login failed",function(e){console.log("error"),console.log(e.reason),we.dispatch({type:n.LOGIN_FAILED,error:e.reason})});_.on("user",function(e){console.log("Got user"),console.log(e),e?we.dispatch({user:e,type:n.LOGIN_SUCCESS}):we.dispatch({type:n.LOGIN_FAILED})});_.on("error",function(e){console.log(e)});_.on("signup failed",function(e){console.log("error"),console.log(e.reason),we.dispatch({type:n.SIGNUP_FAILED,error:e.reason})});_.on("signup success",function(e){console.log("Signup was successfull"),we.dispatch({type:n.SIGNUP_SUCCESS})});_.on("logout success",function(){_=I.a.connect(R),e(),we.dispatch({type:n.LOGOUT})});_.on("random game created",function(e){console.log("Game was created"),console.log(e),we.dispatch({type:S.CREATE_RANDOM_GAME,roomId:e.roomId,gameInfo:e.gameInfo,playerInfo:e.playerInfo,opponents:e.opponents})});_.on("game started",function(){console.log("Game started"),we.dispatch({type:S.START_RANDOM_GAME})});_.on("new question",function(e){console.log("QUestion is"),console.log(e.question),we.dispatch({type:S.RECEIVED_QUESTION,question:e.question}),_.emit("question received")});_.on("show question",function(){we.dispatch({type:S.SHOW_QUESTION})});_.on("resolve game",function(e){console.log("The resolve game data is"),console.log(e),we.dispatch({type:S.RESOLVE_GAME,resolveData:e})});_.on("resolve round",function(e){console.log("Should resolve round now"),console.log(e),we.dispatch({type:S.RESOLVE_ROUND,resolveData:e})});_.on("start new round",function(){console.log("Starting new round"),we.dispatch({type:S.START_NEW_ROUND})});_.on("show answer",function(e){console.log("The answer is"),console.log(e.correctAnswer),console.log("Your answer is"),console.log(we.getState().gameState),console.log("Other players' answers"),console.log(e.opponentsAnswers),we.dispatch({type:S.ANSWER_RECEIVED,correctAnswer:e.correctAnswer,opponentsAnswers:e.opponentsAnswers})})}(),console.log("Socket initialized"),b.getUser()),console.log("Socket initialized")},setIntent:function(e){console.log("Target is"),console.log(e.target),we.dispatch({type:n.CHANGE_INTENT,intent:e.target.id?e.target.id:e.target.parentNode.id})},getUser:function(){console.log("Trying to get user"),_.emit("get user"),we.dispatch({type:n.TRY_LOGIN})},tryLogin:function(e,a){we.dispatch({type:n.TRY_LOGIN,loginData:{email:e,password:a}}),_.emit("login",{email:e,password:a})},trySignup:function(e,a,t,r){we.dispatch({type:n.TRY_SIGNUP,signupData:{email:e,password:a,nickName:t,avatar:r}}),_.emit("signup",{email:e,password:a,nickName:t,avatar:r})},searchForRandomGame:function(){console.log("Will search for random game"),console.log(_),_.emit("join random game"),we.dispatch({type:n.SEARCHING_FOR_GAME}),we.dispatch({type:S.REQUEST_RANDOM_GAME_SEARCH})},getQuestion:function(){console.log("Getting question"),_.emit("get question")},sendMultipleAnswer:function(e){console.log(e.target.id),we.dispatch({type:S.SEND_ANSWER,answer:e.target.id}),_.emit("set multiple answer",{answer:e.target.id})},sendRangedAnswer:function(e){e.preventDefault();var a=document.getElementById("ranged-question-answer").value;we.dispatch({type:S.SEND_ANSWER,answer:e.target.id}),_.emit("set ranged answer",{answer:a})},endGame:function(){console.log("Ending game"),we.dispatch({type:n.EXIT_GAME}),we.dispatch({type:S.RESET_GAME_STATE})}};var f=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e={btnName:"Random Game",onClick:b.searchForRandomGame},a={btnName:"Challenge Friend",onClick:b.challengeFriend};return c.a.createElement("div",{className:"menu-section"},c.a.createElement("div",null,c.a.createElement(O,e),c.a.createElement(O,a)))}}]),a}(c.a.Component),G=Object(g.b)(function(e){return{userState:e.userState,gameState:e.gameState}})(f),y=t(12),w=t(8),T=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).state={email:t.props.userState.loginData.email,password:""},t.handleChange=t.handleChange.bind(Object(w.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target&&e.target.name;this.setState(Object(y.a)({},a,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),b.tryLogin(this.state.email,this.state.password)}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"Login"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),this.props.userState.isError&&c.a.createElement("p",null,this.props.userState.error),c.a.createElement("button",{type:"submit",value:"Submit"},"Login"))}}]),a}(c.a.Component),D=Object(g.b)(function(e){return{userState:e.userState}})(T);var C,L=function(e){return c.a.createElement("img",{className:"avatar-image",id:e.value,src:e.src,onClick:e.onClick,alt:"avatar-".concat(e.value)})},j=t(21),k=t.n(j),M=t(22),U=t.n(M),F=t(23),W=t.n(F),q=t(24),Q=t.n(q),P=t(25),V=t.n(P),H=t(26),Y=t.n(H),x=t(27),B=t.n(x),X=t(28),z=t.n(X),J=t(14),$=t.n(J),K={boy1:k.a,boy2:U.a,boy3:W.a,boy4:Q.a,girl1:V.a,girl2:Y.a,girl3:B.a,girl4:z.a,empty:$.a},Z=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).state={email:t.props.userState.signupData.email,password:t.props.userState.signupData.password,nickName:t.props.userState.signupData.nickName,avatar:t.props.userState.signupData.avatar,showAvatars:!1},t.closeAvatars=t.closeAvatars.bind(Object(w.a)(t)),t.handleShowAvatars=t.handleShowAvatars.bind(Object(w.a)(t)),t.handleSelectAvatar=t.handleSelectAvatar.bind(Object(w.a)(t)),t.handleChange=t.handleChange.bind(Object(w.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"closeAvatars",value:function(){this.state.showAvatars&&this.setState({showAvatars:!1})}},{key:"handleShowAvatars",value:function(){this.setState({showAvatars:!this.state.showAvatars})}},{key:"handleSelectAvatar",value:function(e){this.setState({avatar:e.target.id}),this.handleShowAvatars()}},{key:"handleChange",value:function(e){var a=e.target&&e.target.name,t=e.target.value;this.setState(Object(y.a)({},a,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),b.trySignup(this.state.email,this.state.password,this.state.nickName,this.state.avatar)}},{key:"render",value:function(){var e=this;console.log("Signup state is"),console.log(this.props.userState);var a=[];return Object.keys(K).forEach(function(t){var n={key:t,value:t,src:K[t],onClick:e.handleSelectAvatar};a.push(n)}),c.a.createElement("form",{onSubmit:this.handleSubmit,onClick:this.closeAvatars},c.a.createElement("h2",null,"Signup"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"nickName"},"Nickname"),c.a.createElement("input",{type:"text",name:"nickName",value:this.state.nickName,onChange:this.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"avatar"},"Avatar"),c.a.createElement("img",{className:"avatar-selector",src:K[this.state.avatar],alt:"avatar-selector",onClick:this.handleShowAvatars}),c.a.createElement("div",{className:"avatars-container"},this.state.showAvatars&&a.map(function(e){return c.a.createElement(L,e)}))),this.props.userState.isError&&c.a.createElement("p",null,this.props.userState.error),c.a.createElement("button",{type:"submit",value:"Submit"},"Signup"))}}]),a}(c.a.Component),ee=Object(g.b)(function(e){return{userState:e.userState}})(Z),ae=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"auth-section"},c.a.createElement("div",{className:"auth-nav"},c.a.createElement("div",{className:this.props.userState.intent===s.LOGIN?"auth-tab active":"auth-tab inactive",onClick:b.setIntent,id:"LOGIN"},c.a.createElement("h2",null,"Login")),c.a.createElement("div",{className:this.props.userState.intent===s.SIGNUP?"auth-tab active":"auth-tab inactive",onClick:b.setIntent,id:"SIGNUP"},c.a.createElement("h2",null,"Signup"))),c.a.createElement("div",{className:"auth-form"},this.props.userState.intent===s.SIGNUP?c.a.createElement(ee,null):c.a.createElement(D,null)))}}]),a}(c.a.Component),te=Object(g.b)(function(e){return{userState:e.userState}})(ae);!function(e){e.NOT_PLAYING="NOT_PLAYING",e.SEARCHING_FOR_GAME="SEARCHING_FOR_GAME",e.WAITING_FOR_PLAYERS="WAITING_FOR_PLAYERS",e.STARTING="STARTING",e.RUNNING="RUNNING",e.ANSWER_SUBMITTED="ANSWER_SUBMITTED",e.WAITING_FOR_ANSWER="WAITING_FOR_ANSWER",e.RESOLVING_ANSWERS="RESOLVING_ANSWERS",e.RESOLVING_ROUND="RESOLVING_ROUND",e.GETTING_NEXT_QUESTION="GETTING_NEXT_QUESTION",e.RESOLVING_GAME="RESOLVING_GAME",e.GAME_OVER="GAME_OVER"}(C||(C={}));var ne={roomId:null,status:C.NOT_PLAYING,gameInfo:void 0,playerInfo:void 0,currentQuestion:void 0,currentAnswer:void 0,correctAnswer:void 0,opponents:void 0,resolveData:void 0,resolveGameData:void 0,isLoading:!1,isError:!1,error:void 0},re={boy1:k.a,boy2:U.a,boy3:W.a,boy4:Q.a,girl1:V.a,girl2:Y.a,girl3:B.a,girl4:z.a,empty:$.a};var se=function(e){var a={width:e.health+"%"};return c.a.createElement("div",{className:"player-avatar-container "},c.a.createElement("img",{className:"player-avatar",alt:"avatar",src:e.avatar?re[e.avatar]:re[$.a]}),c.a.createElement("div",{className:"player-stats "+e.class},c.a.createElement("div",{className:"player-name"},e.nickName),c.a.createElement("div",{className:"player-health-container"},c.a.createElement("div",{className:"player-health ".concat(e.class," ").concat(e.damaged?" damaged":""),style:a})),c.a.createElement("div",{className:"player-answers-container"},c.a.createElement("span",{className:"block correct"},"Correct: ",e.correctAnswers),c.a.createElement("span",{className:"block wrong"},"Wrong: ",e.wrongAnswers))))};var oe=function(e){var a="answer-container";return e.active||(a+=" disabled"),e.answer&&e.answer===e.id&&(a+=" own-answer"),e.correctAnswer===e.id&&(a+=" correct-answer"),e&&e.opponents&&Object.keys(e.opponents).forEach(function(t,n){console.log(e,e.id),e.opponents[t].currentAnswer===e.id&&(a+=" opponent".concat(n+1))}),c.a.createElement("div",{className:a,id:e.id,onClick:e.active?b.sendMultipleAnswer:void 0},e.question[e.id])};var ce=function(e){var a,t;return console.log("Rendering question"),console.log("Correct answer",e.correctAnswer),a=!(!e.answer||!e.correctAnswer),t=e.answer===e.correctAnswer,c.a.createElement("div",{className:"question-container"},c.a.createElement("div",{className:"question-body"},c.a.createElement("p",null,e.question.body)),c.a.createElement("div",null,c.a.createElement("div",{className:"answer-name"},"A"),c.a.createElement(oe,Object.assign({id:"answerA"},e))),c.a.createElement("div",null,c.a.createElement("div",{className:"answer-name"},"B"),c.a.createElement(oe,Object.assign({id:"answerB"},e))),c.a.createElement("div",null,c.a.createElement("div",{className:"answer-name"},"C"),c.a.createElement(oe,Object.assign({id:"answerC"},e))),c.a.createElement("div",null,c.a.createElement("div",{className:"answer-name"},"D"),c.a.createElement(oe,Object.assign({id:"answerD"},e))),a&&c.a.createElement("span",{className:t?"resolved correct":"resolved wrong"},t?"Correct Answer":"Wrong Answer"))};var ie=function(e){console.log("Rendering question"),console.log("The state players in question are"),console.log(e.opponents);var a=void 0,t=void 0;return e.opponents&&Object.keys(e.opponents).forEach(function(n,r){0===r&&(a=e.opponents[n].currentAnswer),1===r&&(t=e.opponents[n].currentAnswer)}),c.a.createElement("div",{className:"question-container"},c.a.createElement("div",{className:"question-body"},c.a.createElement("p",null,e.question.body)),c.a.createElement("form",{onSubmit:b.sendRangedAnswer},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:e.active?"":"disabled",autoFocus:!0,type:"number",name:"answer",id:"ranged-question-answer"})),c.a.createElement("button",{className:e.active?"":"disabled",type:"submit",value:"Submit"},"Submit")),e.correctAnswer&&c.a.createElement("div",{className:"ranged-answer-container"},c.a.createElement("h3",{className:"correct"},"The correct answer is"),c.a.createElement("div",{className:"ranged-answer correct-answer"},e.correctAnswer)),e.waitingForAnswers&&c.a.createElement("div",{className:"question-announcement"},c.a.createElement("span",null,"Waiting for other players to answer...")),!e.active&&!e.waitingForAnswers&&c.a.createElement("div",{className:"ranged-answer-container"},a&&c.a.createElement("div",{className:"ranged-answer opponent1"},a),t&&c.a.createElement("div",{className:"ranged-answer opponent2"},t)))};var le=function(e){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"loader-picture"}),c.a.createElement("p",{className:"loader-text"},e.text))};var ue=function(e){return c.a.createElement("div",{className:"game-info-container"},c.a.createElement("div",{className:"game-progress"},c.a.createElement("span",{className:"block"},"Progress:"),c.a.createElement("span",{className:"block"},e.currenQuestionNumber,"/",e.questionsCount)),c.a.createElement("div",{className:"current-question-category"},c.a.createElement("span",{className:"block"},"Category:"),c.a.createElement("span",null,e.currentQuestionCategory?e.currentQuestionCategory:"Random")),c.a.createElement("div",{className:"player-info-container"},c.a.createElement(se,Object.assign({class:"player"},e.playerInfo))))};var me=function(e){var a,t=Object.keys(e.opponents);a=e.playerInfo?e.playerInfo.id:"123";var n=Object(N.a)({},e.opponents[t[0]],{class:"opponent1"}),r=Object(N.a)({},e.opponents[t[1]],{class:"opponent2"});return e.resolveData[t[0]].damage>0&&(n.damaged=!0),e.resolveData[t[0]].damage>0&&(r.damaged=!0),c.a.createElement("div",{className:"resolve-round-container"},c.a.createElement("div",{className:e.resolveData[a].damage>0?"resolve-player-container wrong":"resolve-player-container correct"},c.a.createElement(se,Object.assign({class:"player"},e.playerInfo,e.resolveData[a].damage>0?{damaged:!0}:{})),c.a.createElement("div",{className:"player-resolve-status"},e.resolveData[a].damage>0?"Takes ".concat(e.resolveData[a].damage," damage"):"Answered correctly")),c.a.createElement("div",{className:e.resolveData[t[0]].damage>0?"resolve-player-container wrong":"resolve-player-container correct"},c.a.createElement(se,n),c.a.createElement("div",{className:"player-resolve-status"},e.resolveData[t[0]].damage>0?"Takes ".concat(e.resolveData[t[0]].damage," damage"):"Answered correctly")),c.a.createElement("div",{className:e.resolveData[t[1]].damage>0?"resolve-player-container wrong":"resolve-player-container correct"},c.a.createElement(se,r),c.a.createElement("div",{className:"player-resolve-status"},e.resolveData[t[1]].damage>0?"Takes ".concat(e.resolveData[t[1]].damage," damage"):"Answered correctly")))},pe=t(54),Ee=t.n(pe),de=t(55),ge=t.n(de),Ne=t(56),ve=t.n(Ne),Se=t(57),Ae=t.n(Se),Oe={winner:Ee.a,second:ge.a,third:ve.a,loser:Ae.a};var he=function(e){var a=Object.keys(e.opponents),t=Object(N.a)({},e.opponents[a[0]],{class:"opponent1"}),n=Object(N.a)({},e.opponents[a[1]],{class:"opponent2"});return c.a.createElement("div",{className:"resolve-game-container"},c.a.createElement("div",{className:"player-prize-icons-container"},c.a.createElement("img",{className:"player-prize-icon "+e.resolveGameData[e.playerInfo.id],src:Oe[e.resolveGameData[e.playerInfo.id]],alt:e.resolveGameData[e.playerInfo.id]}),c.a.createElement("img",{className:"player-prize-icon "+e.resolveGameData[a[0]],src:Oe[e.resolveGameData[a[0]]],alt:e.resolveGameData[a[0]]}),c.a.createElement("img",{className:"player-prize-icon "+e.resolveGameData[a[1]],src:Oe[e.resolveGameData[a[1]]],alt:e.resolveGameData[a[1]]})),c.a.createElement("div",{className:"resolve-game-player-container"},c.a.createElement(se,Object.assign({class:"player"},e.playerInfo))),c.a.createElement("div",{className:"resolve-game-player-container"},c.a.createElement(se,t)),c.a.createElement("div",{className:"resolve-game-player-container"},c.a.createElement(se,n)),c.a.createElement("div",{className:"resolve-announcement"},c.a.createElement("span",null,"winner"===e.resolveGameData[e.playerInfo.id]&&"You win!","second"===e.resolveGameData[e.playerInfo.id]&&"You finished second!","third"===e.resolveGameData[e.playerInfo.id]&&"You finished third")),c.a.createElement(O,{btnName:"Return to lobby",onClick:b.endGame}))},Ie=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.gameState.status===C.STARTING&&console.log("Game starting")}},{key:"componentDidUpdate",value:function(){this.props.gameState.status===C.RUNNING&&b.getQuestion(),this.props.gameState.status===C.GETTING_NEXT_QUESTION&&b.getQuestion()}},{key:"render",value:function(){var e,a,t=this.props.gameState.status,n=this.props.gameState.currentQuestion,r=this.props.gameState.opponents,s=this.props.gameState.gameInfo,o=this.props.gameState.playerInfo,i=!1;switch(console.log("Status is",t),t){case C.SEARCHING_FOR_GAME:e=c.a.createElement(le,{text:"Searching for a game..."});break;case C.STARTING:var l=Object.keys(r),u=Object(N.a)({},r[l[0]],{class:"opponent1"}),m=Object(N.a)({},r[l[1]],{class:"opponent2"});e=c.a.createElement("div",{className:"players-announcement-container"},c.a.createElement("h2",null,"Starting new game with players"),c.a.createElement("div",{className:"player-info-container"},c.a.createElement(se,Object.assign({class:"player"},o))),c.a.createElement("div",{className:"player-info-container"},c.a.createElement(se,u)),c.a.createElement("div",{className:"player-info-container"},c.a.createElement(se,m)));break;case C.RUNNING:case C.GETTING_NEXT_QUESTION:i=!0,e=c.a.createElement(le,{text:"Loading next question..."});break;case C.WAITING_FOR_ANSWER:i=!0;var p={active:!0,waitingForAnswers:!1,question:this.props.gameState.currentQuestion,answer:void 0,correctAnswer:void 0,opponents:void 0};console.log("Question type is",n&&n.questionType),e=n&&"multiple"===n.questionType?c.a.createElement(ce,p):c.a.createElement(ie,p);break;case C.ANSWER_SUBMITTED:i=!0;var E={active:!1,waitingForAnswers:!0,question:this.props.gameState.currentQuestion,answer:this.props.gameState.currentAnswer,correctAnswer:void 0,opponents:void 0};e=n&&"multiple"===n.questionType?c.a.createElement(ce,E):c.a.createElement(ie,E);break;case C.RESOLVING_ANSWERS:i=!0;var d={active:!1,waitingForAnswers:!1,question:this.props.gameState.currentQuestion,answer:this.props.gameState.currentAnswer,correctAnswer:this.props.gameState.correctAnswer,opponents:this.props.gameState.opponents};e=n&&"multiple"===n.questionType?c.a.createElement(ce,d):c.a.createElement(ie,d);break;case C.RESOLVING_ROUND:i=!0;var g={playerInfo:o,opponents:r,resolveData:this.props.gameState.resolveData};e=c.a.createElement(me,g);break;case C.RESOLVING_GAME:if(o&&this.props.gameState.resolveGameData){var v={playerInfo:o,opponents:r,resolveGameData:this.props.gameState.resolveGameData};e=c.a.createElement(he,v)}break;default:e=c.a.createElement("div",null,"Unknown status...")}return s&&(a={questionsCount:s.questionsCount,currenQuestionNumber:s.currentQuestionNumber,currentQuestionCategory:n&&n.category,playerInfo:o}),c.a.createElement("div",{className:"game-section"},i&&c.a.createElement(ue,a),e)}}]),a}(c.a.Component),_e=Object(g.b)(function(e){return{userState:e.userState,gameState:e.gameState}})(Ie),Re=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){console.log("Rendering App");var e,a=this.props.userState;if(this.props.generalAppState.isError)e=c.a.createElement("div",null,this.props.generalAppState.error);else switch(!0){case a.isLoading:e=c.a.createElement(le,{text:"Loading..."});break;case void 0===a.user:e=c.a.createElement(te,null);break;case a.status===r.IDLE:e=c.a.createElement(G,null);break;case a.status===r.SEARCHING_FOR_RANDOM_GAME:case a.status===r.PLAYING:e=c.a.createElement(_e,null);break;default:e=c.a.createElement(te,null)}return c.a.createElement("div",{className:"main"},e)}}]),a}(c.a.Component),be=Object(g.b)(function(e){return{userState:e.userState,gameState:e.gameState,generalAppState:e.generalAppState}})(Re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=t(13),Ge={isError:!1,error:""},ye=Object(fe.b)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.CHANGE_INTENT:return Object(N.a)({},e,{intent:s[a.intent]});case n.TRY_LOGIN:return Object(N.a)({},e,{isLoading:!0});case n.LOGIN_FAILED:return Object(N.a)({},e,{isLoading:!1,isError:!0,error:a.error});case n.LOGIN_SUCCESS:return console.log("Login was succ"),Object(N.a)({},e,{loginData:v.loginData,isLoading:!1,isError:!1,user:a.user,token:a.token,error:""});case n.TRY_SIGNUP:return Object(N.a)({},e,{signupData:a.signupData,isLoading:!0});case n.SIGNUP_FAILED:return Object(N.a)({},e,{isLoading:!1,isError:!0,error:a.error});case n.SIGNUP_SUCCESS:return Object(N.a)({},e,{signupData:v.signupData,isLoading:!1,isError:!1,error:""});case n.LOGOUT:return Object(N.a)({},e,{user:void 0,token:""});case n.SEARCHING_FOR_GAME:return Object(N.a)({},e,{status:r.SEARCHING_FOR_RANDOM_GAME});case n.START_RANDOM_GAME:return Object(N.a)({},e,{status:r.PLAYING});case n.EXIT_GAME:return Object(N.a)({},e,{status:r.IDLE});default:return console.log("Defaulted"),e}},gameState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case S.REQUEST_RANDOM_GAME_SEARCH:return console.log("Request random game search"),Object(N.a)({},e,{status:C.SEARCHING_FOR_GAME,isLoading:!0});case S.CANCEL_RANDOM_GAME_SEARCH:return Object(N.a)({},e,{status:C.NOT_PLAYING,isLoading:!1});case S.CREATE_RANDOM_GAME:return Object(N.a)({},e,{status:C.STARTING,isLoading:!1,opponents:a.opponents,gameInfo:a.gameInfo,playerInfo:a.playerInfo,roomId:a.roomId});case S.START_RANDOM_GAME:return Object(N.a)({},e,{status:C.RUNNING});case S.RECEIVED_QUESTION:return Object(N.a)({},e,{currentQuestion:a.question,status:C.WAITING_FOR_ANSWER});case S.SHOW_QUESTION:return Object(N.a)({},e,{status:C.WAITING_FOR_ANSWER});case S.SEND_ANSWER:return Object(N.a)({},e,{status:C.ANSWER_SUBMITTED,currentAnswer:a.answer});case S.ANSWER_RECEIVED:return Object.keys(e.opponents).forEach(function(t){e.opponents[t].currentAnswer=a.opponentsAnswers[t]}),Object(N.a)({},e,{status:C.RESOLVING_ANSWERS,correctAnswer:a.correctAnswer});case S.RESOLVE_ROUND:return e.playerInfo&&(e.playerInfo.health-=a.resolveData[e.playerInfo.id].damage,a.resolveData[e.playerInfo.id].damage>0?e.playerInfo.wrongAnswers++:e.playerInfo.correctAnswers++,Object.keys(e.opponents).forEach(function(t){e.opponents[t].health-=a.resolveData[t].damage,a.resolveData[t].damage>0?e.opponents[t].wrongAnswers++:e.opponents[t].correctAnswers++})),Object(N.a)({},e,{status:C.RESOLVING_ROUND,resolveData:a.resolveData});case S.START_NEW_ROUND:return e.gameInfo&&e.gameInfo.currentQuestionNumber++,Object(N.a)({},e,{status:C.GETTING_NEXT_QUESTION,currentQuestion:void 0,currentAnswer:void 0,correctAnswer:void 0,resolveData:void 0});case S.RESOLVE_GAME:return console.log("Resolve game action dispatched"),console.log(a.resolveData),Object(N.a)({},e,{status:C.RESOLVING_GAME,resolveGameData:a.resolveData});case S.RESET_GAME_STATE:return Object(N.a)({},ne);default:return console.log("Defaulted"),e}},generalAppState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A.ERROR:return Object(N.a)({},e,{isError:!0,error:a.message});default:return console.log("App action defaulted"),e}}});t.d(a,"store",function(){return we});var we=Object(fe.c)(ye);l.a.render(c.a.createElement(function(e){return b.init(),c.a.createElement(g.a,{store:e.store},c.a.createElement(be,null))},{store:we}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.5a4deaf2.chunk.js.map