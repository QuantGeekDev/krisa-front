export interface KrisaStructure {
  krisaNumber: number;
  imageUrl: string;
}

export interface KrisaFromDb extends KrisaStructure {
  _id: string;
}
