/* eslint-disable no-undef */
import React from "react";
import {
  FormattedDate,
  FormattedNumber,
  FormattedTime,
  injectIntl
} from "react-intl";
import { connect } from "react-redux";
import { Client } from "../../services/api";
import { AddressLink } from "../common/Links";
import { Truncate } from "../common/text";
import TotalInfo from "../common/TableTotal";
import SmartTable from "../common/SmartTable.js";
import { TronLoader } from "../common/loaders";
import { upperFirst } from "lodash";
import { loadTokens } from "../../actions/tokens";
import xhr from "axios/index";
import { API_URL, CONTRACT_LICENSES } from "../../constants";
import { TRXPrice } from "../common/Price";
import { ONE_TRX, IS_MAINNET } from "../../constants";
import { Tooltip,Table, Switch } from "antd";
import { QuestionMark } from "../common/QuestionMark.js";
import { tu } from "../../utils/i18n";
import { Link } from "react-router-dom";


function Nodetip({ props, val }) {
  let { intl } = props;
  return (
    <span>
      {val.isLibrary && (
        <img
          src={require("../../images/contract/book.png")}
          style={{ height: "16px" }}
        />
      )}

      {val.isSetting && (
        <Tooltip
          placement="top"
          title={intl.formatMessage({ id: "Optimization_Enabled" })}
        >
          <img
            src={require("../../images/contract/linghst.png")}
            style={{ height: "16px" }}
          />
        </Tooltip>
      )}

      {val.isParameter && (
        <Tooltip
          placement="top"
          title={intl.formatMessage({ id: "Constructor_Arguments_tip" })}
        >
          <img
            src={require("../../images/contract/tools.png")}
            style={{ height: "16px" }}
          />
        </Tooltip>
      )}

      {!val.isLibrary && !val.isSetting && !val.isParameter && "-"}
    </span>
  );
}
class Contracts extends React.Component {
  constructor() {
    super();

    this.state = {
      contracts: [],
      total: 0,
      rangeTotal: 0,
      loading: true,
      pagination: {
        showQuickJumper:true,
        position: 'bottom',
        showSizeChanger: true,
        defaultPageSize:20,
        total: 0
      },
      filters:['all','verified'],
      curFilter: 'all',
      isOpen: false,
      sort:'-trxCount',
      warningVersions:['tron-0.4.24','tronbox_soljson_v1','tronbox_soljson_v3','tron-0.4.25_Odyssey_v3.2.3']
    };
  }

  componentDidMount() {
    this.loadContracts();
  }

  componentDidUpdate() {
    // this.loadContracts();
  }

  search = () => {};

  loadContracts = async (page = 1, pageSize = 20) => {
    this.setState({ loading: true });
    let {curFilter, isOpen, sort} = this.state
    await Client.getContracts({
      confirm: 0,
      limit: pageSize,
      start: (page - 1) * pageSize,
      'verified-only': curFilter == 'verified' ? true : '',
      'open-source-only': isOpen,
      sort: sort
    }).then(({ data, total, rangeTotal }) => {
      if (data) {
        this.setState({
          contracts: data,
          loading: false,
          total,
          rangeTotal,
          pagination: {
            ...this.state.pagination,
            total
          }
        });
      }
    });
  };

