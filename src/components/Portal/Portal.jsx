import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Use a ternary operator to make sure that the document object is defined
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

// Use a ternary operator to make sure that the document object is defined
const el = typeof document !== `undefined` ? document.createElement('div') : null


function Portal({ children }) {


    useEffect(() => {
        
        portalRoot.appendChild(el);

        return () => {
            portalRoot.removeChild(el);
        }
    }, []);


    if(el) {
        return ReactDOM.createPortal(children, el);
    } else {
        return null;
    }

}

export default Portal;
