import Profiles from './Profiles';
import { useNavigate } from 'react-router-dom';

import EditSettings from './EditSettings';



import businessMan from './../assets/businessMan.png';
import pinkShirtMan from './../assets/pinkShirtMan.png';
import beachMan from './../assets/beachMan.png';
import thiefwithtshirt from './../assets/thiefwithtshirt.png';
import add from './../assets/add.png';

import profileCSS from './../componentsCSS/Profiles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ListProfile = () =>{

    const [profiles, setProfiles] = useState([]);

    useEffect(() =>{
        getProfiles();
    }, []);

    function getProfiles(){

        
        axios.get('http://localhost:80/profileApi/profiles/').then(function(response){
            console.log(response.data);
            setProfiles(response.data);
        });
    }

    const navigate = useNavigate();

    const handleAddProfile = () => {
        navigate('/profile/create');
    }

    return (
        <>
        <div className={profileCSS.profileContainer}>
        {profiles.map((profile, key) =>
            <div key={key}>
                {<Profiles title={profile.name} ProfileImg={businessMan}/>}
            </div>
            )}
            <div onClick={handleAddProfile}>
                {<Profiles title="Add profile" ProfileImg={add}/>}
            </div>

        </div>
        </>
    )
}

export default ListProfile;