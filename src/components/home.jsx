import React from "react";

function Home({
    onChangeMode=()=>{}
}) {
    const menuItems =[{heading:"History",desc:"Our organisation was started by mr Jayaraman in year 20xx ..",changeVal:"a"},
    {heading:"Achievements",desc:"Our director have been honored by the responsibility of aiadmk district...",changeVal:"a"},
    {heading:"Chits and Schemes",desc:"Click on read more to know about our highly beneficial chits and schemes ... ",changeVal:"cs"}]
    function menuItem(item){
        return(
            <div className="menuItem">
              <div className="itemHead">
                <h1>{item.heading}</h1>
              </div>
              <div className="itemDesc">
                <p>{item.desc}</p>
              </div>
              <div className="readBtn">
                  <button onClick={()=>onChangeMode(item.changeVal)}>Read More</button>
              </div>
          </div>
        )
    }
  return (
    <div className="details">
      <div className="carousal">
        <img src="../assets/images/15years.png" alt="404"  style={{height:"30%", width:"100%",objectFit:"cover"}}/>
      </div>
      <div className="menuItems">
      {menuItem(menuItems[0])}
      {menuItem(menuItems[1])}
      {menuItem(menuItems[2])}
      </div>
    </div>
    /**
     * if needed a carousal
     * menu items links to history and achievements
     */
  );
}

export default Home;
