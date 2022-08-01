import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppleLogo from '../../assets/svg/apple-logo.svg';
import GoogleLogo from '../../assets/svg/google-logo.svg';
import StickIllustrationSvg from '../../assets/svg/stick-illustration.svg';
import TwitterLogo from '../../assets/svg/twitter-logo.svg';
import { Box } from '../Box';
import { Button } from '../Button';
import { Column } from '../Column';
import Divider from '../Divider/Divider';
import { Row } from '../Row';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

export interface IAuthScreen {}
const AuthScreen: React.FC<IAuthScreen> = () => {
  return (
    <Row>
      <Box className="hidden sm:flex flex-1 h-screen bg-[#1D9BF0] ">
        <Column className="px-28 py-20  space-y-6 items-center">
          <Column>
            <Text className="text-4xl font-bold text-white">Veja o que</Text>
            <Text className="text-4xl font-bold text-white">
              está acontecendo agora
            </Text>
            <Text className="text-xl font-semibold text-white py-6">
              Inscreva se no twitter hoje mesmo
            </Text>
          </Column>
          <Image
            src={StickIllustrationSvg}
            width={630}
            height={630}
            alt="stick-illustration"
          />
          <Text className="text-sm font-normal text-white opacity-90 text-center">
            © 2022 Twitter, Inc.
          </Text>
        </Column>
      </Box>
      <Box className="bg-white flex-1 h-screen px-32 py-20">
        <Row className="flex items-center justify-between">
          <Image
            src={TwitterLogo}
            alt="twitter-logo"
            className="flex-shrink-0"
          />
          <Row className="space-x-1">
            <Text className="text-sm font-normal">Não tem uma conta?</Text>
            <Link href="#">
              <Text className="text-[#1D9BF0] font-bold cursor-pointer">
                Inscreva-se
              </Text>
            </Link>
          </Row>
        </Row>
        <Column className=" py-14 space-y-5 ">
          <Column className="space-y-12">
            <Column>
              <Text className="flex-2 text-5xl font-bold">Descubra o que</Text>
              <Text className="flex-2 text-5xl font-bold">está em alta</Text>
            </Column>
            <Text className="text-[#757575] font-semibold text-xl">
              Entre no Twitter
            </Text>
          </Column>
          <TextInput
            placeholder="Celular, e-mail ou nome de usuário"
            className="h-14 w-full bg-[#EEEEEE] rounded-md placeholder:text-sm placeholder:text-[#757575] px-3 py-2"
          />
          <TextInput
            placeholder="Digite sua senha"
            className="h-14 w-full bg-[#EEEEEE] rounded-md placeholder:text-sm placeholder:text-[#757575] px-3 py-2"
          />
          <Link href="#">
            <Text className="text-sm font-light cursor-pointer text-end">
              Esqueceu a senha?
            </Text>
          </Link>
          <Column className="py-10 space-y-9">
            <Button>Conecte-se agora</Button>
            <Divider label="ou" />
            <Row className="flex justify-center space-x-4 w-full">
              <Button className="bg-neutral-100 ">
                <Image src={GoogleLogo} alt="google-logo" />
                <Text className="text-sm font-semibold text-[#616263] text-opacity-75 px-2">
                  Entrar com Google
                </Text>
              </Button>
              <Button className="bg-black">
                <Image src={AppleLogo} alt="apple-logo" />
                <Text className="text-sm font-semibold text-white px-2">
                  Entrar com Apple
                </Text>
              </Button>
            </Row>
          </Column>
        </Column>
      </Box>
    </Row>
  );
};

export default AuthScreen;
