webpackHotUpdate_N_E("pages/about",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/pages/About/About.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n  Fonts\\n*/\\n/*\\n  Colors\\n*/\\n.About_h1-title__2fqN6, .About_about__title__11BUc {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_h1-title__2fqN6, .About_about__title__11BUc {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.About_body__2P93u, .About_about__content__1k2Vb {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_body__2P93u, .About_about__content__1k2Vb {\\n    font-size: 1.25rem;\\n  }\\n}\\n\\n.About_about__content__1k2Vb {\\n  color: #2d3748;\\n}\\n\\n.About_about__image-container__53OPq {\\n  border: 1px solid red;\\n}\\n\\n.About_about__content-container__I8cjE {\\n  margin-top: 4rem;\\n}\\n.About_about__content-container__I8cjE p:not(:first-child) {\\n  margin-top: 20px;\\n}\\n\\n.About_about__image__2XcNg {\\n  width: 80%;\\n  height: 80%;\\n}\\n\\n.About_about__footer__1e99w {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/shared.scss\",\"webpack://About.module.scss\",\"webpack://../../../styles/breakpoints.scss\"],\"names\":[],\"mappings\":\"AAIA;;CAAA;AAOA;;CAAA;AAMA;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;ACTF;ACKE;EFDF;IAQI,eAAA;ECRF;AACF;;ADWA;EACE,eAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;ACRF;ACPE;EFWF;IAOI,kBAAA;ECPF;AACF;;AAzBA;EAEE,cAAA;AA2BF;;AAxBA;EACE,qBAAA;AA2BF;;AAxBA;EACE,gBAAA;AA2BF;AA1BE;EACE,gBAAA;AA4BJ;;AAzBA;EACE,UAAA;EACA,WAAA;AA4BF;;AA1BA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AA6BF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap\\\");\\n\\n@import \\\"./breakpoints.scss\\\";\\n\\n/*\\n  Fonts\\n*/\\n\\n$logo-font: \\\"Roboto\\\";\\n$primary-font: \\\"Roboto\\\";\\n\\n/*\\n  Colors\\n*/\\n\\n$color-gray-principal: #cbd5e0;\\n\\n.h1-title {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n\\n  @include desktop {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.body {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n\\n  @include desktop {\\n    font-size: 1.25rem;\\n  }\\n}\\n\",\"@import \\\"~styles/shared.scss\\\";\\n\\n.about__title {\\n  @extend .h1-title;\\n}\\n.about__content {\\n  @extend .body;\\n  color: #2d3748;\\n}\\n\\n.about__image-container {\\n  border: 1px solid red;\\n}\\n\\n.about__content-container {\\n  margin-top: 4rem;\\n  p:not(:first-child) {\\n    margin-top: 20px;\\n  }\\n}\\n.about__image {\\n  width: 80%;\\n  height: 80%;\\n}\\n.about__footer {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\",\"$screen: \\\"only screen\\\";\\n$mobile: \\\"#{$screen} and (max-width: 767px)\\\";\\n$tablet: \\\"#{$screen} and (min-width: 768px)\\\";\\n$desktop: \\\"#{$screen} and (min-width: 1025px)\\\";\\n\\n@mixin mobile {\\n  @media #{$mobile} {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet {\\n  @media #{$tablet} {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop {\\n  @media #{$desktop} {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"h1-title\": \"About_h1-title__2fqN6\",\n\t\"about__title\": \"About_about__title__11BUc\",\n\t\"body\": \"About_body__2P93u\",\n\t\"about__content\": \"About_about__content__1k2Vb\",\n\t\"about__image-container\": \"About_about__image-container__53OPq\",\n\t\"about__content-container\": \"About_about__content-container__I8cjE\",\n\t\"about__image\": \"About_about__image__2XcNg\",\n\t\"about__footer\": \"About_about__footer__1e99w\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQvQWJvdXQubW9kdWxlLnNjc3M/NDVhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBLDhCQUE4QixRQUFTLCtFQUErRSxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBLDhCQUE4QixRQUFTLDBGQUEwRixvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsY0FBYyxHQUFHLDhDQUE4Qyx3REFBd0Qsc0JBQXNCLEtBQUssR0FBRyxzREFBc0Qsb0JBQW9CLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLEdBQUcsOENBQThDLHNEQUFzRCx5QkFBeUIsS0FBSyxHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRywwQ0FBMEMsMEJBQTBCLEdBQUcsNENBQTRDLHFCQUFxQixHQUFHLDhEQUE4RCxxQkFBcUIsR0FBRyxnQ0FBZ0MsZUFBZSxnQkFBZ0IsR0FBRyxpQ0FBaUMsa0JBQWtCLGtCQUFrQix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLE9BQU8sd0tBQXdLLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLHdHQUF3RyxNQUFNLHNCQUFzQixtQ0FBbUMsOENBQThDLDRCQUE0Qix1REFBdUQsZUFBZSxvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsY0FBYyx3QkFBd0Isc0JBQXNCLEtBQUssR0FBRyxXQUFXLG9CQUFvQix3QkFBd0IsNkJBQTZCLHVCQUF1Qix3QkFBd0IseUJBQXlCLEtBQUssR0FBRyxxQ0FBcUMsbUJBQW1CLHNCQUFzQixHQUFHLG1CQUFtQixrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLCtCQUErQixxQkFBcUIseUJBQXlCLHVCQUF1QixLQUFLLEdBQUcsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLGtCQUFrQixrQkFBa0Isd0JBQXdCLHdCQUF3Qiw0QkFBNEIsR0FBRyw4QkFBOEIsZUFBZSxRQUFRLDBCQUEwQixlQUFlLFFBQVEsMEJBQTBCLGdCQUFnQixRQUFRLDJCQUEyQixtQkFBbUIsYUFBYSxRQUFRLEVBQUUsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLGFBQWEsUUFBUSxFQUFFLGVBQWUsS0FBSyxHQUFHLG9CQUFvQixhQUFhLFNBQVMsRUFBRSxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDbnBHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQvQWJvdXQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsNDAwOzEsMTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICBGb250c1xcbiovXFxuLypcXG4gIENvbG9yc1xcbiovXFxuLkFib3V0X2gxLXRpdGxlX18yZnFONiwgLkFib3V0X2Fib3V0X190aXRsZV9fMTFCVWMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1hcmdpbjogMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXG4gIC5BYm91dF9oMS10aXRsZV9fMmZxTjYsIC5BYm91dF9hYm91dF9fdGl0bGVfXzExQlVjIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uQWJvdXRfYm9keV9fMlA5M3UsIC5BYm91dF9hYm91dF9fY29udGVudF9fMWsyVmIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjYyNTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXG4gIC5BYm91dF9ib2R5X18yUDkzdSwgLkFib3V0X2Fib3V0X19jb250ZW50X18xazJWYiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuXFxuLkFib3V0X2Fib3V0X19jb250ZW50X18xazJWYiB7XFxuICBjb2xvcjogIzJkMzc0ODtcXG59XFxuXFxuLkFib3V0X2Fib3V0X19pbWFnZS1jb250YWluZXJfXzUzT1BxIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLkFib3V0X2Fib3V0X19jb250ZW50LWNvbnRhaW5lcl9fSThjakUge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuLkFib3V0X2Fib3V0X19jb250ZW50LWNvbnRhaW5lcl9fSThjakUgcDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2ltYWdlX18yWGNOZyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5BYm91dF9hYm91dF9fZm9vdGVyX18xZTk5dyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvc2hhcmVkLnNjc3NcIixcIndlYnBhY2s6Ly9BYm91dC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9icmVha3BvaW50cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBOztDQUFBO0FBT0E7O0NBQUE7QUFNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDVEY7QUNLRTtFRkRGO0lBUUksZUFBQTtFQ1JGO0FBQ0Y7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDUkY7QUNQRTtFRldGO0lBT0ksa0JBQUE7RUNQRjtBQUNGOztBQXpCQTtFQUVFLGNBQUE7QUEyQkY7O0FBeEJBO0VBQ0UscUJBQUE7QUEyQkY7O0FBeEJBO0VBQ0UsZ0JBQUE7QUEyQkY7QUExQkU7RUFDRSxnQkFBQTtBQTRCSjs7QUF6QkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQTRCRjs7QUExQkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTZCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsNDAwOzEsMTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbkBpbXBvcnQgXFxcIi4vYnJlYWtwb2ludHMuc2Nzc1xcXCI7XFxuXFxuLypcXG4gIEZvbnRzXFxuKi9cXG5cXG4kbG9nby1mb250OiBcXFwiUm9ib3RvXFxcIjtcXG4kcHJpbWFyeS1mb250OiBcXFwiUm9ib3RvXFxcIjtcXG5cXG4vKlxcbiAgQ29sb3JzXFxuKi9cXG5cXG4kY29sb3ItZ3JheS1wcmluY2lwYWw6ICNjYmQ1ZTA7XFxuXFxuLmgxLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDA7XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjI1O1xcblxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IFxcXCJ+c3R5bGVzL3NoYXJlZC5zY3NzXFxcIjtcXG5cXG4uYWJvdXRfX3RpdGxlIHtcXG4gIEBleHRlbmQgLmgxLXRpdGxlO1xcbn1cXG4uYWJvdXRfX2NvbnRlbnQge1xcbiAgQGV4dGVuZCAuYm9keTtcXG4gIGNvbG9yOiAjMmQzNzQ4O1xcbn1cXG5cXG4uYWJvdXRfX2ltYWdlLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hYm91dF9fY29udGVudC1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIHA6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbn1cXG4uYWJvdXRfX2ltYWdlIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuLmFib3V0X19mb290ZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIixcIiRzY3JlZW46IFxcXCJvbmx5IHNjcmVlblxcXCI7XFxuJG1vYmlsZTogXFxcIiN7JHNjcmVlbn0gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxcXCI7XFxuJHRhYmxldDogXFxcIiN7JHNjcmVlbn0gYW5kIChtaW4td2lkdGg6IDc2OHB4KVxcXCI7XFxuJGRlc2t0b3A6IFxcXCIjeyRzY3JlZW59IGFuZCAobWluLXdpZHRoOiAxMDI1cHgpXFxcIjtcXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gIEBtZWRpYSAjeyRtb2JpbGV9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZXQge1xcbiAgQG1lZGlhICN7JHRhYmxldH0ge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGRlc2t0b3Age1xcbiAgQG1lZGlhICN7JGRlc2t0b3B9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImgxLXRpdGxlXCI6IFwiQWJvdXRfaDEtdGl0bGVfXzJmcU42XCIsXG5cdFwiYWJvdXRfX3RpdGxlXCI6IFwiQWJvdXRfYWJvdXRfX3RpdGxlX18xMUJVY1wiLFxuXHRcImJvZHlcIjogXCJBYm91dF9ib2R5X18yUDkzdVwiLFxuXHRcImFib3V0X19jb250ZW50XCI6IFwiQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiXCIsXG5cdFwiYWJvdXRfX2ltYWdlLWNvbnRhaW5lclwiOiBcIkFib3V0X2Fib3V0X19pbWFnZS1jb250YWluZXJfXzUzT1BxXCIsXG5cdFwiYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyXCI6IFwiQWJvdXRfYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyX19JOGNqRVwiLFxuXHRcImFib3V0X19pbWFnZVwiOiBcIkFib3V0X2Fib3V0X19pbWFnZV9fMlhjTmdcIixcblx0XCJhYm91dF9fZm9vdGVyXCI6IFwiQWJvdXRfYWJvdXRfX2Zvb3Rlcl9fMWU5OXdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss\n");

/***/ })

})