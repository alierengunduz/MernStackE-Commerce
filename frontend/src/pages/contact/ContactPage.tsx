import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">İletişim</h1>
      <p className="text-lg mb-4">
        Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz:
      </p>

      <div className="w-full max-w-lg bg-white shadow-md rounded p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Adres</h2>
        <p>Örnek Cad. No:123</p>
        <p>İstanbul, Türkiye</p>
        <p>Posta Kodu: 34000</p>
      </div>

      <div className="w-full max-w-lg bg-white shadow-md rounded p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">İletişim Bilgileri</h2>
        <p>
          Email:{" "}
          <a href="mailto:info@ornek.com" className="text-blue-500">
            info@ornek.com
          </a>
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:+902123456789" className="text-blue-500">
            +90 212 345 67 89
          </a>
        </p>
      </div>

      <div className="w-full max-w-lg bg-white shadow-md rounded p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mesajınız
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Gönder
          </button>
        </form>
      </div>

      <div className="w-full max-w-lg bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-semibold mb-4">Harita</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509355!2d144.95373631531112!3d-37.81720997975194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f7b8d79%3A0xd9914a7f1f6c6b!2sMelbourne%20Australia!5e0!3m2!1sen!2sus!4v1633281452720!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
