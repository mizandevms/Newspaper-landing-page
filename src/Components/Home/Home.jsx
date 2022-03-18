import React from "react";
import "./Home.scss";
import providedData from "../../assets/data.json";

export default function Home() {
  const data = providedData;

  console.log(data);

  return (
    <section className="top_content">
      <main>
        <div className="key_section">
          <div className="key_content">
            <div className="text_content">
              <h2>
                <a href="#"> {data[6].title}</a>
              </h2>
              <article>{data[6].description.substring(1, 300) + "..."}</article>
              <small> {data[6].time} ঘণ্টা আগে</small>
            </div>
            <figure>
              <img src={data[6].photo} alt="key content" />
              <small>হেফাজত নেতা মামুনুল হক | ছবি: দিপু সরকার</small>
            </figure>
          </div>
          <div className="key_content_right">
            <div className="text_content">
              <h2>
                <a href="#"> {data[4].title}</a>
              </h2>
              <article>{data[4].description.substring(1, 150) + "..."}</article>
              <small> {data[4].time} ঘণ্টা আগে</small>
            </div>
          </div>
        </div>

        <div className="second_section">
          <div className="text_content">
            <h2>
              <a href="#"> {data[4].title}</a>
            </h2>
            <article>{data[4].description.substring(1, 150) + "..."}</article>
            <small> {data[4].time} ঘণ্টা আগে</small>
          </div>
          <div className="text_content">
            <h2>
              <a href="#"> {data[4].title}</a>
            </h2>
            <article>{data[4].description.substring(1, 150) + "..."}</article>
            <small> {data[4].time} ঘণ্টা আগে</small>
          </div>
          <div className="text_content right">
            <h2>
              <a href="#"> {data[4].title}</a>
            </h2>
            <article>{data[4].description.substring(1, 150) + "..."}</article>
            <small> {data[4].time} ঘণ্টা আগে</small>
          </div>
        </div>
      </main>

      <aside>jlnk</aside>
    </section>
  );
}
