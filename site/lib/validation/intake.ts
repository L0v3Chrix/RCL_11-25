import { z } from 'zod';

// Step 1: Quick Prescreen
export const step1Schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Please enter a valid phone number'),
  houseType: z.enum(['men', 'women', 'unsure'], { required_error: 'Please select an option' }),
  urgency: z.enum(['immediate', 'this-week', 'this-month', 'exploring'], { required_error: 'Please select urgency' }),
  referralSource: z.string().min(1, 'Please tell us how you heard about us'),
});

// Step 2: Full Application
export const step2Schema = z.object({
  sobrietyDate: z.string().min(1, 'Please provide your sobriety date'),
  previousTreatment: z.enum(['yes', 'no']),
  previousTreatmentDetails: z.string().optional(),
  recoveryProgram: z.enum(['12-step', 'smart', 'mat', 'dharma', 'holistic', 'none', 'other']),
  employmentStatus: z.enum(['employed', 'unemployed', 'student', 'disabled', 'other']),
  incomeRange: z.enum(['0-500', '500-1000', '1000-2000', '2000-plus', 'prefer-not-to-say']),
  hasInsurance: z.enum(['yes', 'no', 'not-sure']),
  medicalNeeds: z.string().max(500, 'Please keep this under 500 characters').optional(),
  medications: z.string().max(500, 'Please keep this under 500 characters').optional(),
  legalStatus: z.string().max(500, 'Please keep this under 500 characters').optional(),
  emergencyContact: z.string().min(1, 'Emergency contact is required'),
  emergencyPhone: z.string().regex(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Please enter a valid phone number'),
});

// Step 3: Interview Scheduling
export const step3Schema = z.object({
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']),
  visitType: z.enum(['in-person', 'video']),
  additionalNotes: z.string().max(1000).optional(),
});

// Combined full form schema
export const fullIntakeSchema = step1Schema.merge(step2Schema).merge(step3Schema);

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type FullIntakeData = z.infer<typeof fullIntakeSchema>;
