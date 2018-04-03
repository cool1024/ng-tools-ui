# ng-tools-ui
A bootstrap4.0 UI for angular4.0+

## Install

### To useng-tools-ui in your project install it via npm:

```
npm install ng-tools-ui --save
```

### Include bootstrap4.0 css , tools-ui.css and font-awesome


```
npm install bootstrap --save

npm install font-awesome --save
```


If you're using the Angular CLI, you can add this to your styles.css:


```css
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~ng-tools-ui/dist/src/css/tools-ui.css";
@import "~font-awesome/css/font-awesome.min.css";
```

or add the follow code in your `.angular-cli.json` file.

```json
...

"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/ng-tools-ui/dist/css/tools-ui.css",
        "../node_modules/font-awesome/css/font-awesome.min.css",
        "styles.css"
      ],
...

```

Usage

import `ButtonModule` in your module.

```typescript
import { ButtonModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., ButtonModule ],
    ...
})
export class MyModule { }
```