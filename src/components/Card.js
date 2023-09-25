const Card = ({ item }) => {

    const titleFormatted = item.title.slice(0, 200)
    const percentageDrop = ((item.price_strikethrough - item.price) / item.price_strikethrough * 100).toFixed(0)

              return (
        <div className="card">
            <div className="img-container">
                <img src={item.url_image} alt={item.title} />
            </div>

            <div className="text-container">
                <h5>{titleFormatted}...</h5>
                <p>Price Drop from {item.price_strikethrough} to {item.price}</p>
                <p>Rating : {item.rating}</p>
            </div>

            <div className="info-container">
                <div className="circle">{percentageDrop}%</div>
                <a href={`http://www.amazon.com/${item.url}`} target="_blank">Go!</a>
            </div>
        </div>
    )
}

export default Card