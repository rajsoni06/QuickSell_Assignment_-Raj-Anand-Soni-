import React from 'react'
import './Card.css';



/*const Card = ({ id, title, tags, status }) => {
  // Define a function to render tags
  const renderTags = () => {
    if (!tags || tags.length === 0) {
      return null;
    }

    return (
      <div className="cardTags">
        {tags.map((tag, index) => (
          <div key={index} className="tag color-grey">
            <span>•</span> {tag}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="cardContainer flex-gap-10">
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: 'uppercase' }} className="color-grey">
          {id}
        </span>
        <div className="imageContainer relative">
          <img
            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
            src="https://dpwishes.com/wp-content/uploads/2023/09/White-color-background-hacker-dp.jpg"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>

      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>

      {renderTags()} {/* Render tags if available 
    </div>
  );
};

// Define prop types for your component
Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
};

// Set default props for tags and status
Card.defaultProps = {
  tags: [],
  status: '',
};*/





const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://dpwishes.com/wp-content/uploads/2023/09/White-color-background-hacker-dp.jpg" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>


        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}



export default Card;