import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from '../Slice/authSlice';
//import { logoutAsync } from "../Slice/authapiSlice";

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        const logoutUser = async () => {
            try {
                //await dispatch(logoutAsync());
                dispatch(logout());
                //toast.success("Logged out successfully");
                navigate('/');


            } catch (error) {
                navigate("/");
            }
        };

        logoutUser();
    }, [navigate, userInfo.details._id]);


    return (
        <div>Logging out ... </div>
    );
};

export default Logout;
