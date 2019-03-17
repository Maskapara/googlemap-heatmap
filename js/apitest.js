var map;
var heatmap;

// 初期操作
function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        // 地図の中心
        center: {
            // 日本地図全体が写る
            lat: 38.7019399, // 緯度
            lng: 135.51002519999997 // 経度
        },
        // ズーム(1〜20)
        zoom: 5
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
      });
}

// ヒートマップ切り替え
function toggleHeatMap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function getPoints() {
    return [
    //各店舗数分の緯度・経度情報
        //以下、溝の口・ミカド・ヒルズ
        {location:new google.maps.LatLng(35.6002204,139.6124232),weight:1},
        {location:new google.maps.LatLng(35.7127241,139.7033569),weight:3},
        {location:new google.maps.LatLng(34.6662491,135.5018493),weight:2}
    ];
  }