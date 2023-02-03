function createInsertXML() {
    var geomType;

    drawSource.addFeatures(draw);

    var a = drawSource.getFeatures();
    var coords = a[0].f.Wc.p.geometry.j;
    if (coords.length == 2) {
        geomType = 'Point';
    } else if (coords.length > 2) {
        if (coords.lastIndexOf(coords[1]) == (coords.length - 1)) {
            geomType = 'Polygon';
        } else {
            geomType = 'LineString';
        }
    }
    
    var featNS = 'YourNS';
    var featName = 'YourGeoServerLayer';
    var featType = geomType;
    var featGeom = coords;
    var XMLCompleteString = '';
    var XMLInsertHeaderString = '<wfs:Transaction service="WFS" version="1.0.0" ' +
        'xmlns:wfs="http://www.opengis.net/wfs" ' +
        'xmlns:' + featNS + '="' + featNS + '" ' +
        'xmlns:gml="http://www.opengis.net/gml" ' +
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
        '<wfs:Insert>';
    var XMLInsertContentHeaderString = '<' + featNS + ':' + featName + '>';

    switch (featType) {
        case 'Point':
            var XMLInsertGeometryHeaderString = '<' + featNS + ':' + 'Geometry' + '>';
            var XMLInsertFeatureTypeHeaderString = '<gml:Point>';
            var XMLInsertCoordinateString = '<gml:coordinates decimal="." cs="," ts=" ">' +
                featGeom[0] + "," + featGeom[1] +
                '</gml:coordinates>';
            var XMLInsertFeatureTypeCloseString = '</gml:Point>';
            var XMLInsertGeometryCloseString = '</' + featNS + ':' + 'Geometry' + '>';
            break;
        case 'PolyLine':
            //TODO Implement PolyLines
            break;
        case 'Polygon':
            //TODO Implement Polygons
            break;
    }

    var XMLInsertJobNumberString = '<' + featNS + ':' + 'JobNumber' + '>' + $('#jobNumber').val() + '</' + featNS + ':' + 'JobNumber' + '>';
    var XMLInsertContentCloseString = '</' + featNS + ':' + featName + '>';
    var XMLInsertCloseString = '</wfs:Insert>' +
        '</wfs:Transaction>';
    XMLCompleteString = XMLCompleteString.concat(
        XMLInsertHeaderString,
        XMLInsertContentHeaderString,
        XMLInsertGeometryHeaderString,
        XMLInsertFeatureTypeHeaderString,
        XMLInsertCoordinateString,
        XMLInsertFeatureTypeCloseString,
        XMLInsertGeometryCloseString,
        XMLInsertJobNumberString,
        XMLInsertContentCloseString,
        XMLInsertCloseString
    );
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", 'http://' + GeoServerHost + GeoServerPort + GeoServerWFSPost, true);
    xmlhttp.send(XMLCompleteString);
}