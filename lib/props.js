import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-fixed',
            className: '',
            spaceClassName: [],
            spaceStyle: []
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            spaceClassName: PropTypes.array,
            spaceStyle: PropTypes.array
        }
    })
}
