import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Timer = () => {
    let { code } = useParams();
    console.log(code);
    const [key, setKey] = useState(0);
    const [state, setState] = useState({
        isPlaying: false,
        status: 'Idle',
        duration: 10,
        rotation: 'clockwise',
        colors: [
            ['#006600', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
        ],
        trailColor: '#d9d9d9'
    })

    function sendNotification() {
        window.electron.notificationApi.sendNotification(state.status === 'Burning' ? 'Completed!' : 'Refilled!');
        setState({
            ...state,
            duration: state.status === 'Burning' ? 5 : 10,
            status: state.status === 'Burning' ? 'Refilling' : 'Idle',
            rotation: state.status === 'Burning' ? 'counterclockwise' : 'clockwise',
            isPlaying: state.status === 'Burning' ? true : false,
            colors: [
                [state.status === 'Burning' ? '#A30000' : '#006600', 0.33],
                ['#F7B801', 0.33],
                [state.status === 'Burning' ? '#006600' : '#A30000', 0.33],
            ],
            trailColor: state.status === 'Burning' ? '#d9d9d9' : '#006600'
        })
    }

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return (
            <div className="w-full grid text-center">
                <div>{minutes}:{seconds}</div>
                <div className="uppercase">{state.status}</div>
            </div>
        )
    }

    function startStop(n) {
        setState({
            ...state,
            isPlaying: n,
            status: n ? 'Burning' : 'Idle'
        })
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
            <div className="mt-8 mx-auto w-full grid grid-cols-4 gap-4">
                <div className="bg-gray-200 col-span-3 shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Waypoint name
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Leg info
                        </p>
                    </div>
                    <div className="border-t border-gray-400 px-6 py-5">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                            <div className="col-span-2">
                                <dt className="text-sm font-medium text-gray-500">
                                    Notes
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-gray-200 col-span-1 py-8 px-10 shadow rounded-lg">
                    <div className="space-y-6">
                        <div>
                            <div className="mt-1 flex justify-center">
                                <CountdownCircleTimer
                                    key={key}
                                    isLinearGradient={false}
                                    isPlaying={state.isPlaying}
                                    duration={state.duration}
                                    rotation={state.rotation}
                                    colors={state.colors}
                                    onComplete={() => {
                                        sendNotification()
                                        setKey(prevKey => prevKey + 1)
                                        return [true, 1500] // repeat animation in 1.5 seconds
                                    }}
                                >
                                    {({ remainingTime }) => children({ remainingTime })}
                                </CountdownCircleTimer>
                            </div>
                            <div className="mt-4">
                                <>
                                    {state?.status === 'Burning' &&(
                                        <button onClick={()=>startStop(false)} className="mx-auto px-2 py-1.5 rounded text-sm text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                                            </svg>
                                            Stop
                                        </button>
                                    )}
                                    {state?.status === 'Idle' &&(
                                        <button onClick={()=>startStop(true)} className="mx-auto px-2 py-1.5 rounded text-sm text-gray-800 border border-gray-800 hover:text-white hover:bg-gray-800 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Start
                                        </button>
                                    )}
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer