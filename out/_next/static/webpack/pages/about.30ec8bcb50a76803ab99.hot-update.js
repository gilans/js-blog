webpackHotUpdate_N_E("pages/about",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/pages/About/About.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n  Fonts\\n*/\\n/*\\n  Colors\\n*/\\n.About_h1-title__2fqN6, .About_about__title__11BUc {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_h1-title__2fqN6, .About_about__title__11BUc {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.About_body__2P93u, .About_about__content__1k2Vb {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_body__2P93u, .About_about__content__1k2Vb {\\n    font-size: 1.25rem;\\n  }\\n}\\n\\n.About_about__container__1vkiA {\\n  padding: 0 1rem;\\n}\\n\\n.About_about__content__1k2Vb {\\n  color: #2d3748;\\n}\\n\\n.About_about__image-container__53OPq {\\n  display: inline-flex;\\n  justify-content: center;\\n}\\n\\n.About_about__content-container__I8cjE {\\n  margin-top: 4rem;\\n}\\n.About_about__content-container__I8cjE p:not(:first-child) {\\n  margin-top: 20px;\\n}\\n\\n.About_about__image__2XcNg {\\n  width: 80%;\\n  height: 80%;\\n}\\n\\n.About_about__footer__1e99w {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/shared.scss\",\"webpack://About.module.scss\",\"webpack://../../../styles/breakpoints.scss\"],\"names\":[],\"mappings\":\"AAIA;;CAAA;AAOA;;CAAA;AAMA;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;ACTF;ACKE;EFDF;IAQI,eAAA;ECRF;AACF;;ADWA;EACE,eAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;ACRF;ACPE;EFWF;IAOI,kBAAA;ECPF;AACF;;AA7BA;EACE,eAAA;AAgCF;;AA1BA;EAEE,cAAA;AA4BF;;AAzBA;EACE,oBAAA;EACA,uBAAA;AA4BF;;AAzBA;EACE,gBAAA;AA4BF;AA1BE;EACE,gBAAA;AA4BJ;;AAzBA;EACE,UAAA;EACA,WAAA;AA4BF;;AA1BA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AA6BF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap\\\");\\n\\n@import \\\"./breakpoints.scss\\\";\\n\\n/*\\n  Fonts\\n*/\\n\\n$logo-font: \\\"Roboto\\\";\\n$primary-font: \\\"Roboto\\\";\\n\\n/*\\n  Colors\\n*/\\n\\n$color-gray-principal: #cbd5e0;\\n\\n.h1-title {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n\\n  @include desktop {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.body {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n\\n  @include desktop {\\n    font-size: 1.25rem;\\n  }\\n}\\n\",\"@import \\\"~styles/shared.scss\\\";\\n.about__container {\\n  padding: 0 1rem;\\n}\\n\\n.about__title {\\n  @extend .h1-title;\\n}\\n.about__content {\\n  @extend .body;\\n  color: #2d3748;\\n}\\n\\n.about__image-container {\\n  display: inline-flex;\\n  justify-content: center;\\n}\\n\\n.about__content-container {\\n  margin-top: 4rem;\\n\\n  p:not(:first-child) {\\n    margin-top: 20px;\\n  }\\n}\\n.about__image {\\n  width: 80%;\\n  height: 80%;\\n}\\n.about__footer {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\",\"$screen: \\\"only screen\\\";\\n$mobile: \\\"#{$screen} and (max-width: 767px)\\\";\\n$tablet: \\\"#{$screen} and (min-width: 768px)\\\";\\n$desktop: \\\"#{$screen} and (min-width: 1025px)\\\";\\n\\n@mixin mobile {\\n  @media #{$mobile} {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet {\\n  @media #{$tablet} {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop {\\n  @media #{$desktop} {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"h1-title\": \"About_h1-title__2fqN6\",\n\t\"about__title\": \"About_about__title__11BUc\",\n\t\"body\": \"About_body__2P93u\",\n\t\"about__content\": \"About_about__content__1k2Vb\",\n\t\"about__container\": \"About_about__container__1vkiA\",\n\t\"about__image-container\": \"About_about__image-container__53OPq\",\n\t\"about__content-container\": \"About_about__content-container__I8cjE\",\n\t\"about__image\": \"About_about__image__2XcNg\",\n\t\"about__footer\": \"About_about__footer__1e99w\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQvQWJvdXQubW9kdWxlLnNjc3M/NDVhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBLDhCQUE4QixRQUFTLCtFQUErRSxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBLDhCQUE4QixRQUFTLDBGQUEwRixvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsY0FBYyxHQUFHLDhDQUE4Qyx3REFBd0Qsc0JBQXNCLEtBQUssR0FBRyxzREFBc0Qsb0JBQW9CLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLEdBQUcsOENBQThDLHNEQUFzRCx5QkFBeUIsS0FBSyxHQUFHLG9DQUFvQyxvQkFBb0IsR0FBRyxrQ0FBa0MsbUJBQW1CLEdBQUcsMENBQTBDLHlCQUF5Qiw0QkFBNEIsR0FBRyw0Q0FBNEMscUJBQXFCLEdBQUcsOERBQThELHFCQUFxQixHQUFHLGdDQUFnQyxlQUFlLGdCQUFnQixHQUFHLGlDQUFpQyxrQkFBa0Isa0JBQWtCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLEdBQUcsT0FBTyx3S0FBd0ssS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyx3R0FBd0csTUFBTSxzQkFBc0IsbUNBQW1DLDhDQUE4Qyw0QkFBNEIsdURBQXVELGVBQWUsb0JBQW9CLHdCQUF3QixxQkFBcUIsc0JBQXNCLGNBQWMsd0JBQXdCLHNCQUFzQixLQUFLLEdBQUcsV0FBVyxvQkFBb0Isd0JBQXdCLDZCQUE2Qix1QkFBdUIsd0JBQXdCLHlCQUF5QixLQUFLLEdBQUcscUNBQXFDLHFCQUFxQixvQkFBb0IsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLGtCQUFrQixtQkFBbUIsR0FBRyw2QkFBNkIseUJBQXlCLDRCQUE0QixHQUFHLCtCQUErQixxQkFBcUIsMkJBQTJCLHVCQUF1QixLQUFLLEdBQUcsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLGtCQUFrQixrQkFBa0Isd0JBQXdCLHdCQUF3Qiw0QkFBNEIsR0FBRyw4QkFBOEIsZUFBZSxRQUFRLDBCQUEwQixlQUFlLFFBQVEsMEJBQTBCLGdCQUFnQixRQUFRLDJCQUEyQixtQkFBbUIsYUFBYSxRQUFRLEVBQUUsZUFBZSxLQUFLLEdBQUcsbUJBQW1CLGFBQWEsUUFBUSxFQUFFLGVBQWUsS0FBSyxHQUFHLG9CQUFvQixhQUFhLFNBQVMsRUFBRSxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDcDFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BYm91dC9BYm91dC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw0MDA7MSwxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gIEZvbnRzXFxuKi9cXG4vKlxcbiAgQ29sb3JzXFxuKi9cXG4uQWJvdXRfaDEtdGl0bGVfXzJmcU42LCAuQWJvdXRfYWJvdXRfX3RpdGxlX18xMUJVYyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgLkFib3V0X2gxLXRpdGxlX18yZnFONiwgLkFib3V0X2Fib3V0X190aXRsZV9fMTFCVWMge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxufVxcblxcbi5BYm91dF9ib2R5X18yUDkzdSwgLkFib3V0X2Fib3V0X19jb250ZW50X18xazJWYiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjI1O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgLkFib3V0X2JvZHlfXzJQOTN1LCAuQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2NvbnRhaW5lcl9fMXZraUEge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiIHtcXG4gIGNvbG9yOiAjMmQzNzQ4O1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2ltYWdlLWNvbnRhaW5lcl9fNTNPUHEge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLkFib3V0X2Fib3V0X19jb250ZW50LWNvbnRhaW5lcl9fSThjakUge1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuLkFib3V0X2Fib3V0X19jb250ZW50LWNvbnRhaW5lcl9fSThjakUgcDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2ltYWdlX18yWGNOZyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5BYm91dF9hYm91dF9fZm9vdGVyX18xZTk5dyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvc2hhcmVkLnNjc3NcIixcIndlYnBhY2s6Ly9BYm91dC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9icmVha3BvaW50cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBOztDQUFBO0FBT0E7O0NBQUE7QUFNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDVEY7QUNLRTtFRkRGO0lBUUksZUFBQTtFQ1JGO0FBQ0Y7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDUkY7QUNQRTtFRldGO0lBT0ksa0JBQUE7RUNQRjtBQUNGOztBQTdCQTtFQUNFLGVBQUE7QUFnQ0Y7O0FBMUJBO0VBRUUsY0FBQTtBQTRCRjs7QUF6QkE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBNEJGOztBQXpCQTtFQUNFLGdCQUFBO0FBNEJGO0FBMUJFO0VBQ0UsZ0JBQUE7QUE0Qko7O0FBekJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE2QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDQwMDsxLDEwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5AaW1wb3J0IFxcXCIuL2JyZWFrcG9pbnRzLnNjc3NcXFwiO1xcblxcbi8qXFxuICBGb250c1xcbiovXFxuXFxuJGxvZ28tZm9udDogXFxcIlJvYm90b1xcXCI7XFxuJHByaW1hcnktZm9udDogXFxcIlJvYm90b1xcXCI7XFxuXFxuLypcXG4gIENvbG9yc1xcbiovXFxuXFxuJGNvbG9yLWdyYXktcHJpbmNpcGFsOiAjY2JkNWUwO1xcblxcbi5oMS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjYyNTtcXG5cXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCBcXFwifnN0eWxlcy9zaGFyZWQuc2Nzc1xcXCI7XFxuLmFib3V0X19jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4uYWJvdXRfX3RpdGxlIHtcXG4gIEBleHRlbmQgLmgxLXRpdGxlO1xcbn1cXG4uYWJvdXRfX2NvbnRlbnQge1xcbiAgQGV4dGVuZCAuYm9keTtcXG4gIGNvbG9yOiAjMmQzNzQ4O1xcbn1cXG5cXG4uYWJvdXRfX2ltYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuXFxuICBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG59XFxuLmFib3V0X19pbWFnZSB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcbi5hYm91dF9fZm9vdGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsXCIkc2NyZWVuOiBcXFwib25seSBzY3JlZW5cXFwiO1xcbiRtb2JpbGU6IFxcXCIjeyRzY3JlZW59IGFuZCAobWF4LXdpZHRoOiA3NjdweClcXFwiO1xcbiR0YWJsZXQ6IFxcXCIjeyRzY3JlZW59IGFuZCAobWluLXdpZHRoOiA3NjhweClcXFwiO1xcbiRkZXNrdG9wOiBcXFwiI3skc2NyZWVufSBhbmQgKG1pbi13aWR0aDogMTAyNXB4KVxcXCI7XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICBAbWVkaWEgI3skbW9iaWxlfSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdGFibGV0IHtcXG4gIEBtZWRpYSAjeyR0YWJsZXR9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBkZXNrdG9wIHtcXG4gIEBtZWRpYSAjeyRkZXNrdG9wfSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoMS10aXRsZVwiOiBcIkFib3V0X2gxLXRpdGxlX18yZnFONlwiLFxuXHRcImFib3V0X190aXRsZVwiOiBcIkFib3V0X2Fib3V0X190aXRsZV9fMTFCVWNcIixcblx0XCJib2R5XCI6IFwiQWJvdXRfYm9keV9fMlA5M3VcIixcblx0XCJhYm91dF9fY29udGVudFwiOiBcIkFib3V0X2Fib3V0X19jb250ZW50X18xazJWYlwiLFxuXHRcImFib3V0X19jb250YWluZXJcIjogXCJBYm91dF9hYm91dF9fY29udGFpbmVyX18xdmtpQVwiLFxuXHRcImFib3V0X19pbWFnZS1jb250YWluZXJcIjogXCJBYm91dF9hYm91dF9faW1hZ2UtY29udGFpbmVyX181M09QcVwiLFxuXHRcImFib3V0X19jb250ZW50LWNvbnRhaW5lclwiOiBcIkFib3V0X2Fib3V0X19jb250ZW50LWNvbnRhaW5lcl9fSThjakVcIixcblx0XCJhYm91dF9faW1hZ2VcIjogXCJBYm91dF9hYm91dF9faW1hZ2VfXzJYY05nXCIsXG5cdFwiYWJvdXRfX2Zvb3RlclwiOiBcIkFib3V0X2Fib3V0X19mb290ZXJfXzFlOTl3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss\n");

/***/ })

})