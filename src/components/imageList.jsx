import "./imageList.css";

const ImageBox = (props) => {
 return (
  <div className="image-list">
   {props.images.map((image)=>
    <div className="image-box" key={image.id}>
      <img src={image.urls.regular} alt={image.alt_description} className="image-box__image" loading="lazy" />
      <h3 className="image-box__title">{image.alt_description}</h3>
      <a href={image.links.html} target="_blank" rel="noopener noreferrer" className="image-box__link">View on Unsplash</a>
    </div>
  )}
  </div>
 );
}
export default ImageBox;