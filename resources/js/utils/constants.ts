export const STORAGE_PREFIX = "/storage"

export const getStorageUrl = (resource: string) => `${STORAGE_PREFIX}/${resource}`
