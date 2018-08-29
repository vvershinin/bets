import React from 'react';

import WindowResize from '../index';

const WindowResizeComponent = () => (
    <WindowResize
        onResize={ () => { /** do something */ } }
        debounceTime={ 500 }
    />
);

export default WindowResizeComponent;
