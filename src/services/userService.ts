import create from "./hhtpService";

export interface User {
    id: number;
    name: string;
  }

export default create("users");