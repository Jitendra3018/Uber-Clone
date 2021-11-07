import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

function login() {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Uber | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col h-screen bg-gray-200 w-screen p-4">
                {/* Uber Logo */}
                <img
                    src="https://i.ibb.co/n6LWQM4/Post.png"
                    alt="Uber Logo"
                    className="h-10 w-auto object-contain self-start md:h-8"
                />

                {/* Title */}
                <div className="text-5xl pt-4 text-gray-500">
                    Log In to access your account
                </div>

                <div className="flex flex-col md:flex-row md:gap-x-24 lg:gap-x-36 xl:gap-x-48">
                    {/* Head Image */}
                    <img
                        src="https://i.ibb.co/CsV9RYZ/login-image.png"
                        alt="Head Image"
                        className="object-cover w-full md:w-1/2 flex justify-center items-center"
                    />

                    {/* Sign In Button */}
                    <button
                        onClick={() => signInWithPopup(auth, provider)}
                        className="bg-black text-white text-center py-4 mt-8 self-center w-full rounded-lg md:w-1/2 text-2xl"
                    >
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default login
