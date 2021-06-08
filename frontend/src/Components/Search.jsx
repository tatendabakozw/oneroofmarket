import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { useStateValue } from '../StateContext/StateProvider'

function Search() {

    const [location, setLocation] = useState('')
    const [rooms, setRooms] = useState('')
    const [range, setRange] = useState('')
    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue()

    // SET_SEARCH

    const searchProperty = (e) => {
        e.preventDefault()
        dispatch({
            type: 'SET_SEARCH',
            search: ({
                location: location,
                range: range,
                rooms: rooms
            })
        })
    }

    return (
        <div className="more">
            <div className="bg-gray-200 ml-12 rounded-b-none rounded-md w-24  py-1 text-center flex flex-col items-center">
                <p className="text-center text-gray-500">Property</p>
            </div>
            <form onSubmit={searchProperty} className="bg-gray-50 shadow-lg hover:shadow-2xl transition duration-100 transform hover:scale-105 cursor-pointer mx-auto border-t border-gray-100 p-4 md:rounded-full rounded-md">
                <div className="flex flex-row">
                    <div className="grid md:grid-cols-10 grid-cols-1 justify-between items-center">
                        <div className="col-span-3">
                            <span className="flex flex-col w-full">
                                <p className="text-sm text-gray-700 md:text-left text-center font-semibold ml-2">Location</p>
                                <div className="flex flex-row items-center">
                                    <input
                                        type="text"
                                        onChange={e => setLocation(e.target.value)}
                                        className="rounded outline-none w-full  border border-gray-200 p-1 placeholder-gray-300"
                                        placeholder="Enter area" />
                                    <div className="border-r h-8 mx-2 md:flex hidden border-gray-300"></div>
                                </div>
                            </span>
                        </div>
                        <div className="col-span-3">
                            <span className="flex flex-col w-full">
                                <p className="text-sm text-gray-700 md:text-left text-center ml-2 font-semibold">Rooms</p>
                                <div className="flex flex-row items-center">
                                    <input
                                        type="number"
                                        onChange={e => setRooms(e.target.value)}
                                        className="outline-none w-full border border-gray-200 p-1 placeholder-gray-300"
                                        placeholder="7" />
                                    <div className="border-r h-8 mx-2 md:flex hidden border-gray-300"></div>
                                </div>
                            </span>
                        </div>
                        <div className="col-span-3">
                            <span className="flex flex-col w-full">
                                <p className="text-sm text-gray-700 md:text-left text-center ml-2 font-semibold">Budget</p>
                                <div className="flex flex-row items-center">
                                    <select
                                        defaultValue=""
                                        onChange={e => setRange(e.target.value)}
                                        id="category"
                                        className="outline-none text-sm text-gray-600 md:w-full w-1/2 border border-gray-200 p-1 placeholder-gray-300" >
                                        <option disabled={true} value="">1k - 20k</option>
                                        <option value='1k-20k'>1k - 20k</option>
                                        <option value='20k - 100k'>20k - 100k</option>
                                        <option value='100k - 500k'>100k - 500k</option>
                                    </select>
                                    <div className="h-8 mx-2 rounded md:flex hidden"></div>

                                </div>
                            </span>
                        </div>
                        <div className="col-span-1 items-center flex-row flex">
                            <span onClick={searchProperty} className="bg-[#ED7014] p-2 flex cursor-pointer hover:bg-yellow-600 outline-none flex-row items-center md:rounded-full rounded-md text-white">
                                <SearchIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
