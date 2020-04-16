import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <h2 className='mx-auto'>Register</h2>
                </div>
                <div className='row'>
                    <div className='card p-3 mx-auto' style={{width:'400px'}}>
                        <h5 className='mx-auto mb-4'>Filled the form</h5>
                        <input type="text" className='form-control' placeholder='Email'/>
                        {/* <input type="text" className='form-control mt-3' placeholder='Phone'/> */}
                        <input type="text" className='form-control mt-3' placeholder='Password'/>
                        <input type="text" className='form-control mt-3' placeholder='Confirm Password'/>
                        <input type="button" className='btn btn-primary mt-5 mb-3' value='Submit'/>
                        <Link to='/login' className='mx-auto'>
                            <div>
                                Login
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
