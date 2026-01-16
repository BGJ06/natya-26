import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import NeonButton from '../components/NeonButton';

const CTASection = () => {
    return (
        <SectionWrapper className="!py-10 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <NeonButton
                    variant="primary"
                    icon={Sparkles}
                    href="https://forms.gle/js6PmSeo4DjtmCjQ7"
                    className="w-full md:w-auto text-lg py-4 px-10"
                >
                    REGISTER NOW
                </NeonButton>
                <NeonButton
                    variant="secondary"
                    icon={MapPin}
                    href="https://maps.app.goo.gl/XFDDetCCkBbBJRfUA"
                    className="w-full md:w-auto text-lg py-4 px-10"
                >
                    GET LOCATION
                </NeonButton>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
