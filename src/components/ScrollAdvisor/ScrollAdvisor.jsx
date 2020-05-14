import React, { useRef, useState, useEffect } from 'react';


function ScrollAdvisor({ children, offSet }) {

    const containerElement = useRef(null);

    const [play, setPlay] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

    return () => {
        
        window.removeEventListener('scroll', handleScroll);

    };
    }, [])

    const handleScroll = () => {
     
        
        const introPosition = containerElement.current.getBoundingClientRect().top;
        // console.log('introPosition: ', introPosition);

        const screenHeight = window.innerHeight;

        // console.log('screenHeight: ', screenHeight);        

        if (Number.parseFloat(introPosition + offSet) < Number.parseFloat(screenHeight)) {
            //console.log('ESTOY AQUI');
            if(!play) setPlay(true);

        } else if (introPosition  > screenHeight) {
            setPlay(false);
        }

    };


    return (
        <>
          {children(play, containerElement)}  
        </>
    )
}

ScrollAdvisor.defaultProps = {
    offSet: 0
}


export default ScrollAdvisor
