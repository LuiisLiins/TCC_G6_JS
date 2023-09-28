import React from 'react';

function App() {

    const [name, setName] = React.useState('Luis Lins');

    return (
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-login'>
                    <p>Meu nome é {name}</p>
                </div>
            </div>
        </div>    
    );

}

export default App;