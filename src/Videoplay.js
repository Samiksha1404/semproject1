import { useCallback } from "react";
import "./Video.css";
import './global.css'; 

const Videoplay = () => {
  

  const onMicrophoneIconClick = useCallback(() => {
    // strt functionality
  }, []);

  const onIconClick = useCallback(() => {
    // icon functionality
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    // about page
  }, []);
  const onHomeUsTextClick = useCallback(() => {
    // home page
  }, []);
  const onCourseContentTextClick = useCallback(() => {
    // coursepage
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // contact page
  }, []);
  const onPersonAccount = useCallback(() => {
    // person account
  }, []);
  

  return (
    <div className="video">
    {/* header */}
    <div className="header">
        <div className="header-child" />
        <img className="icon1" alt="" src="/assets/Icon.svg" onClick={onIconClick} />
        <div
          className="home1"
          onClick={onHomeUsTextClick}
        >{`Home `}</div>
        <div
          className="course-content1"
          onClick={onCourseContentTextClick}
        >{`Course Content `}</div>
        <div
          className="about-us1"
          onClick={onAboutUsTextClick}
        >{`About Us `}</div>
        <div
          className="contact-us1"
          onClick={onContactUsTextClick}
        >{`Contact Us `}</div>

      
        <img className="header-item" alt="" src="/assets/person.svg" onClick={onPersonAccount} />
      </div>

      {/* left section*/}
      <img className="leftsection-icon" alt="" src="/leftsection@2x.png" />
      
      
      {/* window*/}
      <div className="window">
      <div style={{width: '100%', height: '100%', background: '#121212', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '1px #2B2B2B solid'}}>
         <div className="school-college-education-intel" />
         <img style={{width: '100%', height: '69%', borderRadius: 10}} src="/assets/sampleimg.png" />
         </div>

        <div className="ellipse-parent">
          <div className="group-child" />
          <img
            className="vector-icon2"
            alt=""
            src="/assets/micro.svg"
            onClick={onMicrophoneIconClick}
          />
          <div className="start">Start</div>
        </div>

        <button className="rectangle-parent group-item save">Save
        <img className="bisave-icon" alt="" src="/assets/save.svg"  /></button>
        <button className="rectangle-group group-inner">Upload 
        <img className="vector-icon3" alt="" src="/assets/upload.svg"  /></button>
      
      </div>

    {/* description*/}
      <div className="description">
      <div style={{width: '100%', height: '100%', background: '#121212', borderRadius: 10, border: '1px #2B2B2B solid'}}>
        <div className="input-field">
          <div className="input-field-base">
            <div className="input-field-base">
              <div className="label">
                <div className="descriptions">Descriptions</div>
              </div>
              <div className="empty-description-wrapper">
              <input className="empty-description" type="Empty description"  placeholder="Description"/>
              </div>
              
            </div>
            <div className="hint-text">This is a hint text to help user.</div>
          </div>
        </div>
        </div>
      </div>


      <div className="footer">
        <div className="footer-child" />
        <div className="icon-parent">
          <img className="icon" alt="" src="/assets/Icon.svg" />
          <div className="logo">LOGO</div>
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="course-content">Course Content</div>
          <div className="about-us">About Us</div>
          <div className="contact-us">Contact Us</div>
        </div>
        <div className="div-stack-stack-izkus">
          <div className="real-time-content-2024">Real-Time-content © 2024</div>
        </div>
        <div className="div-switch-switch-zmho8">
          <img
            className="button-switch-button-aftgf-icon"
            alt=""
            src="/assets/icon1.svg"
          />
          <img
            className="button-switch-button-aftgf-icon"
            alt=""
            src="/assets/icon2.svg"
          />
          <img
            className="button-switch-button-aftgf-icon"
            alt=""
            src="/assets/icon3.svg"
          />
        </div>
        
      </div>

      <img className="grid-icon" alt="" src="/assets/grid.png" />
      <div className="div-w-216px" />
      <div className="div-w-216px1" />
      <div className="div-w-216px2" />
      
   
    </div>
  );
};

export default Videoplay;
