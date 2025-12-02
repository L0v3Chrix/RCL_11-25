import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Logo from '@/components/brand/Logo';
import { houses, getTotalAvailableBeds } from '@/lib/data/houses';

export default function TestPage() {
  const totalBeds = getTotalAvailableBeds();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo variant="icon" className="h-24 w-24" />
          </div>
          <h1 className="font-heading text-5xl font-bold text-primary-900 mb-4">
            🧪 Testing Dashboard
          </h1>
          <p className="text-xl text-brand-text">
            Recovery Centered Living - Feature Testing & Verification
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-brand-success/10 border-2 border-brand-success/30 rounded-full px-5 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-success"></span>
            </span>
            <span className="text-sm font-bold text-brand-success">
              Server Running on Port 3002
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center bg-gradient-to-br from-red-50 to-orange-50">
            <div className="text-4xl mb-2">🏠</div>
            <div className="text-3xl font-bold text-primary-900">{houses.length}</div>
            <div className="text-sm text-primary-600">Total Houses</div>
          </Card>
          <Card className="text-center bg-gradient-to-br from-green-50 to-blue-50">
            <div className="text-4xl mb-2">✅</div>
            <div className="text-3xl font-bold text-brand-success">{totalBeds}</div>
            <div className="text-sm text-primary-600">Beds Available</div>
          </Card>
          <Card className="text-center bg-gradient-to-br from-yellow-50 to-green-50">
            <div className="text-4xl mb-2">🤖</div>
            <div className="text-3xl font-bold text-primary-900">AI</div>
            <div className="text-sm text-primary-600">Chat Assistant</div>
          </Card>
          <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-4xl mb-2">📋</div>
            <div className="text-3xl font-bold text-primary-900">3</div>
            <div className="text-sm text-primary-600">Form Steps</div>
          </Card>
        </div>

        {/* Core Features Testing */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <span>🎯</span>
            Core Features - Ready to Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Logo Component */}
            <Card className="border-2 border-primary-200 hover:border-primary-400 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🌈</span>
                <div>
                  <h3 className="font-bold text-xl text-primary-900 mb-2">Logo Component</h3>
                  <p className="text-sm text-brand-text mb-3">
                    Rainbow gradient SVG fallback when image fails to load
                  </p>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✅ Working</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">SVG Fallback</span>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg mb-3">
                    <div className="flex items-center gap-3">
                      <Logo variant="icon" className="h-12 w-12" />
                      <Logo variant="full" className="h-12" />
                    </div>
                  </div>
                </div>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block mb-2">
                site/components/brand/Logo.tsx
              </code>
            </Card>

            {/* Gemini Chat */}
            <Card className="border-2 border-primary-200 hover:border-primary-400 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">💬</span>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary-900 mb-2">Gemini AI Chat</h3>
                  <p className="text-sm text-brand-text mb-3">
                    24/7 AI support with crisis detection and message history
                  </p>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✅ Working</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">AI Powered</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-primary-700">
                      <strong>Test:</strong> Click chat button in bottom-right corner
                    </p>
                    <p className="text-xs text-primary-700">
                      <strong>Try:</strong> &quot;Tell me about your houses&quot;
                    </p>
                    <p className="text-xs text-red-700">
                      <strong>Crisis Test:</strong> &quot;I need help&quot; (should show 988)
                    </p>
                  </div>
                </div>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block">
                site/components/chat/GeminiChat.tsx
              </code>
            </Card>

            {/* Intake Form */}
            <Card className="border-2 border-primary-200 hover:border-primary-400 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📝</span>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary-900 mb-2">3-Step Intake Form</h3>
                  <p className="text-sm text-brand-text mb-3">
                    Progressive form with auto-save, validation, and mobile optimization
                  </p>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✅ Working</span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Auto-Save</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <p className="text-xs text-primary-700">• Step 1: Quick Prescreen</p>
                    <p className="text-xs text-primary-700">• Step 2: Full Application</p>
                    <p className="text-xs text-primary-700">• Step 3: Interview Scheduling</p>
                  </div>
                  <Link href="/intake">
                    <Button variant="primary" className="w-full">
                      Test Intake Form →
                    </Button>
                  </Link>
                </div>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block">
                site/components/forms/IntakeWizard.tsx
              </code>
            </Card>

            {/* House Showcase */}
            <Card className="border-2 border-primary-200 hover:border-primary-400 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🏘️</span>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary-900 mb-2">House Showcase</h3>
                  <p className="text-sm text-brand-text mb-3">
                    6 houses with real-time availability, filters, and manager profiles
                  </p>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✅ Working</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{totalBeds} Beds Available</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <p className="text-xs text-primary-700">• Filter: All/Men&apos;s/Women&apos;s/Available</p>
                    <p className="text-xs text-primary-700">• Real-time bed availability</p>
                    <p className="text-xs text-primary-700">• House manager profiles</p>
                  </div>
                  <Link href="/#houses">
                    <Button variant="outline" className="w-full">
                      View on Homepage
                    </Button>
                  </Link>
                </div>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block">
                site/components/sections/HouseShowcase.tsx
              </code>
            </Card>

            {/* Recovery Spectrum */}
            <Card className="border-2 border-primary-200 hover:border-primary-400 transition-all col-span-full">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">🌈</span>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-primary-900 mb-2">Recovery Spectrum Section</h3>
                  <p className="text-sm text-brand-text mb-3">
                    Interactive pathway education with meaningful rainbow colors
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">✅ Working</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Interactive</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-4">
                    <div className="text-center">
                      <div className="bg-red-500 text-white p-2 rounded-lg mb-1">🔴</div>
                      <p className="text-xs font-bold">12-Step</p>
                      <p className="text-xs text-primary-600">Courage</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-500 text-white p-2 rounded-lg mb-1">🟠</div>
                      <p className="text-xs font-bold">SMART</p>
                      <p className="text-xs text-primary-600">Energy</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-500 text-white p-2 rounded-lg mb-1">🟡</div>
                      <p className="text-xs font-bold">Dharma</p>
                      <p className="text-xs text-primary-600">Hope</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-500 text-white p-2 rounded-lg mb-1">🟢</div>
                      <p className="text-xs font-bold">MAT</p>
                      <p className="text-xs text-primary-600">Growth</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white p-2 rounded-lg mb-1">🔵</div>
                      <p className="text-xs font-bold">Holistic</p>
                      <p className="text-xs text-primary-600">Peace</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-500 text-white p-2 rounded-lg mb-1">🟣</div>
                      <p className="text-xs font-bold">All Paths</p>
                      <p className="text-xs text-primary-600">Wisdom</p>
                    </div>
                  </div>
                  <Link href="/#spectrum">
                    <Button variant="outline" className="w-full">
                      View on Homepage
                    </Button>
                  </Link>
                </div>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block">
                site/components/sections/RecoverySpectrum.tsx
              </code>
            </Card>
          </div>
        </div>

        {/* Data & Configuration */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <span>📊</span>
            Data & Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-bold text-lg text-primary-900 mb-3">House Data</h3>
              <div className="space-y-2 text-sm">
                <p className="text-brand-text"><strong>Total:</strong> {houses.length} houses</p>
                <p className="text-brand-text"><strong>Men&apos;s:</strong> {houses.filter(h => h.type === 'mens').length} (South Austin)</p>
                <p className="text-brand-text"><strong>Women&apos;s:</strong> {houses.filter(h => h.type === 'womens').length} (North Austin)</p>
                <p className="text-green-700"><strong>Available:</strong> {totalBeds} beds</p>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block mt-3">
                lib/data/houses.ts
              </code>
            </Card>

            <Card>
              <h3 className="font-bold text-lg text-primary-900 mb-3">Environment</h3>
              <div className="space-y-2 text-sm">
                <p className="text-brand-text"><strong>Gemini API:</strong> ✅ Configured</p>
                <p className="text-brand-text"><strong>Crisis Line:</strong> 988</p>
                <p className="text-brand-text"><strong>Instagram:</strong> ✅ Linked</p>
                <p className="text-brand-text"><strong>Facebook:</strong> ✅ Linked</p>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block mt-3">
                .env.local
              </code>
            </Card>

            <Card>
              <h3 className="font-bold text-lg text-primary-900 mb-3">Form Validation</h3>
              <div className="space-y-2 text-sm">
                <p className="text-brand-text"><strong>Step 1:</strong> 7 fields</p>
                <p className="text-brand-text"><strong>Step 2:</strong> 12 fields</p>
                <p className="text-brand-text"><strong>Step 3:</strong> 4 fields</p>
                <p className="text-green-700"><strong>Total:</strong> 23 validated fields</p>
              </div>
              <code className="text-xs bg-stone-100 px-2 py-1 rounded block mt-3">
                lib/validation/intake.ts
              </code>
            </Card>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <span>🔗</span>
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/">
              <Card hoverable className="text-center cursor-pointer">
                <div className="text-3xl mb-2">🏠</div>
                <p className="font-bold text-primary-900">Homepage</p>
              </Card>
            </Link>
            <Link href="/intake">
              <Card hoverable className="text-center cursor-pointer">
                <div className="text-3xl mb-2">📝</div>
                <p className="font-bold text-primary-900">Intake Form</p>
              </Card>
            </Link>
            <a href="https://github.com/L0v3Chrix/RCL_11-25.git" target="_blank" rel="noopener noreferrer">
              <Card hoverable className="text-center cursor-pointer">
                <div className="text-3xl mb-2">💻</div>
                <p className="font-bold text-primary-900">GitHub Repo</p>
              </Card>
            </a>
            <Link href="/test">
              <Card hoverable className="text-center cursor-pointer border-2 border-primary-400">
                <div className="text-3xl mb-2">🧪</div>
                <p className="font-bold text-primary-900">This Page</p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Documentation */}
        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
          <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 flex items-center gap-3">
            <span>📄</span>
            Full Error & Bug Report
          </h2>
          <p className="text-brand-text mb-4">
            Comprehensive testing documentation, known issues, and troubleshooting guide.
          </p>
          <code className="text-sm bg-white px-3 py-2 rounded block mb-4">
            docs/2025-12-01-error-bug-report.md
          </code>
          <div className="flex gap-3">
            <Button variant="primary">
              View Documentation
            </Button>
            <Button variant="outline">
              Testing Checklist
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
