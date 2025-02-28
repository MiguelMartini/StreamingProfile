
import profileCSS from './../componentsCSS/Profiles.module.css';

const Profiles = (props) =>{

    return (
        <>
            <div>
                <div className={profileCSS.profileImg}>
                    <button className={profileCSS.button}>
                        <img src={props.ProfileImg} alt="businessManImg" />
                    </button>
                </div>
                <div>
                    <h1 className={profileCSS.nameProfile}>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default Profiles;