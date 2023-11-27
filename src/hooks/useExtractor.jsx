// libraries and packages
import { useState } from "react";

// custom library
import { extractor } from "../lib/extractor";

export const useExtractor = () => {
    const [extractorError, setExtractorError] = useState("");
    const [userName, setUserName] = useState("");

    const extractUserName = (url) => {
        try {
            if (!url) {
                throw new Error("url not found");
            }
            const userNameFromExtractor = extractor(url);
            setUserName(userNameFromExtractor);
        } catch (error) {
            setExtractorError(error.message);
        };
    };

    return { extractorError, userName, extractUserName };
}