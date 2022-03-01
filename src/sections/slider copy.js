import Slider from "react-animated-slider";


<Slider className="slider-wrapper" autoplay={1000}>
{content.map((item, index) => (
  <div
    key={index}
    className="slider-content"
    style={{ background: `url('${item.image}') no-repeat center center` }}
  >
    <div className="inner">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button>{item.button}</button>
    </div>
    <section>
      <img src={item.userProfile} alt={item.user} />
      <span>
        Posted by <strong>{item.user}</strong>
      </span>
    </section>
  </div>
))}
</Slider>