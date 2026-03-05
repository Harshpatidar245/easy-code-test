export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">&lt;/&gt;</span>
              </div>
              <div>
                <span className="text-lg font-bold">EasyCode</span>
                <span className="text-[10px] block -mt-1 opacity-80">Academy</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Master Python Using AI & Build Tech Career Skills
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm opacity-80">
              <a href="#" className="block hover:opacity-100 transition-opacity">Programs</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Courses</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Practice</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Resources</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-3">Support</h3>
            <div className="space-y-2 text-sm opacity-80">
              <a href="#" className="block hover:opacity-100 transition-opacity">FAQ</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Contact Us</a>
              <a href="#" className="block hover:opacity-100 transition-opacity">Privacy Policy</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>📱 +91 XXXXXXXXXX</p>
              <p>📧 info@easycode.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm opacity-60">
          © 2026 EasyCode Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
