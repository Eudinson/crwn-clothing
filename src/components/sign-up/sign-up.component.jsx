import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utility';

const SignUp = () => {

    const [signUp, setSignUp] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onInputSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = signUp

        if(password !== confirmPassword){
            alert("password don't match")
            return
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            setSignUp({ displayName:'', email:'', password:'', confirmPassword:'' })
        }catch(err){
            console.log(err.message)
        }
    }

    const onInputChange = (e) => {
        const { name, value } = e.target
        setSignUp(signUpState => ({...signUpState, [name] : value}))
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form action="" className="sign-up-form" onSubmit={onInputSubmit}>
                <FormInput
                    type = "text"
                    name="displayName"
                    value={signUp.displayName}
                    onChange={onInputChange}
                    label="Display Name"
                    required
                />

                  <FormInput
                    type = "email"
                    name="email"
                    value={signUp.email}
                    onChange={onInputChange}
                    label="Email"
                    required
                />

                  <FormInput
                    type = "password"
                    name="password"
                    value={signUp.password}
                    onChange={onInputChange}
                    label="Password"
                    required
                />

                  <FormInput
                    type = "password"
                    name="confirmPassword"
                    value={signUp.confirmPassword}
                    onChange={onInputChange}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">SIGN UP</CustomButton>

            </form>
        </div>
    )
}

export default SignUp;
