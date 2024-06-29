import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bg from "../assets/images/BGFINAL.jpg";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import backbtn from "../assets/images/backbutton.png";

import { Text, Heading, Img, Button } from "../components";

import Header from "../components/header";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlogs] = useState(null);

  const [loading, setLoading] = useState(true);

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const fetchArticle = async () => {
    try {
      const res = await axios.get(
        `${serverUrl}/blogs/${encodeURIComponent(id)}`
      );
      setBlogs(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching article:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const parsedContent = parse(blog.content);
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full ">
        <Header />

        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[150px] md:px-5 max-w-[1356px]">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[70px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    src={bg}
                    alt="image_one"
                    className="w-full h-[400px] sm:w-full object-cover rounded-[25px]"
                  />
                  <div className="flex flex-col items-start justify-center w-[84%] md:w-full mt-[-150px] p-12 md:p-5 bg-white-A700 shadow-lg rounded-[25px]">
                    <Link to={"/blog/dsa"}>
                      <img src={backbtn} alt="" className="w-10 ml-2" />
                    </Link>
                    <Text
                      size="lg"
                      as="p"
                      className="flex mt-1 ml-4 md:ml-0 !text-black-900 text-2xl font-light"
                    >
                      <span className="text-blue_gray-600">Category</span>

                      <span className="text-black-900"></span>
                      <span className="text-pink-300 tracking-[0.12px] font-merriweather font-bold ml-2">
                        DSA + BlockChain
                      </span>
                    </Text>
                    <Heading
                      size="2xl"
                      as="h1"
                      className="w-[97%] mt-[25px] ml-4 md:ml-0 tracking-[0.12px] !font-merriweather text-5xl font-bold italic"
                    >
                      {blog.title}
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[74%] md:w-full ">
                {parsedContent}

                <div className="flex flex-row sm:flex-col justify-start mt-3 gap-[15px] sm:gap-5 mb-5">
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[96px]"
                  >
                    Data Structure
                  </Button>
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[97px]"
                  >
                    Blockchain
                  </Button>
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[93px]"
                  >
                    Problem Solving
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
