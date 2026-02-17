import React from "react";

const PrivacyPolicy: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 py-24">
			<div className="max-w-4xl mx-auto px-6">
				<div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
					<h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
						Privacy Policy
					</h1>
					<p className="text-slate-500 mb-8">
						Last updated: February 2026
					</p>

					<div className="prose prose-lg max-w-none text-slate-600">
						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								1. Introduction
							</h2>
							<p>
								Welcome to Bestricky Web Agency ("we," "our," or
								"us"). We are committed to protecting your
								privacy and ensuring you have a positive
								experience using our website and services. This
								Privacy Policy explains how we collect, use,
								disclose, and safeguard your information when
								you visit our website or use our services.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								2. Information We Collect
							</h2>
							<p className="mb-4">
								We may collect information about you in the
								following ways:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Personal Information:</strong> Name,
									email address, phone number, and company
									name when you contact us or book a
									consultation.
								</li>
								<li>
									<strong>Usage Data:</strong> Information
									about how you use our website, including
									pages visited, time spent, and links
									clicked.
								</li>
								<li>
									<strong>Cookies:</strong> We use cookies to
									enhance your browsing experience and analyze
									website traffic.
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								3. How We Use Your Information
							</h2>
							<p className="mb-4">
								We use the information we collect to:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Provide, maintain, and improve our services
								</li>
								<li>
									Respond to your inquiries and customer
									service requests
								</li>
								<li>
									Send you promotional materials and updates
									(with your consent)
								</li>
								<li>
									Analyze usage patterns to enhance user
									experience
								</li>
								<li>Comply with legal obligations</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								4. Information Sharing
							</h2>
							<p>
								We do not sell, trade, or otherwise transfer
								your personal information to outside parties
								except as described below:
							</p>
							<ul className="list-disc pl-6 space-y-2 mt-4">
								<li>
									<strong>Service Providers:</strong> We may
									share information with third-party vendors
									who assist us in operating our website and
									conducting our business.
								</li>
								<li>
									<strong>Legal Requirements:</strong> We may
									disclose information when required by law or
									in response to valid requests by public
									authorities.
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								5. Data Security
							</h2>
							<p>
								We implement appropriate technical and
								organizational security measures to protect your
								personal information. However, no method of
								transmission over the Internet or electronic
								storage is 100% secure, and we cannot guarantee
								absolute security.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								6. Your Rights
							</h2>
							<p>You have the right to:</p>
							<ul className="list-disc pl-6 space-y-2 mt-4">
								<li>
									Access the personal information we hold
									about you
								</li>
								<li>Request correction of inaccurate data</li>
								<li>Request deletion of your personal data</li>
								<li>Opt-out of marketing communications</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								7. Third-Party Links
							</h2>
							<p>
								Our website may contain links to third-party
								websites. We are not responsible for the privacy
								practices or content of these external sites. We
								encourage you to review the privacy policies of
								any third-party sites you visit.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								8. Children's Privacy
							</h2>
							<p>
								Our website is not intended for children under
								13 years of age. We do not knowingly collect
								personal information from children under 13. If
								you become aware that a child has provided us
								with personal information, please contact us.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								9. Changes to This Policy
							</h2>
							<p>
								We may update this Privacy Policy from time to
								time. We will notify you of any changes by
								posting the new Privacy Policy on this page and
								updating the "Last updated" date. You are
								advised to review this Privacy Policy
								periodically for any changes.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-slate-900 mb-4">
								10. Contact Us
							</h2>
							<p>
								If you have any questions about this Privacy
								Policy, please contact us:
							</p>
							<ul className="list-disc pl-6 space-y-2 mt-4">
								<li>Email: privacy@bestricky.com</li>
								<li>
									Through our{" "}
									<a
										href="/contact"
										className="text-blue-600 hover:underline"
									>
										contact page
									</a>
								</li>
							</ul>
						</section>
					</div>

					<div className="mt-12 pt-8 border-t border-slate-100">
						<a
							href="/"
							className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
						>
							← Back to Home
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
