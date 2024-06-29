import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Text, Heading, Button, Img } from "../components";

import Header from "../components/header";
import { Link } from "react-router-dom";

export default function BloggerDetailsPage() {
  const [articles, setArticles] = useState([]);

  const [diffBlog, setDiffblog] = useState([]);

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const FetchBlockblog = useCallback(async () => {
    try {
      const res = await axios.get(`${serverUrl}/BlockChain/latest/one`);

      setDiffblog(res.data);
    } catch (err) {
      console.log({ err: "Error fetching" });
    }
  });
  const fetchAllBlogs = useCallback(async () => {
    try {
      const res = await axios.get(`${serverUrl}/Cmb`);

      setArticles(res.data);
    } catch (err) {
      console.log({ err: "Error fetching" });
    }
  });

  useEffect(() => {
    fetchAllBlogs();
    FetchBlockblog();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header />
        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[40px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              {diffBlog.map((block, i) => (
                <div
                  key={i}
                  className="flex flex-row justify-center w-full bg-gray-600_01"
                >
                  <div className="h-[325px] w-full relative">
                    <div className="flex flex-row md:flex-col justify-between items-center w-[78%] top-[9%] right-0 left-0 m-auto md:gap-10 absolute">
                      <div className="flex flex-col items-start justify-start w-[58%] md:w-full gap-[25px]">
                        <div className="flex flex-row justify-start">
                          <Button
                            color="white_A700_3f"
                            size="sm"
                            shape="round"
                            className="w-full font-light"
                          >
                            Writer
                          </Button>
                        </div>
                        <h1 className="!text-white-A700 tracking-[0.12px] !font-merriweather sm:text-2xl md:text-4xl text-4xl font-bold italic">
                          {block.title}
                        </h1>
                      </div>
                      <div className="sm:hidden md:hidden lg:flex flex-row justify-center w-[32%] md:w-full p-8 sm:p-5 bg-white-A700_3f rounded-[5px]">
                        <img className="" src={block.headerImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full md:px-5 max-w-[1106px]">
            <div className="flex flex-row sm:flex-col justify-start items-center w-[40%] md:w-full gap-[18px] sm:gap-5">
              <div className="flex flex-col items-start justify-start w-[79%] sm:w-full gap-2">
                <Heading
                  size="xl"
                  as="h2"
                  className="ml-0.5 md:ml-0 !font-merriweather text-center text-4xl font-black"
                >
                  Latest Blogs{" "}
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="tracking-[0.12px] text-center text-2xl font-normal"
                >
                  Get started on latest Blogs
                </Text>
              </div>
            </div>
            <div className="w-full mt-[17px] gap-[22px] grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              {articles.map((blog, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]"
                >
                  <div className="h-[207px] w-full relative">
                    <Img
                      src={blog.headerImage}
                      alt="image"
                      className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                    <Link to={`/blog/${encodeURIComponent(blog.id)}`}>
                      <div>
                        <Heading
                          size="s"
                          as="h3"
                          className="!font-merriweather text-base font-bold"
                        >
                          {blog.title}
                        </Heading>
                      </div>
                    </Link>
                    <div className="flex align-middle items-center gap-5">
                      <Text size="xs" as="p" className="text-sm font-light">
                        {new Date(blog.publicationDate).toDateString()}
                      </Text>
                      <Link to={`/blog/${encodeURIComponent(blog.id)}`}>
                        <button className="text-md bg-indigo-300 p-2 rounded-2xl">
                          Read now!
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* </Link>   <Link to={`/blog/${encodeURIComponent(id)}`}> */}
                </div>
              ))}
            </div>
            <hr className="mt-10" />
          </div>
        </div>
      </div>
    </>
  );
}
