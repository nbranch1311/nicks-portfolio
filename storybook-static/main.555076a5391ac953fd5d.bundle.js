(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(424),__webpack_require__(425),module.exports=__webpack_require__(587)},342:function(module,exports){},587:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(275);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(616)],module)}.call(this,__webpack_require__(588)(module))},616:function(module,exports,__webpack_require__){var map={"./card/Card.stories.js":618,"./footer/Footer.stories.js":619,"./layout/LayoutContext.stories.js":617};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=616},617:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LayoutProviderStory",(function(){return LayoutContext_stories_LayoutProviderStory}));var core_browser_esm=__webpack_require__(3),dist=__webpack_require__(171),react=__webpack_require__(1),objectSpread2=__webpack_require__(54),LayoutContext=Object(react.createContext)(),LayoutContext_LayoutProvider=function LayoutProvider(_ref){var children=_ref.children,complexity=_ref.complexity,wrapper=function useStyle(complexity){var wrapper=Object(react.useMemo)((function(){return{wrapper:{base:{height:"100vh",width:"100%",Low:{display:"flex",flexWrap:"wrap",alignContent:"flex-start",justifyContent:"center",HeaderStyle:{display:"none"},NavigationStyle:{width:"100%",height:"15%",margin:".5rem auto"},ContentStyle:{width:"100%",height:"55%",margin:".5rem"},FooterStyle:{width:"100%",height:"10%",margin:".5rem"}},Medium:{display:"flex",flexDirection:"column",HeaderStyle:{margin:"0 auto .5rem",width:"100%"},NavigationStyle:{margin:"1rem auto"},ContentStyle:{margin:".5rem auto",overflowY:"auto",flex:"auto"},FooterStyle:{margin:".5rem auto 0",width:"100%"}},High:{display:"grid",gridTemplateRows:"15% 70% 15%",gridTemplateAreas:"'header header header header header header''stepper content content content content content''stepper footer footer footer footer footer'",HeaderStyle:{margin:".5rem",gridArea:"header"},NavigationStyle:{margin:".5rem",gridArea:"stepper"},ContentStyle:{margin:".5rem",gridArea:"content"},FooterStyle:{margin:".5rem",gridArea:"footer"}}}}}}),[complexity]).wrapper;return{wrapper:Object(objectSpread2.a)(Object(objectSpread2.a)(Object(objectSpread2.a)({},wrapper.base),wrapper.base[complexity]),wrapper[complexity])}}(complexity).wrapper;return Object(core_browser_esm.a)(LayoutContext.Provider,{value:wrapper[complexity]},Object(core_browser_esm.a)("div",{css:wrapper},children))};LayoutContext_LayoutProvider.__docgenInfo={description:"",methods:[],displayName:"LayoutProvider",props:{children:{type:{name:"node"},required:!1,description:"React elements to be rendered (will have access to this context)"},complexity:{type:{name:"string"},required:!1,description:"String to determine style context"}}};var layout_LayoutContext=LayoutContext_LayoutProvider;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\layout\\LayoutContext.js"]={name:"LayoutProvider",docgenInfo:LayoutContext_LayoutProvider.__docgenInfo,path:"components\\layout\\LayoutContext.js"});var HeaderLayout_HeaderLayout=function HeaderLayout(_ref){var children=_ref.children,complexity=Object(react.useContext)(LayoutContext);return Object(core_browser_esm.a)("div",{css:complexity.HeaderStyle},children)};HeaderLayout_HeaderLayout.__docgenInfo={description:"",methods:[],displayName:"HeaderLayout",props:{children:{type:{name:"node"},required:!1,description:"React elements to be rendered"}}};var layout_HeaderLayout=HeaderLayout_HeaderLayout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\layout\\HeaderLayout.js"]={name:"HeaderLayout",docgenInfo:HeaderLayout_HeaderLayout.__docgenInfo,path:"components\\layout\\HeaderLayout.js"});var NavigationLayout_NavigationLayout=function NavigationLayout(_ref){var children=_ref.children,complexity=Object(react.useContext)(LayoutContext);return Object(core_browser_esm.a)("div",{css:complexity.NavigationStyle},children)};NavigationLayout_NavigationLayout.__docgenInfo={description:"",methods:[],displayName:"NavigationLayout",props:{children:{type:{name:"node"},required:!1,description:"React elements to be rendered"}}};var layout_NavigationLayout=NavigationLayout_NavigationLayout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\layout\\NavigationLayout.js"]={name:"NavigationLayout",docgenInfo:NavigationLayout_NavigationLayout.__docgenInfo,path:"components\\layout\\NavigationLayout.js"});var ContentLayout_ContentLayout=function ContentLayout(_ref){var children=_ref.children,complexity=Object(react.useContext)(LayoutContext);return Object(core_browser_esm.a)("div",{css:complexity.ContentStyle},children)};ContentLayout_ContentLayout.__docgenInfo={description:"",methods:[],displayName:"ContentLayout",props:{children:{type:{name:"node"},required:!1,description:"React elements to be rendered"}}};var layout_ContentLayout=ContentLayout_ContentLayout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\layout\\ContentLayout.js"]={name:"ContentLayout",docgenInfo:ContentLayout_ContentLayout.__docgenInfo,path:"components\\layout\\ContentLayout.js"});var FooterLayout_FooterLayout=function FooterLayout(_ref){var children=_ref.children,complexity=Object(react.useContext)(LayoutContext);return Object(core_browser_esm.a)("div",{css:complexity.FooterStyle},children)};FooterLayout_FooterLayout.__docgenInfo={description:"",methods:[],displayName:"FooterLayout",props:{children:{type:{name:"node"},required:!1,description:"React elements to be rendered"}}};var layout_FooterLayout=FooterLayout_FooterLayout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\layout\\FooterLayout.js"]={name:"FooterLayout",docgenInfo:FooterLayout_FooterLayout.__docgenInfo,path:"components\\layout\\FooterLayout.js"});__webpack_exports__.default={title:"LayoutContext",component:layout_LayoutContext};var options={Low:"Low",Medium:"Medium",High:"High"},LayoutContext_stories_LayoutProviderStory=function LayoutProviderStory(){var ColorBlock=Object(core_browser_esm.a)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:"black",border:"1px solid blue",borderRadius:".5rem"}},"HELLO"),complexity=Object(dist.radios)("Complexity",options,"Medium","GROUP-ID1");return Object(core_browser_esm.a)(layout_LayoutContext,{complexity:complexity},Object(core_browser_esm.a)(layout_HeaderLayout,null,Object(core_browser_esm.a)(ColorBlock,{text:"Header"})),Object(core_browser_esm.a)(layout_NavigationLayout,null,Object(core_browser_esm.a)(ColorBlock,{text:"Navigation"})),Object(core_browser_esm.a)(layout_ContentLayout,null,Object(core_browser_esm.a)(ColorBlock,{text:"Content Area"})),Object(core_browser_esm.a)(layout_FooterLayout,null,Object(core_browser_esm.a)(ColorBlock,{text:"Action Bar"})))};LayoutContext_stories_LayoutProviderStory.__docgenInfo={description:"",methods:[],displayName:"LayoutProviderStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\layout\\LayoutContext.stories.js"]={name:"LayoutProviderStory",docgenInfo:LayoutContext_stories_LayoutProviderStory.__docgenInfo,path:"components\\layout\\LayoutContext.stories.js"})},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CardStory",(function(){return Card_stories_CardStory}));var react=__webpack_require__(1),react_default=__webpack_require__.n(react),core_browser_esm=__webpack_require__(3),objectSpread2=__webpack_require__(54),CardStyles=function useStyle(){var wrapper=Object(react.useMemo)((function(){return{wrapper:{base:{margin:"1rem",flexBasis:"45%",padding:"1.5rem",textAlign:"left",color:"inherit",textDecoration:"none",boxShadow:"0 0 6px grey",borderRadius:"10px",transition:"color 0.15s ease, border-color 0.15s ease","&:hover":{color:"#0070f3",borderColor:"#0070f3"},"&:focus":{color:"#0070f3",borderColor:"#0070f3"},"&:active":{color:"#0070f3",borderColor:"#0070f3"},"& h3":{margin:"0 0 1rem 0",fontSize:"1.5rem"},"& p":{margin:0,fontSize:"1.25rem",lineHeight:1.5},"& a":{color:"inherit",textDecoration:"none"}}}}}),[]).wrapper;return{wrapper:Object(objectSpread2.a)({},wrapper.base)}},Card_Card=function Card(_ref){var _ref$href=_ref.href,href=void 0===_ref$href?"/":_ref$href,header=_ref.header,description=_ref.description,wrapper=CardStyles().wrapper;return Object(core_browser_esm.a)("div",{css:wrapper},Object(core_browser_esm.a)("a",{href:href,target:"_blank",rel:"noreferrer"},Object(core_browser_esm.a)("h3",null,header),Object(core_browser_esm.a)("p",null,description)))};Card_Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{href:{defaultValue:{value:'"/"',computed:!1},type:{name:"string"},required:!1,description:"Card link URL"},description:{type:{name:"string"},required:!1,description:"Card description text"},header:{type:{name:"string"},required:!1,description:"Card header text"}}};var card_Card=Card_Card;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\card\\Card.js"]={name:"Card",docgenInfo:Card_Card.__docgenInfo,path:"components\\card\\Card.js"});__webpack_exports__.default={title:"Card",component:card_Card};var Card_stories_CardStory=function CardStory(){return react_default.a.createElement(card_Card,{href:"https://nicks-portfolio-pink.now.sh/",header:"Back to Portfolio",description:"These cards provide a good button feel."})};Card_stories_CardStory.__docgenInfo={description:"",methods:[],displayName:"CardStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\card\\Card.stories.js"]={name:"CardStory",docgenInfo:Card_stories_CardStory.__docgenInfo,path:"components\\card\\Card.stories.js"})},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FooterStory",(function(){return Footer_stories_FooterStory}));var react=__webpack_require__(1),react_default=__webpack_require__.n(react),core_browser_esm=__webpack_require__(3),objectSpread2=__webpack_require__(54),FooterStyles=function useStyle(){var wrapper=Object(react.useMemo)((function(){return{wrapper:{base:{zIndex:3,display:"flex",padding:"1.5rem 2.5rem",boxShadow:"0 0 10px grey",height:"4.8125rem",justifyContent:"center",alignItems:"center",flexShrink:0}}}}),[]).wrapper;return{wrapper:Object(objectSpread2.a)({},wrapper.base)}},Footer_Footer=function Footer(){var wrapper=FooterStyles().wrapper;return Object(core_browser_esm.a)("div",{css:wrapper},Object(core_browser_esm.a)("footer",null,"Created using Next.js, Styled using Emotion.js, Put together by yours\n        truly"))};Footer_Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};var footer_Footer=Footer_Footer;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\footer\\Footer.js"]={name:"Footer",docgenInfo:Footer_Footer.__docgenInfo,path:"components\\footer\\Footer.js"});__webpack_exports__.default={title:"Footer",component:footer_Footer};var Footer_stories_FooterStory=function FooterStory(){return react_default.a.createElement("div",{style:{marginTop:"1rem"}},react_default.a.createElement(footer_Footer,null))};Footer_stories_FooterStory.__docgenInfo={description:"",methods:[],displayName:"FooterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\footer\\Footer.stories.js"]={name:"FooterStory",docgenInfo:Footer_stories_FooterStory.__docgenInfo,path:"components\\footer\\Footer.stories.js"})}},[[277,1,2]]]);
//# sourceMappingURL=main.555076a5391ac953fd5d.bundle.js.map