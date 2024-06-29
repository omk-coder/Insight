import React from "react";
import { Text, Img, Heading } from "..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-[81%] mt-[30px] gap-[66px] mx-[132px] md:mx-5">
        <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
          <div className="flex flex-col items-start justify-start w-[15%] md:w-full gap-2">
            <div className="flex flex-row justify-start items-start gap-3.5">
              <Img
                src="images/img_dashicons_welcome_write_blog.svg"
                alt="dashicons_one"
                className="h-[24px] w-[24px] mt-[3px]"
              />
              <Heading
                size="lg"
                as="h4"
                className="!text-white-A700 !font-nunitosans uppercase text-center text-2xl font-extrabold"
              >
                Blogsly
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center gap-2.5">
              <Img src="images/img_heart_3_1.svg" alt="heart3one_one" className="h-[20px] w-[20px]" />
              <Text as="p" className="!text-white-A700 text-lg font-medium">
                Build with heart
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-between w-auto gap-[50px]">
            <Text as="p" className="!text-white-A700 text-lg font-light">
              Home
            </Text>
            <Text as="p" className="!text-white-A700 text-lg font-light">
              Podcast
            </Text>
            <Text as="p" className="!text-white-A700 text-lg font-light">
              Blog
            </Text>
            <Text as="p" className="!text-white-A700 text-lg font-light">
              About
            </Text>
            <Text as="p" className="!text-white-A700 text-lg font-light">
              Contact
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[11%] md:w-full gap-[19px]">
            <Heading as="h6" className="!text-white-A700 text-center text-lg font-bold">
              Follow Me on
            </Heading>
            <div className="flex flex-row justify-between w-full">
              <Img src="images/img_instagram_3_1.svg" alt="instagram3one" className="h-[25px] w-[25px]" />
              <Img src="images/img_whatsapp_2_1.svg" alt="whatsapp2one" className="h-[25px] w-[25px]" />
              <Img src="images/img_linkedin_2_1.svg" alt="linkedin2one" className="h-[25px] w-[25px]" />
            </div>
          </div>
        </div>
        <Text size="xs" as="p" className="!text-white-A700 text-sm font-light">
          Powered by Blogsly
        </Text>
      </div>
    </footer>
  );
}
