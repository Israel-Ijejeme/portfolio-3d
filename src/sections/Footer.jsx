const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>ijejemeisrael@gmail.com</p>
      </div>

      <div className="ml-7 flex gap-3">
        <a
          href="https://github.com/Israel-Ijejeme"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon rounded-xl transition-all duration-200 hover:outline hover:outline-2 hover:outline-gray-400"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://twitter.com/israeldevs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon rounded-xl transition-all duration-200 hover:outline hover:outline-2 hover:outline-gray-400"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://instagram.com/israeldevs"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon rounded-xl transition-all duration-200 hover:outline hover:outline-2 hover:outline-gray-400"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>


      <p className="text-white-500">© 2025 Israel Ijejeme. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
