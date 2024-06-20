// import { Button } from "@chakra-ui/react";

// const CustomButton = (props) => {
//   return (
//     <Button
//       sx={{
//         width: "100%", // Buat button penuh lebar kontainer
//         padding: "0.5rem 1rem", // padding-x: 4, padding-y: 2
//         fontSize: "0.875rem", // text-sm
//         fontWeight: "500", // font-medium
//         color: "black", // text-gray-900
//         bg: "transparent", // bg-transparent
//         // border: "none", // Hilangkan border
//         borderRadius: "none", // Hilangkan border radius
//         borderBottom: "1px gray.900",
//         _hover: {
//           // bg: "gray.900", // hover:bg-gray-900
//           borderBottom:"1px solid white",
//           // color: "white", // hover:text-white
//         },
//         _focus: {
//           zIndex: "10", // focus:z-10
//           // outline: "2px solid",
//           // outlineColor: "gray.500", // focus:ring-2 focus:ring-gray-500
//           // bg: "gray.900", // focus:bg-gray-900
//           color: "white", // focus:text-white
//         },
//         "&.dark": {
//           color: "white", // dark:text-white
//           _hover: {
//             color: "white", // dark:hover:text-white
//             bg: "gray.700", // dark:hover:bg-gray-700
//           },
//           _focus: {
//             bg: "gray.700", // dark:focus:bg-gray-700
//           },
//         },
//       }}
//       {...props}
//     >
//       {props.children}
//     </Button>
//   );
// };

// export default CustomButton;

import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  return (
    <Button
      sx={{
        width: "100%", // Buat button penuh lebar kontainer
        padding: "0.5rem 1rem", // padding-x: 4, padding-y: 2
        fontSize: "0.875rem", // text-sm
        fontWeight: "500", // font-medium
        color: "black", // text-gray-900
        bg: "transparent", // bg-transparent
        borderRadius: "none", // Hilangkan border radius
        borderBottom: "1px solid gray", // Border bawah
        _hover: {
          borderBottom: "1px solid white", // Hover: border bawah warna putih
        },
        _focus: {
          zIndex: "10", // Fokus: Z-index 10
          color: "white", // Fokus: teks warna putih
        },
        _active: {
          bg: "transparent", // Klik: tetap transparan
          borderBottom: "1px solid black", // Klik: border bawah hitam untuk mode light
        },
        "&.dark": {
          color: "white", // Mode gelap: teks warna putih
          borderBottom: "1px solid white", // Border bawah mode gelap
          _hover: {
            color: "white", // Mode gelap: hover teks warna putih
            bg: "gray.700", // Mode gelap: hover background abu-abu gelap
          },
          _focus: {
            bg: "gray.700", // Mode gelap: fokus background abu-abu gelap
          },
          _active: {
            bg: "transparent", // Klik: tetap transparan
            borderBottom: "1px solid gray", // Klik: border bawah abu gelap untuk mode dark
          },
        },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;

