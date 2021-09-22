<div align="center">
  <h1>Brockma</h1>
  <p>Brockma is a Sass toolkit library that contain collections of Sass variables, functions and mixins which are based on the Start-End Direction approach; The library main goal is to help you simplify common use cases in client side developing, and support multi-language websites without adding any additional Sass configuration settings.</p>
</div

> ⚠ Please note, the library is still under beta, don't use it in production.


## What the library solves?

Let's assume you need to publish a two language website, e.g English and Hebrew. As you probably know, if you would like to write a letter in English, you should start writing it from left to right. Now, if we take this letter and convert it to CSS, the `direction` property will be `ltr` and the `text-align` property will be `left`.<br />
In terms of experts, the `left` value will be called "Start Direction", and the `right` value will be called "End Direction".<br />
The "Direction" definition will always be the alignment of the text, so in English the start direction will be `left`, and the end direction will be `right`, but what about Semitic Languages? These languages’ start direction is `right`, and the end direction is `left`(!).

Unfortunately, most of the time, when developers need to publish a multi-language website that contains a Semitic Language, they use shortcuts by adding more CSS to their main.css file, and hoping they run-over all LTR settings correctly. This method is wrong, by adding more CSS to your main.css file, you are not just causing the code to be long and cumbersome, but you are making sure you will get tons of bugs in your design, in addition your users will experience poor user experience.

Brockma solves this problem by giving you a collection of Sass mixins that adjust their response content behave according to the Start-End Direction you will define.<br />
The library taking out these `right` and `left` terms, and pronounce them as `start` and `end`. For example: If you would like adding a one side border to an element in your English site, the element will get a `border-left` property, but as we have already said, Brockma pronounce this differently, so instead of using the `border-*` property, you will using the Brockma mixin `border-start()`, i.e: `@include border-start( 1px solid #000 );`, and the output will be `border-left: 1px solid #000;`.

With this Brockma technique you can create multiple CSS files and associate each file for a specific direction.


### E.G
**SASS files:**



**_index.scss**

```scss
.card {
  // @include border-start( 1px solid #000 ); // node-sass
  @include brockma.border-start( 1px solid #000 ); // Dart Sass
}
```

**index.ltr.scss**

```scss
// @import "brockma/index"; // node-sass
@use "brockma"; // Dart Sass, Brockma default start-direction is LTR
@import "index"; // Site components
```

**index.rtl.scss**

```scss
// @import "brockma/rtl"; // node-sass
@use "brockma/rtl" as brockma; // Dart Sass, using Brockma RTL start-direction
@import "index"; // Site components
```
**CSS output:**



**index.ltr.css**

```css
.card {
   border-left: 1px solid #000;
}
```

**index.rtl.css**

```css
.card {
   border-right: 1px solid #000;
}
```

## Installation


```bash
npm i --save-dev brockma
```

## Brockma API
### Variables:

<details>

<summary><code>$direction</code></summary>

