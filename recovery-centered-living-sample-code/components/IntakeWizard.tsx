import React, { useState } from 'react';
import { HouseType, IntakeFormData } from '../types';

export const IntakeWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<IntakeFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    houseType: '',
    urgency: 'Flexible',
    sobrietyDate: '',
    hasInsurance: false,
    referralSource: ''
  });

  const updateField = (field: keyof IntakeFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const renderProgressBar = () => {
    const percentage = (step / 3) * 100;
    return (
      <div className="w-full h-2 bg-stone-200 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-brand-sage transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto border border-stone-100">
      {renderProgressBar()}
      
      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
          <h2 className="text-2xl font-serif font-bold text-brand-text mb-2">Let's find the right home for you.</h2>
          <p className="text-stone-600 mb-6">This quick prescreen takes about 2 minutes. Your info is confidential.</p>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                    <input 
                        type="text" 
                        className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-brand-earth focus:border-transparent outline-none transition-all"
                        value={formData.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                    <input 
                        type="text" 
                        className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-brand-earth focus:border-transparent outline-none transition-all"
                        value={formData.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                <input 
                    type="tel" 
                    className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-brand-earth focus:border-transparent outline-none transition-all"
                    placeholder="(512) 555-0123"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
                <button 
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.houseType === HouseType.MEN ? 'border-brand-earth bg-brand-earth/10' : 'border-stone-200 hover:border-brand-earth/50'}`}
                    onClick={() => updateField('houseType', HouseType.MEN)}
                >
                    <span className="block font-bold text-lg">Men's Home</span>
                    <span className="text-sm text-stone-600">South Austin</span>
                </button>
                <button 
                    className={`p-4 rounded-xl border-2 text-left transition-all ${formData.houseType === HouseType.WOMEN ? 'border-brand-earth bg-brand-earth/10' : 'border-stone-200 hover:border-brand-earth/50'}`}
                    onClick={() => updateField('houseType', HouseType.WOMEN)}
                >
                    <span className="block font-bold text-lg">Women's Home</span>
                    <span className="text-sm text-stone-600">North Austin</span>
                </button>
            </div>
          </div>

          <button 
            onClick={handleNext}
            disabled={!formData.firstName || !formData.phone || !formData.houseType}
            className="w-full mt-8 bg-brand-sunset text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Step →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
          <h2 className="text-2xl font-serif font-bold text-brand-text mb-6">A few details about your needs.</h2>
          
          <div className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">When do you need housing?</label>
                <div className="flex gap-3">
                    {['Emergency (ASAP)', '1-2 Weeks', 'Flexible'].map(opt => (
                        <button
                            key={opt}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${formData.urgency === opt ? 'bg-brand-sage text-white border-brand-sage' : 'bg-white text-stone-600 border-stone-200'}`}
                            onClick={() => updateField('urgency', opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Sobriety Date</label>
                <input 
                    type="date" 
                    className="w-full p-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-brand-earth focus:border-transparent outline-none"
                    value={formData.sobrietyDate}
                    onChange={(e) => updateField('sobrietyDate', e.target.value)}
                />
                <p className="text-xs text-stone-500 mt-1">We generally require 7 days of sobriety, but exceptions are possible.</p>
            </div>

            <div>
                <label className="flex items-center gap-3 p-3 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50">
                    <input 
                        type="checkbox" 
                        className="w-5 h-5 text-brand-earth rounded focus:ring-brand-earth"
                        checked={formData.hasInsurance}
                        onChange={(e) => updateField('hasInsurance', e.target.checked)}
                    />
                    <span className="text-stone-700 font-medium">I have health insurance</span>
                </label>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button onClick={handleBack} className="px-6 py-4 text-stone-500 font-medium hover:text-stone-800">Back</button>
            <button 
                onClick={handleNext}
                className="flex-1 bg-brand-sunset text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition-all"
            >
                Last Step →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-serif font-bold text-brand-text mb-2">Application Received!</h2>
          <p className="text-stone-600 mb-8">Thanks, {formData.firstName}. We've sent a confirmation text to {formData.phone}. A team member will reach out shortly to schedule your interview.</p>
          
          <div className="bg-brand-sand p-6 rounded-xl text-left mb-6">
            <h4 className="font-bold text-brand-earth mb-2">Next Steps:</h4>
            <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                    <span className="bg-brand-earth text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    Wait for our call (usually within 2 hours during business days).
                </li>
                <li className="flex items-start gap-2">
                    <span className="bg-brand-earth text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    Prepare for a 15-minute phone interview.
                </li>
                <li className="flex items-start gap-2">
                    <span className="bg-brand-earth text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    Schedule an in-person or virtual tour.
                </li>
            </ul>
          </div>

          <button className="text-brand-earth font-bold hover:underline" onClick={() => window.location.reload()}>
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};