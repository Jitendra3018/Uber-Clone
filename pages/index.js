import Head from 'next/head'
import ActionItems from '../components/ActionItems'
import Map from '../components/Map'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Uber Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Map */}
            <div className="flex flex-col h-screen">
                <Map />
                <ActionItems />
            </div>
        </div>
    )
}
