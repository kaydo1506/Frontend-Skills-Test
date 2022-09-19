import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import icon_white from './imgs/Icon_white.png';
import icon from './imgs/icon.png';
import carousel1 from './imgs/carousel1.jpeg';
import carousel2 from './imgs/carousel2.jpg';

function App() {
  const [current, setCurrent] = useState(0);
  const [cards, setCards] = useState({ card1: true, card2: false });
  const ref = useRef(null);

  const desired = (e) => {
    setCurrent(Number(e.target.id));
  };
  const toggleCard1 = () => {
    if (cards.card1 === false) {
      setCards({ card1: true, card2: false });
    }
  };
  const toggleCard2 = () => {
    if (cards.card2 === false) {
      setCards({ card1: false, card2: true });
    }
  };

  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out';
    ref.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <div className='App'>
      {/*Landing*/}
      <section className='landing'>
        <div className='container landing-flex'>
          <img src={icon_white} alt='icon' />
          <div>
            <Link to='history' spy={true} smooth={true}>
              01. HISTORY
            </Link>
            <Link to='team' spy={true} smooth={true}>
              02. TEAM
            </Link>
          </div>
        </div>
      </section>
      {/*Mid*/}
      <section className='mid'>
        {' '}
        <div className='container landing-flex'>
          <div className='landing-flex__2'>
            <img src={icon} alt='icon' />
            <h3>
              LOSANGELES <br />
              <span>MOUNTAINS </span>
            </h3>
          </div>

          <div>
            <Link to='history' spy={true} smooth={true}>
              01. HISTORY
            </Link>
            <Link to='team' spy={true} smooth={true}>
              02. TEAM
            </Link>
          </div>
        </div>
      </section>
      {/*History*/}
      <section className='history'>
        <div className='container'>
          <h1>01.</h1>
          <h2>HISTORY</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            omnis quas et blanditiis perspiciatis, ipsam exercitationem at nobis
            amet expedita itaque, ullam obcaecati inventore? Sunt quod assumenda
            similique obcaecati perspiciatis?
          </p>
        </div>
        <div className='wrapper'>
          <div className='frame'>
            <div className='box-container' ref={ref}>
              <img className='box' src={carousel1} alt='img1' />
              <img className='box' src={carousel2} alt='img1' />
              <img className='box' src={carousel1} alt='img1' />
              <img className='box' src={carousel2} alt='img1' />
              <img className='box' src={carousel2} alt='img1' />
              <img className='box' src={carousel1} alt='img1' />
              <img className='box' src={carousel2} alt='img1' />
              <img className='box' src={carousel1} alt='img1' />
              <img className='box' src={carousel1} alt='img1' />
              <img className='box' src={carousel2} alt='img1' />
              <img className='box' src={carousel1} alt='img1' />
              <img className='box' src={carousel2} alt='img1' />
            </div>
          </div>

          <div className='button-2-container'>
            {[0, 1, 2].map((num) => (
              <div
                className={`button-2 ${num === current && 'active'}`}
                onClick={desired}
                id={num}
                key={num}
              />
            ))}
          </div>
        </div>
      </section>
      {/*Team*/}
      <section className='team'>
        {' '}
        <div className='container team_flex'>
          <div>
            <h1>02.</h1>
            <h2>TEAM</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            omnis quas et blanditiis perspiciatis.
          </p>
        </div>
        <div className='team-body'>
          <div className='team-body__links'>
            <div className='container flex'>
              <div>
                <button
                  className={`${cards.card1 ? 'btn_active' : ''}`}
                  onClick={toggleCard1}
                >
                  MOUNTAIN 1
                </button>
              </div>
              <div>
                <button
                  className={`${cards.card2 ? 'btn_active' : ''}`}
                  onClick={toggleCard2}
                >
                  MOUNTAIN 2
                </button>
              </div>
            </div>
          </div>
          <div className='container'>
            {cards.card1 ? (
              <div className='team-body__card'>
                <span>SCHEDULE</span>
                <h4>25 Nov 2016 Vestibulum vivera</h4>
                <h4>28 Nov 2016 Vestibulum vivera</h4>
                <h4>18 Dec 2016 Vestibulum vivera</h4>
                <h4>7 Jan 2017 Vestibulum vivera</h4>
              </div>
            ) : (
              <div className='team-body__card'>
                <span>SCHEDULE</span>
                <h4>30 Nov 2016 Lorem Ipsum</h4>
                <h4>28 Nov 2016 Lorem Ipsum</h4>
                <h4>40 Dec 2016 Lorem Ipsum</h4>
                <h4>7 Jan 2017 Lorem Ipsum</h4>
              </div>
            )}
          </div>
        </div>
      </section>
      {/*Foot*/}
      <section className='mid footer'>
        {' '}
        <div className='container landing-flex'>
          <div className='landing-flex__2'>
            <img src={icon} alt='icon' />
            <h3>
              LOSANGELES <br />
              <span>MOUNTAINS </span>
            </h3>
          </div>

          <div>
            <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>{' '}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
