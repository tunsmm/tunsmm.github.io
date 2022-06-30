ymaps.ready(initialize);
function initialize() {
    let myMap = new ymaps.Map("ymaps", {
    center: [56.75, 37.16],
    zoom: 5,
    }),
    myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [56.753450272088116,37.16410160155168]
    },
    }, {
        draggable: false
    })
    myMap.geoObjects.add(myGeoObject)
};
