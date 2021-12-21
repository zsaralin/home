import React from 'react';
import { motion } from 'framer-motion';

const Image = ({ setSelectedImg }) => {
    const photos = [{
        photo: './Photos/eagle.jpg',
        text:"Penguin + Eagle"
    },
        {
            photo: './Photos/stuffedanimal.jpg',
            text:"Porcupine"
        },
        {
            photo: './Photos/koala.jpg',
            text:"koala"
        },
    ]
    return (
        <div className="img-grid">
            {photos && photos.map(doc => (
                <motion.div className="img-wrap" key={doc.text} style = {{height: '300px'}}
                            layout
                            whileHover={{ opacity: .8 }}s
                            onClick={() => setSelectedImg(doc.photo)}
                >
                    <motion.img src={require( `${ doc.photo }` ) }  alt="uploaded pic" style = {{height: '300px'}}
                                // initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Image;