
'use client';
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
    return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
                <Image 
                src="/icons/logo.png"
                width={34}
                height={34}
                alt='NexaBank'
                className='size-[32px] max-xl:size-12'
                />
                <h1 className='sidebar-logo'><b className='text-blue-500'>Nexa</b>Bank</h1>
            </Link>
            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bank-gradient': isActive})}>
                        <div className='relative size-5'>
                            <Image 
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                                'brightness-[3] invert-0': isActive
                            })}
                            />
                        </div>
                        <p className={cn('sidebar-label ', {'!text-white': isActive})}>{item.label}</p>
                    </Link>
                )
            })}
            USER
        </nav>
        FOOTER
    </section>
  )
}

export default Sidebar