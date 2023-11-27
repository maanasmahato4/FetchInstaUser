export function extractor(url){
    const pathSegments = url.split("/").filter(string => true);
    if(!pathSegments.length){
        throw new Error("Invalid url");
    }
    const isInstagamUrl = pathSegments.findIndex(index => index === "www.instagram.com");
    if(isInstagamUrl === -1){
        throw new Error("Not a valid instagram url");
    };
    const userName = pathSegments.at(isInstagamUrl + 1).split("?")[0];
    if(!userName){
        throw new Error("username not found");
    }
    return userName;
}