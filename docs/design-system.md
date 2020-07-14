# Design Systems


#### Creating component's style
Here is path of your component`@components/Example/Example.tsx`
Create in this folder `Example.scss` where you will write your styles

Import your styles after `react`
```javascript
import * as React from "react";
import "./Example.scss";
```


Assign class name to element
Use `camelCase` in naming with BEM methodology
```javascript
<div className="example">Example</div>
```

#### How to use mixins in component's style

`Example.scss`
```scss
.example{
    @include title($size: 20px, $color: $main-text); 
    // mixins can pass variables and style data in parameter
    
    font-size: 24px; 
    /*to override mixin styles write your custom styles
    after mixin declaration*/ 
}
```

### How to use _colors.scss, _fonts.scss, _typography.scss

##### `_colors.scss`
```scss
$red: #EC3944;
$red_dark: #B6353D;
$red_light: #F89299;
...
```

`myComponent.scss`

```scss
.myComponent{
    color: $red;
    background-color: $red-dark;
}
```
---
##### `_fonts.scss`
```scss

$main-font: "Noto Sans JP";
```

`myComponent.scss`

```scss
.myComponent{
    font-family: $main-font; //Noto Sans JP
}
```
---
##### `_typography.scss`
```scss
...
@mixin content($weight: normal, $size: 14px, $color: $text-main) {
  font-weight: $weight;
  font-size: $size;
  line-height: $size + 4px;
  color: $color;
}
...
```

`myComponent.scss`

```scss
.myComponent{
    @include content($size: 16px, $color: $red); 
    /*output
    font-weight: normal;
    font-size: 16px;
    line-height:  20px;
    color: #EC3944;
    */
}
```
---
All mixins and variables that declared in `@styles` are visible in components' styles scope


#### Variables in SCSS
To declare `scss` variable you should start name with `$` (dollar sign)
For example:
```scss
$PI_NUMBER = 3.14;
$myBestColor = #000000;

//then you can use it in any scss file without importing and redeclaring

.component{
    background-color: $myBestColor;
    padding-top: $PI_NUMBER;
}

``` 
To learn more about variables go [here](https://www.w3schools.com/sass/sass_variables.asp)


#### How to write mixins
Mixin works as a function that accept parameters, then returns css properties

```scss
//@mixin name($param1: default, $param2, $param3){}
@mixin content($weight: normal, $size: 14px, $color: $text-main) {
  font-weight: $weight;
  font-size: $size;
  line-height: $size + 4px;
  color: $color;
}
/*be careful with values if you mean 20 pixels write 20px, if you write $size: 20, it will be declared as font-size: 20 instead of 20px*/

//then you can use it everywhere
@include content($weight: bold, $size: 18px);
```
To learn more about mixins go [here](https://www.w3schools.com/sass/sass_mixin_include.asp)
