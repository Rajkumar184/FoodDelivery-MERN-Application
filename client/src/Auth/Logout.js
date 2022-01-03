import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const Logout = () => {
	const cookies = new Cookies();
	const history = useHistory();

	const LogoutFunction = async () => {
		try {
			await axios.get("/logout");

			cookies.remove("isLogin");

			history.push("/login");
			return toast.success("Logout Successfully!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		} catch (error) {
			return toast.error(error.response.data.message, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	useEffect(() => {
		LogoutFunction();
	});
	return <></>;
};

export default Logout;
