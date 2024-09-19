"use client"
import React, { useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

const GamFiVotingPage = () => {
  const [selectedVote, setSelectedVote] = useState('yes');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const VoteCircle = ({ isSelected }) => (
    <div className={`w-5 h-5 rounded-full border ${isSelected ? 'bg-green-500 border-green-500' : 'border-gray-400'} flex items-center justify-center mr-3`}>
      {isSelected && <Check className="w-3 h-3 text-white" />}
    </div>
  );

  const voteData = [
    { address: '0x95e441...ddd97400', vote: 'Yes', amount: '15,856.640' },
    { address: '0x842db9...c03d141f', vote: 'No', amount: '12,693.200' },
    { address: '0x8de8be...48be4556', vote: 'Yes', amount: '8,556.230' },
    { address: '0xb83166...a9a8dc0d', vote: 'Yes', amount: '1,588.816' },
    { address: '0x8637ab...a1b8674a', vote: 'Yes', amount: '991.807' },
    { address: '0x95e441...ddd97400', vote: 'No', amount: '986.359' },
    { address: '0x842db9...c03d141f', vote: 'No', amount: '899.179' },
  ];
  
  const results = [
    { label: 'FOR:', value: 260486, percentage: 85, color: 'bg-green-400' },
    { label: 'AGAINST:', value: 586, percentage: 3, color: 'bg-red-500' },
    { label: 'ABSTAIN:', value: 2586, percentage: 12, color: 'bg-gray-600' },
  ];

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
        <div 
          className="bg-[#1c1830] p-12 w-full max-w-md transform transition-all duration-300 ease-in-out"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl mb-3 font-bold">Submit Vote</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-400 mb-4">
            Hold token in your wallet at the snapshot block to get voting power.
          </p>
          <div className="mb-4">
            <p className="text-gray-400">Vote For</p>
            <p className="text-xl font-bold my-4">200 BUSD</p>
          </div>
          <div className="mb-6">
            <p className="text-gray-400 mb-4 font-semibold">Voting Power</p>
            <input 
              type="text" 
              value="500" 
              readOnly 
              className="w-full border-2 font-semibold border-gray-700 p-4 bg-transparent text-white"
            />
          </div>
          <button 
            className="w-full bg-[#7f5af0] text-white py-4 font-semibold hover:bg-[#6b4cd3]"
          >
            CONFIRM VOTE
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-[#0e0b1f] text-white min-h-screen font-sans">
      {/* Main Content */}
      <main className="p-4 sm:p-8">
        <div className="flex items-center mb-6">
          <ArrowLeft className="mr-2" />
          <span>BACK</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            <h1 className="text-2xl sm:text-3xl font-bold my-6 sm:my-10">#7 INCLUDE METAVERSE IN GAMFI</h1>
            <p className="mb-4 sm:mb-8 font-semibold text-base sm:text-lg">BY: ADAM SMITH <span className='text-green-600'> <span>•</span> Executed,</span> on April 23rd, 2022</p>
            <p className="text-sm sm:text-base lg:w-5/6">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>
            <p className='mb-6 sm:mb-8 mt-2 text-green-600 text-base sm:text-lg font-semibold break-words'>58cvv63BAe2Fc44dA742Df13CD3ee94b6bB868ea4xd</p>
            
            {/* Full-Width Voting Section */}
            <div className="bg-[#1c1830] p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">CAST YOUR VOTE</h2>
              <div className="mb-4 sm:mb-6 -mx-4 sm:-mx-6">
                <div className="bg-[#251f3f] flex flex-col sm:flex-row">
                  <button
                    className="flex-1 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-start text-white border-b sm:border-b-0 sm:border-r border-gray-600"
                    onClick={() => setSelectedVote('yes')}
                  >
                    <VoteCircle isSelected={selectedVote === 'yes'} />
                    Yes, I'm in
                  </button>
                  <button
                    className="flex-1 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-start text-white"
                    onClick={() => setSelectedVote('no')}
                  >
                    <VoteCircle isSelected={selectedVote === 'no'} />
                    No, I don't
                  </button>
                </div>
              </div>
              <button 
                className="bg-[#7f5af0] text-white py-3 sm:py-5 px-6 sm:px-8 font-semibold hover:bg-[#6b4cd3] w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                SUBMIT VOTE
              </button>
            </div>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Multi-chain Voting</h2>
              <p className="text-gray-400 text-sm sm:text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
              </p>
              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
                Many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Development</h2>
              <p className="text-gray-400 text-sm sm:text-base">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.</p>
            </div>

            {/* Updated Votes Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
                <h2 className="text-xl sm:text-2xl font-bold">VOTES (152)</h2>
                <a href="#" className="text-base sm:text-xl font-semibold">SEE ALL VOTES</a>
              </div>
              <div className="space-y-4">
                {voteData.map((vote, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 sm:py-4 border-b border-gray-700">
                    <div className="flex items-center w-full sm:w-1/3 mb-2 sm:mb-0">
                      <img src={`/api/placeholder/32/32`} alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3" />
                      <span className="font-semibold text-sm sm:text-base break-all">{vote.address}</span>
                    </div>
                    <span className="text-white text-base sm:text-lg font-semibold w-full sm:w-1/3 text-left sm:text-center mb-2 sm:mb-0">{vote.vote}</span>
                    <span className="text-base sm:text-lg font-semibold w-full sm:w-1/3 text-left sm:text-right">{vote.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-[#1c1830] mb-6 sm:mb-8 p-4 sm:p-6 font-semibold text-sm sm:text-base">
              <div className="flex items-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold mr-2">CURRENT RESULTS</h2>
                <div className="w-16 sm:w-20 h-3 sm:h-4">
                  <svg viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8h80M10 0l10 8-10 8M30 0l10 8-10 8M50 0l10 8-10 8M70 0l10 8-10 8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              
              {results.map((result, index) => (
                <div key={index} className="mb-4 sm:mb-6">
                  <div className="flex text-xs sm:text-sm mb-1 sm:mb-1.5">
                    <span className="text-gray-400 mr-2">{result.label}</span>
                    <span className="text-gray-400">{result.value.toLocaleString()} ({result.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1 sm:h-1.5">
                    <div 
                      className={`${result.color} h-1 sm:h-1.5`} 
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1c1830] p-4 sm:p-6 font-semibold text-base sm:text-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold mr-2">INFORMATION</h2>
                <div className="w-16 sm:w-20 h-3 sm:h-4">
                  <svg viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8h80M10 0l10 8-10 8M30 0l10 8-10 8M50 0l10 8-10 8M70 0l10 8-10 8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between mb-3 sm:mb-6">
                <span className="text-gray-400">Creator</span>
                <span>@RvmZwx4s</span>
              </div>
              <div className="flex justify-between mb-3 sm:mb-6">
                <span className="text-gray-400">Address</span>
                <span className="break-all text-right">56sxd6xy6...e84sd</span>
              </div>
              <div className="flex justify-between mb-3 sm:mb-6">
                <span className="text-gray-400">Start Date</span>
                <span className="text-right">Mar 15, 2022, 12:00 AM</span>
              </div>
              <div className="flex justify-between mb-3 sm:mb-6">
                <span className="text-gray-400">End Date</span>
                <span className="text-right">Mar 18, 2022, 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Snapshot</span>
                <span>93,586,256</span>
              </div>
              <button className="bg-[#251f3f] uppercase text-white w-full mt-6 sm:mt-10 mb-4 sm:mb-6 py-3 sm:py-5 px-4 sm:px-6 font-semibold hover:bg-[#3d2d6e]">
                  Discussion
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default GamFiVotingPage;