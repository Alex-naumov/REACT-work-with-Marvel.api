(this["webpackJsonpmarvel-c"]=this["webpackJsonpmarvel-c"]||[]).push([[0],{14:function(a,e,t){a.exports={charactersContainer:"Characters_charactersContainer__2A63O",characters:"Characters_characters__3-i49",characterImg:"Characters_characterImg__1-3Kr",characterCard:"Characters_characterCard__3ZSf8",characterCardFront:"Characters_characterCardFront__3a7Lj",characterCardBack:"Characters_characterCardBack__p1m0f"}},26:function(a,e,t){a.exports={paginatorItem:"paginator_paginatorItem__OOkkB",activePage:"paginator_activePage__19lRK",containerPaginator:"paginator_containerPaginator__2FllI"}},32:function(a,e,t){a.exports={wrapper:"navbar_wrapper__UdIKH",item:"navbar_item__3Iuc2"}},4:function(a,e,t){a.exports={characterName:"Character_characterName__3SLJM",characterInfoWrapper:"Character_characterInfoWrapper__30F90",characterImgContainer:"Character_characterImgContainer__2Tcx9",characterDescription:"Character_characterDescription__1JHg7",characterComicsWrapper:"Character_characterComicsWrapper__1wN28",characterComicsTitle:"Character_characterComicsTitle__3vKrY",characterComicsContentWrapper:"Character_characterComicsContentWrapper__AVGvX",characterComics:"Character_characterComics__2tJVC",characterComicsLeft:"Character_characterComicsLeft__2WOjt",characterComicsRight:"Character_characterComicsRight__2I_r-",activeComicsSlide:"Character_activeComicsSlide__NkA96",comicsSlide:"Character_comicsSlide__1DDMr",comicsArrow:"Character_comicsArrow__SHyrA",comicsImg:"Character_comicsImg__3cYeE",comicsTitle:"Character_comicsTitle__2Ri3Y",comicsDescription:"Character_comicsDescription__b2IMq"}},46:function(a,e,t){a.exports={headerContainer:"header_headerContainer__3j76l"}},47:function(a,e,t){a.exports={wrapper:"footer_wrapper__1qyM6"}},54:function(a,e,t){},55:function(a,e,t){},88:function(a,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),n=t(23),s=t.n(n),i=(t(54),t(16)),o=t(17),h=t(20),u=t(19),l=(t(55),t(12)),p=t(5),m=t(13),j=t.n(m),d=t(25),f=t(22),b=t(81),C=(f.create({baseURL:"https://gateway.marvel.com",params:{apikey:"5ddfd52b0b9b730e546909f7c39a2af8"}}),"5ddfd52b0b9b730e546909f7c39a2af8"),O=Math.floor(Number(Date.now())/1e3),v=b(O+"3930c2db72ca7e144ba0c515645b38795f7302d4"+C),g=function(a){return f.get("https://gateway.marvel.com/v1/public/characters",{params:{ts:O,apikey:C,hash:v,offset:a,limit:9}}).then((function(a){return a.data}))},_=function(a){return f.get("https://gateway.marvel.com/v1/public/characters/".concat(a),{params:{ts:O,apikey:C,hash:v}}).then((function(a){return console.log(a.data.data.results),a.data}))},x=function(a){return f.get("https://gateway.marvel.com/v1/public/characters/".concat(a,"/comics"),{params:{ts:O,apikey:C,hash:v}}).then((function(a){return console.log(a.data.data.results),a.data}))},S="SET-CHARACTERS",N="OFFSET-CHARACTERS",I="SET-PARAMS-CHARACTERS",w="SET-CHARACTER",y="SET_CHARACTER_IMG",k="SET_COMICS",A={characters:[],totalCount:null,pageSize:9,currentPage:1,offset:null,character:{},characterImg:{},comics:[],events:[],stories:[]},R=function(a){return{type:S,data:a}},T=function(a){return{type:I,total:a.data.total}},P=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(p.a)(Object(p.a)({},a),{},{characters:e.data});case N:return Object(p.a)(Object(p.a)({},a),{},{currentPage:e.currentPage,offset:e.offset});case I:return Object(p.a)(Object(p.a)({},a),{},{totalCount:e.total});case w:return Object(p.a)(Object(p.a)({},a),{},{character:e.character});case y:return Object(p.a)(Object(p.a)({},a),{},{characterImg:e.characterImg});case k:return Object(p.a)(Object(p.a)({},a),{},{comics:e.comics});default:return a}},E=function(a){return a.characters.characters},M=function(a){return a.characters.totalCount},D=function(a){return a.characters.pageSize},W=function(a){return a.characters.offset},z=function(a){return a.characters.currentPage},H=t(18),F=t(24),L=t(45),B=t.p+"static/media/leftArrow.003545fb.svg",J=t.p+"static/media/rightArrow.48e2876f.svg",K=t(26),U=t.n(K),Y=t(1),q=function(a){for(var e=a.pageSize,t=a.totalCount,r=a.currentPage,n=a.portionSize,s=void 0===n?10:n,i=Object(L.a)(a,["pageSize","totalCount","currentPage","portionSize"]),o=Math.ceil(t/e),h=[],u=1;u<o;u++)h.push(u);var l=Math.ceil(t/s),p=Object(c.useState)(1),m=Object(F.a)(p,2),j=m[0],d=m[1],f=(j-1)*s+1,b=j*s;return Object(Y.jsxs)("div",{className:U.a.containerPaginator,children:[j>1&&Object(Y.jsx)("div",{onClick:function(){d(j-1)},children:Object(Y.jsx)("img",{src:B})}),h.filter((function(a){return f<=a&&b>=a})).map((function(a){return Object(Y.jsx)("div",{className:U.a.paginatorItem,children:Object(Y.jsx)("span",{className:r===a&&U.a.activePage,onClick:function(){return function(a){var t=e*(a-1);i.OffSetCharacters(t,a)}(a)},children:a})})})),j<l&&Object(Y.jsx)("div",{onClick:function(){d(j+1)},children:Object(Y.jsx)("img",{src:J})})]})},G=t(14),V=t.n(G),X=function(a){return Object(Y.jsxs)("div",{className:V.a.charactersContainer,children:[Object(Y.jsx)(q,{totalCount:a.totalCount,pageSize:a.pageSize,OffSetCharacters:a.OffSetCharacters,currentPage:a.currentPage}),Object(Y.jsx)("div",{className:V.a.characters,children:a.characters.map((function(a){var e="".concat(a.thumbnail.path,".").concat(a.thumbnail.extension);return console.log(e),Object(Y.jsx)(H.b,{to:"/character/"+a.id,children:Object(Y.jsxs)("div",{className:V.a.characterCard,children:[Object(Y.jsx)("div",{className:V.a.characterCardFront,children:Object(Y.jsx)("img",{src:e,alt:"jdsagskg",className:V.a.characterImg})}),Object(Y.jsx)("div",{className:V.a.characterCardBack,children:a.name})]})})}))})]})},Z=function(a){Object(h.a)(t,a);var e=Object(u.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getCharacters()}},{key:"componentDidUpdate",value:function(a){a.offset!==this.props.offset&&this.props.getCharacters()}},{key:"render",value:function(){return console.log(this.props.characters),Object(Y.jsx)(X,Object(p.a)({characters:this.props.characters},this.props))}}]),t}(r.a.Component),Q=Object(l.b)((function(a){return{characters:E(a),totalCount:M(a),pageSize:D(a),offset:W(a),currentPage:z(a)}}),{getCharacters:function(){return function(){var a=Object(d.a)(j.a.mark((function a(e,t){var c,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=t().characters.offset,a.next=3,g(c);case 3:r=a.sent,e(T(r)),e(R(r.data.results));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},OffSetCharacters:function(a,e){return function(t){t(function(a,e){return{type:N,offset:a,currentPage:e}}(a,e))}}})(Z),$=t(32),aa=t.n($),ea=function(a){return Object(Y.jsx)("div",{className:aa.a.wrapper,children:Object(Y.jsx)(H.b,{to:"./characters",className:aa.a.item,children:"CHARACTERS"})})},ta=t(46),ca=t.n(ta),ra=function(a){return Object(Y.jsx)("div",{className:ca.a.headerContainer,children:Object(Y.jsx)(ea,{})})},na=t(3),sa=t(11),ia=function(a){return a.characters.character},oa=function(a){return a.characters.characterImg},ha=function(a){return a.characters.comics},ua=t(4),la=t.n(ua),pa=t.p+"static/media/leftarrow.7d2ac4c8.svg",ma=t.p+"static/media/rightarrow.c70b9399.svg",ja=function(a){var e=a.character,t="".concat(a.characterImg.path,".").concat(a.characterImg.extension),r=Object(c.useState)(0),n=Object(F.a)(r,2),s=n[0],i=n[1],o=a.comics.length;return console.log(s),Object(Y.jsxs)("div",{className:la.a.characterContainer,children:[Object(Y.jsx)("div",{className:la.a.characterName,children:e.name}),Object(Y.jsxs)("div",{className:la.a.characterInfoWrapper,children:[Object(Y.jsx)("div",{className:la.a.characterImgContainer,children:Object(Y.jsx)("img",{src:t})}),Object(Y.jsx)("div",{className:la.a.characterDescription,children:e.description})]}),Object(Y.jsxs)("div",{className:la.a.characterComicsWrapper,children:[Object(Y.jsx)("div",{className:la.a.characterComicsTitle,children:"COMICS"}),Object(Y.jsxs)("div",{className:la.a.characterComicsContentWrapper,children:[Object(Y.jsx)("div",{className:la.a.characterComicsLeft,onClick:function(){i(0===s?o-1:s-1)},children:Object(Y.jsx)("img",{src:pa,className:la.a.comicsArrow})}),Object(Y.jsx)("div",{className:la.a.characterComicsRight,onClick:function(){i(s===o-1?0:s+1)},children:Object(Y.jsx)("img",{src:ma,className:la.a.comicsArrow})}),Object(Y.jsx)("div",{className:la.a.characterComics,children:a.comics!==[]&&a.comics.map((function(a,e){var t="".concat(a.thumbnail.path,".").concat(a.thumbnail.extension);return Object(Y.jsx)("div",{className:s===e?la.a.activeComicsSlide:la.a.comicsSlide,children:s===e&&Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{className:la.a.comicsImg,children:Object(Y.jsx)("img",{src:t})}),Object(Y.jsx)("div",{className:la.a.comicsTitle,children:a.title}),Object(Y.jsx)("div",{className:la.a.comicsDescription,children:a.description})]})})}))})]})]})]})},da=function(a){Object(h.a)(t,a);var e=Object(u.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getCharacter(this.props.match.params.characterId),this.props.getComics(this.props.match.params.characterId)}},{key:"render",value:function(){return Object(Y.jsx)(ja,Object(p.a)({character:this.props.character},this.props))}}]),t}(r.a.Component),fa=Object(sa.compose)(Object(l.b)((function(a){return{character:ia(a),characterImg:oa(a),comics:ha(a)}}),{getCharacter:function(a){return function(){var e=Object(d.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(a);case 2:r=e.sent,console.log(r.data),t((n=r.data.results[0],{type:w,character:n})),t((c=r.data.results[0].thumbnail,{type:y,characterImg:c}));case 6:case"end":return e.stop()}var c,n}),e)})));return function(a,t){return e.apply(this,arguments)}}()},getComics:function(a){return function(){var e=Object(d.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a);case 2:c=e.sent,t((r=c.data.results,{type:k,comics:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(a){return e.apply(this,arguments)}}()}}),na.e)(da),ba=t(47),Ca=t.n(ba),Oa=function(a){return Object(Y.jsxs)("div",{className:Ca.a.wrapper,children:["All information from an official source :",Object(Y.jsx)("a",{href:"https://developer.marvel.com/docs",children:"https://developer.marvel.com/docs"})]})},va=function(a){Object(h.a)(t,a);var e=Object(u.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(Y.jsxs)("div",{className:"appWrapper",children:[Object(Y.jsx)(ra,{}),Object(Y.jsx)("div",{className:"appWrapperContent",children:Object(Y.jsx)("div",{className:"appContent",children:Object(Y.jsxs)("div",{children:[Object(Y.jsx)(na.a,{exact:!0,path:"/characters",render:function(){return Object(Y.jsx)(Q,{})}}),Object(Y.jsx)(na.a,{path:"/character/:characterId",render:function(){return Object(Y.jsx)(fa,{})}})]})})}),Object(Y.jsx)(Oa,{})]})}}]),t}(r.a.Component),ga=Object(sa.compose)(Object(l.b)((function(a){return{}}),{}),na.e)(va),_a=t(48),xa=t(49),Sa=Object(sa.combineReducers)({characters:P}),Na=Object(sa.createStore)(Sa,Object(_a.composeWithDevTools)(Object(sa.applyMiddleware)(xa.a)));window.store=Na;var Ia=Na,wa=function(a){s.a.render(Object(Y.jsx)(H.a,{children:Object(Y.jsx)(l.a,{store:Ia,children:Object(Y.jsx)(ga,{})})}),document.getElementById("root"))};wa(Ia.getState()),Ia.subscribe((function(){wa(Ia.getState())}))}},[[88,1,2]]]);
//# sourceMappingURL=main.116e5d51.chunk.js.map