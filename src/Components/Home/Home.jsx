import React from "react";
import "./Home.scss";
import providedData from "../../assets/data.json";
import ad from "../../assets/images/lake-castle-01.jpg";
import ad2 from "../../assets/images/nagad-is-set-to-begin-nagad-e-lakhpati-campaign-pic-1567106404728.jpg";

// external importa
import Moment from "react-moment";

export default function Home() {
  const data = providedData;


  return (
    <div>
      <section className="top_content">
        <main>
          <div className="key_section">
            <div className="key_content">
              <div className="text_content">
                <h1>
                  <a href="#"> {data[6].title}</a>
                </h1>
                <article>
                  {data[6].description.substring(1, 300) + "..."}
                </article>
                <small>
                  {" "}
                  <Moment format="hh">{data[6].time}</Moment> ঘণ্টা আগে
                </small>
              </div>
              <figure>
                <img src={data[6].photo} alt="key content" />
                <small>হেফাজত নেতা মামুনুল হক | ছবি: দিপু সরকার</small>
              </figure>
            </div>
            <div className="key_content_right">
              <div className="text_content">
                <h3>
                  <a href="#"> {data[4].title}</a>
                </h3>
                <article>
                  {data[4].description.substring(1, 150) + "..."}
                </article>

                <small>
                  {" "}
                  <Moment format="hh">{data[4].time}</Moment> ঘণ্টা আগে
                </small>
              </div>
            </div>
          </div>

          <div className="second_section">
            <div className="text_content">
              <h3>
                <a href="#"> {data[7].title}</a>
              </h3>
              <article>{data[7].description.substring(1, 150) + "..."}</article>
              <small>
                {" "}
                <Moment format="hh">{data[7].time}</Moment> ঘণ্টা আগে
              </small>
            </div>
            <div className="text_content">
              <h3>
                <a href="#"> {data[2].title}</a>
              </h3>
              <article>{data[2].description.substring(1, 150) + "..."}</article>
              <small>
                {" "}
                <Moment format="hh">{data[2].time}</Moment> ঘণ্টা আগে
              </small>
            </div>
            <div className="text_content right">
              <h3>
                <a href="#"> {data[3].title}</a>
              </h3>
              <article>{data[3].description.substring(1, 150) + "..."}</article>
              <small>
                {" "}
                <Moment format="hh">{data[3].time}</Moment> ঘণ্টা আগে
              </small>
            </div>
          </div>
          <div className="third_section">
            <div className="third_content">
              <figure>
                <img src={data[9].photo} alt="key content" />
                <small>
                  {" "}
                  <Moment format="hh">{data[9].time}</Moment> ঘণ্টা আগে
                </small>
              </figure>
              <div className="text_content">
                <h3>
                  <span>{data[9]["sup-title"]}</span> /
                  <a href="#"> {data[9].title}</a>
                </h3>
              </div>
            </div>
            <div className="third_content">
              <figure>
                <img src={data[1].photo} alt="key content" />
                <small>
                  {" "}
                  <Moment format="hh">{data[1].time}</Moment> ঘণ্টা আগে
                </small>
              </figure>
              <div className="text_content">
                <h3>
                  <a href="#"> {data[1].title}</a>
                </h3>
              </div>
            </div>
            <div className="third_content ">
              <figure>
                <img src={data[8].photo} alt="key content" />
                <small>
                  {" "}
                  <Moment format="hh">{data[8].time}</Moment> ঘণ্টা আগে
                </small>
              </figure>
              <div className="text_content right">
                <h3>
                  <a href="#"> {data[8].title}</a>
                </h3>
              </div>
            </div>
          </div>
          <div className=" fourth_section">
            <div className="third_content">
              <figure>
                <img src={data[5].photo} alt="key content" />
                <small>
                  {" "}
                  <Moment format="hh">{data[5].time}</Moment> ঘণ্টা আগে
                </small>
              </figure>
              <div className="text_content">
                <h3>
                  <a href="#"> {data[5].title}</a>
                </h3>
              </div>
            </div>
            <div className="third_content">
              <figure>
                <img src={data[10].photo} alt="key content" />
                <small>
                  {" "}
                  <Moment format="hh">{data[10].time}</Moment> ঘণ্টা আগে
                </small>
              </figure>
              <div className="text_content">
                <h3>
                  <a href="#"> {data[10].title}</a>
                </h3>
              </div>
            </div>
            <div className="third_content ">
              <figure>
                <img src={data[0].photo} alt="key content" />
                <small>
                  {" "}
                  <Moment format="hh">{data[0].time}</Moment> ঘণ্টা আগে
                </small>
              </figure>
              <div className="text_content right">
                <h3>
                  <span>{data[0]["sup-title"]}</span> /
                  <a href="#"> {data[0].title}</a>
                </h3>
              </div>
            </div>
          </div>
        </main>

        <aside>
          <figure>
            <img src={ad2} alt="ad" />
          </figure>
          <div className="side_content">
            <figure>
              <img src={data[12].photo} alt="ad" />
              <h3>{data[12].title}</h3>
            </figure>
          </div>
          <div className="third_content">
            <figure>
              <img src={data[2].photo} alt="key content" />
              <small>
                {" "}
                <Moment format="hh">{data[2].time}</Moment> ঘণ্টা আগে
              </small>
            </figure>
            <div className="text_content">
              <h3>
                <a href="#"> {data[2].title}</a>
              </h3>
            </div>
          </div>
          <div className="third_content">
            <div className="text_content">
              <h3>
                <a href="#"> {data[7].title}</a>
              </h3>
            </div>
            <figure>
              <img src={data[7].photo} alt="key content" />
            </figure>
          </div>
        </aside>
      </section>

      <section className="ad">
        <figure>
          <img src={ad} alt="ad" />
        </figure>
      </section>
    </div>
  );
}
