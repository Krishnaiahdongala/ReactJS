
import ShowDate from "./showdate"

const DateProps=()=>{

    function getDay(day){
   
        switch(day){
           case 0:
            return "sunday"
            case 1:
              return "monday"
              case 2:
            return "Tuesday"
            case 3:
              return "Wednesday"
              case 4:
            return "Thursday"
            case 5:
              return "Friday"
            case 6:
              return "Saturday"
    
              default:
                return "None"
        }
    }
     
    function getGreeting(hours){
           let greeting
      if(hours>=0 && hours<=11){
          greeting="good morning"
      }
      else if(hours>11&&hours<=16){
          greeting="good afternoon"
      }else if(hours>16&&hours<=20){
        greeting="good evening"
      }else{
        greeting="good night"
      }
      return greeting
    }
    
    function getYear() {
      const d = new Date();
      let year = d.getFullYear();
      return year;
    }

    return(
        <>

     <ShowDate day={getDay(new Date().getDay())}
         greetings={getGreeting(new Date().getHours())} year={getYear()}/>

        </>
    )
}
export default DateProps