/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
usePage.ts (c) 2022
Desc: description
Created:  2022-04-30T16:09:14.261Z
Modified: 2022-04-30T16:09:43.466Z
*/

import { useState } from "react";

export default function usePage() {
  const [page, setPage] = useState(0);
  return {
    page,
    setPage
  };
}