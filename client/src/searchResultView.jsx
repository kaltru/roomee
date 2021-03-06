import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const SearchResultView = ({listing, onTitleClick}) => (
  <div className="search-result">
    <img src="" alt="" />
    <Link to="/house" style={{ textDecoration: 'none', color: '#888' }}>
      <h4 onClick={()=>onTitleClick(listing)}>
        {listing.title}
      </h4>
    </Link>
    <div>
      <h4>{listing.city}</h4>
      <h5>{listing.price}</h5>

      <div>
        {
          listing.photos.map((photoUrl) => {
            // cloundinary image sizes are manipulated by inserting arguments after the 'upload' part of the file parth
            // example: "http://res.cloudinary.com/dwysumxzw/image/upload/v1532558555/kog_r_full_shot_x2ggw7.jpg";
            // I'm not connected to the database yet and will need to test the lines below once we are
            const arr = photoUrl.split('upload/');
            const uploadWidth = 'upload/w_412/';
            const resizedPhotoUrl = arr.join(uploadWidth);

            <img src="`${resizedPhotoUrl}`" alt="picture of room for rent"></img>
          })
        }
      </div>
    </div>
  </div>
);

export default SearchResultView;
