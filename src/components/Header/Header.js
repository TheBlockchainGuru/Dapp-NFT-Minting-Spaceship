import './Header.scss';
import CrystalImage from '../../assets/images/icons/sss 1.png';
import EtherImage from '../../assets/images/icons/Black logo2 1.png';
import GasImage from '../../assets/images/icons/petrol.png';
import WalletImage from '../../assets/images/icons/wallet.png';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-item">
                    <div className="sss-unit">1</div>
                    <img src={CrystalImage} />
                    <div className="equal">=</div>
                    <div className="ether-unit">&nbsp;1&nbsp;</div>
                    <img src={EtherImage} />
                </div>
                <div className="header-item">
                    <div className="ether-price">Eth:$2,678.81</div>
                    <div className="ether-up-change" data-tip="Changes in the last 24 hours">(+2.27%)</div>
                    <div className="divider"></div>
                    <img src={GasImage} />
                    <div className="gas-unit">&nbsp;168&nbsp;Gwei</div>
                </div>
                <div className="connect">
                    <img src={WalletImage} />
                    <div className="wallet-label">Connect wallet</div>
                </div>
            </div>
            <ReactTooltip 
                backgroundColor="#57737A"
            />
        </div>
    );
}

export default Header;