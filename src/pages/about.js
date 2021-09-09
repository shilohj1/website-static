import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>My Resume</h2>
                    <p>Results driven and diligent Full Stack Developer with 6+ years experience in software design, development, testing and integration.
                        Currently designs and develops Microservices using Spring Boot framework module, following domain driven design. In previous roles, performed
                        system implementation and software testing to support technical services consulting tasks.
                    </p>

                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <h3>Work Experience</h3>
                            <ul>
                                <li> ***BOOZ ALLEN HAMILTON*** </li>
                                <li>Oct. 2019 - Present</li><br />
                                <li>FULL STACK DEVELOPER</li>
                                <br />
                                <ul>
                                    <li>Design, develop, deploy RESTFUL APIs using Java Spring Boot to provide interface for nuclear effects capabilities to allow end users to submit parameters to the service, routing them to correct capability and returning appropiate results. </li>
                                    <br />
                                    <li>Proficient using MongoDB database concepts such as locking, transactions, indexes, sharding, replication, schema design, log rotation</li>
                                </ul>
                            </ul>
                            <ul>
                                <br />
                                <li>Sept. 2019 - Oct. 2019</li><br />
                                <li>MODERN SOFTWARE TECHNICAL TRAINEE</li>
                                <br />
                                <ul>
                                    <li>Worked with project team member to design and develop backend microservices using Java that stores and queries data from embedded HyperSQLDB and used Kubernetes tool to scale web application to fully implement load-balancing functionality</li>
                                    
                                    <br /><li>Created a RESTful web service/API using Java and Spring Boot framework module that provides create, read, update, and delete operations for requests made from the ReactJS front end application</li>
                                </ul>
                            </ul>

                            <ul>
                                <br />
                                <li> ***TOPDOWN SYSTEMS CORPORATION*** </li>
                                <li>April 2016 - Sept. 2019</li><br />
                                <li>TECHNICAL SERVICES CONSULTANT</li>
                                <br />
                                <ul>
                                <li>Plan, implement, develop, and test installation and upgrades of our on-premises Customer Communications Management (CCM) software on web, print and application servers</li><br/>
                                    <li>Troubleshoot remote and on-site application issues using packet sniffing/analysis tools such as Wireshark, Fiddler and BlackBox</li>
                                    <br />
                     
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <h3>Education</h3>
                            <ul>
                                <li>2020 - 2022</li><br />
                                <li>JOHNS HOPKINS UNIVERSITY</li>
                                <ul>
                                    <li>M.S. Computer Science, focus Data Science and Cloud Computing</li>
                                </ul>
                                <br />
                                <li>2011 - 2016</li>
                                <li>UNIVERSITY OF MARYLAND, BALTIMORE COUNTY</li>
                                <ul>
                                    <li>M.S. Computer Science, focus Data Science and Cloud Computing</li>
                                </ul>
                                <br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                <div className={"col-6"}>
                        <div className={"item"}>
                            <h3>Technical Skills</h3>
                            <ul>
                                <li>Programming Languages: Java, SQL, C++, HTML/CSS, Python, Java Script, Scala, React</li><br />
                                <li>Frameworks: Spring Framework, Spring Boot Framework module, Node.js, React, React Native</li><br />
                                <li>Software/COTS: Eclipse IDE, Apache Tomcat Software Foundation, Github, Postman, Maven, Gradle, Kubernetes, Jenkins, IntelliJ, Docker, Teiid - Java software for data virtualization</li>
                                <br />
                                <li>Databases: MongoDB, SQL Server, Oracle, Microsoft Access, Sybase, Couchbase</li><br />
                                <li>Operating Systems: WindowsOS, Microsoft Windows Server 2003 – 2016, MacOS, Linux</li><br />
                                <li>Networking Tools: ProcMon, Fiddler, Wireshark, BlackBox</li> <br />
                                <li>Concepts/Methodologies: On-Premise Solutions, Containerization, Microservices, Cloud Computing, Multi-threading/Multi-processing, Failover vs. Clustering, Log Rotation, STIG compliance</li><br />            
                                <br />
                            </ul>
                        </div>
                    </div>

                    <div className={"col-6"}>
                    <div className={"item"}>
                            <h3>Activies/Certifications</h3>
                            <ul>
                                <li>Certified AWS Solutions Architect – Associate, May 2021</li><br />
                                <li>Top Wyzant STEM Tutor, Specializing in Math and Computer Science Tutoring</li><br />
                                <br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