  solidityVersions = (v) => {
    let version
    switch (v) {
      case 'tron-0.4.24':
      case 'tronbox_soljson_v1':
      case 'tronbox_soljson_v2':
        version = '0.4.24'
        break;
      case 'tron-0.4.25_Odyssey_v3.2.3':
      case 'solidity-0.4.25_Odyssey_v3.2.3':
      case 'tronbox_soljson_v3':
        version = '0.4.25'
        break;
      case 'tron-0.5.4_Odyssey_v3.6.0':
          version = '0.5.4'
          break;
      case 'tron-0.5.8_Odyssey_v3.6.0':
          version = '0.5.8'
        break;
      default:
          version =v.match(/\d+(.\d+)*/g)[0]||''
        break;
    }
    return version
  }
  customizedColumn = () => {
    let {intl} = this.props;
    const title = (
      <div>
        {upperFirst(intl.formatMessage({id: 'balance'}))}
        <span className="ml-2">
          <QuestionMark placement="top" text="contract_balance_tip" />
        </span>
      </div>
    )
    let column = [
      {
        title: upperFirst(intl.formatMessage({ id: "address" })),
        dataIndex: "address",
        key: "address",
        align: "left",
        width: "15%",
        className: "ant_table",
        render: (text, record, index) => {
          return (
            <Truncate>
              <AddressLink address={text} isContract={true}>
                {text}
              </AddressLink>
            </Truncate>
          );
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "ContractName" })),
        dataIndex: "name",
        key: "name",
        align: "left",
        width: "10%",
        className: "ant_table",
        render: (text, record, index) => {
          return <span style={{display:'block',width:'100px',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{text || "--"}</span>;
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract_create_time" })),
        dataIndex: "",
        key: "",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          return <span><FormattedDate value={1542667989000}/></span>
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract_token_name" })),
        dataIndex: "trc20token",
        key: "trc20token",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {

          if(text){
            console.log(text)
          }
          return (
            <span>
              {text ? (
                <span className="d-flex align-items-center">
                  <img src={text.icon_url} style={{width:'18px',height:'18px',marginRight: '8px'}}></img>
                  <span className="d-flex flex-column">
                    <span>{text.name}</span>
                    <span>{text.symbol}</span>
                  </span>
                </span>
              ):'--'}
            </span>
          )
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract__compile_version" })),
        dataIndex: "compile_version",
        key: "compile_version",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
        return <span>
          {
            text ? (
              <span className="text-nowrap">
                {this.state.warningVersions.indexOf(text) > -1 ? 
                  (<Tooltip
                    placement="top"
                    title={intl.formatMessage({ id: "contract_version_tip" })}
                  >
                    <img
                      src={require("../../images/contract/warning.png")}
                      style={{ height: "14px", marginRight: "4px" }}
                    />
                  </Tooltip>) : ''}
                {`solidity ${this.solidityVersions(text)}`}
              </span>
            )
            : '--'
          }
        </span>
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract_setting" })),
        dataIndex: "compile_settings",
        key: "compile_settings",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          const val = text ? JSON.parse(text) : '';
          return (<span>{
            text ? (
              <span className="text-nowrap">
                {
                  val.optimizer ? <img
                  style={{width: '14px', height: '14px'}}
                  src={require("../../images/contract/optimization.png")}></img>:''
                }
                {
                  val.constructor_params ? <img 
                  style={{width: '14px', height: '14px',marginLeft: '8px'}}
                  src={require("../../images/contract/param.png")}></img> : ''
                }
              </span>
            ):'--'
          }</span>)
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract_v_license" })),
        dataIndex: "license",
        key: "license",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
        return <span>{text ? CONTRACT_LICENSES[text] : '--'}</span>
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({ id: "verifty_contract_result" })
        ),
        dataIndex: "verify_status",
        key: "verify_status",
        align: "left",
        className: "ant_table _text_nowrap",
        render: (text, record, index) => {
          return (
            <span>
              {text == 2 ? (
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={require("../../images/contract/Verified.png")}
                  />
                  <span className="ml-1">
                    {" "}
                    {upperFirst(
                      intl.formatMessage({ id: "contract_verifty_passed" })
                    )}
                  </span>
                </span>
              ) : (
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={require("../../images/contract/Unverified.png")}
                  />
                  <span
                    style={{ color: "rgb(216, 216, 216)" }}
                    className="ml-1"
                  >
                    {upperFirst(intl.formatMessage({ id: "unverifty_passed" }))}
                  </span>
                </span>
              )}
            </span>
          );
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract_verified_time" })),
        dataIndex: "verify_time",
        key: "verify_time",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          return <span>{text ? <FormattedDate value={text*1000}/> : '--'}</span>
        }
      },
      // {
      //   title: upperFirst(intl.formatMessage({id: 'Compiler'})),
      //   dataIndex: 'Compiler',
      //   key: 'Compiler',
      //   align: 'left',
      //   render: (text, record, index) => {
      //     return <span>{text}</span>
      //   }
      // },
      {
        title: title,
        dataIndex: 'balance',
        key: 'balance',
        sorter: true,
        sortDirections: ['descend', 'ascend'],
        align: 'left',
        className: 'ant_table',
        render: (text, record, index) => {
          return (
            <TRXPrice
              amount={text || text == 0 ? parseInt(text) / ONE_TRX : 0}
            />
          );
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'TxCount'})),
        dataIndex: 'trxCount',
        key: 'trxCount',
        sorter: true,
        defaultSortOrder: 'descend',
        sortDirections: ['descend', 'ascend'],
        align: 'right',
        className: 'ant_table',
        render: (text, record, index) => {
          return <FormattedNumber value={text} />;
        }
      }
      // {
      //   title: upperFirst(intl.formatMessage({id: 'Settings'})),
      //   dataIndex: 'isSetting',
      //   key: 'isSetting',
      //   align: 'left',
      //   width: '90px',
      //   className: 'ant_table',
      //   render: (text, record, index) => {
      //     return <Nodetip props={this.props} val={record}/>
      //   }
      // },
      // {
      //   title: upperFirst(intl.formatMessage({id: 'DateVerified'})),
      //   dataIndex: 'dateVerified',
      //   key: 'dateVerified',
      //   align: 'right',
      //   width: '170px',
      //   className: 'ant_table',
      //   render: (text, record, index) => {
      //     return <div>
      //             <FormattedDate value={text}/>{' '}
      //             <FormattedTime value={text}/>
      //           </div>
      //   }
      // }
    ];
    return column;
  };
  sunNetCustomizedColumn = () => {
        let {intl} = this.props;
        let column = [
            {
                title: upperFirst(intl.formatMessage({id: 'address'})),
                dataIndex: 'address',
                key: 'address',
                align: 'left',
                className: 'ant_table',
                width: '40%',
                render: (text, record, index) => {
                    return <Truncate>
                      <AddressLink address={text} isContract={true}>{text}</AddressLink>
                    </Truncate>
                }
            },
            {
                title: upperFirst(intl.formatMessage({id: 'ContractName'})),
                dataIndex: 'name',
                key: 'name',
                align: 'left',
                className: 'ant_table',
                render: (text, record, index) => {
                    return <span>{text || "-"}</span>
                }
            },
            // {
            //   title: upperFirst(intl.formatMessage({id: 'Compiler'})),
            //   dataIndex: 'Compiler',
            //   key: 'Compiler',
            //   align: 'left',
            //   render: (text, record, index) => {
            //     return <span>{text}</span>
            //   }
            // },
            {
                title: upperFirst(intl.formatMessage({id: 'balance'})),
                dataIndex: 'balance',
                key: 'balance',
                align: 'left',
                className: 'ant_table',
                render: (text, record, index) => {
                    return <TRXPrice amount={ (text || text== 0)? parseInt(text) / ONE_TRX : 0}/>
                }
            },
            {
                title: upperFirst(intl.formatMessage({id: 'TxCount'})),
                dataIndex: 'trxCount',
                key: 'trxCount',
                align: 'right',
                className: 'ant_table',
                render: (text, record, index) => {
                    return <FormattedNumber value={text}/>
                }
            },
            // {
            //   title: upperFirst(intl.formatMessage({id: 'Settings'})),
            //   dataIndex: 'isSetting',
            //   key: 'isSetting',
            //   align: 'left',
            //   width: '90px',
            //   className: 'ant_table',
            //   render: (text, record, index) => {
            //     return <Nodetip props={this.props} val={record}/>
            //   }
            // },
            // {
            //   title: upperFirst(intl.formatMessage({id: 'DateVerified'})),
            //   dataIndex: 'dateVerified',
            //   key: 'dateVerified',
            //   align: 'right',
            //   width: '170px',
            //   className: 'ant_table',
            //   render: (text, record, index) => {
            //     return <div>
            //             <FormattedDate value={text}/>{' '}
            //             <FormattedTime value={text}/>
            //           </div>
            //   }
            // }
        ];
        return column;
    }
  handleTableChange = (pagination, filters, sorter) =>{
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    this.setState({
      pagination: pager,
      sort: `${sorter.order === 'descend' ? '-' : ''}${sorter.order ? sorter.columnKey : ''}`
    }, () => this.loadContracts(pager.current, pager.pageSize));
  }
  onLicenseChange = (checked) => {
    this.setState({
      isOpen:checked
    },() => this.loadContracts())
  }
  filterChange = (v) => {
    this.setState({
      curFilter:v,
      isOpen: v === 'all' ? false : this.state.isOpen
    },() => this.loadContracts())
  }
  render() {
    let { contracts, total, loading, rangeTotal, pagination, filters, curFilter, isOpen } = this.state;
    let { match, intl } = this.props;
    let column = IS_MAINNET
      ? this.customizedColumn()
      : this.sunNetCustomizedColumn();
    let tableInfo =
      intl.formatMessage({ id: "view_total" }) +
      " " +
      total +
      " " +
      intl.formatMessage({ id: "contract_source_codes_found" });


    if (intl.locale === "ar") {
      tableInfo = total + "" + intl.formatMessage({ id: "contract_total" });
   }

    return (
      <main className="container header-overlap pb-3 token_black">
      {loading && <div className="loading-style"><TronLoader/></div>}
      <div className="row contract-list">
        <div className="d-flex col-md-12 contract-filter my-3">
          {
            filters.map((v,i) => {
              return(
                <div className={curFilter === v ? 'active' : ''} key={i} onClick={() => this.filterChange(v)}>{tu("contract_"+v)}</div>
              )
            })
          }
        </div>
        <div className="col-md-12 table_pos">
          {total ? 
            <div className="d-flex align-items-center mb-2">
              <TotalInfo total={total} rangeTotal={rangeTotal} typeText="contract_source_codes_found" top="10px" isQuestionMark={false}/>
              {curFilter == 'verified' ? (<div className="switch-wrap d-flex align-items-center">
                <Switch checked={isOpen} onChange={this.onLicenseChange} size="small" className="license-switch" />
                {tu("contract_open_license")}
              </div>) : ''}
            </div>
            : ''}
          
             {/**<div className="table_pos_info d-none d-md-block" style={{left: 'auto'}}>{tableInfo}<span> <QuestionMark placement="top" text="to_provide_a_better_experience"></QuestionMark></span></div> */}
           {/* <SmartTable bordered={true} loading={loading}
                      column={column} data={contracts} total={total}
                      onPageChange={(page, pageSize) => {
                        this.loadContracts(page, pageSize)
                      }}/> */}
            <Table
              bordered={true}
              columns={column}
              rowKey={(record, index) => {
                return index;
              }}
              dataSource={contracts}
              scroll={scroll}
              pagination={pagination}
              loading={loading}
              onChange={this.handleTableChange}
            />
        </div>
        </div>
        <p style={{textAlign:'right'}}>
          {tu("contract_source_code_title")}
          <Link to="/contracts/source-code-usage-terms">{tu("contract_source_code_use")}</Link>
        </p>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  loadTokens
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Contracts));
