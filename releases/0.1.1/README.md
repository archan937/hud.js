# hud.js

A lightweight and easy to use Javascript library for composing a Heads Up Display (HUD).

## Installation

Just include hud.js:

```html
<script src="path/to/hud.js" type="text/javascript"></script>
```

**Note**: include `hud.min.js` for the minified hud.js library

## Introduction

Reason for creating `hud.js` (a heads up display) is to focus on the following:

* it basically is an overlay on top of an HTML element (e.g. a game canvas)
* positioning HUD elements should be as easy as possible (not by pixels but by "directions")

My aim is always to write libraries which are as unobtrusive as possible.

## Usage

### Creating an instance

To create a HUD instance, use the `new HUD()` constructor which returns a HUD instance.
You can pass an options object which the following possible keys:

* `padding` - the amount of pixels which the HUD will apply to pad its components (default: 12 pixels)
* `el` - the HTML element over which the HUD will be positioned (can either be a CSS selector or HTML element)

```javascript
  var hud = new HUD({
    padding: 15,
    el: '#game'
  });
```

You can also "stick" the HUD instance on an HTML element after initialization using the `stickTo` function:

```javascript
  // using a CSS selector
  var hud = new HUD();
  hud.stickTo('#game');

  // using an HTML element
  var hud = new HUD();
  hud.stickTo(document.getElementById('game'));
```

You can access the corresponding HUD HTML element using the `el` property: `hud.el`.

### Adding HUD components

To add components to the HUD, use the `instance.<direction>.add()` function:

```javascript
  var hud = new HUD({el: '#game'});

  hud.nw.add('North West'); // pass a string which will result in a <span>
  hud.n.add($('<div>North</div>')[0]); // pass an HTML element
  hud.ne.add('North East');
  hud.w.add('West');
  hud.c.add('Center');
  hud.e.add('East');
  hud.sw.add('South West');
  hud.s.add('South');
  hud.se.add('South East');
```

### Clearing HUD components

You can remove component by using either of the following:

* `instance.<direction>.empty()` which removes all the components within a certain "direction container"
* `instance.empty()` which removes all the components within the entire HUD

See [https://archan937.github.io/hud.js/demo/index.html](https://archan937.github.io/hud.js/demo/index.html) for a live demo.

## Contact me

For support, remarks and requests, please mail me at [pm_engel@icloud.com](mailto:pm_engel@icloud.com).

## License

Copyright (c) 2019 Paul Engel, released under the MIT license

[http://github.com/archan937](http://github.com/archan937) - [http://twitter.com/archan937](http://twitter.com/archan937) - [pm_engel@icloud.com](mailto:pm_engel@icloud.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
