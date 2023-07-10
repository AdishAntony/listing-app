import React, { useState } from 'react';
import placeholderImage from "../assets/images/placeholder_for_missing_posters.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Tile = (props) => {
    let [loaded, setLoaded] = useState(false);
    let [imageStyle, setImageStyle] = useState({ maxWidth: '150px', maxHeight: '160px' });

    const handleImageLoad = () => {
        setLoaded(true);
        setImageStyle({ maxWidth: '150px', maxHeight: '160px' });
    }

    const onError = () => {
        setLoaded(false);
        setImageStyle({ display: 'none' });
    }

    const truncate = (str) => {
        return str.length > 18 ? str.substring(0, 15) + "..." : str;
    }

    return (
        <>
            <div>
                <Card sx={{ width: 'auto', bgcolor: '#171717', color: '#FFFFFF', border: 'none', boxShadow: 'none', height: '250px' }}>
                    <CardContent sx={{ height: '200px' }}>
                        <div className="imageHolder" >
                            {!loaded && <img src={placeholderImage}
                                style={{ maxWidth: '150px', maxHeight: '160px' }}
                                alt={props.name} />}
                            <img src={process.env.REACT_APP_IMAGE_BASEURL + props.imageUrl}
                                style={imageStyle}
                                onLoad={handleImageLoad}
                                onError={onError}
                                alt={props.name} />
                        </div>
                        <Typography gutterBottom variant="body2" component="div">
                            {truncate(props.name)}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Tile;
