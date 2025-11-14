
import React, { useState, useCallback } from 'react';
import { checkUrlStatus } from '../services/statusChecker';
import type { CheckResult } from '../types';

const StatusIndicator: React.FC<{ status: 'UP' | 'DOWN' | 'ERROR' }> = ({ status }) => {
  const baseClasses = "text-5xl md:text-6xl font-bold font-orbitron tracking-widest p-6 rounded-lg shadow-lg w-full text-center";
  if (status === 'UP') {
    return <div className={`${baseClasses} bg-green-500/10 text-green-300 border border-green-500/50`}>UP</div>;
  }
  if (status === 'DOWN') {
    return <div className={`${baseClasses} bg-red-500/10 text-red-300 border border-red-500/50`}>DOWN</div>;
  }
  return <div className={`${baseClasses} bg-yellow-500/10 text-yellow-300 border border-yellow-500/50`}>ERROR</div>;
};

const DownDetectorTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<CheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || isLoading) return;
    
    setIsLoading(true);
    setResult(null);
    const checkResult = await checkUrlStatus(url);
    setResult(checkResult);
    setIsLoading(false);
  }, [url, isLoading]);

  return (
    <section className="mb-16 md:mb-24">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-2">Is Your Website Down?</h2>
        <p className="text-lg md:text-xl text-indigo-300">Enter a URL to check its status from our global servers.</p>
      </div>

      <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-indigo-800/60 shadow-2xl shadow-indigo-500/10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g., google.com"
              className="flex-grow bg-gray-900/50 text-white border-2 border-indigo-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50 rounded-lg px-4 py-3 text-lg transition-colors duration-300 placeholder-gray-500"
              disabled={isLoading}
              aria-label="Website URL"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900/50 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/40"
              disabled={isLoading || !url}
            >
              {isLoading ? 'Checking...' : 'Check Status'}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mx-auto"></div>
            <p className="mt-4 text-indigo-300 font-roboto-mono">Pinging servers...</p>
          </div>
        )}

        {result && (
          <div className="mt-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center bg-gray-900/40 p-4 rounded-lg border border-gray-700/50">
                <StatusIndicator status={result.status} />
              </div>
              <div className="bg-gray-900/40 p-6 rounded-lg border border-gray-700/50 font-roboto-mono text-lg space-y-3 flex flex-col justify-center">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-gray-400 flex-shrink-0">URL:</span>
                  <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 break-all hover:underline text-right">{result.url}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className={result.status === 'UP' ? 'text-green-400' : result.status === 'DOWN' ? 'text-red-400' : 'text-yellow-400'}>
                    {result.statusCode ? `${result.statusCode} ${result.statusText}` : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response:</span>
                  <span>{result.responseTime} ms</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-900/40 p-6 rounded-lg border border-gray-700/50">
              <h3 className="text-xl font-bold font-orbitron text-center mb-4 text-indigo-300">Simulated Global Check</h3>
              <ul className="space-y-2 font-roboto-mono">
                {['London, UK', 'New York, USA', 'Tokyo, JP', 'Sydney, AU'].map((loc) => (
                  <li key={loc} className="flex justify-between items-center bg-gray-800/50 p-3 rounded-md">
                    <span>{loc}</span>
                    {result.status === 'UP' ? (
                      <span className="text-green-400 font-bold flex items-center gap-2">✓ UP</span>
                    ) : result.status === 'DOWN' ? (
                      <span className="text-red-400 font-bold flex items-center gap-2">✗ DOWN</span>
                    ) : (
                      <span className="text-yellow-400 font-bold flex items-center gap-2">? ERROR</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DownDetectorTool;
