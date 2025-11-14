
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-black/30 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-indigo-800/60 shadow-2xl shadow-indigo-500/10">
        <article className="prose prose-invert lg:prose-xl prose-h2:font-orbitron prose-h2:text-indigo-300 prose-a:text-indigo-400 hover:prose-a:text-indigo-300 max-w-none">
          
          <h2 id="guide-title">The Ultimate Guide to Website Uptime & Server Health</h2>
          <p>In today's digital world, your website is your most critical asset. When it goes down, you lose visibility, revenue, and customer trust. Understanding why sites go down and how to check their status is essential for any online presence.</p>

          <div 
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: isExpanded ? '5000px' : '0px', opacity: isExpanded ? 1 : 0 }}
          >
            <div className="pt-4">
              <p>This comprehensive guide explores the intricacies of website uptime, decodes cryptic HTTP status codes, and explains why a reliable server is the bedrock of your online presence. We'll cover the difference between local and global outages, common reasons for downtime, and how to interpret status codes from a 200 OK to a 503 Service Unavailable.</p>
              
              <div className="bg-gray-900/50 border border-indigo-700 p-4 rounded-lg my-8">
                <h3 className="text-xl font-bold font-orbitron text-indigo-300 mt-0">Table of Contents</h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><a href="#section-1">Why Website Uptime is Non-Negotiable</a></li>
                  <li><a href="#section-2">Local Outage vs. Global Outage: Is It Just Me?</a></li>
                  <li><a href="#section-3">Decoding HTTP Status Codes: The Language of Servers</a></li>
                  <li><a href="#section-4">Why Remote Server Checks Are Essential</a></li>
                  <li><a href="#section-5">Common Culprits: Why Do Websites Go Down?</a></li>
                  <li><a href="#section-6">Proactive Monitoring: The Best Defense</a></li>
                  <li><a href="#section-7">Data Table: Interpreting Key Status Codes</a></li>
                  <li><a href="#section-8">Frequently Asked Questions (FAQ)</a></li>
                </ul>
              </div>

              <h3 id="section-1">Why Website Uptime is Non-Negotiable</h3>
              <p>Uptime measures how long a website is operational and accessible. It's typically expressed as a percentage, with reputable hosts aiming for "five nines"—99.999% uptime—translating to just over five minutes of downtime per year.</p>
              <ul>
                <li><strong>Revenue Impact:</strong> For e-commerce sites, every second of downtime is a second of lost sales. Gartner estimated the average cost of IT downtime at $5,600 per minute.</li>
                <li><strong>Search Engine Rankings (SEO):</strong> If Google's bots repeatedly find your site unavailable, they'll de-index your pages, assuming the site is unreliable.</li>
                <li><strong>Brand Credibility:</strong> An inaccessible website appears unprofessional and erodes user trust.</li>
              </ul>

              <h3 id="section-2">Local Outage vs. Global Outage: Is It Just Me?</h3>
              <p>One of the most common questions is, "Is the site down, or is it just me?" A local outage means the website is fine, but something on your end (ISP, router, firewall) is blocking access. A global outage means the website's server is genuinely inaccessible to everyone. Our tool is designed to verify a global outage by checking from an independent server.</p>
              
              <h3 id="section-3">Decoding HTTP Status Codes: The Language of Servers</h3>
              <p>When your browser communicates with a web server, the server responds with an HTTP status code. They are categorized into five classes:</p>
              <ul>
                <li><strong>2xx (Success):</strong> The request succeeded. A <strong>200 OK</strong> means the site is UP.</li>
                <li><strong>4xx (Client Error):</strong> The error is on the user's side. A <strong>404 Not Found</strong> means the server is working, but the page doesn't exist.</li>
                <li><strong>5xx (Server Error):</strong> The error is on the website's server. A <strong>500 Internal Server Error</strong> or <strong>503 Service Unavailable</strong> clearly indicates the website is DOWN.</li>
              </ul>
              
              <h3 id="section-4">Why Remote Server Checks Are Essential</h3>
              <p>To get an unbiased, accurate result, you must check from an external source. Our tool does this by eliminating local variables (your ISP, router, etc.), bypassing browser CORS restrictions, and simulating a global user to confirm a widespread outage.</p>

              <h3 id="section-5">Common Culprits: Why Do Websites Go Down?</h3>
              <ul>
                <li><strong>Server Overload (Traffic Spikes):</strong> A sudden influx of traffic can overwhelm a server's resources.</li>
                <li><strong>Hosting Provider Outage:</strong> Hardware failure or network issues at the data center can take down all hosted websites.</li>
                <li><strong>Software Errors:</strong> A bug in the website's code or a faulty plugin can cause a crash (500 error).</li>
                <li><strong>Expired Domain Name:</strong> If a domain isn't renewed, it will stop resolving and become inaccessible.</li>
                <li><strong>Cyberattacks:</strong> DDoS attacks can flood a server with junk traffic, knocking it offline.</li>
              </ul>

              <h3 id="section-6">Proactive Monitoring: The Best Defense</h3>
              <p>Instead of waiting for users to report that your site is down, businesses should use proactive uptime monitoring services. These services automatically ping your website from multiple locations at regular intervals and send instant alerts if they detect an error, allowing for a swift response.</p>

              <h3 id="section-7">Data Table: Interpreting Key Status Codes</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Status Code</th>
                      <th>Meaning</th>
                      <th>Indicates "Down"?</th>
                      <th>Common Cause</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>200 OK</td><td>Success</td><td><strong>No</strong> (Site is UP)</td><td>Normal operation.</td></tr>
                    <tr><td>403 Forbidden</td><td>Access Denied</td><td>No, but an issue</td><td>No permission to view.</td></tr>
                    <tr><td>404 Not Found</td><td>Page Not Found</td><td>No, but an issue</td><td>Server is up, page is not.</td></tr>
                    <tr><td>500 Internal Server Error</td><td>Server Error</td><td><strong>Yes</strong> (Site is DOWN)</td><td>Code bug or misconfiguration.</td></tr>
                    <tr><td>502 Bad Gateway</td><td>Server Error</td><td><strong>Yes</strong> (Site is DOWN)</td><td>Invalid response from upstream server.</td></tr>
                    <tr><td>503 Service Unavailable</td><td>Server Overloaded</td><td><strong>Yes</strong> (Site is DOWN)</td><td>Overloaded or in maintenance.</td></tr>
                    <tr><td>504 Gateway Timeout</td><td>Server Error</td><td><strong>Yes</strong> (Site is DOWN)</td><td>No timely response from upstream server.</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 id="section-8">Frequently Asked Questions (FAQ)</h3>
              <dl>
                <dt>What does 'down' mean?</dt>
                <dd>A website is 'down' when it's inaccessible due to server errors (like a 500 error), network problems, or domain issues. Our tool checks the server's direct HTTP response to confirm.</dd>
                <dt>How does this detector work?</dt>
                <dd>When you enter a URL, our server sends a request to it. If it gets a success code (like 200 OK), the site is UP. If it gets an error code (like 503) or no response, the site is DOWN.</dd>
                <dt>Why is response time important?</dt>
                <dd>A slow response time, even if the status is "UP," can indicate an overloaded server or network congestion, which might be a precursor to a full outage.</dd>
                <dt>Is a 404 error the same as a site being down?</dt>
                <dd>No. A 404 means the server is online, but the specific page is missing. A true "down" status usually involves a 5xx error or a complete failure to connect.</dd>
              </dl>
            </div>
          </div>
        </article>
        <div className="text-center mt-6">
          <button 
            onClick={toggleExpansion}
            className="text-indigo-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 border border-indigo-500 hover:bg-indigo-500/30"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Read Less' : 'Read More About Website Health...'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoArticle;
