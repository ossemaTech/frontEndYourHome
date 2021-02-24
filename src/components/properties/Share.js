import React from 'react'
import fb from './icons/fb-icon.png'
import twitter from './icons/twitter.png'
import linkedIn from './icons/linkedin.png'
import copy from './icons/copy.jpg'

const borderStyle = {
    borderRadius: 3
}

const Share = () => {
    return (
        <div className='d-flex justify-content-center share'>
            <div className='mr-2 box-social'>
                <button className='btn facebook'>Facebook</button>
                <img src={fb} alt="" />
            </div>
            <div className='mr-2 box-social'>
                <button className='btn twitter '>Twitter</button>
                <img style={borderStyle} src={twitter} alt="" />
            </div>
            <div className='mr-2 box-social'>
                <button className='btn linkedin '>LinkedIn</button>
                <img style={borderStyle} src={linkedIn} alt="" />
            </div>
            <div className='mr-2 box-social'>
                <button className='btn btn-dark copylink'>Copy Link</button>
                <img src={copy} alt="" style={borderStyle} />
            </div>
        </div>
    )
}

export default Share
