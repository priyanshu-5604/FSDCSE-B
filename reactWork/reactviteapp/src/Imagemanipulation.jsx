import React, { useState } from 'react';

function Imagemanipulation() {
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);
    const [rotate, setRotate] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('palegoldenrod');

    const colors = ['palegoldenrod', 'lightblue', 'lightgreen', 'lightcoral', 'lavender'];
    const [colorIndex, setColorIndex] = useState(0);

    const enhanceHeight = () => setHeight(height + 30);
    const decreaseHeight = () => setHeight(height - 30);
    const enhanceWidth = () => setWidth(width + 30);
    const decreaseWidth = () => setWidth(width - 30);
    const rotateImage = () => setRotate(rotate + 30);
    
    // Function to change the background color
    const changeBackground = () => {
        const nextIndex = (colorIndex + 1) % colors.length;
        setBackgroundColor(colors[nextIndex]);
        setColorIndex(nextIndex);
    };

    return (
        <div style={{
            height: '350px',
            width: '350px',
            border: '2px solid red',
            marginLeft: '40%',
            marginRight: '46%',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '100px',
            backgroundColor: backgroundColor,
        }}>
            <div style={{
                height: '200px',
                width: '200px',
                border: '2px dotted black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img
                    src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/a8bf1a2c-259e-4e95-b2c2-bb995876ed63/a252bcd6-9a10-40be-bf99-1d850d2026e4.png"
                    alt="sorry"
                    style={{
                        height: `${height}px`,
                        width: `${width}px`,
                        border: '20px solid aqua',
                        transform: `rotate(${rotate}deg)`, // Fixed this line
                        transition: 'transform 0.5s',
                    }}
                />
            </div>
            <div>
                <button onClick={enhanceHeight}>Enhance Height</button>
                <button onClick={decreaseHeight}>Decrease Height</button>
                <button onClick={enhanceWidth}>Enhance Width</button>
                <button onClick={decreaseWidth}>Decrease Width</button>
                <button onClick={rotateImage}>Rotate</button>
                <button onClick={changeBackground}>Change Background</button>
            </div>
        </div>
    );
}

export default Imagemanipulation;