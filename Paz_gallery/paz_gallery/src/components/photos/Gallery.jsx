import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Photo_1 from "../../assets/pics/Photo_1.jpg";
import Photo_2 from "../../assets/pics/Photo_2.jpg";
import Photo_3 from "../../assets/pics/Photo_3.jpg";
import Photo_4 from "../../assets/pics/Photo_4.jpg";
import Photo_5 from "../../assets/pics/Photo_5.jpg";
import Photo_6 from "../../assets/pics/Photo_6.jpg";
import Photo_7 from "../../assets/pics/Photo_7.jpg";
import Photo_8 from "../../assets/pics/Photo_8.jpg";

const photoData = [
    { id: 1, img: Photo_1, title: "Photo 1" },
    { id: 2, img: Photo_2, title: "Photo 2" },
    { id: 3, img: Photo_3, title: "Photo 3" },
    { id: 4, img: Photo_4, title: "Photo 4" },
    { id: 5, img: Photo_5, title: "Photo 5" },
    { id: 6, img: Photo_6, title: "Photo 6" },
    { id: 7, img: Photo_7, title: "Photo 7" },
    { id: 8, img: Photo_8, title: "Photo 8" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className='container mx-auto'>
            <Navbar /> {/* Include Navbar here */}

            {/* Photo Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-0 p-0 justify-center">
                {photoData.map(({ id, img, title }) => (
                    <div 
                        key={id} 
                        className="text-white shadow-md rounded-lg overflow-hidden relative group"
                        onClick={() => handleImageClick(img)}
                    >
                        <img 
                            src={img} 
                            alt={title}
                            className="w-full h-full object-cover cursor-pointer transform scale-100 group-hover:scale-110 transition-transform duration-500" 
                            style={{ width: '477px', height: '450px' }}
                        />
                    </div>
                ))}
            </div>

            {/* Modal for Selected Image */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" onClick={handleClose}>
                    <img src={selectedImage} alt="Selected" className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