### `$direction`
- Site current direction [&lt;direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

> Default : `ltr`
```scss
$direction: <direction>;
```
##### Example
###### Scss:

```scss
body {
    direction: $direction;
}
```
###### Output:

```css
body {
    direction: ltr;
}
```
<hr />

</details>


<details>

<summary><code>$opposite-direction</code></summary>

### `$opposite-direction`
- Site opposite direction [&lt;direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

> Default : `rtl`
```scss
$opposite-direction: <direction>;
```
##### Example
###### Scss:

```scss
body {
    direction: $opposite-direction;
}
```
###### Output:

```css
body {
    direction: rtl;
}
```
<hr />

</details>


<details>

<summary><code>$start-direction</code></summary>

### `$start-direction`
- Site start direction [&lt;inset-properties{left,right}&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)

> Default : `left`
```scss
$start-direction: <inset-properties{left,right}>;
```
##### Example
###### Scss:

```scss
body {
    text-align: $start-direction;
}
```
###### Output:

```css
body {
    text-align: left;
}
```
<hr />

</details>


<details>

<summary><code>$end-direction</code></summary>

### `$end-direction`
- Site end direction [&lt;inset-properties{left,right}&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)

> Default : `right`
```scss
$end-direction: <inset-properties{left,right}>;
```
##### Example
###### Scss:

```scss
body {
    text-align: $end-direction;
}
```
###### Output:

```css
body {
    text-align: right;
}
```
<hr />

</details>


<details>

<summary><code>$transform-direction</code></summary>

### `$transform-direction`
- [&lt;number{1,-1}&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/number)

> Default : `1`
```scss
$transform-direction: <number{1,-1}>;
```
##### Example
###### Scss:

```scss
.card {
    transform: translateX( $transform-direction * 200px );
}
```
###### Output:

```css
.card {
    transform: translateX( 200px );
    // transform: translateX( -200px ) // In RTL direction;
}
```
<hr />

</details>


<details>

<summary><code>$is_rtl</code></summary>

### `$is_rtl`
- Is the site on RTL mode

> Default : `false`
```scss
$is_rtl: <boolean>;
```
##### Example
###### Scss:

```scss
$font_family: Montserrat;
@if( $is_rtl ) {
    $font_family: Rubik;
}

body {
    font-family: $font_family;
}
```
###### Output:

```css
body {
    font-family: Montserrat;
}
```
<hr />

</details>


### Mixins:
#### margin

<details>

<summary><code>margin-start( $margin )</code></summary>

### `margin-start( $margin )`
- Sets the margin area on the start side of an element.
```scss
@include margin-start( 15px );
```

- `$margin` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include margin-start( 15px );
}
```
###### Output:

```css
.card {
    margin-left: 15px;
}
```
<hr />

</details>


<details>

<summary><code>margin-end( $margin )</code></summary>

### `margin-end( $margin )`
- Sets the margin area on the end side of an element.
```scss
@include margin-end( 15px );
```

- `$margin` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include margin-end( 15px );
}
```
###### Output:

```css
.card {
    margin-right: 15px;
}
```
<hr />

</details>


<details>

<summary><code>margin-h( $margin... )</code></summary>

### `margin-h( $margin... )`
- Sets horizontal margin area on the start-end sides of an element.
```scss
@include margin-h( 15px );
```

- `$margin` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include margin-h( 15px );
    // @include margin-h( 15px, 2px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    margin-left: 15px;
    margin-right: 15px;
}
```
<hr />

</details>


<details>

<summary><code>margin-v( $margin... )</code></summary>

### `margin-v( $margin... )`
- Sets vertical margin area on the top-bottom of an element.
```scss
@include margin-v( 15px );
```

- `$margin` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include margin-v( 15px );
    // @include margin-v( 15px, 2px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    margin-top: 15px;
    margin-bottom: 15px;
}
```
<hr />

</details>

#### border

<details>

<summary><code>border-start( $arguments... )</code></summary>

### `border-start( $arguments... )`
- Sets all the properties of an element's start border.
```scss
@include border-start( 1px solid #000 );
```


##### Example
###### Scss:

```scss
.card {
    @include border-start( 1px solid #000 );
}
```
###### Output:

```css
.card {
    border-left: 1px solid #000;
}
```
<hr />

</details>


<details>

<summary><code>border-end( $arguments... )</code></summary>

### `border-end( $arguments... )`
- Sets all the properties of an element's end border.
```scss
@include border-end( 1px solid #000 );
```


##### Example
###### Scss:

```scss
.card {
    @include border-end( 1px solid #000 );
}
```
###### Output:

```css
.card {
    border-right: 1px solid #000;
}
```
<hr />

</details>


<details>

<summary><code>border-h( $arguments... )</code></summary>

### `border-h( $arguments... )`
- Sets all the properties of an element's horizontal border.
```scss
@include border-h( 1px solid #000 );
```


##### Example
###### Scss:

```scss
.card {
    @include border-h( 1px solid #000 );
    // @include border-h( 1px solid #000, 2px solid red ); // With two arguments  
}
```
###### Output:

