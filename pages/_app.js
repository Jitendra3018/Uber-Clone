import 'tailwindcss/tailwind.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../styles/global.css'
import Router from 'next/router'

import ProgessBar from '@badrap/bar-of-progress'

const progress = new ProgessBar({
    size: 6,
    color: '#ADD8E6',
    className: 'z-50',
    delay: 200,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
