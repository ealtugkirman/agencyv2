"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

import React from "react";

const AccordionCom = ({header, content, key}) => {
  return (
    <Accordion>
      <AccordionItem key={key} aria-label={header} title={header}>
        {content}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCom;
