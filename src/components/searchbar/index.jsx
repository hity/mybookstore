import React, { PropTypes } from 'react'
import './index.scss'
import { Input, Row, Col, Button } from 'antd'
const Search = Input.Search

export default class Searchbar extends React.Component {
    render() {
        console.log('searchbar', this.props)
        return (
            <Row className = "searchbar">
                <Col span={24}>
                    <Search placeholder="请输入书名、ISBN号、作者" onSearch={(value) => this.props.searchCb(value)} />
                </Col>
            </Row>
        )
    }
}

Searchbar.PropTypes = {
    searchCb: PropTypes.func.isRequired
}
