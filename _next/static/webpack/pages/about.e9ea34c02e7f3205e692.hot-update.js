webpackHotUpdate_N_E("pages/about",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/pages/About/About.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n  Fonts\\n*/\\n/*\\n  Colors\\n*/\\n.About_h1-title__2fqN6, .About_about__title__11BUc {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_h1-title__2fqN6, .About_about__title__11BUc {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.About_body__2P93u, .About_about__content__1k2Vb {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_body__2P93u, .About_about__content__1k2Vb {\\n    font-size: 1.25rem;\\n  }\\n}\\n\\n.About_about__content__1k2Vb {\\n  color: #2d3748;\\n}\\n\\n.About_about__content-container__I8cjE {\\n  margin-top: 4rem;\\n}\\n.About_about__content-container__I8cjE p:not(:first-child) {\\n  border: 1px solid red;\\n}\\n\\n.About_about__footer__1e99w {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/shared.scss\",\"webpack://About.module.scss\",\"webpack://../../../styles/breakpoints.scss\"],\"names\":[],\"mappings\":\"AAIA;;CAAA;AAOA;;CAAA;AAMA;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;ACTF;ACKE;EFDF;IAQI,eAAA;ECRF;AACF;;ADWA;EACE,eAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;ACRF;ACPE;EFWF;IAOI,kBAAA;ECPF;AACF;;AAzBA;EAEE,cAAA;AA2BF;;AAzBA;EACE,gBAAA;AA4BF;AA3BE;EACE,qBAAA;AA6BJ;;AA1BA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AA6BF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap\\\");\\n\\n@import \\\"./breakpoints.scss\\\";\\n\\n/*\\n  Fonts\\n*/\\n\\n$logo-font: \\\"Roboto\\\";\\n$primary-font: \\\"Roboto\\\";\\n\\n/*\\n  Colors\\n*/\\n\\n$color-gray-principal: #cbd5e0;\\n\\n.h1-title {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n\\n  @include desktop {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.body {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n\\n  @include desktop {\\n    font-size: 1.25rem;\\n  }\\n}\\n\",\"@import \\\"~styles/shared.scss\\\";\\n\\n.about__title {\\n  @extend .h1-title;\\n}\\n.about__content {\\n  @extend .body;\\n  color: #2d3748;\\n}\\n.about__content-container {\\n  margin-top: 4rem;\\n  p:not(:first-child) {\\n    border: 1px solid red;\\n  }\\n}\\n.about__footer {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\",\"$screen: \\\"only screen\\\";\\n$mobile: \\\"#{$screen} and (max-width: 767px)\\\";\\n$tablet: \\\"#{$screen} and (min-width: 768px)\\\";\\n$desktop: \\\"#{$screen} and (min-width: 1025px)\\\";\\n\\n@mixin mobile {\\n  @media #{$mobile} {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet {\\n  @media #{$tablet} {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop {\\n  @media #{$desktop} {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"h1-title\": \"About_h1-title__2fqN6\",\n\t\"about__title\": \"About_about__title__11BUc\",\n\t\"body\": \"About_body__2P93u\",\n\t\"about__content\": \"About_about__content__1k2Vb\",\n\t\"about__content-container\": \"About_about__content-container__I8cjE\",\n\t\"about__footer\": \"About_about__footer__1e99w\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQvQWJvdXQubW9kdWxlLnNjc3M/NDVhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBLDhCQUE4QixRQUFTLCtFQUErRSxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBLDhCQUE4QixRQUFTLDBGQUEwRixvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsY0FBYyxHQUFHLDhDQUE4Qyx3REFBd0Qsc0JBQXNCLEtBQUssR0FBRyxzREFBc0Qsb0JBQW9CLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLEdBQUcsOENBQThDLHNEQUFzRCx5QkFBeUIsS0FBSyxHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyw0Q0FBNEMscUJBQXFCLEdBQUcsOERBQThELDBCQUEwQixHQUFHLGlDQUFpQyxrQkFBa0Isa0JBQWtCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLEdBQUcsT0FBTyx3S0FBd0ssS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLHdHQUF3RyxNQUFNLHNCQUFzQixtQ0FBbUMsOENBQThDLDRCQUE0Qix1REFBdUQsZUFBZSxvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsY0FBYyx3QkFBd0Isc0JBQXNCLEtBQUssR0FBRyxXQUFXLG9CQUFvQix3QkFBd0IsNkJBQTZCLHVCQUF1Qix3QkFBd0IseUJBQXlCLEtBQUssR0FBRyxxQ0FBcUMsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLHFCQUFxQix5QkFBeUIsNEJBQTRCLEtBQUssR0FBRyxrQkFBa0Isa0JBQWtCLGtCQUFrQix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLDhCQUE4QixlQUFlLFFBQVEsMEJBQTBCLGVBQWUsUUFBUSwwQkFBMEIsZ0JBQWdCLFFBQVEsMkJBQTJCLG1CQUFtQixhQUFhLFFBQVEsRUFBRSxlQUFlLEtBQUssR0FBRyxtQkFBbUIsYUFBYSxRQUFRLEVBQUUsZUFBZSxLQUFLLEdBQUcsb0JBQW9CLGFBQWEsU0FBUyxFQUFFLGVBQWUsS0FBSyxHQUFHLHFCQUFxQjtBQUM1MkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL3BhZ2VzL0Fib3V0L0Fib3V0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDQwMDsxLDEwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgRm9udHNcXG4qL1xcbi8qXFxuICBDb2xvcnNcXG4qL1xcbi5BYm91dF9oMS10aXRsZV9fMmZxTjYsIC5BYm91dF9hYm91dF9fdGl0bGVfXzExQlVjIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICAuQWJvdXRfaDEtdGl0bGVfXzJmcU42LCAuQWJvdXRfYWJvdXRfX3RpdGxlX18xMUJVYyB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XFxuXFxuLkFib3V0X2JvZHlfXzJQOTN1LCAuQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDAzZW07XFxuICBsaW5lLWhlaWdodDogMS42MjU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICAuQWJvdXRfYm9keV9fMlA5M3UsIC5BYm91dF9hYm91dF9fY29udGVudF9fMWsyVmIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblxcbi5BYm91dF9hYm91dF9fY29udGVudF9fMWsyVmIge1xcbiAgY29sb3I6ICMyZDM3NDg7XFxufVxcblxcbi5BYm91dF9hYm91dF9fY29udGVudC1jb250YWluZXJfX0k4Y2pFIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxufVxcbi5BYm91dF9hYm91dF9fY29udGVudC1jb250YWluZXJfX0k4Y2pFIHA6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2Zvb3Rlcl9fMWU5OXcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vQWJvdXQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvYnJlYWtwb2ludHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTs7Q0FBQTtBQU9BOztDQUFBO0FBTUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ1RGO0FDS0U7RUZERjtJQVFJLGVBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ1JGO0FDUEU7RUZXRjtJQU9JLGtCQUFBO0VDUEY7QUFDRjs7QUF6QkE7RUFFRSxjQUFBO0FBMkJGOztBQXpCQTtFQUNFLGdCQUFBO0FBNEJGO0FBM0JFO0VBQ0UscUJBQUE7QUE2Qko7O0FBMUJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE2QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDQwMDsxLDEwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5AaW1wb3J0IFxcXCIuL2JyZWFrcG9pbnRzLnNjc3NcXFwiO1xcblxcbi8qXFxuICBGb250c1xcbiovXFxuXFxuJGxvZ28tZm9udDogXFxcIlJvYm90b1xcXCI7XFxuJHByaW1hcnktZm9udDogXFxcIlJvYm90b1xcXCI7XFxuXFxuLypcXG4gIENvbG9yc1xcbiovXFxuXFxuJGNvbG9yLWdyYXktcHJpbmNpcGFsOiAjY2JkNWUwO1xcblxcbi5oMS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjYyNTtcXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCBcXFwifnN0eWxlcy9zaGFyZWQuc2Nzc1xcXCI7XFxuXFxuLmFib3V0X190aXRsZSB7XFxuICBAZXh0ZW5kIC5oMS10aXRsZTtcXG59XFxuLmFib3V0X19jb250ZW50IHtcXG4gIEBleHRlbmQgLmJvZHk7XFxuICBjb2xvcjogIzJkMzc0ODtcXG59XFxuLmFib3V0X19jb250ZW50LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgcDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIH1cXG59XFxuLmFib3V0X19mb290ZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIixcIiRzY3JlZW46IFxcXCJvbmx5IHNjcmVlblxcXCI7XFxuJG1vYmlsZTogXFxcIiN7JHNjcmVlbn0gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxcXCI7XFxuJHRhYmxldDogXFxcIiN7JHNjcmVlbn0gYW5kIChtaW4td2lkdGg6IDc2OHB4KVxcXCI7XFxuJGRlc2t0b3A6IFxcXCIjeyRzY3JlZW59IGFuZCAobWluLXdpZHRoOiAxMDI1cHgpXFxcIjtcXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gIEBtZWRpYSAjeyRtb2JpbGV9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZXQge1xcbiAgQG1lZGlhICN7JHRhYmxldH0ge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGRlc2t0b3Age1xcbiAgQG1lZGlhICN7JGRlc2t0b3B9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImgxLXRpdGxlXCI6IFwiQWJvdXRfaDEtdGl0bGVfXzJmcU42XCIsXG5cdFwiYWJvdXRfX3RpdGxlXCI6IFwiQWJvdXRfYWJvdXRfX3RpdGxlX18xMUJVY1wiLFxuXHRcImJvZHlcIjogXCJBYm91dF9ib2R5X18yUDkzdVwiLFxuXHRcImFib3V0X19jb250ZW50XCI6IFwiQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiXCIsXG5cdFwiYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyXCI6IFwiQWJvdXRfYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyX19JOGNqRVwiLFxuXHRcImFib3V0X19mb290ZXJcIjogXCJBYm91dF9hYm91dF9fZm9vdGVyX18xZTk5d1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss\n");

/***/ })

})