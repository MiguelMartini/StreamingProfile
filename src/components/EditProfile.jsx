import CreateProfileCss from './../componentsCSS/CreateProfile.module.css';
import businessMan from './../assets/businessMan.png';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditProfile = () =>{ 
    const navigate = useNavigate({});
    const [inputs, setInputs] = useState({})
    const {id} = useParams();

    useEffect(() =>{
        getProfile();
    }, [])

    function getProfile(){
        axios.get(`http://localhost:80/profileApi/profile/${id}`).then(function(response){
            console.log(response.data)
            setInputs(response.data);
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/profileApi/profile/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }

    return( 
        <>
        <div className={CreateProfileCss.Container}>
            {/* <h1>Creating Profiles</h1> */}
            <form onSubmit={handleSubmit}>
                <div className={CreateProfileCss.formDiv}>
                    <div className={CreateProfileCss.imgSelector}>
                        <button className={CreateProfileCss.button}>
                            <img src={businessMan} alt="businessManImg" />
                        </button>
                    </div>
                    <div className={CreateProfileCss.inputDiv}>
                        <label className={CreateProfileCss.LabelName}>Edit Name: </label>
                        <input type="text" name="name" value={inputs.name} onChange={handleChange} className={CreateProfileCss.inputName}/>
                    </div>
                    <div className={CreateProfileCss.ButtonDiv}>
                        <button className={CreateProfileCss.Button}>Editar</button>
                    </div>
                </div>

            </form>
        </div>
        </>
    )
}
export default EditProfile;