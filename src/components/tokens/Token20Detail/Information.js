import React from "react";
import {tu, t} from "../../../utils/i18n";
import {toThousands} from "../../../utils/number";
import {FormattedDate, FormattedNumber, FormattedTime } from "react-intl";
import {AddressLink, ExternalLink,HrefLink} from "../../common/Links";
import {SocialMedia} from "../../common/SocialMedia";
import {Link} from "react-router-dom";
import {toLower} from "lodash";
import { Popover } from 'antd';
import {cloneDeep} from 'lodash'
import {API_URL, ONE_TRX, CONTRACT_ADDRESS_USDT, CONTRACT_ADDRESS_WIN, CONTRACT_ADDRESS_GGC, IS_MAINNET} from "../../../constants";



export function Information({token: tokens}) {
  let token = cloneDeep(tokens)
  let social_display = 0;
  let lowerText = token.reputation? toLower(token.reputation) + '_active.png': '';

  // token && token['social_media'] && token['social_media'].map((media, index) => {
  //   if (media.url) {
  //     social_display++;
  //   }
  // })
  // token.social_media_list = JSON.parse(token.social_media_list)

  token.social_media_list && token.social_media_list.map(item => {
    try {
      item.url = JSON.parse(item.url)
    } catch (error) {
      item.url = [item.url]
    }
    
  })

  const tokenList = [
    { 
      name: 'total_supply', 
      content: <div>
        {/*<FormattedNumber value={token.total_supply_with_decimals / (Math.pow(10,token.decimals))} maximumFractionDigits={token.decimals}/>*/}
        <span>{toThousands(parseFloat(token.total_supply_with_decimals / (Math.pow(10,token.decimals))).toFixed(token.decimals))}</span>
        <span className="ml-1">{token.symbol}</span>
      </div>
    },
    {
      name: 'contract_address',
      content:  <AddressLink address={token.contract_address} isContract={true} />
    },
    // {
    //   name: 'token_holders',
    //   content: <FormattedNumber value={token.total_supply}/>
    // },
    {
      name: 'TRC20_decimals',
      content: <FormattedNumber value={token.decimals}/>
    },
    {
      name: 'website', 
      content:  <div>{
          token.home_page?token.contract_address === CONTRACT_ADDRESS_USDT ||token.contract_address === CONTRACT_ADDRESS_WIN?
              <HrefLink href={token.home_page}>
                  {token.home_page}
              </HrefLink>:
              <ExternalLink url={token.home_page}/> :
              <span style={{color: '#d8d8d8'}}>-</span>
      }</div>
    },
    {
        name: 'white_paper',
        content:  <div>{
            token.white_paper?token.contract_address === CONTRACT_ADDRESS_USDT || token.contract_address === CONTRACT_ADDRESS_WIN?
                <HrefLink style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',display: 'block'}} href={token.white_paper}>
                    {token.white_paper}
                </HrefLink>:
                <ExternalLink url={token.white_paper && t(token.white_paper)} _url={token.white_paper}/>  :
                <span style={{color: '#d8d8d8'}}>-</span>
        }</div>
    },
    {
        name: 'social_link',
        content: <SocialMedia mediaList={token.social_media_list}/>
    },
    {
      name: 'GitHub', 
      content:  token.git_hub ?
                <HrefLink style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',display: 'block'}} href={token.git_hub}>
                    {token.git_hub}
                </HrefLink>:
                <span style={{color: '#d8d8d8'}}>-</span>
    },
    {
      name: 'pice_per_1trx',
      content:  <div className="d-flex">
        {
          token['market_info']?
            <div className="d-flex">
                {token['market_info'].priceInTrx}  TRX
              <span className={token['market_info'].gain<0? 'col-red ml-3':'col-green ml-3'}>{token['market_info'].gain >0 ?  <span>{'+' + parseInt(token['market_info'].gain * 10000) / 100 + '%'}</span>:<span>{ parseInt(token['market_info'].gain * 10000) / 100 + '%'}</span>}</span>
              <Link to={`/exchange/trc20?id=${token['market_info'].pairId}`}  target="_blank" className="btn btn-danger btn-sm ml-3" style={{height: '1.2rem', lineHeight: '0.6rem'}}> {tu('token_trade')}</Link>
            </div>
            :'-'
        }
      </div>
    },

  ]

    return (
      <div className="information-bg">{
        tokenList.map((item,index) => {
          return(
            <div className={index%2 == 0? 'information-bg-item': 'information-bg-item ml'} key={index}>
              <span>{tu(item.name)}</span>
              <div style={{width:'75%'}}>{item.content}</div>
            </div>)
        })
      }</div>
    );
}