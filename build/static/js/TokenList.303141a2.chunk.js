(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1142:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(15),r=a(16),l=a(23),c=a(22),o=a(24),s=a(0),i=a.n(s),u=a(158),m=a(11),p=a(3),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={open:!1,id:Object(u.a)(24)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,l=r.text,c=r.placement,o=r.testSecond,s=void 0===o?"":o,u=r.className,d=void 0===u?"":u,f=r.info,b=void 0===f?"":f;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(m.h,{placement:c,isOpen:a,target:n,className:d,innerClassName:"w-100"},l?Object(p.b)(l):"",s?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(p.b)(s)):"",b||""))}}]),t}(i.a.Component)},1151:function(e,t,a){"use strict";a.d(t,"a",function(){return O});var n=a(1197),r=a.n(n),l=a(136),c=a.n(l),o=a(1150),s=a.n(o),i=a(1147),u=a.n(i),m=a(2),p=a.n(m),d=a(8),f=a(4),b=a(15),g=a(16),h=a(23),E=a(22),x=a(24),k=a(0),w=a.n(k),v=a(3),y=a(17),O=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).loadDatas=Object(f.a)(p.a.mark(function e(){var t,n,r,l,c=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:40,r=a.state.filter,e.next=5,y.a.getTokens(Object(d.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(d.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(d.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(d.a)({},e,{name:w.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?w.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:w.a.createElement("div",{className:"custom-filter-dropdown"},w.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),w.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(v.c)("search")),w.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(v.c)("reset"))),filterIcon:w.a.createElement(c.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],l=!0,o=!1,i=void 0;try{for(var m,p=e[Symbol.iterator]();!(l=(m=p.next()).done);l=!0){var f=m.value;if(f.sorter&&!f.filterDropdown){var b={sorter:t(f.key)};r.push(Object(d.a)({},f,b))}else if(!f.sorter&&f.filterDropdown){var g=Object(d.a)({},n);r.push(Object(d.a)({},f,g))}else if(f.sorter&&f.filterDropdown){var h=Object(d.a)({sorter:t(f.key)},n);r.push(Object(d.a)({},f,h))}else r.push(f)}}catch(E){o=!0,i=E}finally{try{l||null==p.return||p.return()}finally{if(o)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(x.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:Object(d.a)({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,c=e.bordered,o=e.pagination,s=void 0===o||o,i=e.scroll,u=e.locale,m=e.addr,p=e.transfers,f=(e.contractAddress,this.setColumn(l)),b=s?Object(d.a)({total:t},this.state.pagination):s;return w.a.createElement("div",null,m?w.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==p?" transfer-mt-100":" transfer-pt-100")},w.a.createElement(r.a,{bordered:c,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})," "):w.a.createElement("div",{className:"card table_pos"},w.a.createElement(r.a,{bordered:c,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})))}}]),t}(k.Component)},1168:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},1760:function(e,t,a){var n=a(94);e.exports=function(e){return n(e).toLowerCase()}},1891:function(e,t,a){"use strict";var n=a(1150),r=a.n(n),l=a(1147),c=a.n(l),o=a(15),s=a(16),i=a(23),u=a(22),m=a(24),p=a(0),d=a.n(p),f=a(3),b=a(80),g=a.n(b);d.a.Component},3310:function(e,t,a){"use strict";a.r(t);var n,r=a(1760),l=a.n(r),c=a(206),o=a.n(c),s=a(34),i=a.n(s),u=a(2),m=a.n(u),p=a(4),d=a(15),f=a(16),b=a(23),g=a(22),h=a(24),E=a(0),x=a.n(E),k=a(30),w=a(306),v=a(12),y=a(43),O=a.n(y),C=a(3),N=a(17),j=a(18),S=a(1142),T=a(308),A=(a(1891),a(66)),_=a(1151),R=a(6),D=a(20),M=a(44),U=a(72),I=a(67),V=a(21),B=a.n(V),W=a(10),F=a.n(W),P=a(113),q=a(52),J=Object(P.a)(n=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).loadPage=Object(p.a)(m.a.mark(function e(){var t,a,r,l,c,o,s,i,u=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:1,a=u.length>1&&void 0!==u[1]?u[1]:20,r=n.state.filter,l=n.props.intl,n.setState({loading:!0}),!r.name){e.next=13;break}return e.next=8,B.a.get(R.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&name="+r.name);case 8:c=e.sent,o=c.data.data.length,s=c.data.totalAll,e.next=18;break;case 13:return e.next=15,B.a.get(R.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&totalAll=1&showAll=2");case 15:c=e.sent,o=c.data.total,s=c.data.totalAll;case 18:return 0===(i=c.data.data).length&&A.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:i,total:o,totalAll:s}),e.abrupt("return",o);case 22:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=i()(Object(T.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;e>a&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e}),n.buyAmount.value=e;var l=e*t;n.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})},n.preBuyTokens=function(e){n.state.buyAmount;var t=n.props;t.currentWallet;t.wallet.isOpen?n.setState({alert:x.a.createElement(O.a,{showConfirm:!1},x.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},x.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},x.a.createElement("i",{className:"fa fa-times"})),x.a.createElement("h5",{style:{color:"black"}},Object(C.c)("buy_token_info")),0===e.remaining&&x.a.createElement("span",null," ",Object(C.c)("no_token_to_buy")),x.a.createElement("div",{className:"input-group mt-5"},x.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/R.C,e.remaining)}})),x.a.createElement("div",{className:"text-center mt-3 text-muted"},x.a.createElement("b",null,"= ",x.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0")," TRX")),x.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(C.c)("participate"))))}):n.setState({alert:x.a.createElement(O.a,{info:!0,showConfirm:!1},x.a.createElement("div",{className:"token-sweet-alert"},x.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},x.a.createElement("i",{className:"fa fa-times"})),x.a.createElement("span",null,Object(C.c)("login_first")),x.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(C.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,l=r.currentWallet,c=(r.wallet,a*(t/R.C));l.balance/R.C<c?n.setState({alert:x.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},x.a.createElement("div",{className:"mt-5 token-sweet-alert"},x.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},x.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),x.a.createElement("span",null,Object(C.c)("not_enough_trx_message")),x.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(C.c)("confirm"))))}):n.setState({alert:x.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},x.a.createElement("div",{className:"mt-5 token-sweet-alert"},x.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},x.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),x.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(C.c)("buy_confirm_message_1")),x.a.createElement("span",null,a," ",e.name," ",Object(C.b)("for")," ",parseFloat((a*(t/R.C)).toFixed(6))," TRX?"),x.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(C.c)("confirm"))))})}},n.submit=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r,l,c,o,s,i,u,p,d,f,b,g,h,E;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,l=r.account,c=r.currentWallet,o=n.state.buyAmount,!F.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(i=n.props.tronWeb(),u=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"!==n.props.walletType.type){e.next=16;break}return e.next=10,i.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((o*a).toFixed(0)),n.props.walletType.address).catch(function(e){return!1});case 10:return p=e.sent,e.next=13,Object(I.c)(p,i);case 13:d=e.sent,f=d.result,s=f;case 16:if("ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=25;break}return e.next=19,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((o*a).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});case 19:return b=e.sent,e.next=22,Object(I.c)(b,u);case 22:g=e.sent,h=g.result,s=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,N.a.participateAsset(c.address,t.ownerAddress,t.id+"",parseInt((o*a).toFixed(0)))(l.key);case 34:E=e.sent,s=E.success;case 36:if(!s){e.next=41;break}return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),e.abrupt("return",!0);case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,a.account,r=a.intl,n.state.buyAmount,n.setState({alert:x.a.createElement(O.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:r.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,n.submit(t);case 5:if(!e.sent){e.next=9;break}n.setState({alert:x.a.createElement(O.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},x.a.createElement("div",{className:"mt-5 token-sweet-alert"},x.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},x.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),x.a.createElement("h5",{style:{color:"black"}},Object(C.c)("transaction")," ",Object(C.c)("confirm")),x.a.createElement("span",null,Object(C.c)("success_receive")," ",t.name," ",Object(C.c)("tokens")),x.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(C.c)("OK"))))}),e.next=10;break;case 9:n.setState({alert:x.a.createElement(O.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(C.c)("fail_transaction"))});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl,t=a(1168);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:o()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,n,r){return x.a.createElement("div",{className:"table-imgtext"},n.imgUrl?x.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==n.id?x.a.createElement("div",{className:"token-img-top"},x.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),x.a.createElement("i",null)):x.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):x.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},x.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1168)})),x.a.createElement("div",null,x.a.createElement("h5",null,x.a.createElement(j.f,{name:n.name,id:n.id,namePlus:n.name+" ("+n.abbr+")",address:n.ownerAddress})),x.a.createElement("p",{style:{wordBreak:"break-all"}},n.description)))}},{title:"ID",render:function(e,t,a){return x.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t,a){return x.a.createElement("div",null,x.a.createElement(v.c,{value:t.participated/R.C,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(t,a,n){var r=l()(t);return x.a.createElement("div",null,r&&e.formatMessage({id:r}))}},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,a){return null===e&&(e=0),x.a.createElement("div",null,x.a.createElement(v.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e,t,a){return x.a.createElement(v.a,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t,a){return t.isBlack?x.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},Object(C.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?x.a.createElement("span",{style:{fontWeight:"normal"}},Object(C.c)("finish")):t.startTime>new Date?x.a.createElement("span",{style:{fontWeight:"normal"}},Object(C.c)("not_started")):x.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(C.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var r=i()(Object(T.a)(e.location,"search"));return r.length>0&&(n.state.filter.name="".concat(r)),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,c=t.totalAll,o=this.props,s=(o.match,o.intl),i=this.customizedColumn(),u=s.formatMessage({id:"part_total"})+" "+l+"/"+c+" "+s.formatMessage({id:"part_pass"});return x.a.createElement("main",{className:"container header-overlap token_black"},n,r&&x.a.createElement("div",{className:"loading-style"},x.a.createElement(U.b,null)),x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"col-md-12 table_pos"},l?x.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",x.a.createElement("span",null,x.a.createElement(S.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," ","\xa0\xa0"," ",x.a.createElement(q.a,{to:"/exchange/trc10"},Object(C.b)("Trade_on_TRXMarket"),">")):"",x.a.createElement(_.a,{bordered:!0,loading:r,column:i,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(E.Component))||n;var L={loadTokens:w.b,login:D.v,reloadWallet:M.c};t.default=Object(k.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},L)(Object(v.h)(J))}}]);