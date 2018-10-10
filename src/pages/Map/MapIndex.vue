<template>
    <div style="width:100%;height:100%;position:relative;" class="map">
       <div id="map" style="width:100%;height:100%;"></div>
    </div>
</template>


<script>
import Map from 'ol/map';
import layer from 'ol/layer';
import Tile from 'ol/layer/tile';
import View from 'ol/view';
import XYZ from 'ol/source/xyz';
export default {
  name: "mapIndex",
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 初始化地图
     
     var gaodeMapLayer = new Tile({ 
         source: new XYZ({ 
             url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'    
              })
         });

      var map = new Map({ 
          layers: [gaodeMapLayer],
           view: new View({
               center: [106.51, 29.55], 
               projection: 'EPSG:4326', 
               zoom: 10 
            }), 
            target: 'map'
        });
    }
  }
};
</script>
