import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const macbook = `/images/macbook${useColorModeValue('', '-dark')}.png`

  return (
    <Link  href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image
          ml={2}
          src={macbook} width={22} height={22} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
    &nbsp;Jorge Del Castillo
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
