import { Link } from 'react-router-dom'
import '/src/shared/components/Header/Header.scss';
import { useState } from 'react';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';

export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false);

  return (
    <div className="header">
      <div className="menu" onClick={()=> setNavIsActive(true)}>
        <span className="icon-menu"></span>
      </div>
      <div className="user">
        <Link to="/auth" className="user-link">
          <span className="icon-coffee"></span>
        </Link>
      </div>
      {<HeaderMenu navIsActive={navIsActive} navClose={()=> setNavIsActive(false)} />}
    </div>
  );
};

