import { assets } from "../../assets/frontend_assets/assets";
import { FaUsers } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-gray-800 overflow-hidden"
        >
          About Us
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Welcome to [Your E-commerce], where we offer the best products at the
          best prices.
        </p>
      </div>

      {/* Company Mission */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="w-full md:w-1/2 p-4">
          <img
            data-aos="fade-left"
            data-aos-delay="500"
            src={assets.about_img}
            alt="Our Mission"
            className="rounded-lg shadow-lg h-[400px] w-[400px]"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          className="w-full md:w-1/2 p-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            At [Your E-commerce], our mission is to provide high-quality
            products that fit your lifestyle. We are dedicated to offering the
            best customer service and ensuring a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Choose Us?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up-right"
            data-aos-delay="500"
            className="text-center"
          >
            <span className="text-5xl text-indigo-600">&#9733;</span>
            <h3 className="text-xl font-medium mt-4">Quality Products</h3>
            <p className="text-gray-600 mt-2">
              We provide top-notch products that are sourced from trusted
              suppliers.
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-delay="500"
            className="text-center"
          >
            <span className="text-5xl text-indigo-600">&#9733;</span>
            <h3 className="text-xl font-medium mt-4">Fast Shipping</h3>
            <p className="text-gray-600 mt-2">
              Get your items delivered to your doorstep quickly and reliably.
            </p>
          </div>
          <div
            data-aos="fade-down-right"
            data-aos-delay="500"
            className="text-center"
          >
            <span className="text-5xl text-indigo-600">&#9733;</span>
            <h3 className="text-xl font-medium mt-4">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Our team is available around the clock to help you with your
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div
        data-aos="flip-right"
        data-aos-delay="600"
        className="flex flex-col md:flex-row items-center justify-between"
      >
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-600 mt-4">
            We started [Your E-commerce] with a simple idea: to create a place
            where people can shop for quality products without any hassle. Over
            the years, we have expanded our offerings and improved our services
            to become a trusted name in the industry.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={assets.contact_img}
            alt="Our Story"
            className="rounded-lg shadow-lg h-[400px] w-[400px]"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet the Team</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <span>
              <FaUsers className="text-5xl text-indigo-600" />
            </span>
            <h3 className="text-xl font-medium mt-4">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
            <span>
              <FaUsers className="text-5xl text-indigo-600" />
            </span>
            <h3 className="text-xl font-medium mt-4">Jane Smith</h3>
            <p className="text-gray-600">Marketing Manager</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
            <span>
              <FaUsers className="text-5xl text-indigo-600" />
            </span>
            <h3 className="text-xl font-medium mt-4">Bob Johnson</h3>
            <p className="text-gray-600">Product Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
