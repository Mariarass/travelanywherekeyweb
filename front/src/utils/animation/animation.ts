export const reviewsAnimation = {
    hidden: {
        x:-50,
        opacity: 0,

    },
    visible: (custom: any) => ({
        x:0,
        opacity: 1,
        transition: {delay: custom * 0.5},

    })
}
export const cardAnimation = {
    hidden: {
        y: 50,
        opacity: 0,

    },
    visible: (custom: any) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},

    })
}
