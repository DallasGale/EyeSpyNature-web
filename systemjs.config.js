/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'app',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',  
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
      'rxjs': 'npm:rxjs',
      'angular2-masonry': 'npm:angular2-masonry',
      'masonry-layout': 'npm:masonry-layout/dist/masonry.pkgd.js',
      "ngx-bootstrap": "node_modules/ngx-bootstrap",
      'hammerjs': 'npm:hammerjs',
      'mousetrap': 'npm:mousetrap',
      'angular-modal-gallery': 'npm:angular-modal-gallery/dist/bundles'
    },
    packages: {
      "angular2-masonry": { "defaultExtension": "js", "main": "index" },
      'ngx-bootstrap': { format: 'cjs', main: 'bundles/ngx-bootstrap.umd.js', defaultExtension: 'js' },
      'hammerjs'                  : { main: 'hammer.js' },
      'mousetrap'                 : { main: 'mousetrap.js' },
      'angular-modal-gallery'     : { main: 'angular-modal-gallery.umd.js' },
      app: {
        main: './main.js',
        defaultExtension: 'js',
      },
      rxjs: {
        defaultExtension: 'js',
        main: 'Rx.js'
      }
    }
  });
})(this);
