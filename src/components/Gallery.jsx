import React, { useState } from 'react';

// Define image paths directly as URLs
const photoData = [
    { id: 1, img: "/assets/photo_1.jpg", title: "Photo 1" },
    { id: 2, img: "/assets/photo_2.jpg", title: "Photo 2" },
    { id: 3, img: "/assets/photo_3.jpg", title: "Photo 3" },
    { id: 4, img: "/assets/photo_4.jpg", title: "Photo 4" },
    { id: 5, img: "/assets/photo_5.jpg", title: "Photo 5" },
    { id: 6, img: "/assets/photo_6.jpg", title: "Photo 6" },
    { id: 7, img: "/assets/photo_7.jpg", title: "Photo 7" },
    { id: 8, img: "/assets/photo_8.jpg", title: "Photo 8" },
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

            {/* Photo Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-0 justify-center">
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