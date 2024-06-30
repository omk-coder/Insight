import React, { useState, useEffect } from "react";

import { Text, Img, Heading, Button, Input } from "../components";
import axios from "axios";
import anoym from "../assets/images/anoym.png";
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function LandingPagePage() {
  const [articles, setArticles] = useState([]);
  const [Ai, setthreeAi] = useState([]);
  const [Block, setBlock] = useState([]);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const fetchAllBlogs = async () => {
    try {
      const res = await axios.get(`${serverUrl}/blogs/latest`);

      setArticles(res.data);
      
    } catch (err) {
      console.log({ err: "Error fetching" });
    }
  };
  const blockchain = async () => {
    try {
      const res = await axios.get(`${serverUrl}/BlockChain/latest/four`);

      setBlock(res.data);
    
    } catch (err) {
      console.log({ err: "Error fetching" });
    }
  };

  const fetchSingleAi = async () => {
    try {
      const res = await axios.get(`${serverUrl}/webdev/latest/one`);

      setthreeAi(res.data);
      
    } catch (err) {
      console.log({ err: "Error fetching" });
    }
  };
  useEffect(() => {
    fetchAllBlogs();
    blockchain();
    fetchSingleAi();
  }, []);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[100px] md:px-5 max-w-[1111px]">
          <div className="flex flex-row justify-center w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[43px] md:gap-5">
                <Img
                  src="images/img_brand_1.svg"
                  alt="brandone_one"
                  className="h-[61px] w-[61px] mt-[66px] md:mt-0"
                />
                <div className="flex flex-col items-center justify-start w-[80%] md:w-full mb-9 gap-[30px]">
                  <Heading
                    size="3xl"
                    as="h1"
                    className="!font-merriweather text-center text-[50px] font-black"
                  >
                    Share via writing and podcasts, hope you enjoy
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="w-[78%] !text-gray-600 text-center text-2xl font-normal leading-[35px]"
                  >
                    Increase your knowledge by reading new things and I will
                    share whatever I know for you, as long as I enjoy it
                  </Text>
                </div>
                <Img
                  src="images/img_blog_1.svg"
                  alt="blogone_one"
                  className="h-[61px] w-[61px] mt-[205px] md:mt-0"
                />
              </div>

              <div className="flex flex-row sm:flex-col justify-start w-[51%] md:w-full mt-[-4px] gap-[25px] sm:gap-5">
                <Link to="/blog/dsa">
                  <Button
                    color="indigo_900_01"
                    size="4xl"
                    className="sm:px-5 !text-white-A700 tracking-[0.12px] shadow-sm min-w-[221px] rounded-[35px]"
                  >
                    Read More
                  </Button>
                  \{" "}
                </Link>
                \
                <Link to="/news">
                  <Button
                    color="indigo_200"
                    size="4xl"
                    variant="outline"
                    className="sm:px-5 tracking-[0.12px] min-w-[271px] rounded-[35px] hover:color-indigo_900_01"
                  >
                    Learn more.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-col items-center justify-start w-full gap-[17px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[39%] sm:w-full gap-[18px] sm:gap-5">
                  <Button
                    color="gray_300"
                    size="7xl"
                    shape="circle"
                    className="w-[76px]"
                  >
                    <Img src="images/img_podcast_1.svg" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[79%] sm:w-full gap-2 ">
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
                      className="!text-gray-600 tracking-[0.12px] text-center text-2xl font-normal"
                    >
                      Get started on latest blogs
                    </Text>
                  </div>
                </div>
                <Link to="/blog/dsa">
                  <Heading
                    size="xs"
                    as="h3"
                    className="!text-indigo-900 tracking-[0.12px] text-sm font-bold"
                  >
                    See all blogs
                  </Heading>
                </Link>
              </div>

              <div className="flex flex-row md:flex-col w-full gap-[22px]">
                {articles.map((article, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center w-[24%] md:w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]"
                  >
                    <div className="h-[207px] w-full mt-[7px] relative">
                      <Img
                        src={article.headerImage}
                        alt="image"
                        className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mb-[5px] gap-2.5">
                      <Heading
                        size="s"
                        as="h4"
                        className="!font-merriweather text-base font-bold"
                      >
                        {article.title}
                      </Heading>
                      <div className="flex justify-between align-middle items-center gap-10">
                        <Text size="xs" as="p" className="text-sm font-light">
                          Anonymous
                        </Text>
                        <Link to="/blog/dsa">
                          <Button
                            color="indigo_900_01"
                            size="sm"
                            className="sm:px-5   !text-white-A700 shadow-sm w-26 rounded-[35px]"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[29px] md:gap-5 mt-28  sm:mt-4 md:mt-4">
                <div className="flex flex-col items-end justify-start w-[66%] md:w-full gap-[50px]">
                  {Ai.map((ai, i) => (
                    <div key={i} className="flex flex-col w-full gap-[50px]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                            <div className="flex flex-row justify-start items-center w-[34%] sm:w-full gap-3.5">
                              <Img
                                src={anoym}
                                alt="by_jhone"
                                className="h-[70px] w-[70px] md:h-auto rounded-[50%]"
                              />
                              <div className="flex flex-col items-start justify-start w-[66%] gap-[3px]">
                                <Heading
                                  as="h6"
                                  className="!text-blue_gray-600 text-center text-lg font-semibold"
                                >
                                  Anonymous
                                </Heading>
                                <Text
                                  size="xs"
                                  as="p"
                                  className="text-center text-sm font-light"
                                >
                                  {new Date(ai.publicationDate).toDateString()}
                                </Text>
                              </div>
                            </div>
                            <Text
                              size="xs"
                              as="p"
                              className="flex text-center align-middle items-center text-sm font-light gap-2"
                            >
                              <span className="text-blue_gray-600">
                                Category:{" "}
                              </span>
                              <span className="text-pink-300 font-merriweather text-lg font-black">
                                DSA
                              </span>
                            </Text>
                          </div>
                          <Heading
                            size="2xl"
                            as="h1"
                            className="mt-[30px] ml-0.5 md:ml-0 tracking-[0.12px] !font-merriweather text-5xl font-bold italic"
                          >
                            {ai.title}
                          </Heading>
                          <Img
                            src={ai.headerImage}
                            alt="image"
                            className="w-full md:h-[390px] mt-[29px] ml-0.5 md:ml-0 object-cover rounded-[5px]"
                          />
                          <Text
                            as="p"
                            className="mt-[30px] ml-0.5 md:ml-0 !text-blue_gray-900 text-lg font-light leading-[30px]"
                          >
                            We all know that every person has his or her own
                            desire to work, but do you know that we can actually
                            be consistent in making works if we want, now in
                            this article I want to invite all of you to learn to
                            be consistent in creating.
                          </Text>
                          <div className="flex flex-row sm:flex-col justify-between w-[65%] md:w-full mt-[19px] sm:gap-10">
                            <div className="flex flex-row justify-start items-center gap-2.5">
                              <Button
                                color="light_blue_50"
                                size="xl"
                                className="w-[55px] rounded-[27px]"
                              >
                                <Img src="images/img_clock_1.svg" />
                              </Button>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-black-900 text-center text-sm font-light"
                              >
                                5 minutes ago
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-2.5">
                              <Button
                                color="lime_50"
                                size="xl"
                                className="w-[55px] rounded-[27px]"
                              >
                                <Img src="images/img_like_1.svg" />
                              </Button>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-black-900 text-center text-sm font-light"
                              >
                                12 Like
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-2.5">
                              <Button
                                color="red_50"
                                size="xl"
                                className="w-[55px] rounded-[27px]"
                              >
                                <Img src="images/img_send_1_1.svg" />
                              </Button>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-black-900 text-center text-sm font-light"
                              >
                                Share
                              </Text>
                            </div>
                          </div>
                          <Link to="/blog/dsa">
                            <button className="bg-indigo-800 rounded-xl p-6 mt-3 text-white-A700 font-bold text-xl">
                              Continue Reading...
                            </button>
                          </Link>
                        </div>
                        <hr className="mt-4" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-[49px]">
                  <Heading
                    as="h6"
                    className="!font-merriweather text-lg font-bold -mb-11 mt-3"
                  >
                    BlockChain Blog
                  </Heading>
                  {Block.map((bloc, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start justify-start w-full gap-[21px]"
                    >
                      <div className="flex flex-col w-full gap-5">
                        <Link to="/blog/dsa">
                          <div className="flex flex-row justify-start items-center w-full gap-[15px]">
                            <Img
                              src={bloc.headerImage}
                              alt="image"
                              className="w-[96px] md:h-auto object-cover rounded-[5px]"
                            />
                            <div className="flex flex-col items-start justify-start w-[69%] gap-2.5">
                              <Heading
                                as="h6"
                                className="!font-merriweather text-lg font-bold italic"
                              >
                                {bloc.title}
                              </Heading>

                              <Text
                                size="xs"
                                as="p"
                                className="text-sm font-light"
                              >
                                5-10 minutes ago
                              </Text>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                    <Heading
                      as="h6"
                      className="tracking-[0.12px] !font-merriweather text-lg font-bold"
                    >
                      Categories
                    </Heading>
                    <div className="flex flex-col w-full gap-[9px] md:gap-[2.25px]">
                      <div className="flex flex-col items-center justify-start w-full pb-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text as="p" className="text-lg font-light">
                            DSA
                          </Text>
                          <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                            <Text
                              as="p"
                              className="flex justify-center items-center h-[40px] w-[40px] !text-gray-600_01 text-lg font-normal bg-blue-50 text-center rounded-[50%]"
                            >
                              10
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-px bg-blue_gray-100" />
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text as="p" className="text-lg font-light">
                          Web Development
                        </Text>
                        <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                          <Text
                            as="p"
                            className="flex justify-center items-center h-[40px] w-[40px] !text-gray-600_01 text-lg font-normal bg-blue-50 text-center rounded-[50%]"
                          >
                            9
                          </Text>
                        </div>
                      </div>
                      <div className="w-full h-px bg-blue_gray-100" />
                      <div className="flex flex-col items-center justify-start w-full pt-2.5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text as="p" className="text-lg font-light">
                            AI / Blockchain
                          </Text>
                          <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                            <Text
                              as="p"
                              className="flex justify-center items-center h-[40px] w-[40px] !text-gray-600_01 text-lg font-normal bg-blue-50 text-center rounded-[50%]"
                            >
                              20
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
