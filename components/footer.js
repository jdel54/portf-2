import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jorge Del Castillo.
      <br/>Big thanks to Takuya Matsuyama
    </Box>
  )
}

export default Footer
