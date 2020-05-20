import React from 'react';

import { useAuth0 } from '../../auth/react-auth0-wrapper';

function Clientes() {

    const { logout } = useAuth0();

    return (
        <div>
            HELLO FROM TUTORIALS
            <button onClick={()=> logout()}>Logout</button>


        </div>
    );
}

export default Clientes;