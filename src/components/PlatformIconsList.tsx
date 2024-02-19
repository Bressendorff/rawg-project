import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const getIcon = (slug: string) => {
    return iconMap[slug] ?? FaGlobe;
  };

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    ios: IoIosPhonePortrait,
  };

  return (
    <HStack marginRight={1}>
      {platforms.map((p) => (
        <Icon key={p.id} as={getIcon(p.slug)} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
