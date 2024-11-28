import Logo from '@/components/Logo'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-5'>
        <Logo/>
      {children}
    </div>
  )
}

export default layout
