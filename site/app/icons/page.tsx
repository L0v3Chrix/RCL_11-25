'use client';

import RCLIcon, { availableIcons } from '@/components/ui/RCLIcon';

export default function IconGalleryPage() {
    return (
        <div className="min-h-screen bg-[#FDF6E9] py-20 px-6">
            <div className="container mx-auto">
                <h1 className="font-heading text-5xl font-black text-[#1A1410] mb-4">
                    RCL Icon Gallery
                </h1>
                <p className="text-xl text-stone-600 mb-12 font-bold">
                    Custom icons with teal outline (#2F6F71) and warm tan fill (#D4A373)
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {availableIcons.map((iconName) => (
                        <div
                            key={iconName}
                            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center gap-4 hover:shadow-xl transition-shadow"
                        >
                            <RCLIcon name={iconName} size={48} />
                            <span className="text-sm font-bold text-stone-600 text-center">
                                {iconName}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="font-heading text-2xl font-black text-[#1A1410] mb-6">
                        Usage
                    </h2>
                    <pre className="bg-stone-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import RCLIcon from '@/components/ui/RCLIcon';

// Basic usage
<RCLIcon name="house" size={24} />

// With className and title
<RCLIcon name="heart" size={48} className="my-class" title="Love" />

// Available icons:
${availableIcons.map(name => `"${name}"`).join(', ')}`}
                    </pre>
                </div>
            </div>
        </div>
    );
}
