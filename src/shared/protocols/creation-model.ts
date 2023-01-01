export type CreationModel<T> = Omit<T, "_id" | "createdAt" | "updatedAt">;
