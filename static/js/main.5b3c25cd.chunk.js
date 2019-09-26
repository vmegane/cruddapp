(window.webpackJsonpcrudapp=window.webpackJsonpcrudapp||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),i=(a(38),a(39),a(1));var s=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue-grey z-depth-0"},l.a.createElement("div",{className:"container"},l.a.createElement(i.b,{to:"/",className:"brand-logo hide-on-med-and-down"}," ",l.a.createElement("i",{className:"material-icons home-icon"},"home")," "),l.a.createElement("ul",{id:"nav",className:"right"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},"My listings")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/create"},"Create listing")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/manage"},"Manage"))))))},o=a(13),m=a(7),p=a(8),d=a(10),h=a(9),u=a(11),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col s12 m6 l6"},l.a.createElement("div",{className:"card horizontal hoverable"},l.a.createElement("div",{className:"card-stacked"},l.a.createElement("div",{className:"right-align"},l.a.createElement(i.b,{to:"edit/".concat(this.props.home.id),className:""}," ",l.a.createElement("i",{className:"material-icons right edit teal-text"}," edit ")," ")),l.a.createElement("div",{className:"card-content"},l.a.createElement("ul",{className:"listing"},l.a.createElement("li",null,l.a.createElement("i",{className:"material-icons left"}," location_city ")," ",l.a.createElement("b",null,"  ",this.props.home.city," ")),l.a.createElement("li",null,l.a.createElement("i",{className:"material-icons left"}," location_on "),l.a.createElement("b",null,this.props.home.street," ",this.props.home.property," ",this.props.home.apartment?"/ ".concat(this.props.home.apartment):null)),l.a.createElement("li",null,l.a.createElement("i",{className:"material-icons left"}," local_atm "),this.props.home.price)),l.a.createElement("p",null,l.a.createElement("i",{className:"material-icons left"}," info ")," ",this.props.home.description," ")),l.a.createElement("div",{className:"card-action center-align red-text"},l.a.createElement(i.b,{onClick:function(){return e.props.delete(e.props.home.id)},className:"red-text text-lighten-1"}," Delete ")))))}}]),t}(l.a.Component),v=a(16),g=a.n(v);var f=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12 l12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Search"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("i",{className:"material-icons prefix"},"search"),l.a.createElement("input",{id:"search",type:"text",className:"validate",onChange:e.handleSearch,value:e.filterby}),l.a.createElement("label",{htmlFor:"search"},"Search")))))))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).deleteListing=function(e){var t="https://alfa.propertygrouppoland.pl/q/paulinaopacka/delete/".concat(e);try{fetch(t,{method:"DELETE"}).then((function(e){return console.log(e)}))}catch(r){console.error(r)}var n=a.state.listings;console.log("prev state",n);var l=n.filter((function(t){return t.id!==e}));console.log("new state",l),a.setState({listings:l})},a.handleSearch=function(e){a.setState({filterby:e.target.value})},a.state={filterby:""},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://alfa.propertygrouppoland.pl/q/paulinaopacka/getAll").then((function(t){var a=t.data.data,n=e.setState;e.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n,{listings:a}))}))}},{key:"render",value:function(){var e,t=this;if(this.state.listings){var a=this.state.filterby.toUpperCase();e=this.state.listings.filter((function(e){return String(Object.values(e)).toUpperCase().includes(a)}))}return this.state.listings?l.a.createElement("div",{className:"container"},l.a.createElement(f,{handleSearch:this.handleSearch,filterby:this.state.filterby}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12"},e.map((function(e){return l.a.createElement(E,{key:"home-".concat(e.id),home:e,delete:t.deleteListing})}))))):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"spinner-layer spinner-red"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(o.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=JSON.stringify(a.state);try{fetch("https://alfa.propertygrouppoland.pl/q/paulinaopacka/create",{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:e}).then((function(e){return console.log(e)}))}catch(t){console.error(t)}},a.state={city:"",description:"",price:"",property:"",street:"",type:"",apartment:""},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12 l12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Create new listing"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("i",{className:"material-icons prefix"},"location_city"),l.a.createElement("input",{id:"city",type:"text",className:"validate",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"city"},"City")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6 m6 l6"},l.a.createElement("i",{className:"material-icons prefix"},"location_on"),l.a.createElement("input",{id:"street",type:"text",className:"validate",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"street"},"Street")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{id:"property",type:"number",className:"validate",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"property",className:"hide-on-small-only"},"Property")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{id:"apartment",type:"number",className:"validate",size:"3",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"apartment",className:"hide-on-small-only"},"Apartment"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("i",{className:"material-icons prefix"},"local_atm"),l.a.createElement("input",{id:"price",type:"number",className:"validate",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"price"},"Price")),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("i",{className:"material-icons prefix"},"line_weight"),l.a.createElement("input",{id:"type",type:"number",className:"validate",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"type"},"Type")))),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"info"),l.a.createElement("textarea",{id:"description",className:"materialize-textarea",value:this.state.value,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"description"},"Description")),l.a.createElement(i.b,{to:"",className:"btn-floating btn-large red lighten-2 pulse right",onClick:this.handleSubmit},l.a.createElement("i",{className:"material-icons"},"add")))))))}}]),t}(l.a.Component),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).deleteAll=function(){try{fetch("https://alfa.propertygrouppoland.pl/q/paulinaopacka/deleteAll",{method:"DELETE"}).then((function(e){return console.log(e)}))}catch(e){console.error(e)}},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12 l12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content center-align"},l.a.createElement("span",{className:"card-title center-align"},"Manage your listings"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"card red lighten-3"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"}," ",l.a.createElement("i",{className:"material-icons left"},"error"),"Danger zone"),l.a.createElement("p",null,"Click the button below to DELETE all your listings.")),l.a.createElement("div",{className:"card-action"},l.a.createElement(i.b,{to:"/",className:"waves-effect waves-light btn-large red",onClick:this.deleteAll},l.a.createElement("i",{className:"material-icons left"},"error"),"DELETE ALL")))))))))))}}]),t}(l.a.Component);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=a.state.listing;a.setState({listing:w({},t,Object(o.a)({},e.target.id,e.target.value))})},a.saveChanges=function(e){a.editListing(e),a.props.history.push("/")},a.editListing=function(e){var t=JSON.stringify(a.state.listing),n="https://alfa.propertygrouppoland.pl/q/paulinaopacka/update/".concat(e);try{fetch(n,{method:"POST",mode:"no-cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:t}).then((function(e){return console.log(e)}))}catch(l){console.error(l)}},a.state={homeid:a.props.match.params.home_id,listing:{}},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://alfa.propertygrouppoland.pl/q/paulinaopacka/get/".concat(this.state.homeid)).then((function(t){var a=t.data.data;e.setState({listing:a})}))}},{key:"render",value:function(){var e=this;return console.log(this.state),this.state.listing?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col s12 m6 l6"},l.a.createElement("div",{className:"card horizontal"},l.a.createElement("div",{className:"card-stacked"},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("i",{className:"material-icons prefix"},"location_city"),l.a.createElement("input",{id:"city",type:"text",value:this.state.listing.city,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("i",{className:"material-icons prefix"},"location_on"),l.a.createElement("input",{id:"street",type:"text",value:this.state.listing.street,onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{id:"property",type:"number",value:this.state.listing.property,onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("input",{id:"apartment",type:"number",value:this.state.listing.apartment,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("i",{className:"material-icons prefix"},"local_atm"),l.a.createElement("input",{id:"price",type:"text",className:"validate",value:this.state.listing.price,onChange:this.handleChange})),l.a.createElement("div",{className:"input-field col s2"},l.a.createElement("i",{className:"material-icons prefix"},"line_weight"),l.a.createElement("input",{id:"type",type:"number",value:this.state.listing.type,onChange:this.handleChange}))),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("i",{className:"material-icons prefix"},"mode_edit"),l.a.createElement("textarea",{id:"description",className:"materialize-textarea",value:this.state.listing.description,onChange:this.handleChange}))),l.a.createElement("div",{className:"card-action center-align red-text"},l.a.createElement(i.b,{onClick:function(){return e.saveChanges(e.state.listing.id)},className:"teal-text text-lighten-1"}," Save "),l.a.createElement(i.b,{to:"/",className:"text-lighten-1"}," Cancel "),l.a.createElement(i.b,{onClick:function(){return e.props.delete(e.props.home.id)},className:"red-text text-lighten-1"}," Delete ")))))):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12"},l.a.createElement("div",{className:"spinner-layer spinner-red"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))))))}}]),t}(l.a.Component),x=a(12);var k=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(s,null),l.a.createElement(x.c,null,l.a.createElement(x.a,{exact:!0,path:"/",component:b}),l.a.createElement(x.a,{path:"/create",component:y}),l.a.createElement(x.a,{path:"/manage",component:O}),l.a.createElement(x.a,{path:"/edit/:home_id",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.5b3c25cd.chunk.js.map