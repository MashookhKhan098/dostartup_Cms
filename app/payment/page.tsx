'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const Page = () => {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser()

            if (!data.user) {
                router.push('/login')
            } else {
                setUser(data.user)
            }
        }

        checkUser()
    }, [])

    // ✅ LOGOUT FUNCTION
    const handleLogout = async () => {
        setLoading(true)
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <div className="p-10">
            {user ? (
                <div>
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <p>Email: {user.email}</p>
                    <p>ID: {user.id}</p>

                    {/* ✅ Logout button */}
                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="bg-red-500 text-white p-2 mt-4"
                    >
                        {loading ? 'Logging out...' : 'Logout'}
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Page