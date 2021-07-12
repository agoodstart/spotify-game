export function createVerifier() {
    function dec2hex(dec: any) {
        return ('0' + dec.toString(16)).substr(-2);
    }

    let array = new Uint32Array(56/2);
    console.log(array)
    window.crypto.getRandomValues(array);

    return Array.from(array, dec2hex).join('');
}

export async function createChallengeFromVerifier(verifier: string) {
    function sha256(plain: string) {
        const encoder = new TextEncoder();
        const data = encoder.encode(plain);
        return window.crypto.subtle.digest('SHA-256', data);
    }
    
    function base64urlencode(a: any) {
        let str = "";
        let bytes = new Uint8Array(a)
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            str += String.fromCharCode(bytes[i]);
        }
    
        return btoa(str)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    }

    let hashed = await sha256(verifier);
    let base64encoded = base64urlencode(hashed);
    return base64encoded;
}

export function createState() {
    function dec2hex(dec: any) {
        return ('0' + dec.toString(16)).substr(-2);
    }

    let array = new Uint32Array(16/2);
    console.log(array)
    window.crypto.getRandomValues(array);

    return Array.from(array, dec2hex).join('');
}