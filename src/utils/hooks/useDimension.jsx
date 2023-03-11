import { useState, useEffect } from 'react';

export default function useDimension() {
    const [ dimension , setDimension ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', resizeWindow);

        function resizeWindow() {
            setDimension(window.innerWidth)
        }

        return () => window.removeEventListener('resize', resizeWindow);
    }, []);
  
    return { dimension }
}
