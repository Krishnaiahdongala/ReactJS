import { Component } from "react";
import profileImage1 from "./krish.jpg"
import profileImage2 from "./rohi1.jpg"
import profileImage3 from "./patel.jpg"
import profileImage4 from "./pk1.jpeg"
import profileImage5 from "./Boss.jpg"





class ProfileList extends Component {

    state = {
        ProfileDetails: [
            {
                name: "krishna",
                id: 1,
                Details: "ReactJS Developer",
                imageUrl:profileImage1
            },
            {
                name: "rohith",
                id: 2,
                Details: "JavaScript Developer",
                imageUrl:profileImage2
            },
            {
                name: "maniPatel",
                id: 3,
                Details: "Front-end-web Developer",
                imageUrl:profileImage3
            },
            {
                name: "PavanKalyan",
                id: 4,
                Details: "Back-end Developer",
                imageUrl:profileImage4
            },
            {
                name: "RaviKumar",
                id: 5,
                Details: "Java Developer",
                imageUrl:profileImage5
            },
        ]
    }

    handleDetails=(data)=>{
        alert(data.id)
    }
    render() {

        return (

            <>

                <h2>profileInfo</h2>

                {
                    this.state.ProfileDetails.map((eachProfile) => {
                        return (
                            <div className="card" style={{width:400}}>
                            <img className="card-img-top" src={eachProfile.imageUrl} alt="Card image"/>
                            <div className="card-body">
                              <h2 className="card-title">{eachProfile.name}</h2>
                              <h4 className="card-text">{eachProfile.Details}</h4>
                              <button onClick={()=>{this.handleDetails(eachProfile)}}>see Id's</button>
                            </div>
                          </div>
                        )
                    })
                }




            </>
        )
    }
}
export default ProfileList