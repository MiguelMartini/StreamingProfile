import CreateProfileCss from './../componentsCSS/CreateProfile.module.css';
import businessMan from './../assets/businessMan.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreateProfile = () =>{ 
    const navigate = useNavigate();

    const [inputs, setInputs] = useState ({});

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({values, [name]: value}));
    }

    const handleSubmit = (event)=> {
        event.preventDefault();

        axios.post('http://localhost:80/profileApi/profile/save', inputs).then(function(response){
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
                        <label className={CreateProfileCss.LabelName}>Name profile: </label>
                        <input type="text" name="name" placeholder="insert name" className={CreateProfileCss.inputName} onChange={handleChange} />
                    </div>
                    <div className={CreateProfileCss.ButtonDiv}>
                        <button className={CreateProfileCss.Button}>Criar</button>
                    </div>
                </div>

            </form>
        </div>
        </>
    )
}
export default CreateProfile;