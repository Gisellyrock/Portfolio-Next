'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [starTransition, isPeding] = useTransition();

  const handleTabChange = (id) => {
    starTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="aboutme"
          src="/images/about-image.jpeg"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            animi quam neque autem itaque obcaecati deserunt iusto, quo nihil
            placeat quis quibusdam corrupti minus ut dolores repellendus numquam
            libero fuga?
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500}">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
