export const getEnvValue = (key: string, fallback: string = ""): string => {
  return process.env[key] || fallback;
};
