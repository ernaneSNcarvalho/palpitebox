import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4 text-center font-bold text-white'>
            <div className='container mx-auto'>
                Projeto desenvolvido por: <a className='hover:underline'>Ernane Souza</a> /
                <a className='hover:underline' href="https://www.linkedin.com/in/ernane-carvalho-3a70b51b5/">Linkedin</a> /
                <a className='hover:underline' href="github.com/ernaneSNcarvalho">Github</a>
                <div className='mt-4'>
                <img className='inline p-4' src="/semanafsm.png" />
                <img className='inline p-4' src="/devpleno.png" />
                </div>
            </div>

        </div>
    )
}

export default Footer