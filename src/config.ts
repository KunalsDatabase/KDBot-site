export const API_CONFIG = {
    BASE_URL: 'https://kdbase.com/kdbot/api/v1',
    ENDPOINTS: {
      BOT_INFO: '/botinfo',
      MEMORY: '/memory'
    }
  }
export const OAUTH_CONFIG = {
    BASE_URL: "https://discord.com/api/oauth2/authorize",
    CLIENT_ID: "414925323197612032",
    REDIRECT_URI: "https://kdbase.com/kdbot/api/v1/callback",
    RESPONSE_TYPE: "code",
    SCOPE: ["identify", "guilds"]
}

export function getOAuthURL() {    
    return `${OAUTH_CONFIG.BASE_URL}?client_id=${OAUTH_CONFIG.CLIENT_ID}&redirect_uri=${encodeURIComponent(OAUTH_CONFIG.REDIRECT_URI)}&response_type=${OAUTH_CONFIG.RESPONSE_TYPE}&scope=${OAUTH_CONFIG.SCOPE.join('%20')}`;
}