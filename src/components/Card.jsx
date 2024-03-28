import "./Card.css"

const Card = ({ datas }) => {
  return (
    <div className="cards d-flex flex-wrap">
      {datas.map(data => (
        <div className="card mb-4" style={{ width: '18rem' }} key={data.id}>
          <img src={data.img} className="card-img-top" alt="..." style={{ height: '200px', width:"288px" }} />
          <div className="card-body">
            <h5 className="card-title">{data.topic}</h5>
            <br/>
            <p className="card-text"><span className="text-muted">by:</span>  {data.author}</p>
            <p className="card-text"><span className="text-muted">Date:</span> {data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
