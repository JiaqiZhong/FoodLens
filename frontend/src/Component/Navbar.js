import React from 'react';
import croissant from '../Images/croissant.jpg'

function Navbar() {
  return (
    <nav className="bg-orange-400">
        <div className="mx-auto max-w-7xl px-6">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        {/* Icon when menu is closed */}
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/* Icon when menu is open */}
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* Menu items */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="h-8 w-auto" src={croissant} alt="Food Lens" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                        <a href="#" className="bg-black text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                            Home
                        </a>
                        <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Nutrition Tips
                        </a>
                        <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            History
                        </a>
                        <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Collections
                        </a>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="relative ml-3">
                        <div>
                            <button
                                type="button"
                                className="relative flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user profile" />
                            </button>
                        </div>

                        {/* Dropdown menu */}
                        <div
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex="-1"
                        >
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                                Your Profile
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                                Settings
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Mobile menu */}
            <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <a href="#" className="bg-black text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                Home
                </a>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Nutrition Tips
                </a>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                History
                </a>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Collections
                </a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;