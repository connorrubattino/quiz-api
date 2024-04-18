import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { UserRegistrationFormDataType } from '../types';
import { register } from '../lib/apiWrapper';

type SignUpProps = {}

export default function SignUp({}: SignUpProps) {

    const [userRegistrationFormData, setUserRegistrationFormData] = useState<UserRegistrationFormDataType>(
        {
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            confirm_password:''
        }
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserRegistrationFormData({...userRegistrationFormData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(userRegistrationFormData);

        let response = await register(userRegistrationFormData);
        if (response.error){
            console.error(response.error);
        } else {
            let newUser = response.data!
            console.log(`Congrats ${newUser.first_name} ${newUser.last_name} on creating your account!`)
        }
        
    }

    
    const disableSubmit = userRegistrationFormData.password.length < 5 || userRegistrationFormData.password !== userRegistrationFormData.confirm_password

  return (
    <>
        <h1 className="text-center m-5">Register Now!</h1>
        <Card>
            <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Label htmlFor='first_name'>First Name</Form.Label>
                    <Form.Control className='mb-2' id='first_name' name='first_name' placeholder='Enter First Name' value={userRegistrationFormData.first_name} onChange={handleInputChange}/>
        
                    <Form.Label htmlFor='last_name'>Last Name</Form.Label>
                    <Form.Control className='mb-2' id='last_name' name='last_name' placeholder='Enter Last Name' value={userRegistrationFormData.last_name} onChange={handleInputChange}/>

                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control className='mb-2' id='email' name='email' type='email' placeholder='Enter Email' value={userRegistrationFormData.email} onChange={handleInputChange}/>

                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control className='mb-2' id='password' type='password' name='password' placeholder='Enter Password' value={userRegistrationFormData.password} onChange={handleInputChange}/>

                    <Form.Label htmlFor='confirm_password'>Confirm Password</Form.Label>
                    <Form.Control className='mb-2' id='confirm_password' type='password' name='confirm_password' placeholder='Confirm Password' value={userRegistrationFormData.confirm_password} onChange={handleInputChange}/>


                    <Button disabled={disableSubmit} type='submit' variant='outline-primary' className='w-100 mt-3'>Register!</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}