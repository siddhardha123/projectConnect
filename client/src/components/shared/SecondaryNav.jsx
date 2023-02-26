import { useState } from "react";
import authContext from '../../context/authContext'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { Link } from "react-router-dom";
const data = [
    {
       "name" : "Home",
       "link" : "/",
    },
    {
       "name" : "About",
       "link" : "/"
    },
    {
       "name" : "Dashboard",
       "link" : "/dashboard"
    },

    {
       "name" : "Sign Up",
       "link" : "/signup"
    }
]
const SecondaryNavbar = () =>  {
    const [isOpen, setIsOpen] = useState(false);
    const updateContext = useContext(authContext)
  const navigate = useNavigate()
  const logout = () => {
    updateContext.login = false
    console.log(updateContext)
    navigate("/")
  }

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out sm:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="block h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="hidden  sm:ml-6 sm:flex ">
                            {/* Your links go here */}
                            {data.map((data)=>(
                        <div className="inline-flex  items-center px-10 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"><Link to={data.link}>{data.name}</Link></div>
                  ))}
                        </div>
                    </div>
                    {/* Your logo and user account button go here */}
                    <div className="my-auto">
                        
                    <button className="bg-red-500 p-2 px-4 text-white rounded-md" onClick={logout}>
          Log Out
        </button>

                    </div>
                </div>
            </div>
      
<div
className={`${ isOpen ? "block" : "hidden" } sm:hidden bg-white`}>
<div className="pt-2 pb-4 text-center">

{data.map((data)=>(
                        <div className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-indigo-500 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-indigo-500 transition duration-150 ease-in-out"><Link to={data.link}>{data.name}</Link></div>
                  ))}
        </div>
</div >
</nav >
);
}

export default SecondaryNavbar;

