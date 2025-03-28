"use strict";(self.webpackChunkStoryBookNewDemoWithTemplate=self.webpackChunkStoryBookNewDemoWithTemplate||[]).push([[375],{"./node_modules/@storybook/addon-actions/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var previewApi=__webpack_require__("storybook/internal/preview-api"),previewErrors=__webpack_require__("storybook/internal/preview-errors"),global=__webpack_require__("@storybook/global"),uuid=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/index.js"),__defProp=Object.defineProperty,preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var ADDON_ID="storybook/actions",PANEL_ID=`${ADDON_ID}/panel`,EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=`${ADDON_ID}/action-clear`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in global.global?global.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new previewErrors.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=previewApi.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?uuid.v4():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in global.global&&"function"==typeof global.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,global.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}];exports.ADDON_ID=ADDON_ID,exports.CLEAR_ID=CLEAR_ID,exports.CYCLIC_KEY="$___storybook.isCyclic",exports.EVENT_ID=EVENT_ID,exports.PANEL_ID=PANEL_ID,exports.PARAM_KEY="actions",exports.action=action,exports.actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},exports.config=config,exports.configureActions=(options={})=>{Object.assign(config,options)},exports.default=()=>previewApi.definePreview(preview_exports)},"./node_modules/uuid/dist/commonjs-browser/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"NIL",{enumerable:!0,get:function get(){return _nil.default}}),Object.defineProperty(exports,"parse",{enumerable:!0,get:function get(){return _parse.default}}),Object.defineProperty(exports,"stringify",{enumerable:!0,get:function get(){return _stringify.default}}),Object.defineProperty(exports,"v1",{enumerable:!0,get:function get(){return _v.default}}),Object.defineProperty(exports,"v3",{enumerable:!0,get:function get(){return _v2.default}}),Object.defineProperty(exports,"v4",{enumerable:!0,get:function get(){return _v3.default}}),Object.defineProperty(exports,"v5",{enumerable:!0,get:function get(){return _v4.default}}),Object.defineProperty(exports,"validate",{enumerable:!0,get:function get(){return _validate.default}}),Object.defineProperty(exports,"version",{enumerable:!0,get:function get(){return _version.default}});var _v=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/v1.js")),_v2=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/v3.js")),_v3=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/v4.js")),_v4=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/v5.js")),_nil=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/nil.js")),_version=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/version.js")),_validate=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/validate.js")),_stringify=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/stringify.js")),_parse=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/parse.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},"./node_modules/uuid/dist/commonjs-browser/md5.js":(__unused_webpack_module,exports)=>{function getOutputLength(inputLength8){return 14+(inputLength8+64>>>9<<4)+1}function safeAdd(x,y){const lsw=(65535&x)+(65535&y);return(x>>16)+(y>>16)+(lsw>>16)<<16|65535&lsw}function md5cmn(q,a,b,x,s,t){return safeAdd(function bitRotateLeft(num,cnt){return num<<cnt|num>>>32-cnt}(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}function md5ff(a,b,c,d,x,s,t){return md5cmn(b&c|~b&d,a,b,x,s,t)}function md5gg(a,b,c,d,x,s,t){return md5cmn(b&d|c&~d,a,b,x,s,t)}function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function md5(bytes){if("string"==typeof bytes){const msg=unescape(encodeURIComponent(bytes));bytes=new Uint8Array(msg.length);for(let i=0;i<msg.length;++i)bytes[i]=msg.charCodeAt(i)}return function md5ToHexEncodedArray(input){const output=[],length32=32*input.length,hexTab="0123456789abcdef";for(let i=0;i<length32;i+=8){const x=input[i>>5]>>>i%32&255,hex=parseInt(hexTab.charAt(x>>>4&15)+hexTab.charAt(15&x),16);output.push(hex)}return output}(function wordsToMd5(x,len){x[len>>5]|=128<<len%32,x[getOutputLength(len)-1]=len;let a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(let i=0;i<x.length;i+=16){const olda=a,oldb=b,oldc=c,oldd=d;a=md5ff(a,b,c,d,x[i],7,-680876936),d=md5ff(d,a,b,c,x[i+1],12,-389564586),c=md5ff(c,d,a,b,x[i+2],17,606105819),b=md5ff(b,c,d,a,x[i+3],22,-1044525330),a=md5ff(a,b,c,d,x[i+4],7,-176418897),d=md5ff(d,a,b,c,x[i+5],12,1200080426),c=md5ff(c,d,a,b,x[i+6],17,-1473231341),b=md5ff(b,c,d,a,x[i+7],22,-45705983),a=md5ff(a,b,c,d,x[i+8],7,1770035416),d=md5ff(d,a,b,c,x[i+9],12,-1958414417),c=md5ff(c,d,a,b,x[i+10],17,-42063),b=md5ff(b,c,d,a,x[i+11],22,-1990404162),a=md5ff(a,b,c,d,x[i+12],7,1804603682),d=md5ff(d,a,b,c,x[i+13],12,-40341101),c=md5ff(c,d,a,b,x[i+14],17,-1502002290),b=md5ff(b,c,d,a,x[i+15],22,1236535329),a=md5gg(a,b,c,d,x[i+1],5,-165796510),d=md5gg(d,a,b,c,x[i+6],9,-1069501632),c=md5gg(c,d,a,b,x[i+11],14,643717713),b=md5gg(b,c,d,a,x[i],20,-373897302),a=md5gg(a,b,c,d,x[i+5],5,-701558691),d=md5gg(d,a,b,c,x[i+10],9,38016083),c=md5gg(c,d,a,b,x[i+15],14,-660478335),b=md5gg(b,c,d,a,x[i+4],20,-405537848),a=md5gg(a,b,c,d,x[i+9],5,568446438),d=md5gg(d,a,b,c,x[i+14],9,-1019803690),c=md5gg(c,d,a,b,x[i+3],14,-187363961),b=md5gg(b,c,d,a,x[i+8],20,1163531501),a=md5gg(a,b,c,d,x[i+13],5,-1444681467),d=md5gg(d,a,b,c,x[i+2],9,-51403784),c=md5gg(c,d,a,b,x[i+7],14,1735328473),b=md5gg(b,c,d,a,x[i+12],20,-1926607734),a=md5hh(a,b,c,d,x[i+5],4,-378558),d=md5hh(d,a,b,c,x[i+8],11,-2022574463),c=md5hh(c,d,a,b,x[i+11],16,1839030562),b=md5hh(b,c,d,a,x[i+14],23,-35309556),a=md5hh(a,b,c,d,x[i+1],4,-1530992060),d=md5hh(d,a,b,c,x[i+4],11,1272893353),c=md5hh(c,d,a,b,x[i+7],16,-155497632),b=md5hh(b,c,d,a,x[i+10],23,-1094730640),a=md5hh(a,b,c,d,x[i+13],4,681279174),d=md5hh(d,a,b,c,x[i],11,-358537222),c=md5hh(c,d,a,b,x[i+3],16,-722521979),b=md5hh(b,c,d,a,x[i+6],23,76029189),a=md5hh(a,b,c,d,x[i+9],4,-640364487),d=md5hh(d,a,b,c,x[i+12],11,-421815835),c=md5hh(c,d,a,b,x[i+15],16,530742520),b=md5hh(b,c,d,a,x[i+2],23,-995338651),a=md5ii(a,b,c,d,x[i],6,-198630844),d=md5ii(d,a,b,c,x[i+7],10,1126891415),c=md5ii(c,d,a,b,x[i+14],15,-1416354905),b=md5ii(b,c,d,a,x[i+5],21,-57434055),a=md5ii(a,b,c,d,x[i+12],6,1700485571),d=md5ii(d,a,b,c,x[i+3],10,-1894986606),c=md5ii(c,d,a,b,x[i+10],15,-1051523),b=md5ii(b,c,d,a,x[i+1],21,-2054922799),a=md5ii(a,b,c,d,x[i+8],6,1873313359),d=md5ii(d,a,b,c,x[i+15],10,-30611744),c=md5ii(c,d,a,b,x[i+6],15,-1560198380),b=md5ii(b,c,d,a,x[i+13],21,1309151649),a=md5ii(a,b,c,d,x[i+4],6,-145523070),d=md5ii(d,a,b,c,x[i+11],10,-1120210379),c=md5ii(c,d,a,b,x[i+2],15,718787259),b=md5ii(b,c,d,a,x[i+9],21,-343485551),a=safeAdd(a,olda),b=safeAdd(b,oldb),c=safeAdd(c,oldc),d=safeAdd(d,oldd)}return[a,b,c,d]}(function bytesToWords(input){if(0===input.length)return[];const length8=8*input.length,output=new Uint32Array(getOutputLength(length8));for(let i=0;i<length8;i+=8)output[i>>5]|=(255&input[i/8])<<i%32;return output}(bytes),8*bytes.length))};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/native.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/nil.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default="00000000-0000-0000-0000-000000000000"},"./node_modules/uuid/dist/commonjs-browser/parse.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _validate=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/validate.js"));var _default=function parse(uuid){if(!(0,_validate.default)(uuid))throw TypeError("Invalid UUID");let v;const arr=new Uint8Array(16);return arr[0]=(v=parseInt(uuid.slice(0,8),16))>>>24,arr[1]=v>>>16&255,arr[2]=v>>>8&255,arr[3]=255&v,arr[4]=(v=parseInt(uuid.slice(9,13),16))>>>8,arr[5]=255&v,arr[6]=(v=parseInt(uuid.slice(14,18),16))>>>8,arr[7]=255&v,arr[8]=(v=parseInt(uuid.slice(19,23),16))>>>8,arr[9]=255&v,arr[10]=(v=parseInt(uuid.slice(24,36),16))/1099511627776&255,arr[11]=v/4294967296&255,arr[12]=v>>>24&255,arr[13]=v>>>16&255,arr[14]=v>>>8&255,arr[15]=255&v,arr};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/regex.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},"./node_modules/uuid/dist/commonjs-browser/rng.js":(__unused_webpack_module,exports)=>{let getRandomValues;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)};const rnds8=new Uint8Array(16)},"./node_modules/uuid/dist/commonjs-browser/sha1.js":(__unused_webpack_module,exports)=>{function f(s,x,y,z){switch(s){case 0:return x&y^~x&z;case 1:case 3:return x^y^z;case 2:return x&y^x&z^y&z}}function ROTL(x,n){return x<<n|x>>>32-n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function sha1(bytes){const K=[1518500249,1859775393,2400959708,3395469782],H=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof bytes){const msg=unescape(encodeURIComponent(bytes));bytes=[];for(let i=0;i<msg.length;++i)bytes.push(msg.charCodeAt(i))}else Array.isArray(bytes)||(bytes=Array.prototype.slice.call(bytes));bytes.push(128);const l=bytes.length/4+2,N=Math.ceil(l/16),M=new Array(N);for(let i=0;i<N;++i){const arr=new Uint32Array(16);for(let j=0;j<16;++j)arr[j]=bytes[64*i+4*j]<<24|bytes[64*i+4*j+1]<<16|bytes[64*i+4*j+2]<<8|bytes[64*i+4*j+3];M[i]=arr}M[N-1][14]=8*(bytes.length-1)/Math.pow(2,32),M[N-1][14]=Math.floor(M[N-1][14]),M[N-1][15]=8*(bytes.length-1)&4294967295;for(let i=0;i<N;++i){const W=new Uint32Array(80);for(let t=0;t<16;++t)W[t]=M[i][t];for(let t=16;t<80;++t)W[t]=ROTL(W[t-3]^W[t-8]^W[t-14]^W[t-16],1);let a=H[0],b=H[1],c=H[2],d=H[3],e=H[4];for(let t=0;t<80;++t){const s=Math.floor(t/20),T=ROTL(a,5)+f(s,b,c,d)+e+K[s]+W[t]>>>0;e=d,d=c,c=ROTL(b,30)>>>0,b=a,a=T}H[0]=H[0]+a>>>0,H[1]=H[1]+b>>>0,H[2]=H[2]+c>>>0,H[3]=H[3]+d>>>0,H[4]=H[4]+e>>>0}return[H[0]>>24&255,H[0]>>16&255,H[0]>>8&255,255&H[0],H[1]>>24&255,H[1]>>16&255,H[1]>>8&255,255&H[1],H[2]>>24&255,H[2]>>16&255,H[2]>>8&255,255&H[2],H[3]>>24&255,H[3]>>16&255,H[3]>>8&255,255&H[3],H[4]>>24&255,H[4]>>16&255,H[4]>>8&255,255&H[4]]};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/stringify.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.unsafeStringify=unsafeStringify;var _validate=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/validate.js"));const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]}var _default=function stringify(arr,offset=0){const uuid=unsafeStringify(arr,offset);if(!(0,_validate.default)(uuid))throw TypeError("Stringified UUID is invalid");return uuid};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/v1.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _rng=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/rng.js")),_stringify=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/stringify.js");let _nodeId,_clockseq,_lastMSecs=0,_lastNSecs=0;var _default=function v1(options,buf,offset){let i=buf&&offset||0;const b=buf||new Array(16);let node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){const seedBytes=options.random||(options.rng||_rng.default)();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}let msecs=void 0!==options.msecs?options.msecs:Date.now(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1;const dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;const tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;const tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(let n=0;n<6;++n)b[i+n]=node[n];return buf||(0,_stringify.unsafeStringify)(b)};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/v3.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _v=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/v35.js")),_md=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/md5.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=(0,_v.default)("v3",48,_md.default);exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/v35.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.URL=exports.DNS=void 0,exports.default=function v35(name,version,hashfunc){function generateUUID(value,namespace,buf,offset){var _namespace;if("string"==typeof value&&(value=function stringToBytes(str){str=unescape(encodeURIComponent(str));const bytes=[];for(let i=0;i<str.length;++i)bytes.push(str.charCodeAt(i));return bytes}(value)),"string"==typeof namespace&&(namespace=(0,_parse.default)(namespace)),16!==(null===(_namespace=namespace)||void 0===_namespace?void 0:_namespace.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let bytes=new Uint8Array(16+value.length);if(bytes.set(namespace),bytes.set(value,namespace.length),bytes=hashfunc(bytes),bytes[6]=15&bytes[6]|version,bytes[8]=63&bytes[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=bytes[i];return buf}return(0,_stringify.unsafeStringify)(bytes)}try{generateUUID.name=name}catch(err){}return generateUUID.DNS=DNS,generateUUID.URL=URL,generateUUID};var _stringify=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/stringify.js"),_parse=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/parse.js"));const DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8";exports.DNS=DNS;const URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8";exports.URL=URL},"./node_modules/uuid/dist/commonjs-browser/v4.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/native.js")),_rng=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/rng.js")),_stringify=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/stringify.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=function v4(options,buf,offset){if(_native.default.randomUUID&&!buf&&!options)return _native.default.randomUUID();const rnds=(options=options||{}).random||(options.rng||_rng.default)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return(0,_stringify.unsafeStringify)(rnds)};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/v5.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _v=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/v35.js")),_sha=_interopRequireDefault(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/sha1.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=(0,_v.default)("v5",80,_sha.default);exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/validate.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regex=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/regex.js"));var _default=function validate(uuid){return"string"==typeof uuid&&_regex.default.test(uuid)};exports.default=_default},"./node_modules/uuid/dist/commonjs-browser/version.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _validate=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/uuid/dist/commonjs-browser/validate.js"));var _default=function version(uuid){if(!(0,_validate.default)(uuid))throw TypeError("Invalid UUID");return parseInt(uuid.slice(14,15),16)};exports.default=_default}}]);