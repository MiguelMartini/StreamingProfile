import { useState } from 'react';
import gear from './../assets/userSetting.svg';
import EditSettingsStyle from './../componentsCSS/EditSettings.module.css';


const EditSettings = () =>{
    const [editMode, setEditMode] = useState(false);
    console.log(editMode);

    return (
        <>
            <div className={EditSettingsStyle.container}>
                <button className={EditSettingsStyle.ButtonStyle} onClick={()=> setEditMode(!editMode)}>
                    <img src={gear} alt="UserSettings" className={EditSettingsStyle.gear} />
                </button>
            </div>
        </>
    )
}

export default EditSettings;