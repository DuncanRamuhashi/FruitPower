import React, { useState, useEffect } from 'react';
import background from '../assets/fruitadd.jpg';
import backGround from '../assets/About.jpg';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

const FruitManager = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState(null);
    const [fruits, setFruits] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result.toString());
            };
            reader.readAsDataURL(file);
        }
    };

    const addFruit = async () => {
        if (!name || !price || !photo) {
            toast.error("Please fill in all fields!");
            return;
        }

        const Data = {
            name,
            price: parseFloat(price),
            photo,
        };

        try {
            const response = await fetch('https://localhost:44397/api/Fruit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data === 'false') {
                toast.error("Fruit not added!");
            } else {
                toast.success("Fruit added successfully");
                setFruits((prevFruits) => [...prevFruits, data]);
                setName('');
                setPrice('');
                setPhoto(null);
            }
        } catch (error) {
            console.error('There was an error adding the data:', error);
            toast.error("An error occurred while adding the fruit.");
        }
    };

    useEffect(() => {
        const getFruits = async () => {
            try {
                const response = await fetch('https://localhost:44397/api/Fruit', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setFruits(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                toast.error("Error fetching fruits.");
            }
        };
        getFruits();
    }, []);

    return (
        <div className='flex flex-col gap-20 relative h-full py-[100px] bg-cover bg-green-500' >
            <ToastContainer />
            <div className=" rounded-lg shadow-lg p-8 bg-green-700 w-11/12 mx-auto">
                <div className='grid grid-cols-4 bg-green-600 h-14'>
                    {['Id', 'Name', 'Price', 'Image'].map((header) => (
                        <div key={header} className='flex justify-center items-center'>
                            <h1 className='text-white font-semibold'>{header}</h1>
                        </div>
                    ))}
                </div>

                {fruits.map(f => (
                    <div key={f.Id} className='grid grid-cols-4 bg-gray-100 h-14 items-center border-b  hover:bg-gray-300'>
                        <div className='flex justify-center'>
                            <h2 className='text-black'>{f.Id}</h2>
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='text-black'>{f.Name}</h2>
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='text-black'>R {f.Price}</h2>
                        </div>
                        <div className='flex justify-center'>
                            <img className='h-10 w-10 object-cover' src={`data:image/jpeg;base64,${f.Photo}`} alt={f.Name} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 mx-auto flex flex-col space-y-5">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add Fruit</h1>

                <label className="block mb-2 text-gray-600">
                    Name:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                    />
                </label>

                <label className="block mb-2 text-gray-600">
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                    />
                </label>

                <div>
                    <input
                        id='file-upload'
                        type='file'
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-2 block w-full text-gray-600"
                    />
                </div>

                <button
                    onClick={addFruit}
                    className="w-full text-white font-bold py-2 rounded-md bg-green-500 hover:bg-green-700 transition duration-200"
                >
                    Save Fruit
                </button>
            </div>
        </div>
    );
};

export default FruitManager;
