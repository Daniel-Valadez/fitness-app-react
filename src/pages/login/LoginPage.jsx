import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";

//Functional Components
import LoginInput from "../../components/loginInput";
import Carousel from "./components/Carousel";

//Modals
import SignUpModal from "../../components/modals/signup/SignUpModal";

//Store
import { logIn } from "../../state/features/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showSignup, setShowSignup] = useState(false);

	const updateUsername = ({ target }) => {
		setUsername(target.value);
	};

	const updatePassword = ({ target }) => {
		setPassword(target.value);
	};

	const toggleModal = () => {
		setShowSignup(!showSignup);
	};

	const dispatch = useDispatch();

	const validateCredentials = async (event) => {
		event.preventDefault();
		/* try {
			let url = `/api/users`;
			//const response = await fetch(url);
			const response = await fetch(url, {
				method: "POST", 
				headers: {"Content-Type": "application/json"}, 
				body: JSON.stringify({
					email: username, 
					password: password, 
				})
			})

			const data = await response.json();

			console.log("This is the data", data);

			//This is where I should call the login reducer. 

		} catch (error) {
			console.log("this is the error", error);
		} finally {
			console.log("finally");
		} */

		dispatch(
			logIn({
				email: username,
				password: password,
				fullName: username,
			})
		);
	};

	return (
		<div className="loginPage">
			<div className="loginHeader">
				<FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
				<h1>Workouts Built For You, By You</h1>
			</div>

			<div className="loginPageInner">
				<form className="userCredentials" onSubmit={validateCredentials}>
					<p>
						<em>Please enter your account details.</em>
					</p>

					<LoginInput
						label="Username"
						type="text"
						value={username}
						onChangeHandler={updateUsername}
					/>

					<LoginInput
						label="Password"
						type="password"
						value={password}
						onChangeHandler={updatePassword}
					/>

					<button type="button" className="modalButton">
						Forgot Password
					</button>

					<button type="submit" className="loginButton">
						Sign In
					</button>

					<button type="button" className="modalButton" onClick={toggleModal}>
						Create Account
					</button>
				</form>

				<Carousel />
			</div>

			{showSignup ? (
				<SignUpModal
					closeModal={toggleModal}
					registerUser={(event) => {
						event.preventDefault();
					}}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default LoginPage;
