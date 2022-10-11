import React from "react";

const Tour = ({id, city, img, name, activity, deleteTour}) =>{
    return(
        <article className="single-tour">
            <img src={img} alt={city} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                </div>
                <p>
                    {activity}
                </p>
                <button className="delete-btn" onClick={()=> deleteTour(id)}>
                    Not Interested
                </button>
            </footer>
        </article>
    )
}

export default  Tour; 