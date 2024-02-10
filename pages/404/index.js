import React from 'react'
import Error404 from '../../components/404/error404'
import { MapBlock } from '../../components/componets-map'
import { getHttpService } from '../../utilities/http-service-helper';


export default function Error(props) {
    const userSettings = props?.uiSettings;
    // const mainContent = userSettings?.TH00025P16?.blocks?.map(block => {
    //     if (block?.isBlockEnabled === true) {
    //         return (MapBlock(block.blockId, block));
    //     }
    // });
    
    return (
        <div>
            <Error404 uiLayout={userSettings} />
        </div>
    )
}
// export async function getStaticProps() {
//     let uiSettings = {};
//     if (process.env.previewEnabled == 'Y') {
//         const result = await getHttpService(
//             "uisettings?themeId=" + process.env.urls.themeId + "&contentSetId=" + process.env.urls.contentSetId,
//             "getEnterpriseThemeUISettingsPreview"
//         );
//         if (result.status == 200 && result.data.status == 200) {
//             uiSettings = result.data.data.uiMapping;
//         }
//     } else {
//         if (process.env.demoEnabled == "N") {
//             const result = await getHttpService(
//                 "uisettings",
//                 "getEnterpriseThemeUISettings"
//             );
//             if (result.status == 200 && result.data.status == 200) {
//                 uiSettings = result.data.data.uiMapping;
//             }
//         } else {
//             uiSettings = require("../public/config.json");
//         }
//     }
//     return {
//         props: {
//             uiSettings: uiSettings,
//         },
//     };
// }