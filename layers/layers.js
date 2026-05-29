var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_TempatWisata_2 = new ol.format.GeoJSON();
var features_TempatWisata_2 = format_TempatWisata_2.readFeatures(json_TempatWisata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatWisata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatWisata_2.addFeatures(features_TempatWisata_2);
var lyr_TempatWisata_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatWisata_2, 
                style: style_TempatWisata_2,
                popuplayertitle: 'Tempat Wisata',
                interactive: true,
    title: 'Tempat Wisata<br />\
    <img src="styles/legend/TempatWisata_2_0.png" /> Alun-Alun Surabaya<br />\
    <img src="styles/legend/TempatWisata_2_1.png" /> Balai Kota Surabaya<br />\
    <img src="styles/legend/TempatWisata_2_2.png" /> Balai Pemuda<br />\
    <img src="styles/legend/TempatWisata_2_3.png" /> Gedung Grahadi<br />\
    <img src="styles/legend/TempatWisata_2_4.png" /> Gedung Siola<br />\
    <img src="styles/legend/TempatWisata_2_5.png" /> Grand City<br />\
    <img src="styles/legend/TempatWisata_2_6.png" /> Hotel Majapahit<br />\
    <img src="styles/legend/TempatWisata_2_7.png" /> Jalan Tunjungan<br />\
    <img src="styles/legend/TempatWisata_2_8.png" /> Kampung Heritage Lawang Seketeng<br />\
    <img src="styles/legend/TempatWisata_2_9.png" /> Langgar Dukur Soekarno<br />\
    <img src="styles/legend/TempatWisata_2_10.png" /> Makam Peneleh Belanda<br />\
    <img src="styles/legend/TempatWisata_2_11.png" /> Masjid Muhammad Cheng Hoo<br />\
    <img src="styles/legend/TempatWisata_2_12.png" /> Monumen Bambu Runcing<br />\
    <img src="styles/legend/TempatWisata_2_13.png" /> Monumen Kapal Selam<br />\
    <img src="styles/legend/TempatWisata_2_14.png" /> Monumen Panglima Besar Jendral Sudirman<br />\
    <img src="styles/legend/TempatWisata_2_15.png" /> Museum HOS Tjokroaminoto<br />\
    <img src="styles/legend/TempatWisata_2_16.png" /> Pasar Loak Gembong<br />\
    <img src="styles/legend/TempatWisata_2_17.png" /> Pasar Pecindilan<br />\
    <img src="styles/legend/TempatWisata_2_18.png" /> Pasar Tunjungan<br />\
    <img src="styles/legend/TempatWisata_2_19.png" /> Plaza Surabaya<br />\
    <img src="styles/legend/TempatWisata_2_20.png" /> Sumur Tua Majapahit<br />\
    <img src="styles/legend/TempatWisata_2_21.png" /> Taman Apsari<br />\
    <img src="styles/legend/TempatWisata_2_22.png" /> Taman Ekspresi & Perpustakaan<br />\
    <img src="styles/legend/TempatWisata_2_23.png" /> Taman Makam Pahlawan Kusuma Bangsa<br />\
    <img src="styles/legend/TempatWisata_2_24.png" /> Taman Prestasi<br />\
    <img src="styles/legend/TempatWisata_2_25.png" /> Tempat Kelahiran Soekarno<br />' });

lyr_Positron_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_TempatWisata_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_TempatWisata_2];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TempatWisata_2.set('fieldAliases', {'id': 'id', 'Name': 'Nama', 'Foto': 'Foto', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TempatWisata_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TempatWisata_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_TempatWisata_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});