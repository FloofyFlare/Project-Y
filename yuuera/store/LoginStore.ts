import { defineStore } from 'pinia';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  account: JSON | null;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    accessToken: null,
    refreshToken: null,
    account: null,
  }),
  persist: true,
  actions: {
    setTokens(tokens: { accessToken: string; refreshToken: string }) {
      this.accessToken = tokens.accessToken;
      this.refreshToken = tokens.refreshToken;
    },

    clearTokens() {
      this.accessToken = null;
      this.refreshToken = null;
    },

    async getAccount() {
      const url = new URL('http://127.0.0.1:8000/api/auth/account-settings/');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        },
      });
    
      if (response.ok) {
        const responseData = await response.json();
        console.log('account stored');
        this.account = responseData;
      } else {
        console.error('account store failed:', response.statusText);
      }
    },

    async refreshAccessToken() {
      // Simulate a refresh token action (replace this with your actual refresh token logic)
      if (this.accessToken != null && this.refreshToken != null) {
        if (!isTokenExpired(this.accessToken)) {
          const timeRemaining = timeUntilTokenExpiration(this.accessToken); // Use this.accessToken
          console.log(`Access token expires in ${timeRemaining} seconds`);
          // You can use timeRemaining to decide when to refresh the token
        } else {
          // const accessToken = 'your_access_token_here'; // Remove this line
          console.log('Access token has expired');
          // Perform token refresh or re-authentication
          if (this.refreshToken) {
            try {
              // Change the URL to your production server
              const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh: this.refreshToken }),
              });
      
              if (response.ok) {
                const responseData = await response.json();
                const tokens = { accessToken: responseData.access, refreshToken: this.refreshToken };
                console.log('Token refresh successful:', tokens);
                this.setTokens(tokens); // Use setTokens instead of login
                // Do something with the responseData, such as updating the component state
                await this.getAccount();
                return responseData;
              } else {
                // Handle errors for non-2xx status codes
                console.log('Token refresh failed');
                this.accessToken = null;
                this.refreshToken = null;
              }
            } catch (error) {
              console.error(error);
              this.accessToken = null;
              this.refreshToken = null;
            }
          } else {
            console.log('Refresh token is not available');
            this.accessToken = null;
            this.refreshToken = null;
          }
        }
      }
    },
  },
});

function decodeAccessToken(accessToken: String) {
  try {
    console.log(accessToken.split('.'))
    const base64Url = accessToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(base64));
    return decoded;
  } catch (error) {
    console.error('Error decoding access token:', error);
    return null;
  }
}

function isTokenExpired(accessToken: String) {
  const decodedToken = decodeAccessToken(accessToken);

  if (decodedToken && decodedToken.exp) {
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  }

  return true; // Assume expired if decoding fails or no expiration time
}

function timeUntilTokenExpiration(accessToken: String) {
  const decodedToken = decodeAccessToken(accessToken);

  if (decodedToken && decodedToken.exp) {
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp - currentTime;
  }

  return 0; // Return 0 if decoding fails or no expiration time
}

