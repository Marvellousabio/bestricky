
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none text-slate-600">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Bestricky Web Agency website ("Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
              <p>
                Bestricky Web Agency provides web design, web development, and digital marketing services to clients worldwide. The services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Custom website design and development</li>
                <li>E-commerce solutions</li>
                <li>UI/UX design services</li>
                <li>Website maintenance and support</li>
                <li>Digital consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Obligations</h2>
              <p>As a user of this Website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and complete information when contacting us</li>
                <li>Not use this Website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to any part of the Website</li>
                <li>Not interfere with the proper operation of the Website</li>
                <li>Not transmit any viruses, worms, or other harmful code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Bestricky Web Agency and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or use any content from this Website without our prior written consent.
              </p>
              <p className="mt-4">
                Client deliverables created under service agreements remain the property of the client upon full payment, as specified in individual service contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Service Agreements</h2>
              <p>
                Any work commissioned from Bestricky Web Agency will be governed by a separate service agreement. The terms of that agreement will take precedence over these general terms. All projects require a signed agreement and deposit before work begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment terms are specified in individual project proposals</li>
                <li>A deposit (typically 50%) is required to commence work</li>
                <li>Final payment is due upon project completion and before website launch</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to the specific terms of each project agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p>
                Bestricky Web Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use this Website or our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                This Website is provided "as is" without any representations or warranties, express or implied. Bestricky Web Agency makes no representations or warranties in relation to this Website or the information and materials provided on this Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Bestricky Web Agency and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising out of your use of this Website or any violation of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of this Website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Email: legal@bestricky.com</li>
                <li>Through our <a href="/contact" className="text-blue-600 hover:underline">contact page</a></li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
