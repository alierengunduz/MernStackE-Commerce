const Footer = () => {
  return (
    <footer data-aos="zoom-in" className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MyCompany</h2>
            <p className="text-gray-400">
              Providing quality products to our customers with top-notch service
              since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.326A1.329 1.329 0 0 0 0 1.326v21.348A1.329 1.329 0 0 0 1.326 24h11.49v-9.294H9.847v-3.622h2.969V8.413c0-2.935 1.77-4.546 4.436-4.546 1.262 0 2.347.093 2.66.135v3.087h-1.825c-1.434 0-1.712.683-1.712 1.683v2.207h3.425l-.447 3.622h-2.978V24h5.834A1.329 1.329 0 0 0 24 22.674V1.326A1.329 1.329 0 0 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.93 4.93 0 0 0 2.163-2.723c-.951.555-2.005.96-3.127 1.184a4.92 4.92 0 0 0-8.388 4.482c-4.084-.205-7.69-2.16-10.107-5.13a4.822 4.822 0 0 0-.664 2.476c0 1.71.87 3.217 2.188 4.103a4.936 4.936 0 0 1-2.229-.616c-.054 1.997 1.388 3.894 3.448 4.313a4.935 4.935 0 0 1-2.224.084c.623 1.944 2.432 3.36 4.576 3.397a9.867 9.867 0 0 1-6.1 2.105c-.396 0-.79-.023-1.174-.068a13.96 13.96 0 0 0 7.548 2.212c9.057 0 14.01-7.512 14.01-14.01 0-.213-.005-.426-.014-.637a10.025 10.025 0 0 0 2.457-2.548z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.298.975.975 1.235 2.242 1.298 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.851c-.062 1.366-.322 2.633-1.298 3.608-.975.975-2.242 1.235-3.608 1.298-1.266.058-1.646.07-4.85.07s-3.585-.012-4.851-.07c-1.366-.062-2.633-.322-3.608-1.298-.975-.975-1.235-2.242-1.298-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.585.07-4.851c.062-1.366.322-2.633 1.298-3.608.975-.975 2.242-1.235 3.608-1.298 1.266-.058 1.646-.07 4.851-.07m0-2.163c-3.259 0-3.667.012-4.947.072-1.518.068-2.916.357-3.963 1.404-1.047 1.047-1.336 2.445-1.404 3.963-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.068 1.518.357 2.916 1.404 3.963 1.047 1.047 2.445 1.336 3.963 1.404 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.518-.068 2.916-.357 3.963-1.404 1.047-1.047 1.336-2.445 1.404-3.963.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.068-1.518-.357-2.916-1.404-3.963-1.047-1.047-2.445-1.336-3.963-1.404-1.28-.06-1.688-.072-4.947-.072zM12 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.164a4.001 4.001 0 1 1 0-8.002 4.001 4.001 0 0 1 0 8.002zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p className="text-gray-500">
            &copy; 2024 MyCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
