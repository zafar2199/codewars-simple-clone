import { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { useAuthContext } from "../../context/AuthProvider";
import { baseUrl, getUserUrl } from "../../constants/urls";
import { IUserResponse } from "./types";
import CodewarsImg from "../../assets/images/codewarsImg.png";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const { setUser } = useAuthContext();

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.get<IUserResponse>(
                baseUrl + getUserUrl(userName)
            );
            const data = res.data;
            setUser(data);
        } catch (error) {
            alert(`${userName}: bunday username topilmadi`);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-page__container">
                <div className="login-card">
                    <div className="login-card__img">
                        <img src={CodewarsImg} alt="codewars iamge" />
                    </div>

                    <form className="login-form" onSubmit={submitHandler}>
                        <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            placeholder="Codewars user name"
                            className="login-form__input"
                        />
                        <button
                            className={clsx(
                                "login-form__btn",
                                loading && "loading"
                            )}
                            disabled={loading}
                        >
                            KIRISH
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
