import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <h2 className='mx-auto'>Login</h2>
                </div>
                <div className='row mt-5'>
                        <div className="card mb-3 mx-auto" style={{maxWidth: '540px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <img src="https://image.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg" 
                                    class="" 
                                    style={{height:'100%',width:'300px'}}
                                    alt="..."/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title ml-5 mb-5">Member Login</h5>
                                        {/* <p className="card-text">Email</p> */}
                                        <input type="text" className='form-control mb-3' placeholder='Email'/>
                                        {/* <p className='card-text'>Password</p> */}
                                        <input type="text" className='form-control mb-5'placeholder='Password'/>
                                        <input type="button" className='btn btn-primary' value='Login' style={{width:'100%'}}/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
