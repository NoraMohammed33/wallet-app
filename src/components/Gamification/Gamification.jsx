import React from 'react';
import Styles from "./Gamification.module.css"

export default function Gamification({ bons,onClose }) {
    console.log(bons)
    return (
        <div className={`${Styles.popup}`}>
            <h3>Congratulations You earned {bons} dollars</h3>
            <button className='btn btn-danger' onClick={onClose}>close</button>
        </div>
    );
}
