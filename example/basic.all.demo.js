var React = require('react')
import {Fixed, FixedCnt, FixedHead, FixedFoot, FixedLeft, FixedRight} from "fixed.react"

var App = React.createClass({
    render: function () {
        var self = this
        return (
            <Fixed
                className="mockWindow"
                spaceClassName={[
                    'm-head-space',
                    'm-foot-space',
                    'm-sidebar-space',
                    'm-nav-space'
                ]}
            >
                <FixedHead>
                   <div className="m-head">
                       head
                   </div>
               </FixedHead>
                <FixedLeft>
                    <div className="m-sidebar">
                        sidebar
                    </div>
                </FixedLeft>
                <FixedCnt className={"horizontal-scroll"} >
                    <div style={{
                        "overflowX": "auto",
                        "whiteSpace": "nowrap"
                    }} >
                        a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z
                        <br/>
                        a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z
                        <br/>
                        a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z
                        <br/>
                        a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z
                    </div>
                </FixedCnt>
                <FixedFoot>
                    <div className="m-foot">
                        foot
                    </div>
                </FixedFoot>
                <FixedRight>
                    <div className="m-nav">
                        sidebar
                    </div>
                </FixedRight>
            </Fixed>
        )
    }
})
module.exports = App
