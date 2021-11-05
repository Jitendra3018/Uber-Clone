import Link from 'next/link'

function ActionItems() {
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
                    <div className="mr-4 text-sm">Jitendra Garg</div>
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQG51oOWe6PPcQ/profile-displayphoto-shrink_800_800/0/1629528762745?e=1641427200&v=beta&t=s_2am7yowtQ0rJ_iCCLiHQehhy3a_Wagy3ZyuCYSDX8"
                        alt="User Image"
                        className="h-12 w-12 rounded-full border border-gray-200 p-px"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex">
                {/* Action Button */}
                <Link href="/search">
                    <div className="actionbutton">
                        <img
                            src="https://i.ibb.co/cyvcpfF/uberx.png"
                            alt=""
                            className="h-3/5"
                        />
                        Ride
                    </div>
                </Link>
                <div className="actionbutton">
                    <img
                        src="https://i.ibb.co/n776JLm/bike.png"
                        alt=""
                        className="h-3/5"
                    />
                    2-wheels
                </div>
                <div className="actionbutton">
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
