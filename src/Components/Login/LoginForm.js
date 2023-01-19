import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

import { emailVerifier, passVerifier } from '../../services/authValidator';

function LoginForm() {

	const [userDetail, setUserDetail] = useState({ email: "", password: "" })

	let name;
	let value;
	const handleInput = (e) => {
		e.preventDefault()
		console.log(e);
		name = e.target.name
		value = e.target.value;

		setUserDetail({ ...userDetail, [name]: value });
	}

	const navigator = useNavigate()

	const appNavigation = (comReplacement) => {
		console.log("button is clicked");
		navigator("/", { replace: comReplacement })
	}

	const authVerifier = (email, password) => {
		if (emailVerifier(email) && passVerifier(password)) {
			return true
		} else {
			return false
		}
	}

	const [popup, setPopup] = useState(false);

	const handleClickOpen = () => {
		setPopup(!popup);
	}

	const handleClosePopup = () => {
		setPopup(false);
	}

	return (
		<div id="login" className="head-containt">
			<div className="container-fluid">
				<div className="row">
					<div className='col-lg-8 col-md-7 form-img-part'>

					</div>
					<div className='col-lg-4 col-md-5  form-field-part'>
						<form className="form-containt">
							<h3 className="form-heading-txt mb-5">Login to Continue</h3>

							<div className='wrap-input-part'>
								{/* <label className="label-txt">Mobile Number</label> */}
								<input className="input-txt form-control" type="tel" name="email" onChange={(e) => { handleInput(e) }} placeholder="Mobile Number" />
							</div>

							{/* <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
								<input className="input100" type="text" name="email" onChange={(e) => {handleInput(e)}}/>
								<span className="focus-input100"></span>
								<span className="label-input100">Email</span>
							</div>


							<div className="wrap-input100 validate-input" data-validate="Password is required">
								<input className="input100" type="password" name="password" onChange={(e) => {handleInput(e)}} />
								<span className="focus-input100"></span>
								<span className="label-input100">Password</span>
							</div> */}

							<div className="btn-submit-part">
								<button className="form-btn my-4"
									onClick={(e) => {
										handleClickOpen()
										console.log("button clicked outsider");
										e.preventDefault()
										console.log(userDetail);
										handleInput(e)
										if (authVerifier(userDetail.email, userDetail.password)) {
											appNavigation(true)
										} else {
											console.log("errors");
										}

									}}
								>
									Get OTP
								</button>
							</div>

						</form>
						<div>
							{popup ?
								<div className='popup-main'>
									<div className='popup-box'>
										<div className='popup-info' >
											<i class="fa-solid fa-left-long icon-edit" onClick={handleClosePopup}></i>
										</div>
										<div className='popup-containt'>
											<h3 className='popup-heading-txt'>Verify OTP</h3>
											<form className='otp-form'>
												<input class="form-control-otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
												<input class="form-control-otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
												<input class="form-control-otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
												<input class="form-control-otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
												<input class="form-control-otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
												<input class="form-control-otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
											</form>
											<hr />
											<button className='popup-btn'>Sign in</button>
										</div>
									</div>
								</div>
								: " "}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginForm;	