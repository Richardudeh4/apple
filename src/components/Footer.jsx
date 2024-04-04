import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
       <div className='screen-max-width'>
        <div>
            <p className='font-semibold text-gray text-xs'>
                More ways to shop: {' '}
                <span className='underline px-2 text-blue'>
                    Find an apple Store {' '}
                </span>
                or 
                <span className='underline px-2 text-blue'>
                   other retailer {' '}
                </span>
                near you.
            </p>
            <p className='font-semibold text-gray text-xs'>
               Or call +2349061687903
             </p>
        </div>
        <div className='bg-neutral-700 my-5 h-[1px] w-full'>
                <div className='flex flex-col md:flex-row md:items-center py-6 justify-between'>
                    <p className='font-semibold text-gray text-xs'>
                        Copyright @ 2024 Apple Inc. All rights
                    </p>
                    <div className='flex'>
                        {footerLinks.map((link,i) => (
                            <p key={i} className='font-semibold text-gray text-xs'>
                                {link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className='mx-2'>
                                        |
                                    </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer