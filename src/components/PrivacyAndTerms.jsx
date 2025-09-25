import React from "react";

const PrivacyAndTerms = () => {
  return (
    <div className="privacy-container">
      <style>{`
        .privacy-container {
          padding: 2rem;
          max-width: 1000px;
          margin: auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.7;
        }
        .privacy-container h1, 
        .privacy-container h2, 
        .privacy-container h3 {
          color: #003366;
          margin-top: 2rem;
        }
        .privacy-container p {
          margin: 1rem 0;
        }
        .privacy-container ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .privacy-container li {
          margin-bottom: 0.5rem;
        }
        .privacy-container a {
          color: #006699;
          text-decoration: none;
        }
        .privacy-container a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .privacy-container {
            padding: 1rem;
          }
        }
      `}</style>

      <h1>Privacy Policy & Terms of Service</h1>
      <p>
        
        Last Updated: September 25, 2025
      </p>

      {/* Privacy Policy Section */}
      <section id="privacy">
        <h2>Privacy Policy</h2>
        <p>
          D-Global Tech values your privacy and is committed to protecting your
          personal information. This Privacy Policy explains in detail how we
          collect, process, store, and protect your information when you
          interact with our website, applications, or services. By using our
          platform, you agree to the practices outlined in this policy.
        </p>
      </section>

      <section id="information-we-collect">
        <h3>Information We Collect</h3>
        <p>
          We collect information to provide better services to our clients,
          consultants, and partners. This includes:
        </p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Includes your name, email
            address, phone number, employment details, and documents like your
            resume when applying for opportunities or filling out forms.
          </li>
          <li>
            <strong>Technical & Usage Information:</strong> Such as browser
            type, operating system, device identifiers, IP address, and how you
            interact with our platform.
          </li>
          <li>
            <strong>Cookies & Analytics:</strong> Information gathered through
            cookies, tags, and analytics tools to help us improve our services,
            understand trends, and deliver personalized experiences.
          </li>
        </ul>
      </section>

      <section id="use-of-information">
        <h3>How We Use Information</h3>
        <p>
          The data we collect allows us to improve our services and create
          meaningful business relationships. Specifically, we use your
          information to:
        </p>
        <ul>
          <li>
            Match consultants with client projects, ensuring the best fit for
            both parties.
          </li>
          <li>
            Facilitate project delivery through our internal teams and partner
            networks.
          </li>
          <li>
            Send you relevant updates, job openings, newsletters, or
            partnership opportunities.
          </li>
          <li>
            Monitor performance, detect fraudulent activity, and comply with
            applicable legal and regulatory requirements.
          </li>
        </ul>
      </section>

      <section id="cookies">
        <h3>Cookies & Tracking</h3>
        <p>
          Cookies are small files placed on your device that help us recognize
          you and improve your browsing experience. They allow us to:
        </p>
        <ul>
          <li>Remember your preferences and login details.</li>
          <li>Analyze traffic patterns and measure site performance.</li>
          <li>Deliver relevant ads or promotional messages.</li>
        </ul>
        <p>
          You can adjust your browser settings to refuse cookies, but doing so
          may affect site functionality.
        </p>
      </section>

      <section id="security">
        <h3>Data Security</h3>
        <p>
          Protecting your information is our top priority. We implement
          administrative, technical, and physical safeguards such as encryption,
          firewalls, and restricted access protocols. While we strive for
          complete security, no system is immune from potential risks, and we
          encourage users to take precautions when sharing sensitive
          information.
        </p>
      </section>

      <section id="retention">
        <h3>Data Retention</h3>
        <p>
          We retain personal data only as long as necessary for business
          purposes, contractual obligations, or legal compliance. Once data is
          no longer needed, it is securely deleted or anonymized to prevent
          unauthorized access.
        </p>
      </section>

      <section id="user-rights">
        <h3>Your Rights</h3>
        <p>As a user, you have the following rights over your personal data:</p>
        <ul>
          <li>
            <strong>Access & Portability:</strong> Request a copy of the data we
            hold about you.
          </li>
          <li>
            <strong>Correction & Deletion:</strong> Update inaccurate details or
            request deletion of unnecessary data.
          </li>
          <li>
            <strong>Opt-Out:</strong> Withdraw consent for marketing
            communications at any time.
          </li>
          <li>
            <strong>Restriction:</strong> Request that we limit how we process
            your data in specific scenarios.
          </li>
        </ul>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms">
        <h2>Terms & Conditions</h2>
        <p>
          These Terms govern your use of D-Global Tech’s website, services, and
          digital platforms. By accessing or using our services, you agree to
          comply with all applicable laws, regulations, and company policies. If
          you do not agree, please refrain from using our services.
        </p>
      </section>

      <section id="use-of-site">
        <h3>Use of Site</h3>
        <p>
          You agree to use our website only for legitimate purposes and in a
          manner that does not harm, disrupt, or violate the rights of others.
          Misuse of the website, such as attempting unauthorized access or
          spreading malicious software, is strictly prohibited.
        </p>
      </section>

      <section id="intellectual">
        <h3>Intellectual Property</h3>
        <p>
          All content, including text, graphics, logos, and software, is the
          intellectual property of D-Global Tech. Unauthorized reproduction,
          distribution, or modification of this content without prior written
          consent is strictly forbidden.
        </p>
      </section>

      <section id="liability">
        <h3>Limitation of Liability</h3>
        <p>
          D-Global Tech shall not be responsible for any damages, including but
          not limited to loss of profits, data, or business opportunities
          resulting from the use or inability to use our services. While we take
          measures to ensure accuracy, we do not warrant that our website will
          always be error-free or uninterrupted.
        </p>
      </section>

      <section id="governing-law">
        <h3>Governing Law</h3>
        <p>
          These Terms are governed by the laws of Texas, USA. Any disputes shall
          be resolved in the courts located in Austin, Texas. By using our
          services, you consent to this jurisdiction.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have questions, concerns, or requests related to this Privacy
          Policy or Terms of Service, please reach out to us:
        </p>
        <p>
          <strong>D-Global Technologies</strong> <br />
          5900 Balcones Drive #26584 <br />
          Austin, TX, 78731, US <br />
          Email: <a href="mailto:hr@dglobaltech.com">hr@dglobaltech.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyAndTerms;
