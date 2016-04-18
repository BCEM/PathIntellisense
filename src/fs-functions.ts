import { readdir } from 'fs';
import { resolve as resolvePath, sep as dirSeparator } from 'path';

export function getChildrenOfPath(path) {
    return new Promise<string[]>((resolve, reject) => {
        readdir(path, (error, children) => {
            if(error){
                resolve([]);                    
            } else {
                resolve(children.filter(hiddenFiles));
            }
        });
    });
}

export function getPath(fileName: string, text: string) : string {
    return resolvePath(fileName.substring(0, fileName.lastIndexOf(dirSeparator)), text);
}

function hiddenFiles(filename) {
    return filename[0] !== '.';
}