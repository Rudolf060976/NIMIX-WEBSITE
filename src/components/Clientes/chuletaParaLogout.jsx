import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function Clientes() {

    const { logout } = useAuth0();

    return (
        <div>
            HELLO FROM TUTORIALS
            <button onClick={()=> logout({ returnTo: window.location.origin })}>Logout</button>

        </div>
    );
}

export default Clientes;