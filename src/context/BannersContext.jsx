import React, { useState } from 'react';

export const BannersContext = React.createContext(undefined);

export default function BannersContextProvider(props) {
    const [banners, setBanners] = useState({
        main: { open: true, severity: "warning", title: "האתר בבניה", message: "" },
        click_ad: { open: true, severity: "warning", title: "", message: "רוצה לקבל תרגום יעיל ומהיר יותר? הקלק על פרסומת" },
        snackbar: { open: false, severity: "success", title: "", message: "This is a Snackbar!" },
    });

    const createBanner = (name, severity, title, message) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: undefined });
        }
        setBanners({ ...banners, [name]: { open: true, severity: severity || "success", title: title || "", message: message || "" } });
    }

    const openBanner = (name) => {
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: true } });
        } else {
            console.error("Banner does'nt exist. Name: " + name);
        }
    }

    const closeBanner = (name) => {
        setBanners({
            main: { open: true, severity: "warning", title: "האתר בבניה", message: "" },
            snackbar: { open: false, severity: "success", title: "", message: "This is a Snackbar!" },
        })
        if (banners[name]) {
            setBanners({ ...banners, [name]: { ...banners[name], open: false } });
        } else {
            console.error("Banner does'nt exist. Name: " + name);
        }
    }

    const actions = { createBanner, openBanner, closeBanner };

    return (
        <BannersContext.Provider value={{ ...banners, ...actions }}>
            {props.children}
        </BannersContext.Provider>
    );
};
