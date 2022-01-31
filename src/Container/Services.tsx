import React from 'react';
import { useLocation } from 'react-router';

export const Services:React.FC=():JSX.Element=>{
    const location = useLocation()
    return(
        <h1>Services Page{console.log(location)}</h1>
    )
}