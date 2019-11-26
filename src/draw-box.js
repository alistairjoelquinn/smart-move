import React, { useEffect } from 'react'

export default function DrawBox() {
    let canvasBox;
    let c;
    let setX, setY;
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    console.log("width: ", width, " height: ", height);

    const setup = () => {
        canvasBox = document.querySelector('#sigbox');
    };
    const draw = (e) => {
        console.log("client X: ", e.clientX);
        console.log("offsetleft: ", canvasBox.offsetLeft);
        console.log(setX, setY);
        if(e.buttons != 1) return;
        c.strokeStyle = '#0c00f9';
        c.lineWidth = 4;
        c.beginPath();
        c.moveTo(setX, setY);
        updatePosition(e);
        c.lineTo(setX, setY);
        c.stroke();
    };
    const updatePosition = (e) => {
        setX = e.clientX - canvasBox.offsetLeft - (0.2 * width);
        setY = e.clientY - canvasBox.offsetTop - (0.2 * height);
    };

    useEffect(() => {
        (async () => {
            await setup();
        })();
        c = canvasBox.getContext('2d');
        canvasBox.addEventListener('mousedown', updatePosition);
        canvasBox.addEventListener('mouseenter', updatePosition);
        canvasBox.addEventListener('mousemove', draw);
    }, []);


    return (
        <React.Fragment>
            <canvas id="sigbox" width={500} height={200} ></canvas>
        </React.Fragment>
    )
}
