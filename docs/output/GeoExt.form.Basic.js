Ext.data.JsonP.GeoExt_form_Basic({"tagname":"class","name":"GeoExt.form.Basic","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Basic.js","href":"Basic.html#GeoExt-form-Basic"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.form.Basic","mixins":[],"requires":["GeoExt.form.action.Search"],"uses":[],"members":[{"name":"autoAbort","tagname":"cfg","owner":"GeoExt.form.Basic","id":"cfg-autoAbort","meta":{}},{"name":"protocol","tagname":"cfg","owner":"GeoExt.form.Basic","id":"cfg-protocol","meta":{}},{"name":"prevResponse","tagname":"property","owner":"GeoExt.form.Basic","id":"property-prevResponse","meta":{"private":true}},{"name":"protocol","tagname":"property","owner":"GeoExt.form.Basic","id":"property-protocol","meta":{}},{"name":"doAction","tagname":"method","owner":"GeoExt.form.Basic","id":"method-doAction","meta":{}},{"name":"search","tagname":"method","owner":"GeoExt.form.Basic","id":"method-search","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.form.Basic","short_doc":"A specific Ext.form.Basic whose doAction method creates\na GeoExt.form.action.Search if it is passed the string\n\"searc...","component":false,"superclasses":["Ext.form.Basic"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.Basic<div class='subclass '><strong>GeoExt.form.Basic</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.form.action.Search' rel='GeoExt.form.action.Search' class='docClass'>GeoExt.form.action.Search</a></div><h4>Files</h4><div class='dependency'><a href='source/Basic.html#GeoExt-form-Basic' target='_blank'>Basic.js</a></div></pre><div class='doc-contents'><p>A specific <code>Ext.form.Basic</code> whose <code><a href=\"#!/api/GeoExt.form.Basic-method-doAction\" rel=\"GeoExt.form.Basic-method-doAction\" class=\"docClass\">doAction</a></code> method creates\na <a href=\"#!/api/GeoExt.form.action.Search\" rel=\"GeoExt.form.action.Search\" class=\"docClass\">GeoExt.form.action.Search</a> if it is passed the string\n\"search\" as its first argument.</p>\n\n<p>In most cases one would not use this class directly, but\n<code><a href=\"#!/api/GeoExt.form.Panel\" rel=\"GeoExt.form.Panel\" class=\"docClass\">GeoExt.form.Panel</a></code> instead.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoAbort' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.form.Basic'>GeoExt.form.Basic</span><br/><a href='source/Basic.html#GeoExt-form-Basic-cfg-autoAbort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.form.Basic-cfg-autoAbort' class='name expandable'>autoAbort</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Tells if pending requests should be aborted when a new action\nis performed. ...</div><div class='long'><p>Tells if pending requests should be aborted when a new action\nis performed. Default is <code>true</code>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-protocol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.form.Basic'>GeoExt.form.Basic</span><br/><a href='source/Basic.html#GeoExt-form-Basic-cfg-protocol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.form.Basic-cfg-protocol' class='name expandable'>protocol</a> : OpenLayers.Protocol<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The protocol to use for search requests.</p>\n</div><div class='long'><p>The protocol to use for search requests.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-prevResponse' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.form.Basic'>GeoExt.form.Basic</span><br/><a href='source/Basic.html#GeoExt-form-Basic-property-prevResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.form.Basic-property-prevResponse' class='name expandable'>prevResponse</a> : OpenLayers.Protocol.Response<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>The response return by a call to  protocol.read method.</p>\n</div><div class='long'><p>The response return by a call to  protocol.read method.</p>\n</div></div></div><div id='property-protocol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.form.Basic'>GeoExt.form.Basic</span><br/><a href='source/Basic.html#GeoExt-form-Basic-property-protocol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.form.Basic-property-protocol' class='name expandable'>protocol</a> : OpenLayers.Protocol<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The protocol.</p>\n</div><div class='long'><p>The protocol.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-doAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.form.Basic'>GeoExt.form.Basic</span><br/><a href='source/Basic.html#GeoExt-form-Basic-method-doAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.form.Basic-method-doAction' class='name expandable'>doAction</a>( <span class='pre'>action, options</span> ) : <a href=\"#!/api/GeoExt.form.Basic\" rel=\"GeoExt.form.Basic\" class=\"docClass\">GeoExt.form.Basic</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Performs the action, if the string \"search\" is passed as the\nfirst argument then a GeoExt.form.action.Search is created. ...</div><div class='long'><p>Performs the action, if the string \"search\" is passed as the\nfirst argument then a <a href=\"#!/api/GeoExt.form.action.Search\" rel=\"GeoExt.form.action.Search\" class=\"docClass\">GeoExt.form.action.Search</a> is created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : String/Ext.form.action.Action<div class='sub-desc'><p>Either the name\n    of the action or a <code>Ext.form.action.Action</code> instance.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>The options passed to the Action constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.form.Basic\" rel=\"GeoExt.form.Basic\" class=\"docClass\">GeoExt.form.Basic</a></span><div class='sub-desc'><p>This form.</p>\n</div></li></ul></div></div></div><div id='method-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.form.Basic'>GeoExt.form.Basic</span><br/><a href='source/Basic.html#GeoExt-form-Basic-method-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.form.Basic-method-search' class='name expandable'>search</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/GeoExt.form.Basic\" rel=\"GeoExt.form.Basic\" class=\"docClass\">GeoExt.form.Basic</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Shortcut to do a search action. ...</div><div class='long'><p>Shortcut to do a search action.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>The options passed to the Action constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.form.Basic\" rel=\"GeoExt.form.Basic\" class=\"docClass\">GeoExt.form.Basic</a></span><div class='sub-desc'><p>This form.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});