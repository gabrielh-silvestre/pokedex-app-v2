import { createContext } from "react";

import { ListContext } from "../../@types/types";

const listContext = createContext<ListContext>(
  {} as ListContext
);

export { listContext };
