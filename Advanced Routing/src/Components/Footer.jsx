import React from 'react'

const Footer = () => {
  return (
    <footer className=" mt-[235px] bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo Section */}
          <div>
            <h1 className="text-2xl font-bold text-blue-400">
              Huzaifa Dev
            </h1>
            <p className="text-gray-400 mt-3">
              Building modern and responsive web applications using React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Contact
            </h2>

            <p className="text-gray-400">
              Karachi, Pakistan
            </p>

            <p className="text-gray-400 mt-2">
              huzaifa@example.com
            </p>

            <p className="text-gray-400 mt-2">
              +92 300 1234567
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">
          © 2026 Huzaifa Dev. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer