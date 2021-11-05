import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

function Map() {
    mapboxgl.accessToken =
        'pk.eyJ1IjoiaGFycnktamFrZXMiLCJhIjoiY2t2bHl4d2FiMDEybDJ2cWhsZWd6bXNheCJ9.K0uC6MU377yT2TViGKDEpg'

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/harry-jakes/ckvm04hcsbe4418rs2yeceihp',
            center: [73.68333, 24.58333],
            zoom: 8,
        })
    })

    return <div id="map" className="flex-1"></div>
}

export default Map
