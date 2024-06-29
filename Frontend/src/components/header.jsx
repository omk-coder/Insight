import { Helmet } from "react-helmet";
import { Heading } from "../components";

import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <Helmet>
        <title>INSIGHT</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <header className="flex flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700">
        <div className="flex flex-row sm:flex-col justify-between items-center w-[55%] md:w-full ml-[139px] md:ml-5 sm:gap-10">
          <Link to="/">
            <h6 className="!text-indigo-900_01 tracking-[0.12px] text-center text-lg font-bold cursor-pointer">
              INSIGHT
            </h6>
          </Link>
          <div className="flex flex-row justify-between items-center w-[53%] sm:w-full">
            <Link to="/">
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center text-lg font-bold cursor-pointer hover:underline underline-offset-0"
              >
                Home
              </Heading>
            </Link>
            <Link to="/news">
              <Heading
                as="h6"
                className="!text-indigo-200_01 tracking-[0.12px] text-center text-lg font-bold cursor-pointer hover:underline underline-offset-0"
              >
                News
              </Heading>
            </Link>
            <Link to="/blog/dsa">
              <Heading
                as="h6"
                className="!text-indigo-200_01 tracking-[0.12px] text-center text-lg font-bold cursor-pointer hover:underline underline-offset-0"
              >
                Blog
              </Heading>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default header;
