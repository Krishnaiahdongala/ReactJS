

import ProfileDetails from "./profiledata"
import { ListOfProfile } from "./profiledata"
import "../stylingcss/styling.css"

const ProfileComponent=()=>{

   
   const{name,ImageUrl,phoneNumber,email,imageDimensions}=ProfileDetails

    return(

        <div className="container">

            <img src={ListOfProfile[0].ImageUrl}
             alt={`Salaar ${ListOfProfile[0].name}`}
             width={ListOfProfile[0].imageDimensions.width}
              height={ListOfProfile[0].imageDimensions.height}/>
            <h4>{ListOfProfile[0].name}</h4>
            <h4>{ListOfProfile[0].phoneNumber}</h4>
            <h4>email:{ListOfProfile[0].email}</h4>

            <img src={ImageUrl}
             alt={`Devara ${name}`}
             width={imageDimensions.width}
              height={imageDimensions.height}/>
            <h4>{name}</h4>
            <h4>{phoneNumber}</h4>
            <h4>email:{email}</h4>

            <img src={ListOfProfile[1].ImageUrl}
             alt={`a beauty girl ${ListOfProfile[1].name}`}
             width={ListOfProfile[1].imageDimensions.width}
             height={ListOfProfile[1].imageDimensions.height}/>
            <h4>{ListOfProfile[1].name}</h4>
            <h4>{ListOfProfile[1].phoneNumber}</h4>
            <h4>email:{ListOfProfile[1].email}</h4>

            
            <img src={ListOfProfile[2].ImageUrl}
             alt={`a beauty girl ${ListOfProfile[2].name}`}
             width={ListOfProfile[2].imageDimensions.width}
              height={ListOfProfile[2].imageDimensions.height}/>
            <h4>{ListOfProfile[2].name}</h4>
            <h4>{ListOfProfile[2].phoneNumber}</h4>
            <h4>email:{ListOfProfile[2].email}</h4>

        </div>
    )
}
export default ProfileComponent