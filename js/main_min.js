function rb1Selected(){rb1.checked=!0,console.log("Radio Button 1 has been selected,  rb1 button status = "+rb1.checked),rb2.checked=!1,console.log("Radio Button 2 has been deselected, rb2 button status = "+rb2.checked)}function rb2Selected(){rb1.checked=!1,console.log("Radio Button 1 has been deselected, rb1 button status = "+rb1.checked),rb2.checked=!0,console.log("Radio Button 2 has been selected, rb2 button status = "+rb2.checked)}function dataPull(){var e=cartodb.createLayer(map,{user_name:username,type:"cartodb",legends:!0,sublayers:[{sql:"",cartocss:"",interactivity:"count_"},{sql:"",cartocss:""}]},{https:!0},function(e){stationData=e}).addTo(map).done(function(e){cdb.vis.Vis.addInfowindow(map,e.getSubLayer(0),["count_"])});return dataPull.called=!0,e}function extonCoordinates(){$.getJSON("https://"+username+".carto.com:443/api/v2/sql?q=SELECT * FROM regionalrailstations_1 WHERE station LIKE 'Exton'",function(e){$.each(e.rows,function(e,t){globalYX.splice(0,2,t.y,t.x)})})}function thorndaleCoordinates(){$.getJSON("https://"+username+".carto.com:443/api/v2/sql?q=SELECT * FROM regionalrailstations_1 WHERE station LIKE 'Thorndale'",function(e){$.each(e.rows,function(e,t){globalYX.splice(0,2,t.y,t.x)})})}function exton2011(){layerSelected=stationData.getSubLayer(0),layerSelected.setSQL("SELECT * FROM exton_2011_blocks"),layerSelected.setCartoCSS("#layer { polygon-fill: ramp([count_], (#ffffb2, #fecc5c, #fd8d3c, #f03b20, #bd0026), quantiles); line-width: 1; line-color: #FFF; line-opacity: 0.5; }"),pointSelected=stationData.getSubLayer(1),pointSelected.setSQL("SELECT * FROM regionalrailstations_1 WHERE station LIKE '%Exton%'"),pointSelected.setCartoCSS("#layer { marker-width: 10; marker-fill: #000000; marker-fill-opacity: 0.9; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #FFF; marker-line-opacity: 1; }")}function exton2016(){layerSelected=stationData.getSubLayer(0),layerSelected.setSQL("SELECT * FROM exton_2016_blocks"),layerSelected.setCartoCSS("#layer { polygon-fill: ramp([count_], (#c4e6c3, #80c799, #4da284, #2d7974, #1d4f60), quantiles); line-width: 1; line-color: #FFF; line-opacity: 0.5; }"),pointSelected=stationData.getSubLayer(1),pointSelected.setSQL("SELECT * FROM regionalrailstations_1 WHERE station LIKE '%Exton%'"),pointSelected.setCartoCSS("#layer { marker-width: 10; marker-fill: #000000; marker-fill-opacity: 0.9; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #FFF; marker-line-opacity: 1; }")}function thorndale2016(){layerSelected=stationData.getSubLayer(0),layerSelected.setSQL("SELECT * FROM thorndale_2016_blocks"),layerSelected.setCartoCSS("#layer { polygon-fill: ramp([count_], (#f3e79b, #fab27f, #eb7f86, #b95e9a, #5c53a5), quantiles); line-width: 1; line-color: #FFF; line-opacity: 0.5; }"),pointSelected=stationData.getSubLayer(1),pointSelected.setSQL("SELECT * FROM regionalrailstations_1 WHERE station LIKE '%Thorndale%'"),pointSelected.setCartoCSS("#layer { marker-width: 10; marker-fill: #000000; marker-fill-opacity: 0.9; marker-allow-overlap: true; marker-line-width: 1; marker-line-color: #FFF; marker-line-opacity: 1; }")}function getGlobalYX(){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[globalYX[1],globalYX[0]]}};return e}function createBuffer_qu(){var e=getGlobalYX();return bufferDummy_qu=turf.buffer(e,.25,unit),bufferDummy_qu}function addtoMap_qu(){var e=createBuffer_qu();return addtoDummy_qu=new L.geoJson(e,{color:"black",weight:1,opacity:75,fillOpacity:.15}).addTo(map),addtoDummy_qu}function bufferQuarterMile(){getGlobalYX(),createBuffer_qu(),addtoMap_qu(),bufferQuarterMile.called=!0}function createBuffer_ha(){var e=getGlobalYX();return bufferDummy_ha=turf.buffer(e,.5,unit),bufferDummy_ha}function addtoMap_ha(){var e=createBuffer_ha();return addtoDummy_ha=new L.geoJson(e,{color:"black",weight:1,opacity:75,fillOpacity:.15}).addTo(map),addtoDummy_ha}function bufferHalfMile(){getGlobalYX(),createBuffer_ha(),addtoMap_ha(),bufferHalfMile.called=!0}function createBuffer_on(){var e=getGlobalYX();return bufferDummy_on=turf.buffer(e,1,unit),bufferDummy_on}function addtoMap_on(){var e=createBuffer_on();return addtoDummy_on=new L.geoJson(e,{color:"black",weight:1,opacity:75,fillOpacity:.15}).addTo(map),addtoDummy_on}function bufferOneMile(){getGlobalYX(),createBuffer_on(),addtoMap_on(),bufferOneMile.called=!0}function createBuffer_fi(){var e=getGlobalYX();return bufferDummy_fi=turf.buffer(e,5,unit),bufferDummy_fi}function addtoMap_fi(){var e=createBuffer_fi();return addtoDummy_fi=new L.geoJson(e,{color:"black",weight:1,opacity:75,fillOpacity:.15}).addTo(map),addtoDummy_fi}function bufferFiveMile(){getGlobalYX(),createBuffer_fi(),addtoMap_fi(),bufferFiveMile.called=!0}function allBuffers(){bufferQuarterMile(),bufferHalfMile(),bufferOneMile(),bufferFiveMile(),allBuffers.called=!0}function clearQuarterMile(){bufferQuarterMile.called===!0&&map.removeLayer(addtoDummy_qu)}function clearHalfMile(){bufferHalfMile.called===!0&&map.removeLayer(addtoDummy_ha)}function clearOneMile(){bufferOneMile.called===!0&&map.removeLayer(addtoDummy_on)}function clearFiveMile(){bufferFiveMile.called===!0&&map.removeLayer(addtoDummy_fi)}function clearallBuffers(){allBuffers.called===!0&&(map.removeLayer(addtoDummy_qu),map.removeLayer(addtoDummy_ha),map.removeLayer(addtoDummy_on),map.removeLayer(addtoDummy_fi))}function clearBuffers(){clearQuarterMile(),clearHalfMile(),clearOneMile(),clearFiveMile(),clearallBuffers()}function legendExton11(){$("#legendHighest").text("10"),$("#legend1").css("background","#ffffb2"),$("#legend2").css("background","#fecc5c"),$("#legend3").css("background","#fd8d3c"),$("#legend4").css("background","#f03b20"),$("#legend5").css("background","#bd0026")}function legendExton16(){$("#legendHighest").text("8"),$("#legend1").css("background","#c4e6c3"),$("#legend2").css("background","#80c799"),$("#legend3").css("background","#4da284"),$("#legend4").css("background","#2d7974"),$("#legend5").css("background","#1d4f60")}function legendThorndale16(){$("#legendHighest").text("6"),$("#legend1").css("background","#f3e79b"),$("#legend2").css("background","#fab27f"),$("#legend3").css("background","#eb7f86"),$("#legend4").css("background","#b95e9a"),$("#legend5").css("background","#5c53a5")}function MapSelected(){return map.setZoom(11),$("#legend").show(),$("#bufferbtns").show(),"Exton"===$("#station_name").text()&&rb1.checked===!0?(exton2011(),void legendExton11()):"Exton"===$("#station_name").text()&&rb2.checked===!0?(exton2016(),void legendExton16()):"Thorndale"===$("#station_name").text()&&rb1.checked===!0?(thorndale2016(),void legendThorndale16()):void alert("Please select data to map")}function showDropdown(){showDropdown.called=!0,$("#myDropdown").show()}function extonResults(){$("#myDropdown").hide(),$("#station_name").text("Exton"),$("#line_name").text("Paoli/Thorndale Line"),$("#station_location").text("Chester, Pennsylvania"),$("#station_location").text("Chester, Pennsylvania"),$("#year1").text("2011"),$("#year2").show(),$("#rb2").show(),$("#year2").text("2016"),$("#results").show()}function thorndaleResults(){$("#myDropdown").hide(),$("#station_name").text("Thorndale"),$("#line_name").text("Paoli/Thorndale Line"),$("#station_location").text("Chester, Pennsylvania"),$("#station_location").text("Chester, Pennsylvania"),$("#year1").text("2016"),$("#year2").hide(),$("#rb2").hide(),$("#results").show(),$("#passengers").text(" 546 passengers"),$("#passRank").text(" 49"),$("#pedStats").text(" 52% (282 passengers)"),$("#bikeStats").text(" <1% (1 passenger)"),$("#busStats").text(" 0% (0 passengers)"),$("#carStats").text(" 48% (263 passengers)")}console.log("2:04"),$("#results").hide(),$("#legend").hide(),$("#bufferbtns").hide();var map=L.map("map",{center:[39.952372,-75.163584],zoom:12}),Map_Tiles=L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png",{attribution:"Map tiles by Carto",subdomains:"abcd",minZoom:0,maxZoom:20,ext:"png"}).addTo(map),username="caseyxbones",globalData,unit="miles",globalYX=[],modal=document.getElementById("myModal"),btn=document.getElementById("myBtn"),span=document.getElementsByClassName("close")[0];btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")},dataPull(),$("#Home").click(function(){stationData.hide(),map.panTo(new L.LatLng(39.952372,-75.163584),{animate:!0,duration:1}),$("#myDropdown").hide(),$("#results").hide(),$("#legend").hide(),$("#bufferbtns").hide(),clearBuffers()}),$("#Exton").click(function(){map.panTo(new L.LatLng(40.01943118,-75.62175724),{animate:!0,duration:1}),extonResults(),extonCoordinates(),clearBuffers()}),$("#Thorndale").click(function(){map.panTo(new L.LatLng(39.99277222,-75.76289642),{animate:!0,duration:1}),thorndaleResults(),thorndaleCoordinates(),clearBuffers()}),$("#mapSelected").click(function(){stationData.hide(),MapSelected(),stationData.show()}),$("#clearMap").click(function(){stationData.hide(),$("#legend").hide(),$("#bufferbtns").hide(),clearBuffers()});
