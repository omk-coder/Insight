import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, Heading, Button, Img } from "../components";

import Header from "../components/header";

const AllNews = () => {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState("");

  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const handleClick = () => {
    setMessage(
      "This feature is still updating. Please check out the blog section."
    );
  };
  const fetchAllBlogs = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/news`);

      setArticles(res.data);
      
    } catch (err) {
      console.log({ err: "Error fetching" });
    }
  };
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full mt-[17px] gap-[22px] grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
        {articles.map((blog, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]"
          >
            <div className="h-[207px] w-full relative">
              <Img
                src={blog.urlToImage}
                alt="image"
                className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
              />
            </div>

            <div className="flex flex-col items-start justify-start w-full mb-2.5 ">
              <Heading
                size="s"
                as="h3"
                className="!font-merriweather text-base font-bold"
              >
                {blog.title}
              </Heading>
              <div className="flex align-middle items-center gap-5 mt-4">
                <Text size="xs" as="p" className="text-sm font-light">
                  {new Date(blog.publishedAt).toDateString()}
                </Text>

                <button className="text-md bg-indigo-300 p-2 rounded-2xl">
                  Read now!
                </button>
              </div>
              <span className="mt-2">Updating..Till then Read blogs.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
