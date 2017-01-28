import { Component } from "react"
import {Fixed} from "../lib/index"
import { shallow, mount, render } from "enzyme"

it('className', function () {
    const app = mount(<Fixed className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})
