import './Home.css'

export default function Home() {
  return (
    <>
      <div className="home-bd container">
        <img src="spices.png" alt="spices image" className='spices' />
        <img src="onion-and-tomato.png" alt="onion-and-tomato image" className='onion-and-tomato' />
        <div className="mid">
          <div className="mid-f">
            <p className='headr'>Take a taste <br /> Come join us.</p>
            <h2>Life is so endlessy delicious.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum aliquam quam velit enim atque optio iusto rerum perferendis neque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea velit error deserunt molestiae totam sunt temporibus sit ut vel.</p>
            <button className='explore-now'>Explore Now</button>
          </div>
            <img src="main-img.png" alt="sushi image" className='suhsi' />
           </div>
      </div>
    </>
  )
}
