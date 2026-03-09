export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Sheplus<span className="text-teal-400">Jewelry</span>
            </div>
            <p className="max-w-sm">
              Premium small-batch jewelry manufacturing for US boutiques and Etsy sellers. 
              MOQ as low as 1 piece for samples.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-teal-400 transition">Products</a></li>
              <li><a href="#process" className="hover:text-teal-400 transition">Process</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>crossborderstar@gmail.com</li>
              <li>WhatsApp Available</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 Sheplus Jewelry. All rights reserved.
          </p>
          <p className="text-sm mt-4 md:mt-0">
            Small Batch • Big Quality • MOQ: 1
          </p>
        </div>
      </div>
    </footer>
  );
}
