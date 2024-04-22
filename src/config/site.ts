export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        twitter: string
        github: string
    }
}

export const siteConfig: SiteConfig = {
    name: "DirectEd Investors",
    description:
        "A place to find your ideal investment pool.",
    url: "http://localhost:3000",
    ogImage: "",
    links: {
        twitter: "https://twitter.com/Boilerbay_",
        github: "https://github.com/itaimoorhas",
    },
}