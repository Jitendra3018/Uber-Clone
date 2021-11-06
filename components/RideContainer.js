import RideSelector from './RideSelector'
import Link from 'next/link'

function RideContainer() {
    return (
        <div className="flex flex-col flex-1 h-1/2">
            {/* Ride Selector */}
            <RideSelector />

            {/* Confirm Button */}
            <div className="bg-black text-white text-center py-4 m-4 text-lg border-t-2 cursor-pointer rounded-lg">
                Confirm Uber X
            </div>
        </div>
    )
}

export default RideContainer
