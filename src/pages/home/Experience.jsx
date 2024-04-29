import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Accordion from 'react-bootstrap/Accordion';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function MyExperience() {
  return (

    <section id="experience" className="experience-section">
      <div className="experience-box">
        <div className="experience-content">

          <h1 className="welcome--section--title">
            <span className="welcome--title--colour">
              <h3> Experience </h3></span> {" "}
          </h1>

          <MDBContainer className="py-5">
            <ul className="timeline">
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">Helios Retail Consulting Ltd</h5>
                <p className="text-muted mb-2">
                  <MDBIcon fas icon="map-marker-alt" /> {' '}
                  Oakville, ON
                </p>
                <p className="text-muted mb-2 fw-bold">May 2022 - October 2022</p>

                <Accordion >
                  <Accordion.Item eventKey="0"  >
                    <Accordion.Header>About the Company</Accordion.Header>
                    <Accordion.Body>
                      My first work term took place at Helios Retail Consulting Ltd. Helios Retail Consulting Ltd company focuses on Retail and Technology. They strive to provide customers with configuration and repairs of POS systems along with a real-time help desk that schedules appointments and addresses client concerns. The company offers onsite installation of technology for stores, staging for hardware equipment and break/fix services across Canada. 
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                      My role at Helios Retail Consulting Ltd was Helpdesk Coordinator. I was responsible for managing the help desk system and providing customer service to our clients through email and phone. I used a system called Zendesk to monitor and schedule service calls sent in by clients. Zendesk is a customer service platform that aids in managing customer interactions using a ticketing system. Through this, customers can send service tickets directly to the Helpdesk. My main responsibility was arranging the service calls for our clients through this ticketing system and coordinating with the various branches, such as McDonald’s, Circle K, etc., to ensure that all the repairs went successfully. <br/><br/>Additionally, I was in charge of maintaining and updating documentation. I used Microsoft Excel to create this documentation and keep myself organized. This documentation was used to create an End of Day report that I would email to our clients at the end of each work day. This role required technical skills along with soft skills such as communication and problem-solving. During my time at this company, I encountered new issues that clients would ask for assistance with every day, and with the help of my coworkers, I gained knowledge about customer service, communication, and efficient problem-solving.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Goals</Accordion.Header>
                    <Accordion.Body>
                      <ul >
                        <li className="goals"> <p className="fw-bold">Collaboration Skills</p></li>
                        <p className="text-muted mb-2">Prior to this work term, majority of the projects that I had completed were individual projects. During the term, I was determined to strengthen my collaboration skills by actively listening to my co workers, keeping myself accountable by doing my part in any project I was working on and allowing myself to see issues through other people’s perspectives instead of just my own. Reflecting back on my work term, I do not think that I had much work that involved working with a full team however, due to the fact that majority of my day was spent coordinating service calls with the technicians, clients, and stores, I feel that I have accomplished this goal and I will be able to use it in future work terms.</p>

                        <li className="goals"> <p className="fw-bold">Problem-Solving Skills</p></li>
                        <p className="text-muted mb-2">At the start of this work term I set a goal to improve my problem-solving skills. I had acquired a good amount of this skill from my classes at school however, This work term gave me the opportunity to put the expertise I had learned to use and polish it in a professional setting. In the beginning I knew very little on how to resolve issues between customers and clients and would rely on my supervisor for guidance. Over the 4 months that I spent at this company, I found myself relying less on my supervisor to solve problems and instead, I was able to come up with reliable solutions on my own. I developed a lot more independence and self-reliance when it came to resolving these issues. By the end of my term, I was able to provide quick and efficient solutions for our clients leaving them content with my service.</p>

                        <li className="goals"> <p className="fw-bold">Communication Skills</p></li>
                        <p className="text-muted mb-2">Due to the fact that I had no prior experience speaking with clients over the phone, when I first started this job term, I was anxious about my responsibilities as Helpdesk Coordinator so I set a goal to improve my communication skills. Throughout the time I spent at the company, I became more relaxed talking to clients and was able to speak to them without reciting a script for comfort. I feel as though my communication skills have greatly improved and now, I will be able to communicate anything I need to my future co-workers so the task at hand can be completed with no issues in this area.</p>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Conclusions</Accordion.Header>
                    <Accordion.Body>
                      This work term was my introduction to a job in the industry. It taught me various skills that I will now be able to apply to my future work terms. I gained insight into the importance of communication and problem-solving in the workplace, and I now have a solid foundation to successfully complete the remainder of my co-op work terms. Furthermore, I now know the types of challenges that I will be faced with in the workplace and I am better equipped to handle them.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                {/* job 2 */}

              </li>


              <li className="timeline-item mb-5">
                <h5 className="fw-bold">Rogers</h5>
                <p className="text-muted mb-2">
                  <MDBIcon fas icon="map-marker-alt" /> {' '}
                  Brampton, ON
                </p>
                <p className="text-muted mb-2 fw-bold">May 2023 - August 2023</p>



                <Accordion >
                  <Accordion.Item eventKey="0"  >
                    <Accordion.Header>About the Company</Accordion.Header>
                    <Accordion.Body>
                      My second work term took place at Rogers. Rogers is a leading technology and media company that has been serving Canadians for over 60 years. Rogers provides various services such as wireless, cable, internet and media. They aim to deliver fast, reliable networks in more places. The company started with Ted Rogers, who took a loan and purchased a radio station which ultimately resulted in Rogers. 
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                      My role at Rogers was a Defect Analyst along with Automation. The project I worked on was to upgrade the ERP system from on-prem to cloud.
                       <br/> <br/>As a Defect Analyst, I had various different responsibilities. Firstly, I was in charge of raising defects on JIRA on behalf of my team. Also, I was tasked with updating and following up on those defects. In addition, I was given the responsibility to create and maintain a Confluence page to organize defect-related information. Lastly, in this position, I was required to lead daily defect meetings and send a daily email regarding the status of ongoing test cases. <br/>   <br/>                  
                      In Automation, I executed our developer’s scripts using the UI Path application. Furthermore, I actively participated in daily stand up meetings and provided the status of the executions I was handling. Also, I validated execution results by referring to test evidence. At the end of each day, I created a detailed report with the outcomes.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Goals</Accordion.Header>
                    <Accordion.Body>
                    <ul >
                        <li className="goals"> <p className="fw-bold">Oral Communication</p></li>
                        <p className="text-muted mb-2">From my last work term, I had improved my communication skills. However, for this term I had set a goal for myself to become more confident in communicating tasks and responsibilities with my coworkers. This work term, I had various opportunities to do so. One main example of how I reached my goal was when I was given the responsibility to lead the daily meetings for the defect analyst team. For each meeting, I had to ensure that I effectively communicated the intent of the meeting and touched on all the topics that were needed for that work day. In doing so, I significantly increased my confidence in my ability to express specific tasks and responsibilities to large groups of people.</p>

                        <li className="goals"> <p className="fw-bold">Problem-Solving</p></li>
                        <p className="text-muted mb-2">I set a goal for myself at the beginning of the term to observe how my co-workers dealt with problems so I could implement those strategies in my work. As a defect analyst, I was able to identify issues and provide follow-ups to my team regarding deadlines or potential fixes from developers. On the automation side, I ran the developer’s scripts and identified bugs during execution. I worked with my coworkers to produce a solution to these bugs. In doing these things, I was able to analyze issues, efficiently find solutions, and in turn, acquired new approaches to problem-solving.</p>

                        <li className="goals"> <p className="fw-bold">Inquiry & Analysis</p></li>
                        <p className="text-muted mb-2">I set a goal for myself to improve my inquiry and analysis skills. I wanted to ensure that I was comfortable asking questions regarding the task at hand so I could complete it to the best of my ability with little to no mistakes. During the term, I made sure to ask questions about my responsibilities. At first I was hesitant but as the term went on, I was fully comfortable with voicing my questions. Because of this, I executed all of my tasks efficiently and correctly with minimal mistakes. I also found that by the end of my work term, I was able to answer my own questions and I did not rely as heavily on my coworkers to guide me. Now I will be able to apply this to future jobs as well as my school work.</p>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Conclusions</Accordion.Header>
                    <Accordion.Body>
                      Working at Rogers gave me a strong introduction to the technology industry. I noticed a significant improvement in certain skills. My communication abilities improved as I worked with different teams, my problem-solving improved as I worked with defects and automation and my inquiry and analysis skills improved as I made a conscious effort to ask detailed questions. Moreover, I enhanced my technical skills and was able to apply things that I learned in school to practical situations in the workplace. Rogers has not only aided me in gaining valuable skills but also provided me with a base for my future career in the technology field. I am truly grateful for having the opportunity to work there.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </li>
              <li className="timeline-item mb-5">
                <h5 className="fw-bold">First National Financial LP</h5>
                <p className="text-muted mb-2">
                  <MDBIcon fas icon="map-marker-alt" /> {' '}
                  Toronto, ON
                </p>
                <p className="text-muted mb-2 fw-bold">January 2024 - August 2024</p>
                <Accordion >
                  <Accordion.Item eventKey="0"  >
                    <Accordion.Header>About the Company</Accordion.Header>
                    <Accordion.Body>
                      My third work term took place at First National Financial LP. First National Financial LP is one of Canada’s largest non-bank lender, originating and servicing both commercial and residential mortgages since 1988. They offer a wide variety of mortgage products that are suited to a variety of different clients. Over the last 30 years, First National has grown to become a recognized and respected leader in real estate financing.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                    My role as a QA Manual Tester at First National involved crucial responsibilities to ensure the quality and reliability of our software products. One of my primary obligations was to work directly with the development team to build and implement thorough test cases and strategies that adhered to project specifications. As part of this, I completed comprehensive manual testing of software programs to find any defects, bugs, and discrepancies in terms of execution, usability, and efficiency. Additionally, I used Azure DevOps to record test cases and submit defects or bugs so that they could be addressed in an effcient and effective manner. <br/> <br/> In addition to manual testing, I actively participated in team meetings and quality assurance initiatives to contribute to process improvements and best practices within the organization. This role required strong analytical and problem-solving skills, as well as excellent communication and collaboration abilities to work effectively with cross-functional teams. Overall, my exoerience as a QA Manual Tester consisted of an assortment of technical testing jobs, project collaboration, and ongoing learning to improve testing methods and techniques.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Goals</Accordion.Header>
                    <Accordion.Body>
                    <ul >
                        <li className="goals"> <p className="fw-bold">Technological Literacy</p></li>
                        <p className="text-muted mb-2">Throughout my work term, I dedicated myself to improving my technological literacy in the testing field. Attending daily stand up meetings and attentively listening to my coworkers' discussions helped me acquire useful insights into various testing technologies and methods. By learning these technologies I not only got a better grasp of them, but I also felt more confident in tackling tasks that required them. One of the most important indicators of my progress was the ability to work on projects without continually asking assistance, displaying my growing expertise and knowledge in the technological components of QA testing. </p>

                        <li className="goals"> <p className="fw-bold">Teamwork</p></li>
                        <p className="text-muted mb-2">My goal of working efficiently and successfully in a team was an important focus during my work term. To do this, I emphasized open communication with my team and other co-workers, while taking steps to address any difficulties or questions as soon as possible. Actively listening to my team members' thoughts and requirements enabled me to match my efforts with the team's goals and priorities for each sprint. By the end of the work term,  I observed tangible progress in team projects that I contributed to, and receiving positive feedback from my team members validated my efforts in performing effectively in a team environment.</p>

                        <li className="goals"> <p className="fw-bold">Oral Communication</p></li>
                        <p className="text-muted mb-2">Improving my oral communication skills in a professional context was a continual goal during my work term. I actively engaged in team conversations, contributed thoughts, and asked specific questions in order to make a significant contribution. When faced with obstacles or concerns, I requested direction and explanation from my team members, which helped me progress in this area. Monitoring my involvement and communication throughout daily scrum sessions was a clear indication of my improvement because by the end of the work term, I gained confidence and felt more comfortable delivering ideas with clarity in these meetings as well as overall communication with my co-workers.</p>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Conclusions</Accordion.Header>
                    <Accordion.Body>
                    My work at First National Financial LP as a QA Manual Tester has made a significant contribution to my career development. By exploring a variety of testing tools, I was able to meet my goal of improving technology literacy. I also improved my teamwork and oral communication skills  through active engagement with cross-functional teams. This experience has given me a solid foundation for future success in the technology and finance sectors. My exposure to a variety of testing settings, real-world projects, and industry best practices has given me the knowledge and skills I need to successfully handle challenging situations and make valuable contributions to my future endeavors. I am grateul to First National for providing me the opportunity to learn and grow throughout this work term and I am confident that this experience will aid me in my career going forward.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </li>
            </ul>
          </MDBContainer>


        </div>

      </div>

    </section>
  );
}



