'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  step1Schema,
  step2Schema,
  step3Schema,
  type Step1Data,
  type Step2Data,
  type Step3Data,
  type FullIntakeData
} from '@/lib/validation/intake';

type IntakeStep = 1 | 2 | 3;

const STORAGE_KEY = 'rcl_intake_draft';

export default function IntakeWizard() {
  const [currentStep, setCurrentStep] = useState<IntakeStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Step 1 form
  const form1 = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    mode: 'onBlur',
  });

  // Step 2 form
  const form2 = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: 'onBlur',
  });

  // Step 3 form
  const form3 = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: 'onBlur',
  });

  // Load saved draft on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem(STORAGE_KEY);
    if (savedDraft) {
      try {
        const data = JSON.parse(savedDraft);
        if (data.step1) form1.reset(data.step1);
        if (data.step2) form2.reset(data.step2);
        if (data.step3) form3.reset(data.step3);
        if (data.currentStep) setCurrentStep(data.currentStep);
      } catch (e) {
        console.error('Failed to load saved draft:', e);
      }
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    const subscription1 = form1.watch((value) => {
      saveDraft();
    });
    const subscription2 = form2.watch((value) => {
      saveDraft();
    });
    const subscription3 = form3.watch((value) => {
      saveDraft();
    });
    return () => {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
      subscription3.unsubscribe();
    };
  }, [form1, form2, form3]);

  const saveDraft = () => {
    const draft = {
      step1: form1.getValues(),
      step2: form2.getValues(),
      step3: form3.getValues(),
      currentStep,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  };

  const goToStep = (step: IntakeStep) => {
    setCurrentStep(step);
    saveDraft();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStep1Submit = async (data: Step1Data) => {
    goToStep(2);
  };

  const handleStep2Submit = async (data: Step2Data) => {
    goToStep(3);
  };

  const handleStep3Submit = async (data: Step3Data) => {
    setIsSubmitting(true);

    try {
      // Combine all form data
      const fullData: FullIntakeData = {
        ...form1.getValues(),
        ...form2.getValues(),
        ...data,
      };

      // TODO: Submit to API endpoint
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Clear saved draft
      localStorage.removeItem(STORAGE_KEY);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Intake submission error:', error);
      alert('There was an error submitting your application. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = (currentStep / 3) * 100;

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12 border-2 border-primary-200 shadow-xl">
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-brand-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-4">Application Received!</h2>
          <p className="text-lg text-brand-text mb-6 leading-relaxed">
            Thank you for taking this important step. Slade or Chloe will personally review your application and reach out within 24 hours to schedule your interview.
          </p>
          <div className="bg-white/60 rounded-lg p-6 mb-6">
            <p className="text-sm text-primary-700 mb-2">What happens next:</p>
            <ul className="text-left text-sm text-brand-text space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-brand-success mt-1">✓</span>
                <span>Personal review by our founders within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-success mt-1">✓</span>
                <span>Phone call to schedule your house visit or video interview</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-success mt-1">✓</span>
                <span>Meet our community and see if it&apos;s the right fit</span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-primary-600">
            If you need to reach us sooner, call or text us directly. For crisis support, call <strong>988</strong> anytime.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-2 items-center">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => step < currentStep ? goToStep(step as IntakeStep) : null}
                disabled={step > currentStep}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                  step === currentStep
                    ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white scale-110 shadow-lg'
                    : step < currentStep
                    ? 'bg-brand-success text-white cursor-pointer hover:scale-105'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                {step < currentStep ? '✓' : step}
              </button>
            ))}
          </div>
          <span className="text-sm font-medium text-primary-700">
            Step {currentStep} of 3
          </span>
        </div>
        <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-brand-accent transition-all duration-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Step 1: Quick Prescreen */}
      {currentStep === 1 && (
        <form onSubmit={form1.handleSubmit(handleStep1Submit)} className="space-y-6">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-200 shadow-lg">
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-2">Welcome to Recovery Centered Living</h2>
            <p className="text-brand-text mb-8">Let&apos;s start with some basic information so we can support you best.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">First Name *</label>
                <input
                  {...form1.register('firstName')}
                  type="text"
                  className="w-full h-[52px] px-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
                  placeholder="Your first name"
                />
                {form1.formState.errors.firstName && (
                  <p className="text-sm text-red-600 mt-1">{form1.formState.errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Last Name *</label>
                <input
                  {...form1.register('lastName')}
                  type="text"
                  className="w-full h-[52px] px-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
                  placeholder="Your last name"
                />
                {form1.formState.errors.lastName && (
                  <p className="text-sm text-red-600 mt-1">{form1.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Email *</label>
                <input
                  {...form1.register('email')}
                  type="email"
                  className="w-full h-[52px] px-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
                  placeholder="your@email.com"
                />
                {form1.formState.errors.email && (
                  <p className="text-sm text-red-600 mt-1">{form1.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Phone Number *</label>
                <input
                  {...form1.register('phone')}
                  type="tel"
                  className="w-full h-[52px] px-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
                  placeholder="(512) 555-1234"
                />
                {form1.formState.errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{form1.formState.errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-primary-900 mb-3">Which house are you interested in? *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'men', label: "Men's House", icon: '👔' },
                  { value: 'women', label: "Women's House", icon: '👗' },
                  { value: 'unsure', label: "Not Sure Yet", icon: '❓' },
                ].map((option) => (
                  <label key={option.value} className="relative cursor-pointer">
                    <input
                      {...form1.register('houseType')}
                      type="radio"
                      value={option.value}
                      className="peer sr-only"
                    />
                    <div className="h-[52px] flex items-center justify-center gap-2 border-2 border-primary-200 rounded-lg peer-checked:border-primary-600 peer-checked:bg-primary-50 peer-checked:shadow-lg transition-all hover:border-primary-300">
                      <span className="text-xl">{option.icon}</span>
                      <span className="font-medium text-brand-text peer-checked:text-primary-900">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
              {form1.formState.errors.houseType && (
                <p className="text-sm text-red-600 mt-2">{form1.formState.errors.houseType.message}</p>
              )}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-primary-900 mb-3">When are you looking to move in? *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'immediate', label: 'Right Now', color: 'red' },
                  { value: 'this-week', label: 'This Week', color: 'orange' },
                  { value: 'this-month', label: 'This Month', color: 'yellow' },
                  { value: 'exploring', label: 'Just Exploring', color: 'green' },
                ].map((option) => (
                  <label key={option.value} className="relative cursor-pointer">
                    <input
                      {...form1.register('urgency')}
                      type="radio"
                      value={option.value}
                      className="peer sr-only"
                    />
                    <div className="h-[52px] flex items-center justify-center text-center px-2 border-2 border-primary-200 rounded-lg peer-checked:border-primary-600 peer-checked:bg-primary-50 peer-checked:shadow-lg transition-all hover:border-primary-300">
                      <span className="text-sm font-medium text-brand-text peer-checked:text-primary-900">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
              {form1.formState.errors.urgency && (
                <p className="text-sm text-red-600 mt-2">{form1.formState.errors.urgency.message}</p>
              )}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-primary-900 mb-2">How did you hear about us? *</label>
              <input
                {...form1.register('referralSource')}
                type="text"
                className="w-full h-[52px] px-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
                placeholder="Google search, friend referral, treatment center, etc."
              />
              {form1.formState.errors.referralSource && (
                <p className="text-sm text-red-600 mt-1">{form1.formState.errors.referralSource.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-lg"
            >
              Continue to Full Application →
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Full Application */}
      {currentStep === 2 && (
        <form onSubmit={form2.handleSubmit(handleStep2Submit)} className="space-y-6">
          <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 border border-secondary-200 shadow-lg">
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-2">Tell Us About Your Recovery Journey</h2>
            <p className="text-brand-text mb-8">This helps us provide the best support and match you with the right community.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Sobriety Date *</label>
                <input
                  {...form2.register('sobrietyDate')}
                  type="date"
                  className="w-full h-[52px] px-4 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base"
                />
                <p className="text-xs text-primary-600 mt-1">Your most recent date of sobriety</p>
                {form2.formState.errors.sobrietyDate && (
                  <p className="text-sm text-red-600 mt-1">{form2.formState.errors.sobrietyDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-3">Have you been to treatment before? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                  ].map((option) => (
                    <label key={option.value} className="relative cursor-pointer">
                      <input
                        {...form2.register('previousTreatment')}
                        type="radio"
                        value={option.value}
                        className="peer sr-only"
                      />
                      <div className="h-[52px] flex items-center justify-center border-2 border-secondary-200 rounded-lg peer-checked:border-secondary-600 peer-checked:bg-secondary-50 peer-checked:shadow-lg transition-all hover:border-secondary-300">
                        <span className="font-medium text-brand-text peer-checked:text-secondary-900">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {form2.formState.errors.previousTreatment && (
                  <p className="text-sm text-red-600 mt-2">{form2.formState.errors.previousTreatment.message}</p>
                )}
              </div>

              {form2.watch('previousTreatment') === 'yes' && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-medium text-primary-900 mb-2">Tell us about your treatment history (optional)</label>
                  <textarea
                    {...form2.register('previousTreatmentDetails')}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base resize-none"
                    placeholder="Where did you go? How long? What was helpful?"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-3">What recovery program(s) resonate with you? *</label>
                <p className="text-xs text-primary-600 mb-3">We welcome ALL pathways - this is the Recovery Spectrum 🌈</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { value: '12-step', label: '12-Step', emoji: '🔴' },
                    { value: 'smart', label: 'SMART Recovery', emoji: '🟠' },
                    { value: 'mat', label: 'MAT/Harm Reduction', emoji: '🟢' },
                    { value: 'dharma', label: 'Recovery Dharma', emoji: '🟡' },
                    { value: 'holistic', label: 'Holistic/Spiritual', emoji: '🔵' },
                    { value: 'none', label: 'Still Exploring', emoji: '⚪' },
                  ].map((option) => (
                    <label key={option.value} className="relative cursor-pointer">
                      <input
                        {...form2.register('recoveryProgram')}
                        type="radio"
                        value={option.value}
                        className="peer sr-only"
                      />
                      <div className="h-[52px] flex items-center justify-center gap-2 text-center px-2 border-2 border-secondary-200 rounded-lg peer-checked:border-secondary-600 peer-checked:bg-secondary-50 peer-checked:shadow-lg transition-all hover:border-secondary-300">
                        <span>{option.emoji}</span>
                        <span className="text-sm font-medium text-brand-text peer-checked:text-secondary-900">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {form2.formState.errors.recoveryProgram && (
                  <p className="text-sm text-red-600 mt-2">{form2.formState.errors.recoveryProgram.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-3">Employment Status *</label>
                  <select
                    {...form2.register('employmentStatus')}
                    className="w-full h-[52px] px-4 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base"
                  >
                    <option value="">Select...</option>
                    <option value="employed">Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                    <option value="disabled">Disabled</option>
                    <option value="other">Other</option>
                  </select>
                  {form2.formState.errors.employmentStatus && (
                    <p className="text-sm text-red-600 mt-1">{form2.formState.errors.employmentStatus.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-3">Monthly Income Range *</label>
                  <select
                    {...form2.register('incomeRange')}
                    className="w-full h-[52px] px-4 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base"
                  >
                    <option value="">Select...</option>
                    <option value="0-500">$0 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000-plus">$2,000+</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {form2.formState.errors.incomeRange && (
                    <p className="text-sm text-red-600 mt-1">{form2.formState.errors.incomeRange.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-3">Do you have insurance? *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                    { value: 'not-sure', label: 'Not Sure' },
                  ].map((option) => (
                    <label key={option.value} className="relative cursor-pointer">
                      <input
                        {...form2.register('hasInsurance')}
                        type="radio"
                        value={option.value}
                        className="peer sr-only"
                      />
                      <div className="h-[52px] flex items-center justify-center border-2 border-secondary-200 rounded-lg peer-checked:border-secondary-600 peer-checked:bg-secondary-50 peer-checked:shadow-lg transition-all hover:border-secondary-300">
                        <span className="font-medium text-brand-text peer-checked:text-secondary-900">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {form2.formState.errors.hasInsurance && (
                  <p className="text-sm text-red-600 mt-2">{form2.formState.errors.hasInsurance.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">Medical needs we should know about? (optional)</label>
                  <textarea
                    {...form2.register('medicalNeeds')}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base resize-none"
                    placeholder="Diabetes, mobility issues, dietary restrictions, etc."
                  />
                  <p className="text-xs text-primary-600 mt-1">500 characters max</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">Current medications? (optional)</label>
                  <textarea
                    {...form2.register('medications')}
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base resize-none"
                    placeholder="List any medications you're currently taking"
                  />
                  <p className="text-xs text-primary-600 mt-1">500 characters max</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Legal status or obligations? (optional)</label>
                <textarea
                  {...form2.register('legalStatus')}
                  rows={2}
                  maxLength={500}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base resize-none"
                  placeholder="Probation, parole, pending court cases, etc."
                />
                <p className="text-xs text-primary-600 mt-1">This is confidential and helps us support you better</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">Emergency Contact Name *</label>
                  <input
                    {...form2.register('emergencyContact')}
                    type="text"
                    className="w-full h-[52px] px-4 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base"
                    placeholder="Name and relationship"
                  />
                  {form2.formState.errors.emergencyContact && (
                    <p className="text-sm text-red-600 mt-1">{form2.formState.errors.emergencyContact.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">Emergency Contact Phone *</label>
                  <input
                    {...form2.register('emergencyPhone')}
                    type="tel"
                    className="w-full h-[52px] px-4 border-2 border-secondary-200 rounded-lg focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 transition-all text-base"
                    placeholder="(512) 555-1234"
                  />
                  {form2.formState.errors.emergencyPhone && (
                    <p className="text-sm text-red-600 mt-1">{form2.formState.errors.emergencyPhone.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => goToStep(1)}
              className="px-6 py-3 border-2 border-primary-300 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-brand-accent text-white font-bold rounded-lg hover:from-secondary-700 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-lg"
            >
              Continue to Interview Scheduling →
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Interview Scheduling */}
      {currentStep === 3 && (
        <form onSubmit={form3.handleSubmit(handleStep3Submit)} className="space-y-6">
          <div className="bg-gradient-to-br from-brand-accent/10 to-white rounded-2xl p-8 border border-primary-200 shadow-lg">
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-2">Almost There! Let&apos;s Schedule Your Interview</h2>
            <p className="text-brand-text mb-8">We&apos;ll meet with you to answer questions and see if we&apos;re the right fit for each other.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Preferred Interview Date *</label>
                <input
                  {...form3.register('preferredDate')}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full h-[52px] px-4 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
                />
                {form3.formState.errors.preferredDate && (
                  <p className="text-sm text-red-600 mt-1">{form3.formState.errors.preferredDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-3">Preferred Time of Day *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'morning', label: 'Morning', emoji: '🌅', time: '8am-12pm' },
                    { value: 'afternoon', label: 'Afternoon', emoji: '☀️', time: '12pm-5pm' },
                    { value: 'evening', label: 'Evening', emoji: '🌙', time: '5pm-8pm' },
                  ].map((option) => (
                    <label key={option.value} className="relative cursor-pointer">
                      <input
                        {...form3.register('preferredTime')}
                        type="radio"
                        value={option.value}
                        className="peer sr-only"
                      />
                      <div className="h-[70px] flex flex-col items-center justify-center border-2 border-primary-200 rounded-lg peer-checked:border-primary-600 peer-checked:bg-primary-50 peer-checked:shadow-lg transition-all hover:border-primary-300">
                        <span className="text-2xl mb-1">{option.emoji}</span>
                        <span className="font-medium text-brand-text peer-checked:text-primary-900 text-sm">{option.label}</span>
                        <span className="text-xs text-primary-600">{option.time}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {form3.formState.errors.preferredTime && (
                  <p className="text-sm text-red-600 mt-2">{form3.formState.errors.preferredTime.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-3">How would you like to meet? *</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'in-person', label: 'In-Person Visit', emoji: '🏠', desc: 'Come see the house' },
                    { value: 'video', label: 'Video Call', emoji: '💻', desc: 'Virtual interview' },
                  ].map((option) => (
                    <label key={option.value} className="relative cursor-pointer">
                      <input
                        {...form3.register('visitType')}
                        type="radio"
                        value={option.value}
                        className="peer sr-only"
                      />
                      <div className="h-[80px] flex flex-col items-center justify-center border-2 border-primary-200 rounded-lg peer-checked:border-primary-600 peer-checked:bg-primary-50 peer-checked:shadow-lg transition-all hover:border-primary-300">
                        <span className="text-3xl mb-1">{option.emoji}</span>
                        <span className="font-medium text-brand-text peer-checked:text-primary-900 text-sm">{option.label}</span>
                        <span className="text-xs text-primary-600">{option.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {form3.formState.errors.visitType && (
                  <p className="text-sm text-red-600 mt-2">{form3.formState.errors.visitType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-900 mb-2">Anything else we should know? (optional)</label>
                <textarea
                  {...form3.register('additionalNotes')}
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base resize-none"
                  placeholder="Questions, concerns, special circumstances, or anything you'd like us to know before we meet..."
                />
                <p className="text-xs text-primary-600 mt-1">1000 characters max</p>
              </div>
            </div>

            <div className="mt-8 bg-primary-50/50 rounded-lg p-6 border border-primary-200">
              <h3 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
                <span className="text-brand-accent text-xl">💛</span>
                What to Expect Next
              </h3>
              <ul className="text-sm text-brand-text space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-success mt-0.5">✓</span>
                  <span>Slade or Chloe will call you within 24 hours to confirm your interview time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-success mt-0.5">✓</span>
                  <span>The interview is casual - we&apos;re just getting to know each other</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-success mt-0.5">✓</span>
                  <span>If in-person, you&apos;ll see the house and meet some of the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-success mt-0.5">✓</span>
                  <span>No pressure - this is about finding the right fit for YOUR recovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => goToStep(2)}
              className="px-6 py-3 border-2 border-primary-300 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-all"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-brand-accent to-primary-600 text-white font-bold rounded-lg hover:from-primary-600 hover:to-brand-accent transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application 🎉'}
            </button>
          </div>
        </form>
      )}

      {/* Auto-save indicator */}
      <div className="text-center mt-4">
        <p className="text-xs text-primary-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Your progress is automatically saved
        </p>
      </div>
    </div>
  );
}
