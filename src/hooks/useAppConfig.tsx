import packageJson from '../../package.json'
export const APP_VERSION = packageJson.version
export const API_TOKEN = 'f9ccc08f'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_TOKEN}&`

export const useAppConfig = () => {
  return { APP_VERSION, BASE_URL_LOCAL: API_ENDPOINT, API_TOKEN }
}
