import React, { useState } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-sign-up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {

    const [member, setMember] = useState(true);

    return (
        <div >
            {
                member ?
                <div className="sign-in-and-sign-up">
                    <SignIn />
                    <span style={{marginTop:'20px'}}>Don't have yet an account?</span>
                    <span className="sign-up-here" onClick={() => setMember(!member)}>Sign up here</span>
                </div>
                :
                <div className="sign-in-and-sign-up">
                    <SignUp/>
                    <span style={{marginTop:'20px'}}>Already have an account?</span>
                    <span className="sign-up-here" onClick={() => setMember(!member)}>Sign in here</span>
                </div>
            }
        </div>
    )
}

export default SignInAndSignUpPage;