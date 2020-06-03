/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,n,a){return new(n||(n=Promise))((function(i,r){function c(e){try{o(a.next(e))}catch(e){r(e)}}function s(e){try{o(a.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}o((a=a.apply(e,t||[])).next())}))}function t(e,t){var n,a,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,a=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=c.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}function n(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),i=0;for(t=0;t<n;t++)for(var r=arguments[t],c=0,s=r.length;c<s;c++,i++)a[i]=r[c];return a}var a=function(){return e(void 0,void 0,void 0,(function(){var a,i,r,c,s,o,d;return t(this,(function(u){switch(u.label){case 0:return[4,e(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https:///os.mbed.com/api/v4/targets")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent().data.map((function(e){return e.attributes}))]}}))}))];case 1:return a=u.sent(),[4,e(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://raw.githubusercontent.com/ARMmbed/mbed-os/master/targets/targets.json")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))];case 2:return i=u.sent(),[4,e(void 0,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("https://s3-us-west-2.amazonaws.com/mbed-studio-private/tools/linux/cmsis-packs/cmsis-packs.json")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))];case 3:return r=u.sent(),c=function(e,t,n){var a=0,i=0;e.forEach((function(e){e.device_name&&n.devices[e.device_name]&&a++;var r=e.board_type.toUpperCase(),c=t[r];c&&c.device_name&&e.device_name&&c.device_name===e.device_name&&i++}));var r=Object.keys(t).filter((function(e){var n=t[e].detect_code;return n&&n.length}));return[{heading:"Statistics",data:["Devices in the API: "+e.length,"Devices in Mbed OS master: "+Object.keys(t).length,"CMSIS Packs in Mbed Studio: "+Object.keys(n.packs).length,"Debug targets in Mbed Studio: "+Object.keys(n.devices).length,"API devices with matching debug target in Mbed Studio: "+a,"API devices with matching device_name in Mbed OS master: "+i,"Mbed OS master devices with a detect key: "+r.length]}]}(a,i,r),s=function(e,t){var n=[],a=[],i=[];return e.forEach((function(e){var r=e.board_type.toUpperCase(),c=t[r];c&&(c.device_name&&!e.device_name&&n.push(r+" - "+c.device_name),!c.device_name&&e.device_name&&a.push(r+" - "+e.device_name),c.device_name&&e.device_name&&c.device_name!==e.device_name&&i.push(r+" - API: "+e.device_name+", Mbed: "+c.device_name))})),[{heading:"API devices missing device name, but found in Mbed OS master",data:n},{heading:"Mbed OS master devices missing device name, but found in API",data:a},{heading:"Device names mis-matching between Mbed OS master and API",data:i}]}(a,i),o=function(e,t){var n=[];Object.keys(t).forEach((function(e){var a=t[e].detect_code;a&&a.length>1&&n.push(e)}));var a=[];return e.forEach((function(e){var n=e.board_type.toUpperCase(),i=t[n];!i||i.detect_code&&0!==i.detect_code.length||a.push(n+" - "+e.product_code)})),[{heading:"Mbed OS master devices with multiple detect codes",data:n},{heading:"Mbed OS master devices missing detect code, but found in API",data:a}]}(a,i),d=function(e,t){var n=[],a=[];return e.forEach((function(e){if(e.device_name){var i=e.device_name,r=t.devices[i];if(!r)return void n.push(e.name+" - "+i);r.enabled||a.push(e.name+" - "+i)}})),[{heading:"API devices with debug target, but not found in Mbed Studio",data:n},{heading:"API devices with disabled debug target in Mbed Studio",data:a}]}(a,r),[2,n(c,s,o,d)]}}))}))};export{a as runReport};
//# sourceMappingURL=index.js.map
