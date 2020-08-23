import React from 'react'

import './style.css'

interface BoxProps {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
}

const Box:React.FC <BoxProps> = (BoxProps) => {
    return(
        <div className="box" style={{borderRadius: `${BoxProps.top}% ${BoxProps.right}% ${BoxProps.bottom}% ${BoxProps.left}%`}}>
            <h1>Box</h1>
        </div>
    )
}

export default Box;