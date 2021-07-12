import Storage from './Storage';

enum Locals {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
    VERIFIER = 'verifier',
    CHALLENGE = 'challenge',
    STATE = 'state'
  }
  
  export default class Tokens extends Storage<Locals> {
    private static instance?: Tokens;
  
    private constructor() {
      super();
    }
  
    public static getInstance() {
      if (!this.instance) {
        this.instance = new Tokens();
      }
  
      return this.instance;
    }
  
    public getAccessToken() {
      return this.get(Locals.ACCESS_TOKEN);
    }
  
    public setAccessToken(accessToken: string) {
      this.set(Locals.ACCESS_TOKEN, accessToken);
    }
  
    public getRefreshToken() {
      return this.get(Locals.REFRESH_TOKEN);
    }
  
    public setRefreshToken(refreshToken: string) {
      this.set(Locals.REFRESH_TOKEN, refreshToken);
    }

    public setVerifier(verifier: string) {
      this.set(Locals.VERIFIER, verifier);
    }
 
    public getVerifier() {
      return this.get(Locals.VERIFIER);
    }

    public setChallenge(challenge: string) {
      this.set(Locals.CHALLENGE, challenge);
    }

    public getChallenge() {
      return this.get(Locals.CHALLENGE);
    }

    public setState(state: string) {
      this.set(Locals.STATE, state);
    }

    public getState() {
      return this.get(Locals.STATE)
    }
  
    public clear() {
      this.clearItems([Locals.CHALLENGE, Locals.STATE, Locals.VERIFIER]);
    }
  }