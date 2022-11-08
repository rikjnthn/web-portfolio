import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  fonts: {},
  breakpoints: {
    lg: "780px",
    csm: '647px' //custom sm breakpoint
  },
  colors: {
    customBlack: "#1E1E1E"
  },
  styles: {
    global: {
      'body': {
        backgroundColor: 'blackAlpha.900' 
      }
    }
  }
})

export default customTheme
