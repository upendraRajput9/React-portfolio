const PersonalInformation = () => {
  return (
    <>
      <h2>Personal Information</h2>

      <div>
        <h3 className='mb-5 about-heading'>
          Hello, my name is Upendra Rajput. I'm MERN Stack Developer.
        </h3>
        <p className='mb-3'>
          I started my coding career about 1 year ago. In the start I learned
          about C,C++ , but later  I found JavaScript more
          intresting than C and C++ so switched to JavaScript.{' '}
        </p>
        <p className='mb-3'>
          I got campus placement in Siemens Technology and Services Pvt. Ltd. as Software Developer.
          there i have worked on various technologies and learnt lot of new things in 2.5 years of span.{' '}
        </p>
        <p className='mb-3 '>
          First I did JavaScript Course on FreeCodeCamp.org website. Later on I
          learned about DOM manipulation using JS. Did some practice to improve
          my HTML and CSS skills. For Database I learned many commands in
          MongoDB. Later I started learning NodeJS/ExpressJS for backend at that
          time I learned about how to write APIs and how to connect to Database.
        </p>
        <p className='mb-3'>
          For Frontend I learned React. I personally found react more useful.
          In React I learned about Components, State, Props,
          Context-API, HOC's, Redux, Hooks.
        </p>
        <p className='mb-3'>
          Completed many full fledged Personal Projects using ExpressJS and
          React.You can check my projects by clicking Projects link.
        </p>

        <p className='mb-3'>Connect me :-</p>
        <ul className='flex about-nav'>
          <li>
            <a
              href='https://twitter.com/asvindraRajpoot2'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>

          <li>
            <a
              href='https://hashnode.com/@Asvindra'
              target='_blank'
              rel='noreferrer'
            >
              <i className="fas fa-h-square"></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/asvindra-rajpoot-4a4377112/'
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
