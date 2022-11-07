import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const Dashboard = (props) => {
  return (
    <div className='media-hide  dashboard flex-30 text-center flex flex-col justify-between'>
      <div className=''>
        <div className='user-img font-0 text-center '>
          <img src='./upendra.png' alt='user-img-01' />
        </div>

        <h1 className='user-name'>Upendra rajput</h1>

        <h3>Kanpur ,Uttar Pradesh</h3>
        <nav className='flex jcc aic'>
          <ul className='flex dashboard-nav'>
            <li>
              <a
                href='https://github.com/upendraRajput9'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <i class='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/upendra-rajput-a8990921b/'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/UpendraRajput_'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>

            <li>
              <a
                href='https://medium.com/@upendrarajput9911'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-medium'></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav className='navbar'>
        <ul className='main-menu'>
          <NavLink
            to='/'
            className={
              props.location.pathname === '/' ? 'header-active-nav' : ''
            }
          >
            <li className='sub-menu'>Personal details</li>
          </NavLink>

          <NavLink to='/education' activeClassName='header-active-nav'>
            <li className='sub-menu'>Education</li>
          </NavLink>

          <NavLink to='/tech' activeClassName='header-active-nav'>
            <li className='sub-menu'>Tech-Stack</li>
          </NavLink>

          <NavLink to='/projects' activeClassName='header-active-nav'>
            <li className='sub-menu'>Personal Projects</li>
          </NavLink>

          <NavLink to='/blogs' activeClassName='header-active-nav'>
            <li className='sub-menu'>Blogs</li>
          </NavLink>
        </ul>
      </nav>

      <a
        href='./resume.pdf'
        target='_blank'
        rel='noreferrer'
        className='button btn-primary upper'
      >
        <i className='fas fa-cloud-download-alt'></i> Resume
      </a>
    </div>
  );
};

export default withRouter(Dashboard);
