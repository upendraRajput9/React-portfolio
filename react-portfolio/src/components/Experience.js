import data from '../constants/constant';

const Experience = () => {
  let { experience } = data;
  

  return (
    <>
      <h2>Experience</h2>

      <div className='flex wrap '>
        {experience.map((exp) => {
          return (
            <article
              className='media-flex-48 card blog-card flex-48 flex-col justify-between'
              key={exp.title}
            >
            
              <div>
              <span className='blog-card__title'>{exp.title}</span>
                <div className='blog-card__img-div '>
                    <img src={exp.url} alt='company'></img>
                 
                </div>
                <p className='blog-card__desc'>{exp.company}</p>
                <span className='blog-card__title'>{exp.period}</span>
               

                
              </div>

           
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
