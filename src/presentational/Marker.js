import React from 'react'

const Marker = () => {
    const markerStyle = {
        border: '1px solid white',
        borderRadius: '50%',
        height: 20,
        width: 20,
        backgroundColor: 'red',
        cursor: 'pointer',
        zIndex: 10,
    };

    return (
        <>
            <div style={markerStyle} />
        </>
    );
};

export default Marker