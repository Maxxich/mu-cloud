const interfaceConst = "interface"

module.exports = (componentName) => `import classNames from "classnames"
import cls from "./${componentName}.module.scss"
import { memo } from "react"

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props
    const classes = classNames(cls.Header, {}, className)
    
    return (
        <div className={classes}>
           
        </div>
    )
})

${componentName}.displayName = "${componentName}"
`;
