import React from 'react';
import PaginationRounded from './PaginationRounded';
import { connect } from 'react-redux';
import { getData, getPageOfItems, getPager } from '../actions/PaginationDataAction';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class PaginationDataList extends React.Component {
    
    async componentDidMount() {
        await this.props.getData();
        console.log(this.props.getDataList.length);
        if (this.props.getDataList && this.props.getDataList.length) {
            this.setPage(this.props.initialPage);
        }
    }


    setPage = (page) => {
        var pageSize = this.props.pageSize;
        //console.log(pageSize, page, this.props.getDataList.length);
        this.props.getPager(this.props.getDataList.length, page, pageSize);

        console.log(this.props.getPagerData);
        if (page < 1 || page > this.props.getPagerData.totalPages) {
            return;
        }

        // get new page of items from items array
        var pageOfItems = this.props.getDataList.slice(this.props.getPagerData.startIndex, this.props.getPagerData.endIndex + 1);

        this.props.getPageOfItems(pageOfItems);
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div style={{  zIndex: "1", paddingTop: "50px", textAlign: "center", width: "100%", backgroundColor: "black", color: "#E67E22" }}>
                        <h1>All data List</h1>
                        <div class="form-group" style={{ width: "auto", margin: "auto", padding: "30px 80px 30px 80px" }}>
                            <input type="text" class="form-control" placeholder="Search"
                                style={{ borderRadius: "30px" }} />
                            <span style={{
                                textAlign: "center",
                                pointerEvents: "none",
                                color: "#aaa",
                                zIndex: "2",
                                float: "right",
                                marginTop: "-30px",
                                marginRight: "20px"
                            }}><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </div>
                    <table style={{overflow:"hidden"}} className="table table-striped">
                        <thead style={{ background: "black", color: "white", padding: "5px"}}>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Event Date</th>
                                <th scope="col">Flight Number</th>
                                <th scope="col">Body</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                        {
                            this.props.pageOfItems.map((item) => {
                                return (
                                    <tbody key={item.id}>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.event_date_utc}</td>
                                            <td>{item.flight_number}</td>
                                            <td style={{flexWrap:"wrap"}} align="justify">{item.details}</td>
                                            <td style={{display:"flex"}}>
                                                <a href={item.links.article} target="blank" ><Button variant="success" size="sm" style={{ marginRight: "10px" }}>Article</Button></a>
                                                <a href={item.links.wikipedia} target="blank" ><Button variant="primary" size="sm">WikiPedia</Button></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                    <div style={{position:"sticky",bottom:"0"}}>
                    <PaginationRounded handlePage={this.setPage} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    getDataList: state.dataItem.dataList,
    pageOfItems: state.dataItem.pageOfItems,
    pageSize: state.dataItem.pageSize,
    initialPage: state.dataItem.initialPage,
    getPagerData: state.dataItem.pager,
});
export default connect(mapStateToProps, { getData, getPageOfItems, getPager })(PaginationDataList);