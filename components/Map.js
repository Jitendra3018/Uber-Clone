import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

function Map({ pickupCoordinates, dropoffCoordinates }) {
    mapboxgl.accessToken =
        'pk.eyJ1IjoiaGFycnktamFrZXMiLCJhIjoiY2t2bHl4d2FiMDEybDJ2cWhsZWd6bXNheCJ9.K0uC6MU377yT2TViGKDEpg'

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/harry-jakes/ckvm04hcsbe4418rs2yeceihp',
            center: [73.68333, 24.58333],
            zoom: 8,
        })

        // addToMap(map)
        if (pickupCoordinates) {
            addToMap(map, pickupCoordinates)
        }

        if (dropoffCoordinates) {
            addToMap(map, dropoffCoordinates)
        }

        if (pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([pickupCoordinates, dropoffCoordinates], {
                padding: 60,
            })
        }
    }, [pickupCoordinates, dropoffCoordinates])

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    }

    return <div id="map" className="flex-1 h-1/2"></div>
}

export default Map
