import React from 'react';
import WindowResize from '../index';
import WindowResizeHOC from '../windowResizeHOC';

export const WindowResizeExample = () => (
    <WindowResize
        onResize={ () => { } }
        debounceTime={ 500 }
    />
);

export const WindowResizeHOCExample = () => WindowResizeHOC(<div />);
