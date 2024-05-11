import './Experiences.css';

const Experiences = () => {

    const experiences = [
        {
            active: 'yes',
            description: 'Software Development Engineer Intern @ Amazon'
        },

        {
            active: 'no',
            description: 'Undergraduate Teaching Assistant @ Stony Brook University'
        },

        {
            active: 'no',
            description: 'Software Engineering Intern @ AVOLTA Canada'
        },

        {
            active: 'no',
            description: 'Information Technology Aide @ NYC Citywide Administrative Services'
        }
    ]

    return (
        <div id='experience'>
            <div className='sub-header'>
            <h1>
                Experience
            </h1>
            </div>
        <div className='ExpContainer'>
            {experiences.map((experience, index) => {
                return (
                <div
                    key={index}
                    className={`item ${experience.active === 'yes' ? 'activeExperience' : 'inactiveExperience'}`}>
                    {experience.description}
                </div>
                );
            })}
        </div>
        <div className='divider'></div>
        </div>
    );  
};


export default Experiences

 
    // const experiences = [
    //     {
    //         date: "Dec 2023 - Present",
    //         position: "Undergraduate Teaching Assistant",
    //         employer: "Stony Brook University",
    //         description: ["● Led weekly recitation sessions for 30+ students, delivering comprehensive support for students ",
    //                       "● Collaborated with faculty and graded assignments, quizzes, and exams while providing constructive feedback ",
    //                       "● Maintained consistent schedule of weekly office hours to provide additional assistance and address student inquiries"
    //         ]
    //     },
    //     {
    //         date: "Jul 2023 - Aug 2023",
    //         position: "Software Engineering Intern",
    //         employer: "AVOLTA Canada",
    //         description: ["● Improved user registration and data retrieval with Flask and REST API, achieving a 17% reduction in retrieval time\n",
    //                       "● Refactored data validation methods, ensuring user’s data privacy during registration process\n",
    //                       "● Designed a structured SQLite database to securely store user details for over 22,000 active users\n"]
    //     },
    //     {
    //         date: "Jul 2023 - Aug 2023",
    //         position: "Information Technology Aide",
    //         employer: "NYC Citywide Administrative Services",
    //         description: ["● Delivered online conference support services for 25+ NYC agencies and government sites for meetings and online classes",
    //                       "● Provided technical support to 200+ end user accounts and devices at agency training center through Jira ticketing system",
    //                       "● Managed user re-authentication protocols, ensuring access to office accounts and maintaining data security"
    //                     ]
    //     }
    // ];

    // return (
    //     <div className='ExpContainer'>
    //       {experiences.map((experience, index) => (
    //         <div key={index} className='item'>
    //           <div className='ItemDate'>{experience.date}</div>
    //           <div className='ItemBody'>
    //             <div className='ItemEmployer'>{experience.employer}</div>
    //             <div className='ItemPosition'>{experience.position}</div>
    //             <br />
    //             {experience.description.map((bullet, bulletIndex) => (
    //                 <div key={bulletIndex} className='bulletPoint'>{bullet}</div>
    //             ))}
    //         </div>
    //         </div>
    //       ))}
    //     </div>
    //   );
    // };