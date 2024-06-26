import { Box, Heading  , Text} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props{
  heading: string;
  children: ReactNode | ReactNode[] ;
}
const DefinitionItem =({ heading, children }: Props) => {
  return (
      <Box my={5} >
          <Heading as={"dt"} fontSize={"md"} color={"gray.600"} mb={2}>{heading}</Heading>
          <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
