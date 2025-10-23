// Password Generator
class PasswordGenerator {
    static generate(length, options) {
        const { uppercase, lowercase, numbers, symbols } = options;
        let charset = '';
        
        if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) charset += '0123456789';
        if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        if (!charset) return '';
        
        let password = '';
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    }
}

// UUID Generator
class UUIDGenerator {
    static generateV4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    
    static generateV1() {
        const timestamp = Date.now();
        const random = Math.random().toString(16).substr(2, 8);
        return `${timestamp.toString(16)}-${random}`;
    }
}

// API Key Generator
class APIKeyGenerator {
    static generate(length, prefix = '') {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let key = '';
        
        for (let i = 0; i < length; i++) {
            key += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        
        return prefix + key;
    }
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    });
}

function showSuccess(button) {
    button.classList.add('success');
    setTimeout(() => button.classList.remove('success'), 500);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Password Generator
    document.getElementById('generatePassword').addEventListener('click', function() {
        const length = parseInt(document.getElementById('passwordLength').value);
        const options = {
            uppercase: document.getElementById('includeUppercase').checked,
            lowercase: document.getElementById('includeLowercase').checked,
            numbers: document.getElementById('includeNumbers').checked,
            symbols: document.getElementById('includeSymbols').checked
        };
        
        const password = PasswordGenerator.generate(length, options);
        document.getElementById('passwordResult').value = password;
    });
    
    document.getElementById('copyPassword').addEventListener('click', function() {
        const password = document.getElementById('passwordResult').value;
        if (password) {
            copyToClipboard(password);
            showSuccess(this);
        }
    });
    
    // UUID Generator
    document.getElementById('generateUuid').addEventListener('click', function() {
        const uuidType = document.querySelector('input[name="uuidType"]:checked').value;
        const uuid = uuidType === 'v4' ? UUIDGenerator.generateV4() : UUIDGenerator.generateV1();
        document.getElementById('uuidResult').value = uuid;
    });
    
    document.getElementById('copyUuid').addEventListener('click', function() {
        const uuid = document.getElementById('uuidResult').value;
        if (uuid) {
            copyToClipboard(uuid);
            showSuccess(this);
        }
    });
    
    // API Key Generator
    document.getElementById('generateApiKey').addEventListener('click', function() {
        const length = parseInt(document.getElementById('apiKeyLength').value);
        const includePrefix = document.getElementById('includePrefix').checked;
        const prefix = includePrefix ? document.getElementById('apiPrefix').value : '';
        
        const apiKey = APIKeyGenerator.generate(length, prefix);
        document.getElementById('apiKeyResult').value = apiKey;
    });
    
    document.getElementById('copyApiKey').addEventListener('click', function() {
        const apiKey = document.getElementById('apiKeyResult').value;
        if (apiKey) {
            copyToClipboard(apiKey);
            showSuccess(this);
        }
    });
    
    // Quick Actions
    document.getElementById('generateAll').addEventListener('click', function() {
        // Generate password
        document.getElementById('generatePassword').click();
        // Generate UUID
        document.getElementById('generateUuid').click();
        // Generate API key
        document.getElementById('generateApiKey').click();
    });
    
    document.getElementById('copyAll').addEventListener('click', function() {
        const password = document.getElementById('passwordResult').value;
        const uuid = document.getElementById('uuidResult').value;
        const apiKey = document.getElementById('apiKeyResult').value;
        
        const allText = `Password: ${password}\nUUID: ${uuid}\nAPI Key: ${apiKey}`;
        copyToClipboard(allText);
        showSuccess(this);
    });
    
    // Generate initial values
    document.getElementById('generatePassword').click();
    document.getElementById('generateUuid').click();
    document.getElementById('generateApiKey').click();
});