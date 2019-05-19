var

// *
// * hud.js 0.1.1 (Uncompressed)
// * A lightweight and easy to use Javascript library for composing a Heads Up Display (HUD).
// *
// * (c) 2019 Paul Engel
// * hud.js is licensed under MIT license
// *
// * $Date: 2019-05-19 15:06:26 +0100 (Sun, 19 May 2019) $
// *

HUD = function(options) {
  'use strict';

  options || (options = {});

  var
    hud = document.createElement('div'),
    wrapper = document.createElement('div'),
    containers = 'nw n ne w c e sw s se'.split(' '),
    padding;

  this.el = hud;

  this.stickTo = function(el) {
    if (typeof(el) == 'string') {
      el = document.querySelector(el);
    }

    var style = window.getComputedStyle(el);
    if (style.position == 'static') {
      el.style.top = style['margin-top'];
      el.style.left = style['margin-left'];
      el.style.marginTop = 0;
      el.style.marginLeft = 0;
      el.style.position = 'relative';
    }

    el.appendChild(hud);
  };

  this.empty = function() {
    containers.forEach(function(container) {
      this[container].empty();
    }.bind(this));
  }.bind(this);

  hud.setAttribute('class', 'hud');
  hud.appendChild(wrapper);

  padding = Math.max(options.padding || 12, 0);
  wrapper.style.top = padding + 'px';
  wrapper.style.left = padding + 'px';
  wrapper.style.width = 'calc(100% - ' + (padding * 2) + 'px)';
  wrapper.style.height = 'calc(100% - ' + (padding * 2) + 'px)';

  containers.forEach(function(container) {
    var
      el = document.createElement('div');

    el.setAttribute('class', 'hud_ hud_' + container);
    wrapper.appendChild(el);

    this[container] = {
      add: function(child) {
        if (typeof(child) == 'string') {
          var html = child;
          child = document.createElement('span');
          child.innerHTML = html;
        }
        el.appendChild(child);
      },
      empty: function() {
        el.innerHTML = '';
      }
    };
  }.bind(this));

  if (options.el) {
    this.stickTo(options.el);
  }
};

(function() {
  var
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  if (!head) {
    head = document.createElement('head');
    document.body.parentNode.insertBefore(head, document.body);
  }

  style.innerHTML = "\
.hud {\
 top: 0 !important;\
 left: 0 !important;\
 width: 100% !important;\
 height: 100% !important;\
 transform-style: preserve-3d !important;\
 pointer-events: none !important;\
}\
.hud, .hud > div, .hud .hud_ { position: absolute !important; }\
.hud .hud_ > * { pointer-events: auto !important; }\
.hud_nw, .hud_n, .hud_ne { top: 0 !important; }\
.hud_nw, .hud_w, .hud_sw { left: 0 !important; }\
.hud_sw, .hud_s, .hud_se { bottom: 0 !important; }\
.hud_ne, .hud_e, .hud_se { right: 0 !important; }\
.hud_w, .hud_c, .hud_e { top: 50% !important; transform: translateY(-50%) !important; }\
.hud_n, .hud_c, .hud_s { left: 50% !important; transform: translateX(-50%) !important; }\
.hud_c { transform: translateX(-50%) translateY(-50%) !important; }";

  head.appendChild(style);
}());
