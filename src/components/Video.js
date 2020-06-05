import React from 'react'
import {Link} from 'react-router-dom'

 function Video(props) {
     const ch = props.match.params.id;
     const category = props.match.params.category;

    const Animation=(
        <div>
            <h1>Animation category</h1>
            <ul>
                <li>
                    <Link to="/video/animation/action">Action</Link>
                </li>
                <li>
                     <Link to="/video/animation/romance">Romance</Link>
                </li>
                <li>
                  <Link to="/video/animation/comdey">Comedy</Link>
                </li>
            </ul>
        </div>
    );
    const Movie=(
        <div>
            <h1>Movie category</h1>
            <ul>
                <li>
                    <Link to="/video/movie/advanture">Adventure</Link>
                </li>
                <li>
                     <Link to="/video/movie/crime">Crime</Link>
                </li>
                <li>
                  <Link to="/video/movie/documantery">Documentary</Link>
                </li>
            </ul>
        </div>
    );
     
    return (
        <div>
            <ul>
                <li>
                <Link to ="/video/animation"> Animation</Link> 
                </li>
                <li>
                    <Link to="/video/movie">Movie</Link>
                </li>
            </ul> 
            {ch === "animation"? Animation : null}
            {ch === "movie"? Movie : null}
            {category === undefined ? ( <h1>Please select a topic</h1>  )  : (<h1>{category}</h1> ) }
           
        </div>
    );
}
export default Video