const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
  <img src={src} style={{height:"200px",width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt id perferendis doloremque, ea est commodi impedit ab consequuntur sequi quaerat itaque quasi laudantium cupiditate suscipit numquam eum tenetur. Officiis, et ab. Modi inventore, quis impedit reprehenderit provident eum magni dolorum a repellat dolores nobis laudantium ratione quo similique animi maxime minima earum est atque fuga corrupti ut voluptas! Dolore, maxime? Cum dolore beatae dicta incidunt blanditiis et nesciunt voluptatum voluptatibus. Architecto assumenda facere, sint reiciendis officiis error ipsum eveniet, soluta rem maiores aliquam dignissimos nisi placeat minus. Eaque, aliquam!"}</p>
    <a href={url} className="btn" style={{background:"linear-gradient(to right top, #2c11e3, #7f25e5, #af41e7, #d45eeb, #f47ef1)",backgroundRepeat:"no-repeat", color: "white"}}>Raed More</a>
  </div>
</div>
  )
}

export default NewsItem
