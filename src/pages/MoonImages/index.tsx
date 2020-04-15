import React, { useState, useEffect } from 'react';

import CardGrid from '../../components/ImagesGrid';

function MoonImages() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await fetch(
                `https://images-api.nasa.gov/search?q=moon&page=1`
            );
            const res = await data?.json();
            setImages(res?.collection?.items);
        };

        fetchData();
    }, []);

    return <CardGrid items={images.slice(0, 10)} />;
}

export default MoonImages;
