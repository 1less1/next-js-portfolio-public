const path = require('path');

export const sanitizeImage = (filePath) => {
    // Resolve the file path
    const resolvedPath = path.resolve(filePath);
    const imageDir = path.resolve('/images');

    // Check if the resolved path starts with the image directory
    if (!resolvedPath.startsWith(imageDir)) {
        console.log('Invalid file path')
        return null;
    }

    // Validate the file type
    if (typeof resolvedPath === 'string' && resolvedPath.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
        return resolvedPath; // Return the valid and sanitized path
    }

    console.log('Invalid file type')
    return null;
};