```css
.card {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
}
```
<hr />

</details>


<details>

<summary><code>border-v( $arguments... )</code></summary>

### `border-v( $arguments... )`
- Sets all the properties of an element's vertical border.
```scss
@include border-v( 1px solid #000 );
```


##### Example
###### Scss:

```scss
.card {
    @include border-v( 1px solid #000 );
    // @include border-v( 1px solid #000, 2px solid red ); // With two arguments  
}
```
###### Output:

```css
.card {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}
```
<hr />

</details>


<details>

<summary><code>border-start-width( $width )</code></summary>

### `border-start-width( $width )`
- Sets the width of the start border of an element.
```scss
@include border-start-width( 2px );
```

- `$width` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-start-width( 2px );
}
```
###### Output:

```css
.card {
    border-left-width: 2px;
}
```
<hr />

</details>


<details>

<summary><code>border-end-width( $width )</code></summary>

### `border-end-width( $width )`
- Sets the width of the end border of an element.
```scss
@include border-end-width( 2px );
```

- `$width` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-end-width( 2px );
}
```
###### Output:

```css
.card {
    border-right-width: 2px;
}
```
<hr />

</details>


<details>

<summary><code>border-h-width( $width... )</code></summary>

### `border-h-width( $width... )`
- Sets the width of the horizontal border of an element.
```scss
@include border-h-width( 2px );
```

- `$width` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-h-width( 2px );
    // @include border-h-width( 2px, 5px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-left-width: 2px;
    border-right-width: 2px;
}
```
<hr />

</details>


<details>

<summary><code>border-v-width( $width... )</code></summary>

### `border-v-width( $width... )`
- Sets the width of the vertical border of an element.
```scss
@include border-v-width( 2px );
```

- `$width` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-v-width( 2px );
    // @include border-v-width( 2px, 5px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-top-width: 2px;
    border-bottom-width: 2px;
}
```
<hr />

</details>


<details>

<summary><code>border-start-style( $style )</code></summary>

### `border-start-style( $style )`
- Sets the style of the start border of an element.
```scss
@include border-start-style( solid );
```

