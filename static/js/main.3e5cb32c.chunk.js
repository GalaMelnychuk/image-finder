(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__3nP09"}},21:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2J8yT"}},22:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__18xn0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__193Xf","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1d01m"}},23:function(e,a,t){e.exports=t(46)},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(19),l=t.n(o),c=t(3),s=t.n(c),i=t(8),m=t(4),u=t(5),g=t(6),p=t(7),d=t(20),h=t.n(d),f=t(2),y=t.n(f),I=function(e){var a=e.onHandleSubmitForm;return r.a.createElement("header",{className:y.a.Searchbar},r.a.createElement("form",{className:y.a.SearchForm,onSubmit:a},r.a.createElement("button",{type:"submit",className:y.a.SearchFormButton},r.a.createElement("span",{className:y.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))},v=t(21),b=t.n(v),E=t(22),w=t.n(E),O=function(e){var a=e.webUrl,t=e.largeUrl,n=e.onOpenImage;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:a,alt:t,className:w.a.ImageGalleryItemImage,onClick:function(){return n(t)}}))},k=function(e){var a=e.images,t=e.onOpenImage;return r.a.createElement("ul",{className:b.a.ImageGallery},a.map((function(e){return r.a.createElement(O,{webUrl:e.webformatURL,key:e.id,largeUrl:e.largeImageURL,onOpenImage:t})})))},_=function(){return r.a.createElement("h1",null,"Loading...")},S=function(e){var a=e.onloadMoreImg;return r.a.createElement("button",{className:"Button",onClick:a,type:"button"},"Load more")},M=t(9),G=t.n(M),x=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).backdropRef=Object(n.createRef)(),e.handleKeyDown=function(a){"Escape"===a.key&&e.props.onClose()},e.closeOnClick=function(a){"Escape"===a.code&&e.props.onClose()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.url;return console.log("this.props",this.props),r.a.createElement("div",{className:G.a.Overlay},r.a.createElement("div",{onClick:this.closeOnClick,className:G.a.Modal},r.a.createElement("img",{src:e,alt:"img"})))}}]),t}(n.Component),L=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],isLoading:!1,query:"cat",page:1,isModalOpen:!1,largeImageUrl:null},e.handleSubmitForm=function(a){e.setState({query:a.target.elements[1].value}),a.preventDefault(),a.target.elements[1].value=""},e.setLargeImage=function(a){e.setState({largeImageUrl:a}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e.loadMoreImg=Object(i.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return 1,a.next=3,e.setState((function(e){return{page:e.page+1}}));case 3:return a.next=5,e.getImages();case 5:case"end":return a.stop()}}),a)}))),e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"componentDidUpdate",value:function(e,a){var t=a.query,n=this.state.query;t!==n&&this.getImages(n)}},{key:"getImages",value:function(){var e=Object(i.a)(s.a.mark((function e(){var a,t,n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.next=4,h.a.get("https://pixabay.com/api/?q=".concat(this.state.query,"&page=").concat(this.state.page,"&key=").concat("15738789-70e175d37a04d1dee6d70d765","&image_type=photo&orientation=horizontal&per_page=12")).finally((function(){n.setState({isLoading:!1})}));case 4:a=e.sent,t=a.data.hits,this.setState({images:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.isModalOpen,o=e.largeImageUrl,l=e.page,c=t?r.a.createElement(_,null):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{onHandleSubmitForm:this.handleSubmitForm}),c,r.a.createElement(k,{images:a,onOpenImage:this.setLargeImage}),r.a.createElement(S,{onloadMoreImg:this.loadMoreImg}),1!==l&&this.scroll(),n&&r.a.createElement(x,{url:o,onClose:this.toggleModal}))}}]),t}(n.Component);l.a.render(r.a.createElement(L,null),document.getElementById("root"))},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3zur2",Modal:"Modal_Modal__JzWj5"}}},[[23,1,2]]]);
//# sourceMappingURL=main.3e5cb32c.chunk.js.map