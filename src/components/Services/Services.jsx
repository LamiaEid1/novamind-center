import React from 'react';
import './Services.css'; 

const Services = () => {
    return (
        <section className="about section" id="services">
            <div className="container">
                <div className="rowServecies">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="education padd-15">
                                <div className="timeline-box padd-15">
                                    <div className="timeline shadow-dark">
                                        {/* Timeline Item */}
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date"></h3>
                                            <h4 className="timeline-title">Personalized and Inclusive Curriculum</h4>
                                            <p className="timeline-text">
                                                We offer personalized, inclusive curricula that cater to each child’s unique learning style and needs. Our approach integrates diverse perspectives and teaching methods to foster an environment where all students can thrive.
                                            </p>
                                        </div>
                                        {/* Timeline Item */}
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date"></h3>
                                            <h4 className="timeline-title">Exploration Through Diverse Learning Programs</h4>
                                            <p className="timeline-text">
                                                At NOVAMIND, we provide a variety of learning programs that encourage exploration and growth. From STEM to arts and humanities, our programs are designed to nurture creativity, critical thinking, and a passion for learning.
                                            </p>
                                        </div>
                                        {/* Timeline Item */}
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date"></h3>
                                            <h4 className="timeline-title">Specialized Support for Every Learner</h4>
                                            <p className="timeline-text">
                                                We offer specialized support for students who need additional assistance, including one-on-one tutoring, speech therapy, and counseling services. Our trained professionals work closely with each child to ensure they receive the individualized care they need.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience padd-15">
                                <div className="timeline-box padd-15">
                                    <div className="timeline shadow-dark">
                                        {/* Timeline Item */}
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date"></h3>
                                            <h4 className="timeline-title">Celebrating Diversity with Cultural Awareness</h4>
                                            <p className="timeline-text">
                                                We celebrate cultural diversity through programs and events that teach students the importance of empathy, respect, and understanding. Our initiatives help students develop a global perspective, preparing them to succeed in an interconnected world.
                                            </p>
                                        </div>
                                        {/* Timeline Item */}
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date"></h3>
                                            <h4 className="timeline-title">Building Emotional Intelligence Through SEL</h4>
                                            <p className="timeline-text">
                                                We emphasize the development of emotional intelligence and interpersonal skills through social-emotional learning programs. Our goal is to help students build resilience, self-awareness, and positive relationships with others.
                                            </p>
                                        </div>
                                        {/* Timeline Item */}
                                        <div className="timeline-item">
                                            <div className="circle-dot"></div>
                                            <h3 className="timeline-date"></h3>
                                            <h4 className="timeline-title">Engaging Families and Strengthening Community</h4>
                                            <p className="timeline-text">
                                                We actively engage families in the educational journey by offering workshops, events, and collaborative initiatives that strengthen the bond between home, school, and community.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;