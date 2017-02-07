var React = require('react')
import {Fixed, FixedCnt, FixedHead, FixedFoot} from "fixed.react"

var App = React.createClass({
    render: function () {
        var self = this
        return (
            <Fixed
                className="mockWindow"
                spaceClassName={[
                    'm-head-space',
                    'm-foot-space'
                ]}
            >
                <FixedHead>
                    <div className="m-head">
                        head
                    </div>
                </FixedHead>
                <FixedCnt>
                    a<br/>b<br/>c<br/>d<br/>e<br/>f<br/>g<br/>h<br/>i<br/>j<br/>k<br/>l<br/>m<br/>n<br/>o<br/>p<br/>q<br/>r<br/>s<br/>t<br/>u<br/>v<br/>w<br/>x<br/>y<br/>z
                </FixedCnt>
                <FixedFoot>
                    <div className="m-foot">
                        foot
                    </div>
                </FixedFoot>
            </Fixed>
        )
    }
})
module.exports = App
