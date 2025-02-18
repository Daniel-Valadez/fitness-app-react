import React, { useState } from "react";

import "./signupModal.css";

import LoginInput from "../../loginInput";

const SignUpModal = ({ closeModal, registerUser }) => {
	const [newUsername, setNewUsername] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [retypePassword, setRetypePassword] = useState("");

  const enableSubmission = () => {
    console.log("This has changed", retypePassword !== newPassword && newPassword.length > 0); 
    return retypePassword !== newPassword && newPassword.length > 0 ? 'true' : 'false'; 
  }

	const register = async (event) => {
		//Stop the page from reloading.
		event.preventDefault();

		//Fire the API call to register the user...
		try {
			const response = await fetch("/api/users", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: newUsername,
					password: newPassword,
				}),
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		} catch (error) {
			console.log("This is an error", error);
		}
	};

	return (
		<div className="signupModal">
			<div className="modalBackground" onClick={closeModal}></div>
			<div className="modalCard">
				<form className="signupForm" onSubmit={register}>
					<LoginInput
						type="text"
						label="NewUsername"
						onChangeHandler={({target}) => setNewUsername(target.value)}
						value={newUsername}
					/>

					<LoginInput
						type="password"
						label="NewPassword"
						onChangeHandler={({target}) => setNewPassword(target.value)}
						value={newPassword}
					/>

					<LoginInput
						type="password"
						label="RetypePassword"
						onChangeHandler={({target}) => setRetypePassword(target.value)}
						value={retypePassword}
					/>

					<div className="buttonRow">
						<button type="button" onClick={closeModal} className="closeButton">
							Close
						</button>

						<button
							type="submit"
							//disabled={!(retypePassword !== newPassword || newPassword.length == 0)}
							className="registerButton"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpModal;
