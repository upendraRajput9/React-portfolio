const PersonalInformation = () => {
  return (
    <>
      <h2>Personal Information</h2>

      <div>
        <h3 className='mb-5 about-heading'>
          Hello, my name is Upendra Rajput. I'm MERN Stack Developer.
        </h3>
        <p className='mb-3'>
          I learnd Full Stack Web Development from AltCampus.<br />
          I am comfortable with both Frontend and Backend.{' '}
        </p>
        <p className='mb-3 '>
          For Backend I learned Node.js, MongoDB, Express.js. Continued with
          learning Authentication, Authorization, OAuth and JWT, Socket.io
          and much more.
        </p>
        <p className='mb-3'>
          For Frontend I learned React, React Router, React Router Dom, Redux.
           Continued with Functional Components, Class Components,
            State, Props, Context API, HOC, Render Props , Hooks and much more.
        </p>
        <p className='mb-3'>
          Completed many full fledged Personal Projects using ExpressJS and
          React. You can check my projects by clicking Projects link.
        </p>

        <p className='mb-3'>Connect me :-</p>
        <ul className='flex about-nav'>
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
              href='https://www.facebook.com/Upendrarazput/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-facebook'></i>
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
        </ul>
      </div>
    </>
  );
};

export default PersonalInformation;
