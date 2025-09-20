import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  Globe,
  BarChart3,
  Eye,
  CheckCircle,
  Lock,
  Smartphone,
  Database,
  TrendingUp,
  FileCheck,
  Award,
} from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                VoteSecure
              </span>
            </div>
            <div className="text-center space-x-4">
              <Link to="/login">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-700 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing Democracy with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Secure Digital Voting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A blockchain-powered, tamper-proof, and transparent voting
              management system built for the future of governance and
              organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Request Demo
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Secure</h3>
                  <p className="text-gray-600 text-sm">End-to-end encryption</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Blockchain</h3>
                  <p className="text-gray-600 text-sm">Immutable records</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Transparent</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every vote matters. Our system ensures complete integrity,
              transparency, and trust in the democratic process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                End-to-End Security
              </h3>
              <p className="text-gray-600">
                Blockchain technology ensures every vote is tamper-proof,
                encrypted, and permanently recorded with complete integrity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Voter Authentication
              </h3>
              <p className="text-gray-600">
                Multi-factor verification with biometric and OTP authentication
                ensures only authorized voters can participate.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Accessibility
              </h3>
              <p className="text-gray-600">
                Vote anytime, anywhere, from any device. Our system is optimized
                for desktop, mobile, and tablet access.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Real-Time Results
              </h3>
              <p className="text-gray-600">
                Transparent dashboards provide instant vote counting and
                real-time election monitoring with complete visibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Anonymity Guaranteed
              </h3>
              <p className="text-gray-600">
                Voter privacy is maintained through advanced cryptography while
                ensuring complete transparency and trust.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Audit Trail
              </h3>
              <p className="text-gray-600">
                Complete immutable audit trail provides transparency and allows
                for post-election verification and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, secure, and transparent voting process designed for the
              modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Voter Registration
              </h3>
              <p className="text-gray-600 text-sm">
                Secure KYC & ID verification process
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Authentication
              </h3>
              <p className="text-gray-600 text-sm">
                Biometric/OTP secure login
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Vote Casting
              </h3>
              <p className="text-gray-600 text-sm">
                Encrypted ballot stored on blockchain
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Counting</h3>
              <p className="text-gray-600 text-sm">
                Automatic, real-time transparent tallying
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                5
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600 text-sm">
                Instant access with no manual tampering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our System?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for the future of democratic participation with unmatched
              security and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Government & Institutional Ready
                    </h3>
                    <p className="text-gray-600">
                      Compliant with international standards and ready for
                      adoption by governments, organizations, and institutions
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Highly Scalable
                    </h3>
                    <p className="text-gray-600">
                      From college elections to national voting - our system
                      scales seamlessly to handle millions of votes
                      simultaneously.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Transparent Audit Trail
                    </h3>
                    <p className="text-gray-600">
                      Complete transparency with immutable blockchain records
                      ensures trust, legitimacy, and public confidence in every
                      election.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Reduces Cost & Fraud
                    </h3>
                    <p className="text-gray-600">
                      Eliminates manual processes, reduces operational costs,
                      prevents human error, and makes fraud virtually
                      impossible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Trusted by Organizations Worldwide
                </h3>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      99.9%
                    </div>
                    <div className="text-gray-600">Security Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      10M+
                    </div>
                    <div className="text-gray-600">Votes Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600">Organizations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the intuitive interface and powerful features of our
              voting management system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Secure Voter Dashboard
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Intuitive ballot casting interface
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Real-time election status updates
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Secure authentication flow
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Blockchain vote verification
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">Election Dashboard</h4>
                  <Shield className="h-5 w-5" />
                </div>
                <div className="space-y-2 text-sm opacity-90">
                  <div>Status: Active</div>
                  <div>Participation: 87%</div>
                  <div>Security: Verified ✓</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">
                    Current Election
                  </div>
                  <div className="font-semibold">2025 Student Government</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">
                    Your Vote Status
                  </div>
                  <div className="font-semibold text-green-600">
                    ✓ Successfully Submitted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Be Part of the Future of Democracy
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already transforming their elections
            with secure, transparent, and efficient digital voting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">VoteSecure</span>
              </div>
              <p className="text-gray-400 mb-4">
                The most secure and transparent voting management system for the
                digital age.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 VoteSecure. All rights reserved. Powering the future
              of democratic participation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