- `$style` [&lt;line-style&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

##### Example
###### Scss:

```scss
.card {
    @include border-start-style( solid );
}
```
###### Output:

```css
.card {
    border-left-style: solid;
}
```
<hr />

</details>


<details>

<summary><code>border-end-style( $style )</code></summary>

### `border-end-style( $style )`
- Sets the style of the end border of an element.
```scss
@include border-end-style( solid );
```

- `$style` [&lt;line-style&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

##### Example
###### Scss:

```scss
.card {
    @include border-end-style( solid );
}
```
###### Output:

```css
.card {
    border-right-style: solid;
}
```
<hr />

</details>


<details>

<summary><code>border-h-style( $style... )</code></summary>

### `border-h-style( $style... )`
- Sets the style of the horizontal border of an element.
```scss
@include border-h-style( solid );
```

- `$style` [&lt;line-style&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

##### Example
###### Scss:

```scss
.card {
    @include border-h-style( solid );
    // @include border-h-style( solid, dotted ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-left-style: solid;
    border-right-style: solid;
}
```
<hr />

</details>


<details>

<summary><code>border-v-style( $style... )</code></summary>

### `border-v-style( $style... )`
- Sets the style of the vertical border of an element.
```scss
@include border-v-style( solid );
```

- `$style` [&lt;line-style&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

##### Example
###### Scss:

```scss
.card {
    @include border-v-style( solid );
    // @include border-v-style( solid, dotted ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-top-style: solid;
    border-bottom-style: solid;
}
```
<hr />

</details>


<details>

<summary><code>border-start-color( $color )</code></summary>

### `border-start-color( $color )`
- Sets the color of the start border of an element.
```scss
@include border-start-color( #000 );
```

- `$color` [&lt;color&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

##### Example
###### Scss:

```scss
.card {
    @include border-start-color( #000 );
}
```
###### Output:

```css
.card {
    border-left-color: #000;
}
```
<hr />

</details>


<details>

<summary><code>border-end-color( $color )</code></summary>

### `border-end-color( $color )`
- Sets the color of the end border of an element.
```scss
@include border-end-color( #000 );
```

- `$color` [&lt;color&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

##### Example
###### Scss:

```scss
.card {
    @include border-end-color( #000 );
}
```
###### Output:

```css
.card {
    border-right-color: #000;
}
```
<hr />

</details>


<details>

<summary><code>border-h-color( $color... )</code></summary>

### `border-h-color( $color... )`
- Sets the color of the horizontal border of an element.
```scss
@include border-h-color( #000 );
```

- `$color` [&lt;color&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

##### Example
###### Scss:

```scss
.card {
    @include border-h-color( #000 );
    // @include border-h-color( #000, #fff ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-left-color: #000;
    border-right-color: #000;
}
```
<hr />

</details>


<details>

<summary><code>border-v-color( $color... )</code></summary>

### `border-v-color( $color... )`
- Sets the color of the vertical border of an element.
```scss
@include border-v-color( #000 );
```

- `$color` [&lt;color&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

##### Example
###### Scss:

```scss
.card {
    @include border-v-color( #000 );
    // @include border-v-color( #000, #fff ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-top-color: #000;
    border-bottom-color: #000;
}
```
<hr />

</details>


<details>

<summary><code>border-start-radius( $radius... )</code></summary>

### `border-start-radius( $radius... )`
- Rounds the top-bottom start corners of an element by specifying the radius.
```scss
@include border-start-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-start-radius( 6px );
}
```
###### Output:

```css
.card {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-end-radius( $radius... )</code></summary>

### `border-end-radius( $radius... )`
- Rounds the top-bottom end corners of an element by specifying the radius.
```scss
@include border-end-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-end-radius( 6px );
}
```
###### Output:

```css
.card {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-top-start-radius( $radius )</code></summary>

### `border-top-start-radius( $radius )`
- Rounds the top-start corner of an element by specifying the radius.
```scss
@include border-top-start-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-top-start-radius( 6px );
}
```
###### Output:

```css
.card {
    border-top-left-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-top-end-radius( $radius )</code></summary>

### `border-top-end-radius( $radius )`
- Rounds the top-end corner of an element by specifying the radius.
```scss
@include border-top-end-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-top-end-radius( 6px );
}
```
###### Output:

```css
.card {
    border-top-right-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-top-radius( $radius... )</code></summary>

### `border-top-radius( $radius... )`
- Rounds the top corners of an element by specifying the radius.
```scss
@include border-top-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-top-radius( 6px );
    // @include border-top-radius( 6px, 10px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-bottom-start-radius( $radius )</code></summary>

### `border-bottom-start-radius( $radius )`
- Rounds the bottom-start corner of an element by specifying the radius.
```scss
@include border-bottom-start-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-bottom-start-radius( 6px );
}
```
###### Output:

```css
.card {
    border-bottom-left-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-bottom-end-radius( $radius )</code></summary>

### `border-bottom-end-radius( $radius )`
- Rounds the bottom-end corner of an element by specifying the radius.
```scss
@include border-bottom-end-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-bottom-end-radius( 6px );
}
```
###### Output:

```css
.card {
    border-bottom-right-radius: 6px;
}
```
<hr />

</details>


<details>

<summary><code>border-bottom-radius( $radius... )</code></summary>

### `border-bottom-radius( $radius... )`
- Rounds the bottom corners of an element by specifying the radius.
```scss
@include border-bottom-radius( 6px );
```

- `$radius` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include border-bottom-radius( 6px );
    // @include border-bottom-radius( 6px, 10px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}
```
<hr />

</details>

#### padding

<details>

<summary><code>padding-start( $padding )</code></summary>

### `padding-start( $padding )`
- Sets the padding area on the start side of an element.
```scss
@include padding-start( 15px );
```

- `$padding` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include padding-start( 15px );
}
```
###### Output:

```css
.card {
    padding-left: 15px;
}
```
<hr />

</details>


<details>

<summary><code>padding-end( $padding )</code></summary>

### `padding-end( $padding )`
- Sets the padding area on the end side of an element.
```scss
@include padding-end( 15px );
```

- `$padding` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include padding-end( 15px );
}
```
###### Output:

```css
.card {
    padding-right: 15px;
}
```
<hr />

</details>


<details>

<summary><code>padding-h( $padding... )</code></summary>

### `padding-h( $padding... )`
- Sets horizontal padding area on the start-end sides of an element.
```scss
@include padding-h( 15px );
```

- `$padding` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include padding-h( 15px );
    // @include padding-h( 15px, 2px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    padding-left: 15px;
    padding-right: 15px;
}
```
<hr />

</details>


<details>

<summary><code>padding-v( $padding... )</code></summary>

### `padding-v( $padding... )`
- Sets vertical padding area on the top-bottom of an element.
```scss
@include padding-v( 15px );
```

- `$padding` [&lt;Unit&gt;](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

##### Example
###### Scss:

```scss
.card {
    @include padding-v( 15px );
    // @include padding-v( 15px, 2px ); // Or with two arguments
}
```
###### Output:

```css
.card {
    padding-top: 15px;
    padding-bottom: 15px;
}
```
<hr />

</details>

#### position

<details>

<summary><code>absolute( $top:null, $start:null, $bottom:null, $end:null )</code></summary>

### `absolute( $top:null, $start:null, $bottom:null, $end:null )`
- Adding position absolute property.
```scss
@include absolute( 0, 0 );
```

- `$top` [&lt;top&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- `$start` [&lt;start-direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/left) Site start direction, left or right
- `$bottom` [&lt;bottom&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- `$end` [&lt;end-direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/right) Site end direction, right or left

##### Example
###### Scss:

```scss
.card {
    @include absolute( 0, 0 );
}
```
###### Output:

```css
.card {
    position: absolute;
    top: 0;
    left: 0;
}
```
<hr />

</details>


<details>

<summary><code>relative( $top:null, $start:null, $bottom:null, $end:null )</code></summary>

### `relative( $top:null, $start:null, $bottom:null, $end:null )`
- Adding position relative property.
```scss
@include relative( 0, 0 );
```

- `$top` [&lt;top&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- `$start` [&lt;start-direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/left) Site start direction, left or right
- `$bottom` [&lt;bottom&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- `$end` [&lt;end-direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/right) Site end direction, right or left

##### Example
###### Scss:

```scss
.card {
    @include relative( 0, 0 );
}
```
###### Output:

```css
.card {
    position: relative;
    top: 0;
    left: 0;
}
```
<hr />

</details>


<details>

<summary><code>fixed( $top:null, $start:null, $bottom:null, $end:null )</code></summary>

### `fixed( $top:null, $start:null, $bottom:null, $end:null )`
- Adding position fixed property.
```scss
@include fixed( 0, 0 );
```

- `$top` [&lt;top&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- `$start` [&lt;start-direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/left) Site start direction, left or right
- `$bottom` [&lt;bottom&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- `$end` [&lt;end-direction&gt;](https://developer.mozilla.org/en-US/docs/Web/CSS/right) Site end direction, right or left

##### Example
###### Scss:

```scss
.card {
    @include fixed( 0, 0 );
}
```
###### Output:

```css
.card {
    position: fixed;
    top: 0;
    left: 0;
}
```
<hr />

</details>


## More Sass toolkits

- [Toolkit](https://www.npmjs.com/package/sass-toolkit)
- [Sass Toolset](https://www.npmjs.com/package/sass-toolset)
- [Sass Tools](https://www.npmjs.com/package/sass-tools)
- [GEL Sass Tools](https://www.npmjs.com/package/gel-sass-tools)


## Credits

- [Elad Shechter](https://elad.medium.com/the-best-way-to-rtl-your-website-with-sass-105e34a4298a)


## License

- [MIT](./LICENSE)