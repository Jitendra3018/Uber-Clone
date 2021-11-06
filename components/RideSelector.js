import { carList } from '../data/carList'

function RideSelector() {
    return (
        <div className="flex-1 overflow-y-scroll flex flex-col">
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
                                    {car.multiplier} min away
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-sm">$24.00</div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default RideSelector
