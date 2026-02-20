import React from 'react';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { useHomeData } from '../../hooks/home';

export const HomeScreen: React.FC = () => {
  const props = useHomeData();
  return <HomeTemplate {...props} />;
};
