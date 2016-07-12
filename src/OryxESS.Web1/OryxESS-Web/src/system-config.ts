// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  '@angular2-material': 'vendor/@angular2-material',
  'lodash':'vendor/lodash',
  'angular2-datatable': 'vendor/angular2-datatable',
  'ng2-pagination': 'vendor/ng2-pagination',
  "materialize": "vendor/materialize-css",
   "angular2-materialize": "vendor/angular2-materialize",
   "jquery": "vendor/jquery"
  
};

/** User packages configuration. */
const packages: any = {
  'ng2-bootstrap': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
  },
   'angular2-datatable': {   
    defaultExtension: 'js',
    main: 'datatable.js'
  },  
   'lodash': {   
    defaultExtension: 'js',
    main: 'index.js'
  },
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
  }
};

// put the names of any of your Material components here
const materialPkgs:string[] = [
  'core',
  'button',
  'card',
  'list',
  'input',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
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
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/forms',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/iou-retire',
  'app/iou',
  'app/home', 
  'app/forbidden',
  'app/unauthorized',
  'app/services',
  'app/iou/+iouheader/+iou',
  'app/iou/+iou',
  'app/workflow',
  'app/workflow/+workflowtrigger',
  
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
