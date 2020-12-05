'use strict'

const cookieHandler = {
    setCookie(name, value, expirationMin = 15, path='/', httpOnly) {
        const now = new Date();
        now.setTime(now.getTime() + (expirationMin *60 *1000));
        const expires = now.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=${path},httpOnly=${httpOnly}`;
    }
}

cookieHandler.setCookie('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIFÍ');
