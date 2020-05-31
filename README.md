## AgGrid
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.
### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### Angular Material dependencies need to be installed
- To create new Angular Project run this command ` ng new project-Name --routing`

   
    npm install @angular/material @angular/cdk
    npm install @angular/animations
    npm install hammerjs 
    
- **Add** `@import "~@angular/material/prebuilt-themes/indigo-pink.css";` in style.css
- **Add** imports in app.module.ts <br>`BrowserAnimationsModule,MatMenuModule,MatButtonModule,MatIconModule,MatSidenavModule,MatListModule,MatToolbarModule` 
### Add Ag-Grid community dependency
    npm install --save ag-grid-community ag-grid-angular
    npm install  (Note: Update package.json )
**Add** below 2 points in app.module.ts
- `import { AgGridModule} from 'ag-grid-angular';  `  
- `import:[AgGridModule.withComponents([])]`

**Add** imports in style.css
- `@import "~ag-grid-community/dist/styles/ag-grid.css"; `
- `@import "~ag-grid-community/dist/styles/ag-theme-balham.css"; ` 
 
