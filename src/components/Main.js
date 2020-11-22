import React, { Component } from 'react'
import PaginationDataList from './PaginationDataList'
import { Switch,Route } from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
           <Switch>
               <Route exact path="/" component={PaginationDataList}/>
           </Switch>
        )
    }
}

