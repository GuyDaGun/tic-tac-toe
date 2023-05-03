import './styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>Created by Guy Dagan</p>
      <p>
        Find me on
        <a href='https://github.com/GuyDaGun'>
          <i
            className='fa-brands
                        fa-github fa-lg'
          ></i>
        </a>
        <a href='https://www.linkedin.com/in/guy-dagan/'>
          <i className='fa-brands fa-linkedin fa-lg'></i>
        </a>
      </p>
    </footer>
  );
}
