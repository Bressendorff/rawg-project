import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  //   const getIcon = (icon_slug: string) => {
  //     switch (icon_slug) {
  //       case "pc":
  //         return FaWindows;
  //       case "linux":
  //         return FaLinux;
  //     }
  //   };

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
  };

  return (
    <HStack margin={1}>
      {platforms.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
