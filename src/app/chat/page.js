
export default function Chat() {
    return (
        <div className="z-0 bg-[#131619] p-3">
            <div className="z-10 w-80 rounded-3xl bg-[#0D0F10]">

            {/* dropdown starts */}
            <div className="grid place-items-center w-full relative border-b-2 border-slate-400 pt-3 pb-2">
                <button
                    type="button" 
                    className="inline-flex justify-between items-center px-4 py-2 shadow-sm w-10/12 bg-background-clasic text-sm font-medium text-gray-700">
                    <div className='flex items-center'>
                        <img className="w-12 h-auto rounded-full mr-3" src="/avatar.svg" alt="avatar"/>
                        <div className='text-left text-white truncate'>
                            Intellisys
                            <p className='text-[#B6F09C]'>12 members</p>
                        </div>
                    </div>
                    <svg className={`transition-all ml-2 h-5 w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {/* dropdown ends */}

            {/* navigation bar starts */}
            <div className='text-gray-500 font-semibold mt-8 mb-2 pb-4 border-b-2 border-slate-400'>
                <p className='pl-5 pb-4'>
                General
                </p>
                <ul className='flex flex-col cursor-pointer'>
                    <li className='transition-all px-2 group h-12 flex justify-between flex text-white hover:text-slate-400'>
                        <div className="flex gap-4 shadow-custom">
                        <img className="h-10 w-10" src="search.png"/>
                        Search
                        </div>
                        <img className="relative top-[-10px]" src="/badge.svg"/>
                    </li>
                    <li className='transition-all px-2 group h-12 flex items-center flex gap-4 text-white  hover:text-slate-400'>
                        <img className="h-10 w-10 relative top-[7px]" src="/billing.png"/>
                        Billing
                    </li>
                </ul>
            </div>
            {/* navigation bar ends */}

            {/* navigation bar starts */}
            <div className='text-gray-500 font-semibold mt-8 mb-2 pb-4 border-b-2 border-slate-400'>
                <p className='pl-5 pb-4'>
                Projects
                </p>
                <ul className='flex flex-col cursor-pointer'>
                    <li className='transition-all px-2 group h-12 flex justify-between flex text-white hover:text-slate-400'>
                        <div className="flex gap-4 shadow-custom">
                        <img className="h-10 w-10" src="search.png"/>
                        Search
                        </div>
                        <img className="relative top-[-10px]" src="/badge.svg"/>
                    </li>
                    <li className='transition-all px-2 group h-12 flex items-center flex gap-4 text-white  hover:text-slate-400'>
                        <img className="h-10 w-10 relative top-[7px]" src="/billing.png"/>
                        Billing
                    </li>
                </ul>
            </div>
            {/* navigation bar ends */}

            {/* user profile starts */}
            <div className='flex justify-between p-6 text-white'>
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <img className='w-8' src="/avatar/01.png" alt="" />
                <span className='truncate w-20'>Danylo Shapovalov</span>
            </div>
            <div className='flex items-center cursor-pointer'>
                <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.62476 1.62494H9.37476M8.62476 2.37494H9.37476M1.62476 1.62494H2.37476M1.62476 2.37494H2.37476M15.6248 1.62494H16.3748M15.6248 2.37494H16.3748M10 2C10 2.55228 9.55228 3 9 3C8.44772 3 8 2.55228 8 2C8 1.44772 8.44772 1 9 1C9.55228 1 10 1.44772 10 2ZM3 2C3 2.55228 2.55229 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55229 1 3 1.44772 3 2ZM17 2C17 2.55228 16.5523 3 16 3C15.4477 3 15 2.55228 15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2Z" stroke="#5F6D7E" stroke-width="1.67" stroke-linecap="round"/>
                </svg>
            </div>
            </div>
            {/* user profile ends */}

            </div>
        </div>
    )

}