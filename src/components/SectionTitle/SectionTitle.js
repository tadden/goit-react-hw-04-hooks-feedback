import React from 'react';
import s from './SectionTitle.module.css'

function SectionTitle({children}) {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Please leave feedback </h1>
            {children}
        </div>
    );
}

export default SectionTitle;