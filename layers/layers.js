ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([101.127592, 4.559760, 101.130930, 4.561462]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BANGUNAN_1 = new ol.format.GeoJSON();
var features_BANGUNAN_1 = format_BANGUNAN_1.readFeatures(json_BANGUNAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANGUNAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_1.addFeatures(features_BANGUNAN_1);
var lyr_BANGUNAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_1, 
                style: style_BANGUNAN_1,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_1.png" /> BANGUNAN'
            });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                popuplayertitle: "JALAN",
                interactive: true,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });
var format_LOTKUBUR_3 = new ol.format.GeoJSON();
var features_LOTKUBUR_3 = format_LOTKUBUR_3.readFeatures(json_LOTKUBUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LOTKUBUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBUR_3.addFeatures(features_LOTKUBUR_3);
var lyr_LOTKUBUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBUR_3, 
                style: style_LOTKUBUR_3,
                popuplayertitle: "LOT KUBUR",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBUR_3.png" /> LOT KUBUR'
            });
var format_point1_4 = new ol.format.GeoJSON();
var features_point1_4 = format_point1_4.readFeatures(json_point1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_point1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point1_4.addFeatures(features_point1_4);
var lyr_point1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point1_4, 
                style: style_point1_4,
                popuplayertitle: "point (1)",
                interactive: true,
                title: '<img src="styles/legend/point1_4.png" /> point (1)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BANGUNAN_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_LOTKUBUR_3.setVisible(true);lyr_point1_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BANGUNAN_1,lyr_JALAN_2,lyr_LOTKUBUR_3,lyr_point1_4];
lyr_BANGUNAN_1.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_JALAN_2.set('fieldAliases', {'ID': 'ID', });
lyr_LOTKUBUR_3.set('fieldAliases', {'id': 'id', 'B.KUBUR': 'B.KUBUR', 'layer': 'layer', 'path': 'path', 'NAMA ARWAH': 'NAMA ARWAH', 'TARIKH KEM': 'TARIKH KEM', 'JANTINA': 'JANTINA', });
lyr_point1_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_BANGUNAN_1.set('fieldImages', {'ID': '', 'NAME': '', });
lyr_JALAN_2.set('fieldImages', {'ID': '', });
lyr_LOTKUBUR_3.set('fieldImages', {'id': 'TextEdit', 'B.KUBUR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'NAMA ARWAH': 'TextEdit', 'TARIKH KEM': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_point1_4.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_BANGUNAN_1.set('fieldLabels', {'ID': 'inline label - always visible', 'NAME': 'inline label - always visible', });
lyr_JALAN_2.set('fieldLabels', {'ID': 'inline label - always visible', });
lyr_LOTKUBUR_3.set('fieldLabels', {'id': 'inline label - always visible', 'B.KUBUR': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', 'NAMA ARWAH': 'inline label - always visible', 'TARIKH KEM': 'inline label - always visible', 'JANTINA': 'inline label - always visible', });
lyr_point1_4.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'inline label - always visible', 'SubClasses': 'inline label - always visible', 'Linetype': 'inline label - always visible', 'EntityHand': 'inline label - always visible', 'Text': 'inline label - always visible', });
lyr_point1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});