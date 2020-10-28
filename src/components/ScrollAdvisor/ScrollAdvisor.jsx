import React, { useRef, useState, useEffect, useCallback } from 'react';


function ScrollAdvisor({ children, offSet }) {

    const containerElement = useRef(null);

    const [play, setPlay] = useState(false);

    const handleScroll = useCallback(() => {
     
        
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

    }, [offSet, play]);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

    return () => {
        
        window.removeEventListener('scroll', handleScroll);

    };
    }, [handleScroll]);

    


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
