import { useEffect, useState } from 'react'
import { carList } from '../data/carList'

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
    const [rideDuration, setRideDuration] = useState(0)

    // console.log(pickCoordinates, dropCoordinates)

    const accessToken =
        'pk.eyJ1IjoiaGFycnktamFrZXMiLCJhIjoiY2t2bHl4d2FiMDEybDJ2cWhsZWd6bXNheCJ9.K0uC6MU377yT2TViGKDEpg'

    // Get ride duration from Mapbox API
    // for that it needs the pickup location and the destination location
    useEffect(() => {
        rideDuration = fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=${accessToken}`
        ) //We are getting only 1 route among all the possible routes
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.routes[0].duration / 100)
                setRideDuration(data.routes[0].duration / 100)
            })
        // console.log(pickupCoordinates[0], dropoffCoordinates[0])
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <div className="flex-1 overflow-y-hidden flex flex-col">
            {/* Title */}
            <div className="text-gray-500 text-center text-xs py-2 border-b">
                Choose a ride or swipe up for more
            </div>

            {/* Car List */}
            <div className="overflow-y-scroll">
                {carList.map((car, index) => (
                    <>
                        {/* Car */}
                        <div key={index} className="flex p-4 items-center">
                            {/* Image */}
                            <img
                                src={car.imgUrl}
                                alt="Uber X"
                                className="h-14 mr-4"
                            />

                            {/* Details */}
                            <div className="flex-1">
                                {/* Service */}
                                <div className="font-medium">{car.service}</div>

                                {/* Time */}
                                <div className="text-xs text-blue-500">
                                    5 min away
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-sm">
                                {'$' +
                                    (rideDuration * car.multiplier).toFixed(2)}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default RideSelector
