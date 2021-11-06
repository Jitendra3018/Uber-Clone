import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Map from '../components/Map'
import RideContainer from '../components/RideContainer'
import Link from 'next/link'

function confirm() {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log('Pickup ', pickup)
    console.log('Dropoff ', dropoff)

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {
        // const pickup = 'Udaipur'

        // Using the fetch function to get the API call
        // We have to put the access token so that the location can be accessed easily and the data can be shown and the marker can be located on that particular location
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
                new URLSearchParams({
                    access_token:
                        'pk.eyJ1IjoiaGFycnktamFrZXMiLCJhIjoiY2t2bHl4d2FiMDEybDJ2cWhsZWd6bXNheCJ9.K0uC6MU377yT2TViGKDEpg',
                    limit: 1,
                })
        )
            .then((response) => response.json())
            .then((data) => {
                console.log('Pickup')
                // console.log(data.features[0].center)
                setPickupCoordinates(data.features[0].center)
            })
    }

    const getDropOffCoordinates = (dropoff) => {
        // const dropoff = 'Delhi'

        // Using the fetch function to get the API call
        // We have to put the access token so that the location can be accessed easily and the data can be shown and the marker can be located on that particular location
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
                new URLSearchParams({
                    access_token:
                        'pk.eyJ1IjoiaGFycnktamFrZXMiLCJhIjoiY2t2bHl4d2FiMDEybDJ2cWhsZWd6bXNheCJ9.K0uC6MU377yT2TViGKDEpg',
                    limit: 1,
                })
        )
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                console.log('Dropoff')
                // console.log(data.features[0].center)
                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup)
        getDropOffCoordinates(dropoff)
    }, [pickup, dropoff])

    return (
        <div>
            <Head>
                <title>Confirm</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col h-screen">
                <div className="absolute top-2 z-50">
                    <Link href="/search">
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/left.png"
                            alt="Back button"
                            className="cursor-pointer bg-white rounded-full ml-2 drop-shadow-xl"
                        />
                    </Link>
                </div>
                <Map
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <RideContainer />
            </div>
        </div>
    )
}

export default confirm
