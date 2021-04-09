import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Timer = () => {
    let { code } = useParams();
    console.log("timer:", code);
    function sendNotification() {
        window.electron.notificationApi.sendNotification('Completed!');
    }

    return (
        <div className="min-h-screen bg-black flex flex-col p-6">
            <div className="sm:mx-auto sm:w-full flex justify-start">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-8 w-8 cursor-pointer hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </Link>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                <div className="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6">
                        <div>
                            <div className="mt-1 flex justify-center">
                                <CountdownCircleTimer
                                    isPlaying
                                    duration={10}
                                    colors={[
                                        ['#006600', 0.33],
                                        ['#F7B801', 0.33],
                                        ['#A30000', 0.33],
                                    ]}
                                    onComplete={sendNotification}
                                >
                                    {({ remainingTime }) => remainingTime}
                                </CountdownCircleTimer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer