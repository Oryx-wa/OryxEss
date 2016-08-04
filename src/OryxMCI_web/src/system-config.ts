// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  "jquery": "vendor/jquery",
  "materialize": "vendor/materialize-css",
  "angular2-materialize": "vendor/angular2-materialize",
  'ng2-pagination': 'vendor/ng2-pagination',
  "ng2-charts": 'vendor/ng2-charts',
  '@ngrx': 'vendor/@ngrx',
   "ng2-typeahead": 'vendor/ng2-typeahead',
   'ng2-pdf-viewer': 'vendor/ng2-pdf-viewer',
   'pdfjs-dist':'vendor/pdfjs-dist'

};

/** User packages configuration. */
const packages: any = {
  'ng2-pagination': {
    defaultExtension: 'js',
    main: 'index.js'
  },
  'materialize': {
    "format": "global",
    "main": "dist/js/materialize",
    "defaultExtension": "js"
  },
  'angular2-materialize': {
    "main": "dist/index",
    "defaultExtension": "js"
  },
  'ng2-charts': {
    defaultExtension: 'js',
    main: 'ng2-charts.js'
  },
  '@ngrx/core': {
    main: 'index'
  },
  '@ngrx/store':       {
    main: 'index'
  },
  '@ngrx/devtools':       {
    main: 'index'
  },
  'ng2-typeahead':{ 
    main: 'ng2-typeahead.js', 
    defaultExtension: 'js', 
  },
    'ng2-pdf-viewer': { main: 'dist/pdf-viewer.component.min' ,
    defaultExtension: "js"    
  },
  'pdfjs-dist': { main: 'build/pdf.js' ,
    defaultExtension: "js"    
  }

};

// put the names of any of your Material components here
const materialPkgs: string[] = [
  'core',
  'button',
  'card',
  'list',
  'input',
  'sidenav',
  'toolbar',
  'icon'

];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js` };
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/shared/pagination/oryx-paging',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
