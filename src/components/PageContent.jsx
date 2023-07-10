import React from 'react';
import Tile from './Tile';
import InfiniteScroll from "react-infinite-scroller";
import Grid from '@mui/material/Grid';

const PageContent = (props) => {
    const loading = (pageCount) => {
        console.log("asd inside loading values", pageCount);

        console.log("api call made for load more");
        props.loadMore(pageCount);
    };

    const [spacing, setSpacing] = React.useState(2);
    return (
        <>
            <InfiniteScroll
                pageStart={1}
                loadMore={loading}
                hasMore={true || false}
            >
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12} lg={6} xl={4} >
                        <Grid container justifyContent="center" spacing={spacing}>
                            {
                                props.content != undefined ? props.content.map((item, index) => {
                                    return <Tile key={item.name + index} name={item.name} imageUrl={item['poster-image']} />
                                }) : []
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </InfiniteScroll>

        </>
    )
}

export default PageContent;
