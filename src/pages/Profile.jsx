import { profiledata } from "../api/auth";
import { useEffect, useState } from "react";
import ProfileImage from '../assets/images/profileAvtar.jpg'
const Profile = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        async function fetchProfiles() {
            const data = await profiledata();
            if (data) setProfiles(data) // check the profiles
        }
        fetchProfiles();
    }, []);

    return (
        <div className="profile">
            <div>
                {profiles.length === 0 ? (
                    <div>
                        <img src={ProfileImage} alt="profileimg" className="profileImg" />
                        <p>No profiles found.</p>
                    </div>
                ) : (
                    <ul>
                        <img src={ProfileImage} alt="profileimg" className="profileImg" />
                        {profiles.map((profile, index) => (
                            <li key={index}>
                                <strong>Name:</strong> {profile.first_name} <br />
                                <strong>Phone:</strong> {profile.phone} <br />
                                <strong>Address:</strong> {profile.address}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

}


export default Profile;