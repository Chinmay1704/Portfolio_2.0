import "./HomePage.css";
import profileImg from "/src/assets/profile.png";
import resume from "C:/Users/cpkha/OneDrive/Desktop/JOB DOCS/Resumes/Chinmay Resume_React Dev.pdf";


function HomePage() {

  const downloadPdf = () => {
    const pdfUrl = resume;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Chinmay_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
      <div className="container">
        <div className="hero container">
          <div className="row">
            <h1 className="H1-U text-center">Web Developer</h1>
          </div>
          <div className="info row">
            <div className="col-lg-4 col-md-7 col-sm-12">
              <div className="intro container">
                <div className="prof-img">
                  <img src={profileImg} alt="profile img" />
                </div>

                <div className="name">
                  <h4 className="Logo-M">Chinmay K</h4>
                  <p className="Code-M">Front-End Web Developer</p>
                </div>

                <div className="rel-info">
                  <ul className="Code-M">
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      cpkhanapurkar1704@gmail.com
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot"></i> India
                    </li>
                    <li>
                      <i className="fa-solid fa-suitcase"></i> Full-Time
                    </li>
                    <li>
                      <i className="fa-solid fa-link"></i>
                      https://github.com/Chinmay1704
                    </li>
                  </ul>
                </div>
                <div className="skill-tech Code-M">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JS</span>
                  <span>React</span>
                </div>
                <div className="resu">
                  <button className="btn Bottom-U" onClick={downloadPdf}>Download Resume</button>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-7 col-sm-12">
              <div className="description">
                <div className="heading">
                  <span className="tags Code-M">&lt;h1&gt;</span> <br />
                  <span className="greet H2-U">
                    Hey, I&apos;m <span className="sp-name">Chinmay</span>,{" "}
                    <br /> FrontEnd Web Developer
                  </span>
                  <span className="tags Code-M px-3">&lt;/h1&gt;</span>
                </div>

                <div className="descri-cont">
                  <p className="tags Code-M">&lt;p&gt;</p> <br />
                  <p className="descri-cont-p Para-M">
                    I am a Front-end developer proficient in HTML, CSS,
                    JavaScript, Bootstrap; passionate about creating responsive,
                    engaging web experiences.
                  </p>
                  <br />
                  <p className="tags Code-M">&lt;/p&gt;</p>
                </div>

                <span className="conc Menu-M">
                  <span onClick={scrollToForm}>
                    Let&apos;s Talk <i className="fa-solid fa-envelope"></i>
                    </span>
                </span>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="projs">
                <table>
                  <tbody>
                    <tr className="prog-cnt">
                      <td>
                        <span className="Number-M">5</span>
                      </td>
                      <td>
                        <span className="Para-M">Programming Language</span>
                      </td>
                    </tr>

                    <tr className="dev-tools">
                      <td>
                        <span className="Number-M">2</span>
                      </td>
                      <td>
                        <span className="Para-M">Developement Tools</span>
                      </td>
                    </tr>

                    <tr className="yoe">
                      <td>
                        <span className="Number-M">1</span>
                      </td>
                      <td>
                        <span className="Para-M">Year Of Experience</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
