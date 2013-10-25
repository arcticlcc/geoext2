Ext.data.JsonP.GeoExt_slider_Tip({"tagname":"class","name":"GeoExt.slider.Tip","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Tip.js","href":"Tip.html#GeoExt-slider-Tip"}],"aliases":{},"alternateClassNames":["GeoExt.SliderTip"],"extends":"Ext.slider.Tip","mixins":[],"requires":[],"uses":[],"members":[{"name":"hover","tagname":"cfg","owner":"GeoExt.slider.Tip","id":"cfg-hover","meta":{}},{"name":"minWidth","tagname":"cfg","owner":"GeoExt.slider.Tip","id":"cfg-minWidth","meta":{}},{"name":"offsets","tagname":"cfg","owner":"GeoExt.slider.Tip","id":"cfg-offsets","meta":{}},{"name":"dragging","tagname":"property","owner":"GeoExt.slider.Tip","id":"property-dragging","meta":{}},{"name":"init","tagname":"method","owner":"GeoExt.slider.Tip","id":"method-init","meta":{"private":true}},{"name":"onSlide","tagname":"method","owner":"GeoExt.slider.Tip","id":"method-onSlide","meta":{"private":true}},{"name":"registerThumbListeners","tagname":"method","owner":"GeoExt.slider.Tip","id":"method-registerThumbListeners","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.slider.Tip","short_doc":"Create a slider tip displaying Ext.slider.SingleSlider values over slider\nthumbs. ...","component":false,"superclasses":["Ext.slider.Tip"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.SliderTip</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.slider.Tip<div class='subclass '><strong>GeoExt.slider.Tip</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Tip.html#GeoExt-slider-Tip' target='_blank'>Tip.js</a></div></pre><div class='doc-contents'><p>Create a slider tip displaying <code>Ext.slider.SingleSlider</code> values over slider\nthumbs.</p>\n\n<p>Example:</p>\n\n<pre><code>var slider = Ext.create('<a href=\"#!/api/GeoExt.slider.Zoom\" rel=\"GeoExt.slider.Zoom\" class=\"docClass\">GeoExt.slider.Zoom</a>', {\n    map: panel.map,\n    aggressive: true,\n    width: 200,\n    plugins: Ext.create('<a href=\"#!/api/GeoExt.slider.Tip\" rel=\"GeoExt.slider.Tip\" class=\"docClass\">GeoExt.slider.Tip</a>', {\n        getText: function(thumb) {\n            return Ext.String.format(\n                '&lt;div&gt;Scale: 1:{0}&lt;/div&gt;',\n                thumb.slider.getScale()\n            );\n        }\n    }),\n    renderTo: Ext.getBody()\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-hover' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-cfg-hover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-cfg-hover' class='name expandable'>hover</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Display the tip when hovering over the thumb. ...</div><div class='long'><p>Display the tip when hovering over the thumb.  If <code>false</code>, tip will\nonly be displayed while dragging.  Default is <code>true</code>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-minWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-cfg-minWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-cfg-minWidth' class='name expandable'>minWidth</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Minimum width of the tip. ...</div><div class='long'><p>Minimum width of the tip.  Default is 10.</p>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='cfg-offsets' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-cfg-offsets' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-cfg-offsets' class='name expandable'>offsets</a> : Number[]<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A two item list that provides x, y offsets for the tip.</p>\n</div><div class='long'><p>A two item list that provides x, y offsets for the tip.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dragging' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-property-dragging' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-property-dragging' class='name expandable'>dragging</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>The thumb is currently being dragged. ...</div><div class='long'><p>The thumb is currently being dragged.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-init' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-method-init' class='name expandable'>init</a>( <span class='pre'>slider</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when the plugin is initialized. ...</div><div class='long'><p>Called when the plugin is initialized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : Ext.slider.SingleSlider<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onSlide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-method-onSlide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-method-onSlide' class='name expandable'>onSlide</a>( <span class='pre'>slider, e, thumb</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Listener for dragstart and drag. ...</div><div class='long'><p>Listener for dragstart and drag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : Ext.slider.SingleSlider<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>thumb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-registerThumbListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.Tip'>GeoExt.slider.Tip</span><br/><a href='source/Tip.html#GeoExt-slider-Tip-method-registerThumbListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.Tip-method-registerThumbListeners' class='name expandable'>registerThumbListeners</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Set as a listener for 'render' if hover is true. ...</div><div class='long'><p>Set as a listener for 'render' if hover is true.</p>\n</div></div></div></div></div></div></div>","meta":{}});