import React from 'react'

const RealisationComp = (props) => {
    return (
        <>
            <div>
                <img className='realisationPageImage' src={props.imageLink} alt={props.client}></img>
            </div>
            <div className='realisationPageText'>
                <div className='realisationPageDes'>{props.category}</div>
                <div className='realisationClient'>{props.client}</div>
                <button onClick={props.openDialogFunc} className='btn btn-danger submitBtn decouvrirBtn'>
                    Découvrir
                </button>
            </div>
        </>
    )
}

export default RealisationComp