import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface StatProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}