webpackHotUpdate_N_E("pages/about",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/pages/About/About.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\n  Fonts\\n*/\\n/*\\n  Colors\\n*/\\n.About_h1-title__2fqN6, .About_about__title__11BUc {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_h1-title__2fqN6, .About_about__title__11BUc {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.About_body__2P93u, .About_about__content__1k2Vb {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n}\\n@media only screen and (min-width: 1025px) {\\n  .About_body__2P93u, .About_about__content__1k2Vb {\\n    font-size: 1.25rem;\\n  }\\n}\\n\\n.About_about__content__1k2Vb {\\n  color: #2d3748;\\n}\\n\\n.About_about__content-container__I8cjE {\\n  margin-top: 4rem;\\n}\\n.About_about__content-container__I8cjE p:not(:first-child) {\\n  margin-top: 20px;\\n}\\n\\n.About_about__image__2XcNg {\\n  width: 100%;\\n}\\n\\n.About_about__footer__1e99w {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../../styles/shared.scss\",\"webpack://About.module.scss\",\"webpack://../../../styles/breakpoints.scss\"],\"names\":[],\"mappings\":\"AAIA;;CAAA;AAOA;;CAAA;AAMA;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;ACTF;ACKE;EFDF;IAQI,eAAA;ECRF;AACF;;ADWA;EACE,eAAA;EACA,mBAAA;EACA,wBAAA;EACA,kBAAA;ACRF;ACPE;EFWF;IAOI,kBAAA;ECPF;AACF;;AAzBA;EAEE,cAAA;AA2BF;;AAzBA;EACE,gBAAA;AA4BF;AA3BE;EACE,gBAAA;AA6BJ;;AA1BA;EACE,WAAA;AA6BF;;AA3BA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AA8BF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap\\\");\\n\\n@import \\\"./breakpoints.scss\\\";\\n\\n/*\\n  Fonts\\n*/\\n\\n$logo-font: \\\"Roboto\\\";\\n$primary-font: \\\"Roboto\\\";\\n\\n/*\\n  Colors\\n*/\\n\\n$color-gray-principal: #cbd5e0;\\n\\n.h1-title {\\n  font-size: 3rem;\\n  font-family: Roboto;\\n  font-weight: 700;\\n  line-height: 1.25;\\n  margin: 0;\\n\\n  @include desktop {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.body {\\n  font-size: 1rem;\\n  font-family: Roboto;\\n  letter-spacing: -0.003em;\\n  line-height: 1.625;\\n\\n  @include desktop {\\n    font-size: 1.25rem;\\n  }\\n}\\n\",\"@import \\\"~styles/shared.scss\\\";\\n\\n.about__title {\\n  @extend .h1-title;\\n}\\n.about__content {\\n  @extend .body;\\n  color: #2d3748;\\n}\\n.about__content-container {\\n  margin-top: 4rem;\\n  p:not(:first-child) {\\n    margin-top: 20px;\\n  }\\n}\\n.about__image {\\n  width: 100%;\\n}\\n.about__footer {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\",\"$screen: \\\"only screen\\\";\\n$mobile: \\\"#{$screen} and (max-width: 767px)\\\";\\n$tablet: \\\"#{$screen} and (min-width: 768px)\\\";\\n$desktop: \\\"#{$screen} and (min-width: 1025px)\\\";\\n\\n@mixin mobile {\\n  @media #{$mobile} {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet {\\n  @media #{$tablet} {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop {\\n  @media #{$desktop} {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"h1-title\": \"About_h1-title__2fqN6\",\n\t\"about__title\": \"About_about__title__11BUc\",\n\t\"body\": \"About_body__2P93u\",\n\t\"about__content\": \"About_about__content__1k2Vb\",\n\t\"about__content-container\": \"About_about__content-container__I8cjE\",\n\t\"about__image\": \"About_about__image__2XcNg\",\n\t\"about__footer\": \"About_about__footer__1e99w\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvQWJvdXQvQWJvdXQubW9kdWxlLnNjc3M/NDVhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBLDhCQUE4QixRQUFTLCtFQUErRSxNQUFNLG9CQUFvQjtBQUNoSjtBQUNBLDhCQUE4QixRQUFTLDBGQUEwRixvQkFBb0Isd0JBQXdCLHFCQUFxQixzQkFBc0IsY0FBYyxHQUFHLDhDQUE4Qyx3REFBd0Qsc0JBQXNCLEtBQUssR0FBRyxzREFBc0Qsb0JBQW9CLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLEdBQUcsOENBQThDLHNEQUFzRCx5QkFBeUIsS0FBSyxHQUFHLGtDQUFrQyxtQkFBbUIsR0FBRyw0Q0FBNEMscUJBQXFCLEdBQUcsOERBQThELHFCQUFxQixHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRyxpQ0FBaUMsa0JBQWtCLGtCQUFrQix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLE9BQU8sd0tBQXdLLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyx3R0FBd0csTUFBTSxzQkFBc0IsbUNBQW1DLDhDQUE4Qyw0QkFBNEIsdURBQXVELGVBQWUsb0JBQW9CLHdCQUF3QixxQkFBcUIsc0JBQXNCLGNBQWMsd0JBQXdCLHNCQUFzQixLQUFLLEdBQUcsV0FBVyxvQkFBb0Isd0JBQXdCLDZCQUE2Qix1QkFBdUIsd0JBQXdCLHlCQUF5QixLQUFLLEdBQUcscUNBQXFDLG1CQUFtQixzQkFBc0IsR0FBRyxtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLDZCQUE2QixxQkFBcUIseUJBQXlCLHVCQUF1QixLQUFLLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixrQkFBa0Isa0JBQWtCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLEdBQUcsOEJBQThCLGVBQWUsUUFBUSwwQkFBMEIsZUFBZSxRQUFRLDBCQUEwQixnQkFBZ0IsUUFBUSwyQkFBMkIsbUJBQW1CLGFBQWEsUUFBUSxFQUFFLGVBQWUsS0FBSyxHQUFHLG1CQUFtQixhQUFhLFFBQVEsRUFBRSxlQUFlLEtBQUssR0FBRyxvQkFBb0IsYUFBYSxTQUFTLEVBQUUsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ2g5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvY29tcG9uZW50cy9wYWdlcy9BYm91dC9BYm91dC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCw0MDA7MSwxMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gIEZvbnRzXFxuKi9cXG4vKlxcbiAgQ29sb3JzXFxuKi9cXG4uQWJvdXRfaDEtdGl0bGVfXzJmcU42LCAuQWJvdXRfYWJvdXRfX3RpdGxlX18xMUJVYyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgLkFib3V0X2gxLXRpdGxlX18yZnFONiwgLkFib3V0X2Fib3V0X190aXRsZV9fMTFCVWMge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxufVxcblxcbi5BYm91dF9ib2R5X18yUDkzdSwgLkFib3V0X2Fib3V0X19jb250ZW50X18xazJWYiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjI1O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgLkFib3V0X2JvZHlfXzJQOTN1LCAuQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiIHtcXG4gIGNvbG9yOiAjMmQzNzQ4O1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyX19JOGNqRSB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG4uQWJvdXRfYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyX19JOGNqRSBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5BYm91dF9hYm91dF9faW1hZ2VfXzJYY05nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uQWJvdXRfYWJvdXRfX2Zvb3Rlcl9fMWU5OXcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL3NoYXJlZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vQWJvdXQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvYnJlYWtwb2ludHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTs7Q0FBQTtBQU9BOztDQUFBO0FBTUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ1RGO0FDS0U7RUZERjtJQVFJLGVBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ1JGO0FDUEU7RUZXRjtJQU9JLGtCQUFBO0VDUEY7QUFDRjs7QUF6QkE7RUFFRSxjQUFBO0FBMkJGOztBQXpCQTtFQUNFLGdCQUFBO0FBNEJGO0FBM0JFO0VBQ0UsZ0JBQUE7QUE2Qko7O0FBMUJBO0VBQ0UsV0FBQTtBQTZCRjs7QUEzQkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQThCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsNDAwOzEsMTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbkBpbXBvcnQgXFxcIi4vYnJlYWtwb2ludHMuc2Nzc1xcXCI7XFxuXFxuLypcXG4gIEZvbnRzXFxuKi9cXG5cXG4kbG9nby1mb250OiBcXFwiUm9ib3RvXFxcIjtcXG4kcHJpbWFyeS1mb250OiBcXFwiUm9ib3RvXFxcIjtcXG5cXG4vKlxcbiAgQ29sb3JzXFxuKi9cXG5cXG4kY29sb3ItZ3JheS1wcmluY2lwYWw6ICNjYmQ1ZTA7XFxuXFxuLmgxLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDA7XFxuXFxuICBAaW5jbHVkZSBkZXNrdG9wIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjI1O1xcblxcbiAgQGluY2x1ZGUgZGVza3RvcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IFxcXCJ+c3R5bGVzL3NoYXJlZC5zY3NzXFxcIjtcXG5cXG4uYWJvdXRfX3RpdGxlIHtcXG4gIEBleHRlbmQgLmgxLXRpdGxlO1xcbn1cXG4uYWJvdXRfX2NvbnRlbnQge1xcbiAgQGV4dGVuZCAuYm9keTtcXG4gIGNvbG9yOiAjMmQzNzQ4O1xcbn1cXG4uYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuICBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG59XFxuLmFib3V0X19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFib3V0X19mb290ZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIixcIiRzY3JlZW46IFxcXCJvbmx5IHNjcmVlblxcXCI7XFxuJG1vYmlsZTogXFxcIiN7JHNjcmVlbn0gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxcXCI7XFxuJHRhYmxldDogXFxcIiN7JHNjcmVlbn0gYW5kIChtaW4td2lkdGg6IDc2OHB4KVxcXCI7XFxuJGRlc2t0b3A6IFxcXCIjeyRzY3JlZW59IGFuZCAobWluLXdpZHRoOiAxMDI1cHgpXFxcIjtcXG5cXG5AbWl4aW4gbW9iaWxlIHtcXG4gIEBtZWRpYSAjeyRtb2JpbGV9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZXQge1xcbiAgQG1lZGlhICN7JHRhYmxldH0ge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGRlc2t0b3Age1xcbiAgQG1lZGlhICN7JGRlc2t0b3B9IHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImgxLXRpdGxlXCI6IFwiQWJvdXRfaDEtdGl0bGVfXzJmcU42XCIsXG5cdFwiYWJvdXRfX3RpdGxlXCI6IFwiQWJvdXRfYWJvdXRfX3RpdGxlX18xMUJVY1wiLFxuXHRcImJvZHlcIjogXCJBYm91dF9ib2R5X18yUDkzdVwiLFxuXHRcImFib3V0X19jb250ZW50XCI6IFwiQWJvdXRfYWJvdXRfX2NvbnRlbnRfXzFrMlZiXCIsXG5cdFwiYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyXCI6IFwiQWJvdXRfYWJvdXRfX2NvbnRlbnQtY29udGFpbmVyX19JOGNqRVwiLFxuXHRcImFib3V0X19pbWFnZVwiOiBcIkFib3V0X2Fib3V0X19pbWFnZV9fMlhjTmdcIixcblx0XCJhYm91dF9fZm9vdGVyXCI6IFwiQWJvdXRfYWJvdXRfX2Zvb3Rlcl9fMWU5OXdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/pages/About/About.module.scss\n");

/***/ })

})