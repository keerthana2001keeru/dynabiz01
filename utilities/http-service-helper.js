import axios from "axios";
import { useRouter } from "next/router";
// const baseUrl ="http://192.168.1.210:26910/experiencemanagerframe/api/110/"
const baseUrl = process.env.urls.experienceUrl;
    // "http://localhost:26910/experiencemanagerframe/api/110";
export const getHttpService = async (resourceUrl, actionTag) => {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + process.env.marketplaceKey,
        actiontag: actionTag,
        responseFlag: "on",
        apiType: "G",
    };
    return await axios.get(baseUrl + resourceUrl, { headers });
};
export const postHttpService = async (resourceUrl, params, actionTag) => {

    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + process.env.marketplaceKey,
        actiontag: actionTag,
        responseFlag: "on",
        apiType: "G",
    };
    return await axios.post(baseUrl + resourceUrl, params, { headers });
};