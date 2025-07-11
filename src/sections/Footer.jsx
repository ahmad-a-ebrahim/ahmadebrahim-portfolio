const Footer = () => {
  return (
    <section className="c-space py-14 border-t border-black-300 flex justify-center items-center mt-20">
      <div className="flex gap-3">
        <a href="https://github.com/ahmad-a-ebrahim/">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ahmadibrahem/">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2 invert"
            />
          </div>
        </a>
        <a href="https://www.facebook.com/ahmadibraheem91/">
          <div className="social-icon">
            <img
              src="/assets/facebook.svg"
              alt="facebook"
              className="w-1/2 h-1/2 invert"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/ahmad.a.ebrahim/">
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
