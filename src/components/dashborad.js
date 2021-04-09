import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [code, setCode] = React.useState('');

    function handleInputChange(event) {
        console.log(event.target.value);
        setCode(event.target.value);
    }

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="/FlightPlan-Logo-White.png" alt="Workflow" />
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6">
                        <div>
                            <div className="mt-1">
                                <input value={code} onChange={handleInputChange} id="code" name="code" type="text" autoComplete="code" required className="appearance-none block w-full px-3 py-2 bg-gray-900 border border-gray-900 rounded-md shadow-sm text-gray-100 placeholder-gray-100 sm:text-sm" placeholder="Enter or paste fuel code here" />
                            </div>
                        </div>

                        <div>
                            <Link to={code.length > 0 ? `/timer/${code}` : null} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-50 hover:bg-primary-100 focus:outline-none">
                                Start
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard