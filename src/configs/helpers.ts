export const getEnvVar = (key: string, placeholder = "") => process.env[key] ?? placeholder;
