(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(89)},52:function(e,t,a){},53:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(38),o=a.n(c),r=(a(52),a(27)),i=a(12),l=a(13),u=a(15),d=a(14),p=a(16),b=a(6);a(53);function h(e){return s.a.createElement("input",{type:"button",className:"keyButton",value:e.keyNumber,onClick:function(){e.onKeyClick(e.keyNumber)},onMouseUp:function(t){e.onDelayedCallback(t)}})}var v={sn:4815162342},m=function(){return!!localStorage.getItem("password")},f=function(e){var t=!1;if(e.length==="000000".length)for(var a=0;a<e.length;a++){if(e[a]!=="000000"[a]){t=!1;break}t=!0}return!!t},k=function(e){return 6===e.length&&(localStorage.setItem("password",e.join("")),!0)},y=function(e){var t=JSON.parse(localStorage.getItem("password")),a=t+"",n=!1;if(console.log("val enteredPass",e),console.log("val password",a),console.log("password password",t),console.log("leng 1 ",a.length),console.log("leng 2 ",e.length),console.log("leng 31 ",a.length===e.length),console.log("leng 4 ",a.length==e.length),a.length===e.length)for(var s=0;s<e.length;s++){if(e[s]!==a[s]){n=!1;break}console.log("enteredPass ",e),console.log("validPass ",a),console.log("oba ",e[s]===a[s]),n=!0}return!!n};var O=["1","2","3","4","5","6","7","8","9","*","0","L"],g=a(39),j=a.n(g),E=a(20),C="CHECK_MASTER_CODE",S="SUBMIT_PASSCODE",w="SERVICE_MODE",I="MASTER_CODE_CONFIRMED",N="IS_VALIDATING",A="IS_LOADING",D="TOGGLE_LOCK";function _(e,t){return{type:S,valid:e,locking:t}}function K(e){return{type:w,status:e}}function x(e){return{type:A,loading:e}}function T(e,t){return{type:D,valid:e,status:t}}var R=a(19),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var a=t.valid,n=t.valid||"LOCKING"===t.locking?"Ready":"Error";return Object(R.a)({},e,{unlocked:a,status:n});case w:return n=t.status,Object(R.a)({},e,{status:n});case D:return a=t.valid,n=t.status,Object(R.a)({},e,{unlocked:a,status:n});case I:return a=!!t.masterCodeValid,n=t.masterCodeValid?"Ready":"Error",Object(R.a)({},e,{unlocked:a,status:n});case A:return n=t.loading,Object(R.a)({},e,{status:n});case N:return n=t.validating?"Validating":n,Object(R.a)({},e,{status:n});default:return e}},P=a(18),M=a(46),U=a(11),V=a.n(U),G=a(21),J=a(41),B=a(42),H=a.n(B),q=V.a.mark(F),z="https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a";function F(e){var t,a;return V.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=function(){return(a=Object(J.a)(V.a.mark(function t(){var a;return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.get(z+"?code="+e.masterCode);case 2:if(200!==(a=t.sent).status){t.next=6;break}t.next=7;break;case 6:throw new Error;case 7:return t.abrupt("return",a.data);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)},t=function(){return a.apply(this,arguments)},n.next=4,t(e.masterCode);case 4:if(n.sent.sn!==e.serialNumber){n.next=10;break}return n.next=8,Object(G.b)({type:I,masterCodeValid:!0});case 8:n.next=12;break;case 10:return n.next=12,Object(G.b)({type:I,masterCodeValid:!1});case 12:case"end":return n.stop()}},q)}var W=V.a.mark(X),Q=V.a.mark(Y);function X(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)("CHECK_MASTER_CODE",F);case 2:case"end":return e.stop()}},W)}function Y(){return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([X()]);case 2:case"end":return e.stop()}},Q)}var Z=[],$=Object(M.a)();Z.push($);var ee=P.a.apply(void 0,Z),te=Object(P.d)(L,ee);$.run(Y);var ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={passcode:[]},a.onKeyClick=a.onKeyClick.bind(Object(b.a)(Object(b.a)(a))),a.onDelayedCallback=a.onDelayedCallback.bind(Object(b.a)(Object(b.a)(a))),a.delayedCallback=j.a.debounce(a.submitPasscode,2e3),a.submitPasscode=a.submitPasscode.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onDelayedCallback",value:function(e){e.persist(),this.delayedCallback(e)}},{key:"submitPasscode",value:function(){var e=this;if(console.log("asdadsada"),this.state.passcode&&this.state.passcode.length>0){if(console.log("Passcode je ",this.state.passcode),f(this.state.passcode))return this.props.dispatch(K("Service")),void this.setState({passcode:[]});"Service"!==this.props.status&&this.props.dispatch(x("Unlocking")),console.log("pre set time"),setTimeout(function(){var t;"Service"===e.props.status?(e.props.dispatch((t=e.state.passcode,{type:C,masterCode:t,serialNumber:v})),e.setState({passcode:[]})):(console.log("pre set lengthththth "),e.state.passcode.length>0&&(f(e.state.passcode)?e.props.dispatch(K("Service")):(console.log("exits ??"),m()?(console.log("pre validate"),y(e.state.passcode)?(console.log("pre"),e.props.dispatch(_(!0)),console.log("posle")):e.props.dispatch(_(!1))):k(e.state.passcode)?setTimeout(e.props.dispatch(T(!0,"Ready")),3e3):setTimeout(e.props.dispatch(T(!1,"Error")),3e3)))),e.setState({passcode:[]})},3e3)}}},{key:"onKeyClick",value:function(e){var t=this;"L"===e&&"Service"!==this.props.status?(this.props.dispatch(x("Locking")),setTimeout(function(){t.props.dispatch(T(!1,"Ready"))},3e3),this.setState({passcode:[]})):this.setState({passcode:[].concat(Object(r.a)(this.state.passcode),[e])})}},{key:"render",value:function(){var e=this,t=O.map(function(t,a){return s.a.createElement(h,{key:a,keyNumber:t,onKeyClick:e.onKeyClick,onDelayedCallback:e.onDelayedCallback})});return s.a.createElement("div",{className:"safeKeyboard"},t)}}]),t}(n.Component);var ne=Object(E.b)(function(e,t){var a=te.getState();return{status:a.status?a.status:"Ready"}})(ae);function se(e){return s.a.createElement("div",{className:"locking"},e.isUnlocked?s.a.createElement("p",null,"UNLOCKED"):s.a.createElement("p",null,"LOCKED"))}function ce(e){return s.a.createElement("div",{className:"status"},s.a.createElement("p",null,e.status))}var oe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isIdle,a=e.isUnlocked,n=e.status,c=t?"safeDisplay backlightIdle":"safeDisplay";return s.a.createElement("div",{className:c},s.a.createElement(se,{isUnlocked:a}),s.a.createElement(ce,{status:n}))}}]),t}(n.Component);var re=Object(E.b)(function(){var e=te.getState();return{isUnlocked:e.unlocked,status:e.status?e.status:"Ready"}})(oe),ie=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hotelSafe"},s.a.createElement(re,{isIdle:this.props.isIdle}),s.a.createElement(ne,null),s.a.createElement("div",{className:"serialNumber"},"S/N: "+v.sn))}}]),t}(n.Component),le=a(43),ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).idleTimer=null,a.onAction=a._onAction.bind(Object(b.a)(Object(b.a)(a))),a.onActive=a._onActive.bind(Object(b.a)(Object(b.a)(a))),a.onIdle=a._onIdle.bind(Object(b.a)(Object(b.a)(a))),a.onKeyClick=a.onKeyClick.bind(Object(b.a)(Object(b.a)(a))),a.submitPasscode=a.submitPasscode.bind(Object(b.a)(Object(b.a)(a))),a.state={isAppIdle:!1,passcode:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"_onAction",value:function(e){}},{key:"_onActive",value:function(e){this.setState({isAppIdle:!1})}},{key:"_onIdle",value:function(e){this.setState({isAppIdle:!0})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyClick)}},{key:"onKeyClick",value:function(e){var t=function(e){switch(console.log(e.keyCode),e.keyCode){case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 48:return 0;case 106:return"*";case 76:return"L";case 13:return"ENTER";default:console.log("Not a valid key pressed")}}(e);"ENTER"===t?(console.log("ENTER"),this.submitPasscode(this.state.passcode,"nbt")):this.setState({passcode:[].concat(Object(r.a)(this.state.passcode),[t])})}},{key:"submitPasscode",value:function(){f(this.state.passcode)?console.log("service"):m()?y(this.state.passcode)?console.log("validan "):console.log("validan NOT"):k(this.state.passcode),this.setState({passcode:[]})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"application"},s.a.createElement(le.a,{ref:function(t){e.idleTimer=t},element:document,onActive:this.onActive,onIdle:this.onIdle,onAction:this.onAction,debounce:250,timeout:5e3}),s.a.createElement(E.a,{store:te},s.a.createElement(ie,{isIdle:this.state.isAppIdle})))}}]),t}(n.Component),de=a(44),pe=a.n(de);o.a.render(s.a.createElement(pe.a,{basename:"/orasari.safe-app.io"},s.a.createElement(ue,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.f8db19af.chunk.js.map