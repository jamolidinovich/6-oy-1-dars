import "./App.css";
import sms from "./assets/IMAGE.png";
import xabar from "./assets/IMAGE (1).png";
import img2 from "./assets/IMAGE (2).png";
import img3 from "./assets/IMAGE (3).png";
import img4 from "./assets/IMAGE (4).png";
import img5 from "./assets/IMAGE (5).png";
import img6 from "./assets/IMAGE (6).png";
import img7 from "./assets/IMAGE (7).png";
function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="nav">
            <a
              className=" Products"
              href="https://economictimes.indiatimes.com/definition/product"
            >
              Products
            </a>
            <a href="https://en.wikipedia.org/wiki/Use_case#:~:text=Use%20cases%20are%20a%20technique,that%20contributes%20to%20its%20goals.">
              Use cases
            </a>
            <a href="https://en.wikipedia.org/wiki/Resource">Resources</a>
            <a href="https://www.searchenginejournal.com/about-us-page-examples/250967/">
              About us
            </a>
            <a className="login" href="#">
              Log in
            </a>
            <button className="btn">Request a demo</button>
          </div>
        </div>
        <div className="hero">
          <div className="next">
            <h3>Next generation</h3>
            <p>
              Welcome to the next generation of mobile commerce and <br />{" "}
              customer engagement. Meet your mobile customers where they <br />{" "}
              want to be met.
            </p>
            <img src={sms} alt="" />
          </div>
          <div className="nextimg">
            <img src={xabar} alt="" />
          </div>
        </div>
        <div className="shop">
          <p>Used by industry leaders</p>
          <div className="brend">
            <img className="pet" src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img className="imzo" src={img7} alt="" />
          </div>
        </div>
        <div className="main">
          <h2 className="h2">
            Make mobile journeys easier, faster <br /> and frictionless for your
            clients
          </h2>
          <div className="cards">
            <div className="card">
              <h5>Easy to use</h5>
              <p>
                A complete set of tools to enable <br /> marketing teams to
                easily curate, <br /> personalize, contextualize, send, <br />
                integrate and track campaigns - no <br /> coding required.{" "}
                <br />
                Our software design philosophy is all <br /> about the mobile
                end user, in particular <br /> their preference to Tap not Type.
              </p>
            </div>
            {/*  */}
            <div className="card">
              <h5>Revenue driving</h5>
              <p>
                Companies in the USA are claiming over <br /> 18.5% of online
                revenue is being <br /> generated from mobile commerce <br />
                initiatives. With 100% views, 90% plus <br /> open rates and
                CTR's like the very early <br /> days of email, you can be
                confident your <br /> mobile marketing is being seen and your{" "}
                <br />
                efforts aren’t going to waste.
              </p>
            </div>
            {/*  */}
            <div className="card">
              <h5>
                Integrated with your <br /> stack
              </h5>
              <p>
                You don't want to be shifting data from <br /> platform to
                platform. intouch has <br /> complete set of API’s and Webhooks
                to <br /> enable integration with existing marketing <br />{" "}
                stacks - as well as deep integration with a <br /> limited
                number of marketing platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="learnmore"></div>
      </div>
    </>
  );
}

export default App;
