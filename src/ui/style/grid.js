import { breakPoints, breakPointsName, containerWidths, grid } from './variables'

const containerCommon = `.ctn {
        padding-left: ${grid.colPadding}px;
        padding-right: ${grid.colPadding}px;
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
    }`

const containerMedia = containerWidths.map((v: number, k: number): string => {
    const t = `
        @media (min-width: ${breakPoints[k + 1]}px) {
            .ctn {
                width: ${v}px;
            }
        }
    `
    return t
}).reduce((a: string, b: string): string => a + b)

let s = ''

for (let i = 1; i < grid.colCounts; i += 1) {
    s += `
    .c-${i} {
        width: ${(i / grid.colCounts) * 100}%;
    }`
}

containerWidths.map((v, k) => {
    for (let i = 1; i < grid.colCounts; i += 1) {
        s += `
            @media (min-width: ${breakPoints[k + 1]}px) {
                .c-${breakPointsName[k + 1]}-${i} {
                    width: ${(i / grid.colCounts) * 100}%;
                }
            }
        `
    }
    return null
})


export const row = `

`

export const containerStyle = `${containerCommon}${containerMedia}${s}${row}`

export default {
    containerStyle,
}
