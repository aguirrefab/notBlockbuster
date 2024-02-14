import devLogo from '../../assets/images/duck.jpg';
import './Header.css';

export const Header = () => {
  return (
    <>
      <div>
        <a href='https://github.com/aguirrefab' target='_blank'>
          <img src={devLogo} className='brand-img' alt='@aguirrefab' />
        </a>
      </div>
      <div>
        <h1>!Blockbuster</h1>
      </div>
    </>
  );
};
