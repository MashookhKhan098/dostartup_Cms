// 'use client'

// import { useEffect, useState } from 'react'

// import { supabase } from '../../lib/supabase'

// export default function Dashboard() {
//     const [profile, setProfile] = useState<any>(null)

//     useEffect(() => {
//         const getProfile = async () => {
//             const { data: userData } = await supabase.auth.getUser()
//             const user = userData.user

//             if (!user) return

//             const { data } = await supabase
//                 .from('profiles')
//                 .select('*')
//                 .eq('id', user.id)
//                 .single()

//             setProfile(data)
//         }

//         getProfile()
//     }, [])

//     return (
//         <div className="p-10">
//             <h1 className="text-2xl font-bold">Dashboard</h1>

//             {profile ? (
//                 <p className="mt-4">Welcome, {profile.name}</p>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     )
// }


import React from 'react'

const page = () => {
  return (
    <div>
      
      dashboard
    </div>
  )
}

export default page
