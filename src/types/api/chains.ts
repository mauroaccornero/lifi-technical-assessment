export interface chainsApi {
  chains: chainData[];
}

export interface chainData {
  key: "string";
  id: number;
}
