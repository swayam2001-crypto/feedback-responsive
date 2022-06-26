import mainImage from "./3.png";
import react, { useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img1 from "./Budding_Entrepreneurs.png";
import img2 from "./One_India_One_Service_Rate.png";
import img3 from "./Franchisee_all_across_india.png";
import img4 from "./Identification_and_removal.png";
import img5 from "./Reinforce_action_plans.png";
import img6 from "./Access_current_performance.png";
import whoimg from "./4.png";
import whymedsys from "./5.png";
import Footer from "./Footer";
import caption from "./Caption.png";
import vision from "./1.png";
import mission from "./2.png"
function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("${mainImage}")`,
    backgroundSize: "cover",
  };

  const imgupcoming1 = {
    backgroundImage: `url("${img1}")`,
    backgroundSize: "contain",
  };

  const imgupcoming2 = {
    backgroundImage: `url("${img2}")`,
    backgroundSize: "contain",
  };

  const imgupcoming3 = {
    backgroundImage: `url("${img3}")`,
    backgroundSize: "contain",
  };

  const imgupcoming4 = {
    backgroundImage: `url("${img4}")`,
    backgroundSize: "contain",
  };

  const imgupcoming5 = {
    backgroundImage: `url("${img5}")`,
    backgroundSize: "contain",
  };

  const imgupcoming6 = {
    backgroundImage: `url("${img6}")`,
    backgroundSize: "contain",
  };

  const whoare = {
    backgroundImage: `url("${whoimg}")`,
    backgroundSize: "contain",
  };

  const whymed = {
    backgroundImage: `url("${whymedsys}")`,
    backgroundSize: "contain",
  };

  const tagline = {
    backgroundImage: `url("${caption}")`,
    backgroundSize: "contain",
  };

  const OurVision = {
    backgroundImage: `url("${vision}")`,
    backgroundSize: "contain",
  };

  const OurMission = {
    backgroundImage: `url("${mission}")`,
    backgroundSize: "contain",
  };


  const data = [
    {
      id: 1,
      val: "	We aim to provide personalized services to our clients to ‘Start, Grow and Sustain’ their business and enable them to take proactive decisions so that they are not stuck in legal hurdles or formalities. ",
    },
    {
      id: 2,
      val: "We guarantee hassle-free service delivery without compromising on quality. ",
    },
    {
      id: 3,
      val: "We ensure complete transparency at every step. ",
    },
    {
      id: 4,
      val: "	We aspire to prepare our organization for growth and create processes that effectively deal with the developing marketplace. ",
    },
    {
      id: 5,
      val: "We aspire to reach the right customers since doing so will enable us to better understand consumer purchasing patterns and form commercial alliances that will increase our organization's market share. ",
    },
    {
      id: 6,
      val: "	We aspire to improve our standing among consumers to serve them the best service we can and eventually improve our revenue.",
    },
  ];

  const [sideData, setSideData] = useState(data[0].val);

  return (
    <div className="App">
      <div
        className=" text-white h-screen flex items-center justify-center "
        style={backgroundImageStyle}
      >
        <div className=" px-8 py-16 flex items-center justify-center">
          <div className=" max-w-2xl   mx-auto  gap-8">
            <h2 className="text-7xl uppercase font-bold text-center ">
              Medsys Consultancy Services
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#f6d5dd]">
        <div className="px-8 py-16">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-md mb-16 ">
              <h2 className="text-5xl text-[#560216] font-bold">About Us</h2>
              <div className="bg-[#560216] w-1/2 h-1.5"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-3 px-12 w-2/3">
              <p className="text-3xl text-rose-900 items-center text-center font-medium">
                Consultancy Services is a social organization aiming at
                sustainability, performing well, and creating social change.
                <br></br>
                <br></br>
                Since 2017, Medsys Consultancy Services has been a one-stop
                solution for any business or entrepreneur looking for a
                Chartered Accountant, Company Secretary, or a Lawyer and even
                social presence management solution. <br></br>
                <br></br>
                We have already served over +500 customers and have a steadily
                growing network of over +15 professionals from different cities
                in Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#560216]">
        <div className="px-8 py-16">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-md mb-16 ">
              <h2 className="text-5xl text-white font-bold">Our Vision</h2>
              <div className="bg-white w-1/2 h-1.5"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-3 px-12 w-2/3">
            <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={OurVision}
              ></div>
              <p className="text-3xl text-white items-center text-center font-medium">
                We provide innovative, quality-driven services to our clients to
                improve, optimize their performance and support them to scale up
                their solutions to address the complex challenges of surviving
                in the business world.
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-16">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-md mb-16 ">
              <h2 className="text-5xl text-white font-bold">Our Mission</h2>
              <div className="bg-white w-1/2 h-1.5"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-3 px-12 w-2/3">
            <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={OurMission}
              ></div>
              <p className="text-3xl text-white items-center text-center font-medium">
                To build a team of experienced professionals to assists
                entrepreneurs to convert their dream business by providing
                end-to-end business incorporation and associated services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f6d5dd]">
        <div className="px-8 py-16">
          <div className="w-3/4 m-3">
            <h2 className=" text-5xl text-[#560216]">Who we are?</h2>
            <div className="bg-[#560216] mt-3 w-1/4 h-1.5"></div>
          </div>
          <div>
            <div className="w-2/3 grid grid-cols-2" >
              <p className="text-rose-900 text-xl font-medium">
                
                We provide a technology-motivated platform to impart management
                consultancy services in India. We assist startups in running
                their business. We offer CSR consultancy services to NGOs. We
                assist NGOs in all the legal formalities and certifications. We
                assist startups, companies and NGO to build impeccable social
                presence to tip the scales in their favour.
              </p>
            </div>
            <div
              className="w-1/3 h-60 mx-auto bg-no-repeat"
              style={whoare}
            ></div>
          </div>
        </div>

        <div className="px-8 py-16">
          <div className="w-3/4 m-3">
            <h2 className=" text-5xl text-[#560216] flex justify-end">Why Medsys?</h2>
            <div className="bg-[#560216] mt-3 w-1/4 h-1.5"></div>
          </div>
          <div>
            <div className="w-2/3 grid grid-cols-2">
              <p className="text-rose-900 text-xl font-medium">
                Success comes from working with a partner you trust to provide
                the insight, support, and expertise that will propel your
                business forward.<br></br> We have built and continue to build our teams
                to cater specialized services and solutions that meet the
                distinct needs of the start-ups.<br></br> Our deep-set commitment to our
                customers defines how we do business, and our years of
                experience working across industries underpin the vast array of
                services we offer.
                
              </p>
            </div>
            <div className="w-1/3 h-60 mx-auto bg-no-repeat" style={whymed}></div>
          </div>
        </div>
      </div>



      <div className="bg-[#560216]">
        <div className="px-8 py-16">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-md mb-16 ">
              <h2 className="text-5xl text-white font-bold">Upcoming Goals</h2>
              <div className="bg-white mt-3 w-1/2 h-1.5"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-slate-600">
            <div>
              <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={imgupcoming1}
              ></div>
              <p className="text-2xl p-3 text-slate-50 m-2 text-center w-3/4 mx-auto">
                One-Stop Solution for budding entrepreneurs and businesses.
              </p>
            </div>

            <div className="ml-8">
              <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={imgupcoming2}
              ></div>
              <p className="text-2xl text-slate-50 m-2 text-center">
                One India One Service Rate
              </p>
            </div>

            <div>
              <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={imgupcoming3}
              ></div>
              <p className="text-2xl text-slate-50 m-2 text-center">
                MEDSYS Franchisee all across India
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-16">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-lg mb-16 ">
              <h2 className="text-5xl text-white font-bold">
                Our Growth Parameter
              </h2>
              <div className="bg-white mt-3 w-1/2 h-1.5"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-slate-600">
            <div className="">
              <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={imgupcoming4}
              ></div>
              <p className="text-2xl text-slate-50 m-2 text-center">
                Starts with the identification and removal of barriers.
              </p>
            </div>

            <div className="ml-10">
              <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={imgupcoming5}
              ></div>
              <p className="text-2xl text-slate-50 m-2 text-center">
                Reinforce action plans for the errors identified.
              </p>
            </div>

            <div>
              <div
                className="w-60 h-60 mx-auto bg-no-repeat"
                style={imgupcoming6}
              ></div>
              <p className="text-2xl text-slate-50 m-2 text-center">
                Assess the current performance status of operations, marketing,
                franchisee.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f6d5dd]">
        <div className="px-8 py-16">
          <div className="grid grid-cols-2">
            <div className="w-1/4 p-3">
              <button
                className="text-5xl p-3 text-[#560216]"
                onClick={() => setSideData(data[0].val)}
              >
                1
              </button>
              <br />
              <button
                className="text-5xl p-3 text-[#560216]"
                onClick={() => setSideData(data[1].val)}
              >
                2
              </button>
              <br />
              <button
                className="text-5xl p-3 text-[#560216]"
                onClick={() => setSideData(data[2].val)}
              >
                3
              </button>

              <button
                className="text-5xl p-3 text-[#560216]"
                onClick={() => setSideData(data[3].val)}
              >
                4
              </button>

              <button
                className="text-5xl p-3 text-[#560216]"
                onClick={() => setSideData(data[4].val)}
              >
                5
              </button>

              <button
                className="text-5xl p-3 text-[#560216]"
                onClick={() => setSideData(data[5].val)}
              >
                6
              </button>
            </div>

            <div className="w-3/4 p-2">
              <p className="h-full mx-auto text-left text-4xl text-rose-900">
                {sideData}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#560216]">
        <div className="px-8 py-16">
          <div className="w-3/4">
            <h2 className="italic text-5xl text-white">
              Message from founder !!
            </h2>
            <div className="bg-white mt-3 w-1/4 h-1.5"></div>
          </div>
          {/* <div className=" m-3 py-2 text-5xl text-white"> */}
          <ImQuotesLeft className="text-center text-5xl m-2 text-white" />
          {/* </div> */}
          <div className="flex justify-center ml-3 px-8 py-3">
            <p className="flex justify-center text-white text-2xl text-justify">
              India currently houses the world’s third-largest start-up
              ecosystem, with over 50 firms being valued at over USD 1 billion,
              or what is known as Unicorns. Talented entrepreneurs are prepared
              to step up and develop the next disruptive technologies as the
              cycle of invention quickens. The Medsys Consultancy Service, a
              Private Enterprise, understands the importance of entrepreneurs
              working to transform new ideas into thriving companies. Founders
              face considerable challenges as they work to bring new ideas to
              the marketplace while taking incremental leadership
              responsibilities. Raising capital, finding talent, acquiring
              customers, complying with regulatory requirements, and other
              management initiatives take time and are important to maximize
              business success. We are delighted to share highlights from our
              experience including operational, financial, tax, accounting
              matters, and other business considerations. Currently, we are
              dedicated to helping start-up businesses all over India and aspire
              to be an insightful and practical resource for them. We welcome
              you to know us better and look forward to the opportunity to
              assist in your business strategies.
            </p>
          </div>
          {/* <div className="w-full h-full m-3 py-4 text-5xl text-white content-end"> */}
          <div className="flex justify-end ml-3 px-2">
            <ImQuotesRight className="text-center text-white text-5xl " />
          </div>
          {/* </div> */}

          <div className="flex flex-col justify-end px-3 m-3">
            <div className="flex justify-end py-1">
              <h1 className="text-white text-3xl">~Bhushan Shirude</h1>
              <br></br>
            </div>
            <div className="flex justify-end py-2">
              <h1 className="text-white text-2xl">Founder and CEO</h1>
              <br></br>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f6d5dd]">
        <div className="px-8 py-16">
        <div className="flex justify-center w-2/3 h-72 mx-auto bg-no-repeat" style={tagline}></div>
            
        </div>
      </div>  
      <Footer />
    </div>
    
  );
}

export default App;
