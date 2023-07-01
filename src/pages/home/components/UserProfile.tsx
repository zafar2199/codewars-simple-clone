import { UserIcon } from "../../../components/icons";
import { useAuthContext } from "../../../context/AuthProvider";

const UserProfile = () => {
    const { user } = useAuthContext();
    return (
        <section className="user-profile">
            <div className="user-profile__content user-content">
                <div className="user-content__left">
                    <div className="profile-pattern">
                        <div className="profile-pattern__left">
                            <div className="kyu-pattern">
                                <div className="kyu-pattern__inside">
                                    <span className="kyu-pattern__text">
                                        {user?.ranks.overall.name}
                                    </span>
                                </div>
                            </div>
                            <span className="profile-pattern__text">
                                {user?.username}
                            </span>
                        </div>
                        <div className="profile-pattern__right">
                            <span className="profile-pattern__honor">
                                {user?.honor}
                            </span>
                        </div>
                    </div>
                    <div className="user-info">
                        <b>Name:</b>
                        <span>{user?.name ?? "Unknown"}</span>
                    </div>
                </div>
                <div className="user-content__right">
                    <div className="user-info">
                        <b>Total Completed Kata:</b>
                        <span>{user?.codeChallenges.totalCompleted}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
