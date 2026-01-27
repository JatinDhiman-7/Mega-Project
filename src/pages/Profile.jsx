
import { Lock, Phone, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProfileImage from '../assets/images/profileAvtar.jpg';
import { profiledata } from '../api/auth';


function Profile() {
    const [profiles, setProfiles] = useState([]);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        async function fetchProfiles() {
            const data = await profiledata();
            if (data) setProfiles(data);
        }
        fetchProfiles();
    }, []);
    
    const handleChangePassword = (e) => {
        e.preventDefault();
        console.log('Password change requested');
        setShowPasswordModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };
    
    const profile = profiles[0];

    return (
        <>
            <div className="profile-container">
                {/* Profile Picture */}
                <div className="profile-picture-container">
                    <img
                        src={profile?.avatar || ProfileImage}
                        alt="Profile"
                        className="profile-picture"
                    />
                </div>

                {/* User Info */}
                <div className="profile-info">
                    <div className="info-item">
                        <User className="icon" />
                        <div className="info-text">
                            <p className="label">Name</p>
                            <p className="value">{profile?.first_name || 'No name available'}</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="icon" />
                        <div className="info-text">
                            <p className="label">Phone Number</p>
                            <p className="value">{profile?.phone || 'No phone available'}</p>
                        </div>
                    </div>
                </div>

                {/* Change Password Button */}
                <button
                    onClick={() => setShowPasswordModal(true)}
                    className="change-password-btn"
                >
                    <Lock className="icon-small" />
                    Change Password
                </button>

                {/* No profiles fallback */}
                {profiles.length === 0 && (
                    <p className="no-profiles">No profiles found.</p>
                )}
            </div>

            {/* Change Password Modal */}
            {showPasswordModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h2>Change Password</h2>
                        <form onSubmit={handleChangePassword} className="modal-form">
                            <div className="form-group">
                                <label htmlFor="current-password">Current Password</label>
                                <input
                                    type="password"
                                    id="current-password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="new-password">New Password</label>
                                <input
                                    type="password"
                                    id="new-password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm New Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-actions">
                                <button
                                    type="button"
                                    onClick={() => setShowPasswordModal(false)}
                                    className="btn-cancel"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn-update">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
