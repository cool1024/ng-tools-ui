# ng-tools-ui

A bootstrap4.0 UI for angular 6.0

## example

example usage :[https://www.cool1024.com/ng](https://www.cool1024.com/ng)<br>
![preview](https://github.com/BeauitfullXiaoJian/cool1024/blob/master/public/home/preview.png?raw=true)

## Install

### To use ng-tools-ui in your project install it via npm:

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

or add the follow code in your `angular.json` file.

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

### Usage

import `ButtonModule` in your module.

```typescript
import { ButtonModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., ButtonModule ],
    ...
})
export class MyModule { }
```

### Change theme and use sass

>use sass,you will not need include bootstrap.css,use the follow file replace

```scss
/**
 * tools-ui.scss
 */

@import "~bootstrap/scss/functions";

// bootstrap setting file
@import "variables";


@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/code";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/input-group";
@import "~bootstrap/scss/custom-forms";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/jumbotron";
@import "~bootstrap/scss/progress";
@import "~bootstrap/scss/media";
@import "~bootstrap/scss/close";
@import "~bootstrap/scss/modal";
@import "~bootstrap/scss/alert";


/**
 * bootstrap style over
 */

* {
    font-family: Helvetica Neue For Number, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
    /* font-size: 15px; */
}

.dropup .dropdown-menu {
    bottom: auto !important;
}

a,
button,
input,
select,
textarea {
    outline: 0 none !important;
    text-decoration: none !important;
    z-index: 0 !important;
    box-shadow: 0px 0px 0px white !important;
}

textarea {
    height: 100px;
}

div,
span {
    outline: 0 none !important;
}

a:link {
    text-decoration: none;
}

a:active {
    text-decoration: none
}

a:hover {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

.btn:disabled {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    cursor: not-allowed !important;
}

.table td,
.table th {
    vertical-align: middle !important;
}

/*bootstrap4 样式拓展*/

.pointer {
    cursor: pointer;
}

.no-select {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}

@each $color,
$value in $theme-colors {
    .tab-border-#{$color} {
        border-top: 3px solid #{$value} !important;
    }
}

.m-btn .btn{
    margin-left: $spacer * .25;
}

.m-btn .btn:first-child{
    margin-left: 0;
}


.btn-white,
.btn-outline-white {
    color: $dark;
    border-color: $gray-400;
}

.btn-outline-white:hover,
.btn-outline-white:active {
    color: $dark;
    border-color: $gray-400;
}

.btn-outline-white:not(:disabled):not(.disabled):active,
.btn-outline-white:not(:disabled):not(.disabled).active,
.show>.btn-outline-white.dropdown-toggle {
    color: $dark;
    border-color: $gray-400;
    background-color: $gray-300;
}

.btn-outline-white.disabled,
.btn-outline-white:disabled {
    color: $gray-500;
}

.label-required::before {
    content: '* ';
    color: $red;
}

.hr-light {
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.rounded-top-0 {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}

.rounded-bottom-0 {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.rounded-left-0 {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}

.rounded-right-0 {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}

.btn-icon {
    border-radius: 50%;
    height: 35px;
    width: 35px !important;
    line-height: 35px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
}

.btn-icon:hover {
    color: #fff !important;
}

.btn-icon:active {
    opacity: 0.8;
}

@each $color,
$value in $theme-colors {
    .btn-icon-#{$color} {
        color: #{$value} !important;
    }
    .btn-icon-#{$color}:hover {
        // background-color: #{$value} !important;
        @include gradient-bg($value);
    }
}
```
