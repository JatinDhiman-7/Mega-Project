import { profiledata } from "../api/auth";
import { useEffect, useState } from "react";
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
        <div>
            <h2>User Profiles</h2>
            {profiles.length === 0 ? (
                <p>No profiles found.</p>
            ) : (
                <ul>
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
    );

}


export default Profile;