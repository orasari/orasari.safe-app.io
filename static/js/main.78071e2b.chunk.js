(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(89)},52:function(e,t,a){},53:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(38),r=a.n(c),o=(a(52),a(27)),i=a(12),u=a(13),l=a(15),d=a(14),p=a(16),b=a(6);a(53);function m(e){return s.a.createElement("input",{type:"button",className:"keyButton",value:e.keyNumber,onClick:function(){e.onKeyClick(e.keyNumber)},onMouseUp:function(t){e.onDelayedCallback(t)}})}var h={sn:4815162342},f=function(){return!!localStorage.getItem("password")},v=function(e){var t=!1;if(e.length==="000000".length)for(var a=0;a<e.length;a++){if(e[a]!=="000000"[a]){t=!1;break}t=!0}return!!t},k=function(e){return 6===e.length&&(localStorage.setItem("password",e.join("")),!0)},y=function(e){var t=JSON.parse(localStorage.getItem("password"))+"",a=!1;if(t.length===e.length)for(var n=0;n<e.length;n++){if(e[n]!==t[n]){a=!1;break}a=!0}return!!a};var O=["1","2","3","4","5","6","7","8","9","*","0","L"],j=a(39),E=a.n(j),C=a(20),g="CHECK_MASTER_CODE",S="SUBMIT_PASSCODE",I="SERVICE_MODE",w="MASTER_CODE_CONFIRMED",N="IS_VALIDATING",A="IS_LOADING",D="TOGGLE_LOCK";function _(e,t){return{type:S,valid:e,locking:t}}function K(e){return{type:I,status:e}}function x(e){return{type:A,loading:e}}function R(e,t){return{type:D,valid:e,status:t}}var T=a(19),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var a=t.valid,n=t.valid||"LOCKING"===t.locking?"Ready":"Error";return Object(T.a)({},e,{unlocked:a,status:n});case I:return n=t.status,Object(T.a)({},e,{status:n});case D:return a=t.valid,n=t.status,Object(T.a)({},e,{unlocked:a,status:n});case w:return a=!!t.masterCodeValid,n=t.masterCodeValid?"Ready":"Error",Object(T.a)({},e,{unlocked:a,status:n});case A:return n=t.loading,Object(T.a)({},e,{status:n});case N:return n=t.validating?"Validating":n,Object(T.a)({},e,{status:n});default:return e}},M=a(18),P=a(46),U=a(11),V=a.n(U),G=a(21),J=a(41),B=a(42),H=a.n(B),q=V.a.mark(F),z="https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a";function F(e){var t,a,n,s,c;return V.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c=function(){return(c=Object(J.a)(V.a.mark(function t(){return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.get(z+"?code="+e.masterCode);case 2:if(200!==t.sent.status){t.next=6;break}t.next=7;break;case 6:throw new Error;case 7:return t.abrupt("return",{sn:4815162342});case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)},s=function(){return c.apply(this,arguments)},r.next=4,s(e.masterCode);case 4:if(t=r.sent,a=e.serialNumber.sn,n=t.sn,a!=n){r.next=12;break}return r.next=10,Object(G.b)({type:w,masterCodeValid:!0});case 10:r.next=14;break;case 12:return r.next=14,Object(G.b)({type:w,masterCodeValid:!1});case 14:case"end":return r.stop()}},q)}var W=V.a.mark(X),Q=V.a.mark(Y);function X(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)("CHECK_MASTER_CODE",F);case 2:case"end":return e.stop()}},W)}function Y(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([X()]);case 2:case"end":return e.stop()}},Q)}var Z=[],$=Object(P.a)();Z.push($);var ee=M.a.apply(void 0,Z),te=Object(M.d)(L,ee);$.run(Y);var ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={passcode:[]},a.onKeyClick=a.onKeyClick.bind(Object(b.a)(Object(b.a)(a))),a.onDelayedCallback=a.onDelayedCallback.bind(Object(b.a)(Object(b.a)(a))),a.delayedCallback=E.a.debounce(a.submitPasscode,2e3),a.submitPasscode=a.submitPasscode.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onDelayedCallback",value:function(e){e.persist(),this.delayedCallback(e)}},{key:"submitPasscode",value:function(){var e=this;if(this.state.passcode&&this.state.passcode.length>0){if(v(this.state.passcode))return this.props.dispatch(K("Service")),void this.setState({passcode:[]});"Service"!==this.props.status&&this.props.dispatch(x("Unlocking")),setTimeout(function(){var t;"Service"===e.props.status?(e.props.dispatch((t=e.state.passcode,{type:g,masterCode:t,serialNumber:h})),e.setState({passcode:[]})):e.state.passcode.length>0&&(v(e.state.passcode)?e.props.dispatch(K("Service")):f()?y(e.state.passcode)?e.props.dispatch(_(!0)):e.props.dispatch(_(!1)):k(e.state.passcode)?setTimeout(e.props.dispatch(R(!0,"Ready")),3e3):setTimeout(e.props.dispatch(R(!1,"Error")),3e3)),e.setState({passcode:[]})},3e3)}}},{key:"onKeyClick",value:function(e){var t=this;"L"===e&&"Service"!==this.props.status?(this.props.dispatch(x("Locking")),setTimeout(function(){t.props.dispatch(R(!1,"Ready"))},3e3),this.setState({passcode:[]})):this.setState({passcode:[].concat(Object(o.a)(this.state.passcode),[e])})}},{key:"render",value:function(){var e=this,t=O.map(function(t,a){return s.a.createElement(m,{key:a,keyNumber:t,onKeyClick:e.onKeyClick,onDelayedCallback:e.onDelayedCallback})});return s.a.createElement("div",{className:"safeKeyboard"},t)}}]),t}(n.Component);var ne=Object(C.b)(function(e,t){var a=te.getState();return{status:a.status?a.status:"Ready"}})(ae);function se(e){return s.a.createElement("div",{className:"locking"},e.isUnlocked?s.a.createElement("p",null,"UNLOCKED"):s.a.createElement("p",null,"LOCKED"))}function ce(e){return s.a.createElement("div",{className:"status"},s.a.createElement("p",null,e.status))}var re=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isIdle,a=e.isUnlocked,n=e.status,c=t?"safeDisplay backlightIdle":"safeDisplay";return s.a.createElement("div",{className:c},s.a.createElement(se,{isUnlocked:a}),s.a.createElement(ce,{status:n}))}}]),t}(n.Component);var oe=Object(C.b)(function(){var e=te.getState();return{isUnlocked:e.unlocked,status:e.status?e.status:"Ready"}})(re),ie=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hotelSafe"},s.a.createElement(oe,{isIdle:this.props.isIdle}),s.a.createElement(ne,null),s.a.createElement("div",{className:"serialNumber"},"S/N: "+h.sn))}}]),t}(n.Component),ue=a(43),le=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).idleTimer=null,a.onAction=a._onAction.bind(Object(b.a)(Object(b.a)(a))),a.onActive=a._onActive.bind(Object(b.a)(Object(b.a)(a))),a.onIdle=a._onIdle.bind(Object(b.a)(Object(b.a)(a))),a.onKeyClick=a.onKeyClick.bind(Object(b.a)(Object(b.a)(a))),a.submitPasscode=a.submitPasscode.bind(Object(b.a)(Object(b.a)(a))),a.state={isAppIdle:!1,passcode:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"_onAction",value:function(e){}},{key:"_onActive",value:function(e){this.setState({isAppIdle:!1})}},{key:"_onIdle",value:function(e){this.setState({isAppIdle:!0})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyClick)}},{key:"onKeyClick",value:function(e){var t=function(e){switch(e.keyCode){case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 48:return 0;case 106:return"*";case 76:return"L";case 13:return"ENTER";default:console.log("Not a valid key pressed")}}(e);"ENTER"===t?this.submitPasscode(this.state.passcode,"nbt"):this.setState({passcode:[].concat(Object(o.a)(this.state.passcode),[t])})}},{key:"submitPasscode",value:function(){v(this.state.passcode)||(f()?y(this.state.passcode):k(this.state.passcode)),this.setState({passcode:[]})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"application"},s.a.createElement(ue.a,{ref:function(t){e.idleTimer=t},element:document,onActive:this.onActive,onIdle:this.onIdle,onAction:this.onAction,debounce:250,timeout:5e3}),s.a.createElement(C.a,{store:te},s.a.createElement(ie,{isIdle:this.state.isAppIdle})))}}]),t}(n.Component),de=a(44),pe=a.n(de);r.a.render(s.a.createElement(pe.a,{basename:"/orasari.safe-app.io"},s.a.createElement(le,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.78071e2b.chunk.js.map