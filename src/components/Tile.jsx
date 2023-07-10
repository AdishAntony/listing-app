import React, { useState } from 'react';
import placeholderImage from "../assets/images/placeholder_for_missing_posters.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Tile = (props) => {
    let [loaded, setLoaded] = useState(false);
    const handleImageLoad = () => {
        setLoaded(true);
    }
    const onError = () => {
        setLoaded(false);
    }

    const imageStyle = !loaded ? { hidden: true } : { maxWidth: '150px', maxHeight: '160px' };
    return (
        <>
            <div>
                <Card sx={{ width: 'auto', bgcolor: '#171717', color: '#FFFFFF', border: 'none', boxShadow: 'none', height: '250px' }}>
                    <CardContent sx={{ height: '200px' }}>
                        <div className="imageHolder" >
                            {!loaded && <img src={placeholderImage} style={{ maxWidth: '150px', maxHeight: '160px' }} />}
                            <img src={process.env.REACT_APP_IMAGE_BASEURL + props.imageUrl}
                                style={imageStyle}
                                onLoad={handleImageLoad}
                                onError={onError} />
                        </div>
                        <Typography gutterBottom variant="body2" component="div">
                            {props.name}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Tile;
