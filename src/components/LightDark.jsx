import React from 'react'
import { Box, useColorMode, Icon } from '@chakra-ui/react'
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

const LightDark = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box
            position="fixed"
            bottom={{ base: 4, sm: 6, md: 8 }}
            right={{ base: 4, sm: 6, md: 8 }}
            zIndex="4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={toggleColorMode}
        >
            <Icon
                as={colorMode === "dark" ? GoSun : FaMoon}
                w={{ base: 6, sm: 7, md: 8, lg: 10 }}
                h={{ base: 6, sm: 7, md: 8, lg: 10 }}
            />
        </Box>
    );
}

export default LightDark;
