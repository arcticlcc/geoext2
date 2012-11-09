/*
 * Copyright (c) 2008-2012 The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See https://github.com/geoext/geoext2/blob/master/license.txt for the full
 * text of the license.
 */

/*
 * @include OpenLayers/Feature/Vector.js
 */

/**
 * Used to read the attributes of a feature.
 */
Ext.define('GeoExt.data.reader.Feature', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.feature',
    /**
     * Returns extracted, type-cast rows of data.
     * @param {Object[]/Object} root from server response
     * @return {Array} An array of records containing the extracted data
     * @private
     */
    extractData : function(root) {
        var me = this,
            records = [],
            Model   = me.model,
            length  = root.length,
            convertedValues, node, record, i;

        if (!root.length && Ext.isObject(root)) {
            root = [root];
            length = 1;
        }

        for (i = 0; i < length; i++) {
            node = root[i];
            if (!node.isModel) {
                // Create a record with an empty data object.
                // Populate that data object by extracting and converting field values from raw data
                record = new Model(undefined, me.getId(node), node);
                //***4.0.7 does not support passing convertedValues
                //We have to do it manually
                record.data = convertedValues = {};

                // If the server did not include an id in the response data, the Model constructor will mark the record as phantom.
                // We  need to set phantom to false here because records created from a server response using a reader by definition are not phantom records.
                record.phantom = false;

                // Use generated function to extract all fields at once
                me.convertRecordData(convertedValues, node, record);

                records.push(record);

                if (me.implicitIncludes) {
                    me.readAssociated(record, node);
                }
            } else {
                // If we're given a model instance in the data, just push it on
                // without doing any conversion
                records.push(node);
            }
        }

        return records;
    },
    /**
     * Force to have our convertRecordData.
     * @private
     */
    buildExtractors: function(force) {
        //this.callParent(arguments);
        var me          = this,
            idProp      = me.getIdProperty(),
            totalProp   = me.totalProperty,
            successProp = me.successProperty,
            messageProp = me.messageProperty,
            accessor,
            idField,
            map;

        if (force === true) {
            delete me.convertRecordData;
        }

        if (me.convertRecordData) {
            return;
        }

        //build the extractors for all the meta data
        if (totalProp) {
            me.getTotal = me.createAccessor(totalProp);
        }

        if (successProp) {
            me.getSuccess = me.createAccessor(successProp);
        }

        if (messageProp) {
            me.getMessage = me.createAccessor(messageProp);
        }

        if (idProp) {
            idField = me.model.prototype.fields.get(idProp);
            if (idField) {
                map = idField.mapping;
                idProp = (map !== undefined && map !== null) ? map : idProp;
            }
            accessor = me.createAccessor(idProp);

            me.getId = function(record) {
                var id = accessor.call(me, record);
                return (id === undefined || id === '') ? null : id;
            };
        } else {
            me.getId = function() {
                return null;
            };
        }
        //me.convertRecordData = me.buildRecordDataExtractor();
        me.buildFieldExtractors();

        if (me.root) {
            me.getRoot = me.createAccessor(me.root);
        } else {
            me.getRoot = function(root) {
                return root;
            };
        }
        me.convertRecordData = me.convertFeatureRecordData;
    },

    /**
     * Copy feature attribute to record.
     * @private
     */
    convertFeatureRecordData: function(convertedValues, feature, record) {
        var records = [];

        if (feature) {
            var fields = record.fields;
            var values = {};
            if (feature.attributes) {
                for (var j = 0, jj = fields.length; j < jj; j++){
                    var field = fields.items[j];
                    var v;
                    if (/[\[\.]/.test(field.mapping)) {
                        try {
                            v = new Function("obj", "return obj." + field.mapping)(feature.attributes);
                        } catch(e){
                            v = field.defaultValue;
                        }
                    }
                    else {
                        v = feature.attributes[field.mapping || field.name] || field.defaultValue;
                    }
                    if (field.convert) {
                        v = field.convert(v, record);
                    }
                    convertedValues[field.name] = v;
                }
            }
            record.state = feature.state;
            if (feature.state == OpenLayers.State.INSERT ||
                    feature.state == OpenLayers.State.UPDATE) {
                record.setDirty();
            }

            // newly inserted features need to be made into phantom records
            var id = (feature.state === OpenLayers.State.INSERT) ? undefined : feature.id;
            convertedValues['id'] = id;
        }

        return records;
    }
});
