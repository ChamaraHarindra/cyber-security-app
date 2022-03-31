import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          bg: mode("gray.50", "gray.800")(props),
        },
      }),
    },
    // components: {
    //   Tabs: {
    //     baseStyle: {
    //       tab: {
    //         color: "gray.600",
    //         _selected: {
    //           fontWeight: "bold",
    //           boxShadow: "none",
    //         },
    //       },
    //     },
    //   },
    //   Accordion: {
    //     baseStyle: {
    //       button: {
    //         paddingTop: 5,
    //         paddingBottom: 5,
    //         color: "blue.700",
    //         fontWeight: "bold",
    //       },
    //       panel: {
    //         paddingTop: 3,
    //         paddingBottom: 8,
    //       },
    //     },
    //   },
    //   Link: {
    //     // styles for the `a`
    //     baseStyle: {
    //       color: "blue.700",
    //       _hover: {
    //         textDecoration: "none",
    //         color: "blue.400",
    //       },
    //     },
    //     variants: {
    //       roundedGreen: {
    //         rounded: "full",
    //         bg: "brandGreen.700",
    //         color: "white",
    //         _hover: {
    //           bg: "brandGreen.500",
    //           color: "white",
    //         },
    //       },
    //       brandGreen: {
    //         bg: "brandGreen.700",
    //         color: "white",
    //         _hover: {
    //           bg: "brandGreen.500",
    //           color: "white",
    //         },
    //       },
    //       brandGreenGhost: {
    //         bg: "brandGreen.50",
    //         color: "brandGreen.700",
    //         _hover: {
    //           bg: "brandGreen.100",
    //           color: "brandGreen.800",
    //         },
    //       },
    //       ghostBlue: {
    //         rounded: "full",
    //         fontWeight: "bold",
    //         bg: "brandBlue.50",
    //         color: "brandBlue.700",

    //         _hover: {
    //           bg: "brandBlue.200",
    //           color: "brandBlue.700",
    //         },
    //       },
    //       roundedBlue: {
    //         rounded: "full",
    //         bg: "brandBlue.700",
    //         color: "white",
    //         paddingLeft: 4,
    //         paddingRight: 4,
    //         minHeight: "40px",
    //         display: "flex",
    //         alignItems: "center",
    //         _hover: {
    //           bg: "brandBlue.500",
    //           color: "white",
    //         },
    //       },
    //     },
    //   },
    //   Button: {
    //     variants: {
    //       link: {
    //         color: "brandBlue.700",
    //         _hover: {
    //           textDecoration: "none",
    //           color: "blue.400",
    //         },
    //       },
    //       roundedGreen: {
    //         rounded: "full",
    //         bg: "brandGreen.700",
    //         color: "white",
    //         _hover: {
    //           bg: "brandGreen.500",
    //           color: "white",
    //         },
    //       },
    //       brandGreen: {
    //         bg: "brandGreen.700",
    //         color: "white",
    //         _hover: {
    //           bg: "brandGreen.500",
    //           color: "white",
    //         },
    //       },
    //       brandGreenGhost: {
    //         bg: "brandGreen.50",
    //         color: "brandGreen.700",
    //         _hover: {
    //           bg: "brandGreen.100",
    //           color: "brandGreen.800",
    //         },
    //       },
    //       ghostBlue: {
    //         rounded: "full",
    //         fontWeight: "bold",
    //         bg: "brandBlue.50",
    //         color: "brandBlue.700",
    //         _hover: {
    //           bg: "brandBlue.200",
    //           color: "brandBlue.700",
    //         },
    //       },
    //       roundedBlue: {
    //         rounded: "full",
    //         bg: "brandBlue.700",
    //         color: "white",
    //         _hover: {
    //           bg: "brandBlue.500",
    //           color: "white",
    //         },
    //       },
    //     },
    //   },
    // },
    colors: {
      brandGreen: {
        50: "#d9ffff",
        100: "#adfff9",
        200: "#7dfff3",
        300: "#4dffee",
        400: "#26ffe9",
        500: "#15e6d0",
        600: "#00b3a2",
        700: "#008073",
        800: "#004e45",
        900: "#001c18",
      },
      brandBlue: {
        50: "#ebedff",
        100: "#c5c9ef",
        200: "#a0a5df",
        300: "#7a81d1",
        400: "#545dc3",
        500: "#3c44aa",
        600: "#2e3584",
        700: "#20265f",
        800: "#12173b",
        900: "#040819",
      },
    },
  }
  // withDefaultColorScheme({
  //   colorScheme: "brandBlue",
  //   components: ["Button", "Link"],
  // })
);

export default theme;
