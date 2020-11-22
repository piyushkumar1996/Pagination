import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPager, getData, getPageOfItems } from '../actions/PaginationDataAction';


class PaginationRounded extends Component {
    
    render() {
        if (!this.props.getPagerData.pages || this.props.getPagerData.pages.length <= 1) {
            return null;
        }

        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", border: "1px solid black",backgroundColor:"black", padding: "5px",cursor:"pointer" }}>
                <a href="#" onClick={() => this.props.handlePage(1)}>
                    <label style={{ border: "1px solid #E67E22",color:"white", padding: "5px",cursor:"pointer" }} className={this.props.getPagerData.currentPage === 1 ? 'disabled' : ''}>
                        First
                    </label>
                </a>
                <a href="#" onClick={() => this.props.handlePage(this.props.getPagerData.currentPage - 1)}>
                    <label style={{ border: "1px solid #E67E22",color:"white", padding: "5px",cursor:"pointer" }} className={this.props.getPagerData.currentPage === 1 ? 'disabled' : ''}>
                        Previous
                    </label>
                </a>
                {this.props.getPagerData.pages.map((page, index) => {
                    console.log(this.props.getPagerData.currentPage === page);
                    return (
                        <div>
                            <a href="#" onClick={() => this.props.handlePage(page)} >
                                <label style={{ width:"30px", border: "1px solid #E67E22",color:"white", padding: "5px",textAlign:"center",cursor:"pointer" }} key={index} className={this.props.getPagerData.currentPage === page ? 'active' : ''}>
                                    {page}
                                </label>
                            </a>
                        </div>
                    )
                }
                )}
                <a href="#" onClick={() => this.props.handlePage(this.props.getPagerData.currentPage + 1)}>
                    <label style={{ border: "1px solid #E67E22",color:"white", padding: "5px",cursor:"pointer" }} className={this.props.getPagerData.currentPage === this.props.getPagerData.totalPages ? 'disabled' : ''}>
                        Next
                    </label>
                </a>
                <a href="#" onClick={() => this.props.handlePage(this.props.getPagerData.totalPages)}>
                    <label style={{ border: "1px solid #E67E22",color:"white", padding: "5px",cursor:"pointer" }} className={this.props.getPagerData.currentPage === this.props.getPagerData.totalPages ? 'disabled' : ''}>
                        Last
                    </label>
                </a>
            </div>
        );
    }
}

//PaginationRounded.propTypes = propTypes;
//PaginationRounded.defaultProps = defaultProps;
const mapStateToProps = (state) => ({
    getDataList: state.dataItem.dataList,
    getPagerData: state.dataItem.pager,

    // getSeletcedDataList: state.dataItem.selectedDataList


});
export default connect(mapStateToProps, { getData, getPager, getPageOfItems })(PaginationRounded);