import React from 'react';
import { motion } from 'framer-motion';

const Image = ({ setSelectedImg }) => {
    const photos = [
        {
            photo: './Photos/stuffedanimal.jpg',
            text:"Porcupine"
        },
        {
        photo: './Photos/duck1.jpg',
        text:"Penguin + Eagle"
    },

        {
            photo: './Photos/self.jpg',
            text:"Self portrait"
        },
        {
            photo: './Photos/blue.jpg',
            text:"Blue bear"
        },
        {
            photo: './Photos/unfinished.jpg',
            text:"Unfinished self portrait"
        },
        {
            photo: './Photos/seashell.jpg',
            text:"Seashell"
        },
        {
            photo: './Photos/foot.jpg',
            text:"Foot"
        },
        {
            photo: './Photos/turkey.jpg',
            text:"Turkey"
        },
        {
            photo: './Photos/koala.jpg',
            text:"koala"
        },
    ]
    return (
        <div className="img-grid">
            {photos && photos.map(doc => (
                <motion.div className="img-wrap" key={doc.text}// style = {{height: '300px'}}
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