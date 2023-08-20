import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const CardBalance2 = () => {
  return (
    <Card
      css={{
        mw: "375px",
        bg: "$accents0",
        borderRadius: "$xl",
        px: "$6",
      }}
    >
      <Card.Body css={{ py: "$10" }}>
        <Flex css={{ gap: "$5" }}>
          <Community color={"$accents9"} />
          <Flex direction={"column"}>
            <Text span css={{ color: "" }}>
              Total Sales
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: "$6", py: "$4" }} align={"center"}>
          <Text span size={"$xl"} css={{ color: "" }} weight={"semibold"}>
            ₹45,910
          </Text>
          <Text span css={{ color: "$green600" }} size={"$xs"}>
            + 4.5%
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  );
};
