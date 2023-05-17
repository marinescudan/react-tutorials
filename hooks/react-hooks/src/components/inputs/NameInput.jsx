import React, { useState, useEffect, useRef } from 'react';

export const NameInput = function () {
    const [name, setName] = useState('');

    // This effect runs after every render and it enters an infinite loop
    // const [renderCount, setRenderCount] = useState(0);
    // useEffect(() => {
    //     setRenderCount(prevRenderCount => prevRenderCount + 1);
    // });

    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </div>
    );
}