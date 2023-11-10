import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeader = styled.header`
  ${tw`
    z-[999] 
    relative
  `}
`;

export const StyledDiv = styled.div`
  ${tw`
    fixed
    top-0
    left-1/2 
    h-[4.5rem] 
    w-full
    rounded-none
    border
    border-white
    border-opacity-40
    bg-white
    bg-opacity-80
    shadow-lg
    shadow-black/[0.03]
    backdrop-blur-[0.5rem]
    sm:top-6
    sm:h-[3.25rem]
    sm:w-[36rem]
    sm:rounded-full 
    dark:bg-gray-950 
    dark:border-black/40
    dark:bg-opacity-75
  `}
`;
