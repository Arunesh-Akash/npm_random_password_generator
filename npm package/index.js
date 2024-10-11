export function generatePassword(len) {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let password = "";

    for (var i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * charSet.length);
        password += charSet[index];
    }

    return password;
}



