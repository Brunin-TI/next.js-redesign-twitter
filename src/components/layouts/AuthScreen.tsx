import Image from 'next/image';
import React from 'react';
import StickIllustrationSvg from '../../assets/svg/stick-illustration.svg';
import { Box } from '../Box';
import { Column } from '../Column';
import { Row } from '../Row';
import { Text } from '../Text';

export interface IAuthScreen {}
const AuthScreen: React.FC<IAuthScreen> = () => {
  return (
    <Row>
      <Box className="hidden sm:flex flex-1 h-screen bg-[#1D9BF0] ">
        <Column>
          <Text className="text-4xl font-bold text-white">Veja o que</Text>
          <Text className="text-4xl font-bold text-white">
            está acontecendo agora
          </Text>
          <Text className="text-xl text-white font-semibold">
            inscreva se no twitter hoje mesmo
          </Text>
          <Image
            src={StickIllustrationSvg}
            width={630}
            height={630}
            alt="stick-illustration"
          />
        </Column>
      </Box>
      <Box className="bg-white flex-1 h-screen">Login here</Box>
    </Row>
  );
};

export default AuthScreen;
