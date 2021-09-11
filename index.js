function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.Countries)
            rsp.Countries.forEach(element => {
                NewConfirmed = element.NewConfirmed;
                TotalConfirmed = element.TotalConfirmed;

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: true
                })
                    .setLngLat([NewConfirmed, TotalConfirmed])
                    .addTo(map);

            });
        })
}

updateMap();