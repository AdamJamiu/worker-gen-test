import BlobSvg from "./BlobSvg";

const Footer = () => {
  return (
    <footer className="relative">
      <BlobSvg color="" styles="lg:block hidden" />
      <div className="w-full bg-primary_green text-white">
        <div className="w-full flex flex-col justify-center items-center py-7">
          <h2>Get weekly Wecycler newsltetter</h2>
          <h2>directly into your inbox</h2>
        </div>
        <div className="w-full text-center">
          © 2024 Wecyclers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
