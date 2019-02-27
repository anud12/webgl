let request = (path: string) => {
    const request = new XMLHttpRequest();
    request.open('GET', path, false);
    request.send(null);
    return request.responseText as string;
}
export const readFile = (path: string) => {
    return request(path);
};