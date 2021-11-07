import Link from 'next/link'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

function ActionItems() {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    photoURL: user.photoURL,
                })
            } else {
                setUser(null)
                router.push('/')
            }
        })
    }, [])

    return (
        <div className="flex-1 p-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                {/* Image */}
                <img
                    src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
                    alt="Logo"
                    className="h-28"
                />

                {/* Profile */}
                <div className="flex items-center">
                    <div className="mr-4 text-sm capitalize">
                        {user && user.name}
                    </div>
                    <img
                        src={user && user.photoURL}
                        alt="User Image"
                        className="h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer transition transform hover:scale-110 duration-300 ease-in-out"
                        onClick={() => signOut(auth)}
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex">
                {/* Action Button */}
                <Link href="/search">
                    <div className="bg-gray-200 flex flex-col justify-center flex-1 m-3 h-32 items-center rounded-lg cursor-pointer text-xl transform transition duration-300 hover:scale-105 ease-in-out;">
                        <img
                            src="https://i.ibb.co/cyvcpfF/uberx.png"
                            alt=""
                            className="h-3/5"
                        />
                        Ride
                    </div>
                </Link>
                <div className="bg-gray-200 flex flex-col justify-center flex-1 m-3 h-32 items-center rounded-lg text-xl transform transition duration-300 hover:scale-105 ease-in-out;">
                    <img
                        src="https://i.ibb.co/n776JLm/bike.png"
                        alt=""
                        className="h-3/5"
                    />
                    2-wheels
                </div>
                <div className="bg-gray-200 flex flex-col justify-center flex-1 m-3 h-32 items-center rounded-lg text-xl transform transition duration-300 hover:scale-105 ease-in-out;">
                    <img
                        src="https://i.ibb.co/5RjchBg/uberschedule.png"
                        alt=""
                        className="h-3/5"
                    />
                    Reserve
                </div>
            </div>

            {/* Input Buttons */}
            <div className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-2xl">
                Where to?
            </div>
        </div>
    )
}

export default ActionItems
