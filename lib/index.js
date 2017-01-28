import "./index.css"
import { Component } from "react"
import props from "./props"
import classNames from "classnames"

class FixedNode extends Component {
    render() {
        return (
           <div className={this.props.className} style={this.props.style}  >
               {this.props.children}
           </div>
       )
    }
}

export class Fixed extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        let props = self.props
        let nodes = (<div className={ pcls + "-space"} >{self.props.children}</div>)
        let concatSpace = []
        {
            props.spaceClassName.forEach(function (className, index) {
                concatSpace[index] = concatSpace[index] || {}
                concatSpace[index].className = className
            })
            props.spaceStyle.forEach(function (style, index) {
                concatSpace[index] = concatSpace[index] || {}
                concatSpace[index].style = style
            })
        }
        concatSpace.forEach(function (item){
            item.className = item.className || ''
            nodes = (<FixedNode className={item.className + ' ' + pcls + '-space'} style={item.style} >{nodes}</FixedNode>)
        })

        return (
            <div className={classNames({
                    [`${pcls}`]: true,
                    [`${self.props.className}`]: self.props.className
                })} >
                    {nodes}
            </div>
        )
    }
}
props(Fixed)

var tempProps = {}
props(tempProps)
var defaultProps = tempProps.defaultProps

export class FixedHead extends Component {
    render() {
        return (
            <div className={classNames({
                    [`${defaultProps.prefixClassName}-head`]: true,
                    [this.props.className]: this.props.className
                })}>
                {this.props.children}
            </div>
        )
    }
}
export class FixedFoot extends Component {
    render() {
        return (
            <div className={classNames({
                    [`${defaultProps.prefixClassName}-foot`]: true,
                    [this.props.className]: this.props.className
                })}>
                {this.props.children}
            </div>
        )
    }
}
export class FixedCnt extends Component {
    render() {
        return (
            <div className={classNames({
                    [`${defaultProps.prefixClassName}-cnt`]: true,
                    [this.props.className]: this.props.className
                })}>
                {this.props.children}
            </div>
        )
    }
}
export class FixedLeft extends Component {
    render() {
        return (
            <div className={classNames({
                    [`${defaultProps.prefixClassName}-left`]: true,
                    [this.props.className]: this.props.className
                })}>
                {this.props.children}
            </div>
        )
    }
}
export class FixedRight extends Component {
    render() {
        return (
            <div className={classNames({
                    [`${defaultProps.prefixClassName}-right`]: true,
                    [this.props.className]: this.props.className
                })}>
                {this.props.children}
            </div>
        )
    }
}
