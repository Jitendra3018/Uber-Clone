import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

function search() {
    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')

    // console.log(pickup)
    // console.log(dropoff)

    return (
        <div>
            <Head>
                <title>Location Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-gray-200 h-screen">
                {/* Button Container */}
                <div className="bg-white px-4">
                    <Link href="/">
                        <img
                            src="https://img.icons8.com/ios-filled/50/000000/left.png"
                            alt="Back Button"
                            className="h-12 cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Input Container */}
                <div className="bg-white flex items-center px-4 mb-2">
                    {/* From To Icons */}
                    <div className="w-10 flex flex-col mr-2 items-center">
                        <img
                            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
                            alt="Circle"
                            className="h-2.5"
                        />
                        <img
                            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
                            alt="Line"
                            className="h-10"
                        />
                        <img
                            src="https://img.icons8.com/windows/50/000000/square-full.png"
                            alt="Sqaure"
                            className="h-3"
                        />
                    </div>

                    {/* Input Boxes */}
                    <div className="flex flex-col flex-1">
                        <input
                            placeholder="Enter pickup location"
                            type="text"
                            className="inputboxes"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                        />
                        <input
                            placeholder="Where to?"
                            type="text"
                            className="inputboxes"
                            value={dropoff}
                            onChange={(e) => setDropoff(e.target.value)}
                        />
                    </div>

                    {/* Plus Button */}
                    <div className="">
                        <img
                            src="https://img.icons8.com/ios/50/000000/plus-math.png"
                            alt="Plus Icon"
                            className="w-10 h-10 bg-gray-200 rounded-full ml-3"
                        />
                    </div>
                </div>

                {/* Saved Places */}
                <div className="flex items-center bg-white px-4 py-2">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
                        alt="Star Icon"
                        className="bg-gray-400 w-10 h-10 p-2 rounded-full mr-2"
                    />{' '}
                    Saved Places
                </div>

                {/* Confirm Location */}
                <Link
                    href={{
                        pathname: '/confirm',
                        query: { pickup: pickup, dropoff: dropoff },
                    }}
                >
                    <div className="bg-black text-white text-center mx-2 mt-2 py-2 rounded text-xl cursor-pointer">
                        Confirm Locations
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default search
