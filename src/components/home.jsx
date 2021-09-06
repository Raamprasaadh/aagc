import React from "react";

function Home({
    onChangeMode=()=>{}
}) {
    const menuItems =[{heading:"Aqua Products",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsum quidem odit minus placeat ex velit cum nisi, veniam mollitia error perferendis esse culpa nam recusandae pariatur hic aliquid? Maiores?",changeVal:"ap"},
    {heading:"Chitfund",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsum quidem odit minus placeat ex velit cum nisi, veniam mollitia error perferendis esse culpa nam recusandae pariatur hic aliquid? Maiores?",changeVal:"cs"},
    {heading:"Real estate and builders",desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ipsum quidem odit minus placeat ex velit cum nisi, veniam mollitia error perferendis esse culpa nam recusandae pariatur hic aliquid? Maiores?",changeVal:"rb"}]
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
        <img src={process.env.PUBLIC_URL +"/assets/images/15years.png"} alt="404"  style={{height:"30%", width:"100%",objectFit:"cover"}}/>
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
