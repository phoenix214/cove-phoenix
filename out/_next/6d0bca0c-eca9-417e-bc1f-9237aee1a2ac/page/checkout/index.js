
          window.__NEXT_REGISTER_PAGE('/checkout', function() {
            var comp = module.exports=webpackJsonp([2],{120:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(5),n=l(s),o=a(0),d=l(o),r=a(119),c=l(r),i=function(e){var t=(0,c.default)();return d.default.createElement("div",{className:"jsx-89290948"},d.default.createElement("input",{type:"checkbox",id:t,checked:e.checked,onClick:e.clickHandler,className:"jsx-89290948"}),d.default.createElement("label",{htmlFor:t,className:"jsx-89290948"},e.label),d.default.createElement(n.default,{styleId:"89290948",css:['@charset "UTF-8"','[type="checkbox"].jsx-89290948{display:none;}','[type="checkbox"]:not(:checked).jsx-89290948,[type="checkbox"]:checked.jsx-89290948{position:absolute;left:-9999px;}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948,[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948{position:relative;padding-left:32px;cursor:pointer;margin-bottom:4px;display:inline-block;font-size:16px;}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948:before,[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948:before{content:\'\';position:absolute;left:0px;top:0px;width:24px;height:24px;border:2px solid #cccccc;background:#ffffff;border-radius:4px;box-shadow:inset 0 1px 3px rgba(0,0,0,0.1);}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948:after,[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948:after{content:\'✔\';position:absolute;top:0px;left:6px;font-size:20px;line-height:1.2;color:#09ad7e;-webkit-transition:all .2s;transition:all .2s;}','[type="checkbox"]:not(:checked).jsx-89290948+label.jsx-89290948:after{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}','[type="checkbox"]:checked.jsx-89290948+label.jsx-89290948:after{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}','[type="checkbox"]:disabled:not(:checked).jsx-89290948+label.jsx-89290948:before,[type="checkbox"]:disabled:checked.jsx-89290948+label.jsx-89290948:before{box-shadow:none;border-color:#999999;background-color:#dddddd;}','[type="checkbox"]:disabled:checked.jsx-89290948+label.jsx-89290948:after{color:#999999;}','[type="checkbox"]:disabled.jsx-89290948+label.jsx-89290948{color:#aaaaaa;}','[type="checkbox"]:checked:focus.jsx-89290948+label.jsx-89290948:before,[type="checkbox"]:not(:checked).jsx-89290948:focus+label.jsx-89290948:before{border:2px dotted #0000ff;}',"label.jsx-89290948:hover.jsx-89290948:before{border:2px solid #4778d9 !important;background:#ffffff;}"]}))};t.default=i},22:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(7),n=l(s),o=a(1),d=l(o),r=a(2),c=l(r),i=a(8),u=l(i),m=a(9),f=l(m),x=a(5),p=l(x),E=a(0),h=l(E),g=function(e){function t(e){(0,d.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={active:!1},a.toggle=a.toggle.bind(a),a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"toggle",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this.props;return h.default.createElement("div",{className:"jsx-1986393678 inputBlock"},h.default.createElement("div",{onFocus:this.toggle,onBlur:this.toggle,className:"jsx-1986393678 coveInput "+(this.state.active?"activeInput":"")},h.default.createElement("input",{type:e.type||"text",placeholder:e.placeholder,className:"jsx-1986393678"})),h.default.createElement("div",{className:"jsx-1986393678 inputLabel"},e.label),h.default.createElement(p.default,{styleId:"1986393678",css:[".coveInput.jsx-1986393678{position:relative;border-bottom:1px solid #777A81;border-left:0px;border-top:0px;border-right:0px;padding:2px 10px 2px 10px;}",'.coveInput.jsx-1986393678::before{position:absolute;bottom:0px;left:0px;content:"";border-left:1px solid #777A81;height:8px;width:1px;}','.coveInput.jsx-1986393678::after{position:absolute;bottom:0px;right:0px;content:"";border-left:1px solid #777A81;height:8px;width:1px;}',".coveInput.jsx-1986393678 input.jsx-1986393678{border:0px;width:100%;caret-color:#00CDB9;}",".activeInput.jsx-1986393678,.activeInput.jsx-1986393678::before,.activeInput.jsx-1986393678::after{border-color:#00CDB9;}",".inputLabel.jsx-1986393678{font-family:GothamRoundedBook;font-size:12px;color:#191E2B;margin-top:4px;}"]}))}}]),t}(E.Component);t.default=g},247:function(e,t,a){e.exports=a(248)},248:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(7),n=l(s),o=a(1),d=l(o),r=a(2),c=l(r),i=a(8),u=l(i),m=a(9),f=l(m),x=a(5),p=l(x),E=a(0),h=l(E),g=a(4),b=a(28),j=l(b),C=a(80),v=l(C),N=a(37),y=l(N),k=a(22),w=(l(k),a(249)),R=l(w),S=a(250),I=l(S),_=a(251),B=l(_),P=a(252),F=l(P),M=a(253),A=function(e){function t(e){(0,d.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={step:1},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=parseInt((0,M.getUrlParameter)("step"));console.log("step",e),this.state.step!=e&&this.setState({step:e})}},{key:"render",value:function(){var e=(this.props,this.state.step?this.state.step:1);return h.default.createElement(y.default,null,h.default.createElement(g.Container,null,h.default.createElement(v.default,{color:"secondary"}),h.default.createElement("div",{className:"jsx-4219716963 spacer"}),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:8},h.default.createElement("div",{className:"jsx-4219716963 checkoutStageRow"},h.default.createElement(g.Row,null,h.default.createElement("div",{className:"jsx-4219716963 flexCol "+(1==e?"activeStage":"")},h.default.createElement(j.default,{href:{pathname:"/checkout",query:{step:1}}},h.default.createElement("div",{className:"jsx-4219716963 checkoutStageOne link "},"1 ",h.default.createElement("span",{className:"jsx-4219716963 stageLabel"},"Customer Info"),h.default.createElement("div",{className:"jsx-4219716963 stageIndicator"})))),h.default.createElement("div",{className:"jsx-4219716963 flexCol "+(2==e?"activeStage":"")},h.default.createElement("div",{className:"jsx-4219716963 checkoutStageTwo link "},"2 ",h.default.createElement("span",{className:"jsx-4219716963 stageLabel"},"Shipping Info"),h.default.createElement("div",{className:"jsx-4219716963 stageIndicator"}))),h.default.createElement("div",{className:"jsx-4219716963 flexCol "+(3==e?"activeStage":"")},h.default.createElement("div",{className:"jsx-4219716963 checkoutStageThree link "},"3 ",h.default.createElement("span",{className:"jsx-4219716963 stageLabel"},"Payment Information"),h.default.createElement("div",{className:"jsx-4219716963 stageIndicator"}))))),h.default.createElement("div",{className:"jsx-4219716963 shoppingCartBtnContainer"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement("div",{className:"jsx-4219716963 shoppingCartBtn"},h.default.createElement(j.default,{href:"/cart"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:10},"View Shopping Cart"),h.default.createElement(g.Col,{xs:2},h.default.createElement("img",{src:"/static/images/arrowFullRight.png",className:"jsx-4219716963"})))))))),h.default.createElement("div",{className:"jsx-4219716963 tab "+(1==e?"activePage":"")},h.default.createElement(I.default,null)),h.default.createElement("div",{className:"jsx-4219716963 tab "+(2==e?"activePage":"")},h.default.createElement(B.default,null)),h.default.createElement("div",{className:"jsx-4219716963 tab "+(3==e?"activePage":"")},h.default.createElement(F.default,null)),h.default.createElement("div",{className:"jsx-4219716963 footerControls"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:8},h.default.createElement("ul",{className:"jsx-4219716963 list-inline returnToShop"},h.default.createElement("li",{className:"jsx-4219716963 list-inline-item align-top"},h.default.createElement("img",{src:"/static/images/arrowFullLeft.png",className:"jsx-4219716963"})),h.default.createElement("li",{className:"jsx-4219716963 list-inline-item returnLink"},"Return to Shop"))),h.default.createElement(g.Col,{xs:12,sm:12,md:4},h.default.createElement("div",{className:"jsx-4219716963 actionBtn"},"Continue to Shipping"))))),h.default.createElement(g.Col,{className:"justify-content-end",md:4},h.default.createElement("div",{className:"jsx-4219716963 checkoutSidebar"},h.default.createElement(R.default,null))))),h.default.createElement(p.default,{styleId:"1476280779",css:["@media (max-width:767px){.checkoutSidebar.jsx-4219716963{display:none;}}",".flexCol.jsx-4219716963{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px;-ms-flex:0 0 25%;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}","@media (max-width:767px){.flexCol.jsx-4219716963 .stageLabel.jsx-4219716963{display:none;}}","@media (max-width:767px){.flexCol.activeStage.jsx-4219716963{-ms-flex:0 0 50%;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}}",".flexCol.activeStage.jsx-4219716963 .stageLabel.jsx-4219716963{display:inline;}",".shoppingCartBtnContainer.jsx-4219716963{width:100%;height:68px;border-radius:16px;border:1px solid #F0F4F7;font-size:20px;font-family:GothamRoundedBold;margin-top:32px;-webkit-box-shadow:0px 6px 6px 0px rgba(44,50,57,0.2);-moz-box-shadow:0px 6px 6px 0px rgba(44,50,57,0.2);box-shadow:0px 6px 6px 0px rgba(44,50,57,0.2);}","@media (min-width:768px){.shoppingCartBtnContainer.jsx-4219716963{display:none;}}",".shoppingCartBtn.jsx-4219716963{padding-top:18px;}",".spacer.jsx-4219716963{margin-top:60px;}",".checkoutStageRow.jsx-4219716963{font-family:GothamRoundedBold;font-size:14px;color:#8A9097;}",".stageIndicator.jsx-4219716963{width:100%;height:8px;border-radius:4px;background:#BEC1C5;opacity:0.5;margin-top:6px;}",".activeStage.jsx-4219716963{color:#191E2B;}",".activeStage.jsx-4219716963 .stageIndicator.jsx-4219716963{background:#5BC4B8;opacity:1;}",".footerControls.jsx-4219716963{margin-top:100px;}",".returnLink.jsx-4219716963{font-family:GothamRoundedBold;font-size:16px;color:#8A9097;padding-top:3px;}",".actionBtn.jsx-4219716963{color:#FFFFFF;height:40px;width:236px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background:#F17927;font-size:16px;text-align:center;font-family:GothamRoundedBook;font-weight:bold;padding-top:8px;cursor:pointer;}",".tab.jsx-4219716963{display:none;}",".activePage.tab.jsx-4219716963{display:block;}","@media (max-width:767px){.returnToShop.jsx-4219716963{text-align:center;}}","@media (max-width:767px){.actionBtn.jsx-4219716963{margin-left:auto;margin-right:auto;margin-bottom:32px;}}"]}),h.default.createElement(p.default,{styleId:"3788269409",css:[".customerInfo .coveInput{margin-top:40px;}"]}))}}]),t}(E.Component);t.default=A},249:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(7),n=l(s),o=a(1),d=l(o),r=a(2),c=l(r),i=a(8),u=l(i),m=a(9),f=l(m),x=a(5),p=l(x),E=a(0),h=l(E),g=a(4),b=a(22),j=l(b),C=a(38),v=l(C),N=function(e){function t(e){(0,d.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={collapse:!1,finance:!1},a.toggleCoupon=a.toggleCoupon.bind(a),a.toggleFinance=a.toggleFinance.bind(a),a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"toggleCoupon",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFinance",value:function(e){this.setState({finance:e})}},{key:"render",value:function(){var e=this,t=this.state.collapse?"arrowUp.png":"arrowDown.png";return h.default.createElement("div",{className:"jsx-136839908 sidebarContainer"},h.default.createElement("div",{className:"jsx-136839908 equipmentPackage"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement("h3",{className:"jsx-136839908"},"Shopping Cart"),h.default.createElement("p",{className:"jsx-136839908 bold"},"Equipment Package"),h.default.createElement("h4",{className:"jsx-136839908"},"$499.99 or $8.33/mo"))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:4},h.default.createElement("img",{src:"/static/images/placeholderThumbSquare.png",className:"jsx-136839908"})),h.default.createElement(g.Col,{xs:8},h.default.createElement("ul",{className:"jsx-136839908 cartProductList"},h.default.createElement("li",{className:"jsx-136839908"},'17" Touchscreen Control Panel'),h.default.createElement("li",{className:"jsx-136839908"},"3 Doors"),h.default.createElement("li",{className:"jsx-136839908"},"2 Motions"),h.default.createElement("li",{className:"jsx-136839908"},"1 Smoke"),h.default.createElement("li",{className:"jsx-136839908"},"2 Key Fobs"))))),h.default.createElement("div",{className:"jsx-136839908 monthlyService"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement("p",{className:"jsx-136839908 bold"},"Monthly Monitoring Service"),h.default.createElement("h4",{className:"jsx-136839908"},"$19.99"))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:4},h.default.createElement("img",{src:"/static/images/placeholderThumbSquare.png",className:"jsx-136839908"})))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement("div",{className:"jsx-136839908 coupon"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:10},h.default.createElement("p",{className:"jsx-136839908 bold"},"Have a Coupon")),h.default.createElement(g.Col,{xs:2,onClick:this.toggleCoupon},h.default.createElement("img",{src:"/static/images/"+t,className:"jsx-136839908"}))),h.default.createElement(g.Collapse,{isOpen:this.state.collapse},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement(j.default,{label:"Coupon Code"}))))))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement("div",{onClick:function(){return e.toggleFinance(!1)},className:"jsx-136839908"},h.default.createElement(v.default,{label:[h.default.createElement("span",{className:"jsx-136839908 bold"},"Pay In Full")],checked:!this.state.finance})))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12},h.default.createElement("div",{onClick:function(){return e.toggleFinance(!0)},className:"jsx-136839908"},h.default.createElement(v.default,{label:[h.default.createElement("span",{className:"jsx-136839908 bold"},"Finance 0% APR")],checked:this.state.finance})))),h.default.createElement("div",{className:"jsx-136839908 cartPricing"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:9},"5 year Prime Subscription"),h.default.createElement(g.Col,{xs:3},h.default.createElement("span",{className:"jsx-136839908 bold"},"$99.99"))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:9},"Monthly Monitoring"),h.default.createElement(g.Col,{xs:3},h.default.createElement("span",{className:"jsx-136839908 bold"},"$19.99"))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:9},"Equipment Payment"),h.default.createElement(g.Col,{xs:3},h.default.createElement("span",{className:"jsx-136839908 bold"},"$8.33"))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:9},"Subtotal"),h.default.createElement(g.Col,{xs:3},h.default.createElement("span",{className:"jsx-136839908 bold"},"$128.31"))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:9},"Shipping"),h.default.createElement(g.Col,{xs:3},h.default.createElement("span",{className:"jsx-136839908 bold"},"Free")))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:{size:3,offset:5}},h.default.createElement("span",{className:"jsx-136839908 totalLabel"},"Total")),h.default.createElement(g.Col,{xs:4},h.default.createElement("span",{className:"jsx-136839908 totalPrice"},"$128.31"))),h.default.createElement(p.default,{styleId:"1851906636",css:[".sidebarContainer.jsx-136839908{padding:20px 10px 20px 10px;-webkit-box-shadow:0px 6px 5px 2px rgba(44,50,57,0.2);-moz-box-shadow:0px 6px 5px 2px rgba(44,50,57,0.2);box-shadow:0px 6px 5px 2px rgba(44,50,57,0.2);min-height:500px;width:368px;margin-bottom:15px;border-radius:16px;border:1px solid #F0F4F7;margin-left:auto;}",".sidebarContainer.jsx-136839908 h3.jsx-136839908{font-family:GothamRoundedBold;font-size:24px;margin-bottom:30px;}",".sidebarContainer.jsx-136839908 h4.jsx-136839908{font-family:GothamRoundedBold;font-size:20px;color:#00B19A;}",".cartProductList.jsx-136839908{list-style:none;font-size:12px;padding-left:0px;}",".equipmentPackage.jsx-136839908{margin-bottom:30px;}",".monthlyService.jsx-136839908{margin-bottom:30px;}",".coupon.jsx-136839908{border-top:1px solid #00B19A;border-bottom:1px solid #00B19A;padding-top:10px;margin-bottom:30px;}",".cartPricing.jsx-136839908{margin-top:30px;margin-bottom:20px;font-size:14px;border-bottom:1px solid #00B19A;}",".cartPricing.jsx-136839908 .row.jsx-136839908{margin-bottom:15px;}",".totalLabel.jsx-136839908{font-family:GothamRoundedLight;font-size:20px;}",".totalPrice.jsx-136839908{font-family:GothamRoundedBold;font-size:20px;}",".bold.jsx-136839908{font-weight:bold;}"]}),h.default.createElement(p.default,{styleId:"3162988129",css:[".cartPricing .row{margin-bottom:15px;}"]}))}}]),t}(E.Component);t.default=N},250:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(5),n=l(s),o=a(0),d=l(o),r=a(4),c=a(22),i=l(c),u=function(){return d.default.createElement("div",{className:"jsx-3357955182"},d.default.createElement("div",{className:"jsx-3357955182 customerInfo"},d.default.createElement("h3",{className:"jsx-3357955182"},"Customer Information"),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"First Name"})),d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Last Name"}))),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Email Address"})),d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Phone"})))),d.default.createElement("div",{className:"jsx-3357955182 customerInfo"},d.default.createElement("h3",{className:"jsx-3357955182"},"Monitoring Information"),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:12,sm:12,md:8},d.default.createElement(i.default,{label:"Monitoring Address"})),d.default.createElement(r.Col,{md:4},d.default.createElement(i.default,{label:"Apt # or Unit #"})),d.default.createElement(r.Col,{md:4},d.default.createElement(i.default,{label:"Postal Code"}))),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Emergency Contact"})),d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Phone"}))),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Verbal Password"})),d.default.createElement(r.Col,{xs:12,sm:12,md:6},d.default.createElement(i.default,{label:"Mastercode"})))),d.default.createElement(n.default,{styleId:"3357955182",css:[".customerInfo.jsx-3357955182 h3.jsx-3357955182{margin-top:60px;margin-bottom:30px;font-size:24px;font-family:GothamRoundedBold;color:#191E2B;}"]}))};t.default=u},251:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(7),n=l(s),o=a(1),d=l(o),r=a(2),c=l(r),i=a(8),u=l(i),m=a(9),f=l(m),x=a(5),p=l(x),E=a(0),h=l(E),g=a(4),b=a(22),j=l(b),C=a(120),v=l(C),N=a(38),y=l(N),k=function(e){function t(e){(0,d.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={differentAddress:!1,standardDelivery:!0,warranty:null},a.toggleShippingAddress=a.toggleShippingAddress.bind(a),a.toggleShippMethod=a.toggleShipMethod.bind(a),a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"toggleShippingAddress",value:function(){this.setState({differentAddress:!this.state.differentAddress})}},{key:"toggleShipMethod",value:function(e){this.setState({standardDelivery:e})}},{key:"toggleWarranty",value:function(e){this.setState({warranty:e})}},{key:"render",value:function(){var e=this;return h.default.createElement("div",{className:"jsx-1508634022"},h.default.createElement("div",{className:"jsx-1508634022 customerInfo"},h.default.createElement("h3",{className:"jsx-1508634022"},"Shipping Information"),h.default.createElement("div",{className:"jsx-1508634022"},h.default.createElement(v.default,{clickHandler:this.toggleShippingAddress,checked:this.state.differentAddress,label:"Shipping info is different than Monitored Address."})),h.default.createElement(g.Collapse,{isOpen:this.state.differentAddress},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement(j.default,{label:"First Name"})),h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement(j.default,{label:"Last Name"}))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement(j.default,{label:"Email Address"})),h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement(j.default,{label:"Phone"}))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:8},h.default.createElement(j.default,{label:"Ship To Address"})),h.default.createElement(g.Col,{xs:6,sm:6,md:4},h.default.createElement(j.default,{label:"Apt # or Unit #"}))),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:6,sm:6,md:4},h.default.createElement(j.default,{label:"Postal Code"})))),h.default.createElement(g.Collapse,{isOpen:!this.state.differentAddress},h.default.createElement("div",{className:"jsx-1508634022 shippingMap"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement("div",{className:"jsx-1508634022 mapAddress"},h.default.createElement("p",{className:"jsx-1508634022 bold"},"Jenny Williams"),h.default.createElement("p",{className:"jsx-1508634022"},"10332 S Kestrel Rise Rd."),h.default.createElement("p",{className:"jsx-1508634022"},"South Jordan, UT 84009"),h.default.createElement("p",{className:"jsx-1508634022"},h.default.createElement("span",{className:"jsx-1508634022 bold"},"Tel.")," 801 745.1342"))),h.default.createElement(g.Col,{xs:12,sm:12,md:6,style:{paddingLeft:"0px",paddingRight:"0px"}},h.default.createElement("img",{src:"/static/images/placeholderMap.png",className:"jsx-1508634022 img-fluid"})))))),h.default.createElement("div",{className:"jsx-1508634022 shippingInfo"},h.default.createElement("h3",{className:"jsx-1508634022"},"Shipping Method"),h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement("div",{className:"jsx-1508634022 shipOptionBox"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:{size:11,offset:1}},h.default.createElement("div",{className:"jsx-1508634022 shipOptionHeader"},h.default.createElement(y.default,{label:[h.default.createElement("span",{className:"jsx-1508634022 bold"},"Standard Delivery")],checked:this.state.standardDelivery}))),h.default.createElement(g.Col,{xs:{size:10,offset:2}},h.default.createElement("h4",{className:"jsx-1508634022"},"Free with Prime")),h.default.createElement(g.Col,{xs:{size:10,offset:1}},h.default.createElement("div",{className:"jsx-1508634022 shipMethodDetails"},"Estimated 14-20 Day Shipping (Duties and taxes may be due upon delivery)"))))),h.default.createElement(g.Col,{xs:12,sm:12,md:6},h.default.createElement("div",{className:"jsx-1508634022 shipOptionBox"},h.default.createElement(g.Row,null,h.default.createElement(g.Col,{xs:{size:11,offset:1}},h.default.createElement("div",{className:"jsx-1508634022 shipOptionHeader"},h.default.createElement(y.default,{clickHandler:function(){return e.toggleShipMethod(!1)},label:[h.default.createElement("span",{className:"jsx-1508634022 bold"},"Fast Delivery")],checked:!this.state.standardDelivery}))),h.default.createElement(g.Col,{xs:{size:10,offset:2}},h.default.createElement("h4",{className:"jsx-1508634022"},"$8.00")),h.default.createElement(g.Col,{xs:{size:10,offset:1}},h.default.createElement("div",{className:"jsx-1508634022 shipMethodDetails"},"Estimated 2-5 Day Shipping (Duties and taxes may be due upon delivery)"))))))),h.default.createElement("div",{className:"jsx-1508634022 customerInfo"},h.default.createElement("h3",{className:"jsx-1508634022"},"Extended Warranty - $3/mo"),h.default.createElement("p",{className:"jsx-1508634022"},"Extended Warranty provides free replacement of equipment and shipping no matter what the cause of the equipment to malfunction or break."),h.default.createElement("ul",{className:"jsx-1508634022 list-inline warrantyControls"},h.default.createElement("li",{className:"jsx-1508634022 list-inline-item"},h.default.createElement(y.default,{clickHandler:function(){return e.toggleWarranty("accept")},label:[h.default.createElement("span",{className:"jsx-1508634022 bold"},"Accept")],checked:"accept"==this.state.warranty})),h.default.createElement("li",{className:"jsx-1508634022 list-inline-item"},h.default.createElement(y.default,{clickHandler:function(){return e.toggleWarranty("decline")},label:[h.default.createElement("span",{className:"jsx-1508634022 bold"},"Decline")],defaultChecked:!1,checked:"decline"==this.state.warranty})))),h.default.createElement(p.default,{styleId:"438883624",css:[".customerInfo.jsx-1508634022 h3.jsx-1508634022,.shippingInfo.jsx-1508634022 h3.jsx-1508634022{margin-top:60px;margin-bottom:30px;font-size:24px;font-family:GothamRoundedBold;color:#191E2B;}",".customerInfo.jsx-1508634022 .shippingInfo.jsx-1508634022 .col-sm-12.jsx-1508634022{margin-top:0px;}",".shippingMap.jsx-1508634022{border:1px solid #DEDFE1;border-radius:16px;max-width:656px;margin-top:30px;}",".mapAddress.jsx-1508634022{padding:30px;}",".shipOptionBox.jsx-1508634022{height:197px;border:1px solid #DEDFE1;border-radius:16px;margin-right:20px;}",".shipOptionHeader.jsx-1508634022{margin-top:20px;}",".shipMethodDetails.jsx-1508634022{margin-top:20px;}","h4.jsx-1508634022{font-family:GothamRoundedBold;font-size:20px;color:#00B19A;}",".warrantyControls.jsx-1508634022 li.jsx-1508634022{margin-right:50px;}"]}),h.default.createElement(p.default,{styleId:"2054571463",css:[".customerInfo .shippingMap .row{margin-top:0px;}",".bold{font-weight:bold;}"]}))}}]),t}(E.Component);t.default=k},252:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(5),n=l(s),o=a(0),d=l(o),r=a(4),c=a(22),i=l(c),u=a(120),m=l(u),f=function(){return d.default.createElement("div",{className:"jsx-3890481359"},d.default.createElement("div",{className:"jsx-3890481359 customerInfo"},d.default.createElement("h3",{className:"jsx-3890481359"},"Payment Selection"),d.default.createElement(r.Row,{className:"justify-content-between"},d.default.createElement(r.Col,{xs:"3"},d.default.createElement("h4",{className:"jsx-3890481359"},"Credit Card")),d.default.createElement(r.Col,{xs:"2"},d.default.createElement("img",{src:"/static/images/creditcards.png",className:"jsx-3890481359"}))),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:12},d.default.createElement(i.default,{label:"Credit Card",placeholder:"0000 - 0000 - 000 - 0000"}))),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:6},d.default.createElement(i.default,{label:"Name on Card"})),d.default.createElement(r.Col,{xs:3},d.default.createElement(i.default,{label:"Expiration Date"})),d.default.createElement(r.Col,{xs:3},d.default.createElement(i.default,{label:"CVV Code"}))),d.default.createElement(r.Row,null,d.default.createElement(r.Col,{xs:1},d.default.createElement("div",{className:"jsx-3890481359 termsCheckbox"},d.default.createElement(m.default,null))),d.default.createElement(r.Col,{xs:11},d.default.createElement(i.default,{label:"Full Name"})),d.default.createElement(r.Col,{xs:12},d.default.createElement("div",{className:"jsx-3890481359 financeAgreement"},"To accept terms of ",d.default.createElement("span",{className:"jsx-3890481359 linkTertiary"},"Financing Agreement "),"please type full name below and click accept")),d.default.createElement(r.Col,{xs:1},d.default.createElement("div",{className:"jsx-3890481359 termsCheckbox"},d.default.createElement(m.default,null))),d.default.createElement(r.Col,{xs:11},d.default.createElement("div",{className:"jsx-3890481359 acceptance"},"I accept the ",d.default.createElement("span",{className:"jsx-3890481359 linkTertiary"}," Terms and Conditons"))))),d.default.createElement(n.default,{styleId:"3890481359",css:[".customerInfo.jsx-3890481359 h3.jsx-3890481359{margin-top:60px;margin-bottom:30px;font-size:24px;font-family:GothamRoundedBold;color:#191E2B;}",".customerInfo.jsx-3890481359 h4.jsx-3890481359{font-family:GothamRoundedBold;font-size:20px;}",".customerInfo.jsx-3890481359 .linkTertiary.jsx-3890481359{font-weight:bold;color:#008CFF;}",".customerInfo.jsx-3890481359 .financeAgreement.jsx-3890481359{margin-top:10px;margin-bottom:10px;font-size:14px;}",".customerInfo.jsx-3890481359 .acceptance.jsx-3890481359{font-size:14px;padding-top:14px;}"]}))};t.default=f},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),a=t.exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}}},[247]);
            return { page: comp.default }
          })
        